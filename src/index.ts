export { BackstageClient, BackstageClientConfig, BackstageAPIError, API_DATED_VERSION } from './client';
export * from './generated/types';

// Embed session shapes, named as the spec names them (components.schemas in
// backstage-api/openapi.json). Defined here rather than re-exported from
// client.ts so the entry point survives a regeneration of the client, which
// carries no hand-written interfaces.
import type { components } from './generated/types';
/** Response of POST /embed/sessions (minted server-side with an organisation API key). */
export type EmbedSessionCreated = components['schemas']['EmbedSessionCreated'];
/** Response of GET /embed/sessions/current (the session behind a bearer token). */
export type CurrentEmbedSession = components['schemas']['CurrentEmbedSession'];
/** @deprecated Use EmbedSessionCreated (the spec's name). */
export type EmbedSession = EmbedSessionCreated;
/** @deprecated Use CurrentEmbedSession (the spec's name). */
export type EmbedSessionInfo = CurrentEmbedSession;
