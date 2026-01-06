[**@ticketlayer/backstage-sdk**](../README.md)

***

[@ticketlayer/backstage-sdk](../README.md) / BackstageClientConfig

# Interface: BackstageClientConfig

Defined in: [client.ts:168](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L168)

## Properties

### accessToken?

```ts
optional accessToken: string;
```

Defined in: [client.ts:181](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L181)

***

### authMode?

```ts
optional authMode: AuthMode;
```

Defined in: [client.ts:175](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L175)

Authentication mode:
- 'bearer': Use Authorization header with access/refresh tokens (default)
- 'cookie': Use HTTP-only cookies (for Next.js apps with OAuth)

***

### baseUrl

```ts
baseUrl: string;
```

Defined in: [client.ts:169](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L169)

***

### debug?

```ts
optional debug: boolean | DebugConfig;
```

Defined in: [client.ts:180](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L180)

Enable debug mode for logging all SDK operations.
Can be a boolean (enables all logging) or a DebugConfig object for fine-grained control.

***

### headers?

```ts
optional headers: Record<string, string>;
```

Defined in: [client.ts:200](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L200)

***

### onAuthFailure()?

```ts
optional onAuthFailure: () => Promise<boolean>;
```

Defined in: [client.ts:194](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L194)

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

Defined in: [client.ts:187](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L187)

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

Defined in: [client.ts:199](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L199)

Custom refresh endpoint.
Default: '/api/oauth/refresh' for cookie mode, '/v1/auth/refresh' for bearer mode

***

### refreshToken?

```ts
optional refreshToken: string;
```

Defined in: [client.ts:182](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L182)
