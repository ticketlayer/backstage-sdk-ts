# @ticketlayer/backstage

## 0.2.0

### Minor Changes

- ec4493f: Add the `@ticketlayer/backstage/embed` subpath: `createBackstageEmbed()` mounts Backstage widgets (events, event, orders, order) in an iframe authenticated by an embed session, resizes the frame, forwards `tl:event` / `tl:navigate` messages and refreshes the session on expiry. Bearer mode now accepts a token provider function and sends `X-Ticketlayer-Org` when `organisationSlug` is configured. New client methods: `embed.createSession`, `embed.currentSession`, `orders.resendConfirmation`.
- 71d1281: Regenerate the client from backstage-api spec 1.0.0 (dated version 2026-06-13): 4 added, 0 removed, 8 changed.

  - added: createPartnerAccount, createApiKey, listApiKeys, revokeApiKey
  - signature changed: createEmbedSession, getCurrentEmbedSession, createPaymentProvider, updatePaymentProvider, enableTicketlayerPay, getTicketlayerPay, linkStripeConnect, getPaymentProviderAccount

  TODO: confirm the bump level before merging. It was classified automatically from the generated method surface (added -> minor, removed -> major, otherwise patch); changes to response shapes inside the generated types are not inspected and may warrant a different level.

### Patch Changes

- 2eff9d8: Export the embed session types under the spec's names, `EmbedSessionCreated` and `CurrentEmbedSession`, from the package entry point; `EmbedSession` and `EmbedSessionInfo` remain as deprecated aliases.
- 4145334: Regenerate the client from backstage-api spec 1.0.0 (dated version 2026-06-13): 0 added, 0 removed, 0 changed.

  TODO: confirm the bump level before merging. It was classified automatically from the generated method surface (added -> minor, removed -> major, otherwise patch); changes to response shapes inside the generated types are not inspected and may warrant a different level.

## 0.1.1

Initial tracked version (published on npm under the previous name `@ticketlayer/backstage-sdk`). From here, releases are managed by changesets:
every change lands with a changeset, CI versions and publishes to npm with
a git tag, and entries below are generated automatically.
