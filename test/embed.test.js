// Tests the built embed loader (dist/embed/) - the artifact consumers import
// as @ticketlayer/backstage/embed. Run with: npm run build && node --test test/
//
// Covers the pure parts: widget paths, the iframe URL builder and the
// validation of messages posted back by the widget.

const test = require('node:test');
const assert = require('node:assert');
const { widgetPath, buildEmbedUrl, originOf, parseWidgetMessage, buildSessionMessage } = require('../dist/embed/helpers.js');
const embed = require('../dist/embed/index.js');

test('the subpath re-exports the loader and helpers', () => {
  assert.strictEqual(typeof embed.createBackstageEmbed, 'function');
  assert.strictEqual(embed.widgetPath, widgetPath);
  assert.strictEqual(embed.EMBED_PROTOCOL_VERSION, 1);
});

test('widgetPath maps every widget to its /embed route', () => {
  assert.strictEqual(widgetPath('events'), '/embed/events');
  assert.strictEqual(widgetPath('events', { action: 'new' }), '/embed/events/new');
  assert.strictEqual(widgetPath('event', { id: 'evt_1' }), '/embed/events/evt_1');
  assert.strictEqual(widgetPath('event', { id: 'evt_1', tab: 'details' }), '/embed/events/evt_1');
  assert.strictEqual(widgetPath('event', { id: 'evt_1', tab: 'tickets' }), '/embed/events/evt_1/tickets');
  assert.strictEqual(widgetPath('event', { id: 'evt_1', tab: 'occurrences' }), '/embed/events/evt_1/occurrences');
  assert.strictEqual(widgetPath('orders'), '/embed/orders');
  assert.strictEqual(widgetPath('order', { id: 'ord_1' }), '/embed/orders/ord_1');
});

test('widgetPath encodes ids and rejects a missing id', () => {
  assert.strictEqual(widgetPath('event', { id: 'a/b c' }), '/embed/events/a%2Fb%20c');
  assert.throws(() => widgetPath('event'), /params\.id/);
  assert.throws(() => widgetPath('order', {}), /params\.id/);
  assert.throws(() => widgetPath('nope'), /Unknown widget/);
});

test('buildEmbedUrl joins the base URL, path and encoded query', () => {
  const url = buildEmbedUrl({
    baseUrl: 'https://backstage.example.com/',
    widget: 'order',
    params: { id: 'ord_1' },
    session: 'eyJ.a+b/c=',
    parentOrigin: 'https://lorc.rowbot.app',
  });
  assert.strictEqual(
    url,
    'https://backstage.example.com/embed/orders/ord_1?session=eyJ.a%2Bb%2Fc%3D&parent_origin=https%3A%2F%2Florc.rowbot.app'
  );
});

test('originOf keeps only http(s) origins', () => {
  assert.strictEqual(originOf('https://backstage.example.com/some/path'), 'https://backstage.example.com');
  assert.strictEqual(originOf('http://localhost:3502'), 'http://localhost:3502');
  assert.strictEqual(originOf('javascript:alert(1)'), null);
  assert.strictEqual(originOf('not a url'), null);
});

const ORIGIN = 'https://backstage.example.com';

test('parseWidgetMessage accepts v1 messages from the widget origin only', () => {
  assert.deepStrictEqual(parseWidgetMessage({ type: 'tl:ready', version: 1 }, ORIGIN, ORIGIN), { type: 'tl:ready', version: 1 });
  assert.strictEqual(parseWidgetMessage({ type: 'tl:ready', version: 1 }, 'https://evil.example.com', ORIGIN), null);
  assert.strictEqual(parseWidgetMessage({ type: 'tl:ready' }, ORIGIN, ORIGIN), null);
  assert.strictEqual(parseWidgetMessage({ type: 'tl:ready', version: 2 }, ORIGIN, ORIGIN), null);
  assert.strictEqual(parseWidgetMessage('{"type":"tl:ready","version":1}', ORIGIN, ORIGIN), null);
  assert.strictEqual(parseWidgetMessage({ type: 'tl:complete', version: 1 }, ORIGIN, ORIGIN), null);
});

test('parseWidgetMessage validates each payload', () => {
  assert.deepStrictEqual(parseWidgetMessage({ type: 'tl:height', version: 1, height: 812.4 }, ORIGIN, ORIGIN), {
    type: 'tl:height',
    version: 1,
    height: 812.4,
  });
  assert.strictEqual(parseWidgetMessage({ type: 'tl:height', version: 1, height: '812' }, ORIGIN, ORIGIN), null);
  assert.strictEqual(parseWidgetMessage({ type: 'tl:height', version: 1, height: -1 }, ORIGIN, ORIGIN), null);

  assert.deepStrictEqual(
    parseWidgetMessage({ type: 'tl:navigate', version: 1, widget: 'event', params: { id: 'evt_1', n: 2 } }, ORIGIN, ORIGIN),
    { type: 'tl:navigate', version: 1, widget: 'event', params: { id: 'evt_1' } }
  );
  assert.strictEqual(parseWidgetMessage({ type: 'tl:navigate', version: 1, widget: 'customers' }, ORIGIN, ORIGIN), null);

  assert.deepStrictEqual(
    parseWidgetMessage({ type: 'tl:event', version: 1, name: 'event.created', payload: { id: 'evt_1' } }, ORIGIN, ORIGIN),
    { type: 'tl:event', version: 1, name: 'event.created', payload: { id: 'evt_1' } }
  );
  assert.strictEqual(parseWidgetMessage({ type: 'tl:event', version: 1, name: '' }, ORIGIN, ORIGIN), null);

  assert.deepStrictEqual(
    parseWidgetMessage({ type: 'tl:error', version: 1, code: 'load-failed', message: 'x' }, ORIGIN, ORIGIN),
    { type: 'tl:error', version: 1, code: 'load-failed', message: 'x' }
  );
  assert.strictEqual(parseWidgetMessage({ type: 'tl:error', version: 1, code: 'load-failed' }, ORIGIN, ORIGIN), null);

  assert.deepStrictEqual(parseWidgetMessage({ type: 'tl:session-expired', version: 1, reason: 'expired' }, ORIGIN, ORIGIN), {
    type: 'tl:session-expired',
    version: 1,
    reason: 'expired',
  });
});

test('buildSessionMessage wraps a token in the v1 envelope', () => {
  assert.deepStrictEqual(buildSessionMessage('tok'), { type: 'tl:session', version: 1, token: 'tok' });
  assert.throws(() => buildSessionMessage(''), /token is required/);
});
