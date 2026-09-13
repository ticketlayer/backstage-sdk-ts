# @ticketlayer/backstage-sdk

## 0.2.0

### Minor Changes

- ec4493f: Add the `@ticketlayer/backstage/embed` subpath: `createBackstageEmbed()` mounts Backstage widgets (events, event, orders, order) in an iframe authenticated by an embed session, resizes the frame, forwards `tl:event` / `tl:navigate` messages and refreshes the session on expiry. Bearer mode now accepts a token provider function and sends `X-Ticketlayer-Org` when `organisationSlug` is configured. New client methods: `embed.createSession`, `embed.currentSession`, `orders.resendConfirmation`.

## 0.1.1

Initial tracked version. From here, releases are managed by changesets:
every change lands with a changeset, CI versions and publishes to npm with
a git tag, and entries below are generated automatically.
