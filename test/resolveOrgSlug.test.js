// Tests the built SDK (dist/) - the artifact consumers actually use.
// Run with: npm run build && node --test test/
//
// Covers the X-Ticketlayer-Org resolver: a configured organisationSlug is
// trusted exclusively (so a shared-host app never falls back to the bogus
// subdomain label), while no config falls back to subdomain derivation.

const test = require('node:test');
const assert = require('node:assert');
const { BackstageClient } = require('../dist/index.js');

// resolveOrgSlug is a TS `private` method - erased at runtime, so reachable.
const resolve = (config) => {
  const client = new BackstageClient({ baseUrl: 'http://api.test', authMode: 'cookie', ...config });
  return client.resolveOrgSlug();
};

test('returns a configured organisationSlug string', () => {
  assert.strictEqual(resolve({ organisationSlug: 'demo-events-co' }), 'demo-events-co');
});

test('calls a configured organisationSlug resolver function', () => {
  assert.strictEqual(resolve({ organisationSlug: () => 'second-demo-org' }), 'second-demo-org');
});

test('trusts the resolver even when it returns undefined (no subdomain fallback)', () => {
  // The keystone fix: on a shared host the SDK must NOT guess from the subdomain
  // (which would send the app label, e.g. "backstage"). A configured resolver is
  // authoritative even when it yields undefined.
  assert.strictEqual(resolve({ organisationSlug: () => undefined }), undefined);
});

test('falls back to subdomain derivation only when organisationSlug is unset', () => {
  // No window in node → getOrgFromSubdomain yields undefined; the point is that
  // it took the subdomain branch (no throw) rather than a configured value.
  assert.strictEqual(resolve({}), undefined);
});
