/**
 * Embed loader - the pure parts.
 *
 * Everything here needs no DOM so it can be tested with node --test against
 * the built output: the widget -> path mapping, the iframe URL builder and the
 * validation of messages coming back from the widget. This file has no
 * imports on purpose.
 *
 * The widget side of the contract lives in backstage-app (src/lib/embed-contract.ts);
 * both carry protocol version 1.
 */

export const EMBED_PROTOCOL_VERSION = 1 as const;

export type EmbedWidget = 'events' | 'event' | 'orders' | 'order';

export interface EmbedWidgetParams {
  /** The events list; `action: 'new'` opens the create form instead. */
  events: { action?: 'new' };
  /** The event editor. `tab` picks the section; details is the default. */
  event: { id: string; tab?: 'details' | 'tickets' | 'occurrences' };
  /** The orders list. */
  orders: Record<string, never>;
  /** One order, with passes and the resend-confirmation action. */
  order: { id: string };
}

export interface EmbedWidgetTarget<W extends EmbedWidget = EmbedWidget> {
  widget: W;
  params?: EmbedWidgetParams[W];
}

/** Messages the widget posts to its host. Every one carries `version: 1`. */
export type WidgetMessage =
  | { type: 'tl:ready'; version: 1 }
  | { type: 'tl:height'; version: 1; height: number }
  | { type: 'tl:navigate'; version: 1; widget: EmbedWidget; params: Record<string, string> }
  | { type: 'tl:event'; version: 1; name: string; payload: unknown }
  | { type: 'tl:session-expired'; version: 1; reason?: string }
  | { type: 'tl:error'; version: 1; code: string; message: string };

/** The one message the host posts to the widget: a fresh session token. */
export interface SessionMessage {
  type: 'tl:session';
  version: 1;
  token: string;
}

const WIDGET_TYPES = new Set(['tl:ready', 'tl:height', 'tl:navigate', 'tl:event', 'tl:session-expired', 'tl:error']);
const WIDGETS = new Set<string>(['events', 'event', 'orders', 'order']);

function segment(value: string): string {
  return encodeURIComponent(value);
}

/** The path under `/embed` that renders a widget with the given params. */
export function widgetPath<W extends EmbedWidget>(widget: W, params?: EmbedWidgetParams[W]): string {
  switch (widget) {
    case 'events': {
      const p = (params ?? {}) as EmbedWidgetParams['events'];
      return p.action === 'new' ? '/embed/events/new' : '/embed/events';
    }
    case 'event': {
      const p = params as EmbedWidgetParams['event'] | undefined;
      if (!p || !p.id) throw new Error('The event widget needs params.id');
      const base = `/embed/events/${segment(p.id)}`;
      return p.tab && p.tab !== 'details' ? `${base}/${p.tab}` : base;
    }
    case 'orders':
      return '/embed/orders';
    case 'order': {
      const p = params as EmbedWidgetParams['order'] | undefined;
      if (!p || !p.id) throw new Error('The order widget needs params.id');
      return `/embed/orders/${segment(p.id)}`;
    }
    default:
      throw new Error(`Unknown widget: ${String(widget)}`);
  }
}

export interface EmbedUrlInput<W extends EmbedWidget = EmbedWidget> extends EmbedWidgetTarget<W> {
  /** Origin (plus optional path prefix) of the Backstage app, e.g. https://backstage.ticketlayer.com */
  baseUrl: string;
  /** The embed session token minted by your server. */
  session: string;
  /** The host page's origin; the widget pins its postMessage calls to it. */
  parentOrigin: string;
}

/** Build the iframe URL: `${baseUrl}/embed/<widget path>?session=...&parent_origin=...`. */
export function buildEmbedUrl<W extends EmbedWidget>(input: EmbedUrlInput<W>): string {
  const base = input.baseUrl.replace(/\/+$/, '');
  const query =
    `session=${encodeURIComponent(input.session)}` +
    `&parent_origin=${encodeURIComponent(input.parentOrigin)}`;
  return `${base}${widgetPath(input.widget, input.params)}?${query}`;
}

/** The origin of a URL (scheme + host), or null when it is not an http(s) URL. */
export function originOf(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return null;
    return parsed.origin;
  } catch {
    return null;
  }
}

/**
 * Validate a `message` event from the iframe. Returns the typed message, or
 * null when the event did not come from the widget's origin, is not a v1
 * envelope, or has a malformed payload.
 */
export function parseWidgetMessage(
  data: unknown,
  eventOrigin: string,
  widgetOrigin: string
): WidgetMessage | null {
  if (eventOrigin !== widgetOrigin) return null;
  if (!data || typeof data !== 'object') return null;
  const m = data as Record<string, unknown>;
  if (m.version !== EMBED_PROTOCOL_VERSION) return null;
  if (typeof m.type !== 'string' || !WIDGET_TYPES.has(m.type)) return null;
  switch (m.type) {
    case 'tl:height':
      return typeof m.height === 'number' && Number.isFinite(m.height) && m.height >= 0
        ? { type: 'tl:height', version: 1, height: m.height }
        : null;
    case 'tl:navigate': {
      if (typeof m.widget !== 'string' || !WIDGETS.has(m.widget)) return null;
      const params: Record<string, string> = {};
      if (m.params && typeof m.params === 'object') {
        for (const [key, value] of Object.entries(m.params as Record<string, unknown>)) {
          if (typeof value === 'string') params[key] = value;
        }
      }
      return { type: 'tl:navigate', version: 1, widget: m.widget as EmbedWidget, params };
    }
    case 'tl:event':
      return typeof m.name === 'string' && m.name.length > 0
        ? { type: 'tl:event', version: 1, name: m.name, payload: m.payload }
        : null;
    case 'tl:error':
      return typeof m.code === 'string' && typeof m.message === 'string'
        ? { type: 'tl:error', version: 1, code: m.code, message: m.message }
        : null;
    case 'tl:session-expired':
      return { type: 'tl:session-expired', version: 1, ...(typeof m.reason === 'string' ? { reason: m.reason } : {}) };
    case 'tl:ready':
      return { type: 'tl:ready', version: 1 };
    default:
      return null;
  }
}

/** The envelope for handing the widget a refreshed session token. */
export function buildSessionMessage(token: string): SessionMessage {
  if (typeof token !== 'string' || token.length === 0) {
    throw new Error('A session token is required');
  }
  return { type: 'tl:session', version: EMBED_PROTOCOL_VERSION, token };
}
