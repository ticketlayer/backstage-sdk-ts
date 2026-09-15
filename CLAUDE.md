# CLAUDE.md - backstage-sdk-ts

## What this is

`@ticketlayer/backstage`, the TypeScript client for the Backstage API
(staff apps, partner servers, Backstage Go). `src/client.ts` and
`src/generated/types.ts` are generated from `backstage-api/openapi.json` by
`backstage-sdk-tooling`; the hand-written parts are `src/index.ts` (the
entry point) and `src/embed/` (the `@ticketlayer/backstage/embed` subpath
that mounts Backstage widgets in an iframe on a partner page).

## npm state

`@ticketlayer/backstage` is the published name. What is on npm today is the
old name, `@ticketlayer/backstage-sdk` 0.1.1; `@ticketlayer/backstage` has
not been published because `release.yml` skips publishing until the org
secret `NPM_TOKEN` is set. Our own apps consume it through `file:` links
(backstage-app, backstage-go) until then.

## Run

```bash
npm ci
npm run generate:client   # openapi.json -> src/generated/types.ts (gitignored; needed before the first build)
npm run build             # prebuild writes src/version.ts from package.json, then tsc -> dist/
npm run docs:gen          # typedoc -> docs-output/ (generated; do not edit)
```

`openapi.json` is committed here as a copy of backstage-api's spec (pushed
by backstage-api's `api-spec.yml` on every merge to main). To regenerate the
client itself, run the generator from a `backstage-sdk-tooling` checkout:

```bash
cd ../backstage-sdk-tooling && SPEC_PATH=../backstage-api/openapi.json SDK_TS_PATH=../backstage-sdk-ts npm run generate
```

(`tt sdk local` does the same.) Never edit `src/client.ts` by hand.

## Test

```bash
npm test   # builds, then node --test test/*.test.js against dist/
```

The tests cover bearer mode with a token provider and `X-Ticketlayer-Org`
(`test/bearer.test.js`), org slug resolution (`test/resolveOrgSlug.test.js`)
and the embed loader's pure helpers and message handling
(`test/embed.test.js`).

## How it releases

Changesets. Every change to the surface lands with a changeset
(`npx changeset`), and `.github/workflows/release.yml` on push to `main`
regenerates `src/generated/types.ts` from backstage-api's current spec,
builds, tests, then runs `changesets/action`: while unreleased changesets
exist it keeps the "Release @ticketlayer/backstage" pull request up to date;
merging that publishes to npm with provenance (`id-token: write`,
`NPM_CONFIG_PROVENANCE`) and tags the release. Automated regenerations from
`backstage-sdk-tooling` arrive as pull requests carrying a changeset whose
bump level is classified from the method surface.

Every request carries `TL-Version: 2026-06-13` (`API_DATED_VERSION`, stamped
from the spec's `x-tl-version` at generation) so the API keeps serving that
dated behaviour, and the `ticketlayer` block in `package.json` records the
spec version, dated API version and generator each release was built from.

## Env names

None. The client is configured in code (`BackstageClientConfig`: `baseUrl`,
`authMode` `'bearer' | 'cookie'`, `accessToken` (string or resolver),
`organisationSlug`, `onTokenRefresh`, `onAuthFailure`, `refreshEndpoint`,
`headers`, `debug`). The release workflow needs the org secrets `NPM_TOKEN`
and `DEPLOYMENT_REPO_TOKEN`.

## Conventions

- Plain hyphens only; no em dashes or en dashes anywhere.
- Generated files (`src/client.ts`, `src/generated/`, `src/version.ts`,
  `docs-output/`) are never edited by hand.
- A changeset for every change to the exported surface, including
  regenerations.
- `src/index.ts` names the embed session types as the spec names them
  (`EmbedSessionCreated`, `CurrentEmbedSession`, from `components.schemas`);
  `EmbedSession` and `EmbedSessionInfo` are deprecated aliases kept for
  existing imports.
- Known drift: the committed `src/client.ts` carries hand edits that a
  regeneration removes (the `accessToken` resolver, `X-Ticketlayer-Org` in
  bearer mode, the `embed.createSession` / `embed.currentSession` group;
  the template emits `embedSessions.create` / `embedSessions.current`,
  `partners.*`, `apiKeys.*` and a `TL-Client` header). Those features
  belong in `backstage-sdk-tooling`'s template before the next regeneration
  is merged, or the regeneration PR will remove them.

## Pointers

- Vault `architecture/sdk-architecture.md`: why the client is a projection
  of the contract, the packages and what is on npm.
- Vault `architecture/versioning-and-releases.md`: dated versions,
  changesets, provenance.
- `README.md` here: the embed contract (widgets, messages, session refresh)
  as Rowbot uses it.
- `backstage-api/README.md` "Partner integration": organisation API keys
  and embed sessions on the API side.
