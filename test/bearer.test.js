// Tests the built SDK (dist/) - the artifact consumers actually use.
// Run with: npm run build && node --test test/
//
// Covers bearer mode with a token PROVIDER: the resolver is read on every
// request (a rotated token is picked up without recreating the client) and an
// explicitly configured organisationSlug is sent as X-Ticketlayer-Org.

const test = require('node:test');
const assert = require('node:assert');
const { BackstageClient } = require('../dist/index.js');

// Capture the fetch calls the SDK makes; answer with an empty JSend success.
function withFetch(fn) {
  const calls = [];
  const original = globalThis.fetch;
  globalThis.fetch = async (url, init) => {
    calls.push({ url, init });
    return {
      ok: true,
      status: 200,
      json: async () => ({ status: 'success', data: { user: { id: 'usr_1' } } }),
    };
  };
  return fn(calls).finally(() => {
    globalThis.fetch = original;
  });
}

test('a token provider is resolved on every request', () =>
  withFetch(async (calls) => {
    let token = 'first';
    const client = new BackstageClient({
      baseUrl: 'http://api.test',
      authMode: 'bearer',
      accessToken: () => token,
      organisationSlug: 'lorc',
    });

    await client.me.current();
    token = 'second';
    await client.me.current();

    assert.strictEqual(calls.length, 2);
    assert.strictEqual(calls[0].init.headers['Authorization'], 'Bearer first');
    assert.strictEqual(calls[1].init.headers['Authorization'], 'Bearer second');
    assert.strictEqual(calls[0].init.headers['X-Ticketlayer-Org'], 'lorc');
    assert.strictEqual(calls[0].url, 'http://api.test/v1/me');
    // Bearer mode never sends cookies.
    assert.strictEqual(calls[0].init.credentials, undefined);
    assert.strictEqual(client.getAccessToken(), 'second');
  }));

test('a provider returning undefined sends no Authorization header', () =>
  withFetch(async (calls) => {
    const client = new BackstageClient({ baseUrl: 'http://api.test', accessToken: () => undefined });
    await client.me.current();
    assert.strictEqual(calls[0].init.headers['Authorization'], undefined);
  }));

test('bearer mode without organisationSlug sends no org header (no subdomain guessing)', () =>
  withFetch(async (calls) => {
    const client = new BackstageClient({ baseUrl: 'http://api.test', accessToken: 'static' });
    await client.me.current();
    assert.strictEqual(calls[0].init.headers['Authorization'], 'Bearer static');
    assert.strictEqual(calls[0].init.headers['X-Ticketlayer-Org'], undefined);
  }));

test('the embed session methods hit /embed/sessions', () =>
  withFetch(async (calls) => {
    const client = new BackstageClient({ baseUrl: 'http://api.test', accessToken: 'tok', organisationSlug: 'lorc' });
    await client.embed.currentSession();
    await client.embed.createSession({ accountId: 'acc_1', scopes: ['events.read'] });
    assert.strictEqual(calls[0].url, 'http://api.test/v1/embed/sessions/current');
    assert.strictEqual(calls[1].url, 'http://api.test/v1/embed/sessions');
    assert.strictEqual(calls[1].init.method, 'POST');
    assert.deepStrictEqual(JSON.parse(calls[1].init.body), { accountId: 'acc_1', scopes: ['events.read'] });
  }));
