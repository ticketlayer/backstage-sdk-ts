[**@ticketlayer/backstage-sdk**](../README.md)

***

[@ticketlayer/backstage-sdk](../README.md) / BackstageClientConfig

# Interface: BackstageClientConfig

Defined in: [client.ts:229](https://github.com/ticketlayer/backstage-sdk-ts/blob/0100185a818fc71675f9b834ebda1549f01396de/src/client.ts#L229)

## Properties

### accessToken?

```ts
optional accessToken: string;
```

Defined in: [client.ts:242](https://github.com/ticketlayer/backstage-sdk-ts/blob/0100185a818fc71675f9b834ebda1549f01396de/src/client.ts#L242)

***

### authMode?

```ts
optional authMode: AuthMode;
```

Defined in: [client.ts:236](https://github.com/ticketlayer/backstage-sdk-ts/blob/0100185a818fc71675f9b834ebda1549f01396de/src/client.ts#L236)

Authentication mode:
- 'bearer': Use Authorization header with access/refresh tokens (default)
- 'cookie': Use HTTP-only cookies (for Next.js apps with OAuth)

***

### baseUrl

```ts
baseUrl: string;
```

Defined in: [client.ts:230](https://github.com/ticketlayer/backstage-sdk-ts/blob/0100185a818fc71675f9b834ebda1549f01396de/src/client.ts#L230)

***

### debug?

```ts
optional debug: boolean | DebugConfig;
```

Defined in: [client.ts:241](https://github.com/ticketlayer/backstage-sdk-ts/blob/0100185a818fc71675f9b834ebda1549f01396de/src/client.ts#L241)

Enable debug mode for logging all SDK operations.
Can be a boolean (enables all logging) or a DebugConfig object for fine-grained control.

***

### headers?

```ts
optional headers: Record<string, string>;
```

Defined in: [client.ts:261](https://github.com/ticketlayer/backstage-sdk-ts/blob/0100185a818fc71675f9b834ebda1549f01396de/src/client.ts#L261)

***

### onAuthFailure()?

```ts
optional onAuthFailure: () => Promise<boolean>;
```

Defined in: [client.ts:255](https://github.com/ticketlayer/backstage-sdk-ts/blob/0100185a818fc71675f9b834ebda1549f01396de/src/client.ts#L255)

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

Defined in: [client.ts:248](https://github.com/ticketlayer/backstage-sdk-ts/blob/0100185a818fc71675f9b834ebda1549f01396de/src/client.ts#L248)

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

Defined in: [client.ts:260](https://github.com/ticketlayer/backstage-sdk-ts/blob/0100185a818fc71675f9b834ebda1549f01396de/src/client.ts#L260)

Custom refresh endpoint.
Default: '/api/oauth/refresh' for cookie mode, '/v1/auth/refresh' for bearer mode

***

### refreshToken?

```ts
optional refreshToken: string;
```

Defined in: [client.ts:243](https://github.com/ticketlayer/backstage-sdk-ts/blob/0100185a818fc71675f9b834ebda1549f01396de/src/client.ts#L243)
