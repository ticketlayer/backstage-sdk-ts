[**@ticketlayer/backstage**](../README.md)

***

[@ticketlayer/backstage](../README.md) / BackstageAPIError

# Class: BackstageAPIError

Defined in: [client.ts:202](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L202)

Custom error class for API errors with error code support

## Extends

- `Error`

## Constructors

### Constructor

```ts
new BackstageAPIError(
   message: string, 
   code: string, 
   statusCode: number): BackstageAPIError;
```

Defined in: [client.ts:206](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L206)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `code` | `string` |
| `statusCode` | `number` |

#### Returns

`BackstageAPIError`

#### Overrides

```ts
Error.constructor
```

## Methods

### isAuthenticationError()

```ts
isAuthenticationError(): boolean;
```

Defined in: [client.ts:223](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L223)

Check if this is an authentication error

#### Returns

`boolean`

***

### isNotFound()

```ts
isNotFound(): boolean;
```

Defined in: [client.ts:237](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L237)

Check if this is a not found error

#### Returns

`boolean`

***

### isPermissionDenied()

```ts
isPermissionDenied(): boolean;
```

Defined in: [client.ts:216](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L216)

Check if this is a permission denied error

#### Returns

`boolean`

***

### isSessionExpired()

```ts
isSessionExpired(): boolean;
```

Defined in: [client.ts:230](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L230)

Check if this is a session expired error (401 that couldn't be refreshed)

#### Returns

`boolean`

***

### isValidationError()

```ts
isValidationError(): boolean;
```

Defined in: [client.ts:244](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L244)

Check if this is a validation error

#### Returns

`boolean`

## Properties

### code

```ts
readonly code: string;
```

Defined in: [client.ts:203](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L203)

***

### statusCode

```ts
readonly statusCode: number;
```

Defined in: [client.ts:204](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L204)
