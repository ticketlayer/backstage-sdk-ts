[**@ticketlayer/backstage**](../README.md)

***

[@ticketlayer/backstage](../README.md) / BackstageClientConfig

# Interface: BackstageClientConfig

Defined in: [client.ts:276](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L276)

## Properties

### accessToken?

```ts
optional accessToken: string;
```

Defined in: [client.ts:289](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L289)

***

### authMode?

```ts
optional authMode: AuthMode;
```

Defined in: [client.ts:283](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L283)

Authentication mode:
- 'bearer': Use Authorization header with access/refresh tokens (default)
- 'cookie': Use HTTP-only cookies (for Next.js apps with OAuth)

***

### baseUrl

```ts
baseUrl: string;
```

Defined in: [client.ts:277](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L277)

***

### debug?

```ts
optional debug: boolean | DebugConfig;
```

Defined in: [client.ts:288](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L288)

Enable debug mode for logging all SDK operations.
Can be a boolean (enables all logging) or a DebugConfig object for fine-grained control.

***

### headers?

```ts
optional headers: Record<string, string>;
```

Defined in: [client.ts:308](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L308)

***

### onAuthFailure()?

```ts
optional onAuthFailure: () => Promise<boolean>;
```

Defined in: [client.ts:302](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L302)

Called when a 401 is received. Return true if refresh was successful and the request should be retried.
If not provided, default behaviour depends on authMode:
- cookie mode: calls refreshEndpoint automatically
- bearer mode: uses refreshToken if available

#### Returns

`Promise`\<`boolean`\>

***

### onTokenRefresh()?

```ts
optional onTokenRefresh: (accessToken: string, refreshToken: string) => void | Promise<void>;
```

Defined in: [client.ts:295](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L295)

Called after successful token refresh (bearer mode only).
Use this to persist the new tokens.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `accessToken` | `string` |
| `refreshToken` | `string` |

#### Returns

`void` \| `Promise`\<`void`\>

***

### refreshEndpoint?

```ts
optional refreshEndpoint: string;
```

Defined in: [client.ts:307](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L307)

Custom refresh endpoint.
Default: '/api/oauth/refresh' for cookie mode, '/v1/auth/refresh' for bearer mode

***

### refreshToken?

```ts
optional refreshToken: string;
```

Defined in: [client.ts:290](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L290)
