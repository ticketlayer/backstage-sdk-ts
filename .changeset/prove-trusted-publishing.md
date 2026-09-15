---
'@ticketlayer/backstage': patch
---

Prove the trusted-publishing path end to end.

The release workflow no longer has an NPM_TOKEN, and its logs confirm
changesets picks the OIDC path ("No NPM_TOKEN found, but OIDC is available -
using npm trusted publishing"). What that does not prove is that npm *accepts*
the exchange: every run so far has had nothing to publish, so the registry has
never been asked. If the trusted publisher is not registered for this package,
the first real release fails with an auth error.

This changeset exists to be that first real release. No source change.
