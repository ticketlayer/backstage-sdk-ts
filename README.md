# backstage-sdk-ts

TypeScript SDK for the Backstage API.

> **Note:** This package was renamed from `@ticketlayer/backstage-sdk` to
> `@ticketlayer/backstage`. Update any imports and dependency entries
> accordingly - `@ticketlayer/backstage-sdk` is no longer published.

## Embedding Backstage widgets in your app

`@ticketlayer/backstage/embed` mounts Backstage widgets (the events list, an
event editor, the orders list, an order) in an iframe on your own page. Your
users never log in to Backstage: your server mints an **embed session** for
one account with your organisation API key, and the widget runs as that
account with the scopes you chose. The subpath is framework-free and is not
loaded by the main entry.

The flow, as Rowbot uses it (one Ticketlayer organisation, one account per
club):

1. **Server: mint a session.** With the organisation API key, call
   `POST /embed/sessions` for the club's account. Keep the API key on the
   server; only the short-lived session token reaches the browser.

   ```ts
   import { BackstageClient } from '@ticketlayer/backstage';

   const backstage = new BackstageClient({
     baseUrl: 'https://api.backstage.ticketlayer.com',
     accessToken: process.env.TICKETLAYER_ORG_API_KEY,
     organisationSlug: 'rowbot',
   });

   // e.g. GET /api/ticketing/session on your server
   const { token, expiresAt } = await backstage.embed.createSession({
     accountId: club.ticketlayerAccountId,
     scopes: ['events.read', 'events.write', 'orders.read'],
   });
   ```

2. **Page: mount a widget.** Hand the token to the loader; it builds
   `${baseUrl}/embed/<widget>?session=...&parent_origin=<your origin>`, accepts
   messages only from the Backstage origin, and sizes the frame to its content.

   ```ts
   import { createBackstageEmbed } from '@ticketlayer/backstage/embed';

   const embed = createBackstageEmbed({
     baseUrl: 'https://backstage.ticketlayer.com',
     session: token,
     // Called when the widget reports the session expired: mint a new one.
     sessionProvider: async () => (await fetch('/api/ticketing/session').then((r) => r.json())).token,
     onNavigate: (widget, params) => history.replaceState(null, '', `/ticketing/${widget}/${params.id ?? ''}`),
     onEvent: (name, payload) => console.log(name, payload), // event.created, order.refund_requested, ...
     onError: (err) => console.warn(err.code, err.message),
   });

   embed.mount(document.getElementById('ticketing')!, { widget: 'events' });
   // later: embed.navigate('order', { id: 'ord_123' }); embed.unmount();
   ```

3. **Refresh on expiry.** Sessions are short-lived. When the widget gets a 401
   (or its token's `exp` passes) it posts `tl:session-expired`; the loader calls
   your `sessionProvider`, posts the new token back as `tl:session`, and the
   widget resumes where it was. Without a provider, `onSessionExpired` fires
   and the widget shows its expired state.

Widgets and params: `events` (`{ action?: 'new' }`), `event`
(`{ id, tab?: 'details' | 'tickets' | 'occurrences' }`), `orders`, `order`
(`{ id }`). Actions the session's scopes do not allow (for example editing
with only `events.read`) are hidden in the widget.

Messages from the widget (all carry `version: 1`): `tl:ready`, `tl:height`
`{ height }`, `tl:navigate` `{ widget, params }`, `tl:event` `{ name, payload }`,
`tl:session-expired`, `tl:error` `{ code, message }`. The only inbound message
is `tl:session` `{ token }`. The Backstage deployment must list your origin in
its `EMBED_FRAME_ANCESTORS` for the frame to load.

React example (the loader owns the iframe; React owns the container):

```tsx
import { useEffect, useRef } from 'react';
import { createBackstageEmbed, type EmbedWidgetTarget } from '@ticketlayer/backstage/embed';

export function BackstageWidget({ token, target }: { token: string; target: EmbedWidgetTarget }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const embed = createBackstageEmbed({
      baseUrl: 'https://backstage.ticketlayer.com',
      session: token,
      sessionProvider: () => fetch('/api/ticketing/session').then((r) => r.json()).then((s) => s.token),
    });
    embed.mount(ref.current, target);
    return () => embed.unmount();
  }, [token, target]);
  return <div ref={ref} />;
}
// <BackstageWidget token={token} target={{ widget: 'order', params: { id: 'ord_123' } }} />
```
