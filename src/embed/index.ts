/**
 * Embed loader for Backstage widgets: `@ticketlayer/backstage/embed`.
 *
 * A partner page mounts a Backstage widget (events, one event, orders, one
 * order) in an iframe on its own page. The iframe is authenticated with an
 * EMBED SESSION token that the partner's server minted with its organisation
 * API key (POST /embed/sessions), so the partner's users never log in to
 * Backstage. The widget talks back with versioned `tl:*` messages; this
 * loader validates them against the Backstage origin, resizes the frame,
 * forwards domain events and refreshes the session when it expires.
 *
 * Framework-free. The pure parts are in ./helpers (tested with node --test).
 */

import {
  buildEmbedUrl,
  buildSessionMessage,
  originOf,
  parseWidgetMessage,
  type EmbedWidget,
  type EmbedWidgetParams,
  type EmbedWidgetTarget,
  type WidgetMessage,
} from './helpers';

export {
  EMBED_PROTOCOL_VERSION,
  buildEmbedUrl,
  buildSessionMessage,
  originOf,
  parseWidgetMessage,
  widgetPath,
} from './helpers';
export type {
  EmbedWidget,
  EmbedWidgetParams,
  EmbedWidgetTarget,
  EmbedUrlInput,
  SessionMessage,
  WidgetMessage,
} from './helpers';

export interface BackstageEmbedError {
  code: string;
  message: string;
}

export interface BackstageEmbedOptions {
  /** Origin of the Backstage app, e.g. https://backstage.ticketlayer.com */
  baseUrl: string;
  /** The embed session token your server minted for this user's account. */
  session: string;
  /**
   * Called when the widget reports its session has expired. Return a fresh
   * token (mint a new session on your server); it is posted to the widget,
   * which resumes where it was. Without it the widget stays on its expired
   * state and `onSessionExpired` is your only signal.
   */
  sessionProvider?: () => Promise<string> | string;
  /** Session expired and no provider was given, or the provider failed. */
  onSessionExpired?: () => void;
  /** Domain events from the widget: `event.created`, `order.refund_requested`, ... */
  onEvent?: (name: string, payload: unknown) => void;
  /** The user moved to another widget inside the frame (update your own URL). */
  onNavigate?: (widget: EmbedWidget, params: Record<string, string>) => void;
  onError?: (error: BackstageEmbedError) => void;
  /** Called once the widget has loaded its session. */
  onReady?: () => void;
  /** Initial iframe height in px, until the widget reports its own. Default 480. */
  initialHeight?: number;
}

export interface BackstageEmbed {
  /** Create the iframe inside `el` and start listening. Replaces a previous mount. */
  mount<W extends EmbedWidget>(el: HTMLElement, target: EmbedWidgetTarget<W>): HTMLIFrameElement;
  /** Load another widget in the mounted iframe. */
  navigate<W extends EmbedWidget>(widget: W, params?: EmbedWidgetParams[W]): void;
  /** Push a fresh session token to the widget (the loader does this itself via `sessionProvider`). */
  setSession(token: string): void;
  /** Remove the iframe and stop listening. */
  unmount(): void;
  /** The mounted iframe, if any. */
  readonly iframe: HTMLIFrameElement | null;
}

export function createBackstageEmbed(options: BackstageEmbedOptions): BackstageEmbed {
  const widgetOrigin = originOf(options.baseUrl);
  if (!widgetOrigin) {
    throw new Error(`createBackstageEmbed: baseUrl must be an http(s) URL, got "${options.baseUrl}"`);
  }

  let session = options.session;
  let iframe: HTMLIFrameElement | null = null;
  let listener: ((event: MessageEvent) => void) | null = null;
  let refreshing: Promise<void> | null = null;

  const parentOrigin = (): string => window.location.origin;

  const post = (message: unknown): void => {
    iframe?.contentWindow?.postMessage(message, widgetOrigin);
  };

  const setSession = (token: string): void => {
    session = token;
    post(buildSessionMessage(token));
  };

  // One refresh at a time: several 401s in the widget arrive as one expiry
  // message each, and every one must not mint its own session.
  const refresh = (): Promise<void> => {
    if (refreshing) return refreshing;
    refreshing = (async () => {
      if (!options.sessionProvider) {
        options.onSessionExpired?.();
        return;
      }
      try {
        const token = await options.sessionProvider();
        setSession(token);
      } catch (err) {
        options.onError?.({ code: 'session-refresh-failed', message: err instanceof Error ? err.message : String(err) });
        options.onSessionExpired?.();
      }
    })().finally(() => {
      refreshing = null;
    });
    return refreshing;
  };

  const handle = (message: WidgetMessage): void => {
    switch (message.type) {
      case 'tl:ready':
        options.onReady?.();
        break;
      case 'tl:height':
        if (iframe) iframe.style.height = `${Math.ceil(message.height)}px`;
        break;
      case 'tl:navigate':
        options.onNavigate?.(message.widget, message.params);
        break;
      case 'tl:event':
        options.onEvent?.(message.name, message.payload);
        break;
      case 'tl:session-expired':
        void refresh();
        break;
      case 'tl:error':
        options.onError?.({ code: message.code, message: message.message });
        break;
    }
  };

  const unmount = (): void => {
    if (listener) {
      window.removeEventListener('message', listener);
      listener = null;
    }
    iframe?.remove();
    iframe = null;
  };

  const mount: BackstageEmbed['mount'] = (el, target) => {
    unmount();
    const frame = document.createElement('iframe');
    frame.src = buildEmbedUrl({ baseUrl: options.baseUrl, session, parentOrigin: parentOrigin(), ...target });
    frame.title = 'Backstage';
    frame.style.width = '100%';
    frame.style.border = '0';
    frame.style.display = 'block';
    frame.style.height = `${options.initialHeight ?? 480}px`;
    frame.setAttribute('allow', 'clipboard-write');
    el.appendChild(frame);
    iframe = frame;

    listener = (event: MessageEvent) => {
      // Only the mounted frame's window, and only the Backstage origin.
      if (!iframe || event.source !== iframe.contentWindow) return;
      const message = parseWidgetMessage(event.data, event.origin, widgetOrigin);
      if (message) handle(message);
    };
    window.addEventListener('message', listener);
    return frame;
  };

  const navigate: BackstageEmbed['navigate'] = (widget, params) => {
    if (!iframe) throw new Error('navigate() called before mount()');
    iframe.src = buildEmbedUrl({ baseUrl: options.baseUrl, session, parentOrigin: parentOrigin(), widget, params });
  };

  return {
    mount,
    navigate,
    setSession,
    unmount,
    get iframe() {
      return iframe;
    },
  };
}
