[**@ticketlayer/backstage**](../README.md)

***

[@ticketlayer/backstage](../README.md) / BackstageClient

# Class: BackstageClient

Defined in: [client.ts:318](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L318)

## Constructors

### Constructor

```ts
new BackstageClient(config: BackstageClientConfig): BackstageClient;
```

Defined in: [client.ts:330](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L330)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`BackstageClientConfig`](../interfaces/BackstageClientConfig.md) |

#### Returns

`BackstageClient`

## Methods

### clearAccessToken()

```ts
clearAccessToken(): void;
```

Defined in: [client.ts:384](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L384)

Clear the access token

#### Returns

`void`

***

### getAccessToken()

```ts
getAccessToken(): string | undefined;
```

Defined in: [client.ts:391](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L391)

Get the current access token

#### Returns

`string` \| `undefined`

***

### getRefreshToken()

```ts
getRefreshToken(): string | undefined;
```

Defined in: [client.ts:405](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L405)

Get the current refresh token

#### Returns

`string` \| `undefined`

***

### setAccessToken()

```ts
setAccessToken(token: string): void;
```

Defined in: [client.ts:377](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L377)

Set the access token for authenticated requests

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `token` | `string` |

#### Returns

`void`

***

### setRefreshToken()

```ts
setRefreshToken(token: string): void;
```

Defined in: [client.ts:398](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L398)

Set the refresh token

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `token` | `string` |

#### Returns

`void`

## Properties

### accounts

```ts
accounts: {
  create: (request: {
     name: string;
     status?: "active" | "inactive";
   }) => Promise<{
     createdAt: string;
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     status: "active" | "inactive";
     updatedAt: string;
  }>;
  delete: (id: string) => Promise<{
     id: string;
     success: boolean;
  }>;
  get: (id: string) => Promise<{
     createdAt: string;
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     status: "active" | "inactive";
     updatedAt: string;
  }>;
  list: (options?: {
     search?: string;
     status?: "active" | "inactive";
   }) => Promise<{
     createdAt: string;
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     status: "active" | "inactive";
     updatedAt: string;
  }[]>;
  update: (id: string, request: {
     name?: string;
     status?: "active" | "inactive";
   }) => Promise<{
     createdAt: string;
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     status: "active" | "inactive";
     updatedAt: string;
  }>;
};
```

Defined in: [client.ts:841](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L841)

Accounts methods

#### create()

```ts
create: (request: {
  name: string;
  status?: "active" | "inactive";
}) => Promise<{
  createdAt: string;
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  status: "active" | "inactive";
  updatedAt: string;
}>;
```

Create account
Create a new account in the organisation

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `name`: `string`; `status?`: `"active"` \| `"inactive"`; \} |
| `request.name` | `string` |
| `request.status?` | `"active"` \| `"inactive"` |

##### Returns

`Promise`\<\{
  `createdAt`: `string`;
  `id`: `string`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `status`: `"active"` \| `"inactive"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

createAccount

#### delete()

```ts
delete: (id: string) => Promise<{
  id: string;
  success: boolean;
}>;
```

Delete account
Delete an account (soft delete)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

##### Returns

`Promise`\<\{
  `id`: `string`;
  `success`: `boolean`;
\}\>

##### Operation Id

deleteAccount

#### get()

```ts
get: (id: string) => Promise<{
  createdAt: string;
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  status: "active" | "inactive";
  updatedAt: string;
}>;
```

Get account
Get a specific account by ID

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

##### Returns

`Promise`\<\{
  `createdAt`: `string`;
  `id`: `string`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `status`: `"active"` \| `"inactive"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

getAccount

#### list()

```ts
list: (options?: {
  search?: string;
  status?: "active" | "inactive";
}) => Promise<{
  createdAt: string;
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  status: "active" | "inactive";
  updatedAt: string;
}[]>;
```

List accounts
List all accounts for the organisation with optional filtering

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `search?`: `string`; `status?`: `"active"` \| `"inactive"`; \} |
| `options.search?` | `string` |
| `options.status?` | `"active"` \| `"inactive"` |

##### Returns

`Promise`\<\{
  `createdAt`: `string`;
  `id`: `string`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `status`: `"active"` \| `"inactive"`;
  `updatedAt`: `string`;
\}[]\>

##### Operation Id

listAccounts

#### update()

```ts
update: (id: string, request: {
  name?: string;
  status?: "active" | "inactive";
}) => Promise<{
  createdAt: string;
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  status: "active" | "inactive";
  updatedAt: string;
}>;
```

Update account
Update an existing account

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `request` | \{ `name?`: `string`; `status?`: `"active"` \| `"inactive"`; \} |
| `request.name?` | `string` |
| `request.status?` | `"active"` \| `"inactive"` |

##### Returns

`Promise`\<\{
  `createdAt`: `string`;
  `id`: `string`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `status`: `"active"` \| `"inactive"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

updateAccount

***

### authentication

```ts
authentication: {
  federate: (request: {
     token: string;
   }) => Promise<{
     accessToken: string;
     refreshToken: string;
     user: {
        email: string;
        firstName?: string;
        id: string;
        lastName?: string;
     };
  }>;
  login: (request: {
     email: string;
     password: string;
   }) => Promise<{
     accessToken: string;
     refreshToken: string;
     user: {
        email: string;
        firstName?: string;
        id: string;
        lastName?: string;
     };
  }>;
  redeem: (request: {
     code: string;
     password: string;
   }) => Promise<{
     accessToken: string;
     refreshToken: string;
     user: {
        email: string;
        firstName?: string;
        id: string;
        lastName?: string;
     };
  }>;
  refresh: (request: {
     refreshToken: string;
   }) => Promise<{
     accessToken: string;
     refreshToken: string;
  }>;
};
```

Defined in: [client.ts:669](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L669)

Authentication methods

#### federate()

```ts
federate: (request: {
  token: string;
}) => Promise<{
  accessToken: string;
  refreshToken: string;
  user: {
     email: string;
     firstName?: string;
     id: string;
     lastName?: string;
  };
}>;
```

Federate user to organisation
Exchange a Stagedoor JWT token for API access and refresh tokens

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | \{ `token`: `string`; \} | - |
| `request.token` | `string` | **Description** Stagedoor JWT token to federate **Example** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |

##### Returns

`Promise`\<\{
  `accessToken`: `string`;
  `refreshToken`: `string`;
  `user`: \{
     `email`: `string`;
     `firstName?`: `string`;
     `id`: `string`;
     `lastName?`: `string`;
  \};
\}\>

##### Operation Id

federate

#### login()

```ts
login: (request: {
  email: string;
  password: string;
}) => Promise<{
  accessToken: string;
  refreshToken: string;
  user: {
     email: string;
     firstName?: string;
     id: string;
     lastName?: string;
  };
}>;
```

User login
Authenticate a user with email and password, returns access and refresh tokens

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | \{ `email`: `string`; `password`: `string`; \} | - |
| `request.email` | `string` | Format: email **Description** User email address **Example** `user@example.com` |
| `request.password` | `string` | **Description** User password **Example** `password123` |

##### Returns

`Promise`\<\{
  `accessToken`: `string`;
  `refreshToken`: `string`;
  `user`: \{
     `email`: `string`;
     `firstName?`: `string`;
     `id`: `string`;
     `lastName?`: `string`;
  \};
\}\>

##### Operation Id

login

#### redeem()

```ts
redeem: (request: {
  code: string;
  password: string;
}) => Promise<{
  accessToken: string;
  refreshToken: string;
  user: {
     email: string;
     firstName?: string;
     id: string;
     lastName?: string;
  };
}>;
```

Redeem invitation
Redeem an invitation code and set up a new user account

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | \{ `code`: `string`; `password`: `string`; \} | - |
| `request.code` | `string` | **Description** Invitation code received via email **Example** `INV-1234567890` |
| `request.password` | `string` | **Description** New password for the account (minimum 8 characters) **Example** `securePassword123` |

##### Returns

`Promise`\<\{
  `accessToken`: `string`;
  `refreshToken`: `string`;
  `user`: \{
     `email`: `string`;
     `firstName?`: `string`;
     `id`: `string`;
     `lastName?`: `string`;
  \};
\}\>

##### Operation Id

redeem

#### refresh()

```ts
refresh: (request: {
  refreshToken: string;
}) => Promise<{
  accessToken: string;
  refreshToken: string;
}>;
```

Refresh access token
Exchange a refresh token for a new access token and refresh token

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | \{ `refreshToken`: `string`; \} | - |
| `request.refreshToken` | `string` | **Description** Refresh token from previous login **Example** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |

##### Returns

`Promise`\<\{
  `accessToken`: `string`;
  `refreshToken`: `string`;
\}\>

##### Operation Id

refresh

***

### billing

```ts
billing: {
  cancelSubscription: (subscriptionId: string) => Promise<{
     cancelledAt: string | null;
     createdAt: string;
     credits: number;
     currency: string;
     currentPeriodEnd: string | null;
     currentPeriodStart: string | null;
     endedAt: string | null;
     id: string;
     interval: "month" | "year";
     organisationId: string;
     packageId: string;
     price: string;
     status: "active" | "cancelled" | "paused" | "past_due" | "ended";
     updatedAt: string;
  }>;
  canSell: (organisationId: string) => Promise<{
     canSell: boolean;
     currentBalance: number;
     reason: string | null;
  }>;
  createPurchase: (request: {
     billingAddress?: {
        city: string;
        country: string;
        line1: string;
        line2?: string;
        name?: string;
        postal_code: string;
        state?: string;
     };
     currency?: string;
     email?: string;
     packageId: string;
     paymentMethodId: string;
   }) => Promise<{
     invoice: {
        amountDue: string;
        amountPaid: string;
        createdAt: string;
        currency: string;
        dueDate: string | null;
        id: string;
        invoiceNumber: string;
        issueDate: string;
        organisationId: string;
        paidAt: string | null;
        pdfUrl: string | null;
        status: "draft" | "open" | "paid" | "void" | "uncollectible";
        subtotal: string;
        tax: string;
        total: string;
        type: "purchase" | "subscription" | "payg";
        updatedAt: string;
     };
     newBalance: number;
     payment: {
        amount: string;
        createdAt: string;
        currency: string;
        failedAt: string | null;
        failureCode: string | null;
        failureMessage: string | null;
        id: string;
        invoiceId: string | null;
        method: string | null;
        organisationId: string;
        paidAt: string | null;
        status: "cancelled" | "pending" | "succeeded" | "failed" | "refunded";
        updatedAt: string;
     };
     success: boolean;
     transaction: {
        amount: number;
        balanceAfter: number;
        balanceBefore: number;
        createdAt: string;
        description: string | null;
        id: string;
        invoiceId: string | null;
        orderId: string | null;
        organisationId: string;
        subscriptionId: string | null;
        type:   | "initial"
           | "purchase"
           | "subscription"
           | "ticket_sale"
           | "adjustment"
           | "refund";
     };
  }>;
  createSetupIntent: () => Promise<string>;
  createSubscription: (request: {
     currency?: string;
     email?: string;
     interval: "month" | "year";
     packageId: string;
     paymentMethodId: string;
   }) => Promise<{
     cancelledAt: string | null;
     createdAt: string;
     credits: number;
     currency: string;
     currentPeriodEnd: string | null;
     currentPeriodStart: string | null;
     endedAt: string | null;
     id: string;
     interval: "month" | "year";
     organisationId: string;
     packageId: string;
     price: string;
     status: "active" | "cancelled" | "paused" | "past_due" | "ended";
     updatedAt: string;
  }>;
  deletePaymentMethod: (paymentMethodId: string) => Promise<boolean>;
  getAutoTopup: () => Promise<
     | {
     attemptsToday: number;
     createdAt: string;
     enabled: boolean;
     id: string;
     lastAttemptAt: string | null;
     maxAttemptsPerDay: number;
     organisationId: string;
     thresholdCredits: number;
     topupPackageId: string;
     updatedAt: string;
   }
    | null>;
  getBalance: () => Promise<{
     balance: number;
     createdAt: string;
     id: string;
     isSuspended: boolean;
     lifetimeCredits: number;
     lifetimeUsed: number;
     organisationId: string;
     status: "healthy" | "low" | "depleted" | "negative" | "suspended";
     suspendedAt: string | null;
     suspendedReason: string | null;
     updatedAt: string;
  }>;
  getInvoice: (invoiceId: string) => Promise<{
     amountDue: string;
     amountPaid: string;
     createdAt: string;
     currency: string;
     dueDate: string | null;
     id: string;
     invoiceNumber: string;
     issueDate: string;
     organisationId: string;
     paidAt: string | null;
     pdfUrl: string | null;
     status: "draft" | "open" | "paid" | "void" | "uncollectible";
     subtotal: string;
     tax: string;
     total: string;
     type: "purchase" | "subscription" | "payg";
     updatedAt: string;
  }>;
  listInvoices: (options?: {
     limit?: string;
     page?: string;
     status?: string;
   }) => Promise<{
     amountDue: string;
     amountPaid: string;
     createdAt: string;
     currency: string;
     dueDate: string | null;
     id: string;
     invoiceNumber: string;
     issueDate: string;
     organisationId: string;
     paidAt: string | null;
     pdfUrl: string | null;
     status: "draft" | "open" | "paid" | "void" | "uncollectible";
     subtotal: string;
     tax: string;
     total: string;
     type: "purchase" | "subscription" | "payg";
     updatedAt: string;
  }[]>;
  listPackages: () => Promise<{
     baseCurrency: string;
     basePrice: string;
     credits: number;
     discountPercent: string;
     displayOrder: number;
     finalPrice: string;
     id: string;
     isActive: boolean;
     name: string;
  }[]>;
  listPaymentMethods: () => Promise<{
     card: {
        brand: string;
        expMonth: number;
        expYear: number;
        last4: string;
     };
     createdAt: string;
     id: string;
     isDefault: boolean;
     type: "card";
  }[]>;
  listPayments: (options?: {
     limit?: string;
     page?: string;
     status?: string;
   }) => Promise<{
     amount: string;
     createdAt: string;
     currency: string;
     failedAt: string | null;
     failureCode: string | null;
     failureMessage: string | null;
     id: string;
     invoiceId: string | null;
     method: string | null;
     organisationId: string;
     paidAt: string | null;
     status: "cancelled" | "pending" | "succeeded" | "failed" | "refunded";
     updatedAt: string;
  }[]>;
  listSubscriptions: () => Promise<{
     cancelledAt: string | null;
     createdAt: string;
     credits: number;
     currency: string;
     currentPeriodEnd: string | null;
     currentPeriodStart: string | null;
     endedAt: string | null;
     id: string;
     interval: "month" | "year";
     organisationId: string;
     packageId: string;
     price: string;
     status: "active" | "cancelled" | "paused" | "past_due" | "ended";
     updatedAt: string;
  }[]>;
  listTransactions: (options?: {
     limit?: string;
     page?: string;
     type?: string;
   }) => Promise<{
     amount: number;
     balanceAfter: number;
     balanceBefore: number;
     createdAt: string;
     description: string | null;
     id: string;
     invoiceId: string | null;
     orderId: string | null;
     organisationId: string;
     subscriptionId: string | null;
     type:   | "initial"
        | "purchase"
        | "subscription"
        | "ticket_sale"
        | "adjustment"
        | "refund";
  }[]>;
  savePaymentMethod: (request: {
     paymentMethodId: string;
     setAsDefault?: boolean;
   }) => Promise<{
     card: {
        brand: string;
        expMonth: number;
        expYear: number;
        last4: string;
     };
     createdAt: string;
     id: string;
     isDefault: boolean;
     type: "card";
  }>;
  setDefaultPaymentMethod: (paymentMethodId: string) => Promise<{
     card: {
        brand: string;
        expMonth: number;
        expYear: number;
        last4: string;
     };
     createdAt: string;
     id: string;
     isDefault: boolean;
     type: "card";
  }>;
  updateAutoTopup: (request: {
     enabled: boolean;
     thresholdCredits: number;
     topupPackageId: string;
   }) => Promise<
     | {
     attemptsToday: number;
     createdAt: string;
     enabled: boolean;
     id: string;
     lastAttemptAt: string | null;
     maxAttemptsPerDay: number;
     organisationId: string;
     thresholdCredits: number;
     topupPackageId: string;
     updatedAt: string;
   }
    | null>;
};
```

Defined in: [client.ts:1773](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L1773)

Billing methods

#### cancelSubscription()

```ts
cancelSubscription: (subscriptionId: string) => Promise<{
  cancelledAt: string | null;
  createdAt: string;
  credits: number;
  currency: string;
  currentPeriodEnd: string | null;
  currentPeriodStart: string | null;
  endedAt: string | null;
  id: string;
  interval: "month" | "year";
  organisationId: string;
  packageId: string;
  price: string;
  status: "active" | "cancelled" | "paused" | "past_due" | "ended";
  updatedAt: string;
}>;
```

Cancel subscription
Cancel an active subscription

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

##### Returns

`Promise`\<\{
  `cancelledAt`: `string` \| `null`;
  `createdAt`: `string`;
  `credits`: `number`;
  `currency`: `string`;
  `currentPeriodEnd`: `string` \| `null`;
  `currentPeriodStart`: `string` \| `null`;
  `endedAt`: `string` \| `null`;
  `id`: `string`;
  `interval`: `"month"` \| `"year"`;
  `organisationId`: `string`;
  `packageId`: `string`;
  `price`: `string`;
  `status`: `"active"` \| `"cancelled"` \| `"paused"` \| `"past_due"` \| `"ended"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

cancelSubscription

#### canSell()

```ts
canSell: (organisationId: string) => Promise<{
  canSell: boolean;
  currentBalance: number;
  reason: string | null;
}>;
```

Check if organisation can sell
Check if an organisation has sufficient credits to process sales

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `organisationId` | `string` |

##### Returns

`Promise`\<\{
  `canSell`: `boolean`;
  `currentBalance`: `number`;
  `reason`: `string` \| `null`;
\}\>

##### Operation Id

checkCanSell

#### createPurchase()

```ts
createPurchase: (request: {
  billingAddress?: {
     city: string;
     country: string;
     line1: string;
     line2?: string;
     name?: string;
     postal_code: string;
     state?: string;
  };
  currency?: string;
  email?: string;
  packageId: string;
  paymentMethodId: string;
}) => Promise<{
  invoice: {
     amountDue: string;
     amountPaid: string;
     createdAt: string;
     currency: string;
     dueDate: string | null;
     id: string;
     invoiceNumber: string;
     issueDate: string;
     organisationId: string;
     paidAt: string | null;
     pdfUrl: string | null;
     status: "draft" | "open" | "paid" | "void" | "uncollectible";
     subtotal: string;
     tax: string;
     total: string;
     type: "purchase" | "subscription" | "payg";
     updatedAt: string;
  };
  newBalance: number;
  payment: {
     amount: string;
     createdAt: string;
     currency: string;
     failedAt: string | null;
     failureCode: string | null;
     failureMessage: string | null;
     id: string;
     invoiceId: string | null;
     method: string | null;
     organisationId: string;
     paidAt: string | null;
     status: "cancelled" | "pending" | "succeeded" | "failed" | "refunded";
     updatedAt: string;
  };
  success: boolean;
  transaction: {
     amount: number;
     balanceAfter: number;
     balanceBefore: number;
     createdAt: string;
     description: string | null;
     id: string;
     invoiceId: string | null;
     orderId: string | null;
     organisationId: string;
     subscriptionId: string | null;
     type:   | "initial"
        | "purchase"
        | "subscription"
        | "ticket_sale"
        | "adjustment"
        | "refund";
  };
}>;
```

Purchase credits
Purchase a credit package for an organisation

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | \{ `billingAddress?`: \{ `city`: `string`; `country`: `string`; `line1`: `string`; `line2?`: `string`; `name?`: `string`; `postal_code`: `string`; `state?`: `string`; \}; `currency?`: `string`; `email?`: `string`; `packageId`: `string`; `paymentMethodId`: `string`; \} | - |
| `request.billingAddress?` | \{ `city`: `string`; `country`: `string`; `line1`: `string`; `line2?`: `string`; `name?`: `string`; `postal_code`: `string`; `state?`: `string`; \} | - |
| `request.billingAddress.city` | `string` | - |
| `request.billingAddress.country` | `string` | - |
| `request.billingAddress.line1` | `string` | - |
| `request.billingAddress.line2?` | `string` | - |
| `request.billingAddress.name?` | `string` | - |
| `request.billingAddress.postal_code` | `string` | - |
| `request.billingAddress.state?` | `string` | - |
| `request.currency?` | `string` | - |
| `request.email?` | `string` | Format: email |
| `request.packageId` | `string` | - |
| `request.paymentMethodId` | `string` | - |

##### Returns

`Promise`\<\{
  `invoice`: \{
     `amountDue`: `string`;
     `amountPaid`: `string`;
     `createdAt`: `string`;
     `currency`: `string`;
     `dueDate`: `string` \| `null`;
     `id`: `string`;
     `invoiceNumber`: `string`;
     `issueDate`: `string`;
     `organisationId`: `string`;
     `paidAt`: `string` \| `null`;
     `pdfUrl`: `string` \| `null`;
     `status`: `"draft"` \| `"open"` \| `"paid"` \| `"void"` \| `"uncollectible"`;
     `subtotal`: `string`;
     `tax`: `string`;
     `total`: `string`;
     `type`: `"purchase"` \| `"subscription"` \| `"payg"`;
     `updatedAt`: `string`;
  \};
  `newBalance`: `number`;
  `payment`: \{
     `amount`: `string`;
     `createdAt`: `string`;
     `currency`: `string`;
     `failedAt`: `string` \| `null`;
     `failureCode`: `string` \| `null`;
     `failureMessage`: `string` \| `null`;
     `id`: `string`;
     `invoiceId`: `string` \| `null`;
     `method`: `string` \| `null`;
     `organisationId`: `string`;
     `paidAt`: `string` \| `null`;
     `status`: `"cancelled"` \| `"pending"` \| `"succeeded"` \| `"failed"` \| `"refunded"`;
     `updatedAt`: `string`;
  \};
  `success`: `boolean`;
  `transaction`: \{
     `amount`: `number`;
     `balanceAfter`: `number`;
     `balanceBefore`: `number`;
     `createdAt`: `string`;
     `description`: `string` \| `null`;
     `id`: `string`;
     `invoiceId`: `string` \| `null`;
     `orderId`: `string` \| `null`;
     `organisationId`: `string`;
     `subscriptionId`: `string` \| `null`;
     `type`:   \| `"initial"`
        \| `"purchase"`
        \| `"subscription"`
        \| `"ticket_sale"`
        \| `"adjustment"`
        \| `"refund"`;
  \};
\}\>

##### Operation Id

createCreditPurchase

#### createSetupIntent()

```ts
createSetupIntent: () => Promise<string>;
```

Create setup intent
Create a Stripe setup intent for saving a new payment method

##### Returns

`Promise`\<`string`\>

##### Operation Id

createSetupIntent

#### createSubscription()

```ts
createSubscription: (request: {
  currency?: string;
  email?: string;
  interval: "month" | "year";
  packageId: string;
  paymentMethodId: string;
}) => Promise<{
  cancelledAt: string | null;
  createdAt: string;
  credits: number;
  currency: string;
  currentPeriodEnd: string | null;
  currentPeriodStart: string | null;
  endedAt: string | null;
  id: string;
  interval: "month" | "year";
  organisationId: string;
  packageId: string;
  price: string;
  status: "active" | "cancelled" | "paused" | "past_due" | "ended";
  updatedAt: string;
}>;
```

Create subscription
Create a new credit subscription for an organisation

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | \{ `currency?`: `string`; `email?`: `string`; `interval`: `"month"` \| `"year"`; `packageId`: `string`; `paymentMethodId`: `string`; \} | - |
| `request.currency?` | `string` | - |
| `request.email?` | `string` | Format: email |
| `request.interval` | `"month"` \| `"year"` |  |
| `request.packageId` | `string` | - |
| `request.paymentMethodId` | `string` | - |

##### Returns

`Promise`\<\{
  `cancelledAt`: `string` \| `null`;
  `createdAt`: `string`;
  `credits`: `number`;
  `currency`: `string`;
  `currentPeriodEnd`: `string` \| `null`;
  `currentPeriodStart`: `string` \| `null`;
  `endedAt`: `string` \| `null`;
  `id`: `string`;
  `interval`: `"month"` \| `"year"`;
  `organisationId`: `string`;
  `packageId`: `string`;
  `price`: `string`;
  `status`: `"active"` \| `"cancelled"` \| `"paused"` \| `"past_due"` \| `"ended"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

createSubscription

#### deletePaymentMethod()

```ts
deletePaymentMethod: (paymentMethodId: string) => Promise<boolean>;
```

Delete payment method
Delete a saved payment method

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentMethodId` | `string` |

##### Returns

`Promise`\<`boolean`\>

##### Operation Id

deletePaymentMethod

#### getAutoTopup()

```ts
getAutoTopup: () => Promise<
  | {
  attemptsToday: number;
  createdAt: string;
  enabled: boolean;
  id: string;
  lastAttemptAt: string | null;
  maxAttemptsPerDay: number;
  organisationId: string;
  thresholdCredits: number;
  topupPackageId: string;
  updatedAt: string;
}
| null>;
```

Get auto top-up configuration
Get the auto top-up configuration for an organisation

##### Returns

`Promise`\<
  \| \{
  `attemptsToday`: `number`;
  `createdAt`: `string`;
  `enabled`: `boolean`;
  `id`: `string`;
  `lastAttemptAt`: `string` \| `null`;
  `maxAttemptsPerDay`: `number`;
  `organisationId`: `string`;
  `thresholdCredits`: `number`;
  `topupPackageId`: `string`;
  `updatedAt`: `string`;
\}
  \| `null`\>

##### Operation Id

getAutoTopup

#### getBalance()

```ts
getBalance: () => Promise<{
  balance: number;
  createdAt: string;
  id: string;
  isSuspended: boolean;
  lifetimeCredits: number;
  lifetimeUsed: number;
  organisationId: string;
  status: "healthy" | "low" | "depleted" | "negative" | "suspended";
  suspendedAt: string | null;
  suspendedReason: string | null;
  updatedAt: string;
}>;
```

Get credit balance
Get the current credit balance for an organisation

##### Returns

`Promise`\<\{
  `balance`: `number`;
  `createdAt`: `string`;
  `id`: `string`;
  `isSuspended`: `boolean`;
  `lifetimeCredits`: `number`;
  `lifetimeUsed`: `number`;
  `organisationId`: `string`;
  `status`: `"healthy"` \| `"low"` \| `"depleted"` \| `"negative"` \| `"suspended"`;
  `suspendedAt`: `string` \| `null`;
  `suspendedReason`: `string` \| `null`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

getCreditBalance

#### getInvoice()

```ts
getInvoice: (invoiceId: string) => Promise<{
  amountDue: string;
  amountPaid: string;
  createdAt: string;
  currency: string;
  dueDate: string | null;
  id: string;
  invoiceNumber: string;
  issueDate: string;
  organisationId: string;
  paidAt: string | null;
  pdfUrl: string | null;
  status: "draft" | "open" | "paid" | "void" | "uncollectible";
  subtotal: string;
  tax: string;
  total: string;
  type: "purchase" | "subscription" | "payg";
  updatedAt: string;
}>;
```

Get invoice
Get a specific invoice by ID

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `invoiceId` | `string` |

##### Returns

`Promise`\<\{
  `amountDue`: `string`;
  `amountPaid`: `string`;
  `createdAt`: `string`;
  `currency`: `string`;
  `dueDate`: `string` \| `null`;
  `id`: `string`;
  `invoiceNumber`: `string`;
  `issueDate`: `string`;
  `organisationId`: `string`;
  `paidAt`: `string` \| `null`;
  `pdfUrl`: `string` \| `null`;
  `status`: `"draft"` \| `"open"` \| `"paid"` \| `"void"` \| `"uncollectible"`;
  `subtotal`: `string`;
  `tax`: `string`;
  `total`: `string`;
  `type`: `"purchase"` \| `"subscription"` \| `"payg"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

getInvoice

#### listInvoices()

```ts
listInvoices: (options?: {
  limit?: string;
  page?: string;
  status?: string;
}) => Promise<{
  amountDue: string;
  amountPaid: string;
  createdAt: string;
  currency: string;
  dueDate: string | null;
  id: string;
  invoiceNumber: string;
  issueDate: string;
  organisationId: string;
  paidAt: string | null;
  pdfUrl: string | null;
  status: "draft" | "open" | "paid" | "void" | "uncollectible";
  subtotal: string;
  tax: string;
  total: string;
  type: "purchase" | "subscription" | "payg";
  updatedAt: string;
}[]>;
```

List invoices
List all invoices for an organisation

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `limit?`: `string`; `page?`: `string`; `status?`: `string`; \} |
| `options.limit?` | `string` |
| `options.page?` | `string` |
| `options.status?` | `string` |

##### Returns

`Promise`\<\{
  `amountDue`: `string`;
  `amountPaid`: `string`;
  `createdAt`: `string`;
  `currency`: `string`;
  `dueDate`: `string` \| `null`;
  `id`: `string`;
  `invoiceNumber`: `string`;
  `issueDate`: `string`;
  `organisationId`: `string`;
  `paidAt`: `string` \| `null`;
  `pdfUrl`: `string` \| `null`;
  `status`: `"draft"` \| `"open"` \| `"paid"` \| `"void"` \| `"uncollectible"`;
  `subtotal`: `string`;
  `tax`: `string`;
  `total`: `string`;
  `type`: `"purchase"` \| `"subscription"` \| `"payg"`;
  `updatedAt`: `string`;
\}[]\>

##### Operation Id

listInvoices

#### listPackages()

```ts
listPackages: () => Promise<{
  baseCurrency: string;
  basePrice: string;
  credits: number;
  discountPercent: string;
  displayOrder: number;
  finalPrice: string;
  id: string;
  isActive: boolean;
  name: string;
}[]>;
```

List credit packages
List all available credit packages for purchase

##### Returns

`Promise`\<\{
  `baseCurrency`: `string`;
  `basePrice`: `string`;
  `credits`: `number`;
  `discountPercent`: `string`;
  `displayOrder`: `number`;
  `finalPrice`: `string`;
  `id`: `string`;
  `isActive`: `boolean`;
  `name`: `string`;
\}[]\>

##### Operation Id

listCreditPackages

#### listPaymentMethods()

```ts
listPaymentMethods: () => Promise<{
  card: {
     brand: string;
     expMonth: number;
     expYear: number;
     last4: string;
  };
  createdAt: string;
  id: string;
  isDefault: boolean;
  type: "card";
}[]>;
```

List payment methods
List all saved payment methods for the organisation

##### Returns

`Promise`\<\{
  `card`: \{
     `brand`: `string`;
     `expMonth`: `number`;
     `expYear`: `number`;
     `last4`: `string`;
  \};
  `createdAt`: `string`;
  `id`: `string`;
  `isDefault`: `boolean`;
  `type`: `"card"`;
\}[]\>

##### Operation Id

listPaymentMethods

#### listPayments()

```ts
listPayments: (options?: {
  limit?: string;
  page?: string;
  status?: string;
}) => Promise<{
  amount: string;
  createdAt: string;
  currency: string;
  failedAt: string | null;
  failureCode: string | null;
  failureMessage: string | null;
  id: string;
  invoiceId: string | null;
  method: string | null;
  organisationId: string;
  paidAt: string | null;
  status: "cancelled" | "pending" | "succeeded" | "failed" | "refunded";
  updatedAt: string;
}[]>;
```

List billing payments
List all billing payments for an organisation

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `limit?`: `string`; `page?`: `string`; `status?`: `string`; \} |
| `options.limit?` | `string` |
| `options.page?` | `string` |
| `options.status?` | `string` |

##### Returns

`Promise`\<\{
  `amount`: `string`;
  `createdAt`: `string`;
  `currency`: `string`;
  `failedAt`: `string` \| `null`;
  `failureCode`: `string` \| `null`;
  `failureMessage`: `string` \| `null`;
  `id`: `string`;
  `invoiceId`: `string` \| `null`;
  `method`: `string` \| `null`;
  `organisationId`: `string`;
  `paidAt`: `string` \| `null`;
  `status`: `"cancelled"` \| `"pending"` \| `"succeeded"` \| `"failed"` \| `"refunded"`;
  `updatedAt`: `string`;
\}[]\>

##### Operation Id

listBillingPayments

#### listSubscriptions()

```ts
listSubscriptions: () => Promise<{
  cancelledAt: string | null;
  createdAt: string;
  credits: number;
  currency: string;
  currentPeriodEnd: string | null;
  currentPeriodStart: string | null;
  endedAt: string | null;
  id: string;
  interval: "month" | "year";
  organisationId: string;
  packageId: string;
  price: string;
  status: "active" | "cancelled" | "paused" | "past_due" | "ended";
  updatedAt: string;
}[]>;
```

List subscriptions
List all subscriptions for an organisation

##### Returns

`Promise`\<\{
  `cancelledAt`: `string` \| `null`;
  `createdAt`: `string`;
  `credits`: `number`;
  `currency`: `string`;
  `currentPeriodEnd`: `string` \| `null`;
  `currentPeriodStart`: `string` \| `null`;
  `endedAt`: `string` \| `null`;
  `id`: `string`;
  `interval`: `"month"` \| `"year"`;
  `organisationId`: `string`;
  `packageId`: `string`;
  `price`: `string`;
  `status`: `"active"` \| `"cancelled"` \| `"paused"` \| `"past_due"` \| `"ended"`;
  `updatedAt`: `string`;
\}[]\>

##### Operation Id

listSubscriptions

#### listTransactions()

```ts
listTransactions: (options?: {
  limit?: string;
  page?: string;
  type?: string;
}) => Promise<{
  amount: number;
  balanceAfter: number;
  balanceBefore: number;
  createdAt: string;
  description: string | null;
  id: string;
  invoiceId: string | null;
  orderId: string | null;
  organisationId: string;
  subscriptionId: string | null;
  type:   | "initial"
     | "purchase"
     | "subscription"
     | "ticket_sale"
     | "adjustment"
     | "refund";
}[]>;
```

List credit transactions
List all credit transactions for an organisation

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `limit?`: `string`; `page?`: `string`; `type?`: `string`; \} |
| `options.limit?` | `string` |
| `options.page?` | `string` |
| `options.type?` | `string` |

##### Returns

`Promise`\<\{
  `amount`: `number`;
  `balanceAfter`: `number`;
  `balanceBefore`: `number`;
  `createdAt`: `string`;
  `description`: `string` \| `null`;
  `id`: `string`;
  `invoiceId`: `string` \| `null`;
  `orderId`: `string` \| `null`;
  `organisationId`: `string`;
  `subscriptionId`: `string` \| `null`;
  `type`:   \| `"initial"`
     \| `"purchase"`
     \| `"subscription"`
     \| `"ticket_sale"`
     \| `"adjustment"`
     \| `"refund"`;
\}[]\>

##### Operation Id

listCreditTransactions

#### savePaymentMethod()

```ts
savePaymentMethod: (request: {
  paymentMethodId: string;
  setAsDefault?: boolean;
}) => Promise<{
  card: {
     brand: string;
     expMonth: number;
     expYear: number;
     last4: string;
  };
  createdAt: string;
  id: string;
  isDefault: boolean;
  type: "card";
}>;
```

Save payment method
Save a payment method after Stripe confirms the setup intent

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | \{ `paymentMethodId`: `string`; `setAsDefault?`: `boolean`; \} | - |
| `request.paymentMethodId` | `string` | **Example** `pm_1234567890` |
| `request.setAsDefault?` | `boolean` | **Example** `true` |

##### Returns

`Promise`\<\{
  `card`: \{
     `brand`: `string`;
     `expMonth`: `number`;
     `expYear`: `number`;
     `last4`: `string`;
  \};
  `createdAt`: `string`;
  `id`: `string`;
  `isDefault`: `boolean`;
  `type`: `"card"`;
\}\>

##### Operation Id

savePaymentMethod

#### setDefaultPaymentMethod()

```ts
setDefaultPaymentMethod: (paymentMethodId: string) => Promise<{
  card: {
     brand: string;
     expMonth: number;
     expYear: number;
     last4: string;
  };
  createdAt: string;
  id: string;
  isDefault: boolean;
  type: "card";
}>;
```

Set default payment method
Set a payment method as the default for the organisation

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentMethodId` | `string` |

##### Returns

`Promise`\<\{
  `card`: \{
     `brand`: `string`;
     `expMonth`: `number`;
     `expYear`: `number`;
     `last4`: `string`;
  \};
  `createdAt`: `string`;
  `id`: `string`;
  `isDefault`: `boolean`;
  `type`: `"card"`;
\}\>

##### Operation Id

setDefaultPaymentMethod

#### updateAutoTopup()

```ts
updateAutoTopup: (request: {
  enabled: boolean;
  thresholdCredits: number;
  topupPackageId: string;
}) => Promise<
  | {
  attemptsToday: number;
  createdAt: string;
  enabled: boolean;
  id: string;
  lastAttemptAt: string | null;
  maxAttemptsPerDay: number;
  organisationId: string;
  thresholdCredits: number;
  topupPackageId: string;
  updatedAt: string;
}
| null>;
```

Update auto top-up configuration
Update the auto top-up configuration for an organisation

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `enabled`: `boolean`; `thresholdCredits`: `number`; `topupPackageId`: `string`; \} |
| `request.enabled` | `boolean` |
| `request.thresholdCredits` | `number` |
| `request.topupPackageId` | `string` |

##### Returns

`Promise`\<
  \| \{
  `attemptsToday`: `number`;
  `createdAt`: `string`;
  `enabled`: `boolean`;
  `id`: `string`;
  `lastAttemptAt`: `string` \| `null`;
  `maxAttemptsPerDay`: `number`;
  `organisationId`: `string`;
  `thresholdCredits`: `number`;
  `topupPackageId`: `string`;
  `updatedAt`: `string`;
\}
  \| `null`\>

##### Operation Id

updateAutoTopup

***

### customers

```ts
customers: {
  block: (customerId: string, request: {
     reason?: string;
   }) => Promise<{
     accountId: string | null;
     blockedAt: string | null;
     blockedReason: string | null;
     createdAt: string;
     email: string;
     externalId: string | null;
     firstName: string | null;
     id: string;
     isBlocked: boolean;
     lastName: string | null;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     organisationId: string;
     phone: string | null;
     updatedAt: string;
  }>;
  create: (request: {
     accountId?: string;
     email: string;
     externalId?: string;
     firstName?: string;
     lastName?: string;
     metadata?: Record<string, any>;
     phone?: string;
   }) => Promise<{
     accountId: string | null;
     blockedAt: string | null;
     blockedReason: string | null;
     createdAt: string;
     email: string;
     externalId: string | null;
     firstName: string | null;
     id: string;
     isBlocked: boolean;
     lastName: string | null;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     organisationId: string;
     phone: string | null;
     updatedAt: string;
  }>;
  get: (customerId: string) => Promise<{
     accountId: string | null;
     blockedAt: string | null;
     blockedReason: string | null;
     createdAt: string;
     email: string;
     externalId: string | null;
     firstName: string | null;
     id: string;
     isBlocked: boolean;
     lastName: string | null;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     organisationId: string;
     phone: string | null;
     updatedAt: string;
  }>;
  list: (options?: {
     accountId?: string;
     email?: string;
     isBlocked?: string;
     limit?: string;
     page?: string;
     search?: string;
   }) => Promise<{
     customers: {
        accountId: string | null;
        blockedAt: string | null;
        blockedReason: string | null;
        createdAt: string;
        email: string;
        externalId: string | null;
        firstName: string | null;
        id: string;
        isBlocked: boolean;
        lastName: string | null;
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        organisationId: string;
        phone: string | null;
        updatedAt: string;
     }[];
     pagination: {
        limit: number;
        page: number;
        total: number;
        totalPages: number;
     };
  }>;
  unblock: (customerId: string) => Promise<{
     accountId: string | null;
     blockedAt: string | null;
     blockedReason: string | null;
     createdAt: string;
     email: string;
     externalId: string | null;
     firstName: string | null;
     id: string;
     isBlocked: boolean;
     lastName: string | null;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     organisationId: string;
     phone: string | null;
     updatedAt: string;
  }>;
  update: (customerId: string, request: {
     email?: string;
     externalId?: any;
     firstName?: any;
     lastName?: any;
     metadata?: any;
     phone?: any;
   }) => Promise<{
     accountId: string | null;
     blockedAt: string | null;
     blockedReason: string | null;
     createdAt: string;
     email: string;
     externalId: string | null;
     firstName: string | null;
     id: string;
     isBlocked: boolean;
     lastName: string | null;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     organisationId: string;
     phone: string | null;
     updatedAt: string;
  }>;
};
```

Defined in: [client.ts:2334](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L2334)

Customers methods

#### block()

```ts
block: (customerId: string, request: {
  reason?: string;
}) => Promise<{
  accountId: string | null;
  blockedAt: string | null;
  blockedReason: string | null;
  createdAt: string;
  email: string;
  externalId: string | null;
  firstName: string | null;
  id: string;
  isBlocked: boolean;
  lastName: string | null;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  organisationId: string;
  phone: string | null;
  updatedAt: string;
}>;
```

Block customer
Block a customer from making purchases

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |
| `request` | \{ `reason?`: `string`; \} |
| `request.reason?` | `string` |

##### Returns

`Promise`\<\{
  `accountId`: `string` \| `null`;
  `blockedAt`: `string` \| `null`;
  `blockedReason`: `string` \| `null`;
  `createdAt`: `string`;
  `email`: `string`;
  `externalId`: `string` \| `null`;
  `firstName`: `string` \| `null`;
  `id`: `string`;
  `isBlocked`: `boolean`;
  `lastName`: `string` \| `null`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `organisationId`: `string`;
  `phone`: `string` \| `null`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

blockCustomer

#### create()

```ts
create: (request: {
  accountId?: string;
  email: string;
  externalId?: string;
  firstName?: string;
  lastName?: string;
  metadata?: Record<string, any>;
  phone?: string;
}) => Promise<{
  accountId: string | null;
  blockedAt: string | null;
  blockedReason: string | null;
  createdAt: string;
  email: string;
  externalId: string | null;
  firstName: string | null;
  id: string;
  isBlocked: boolean;
  lastName: string | null;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  organisationId: string;
  phone: string | null;
  updatedAt: string;
}>;
```

Create customer
Create a new customer in the organisation

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `accountId?`: `string`; `email`: `string`; `externalId?`: `string`; `firstName?`: `string`; `lastName?`: `string`; `metadata?`: `Record`\<`string`, `any`\>; `phone?`: `string`; \} |
| `request.accountId?` | `string` |
| `request.email` | `string` |
| `request.externalId?` | `string` |
| `request.firstName?` | `string` |
| `request.lastName?` | `string` |
| `request.metadata?` | `Record`\<`string`, `any`\> |
| `request.phone?` | `string` |

##### Returns

`Promise`\<\{
  `accountId`: `string` \| `null`;
  `blockedAt`: `string` \| `null`;
  `blockedReason`: `string` \| `null`;
  `createdAt`: `string`;
  `email`: `string`;
  `externalId`: `string` \| `null`;
  `firstName`: `string` \| `null`;
  `id`: `string`;
  `isBlocked`: `boolean`;
  `lastName`: `string` \| `null`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `organisationId`: `string`;
  `phone`: `string` \| `null`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

createCustomer

#### get()

```ts
get: (customerId: string) => Promise<{
  accountId: string | null;
  blockedAt: string | null;
  blockedReason: string | null;
  createdAt: string;
  email: string;
  externalId: string | null;
  firstName: string | null;
  id: string;
  isBlocked: boolean;
  lastName: string | null;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  organisationId: string;
  phone: string | null;
  updatedAt: string;
}>;
```

Get customer
Get a specific customer by ID

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |

##### Returns

`Promise`\<\{
  `accountId`: `string` \| `null`;
  `blockedAt`: `string` \| `null`;
  `blockedReason`: `string` \| `null`;
  `createdAt`: `string`;
  `email`: `string`;
  `externalId`: `string` \| `null`;
  `firstName`: `string` \| `null`;
  `id`: `string`;
  `isBlocked`: `boolean`;
  `lastName`: `string` \| `null`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `organisationId`: `string`;
  `phone`: `string` \| `null`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

getCustomer

#### list()

```ts
list: (options?: {
  accountId?: string;
  email?: string;
  isBlocked?: string;
  limit?: string;
  page?: string;
  search?: string;
}) => Promise<{
  customers: {
     accountId: string | null;
     blockedAt: string | null;
     blockedReason: string | null;
     createdAt: string;
     email: string;
     externalId: string | null;
     firstName: string | null;
     id: string;
     isBlocked: boolean;
     lastName: string | null;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     organisationId: string;
     phone: string | null;
     updatedAt: string;
  }[];
  pagination: {
     limit: number;
     page: number;
     total: number;
     totalPages: number;
  };
}>;
```

List customers
List all customers with optional filtering and pagination

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `accountId?`: `string`; `email?`: `string`; `isBlocked?`: `string`; `limit?`: `string`; `page?`: `string`; `search?`: `string`; \} |
| `options.accountId?` | `string` |
| `options.email?` | `string` |
| `options.isBlocked?` | `string` |
| `options.limit?` | `string` |
| `options.page?` | `string` |
| `options.search?` | `string` |

##### Returns

`Promise`\<\{
  `customers`: \{
     `accountId`: `string` \| `null`;
     `blockedAt`: `string` \| `null`;
     `blockedReason`: `string` \| `null`;
     `createdAt`: `string`;
     `email`: `string`;
     `externalId`: `string` \| `null`;
     `firstName`: `string` \| `null`;
     `id`: `string`;
     `isBlocked`: `boolean`;
     `lastName`: `string` \| `null`;
     `metadata`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `organisationId`: `string`;
     `phone`: `string` \| `null`;
     `updatedAt`: `string`;
  \}[];
  `pagination`: \{
     `limit`: `number`;
     `page`: `number`;
     `total`: `number`;
     `totalPages`: `number`;
  \};
\}\>

##### Operation Id

listCustomers

#### unblock()

```ts
unblock: (customerId: string) => Promise<{
  accountId: string | null;
  blockedAt: string | null;
  blockedReason: string | null;
  createdAt: string;
  email: string;
  externalId: string | null;
  firstName: string | null;
  id: string;
  isBlocked: boolean;
  lastName: string | null;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  organisationId: string;
  phone: string | null;
  updatedAt: string;
}>;
```

Unblock customer
Unblock a previously blocked customer

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |

##### Returns

`Promise`\<\{
  `accountId`: `string` \| `null`;
  `blockedAt`: `string` \| `null`;
  `blockedReason`: `string` \| `null`;
  `createdAt`: `string`;
  `email`: `string`;
  `externalId`: `string` \| `null`;
  `firstName`: `string` \| `null`;
  `id`: `string`;
  `isBlocked`: `boolean`;
  `lastName`: `string` \| `null`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `organisationId`: `string`;
  `phone`: `string` \| `null`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

unblockCustomer

#### update()

```ts
update: (customerId: string, request: {
  email?: string;
  externalId?: any;
  firstName?: any;
  lastName?: any;
  metadata?: any;
  phone?: any;
}) => Promise<{
  accountId: string | null;
  blockedAt: string | null;
  blockedReason: string | null;
  createdAt: string;
  email: string;
  externalId: string | null;
  firstName: string | null;
  id: string;
  isBlocked: boolean;
  lastName: string | null;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  organisationId: string;
  phone: string | null;
  updatedAt: string;
}>;
```

Update customer
Update an existing customer

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |
| `request` | \{ `email?`: `string`; `externalId?`: `any`; `firstName?`: `any`; `lastName?`: `any`; `metadata?`: `any`; `phone?`: `any`; \} |
| `request.email?` | `string` |
| `request.externalId?` | `any` |
| `request.firstName?` | `any` |
| `request.lastName?` | `any` |
| `request.metadata?` | `any` |
| `request.phone?` | `any` |

##### Returns

`Promise`\<\{
  `accountId`: `string` \| `null`;
  `blockedAt`: `string` \| `null`;
  `blockedReason`: `string` \| `null`;
  `createdAt`: `string`;
  `email`: `string`;
  `externalId`: `string` \| `null`;
  `firstName`: `string` \| `null`;
  `id`: `string`;
  `isBlocked`: `boolean`;
  `lastName`: `string` \| `null`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `organisationId`: `string`;
  `phone`: `string` \| `null`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

updateCustomer

***

### events

```ts
events: (eventId: string) => {
  occurrences: {
     create: (request: {
        categoryMapping?: {
           enabled?: boolean;
           ticketCategoryId: string;
           venueLayoutCategoryId: string;
        }[];
        endDate: string;
        endTime: string;
        priceSchemeId?: string;
        startDate: string;
        startTime: string;
        status: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
        ticketSchemeId?: string;
        timezone?: string;
        venueId?: string;
        venueLayoutId?: string;
      }) => Promise<{
        accountId: string;
        createdAt: string;
        endDate: string;
        endTime: string;
        eventId: string;
        id: string;
        isDeleted: boolean;
        organisationId: string;
        startDate: string;
        startTime: string;
        status: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
        timezone: string;
        updatedAt: string;
        venueId?: string;
     }>;
     delete: (occurrenceId: string) => Promise<{
        id: string;
        success: boolean;
     }>;
     get: (occurrenceId: string) => Promise<{
        accountId: string;
        createdAt: string;
        endDate: string;
        endTime: string;
        eventId: string;
        id: string;
        isDeleted: boolean;
        organisationId: string;
        startDate: string;
        startTime: string;
        status: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
        timezone: string;
        updatedAt: string;
        venueId?: string;
     }>;
     list: (options?: {
        limit?: string;
        page?: string;
        startDateFrom?: string;
        startDateTo?: string;
        status?: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
        venueId?: string;
      }) => Promise<{
        eventOccurrences: {
           accountId: string;
           createdAt: string;
           endDate: string;
           endTime: string;
           eventId: string;
           id: string;
           isDeleted: boolean;
           organisationId: string;
           startDate: string;
           startTime: string;
           status: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
           timezone: string;
           updatedAt: string;
           venueId?: string;
        }[];
        pagination: {
           hasNext: boolean;
           hasPrev: boolean;
           limit: number;
           page: number;
           total: number;
           totalPages: number;
        };
     }>;
     update: (occurrenceId: string, request: {
        categoryMapping?: any;
        endDate?: string;
        endTime?: string;
        priceSchemeId?: any;
        startDate?: string;
        startTime?: string;
        status?: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
        ticketSchemeId?: any;
        timezone?: string;
        venueId?: any;
        venueLayoutId?: any;
      }) => Promise<{
        accountId: string;
        createdAt: string;
        endDate: string;
        endTime: string;
        eventId: string;
        id: string;
        isDeleted: boolean;
        organisationId: string;
        startDate: string;
        startTime: string;
        status: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
        timezone: string;
        updatedAt: string;
        venueId?: string;
     }>;
  };
  priceschemes: {
     create: (request: {
        description?: string;
        name: string;
        parentPriceSchemeId?: string;
        status?: "active" | "draft" | "archived";
        ticketPrices?: {
           categoryId: string;
           currency?: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
           price: number;
           typeId: string;
        }[];
      }) => Promise<{
        accountId: string;
        createdAt: string;
        description?: string;
        eventId: string;
        id: string;
        isDeleted: boolean;
        name: string;
        organisationId: string;
        parentPriceSchemeId?: string;
        status: "active" | "draft" | "archived";
        ticketPrices: {
           categoryId: string;
           currency: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
           price: number;
           typeId: string;
        }[];
        updatedAt: string;
     }>;
     delete: (priceSchemeId: string) => Promise<{
        id: string;
        success: boolean;
     }>;
     get: (priceSchemeId: string) => Promise<{
        accountId: string;
        createdAt: string;
        description?: string;
        eventId: string;
        id: string;
        isDeleted: boolean;
        name: string;
        organisationId: string;
        parentPriceSchemeId?: string;
        status: "active" | "draft" | "archived";
        ticketPrices: {
           categoryId: string;
           currency: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
           price: number;
           typeId: string;
        }[];
        updatedAt: string;
     }>;
     list: () => Promise<{
        accountId: string;
        createdAt: string;
        description?: string;
        eventId: string;
        id: string;
        isDeleted: boolean;
        name: string;
        organisationId: string;
        parentPriceSchemeId?: string;
        status: "active" | "draft" | "archived";
        ticketPrices: {
           categoryId: string;
           currency: ... | ... | ... | ... | ...;
           price: number;
           typeId: string;
        }[];
        updatedAt: string;
     }[]>;
     update: (priceSchemeId: string, request: {
        description?: any;
        name?: string;
        status?: "active" | "draft" | "archived";
        ticketPrices?: {
           categoryId: string;
           currency?: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
           price: number;
           typeId: string;
        }[];
      }) => Promise<{
        accountId: string;
        createdAt: string;
        description?: string;
        eventId: string;
        id: string;
        isDeleted: boolean;
        name: string;
        organisationId: string;
        parentPriceSchemeId?: string;
        status: "active" | "draft" | "archived";
        ticketPrices: {
           categoryId: string;
           currency: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
           price: number;
           typeId: string;
        }[];
        updatedAt: string;
     }>;
  };
} & {
  create: (request: {
     accountId: string;
     description?: string;
     heroImageUrl?: any;
     imageUrl?: any;
     layout?: {
        areas?: {
           capacity: number;
           categoryId?: string;
           description?: string;
           displayOrder?: number;
           id?: string;
           name: string;
           type: "unallocated" | "allocated";
        }[];
        categories?: {
           color?: string;
           description?: string;
           displayOrder?: number;
           id?: string;
           name: string;
        }[];
        venueLayoutTemplateId?: string;
     };
     name: string;
     offSaleDate?: string;
     onSaleDate?: string;
     presentation?: any;
     shortDescription?: any;
     status?:   | "draft"
        | "published"
        | "on_sale"
        | "sold_out"
        | "completed"
        | "cancelled";
     subtitle?: any;
     tags?: string[];
     ticketTypes?: {
        description?: string;
        displayOrder: number;
        id?: string;
        name: string;
     }[];
     timezone?: string;
     venueId?: any;
     venueName?: any;
   }) => Promise<{
     accountId: string;
     createdAt: string;
     createdBy?: string;
     description?: string;
     id: string;
     isDeleted: boolean;
     name: string;
     occurrenceCount: number;
     offSaleDate?: string;
     onSaleDate?: string;
     organisationId: string;
     productCount: number;
     status:   | "draft"
        | "published"
        | "on_sale"
        | "sold_out"
        | "completed"
        | "cancelled";
     tags: string[];
     ticketCount: number;
     timezone: string;
     updatedAt: string;
     venueId?: string;
  }>;
  delete: (id: string) => Promise<{
     id: string;
     success: boolean;
  }>;
  get: (id: string, options?: {
     expand?: string;
   }) => Promise<{
     accountId: string;
     createdAt: string;
     createdBy?: string;
     description?: string;
     id: string;
     isDeleted: boolean;
     name: string;
     occurrenceCount: number;
     offSaleDate?: string;
     onSaleDate?: string;
     organisationId: string;
     productCount: number;
     status:   | "draft"
        | "published"
        | "on_sale"
        | "sold_out"
        | "completed"
        | "cancelled";
     tags: string[];
     ticketCount: number;
     timezone: string;
     updatedAt: string;
     venueId?: string;
  }>;
  list: (options?: {
     accountId?: string;
     expand?: string;
     limit?: string;
     page?: string;
     search?: string;
     status?:   | "draft"
        | "published"
        | "on_sale"
        | "sold_out"
        | "completed"
        | "cancelled";
     venueId?: string;
   }) => Promise<{
     events: {
        accountId: string;
        createdAt: string;
        createdBy?: string;
        description?: string;
        id: string;
        isDeleted: boolean;
        name: string;
        occurrenceCount: number;
        offSaleDate?: string;
        onSaleDate?: string;
        organisationId: string;
        productCount: number;
        status:   | "draft"
           | "published"
           | "on_sale"
           | "sold_out"
           | "completed"
           | "cancelled";
        tags: string[];
        ticketCount: number;
        timezone: string;
        updatedAt: string;
        venueId?: string;
     }[];
     pagination: {
        hasNext: boolean;
        hasPrev: boolean;
        limit: number;
        page: number;
        total: number;
        totalPages: number;
     };
  }>;
  update: (id: string, request: {
     description?: any;
     heroImageUrl?: any;
     imageUrl?: any;
     layout?: {
        areas?: {
           capacity: number;
           categoryId?: string;
           description?: string;
           displayOrder?: number;
           id?: string;
           name: string;
           type: "unallocated" | "allocated";
        }[];
        categories?: {
           color?: string;
           description?: string;
           displayOrder?: number;
           id?: string;
           name: string;
        }[];
        venueLayoutTemplateId?: string;
     };
     name?: string;
     offSaleDate?: any;
     onSaleDate?: any;
     presentation?: any;
     shortDescription?: any;
     status?:   | "draft"
        | "published"
        | "on_sale"
        | "sold_out"
        | "completed"
        | "cancelled";
     subtitle?: any;
     tags?: string[];
     ticketTypes?: {
        description?: string;
        displayOrder: number;
        id?: string;
        name: string;
     }[];
     timezone?: string;
     venueId?: any;
     venueName?: any;
   }) => Promise<{
     accountId: string;
     createdAt: string;
     createdBy?: string;
     description?: string;
     id: string;
     isDeleted: boolean;
     name: string;
     occurrenceCount: number;
     offSaleDate?: string;
     onSaleDate?: string;
     organisationId: string;
     productCount: number;
     status:   | "draft"
        | "published"
        | "on_sale"
        | "sold_out"
        | "completed"
        | "cancelled";
     tags: string[];
     ticketCount: number;
     timezone: string;
     updatedAt: string;
     venueId?: string;
  }>;
};
```

Defined in: [client.ts:1204](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L1204)

Events methods
Use events() to access nested resources: events(id).occurrences, priceschemes

#### Type Declaration

##### create()

```ts
create: (request: {
  accountId: string;
  description?: string;
  heroImageUrl?: any;
  imageUrl?: any;
  layout?: {
     areas?: {
        capacity: number;
        categoryId?: string;
        description?: string;
        displayOrder?: number;
        id?: string;
        name: string;
        type: "unallocated" | "allocated";
     }[];
     categories?: {
        color?: string;
        description?: string;
        displayOrder?: number;
        id?: string;
        name: string;
     }[];
     venueLayoutTemplateId?: string;
  };
  name: string;
  offSaleDate?: string;
  onSaleDate?: string;
  presentation?: any;
  shortDescription?: any;
  status?:   | "draft"
     | "published"
     | "on_sale"
     | "sold_out"
     | "completed"
     | "cancelled";
  subtitle?: any;
  tags?: string[];
  ticketTypes?: {
     description?: string;
     displayOrder: number;
     id?: string;
     name: string;
  }[];
  timezone?: string;
  venueId?: any;
  venueName?: any;
}) => Promise<{
  accountId: string;
  createdAt: string;
  createdBy?: string;
  description?: string;
  id: string;
  isDeleted: boolean;
  name: string;
  occurrenceCount: number;
  offSaleDate?: string;
  onSaleDate?: string;
  organisationId: string;
  productCount: number;
  status:   | "draft"
     | "published"
     | "on_sale"
     | "sold_out"
     | "completed"
     | "cancelled";
  tags: string[];
  ticketCount: number;
  timezone: string;
  updatedAt: string;
  venueId?: string;
}>;
```

Create event
Create a new event in the organisation

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `accountId`: `string`; `description?`: `string`; `heroImageUrl?`: `any`; `imageUrl?`: `any`; `layout?`: \{ `areas?`: \{ `capacity`: `number`; `categoryId?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; `type`: `"unallocated"` \| `"allocated"`; \}[]; `categories?`: \{ `color?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; \}[]; `venueLayoutTemplateId?`: `string`; \}; `name`: `string`; `offSaleDate?`: `string`; `onSaleDate?`: `string`; `presentation?`: `any`; `shortDescription?`: `any`; `status?`: \| `"draft"` \| `"published"` \| `"on_sale"` \| `"sold_out"` \| `"completed"` \| `"cancelled"`; `subtitle?`: `any`; `tags?`: `string`[]; `ticketTypes?`: \{ `description?`: `string`; `displayOrder`: `number`; `id?`: `string`; `name`: `string`; \}[]; `timezone?`: `string`; `venueId?`: `any`; `venueName?`: `any`; \} |
| `request.accountId` | `string` |
| `request.description?` | `string` |
| `request.heroImageUrl?` | `any` |
| `request.imageUrl?` | `any` |
| `request.layout?` | \{ `areas?`: \{ `capacity`: `number`; `categoryId?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; `type`: `"unallocated"` \| `"allocated"`; \}[]; `categories?`: \{ `color?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; \}[]; `venueLayoutTemplateId?`: `string`; \} |
| `request.layout.areas?` | \{ `capacity`: `number`; `categoryId?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; `type`: `"unallocated"` \| `"allocated"`; \}[] |
| `request.layout.categories?` | \{ `color?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; \}[] |
| `request.layout.venueLayoutTemplateId?` | `string` |
| `request.name` | `string` |
| `request.offSaleDate?` | `string` |
| `request.onSaleDate?` | `string` |
| `request.presentation?` | `any` |
| `request.shortDescription?` | `any` |
| `request.status?` | \| `"draft"` \| `"published"` \| `"on_sale"` \| `"sold_out"` \| `"completed"` \| `"cancelled"` |
| `request.subtitle?` | `any` |
| `request.tags?` | `string`[] |
| `request.ticketTypes?` | \{ `description?`: `string`; `displayOrder`: `number`; `id?`: `string`; `name`: `string`; \}[] |
| `request.timezone?` | `string` |
| `request.venueId?` | `any` |
| `request.venueName?` | `any` |

###### Returns

`Promise`\<\{
  `accountId`: `string`;
  `createdAt`: `string`;
  `createdBy?`: `string`;
  `description?`: `string`;
  `id`: `string`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `occurrenceCount`: `number`;
  `offSaleDate?`: `string`;
  `onSaleDate?`: `string`;
  `organisationId`: `string`;
  `productCount`: `number`;
  `status`:   \| `"draft"`
     \| `"published"`
     \| `"on_sale"`
     \| `"sold_out"`
     \| `"completed"`
     \| `"cancelled"`;
  `tags`: `string`[];
  `ticketCount`: `number`;
  `timezone`: `string`;
  `updatedAt`: `string`;
  `venueId?`: `string`;
\}\>

###### Operation Id

createEvent

##### delete()

```ts
delete: (id: string) => Promise<{
  id: string;
  success: boolean;
}>;
```

Delete event
Delete an event (soft delete)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

###### Returns

`Promise`\<\{
  `id`: `string`;
  `success`: `boolean`;
\}\>

###### Operation Id

deleteEvent

##### get()

```ts
get: (id: string, options?: {
  expand?: string;
}) => Promise<{
  accountId: string;
  createdAt: string;
  createdBy?: string;
  description?: string;
  id: string;
  isDeleted: boolean;
  name: string;
  occurrenceCount: number;
  offSaleDate?: string;
  onSaleDate?: string;
  organisationId: string;
  productCount: number;
  status:   | "draft"
     | "published"
     | "on_sale"
     | "sold_out"
     | "completed"
     | "cancelled";
  tags: string[];
  ticketCount: number;
  timezone: string;
  updatedAt: string;
  venueId?: string;
}>;
```

Get event
Get a specific event by ID. Use expand=venue to embed venue details.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `options?` | \{ `expand?`: `string`; \} |
| `options.expand?` | `string` |

###### Returns

`Promise`\<\{
  `accountId`: `string`;
  `createdAt`: `string`;
  `createdBy?`: `string`;
  `description?`: `string`;
  `id`: `string`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `occurrenceCount`: `number`;
  `offSaleDate?`: `string`;
  `onSaleDate?`: `string`;
  `organisationId`: `string`;
  `productCount`: `number`;
  `status`:   \| `"draft"`
     \| `"published"`
     \| `"on_sale"`
     \| `"sold_out"`
     \| `"completed"`
     \| `"cancelled"`;
  `tags`: `string`[];
  `ticketCount`: `number`;
  `timezone`: `string`;
  `updatedAt`: `string`;
  `venueId?`: `string`;
\}\>

###### Operation Id

getEvent

##### list()

```ts
list: (options?: {
  accountId?: string;
  expand?: string;
  limit?: string;
  page?: string;
  search?: string;
  status?:   | "draft"
     | "published"
     | "on_sale"
     | "sold_out"
     | "completed"
     | "cancelled";
  venueId?: string;
}) => Promise<{
  events: {
     accountId: string;
     createdAt: string;
     createdBy?: string;
     description?: string;
     id: string;
     isDeleted: boolean;
     name: string;
     occurrenceCount: number;
     offSaleDate?: string;
     onSaleDate?: string;
     organisationId: string;
     productCount: number;
     status:   | "draft"
        | "published"
        | "on_sale"
        | "sold_out"
        | "completed"
        | "cancelled";
     tags: string[];
     ticketCount: number;
     timezone: string;
     updatedAt: string;
     venueId?: string;
  }[];
  pagination: {
     hasNext: boolean;
     hasPrev: boolean;
     limit: number;
     page: number;
     total: number;
     totalPages: number;
  };
}>;
```

List events
List all events for the organisation with optional filtering and pagination. Use expand=venue to embed venue details.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `accountId?`: `string`; `expand?`: `string`; `limit?`: `string`; `page?`: `string`; `search?`: `string`; `status?`: \| `"draft"` \| `"published"` \| `"on_sale"` \| `"sold_out"` \| `"completed"` \| `"cancelled"`; `venueId?`: `string`; \} |
| `options.accountId?` | `string` |
| `options.expand?` | `string` |
| `options.limit?` | `string` |
| `options.page?` | `string` |
| `options.search?` | `string` |
| `options.status?` | \| `"draft"` \| `"published"` \| `"on_sale"` \| `"sold_out"` \| `"completed"` \| `"cancelled"` |
| `options.venueId?` | `string` |

###### Returns

`Promise`\<\{
  `events`: \{
     `accountId`: `string`;
     `createdAt`: `string`;
     `createdBy?`: `string`;
     `description?`: `string`;
     `id`: `string`;
     `isDeleted`: `boolean`;
     `name`: `string`;
     `occurrenceCount`: `number`;
     `offSaleDate?`: `string`;
     `onSaleDate?`: `string`;
     `organisationId`: `string`;
     `productCount`: `number`;
     `status`:   \| `"draft"`
        \| `"published"`
        \| `"on_sale"`
        \| `"sold_out"`
        \| `"completed"`
        \| `"cancelled"`;
     `tags`: `string`[];
     `ticketCount`: `number`;
     `timezone`: `string`;
     `updatedAt`: `string`;
     `venueId?`: `string`;
  \}[];
  `pagination`: \{
     `hasNext`: `boolean`;
     `hasPrev`: `boolean`;
     `limit`: `number`;
     `page`: `number`;
     `total`: `number`;
     `totalPages`: `number`;
  \};
\}\>

###### Operation Id

listEvents

##### update()

```ts
update: (id: string, request: {
  description?: any;
  heroImageUrl?: any;
  imageUrl?: any;
  layout?: {
     areas?: {
        capacity: number;
        categoryId?: string;
        description?: string;
        displayOrder?: number;
        id?: string;
        name: string;
        type: "unallocated" | "allocated";
     }[];
     categories?: {
        color?: string;
        description?: string;
        displayOrder?: number;
        id?: string;
        name: string;
     }[];
     venueLayoutTemplateId?: string;
  };
  name?: string;
  offSaleDate?: any;
  onSaleDate?: any;
  presentation?: any;
  shortDescription?: any;
  status?:   | "draft"
     | "published"
     | "on_sale"
     | "sold_out"
     | "completed"
     | "cancelled";
  subtitle?: any;
  tags?: string[];
  ticketTypes?: {
     description?: string;
     displayOrder: number;
     id?: string;
     name: string;
  }[];
  timezone?: string;
  venueId?: any;
  venueName?: any;
}) => Promise<{
  accountId: string;
  createdAt: string;
  createdBy?: string;
  description?: string;
  id: string;
  isDeleted: boolean;
  name: string;
  occurrenceCount: number;
  offSaleDate?: string;
  onSaleDate?: string;
  organisationId: string;
  productCount: number;
  status:   | "draft"
     | "published"
     | "on_sale"
     | "sold_out"
     | "completed"
     | "cancelled";
  tags: string[];
  ticketCount: number;
  timezone: string;
  updatedAt: string;
  venueId?: string;
}>;
```

Update event
Update an existing event

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `request` | \{ `description?`: `any`; `heroImageUrl?`: `any`; `imageUrl?`: `any`; `layout?`: \{ `areas?`: \{ `capacity`: `number`; `categoryId?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; `type`: `"unallocated"` \| `"allocated"`; \}[]; `categories?`: \{ `color?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; \}[]; `venueLayoutTemplateId?`: `string`; \}; `name?`: `string`; `offSaleDate?`: `any`; `onSaleDate?`: `any`; `presentation?`: `any`; `shortDescription?`: `any`; `status?`: \| `"draft"` \| `"published"` \| `"on_sale"` \| `"sold_out"` \| `"completed"` \| `"cancelled"`; `subtitle?`: `any`; `tags?`: `string`[]; `ticketTypes?`: \{ `description?`: `string`; `displayOrder`: `number`; `id?`: `string`; `name`: `string`; \}[]; `timezone?`: `string`; `venueId?`: `any`; `venueName?`: `any`; \} |
| `request.description?` | `any` |
| `request.heroImageUrl?` | `any` |
| `request.imageUrl?` | `any` |
| `request.layout?` | \{ `areas?`: \{ `capacity`: `number`; `categoryId?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; `type`: `"unallocated"` \| `"allocated"`; \}[]; `categories?`: \{ `color?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; \}[]; `venueLayoutTemplateId?`: `string`; \} |
| `request.layout.areas?` | \{ `capacity`: `number`; `categoryId?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; `type`: `"unallocated"` \| `"allocated"`; \}[] |
| `request.layout.categories?` | \{ `color?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; \}[] |
| `request.layout.venueLayoutTemplateId?` | `string` |
| `request.name?` | `string` |
| `request.offSaleDate?` | `any` |
| `request.onSaleDate?` | `any` |
| `request.presentation?` | `any` |
| `request.shortDescription?` | `any` |
| `request.status?` | \| `"draft"` \| `"published"` \| `"on_sale"` \| `"sold_out"` \| `"completed"` \| `"cancelled"` |
| `request.subtitle?` | `any` |
| `request.tags?` | `string`[] |
| `request.ticketTypes?` | \{ `description?`: `string`; `displayOrder`: `number`; `id?`: `string`; `name`: `string`; \}[] |
| `request.timezone?` | `string` |
| `request.venueId?` | `any` |
| `request.venueName?` | `any` |

###### Returns

`Promise`\<\{
  `accountId`: `string`;
  `createdAt`: `string`;
  `createdBy?`: `string`;
  `description?`: `string`;
  `id`: `string`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `occurrenceCount`: `number`;
  `offSaleDate?`: `string`;
  `onSaleDate?`: `string`;
  `organisationId`: `string`;
  `productCount`: `number`;
  `status`:   \| `"draft"`
     \| `"published"`
     \| `"on_sale"`
     \| `"sold_out"`
     \| `"completed"`
     \| `"cancelled"`;
  `tags`: `string`[];
  `ticketCount`: `number`;
  `timezone`: `string`;
  `updatedAt`: `string`;
  `venueId?`: `string`;
\}\>

###### Operation Id

updateEvent

***

### feeProfiles

```ts
feeProfiles: {
  create: (request: {
     name: string;
     serviceFeeEnabled?: boolean;
     serviceFeeFixed?: number;
     serviceFeeLabel?: string;
     serviceFeePercent?: number;
   }) => Promise<{
     createdAt: string;
     deletedAt: string | null;
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     serviceFeeEnabled: boolean;
     serviceFeeFixed: string | null;
     serviceFeeLabel: string | null;
     serviceFeePercent: string | null;
     updatedAt: string;
  }>;
  delete: (profileId: string) => Promise<boolean>;
  get: (profileId: string) => Promise<{
     createdAt: string;
     deletedAt: string | null;
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     serviceFeeEnabled: boolean;
     serviceFeeFixed: string | null;
     serviceFeeLabel: string | null;
     serviceFeePercent: string | null;
     updatedAt: string;
  }>;
  list: () => Promise<{
     createdAt: string;
     deletedAt: string | null;
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     serviceFeeEnabled: boolean;
     serviceFeeFixed: string | null;
     serviceFeeLabel: string | null;
     serviceFeePercent: string | null;
     updatedAt: string;
  }[]>;
  update: (profileId: string, request: {
     name?: string;
     serviceFeeEnabled?: boolean;
     serviceFeeFixed?: number;
     serviceFeeLabel?: string;
     serviceFeePercent?: number;
   }) => Promise<{
     createdAt: string;
     deletedAt: string | null;
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     serviceFeeEnabled: boolean;
     serviceFeeFixed: string | null;
     serviceFeeLabel: string | null;
     serviceFeePercent: string | null;
     updatedAt: string;
  }>;
};
```

Defined in: [client.ts:3093](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L3093)

Fee Profiles methods

#### create()

```ts
create: (request: {
  name: string;
  serviceFeeEnabled?: boolean;
  serviceFeeFixed?: number;
  serviceFeeLabel?: string;
  serviceFeePercent?: number;
}) => Promise<{
  createdAt: string;
  deletedAt: string | null;
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  serviceFeeEnabled: boolean;
  serviceFeeFixed: string | null;
  serviceFeeLabel: string | null;
  serviceFeePercent: string | null;
  updatedAt: string;
}>;
```

Create fee profile
Create an org-level fee configuration that sales channels can reference

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `name`: `string`; `serviceFeeEnabled?`: `boolean`; `serviceFeeFixed?`: `number`; `serviceFeeLabel?`: `string`; `serviceFeePercent?`: `number`; \} |
| `request.name` | `string` |
| `request.serviceFeeEnabled?` | `boolean` |
| `request.serviceFeeFixed?` | `number` |
| `request.serviceFeeLabel?` | `string` |
| `request.serviceFeePercent?` | `number` |

##### Returns

`Promise`\<\{
  `createdAt`: `string`;
  `deletedAt`: `string` \| `null`;
  `id`: `string`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `serviceFeeEnabled`: `boolean`;
  `serviceFeeFixed`: `string` \| `null`;
  `serviceFeeLabel`: `string` \| `null`;
  `serviceFeePercent`: `string` \| `null`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

createFeeProfile

#### delete()

```ts
delete: (profileId: string) => Promise<boolean>;
```

Delete fee profile
Soft-delete a fee profile

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `profileId` | `string` |

##### Returns

`Promise`\<`boolean`\>

##### Operation Id

deleteFeeProfile

#### get()

```ts
get: (profileId: string) => Promise<{
  createdAt: string;
  deletedAt: string | null;
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  serviceFeeEnabled: boolean;
  serviceFeeFixed: string | null;
  serviceFeeLabel: string | null;
  serviceFeePercent: string | null;
  updatedAt: string;
}>;
```

Get fee profile
Get a fee profile by ID

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `profileId` | `string` |

##### Returns

`Promise`\<\{
  `createdAt`: `string`;
  `deletedAt`: `string` \| `null`;
  `id`: `string`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `serviceFeeEnabled`: `boolean`;
  `serviceFeeFixed`: `string` \| `null`;
  `serviceFeeLabel`: `string` \| `null`;
  `serviceFeePercent`: `string` \| `null`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

getFeeProfile

#### list()

```ts
list: () => Promise<{
  createdAt: string;
  deletedAt: string | null;
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  serviceFeeEnabled: boolean;
  serviceFeeFixed: string | null;
  serviceFeeLabel: string | null;
  serviceFeePercent: string | null;
  updatedAt: string;
}[]>;
```

List fee profiles
List the organisation's fee profiles

##### Returns

`Promise`\<\{
  `createdAt`: `string`;
  `deletedAt`: `string` \| `null`;
  `id`: `string`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `serviceFeeEnabled`: `boolean`;
  `serviceFeeFixed`: `string` \| `null`;
  `serviceFeeLabel`: `string` \| `null`;
  `serviceFeePercent`: `string` \| `null`;
  `updatedAt`: `string`;
\}[]\>

##### Operation Id

listFeeProfiles

#### update()

```ts
update: (profileId: string, request: {
  name?: string;
  serviceFeeEnabled?: boolean;
  serviceFeeFixed?: number;
  serviceFeeLabel?: string;
  serviceFeePercent?: number;
}) => Promise<{
  createdAt: string;
  deletedAt: string | null;
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  serviceFeeEnabled: boolean;
  serviceFeeFixed: string | null;
  serviceFeeLabel: string | null;
  serviceFeePercent: string | null;
  updatedAt: string;
}>;
```

Update fee profile
Update a fee profile

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `profileId` | `string` |
| `request` | \{ `name?`: `string`; `serviceFeeEnabled?`: `boolean`; `serviceFeeFixed?`: `number`; `serviceFeeLabel?`: `string`; `serviceFeePercent?`: `number`; \} |
| `request.name?` | `string` |
| `request.serviceFeeEnabled?` | `boolean` |
| `request.serviceFeeFixed?` | `number` |
| `request.serviceFeeLabel?` | `string` |
| `request.serviceFeePercent?` | `number` |

##### Returns

`Promise`\<\{
  `createdAt`: `string`;
  `deletedAt`: `string` \| `null`;
  `id`: `string`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `serviceFeeEnabled`: `boolean`;
  `serviceFeeFixed`: `string` \| `null`;
  `serviceFeeLabel`: `string` \| `null`;
  `serviceFeePercent`: `string` \| `null`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

updateFeeProfile

***

### identityProviders

```ts
identityProviders: {
  get: (id: string) => Promise<{
     allowedClientIds: string[];
     authorizationEndpoint: string | null;
     cacheTtl: number;
     clientId: string | null;
     configuration:   | {
      [key: string]: unknown;
      }
        | null;
     createdAt: string;
     emailDomain: string | null;
     id: string;
     isDefault: boolean;
     isEnabled: boolean;
     issuer: string;
     jwksUri: string;
     jwksUriInternal: string | null;
     organisationId: string | null;
     providerType: string;
     scopes: string[];
     supportsPkce: boolean;
     tokenEndpoint: string | null;
     tokenEndpointInternal: string | null;
     updatedAt: string;
     userinfoEndpoint: string | null;
     userinfoEndpointInternal: string | null;
  }>;
  list: (options?: {
     organisationId?: string;
   }) => Promise<{
     allowedClientIds: string[];
     authorizationEndpoint: string | null;
     cacheTtl: number;
     clientId: string | null;
     configuration:   | {
      [key: string]: unknown;
      }
        | null;
     createdAt: string;
     emailDomain: string | null;
     id: string;
     isDefault: boolean;
     isEnabled: boolean;
     issuer: string;
     jwksUri: string;
     jwksUriInternal: string | null;
     organisationId: string | null;
     providerType: string;
     scopes: string[];
     supportsPkce: boolean;
     tokenEndpoint: string | null;
     tokenEndpointInternal: string | null;
     updatedAt: string;
     userinfoEndpoint: string | null;
     userinfoEndpointInternal: string | null;
  }[]>;
  update: (id: string, request: {
     allowedClientIds?: string[];
     cacheTtl?: number;
     configuration?: {
      [key: string]: unknown;
     };
     emailDomain?: string | null;
     isDefault?: boolean;
     isEnabled?: boolean;
     scopes?: string[];
   }) => Promise<{
     allowedClientIds: string[];
     authorizationEndpoint: string | null;
     cacheTtl: number;
     clientId: string | null;
     configuration:   | {
      [key: string]: unknown;
      }
        | null;
     createdAt: string;
     emailDomain: string | null;
     id: string;
     isDefault: boolean;
     isEnabled: boolean;
     issuer: string;
     jwksUri: string;
     jwksUriInternal: string | null;
     organisationId: string | null;
     providerType: string;
     scopes: string[];
     supportsPkce: boolean;
     tokenEndpoint: string | null;
     tokenEndpointInternal: string | null;
     updatedAt: string;
     userinfoEndpoint: string | null;
     userinfoEndpointInternal: string | null;
  }>;
};
```

Defined in: [client.ts:919](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L919)

Identity Providers methods

#### get()

```ts
get: (id: string) => Promise<{
  allowedClientIds: string[];
  authorizationEndpoint: string | null;
  cacheTtl: number;
  clientId: string | null;
  configuration:   | {
   [key: string]: unknown;
   }
     | null;
  createdAt: string;
  emailDomain: string | null;
  id: string;
  isDefault: boolean;
  isEnabled: boolean;
  issuer: string;
  jwksUri: string;
  jwksUriInternal: string | null;
  organisationId: string | null;
  providerType: string;
  scopes: string[];
  supportsPkce: boolean;
  tokenEndpoint: string | null;
  tokenEndpointInternal: string | null;
  updatedAt: string;
  userinfoEndpoint: string | null;
  userinfoEndpointInternal: string | null;
}>;
```

Get identity provider
Get a specific identity provider by ID

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

##### Returns

`Promise`\<\{
  `allowedClientIds`: `string`[];
  `authorizationEndpoint`: `string` \| `null`;
  `cacheTtl`: `number`;
  `clientId`: `string` \| `null`;
  `configuration`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `createdAt`: `string`;
  `emailDomain`: `string` \| `null`;
  `id`: `string`;
  `isDefault`: `boolean`;
  `isEnabled`: `boolean`;
  `issuer`: `string`;
  `jwksUri`: `string`;
  `jwksUriInternal`: `string` \| `null`;
  `organisationId`: `string` \| `null`;
  `providerType`: `string`;
  `scopes`: `string`[];
  `supportsPkce`: `boolean`;
  `tokenEndpoint`: `string` \| `null`;
  `tokenEndpointInternal`: `string` \| `null`;
  `updatedAt`: `string`;
  `userinfoEndpoint`: `string` \| `null`;
  `userinfoEndpointInternal`: `string` \| `null`;
\}\>

##### Operation Id

getIdentityProvider

#### list()

```ts
list: (options?: {
  organisationId?: string;
}) => Promise<{
  allowedClientIds: string[];
  authorizationEndpoint: string | null;
  cacheTtl: number;
  clientId: string | null;
  configuration:   | {
   [key: string]: unknown;
   }
     | null;
  createdAt: string;
  emailDomain: string | null;
  id: string;
  isDefault: boolean;
  isEnabled: boolean;
  issuer: string;
  jwksUri: string;
  jwksUriInternal: string | null;
  organisationId: string | null;
  providerType: string;
  scopes: string[];
  supportsPkce: boolean;
  tokenEndpoint: string | null;
  tokenEndpointInternal: string | null;
  updatedAt: string;
  userinfoEndpoint: string | null;
  userinfoEndpointInternal: string | null;
}[]>;
```

List identity providers
List all identity providers for the organisation

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `organisationId?`: `string`; \} |
| `options.organisationId?` | `string` |

##### Returns

`Promise`\<\{
  `allowedClientIds`: `string`[];
  `authorizationEndpoint`: `string` \| `null`;
  `cacheTtl`: `number`;
  `clientId`: `string` \| `null`;
  `configuration`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `createdAt`: `string`;
  `emailDomain`: `string` \| `null`;
  `id`: `string`;
  `isDefault`: `boolean`;
  `isEnabled`: `boolean`;
  `issuer`: `string`;
  `jwksUri`: `string`;
  `jwksUriInternal`: `string` \| `null`;
  `organisationId`: `string` \| `null`;
  `providerType`: `string`;
  `scopes`: `string`[];
  `supportsPkce`: `boolean`;
  `tokenEndpoint`: `string` \| `null`;
  `tokenEndpointInternal`: `string` \| `null`;
  `updatedAt`: `string`;
  `userinfoEndpoint`: `string` \| `null`;
  `userinfoEndpointInternal`: `string` \| `null`;
\}[]\>

##### Operation Id

listIdentityProviders

#### update()

```ts
update: (id: string, request: {
  allowedClientIds?: string[];
  cacheTtl?: number;
  configuration?: {
   [key: string]: unknown;
  };
  emailDomain?: string | null;
  isDefault?: boolean;
  isEnabled?: boolean;
  scopes?: string[];
}) => Promise<{
  allowedClientIds: string[];
  authorizationEndpoint: string | null;
  cacheTtl: number;
  clientId: string | null;
  configuration:   | {
   [key: string]: unknown;
   }
     | null;
  createdAt: string;
  emailDomain: string | null;
  id: string;
  isDefault: boolean;
  isEnabled: boolean;
  issuer: string;
  jwksUri: string;
  jwksUriInternal: string | null;
  organisationId: string | null;
  providerType: string;
  scopes: string[];
  supportsPkce: boolean;
  tokenEndpoint: string | null;
  tokenEndpointInternal: string | null;
  updatedAt: string;
  userinfoEndpoint: string | null;
  userinfoEndpointInternal: string | null;
}>;
```

Update identity provider
Update an identity provider configuration

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | - |
| `request` | \{ `allowedClientIds?`: `string`[]; `cacheTtl?`: `number`; `configuration?`: \{ \[`key`: `string`\]: `unknown`; \}; `emailDomain?`: `string` \| `null`; `isDefault?`: `boolean`; `isEnabled?`: `boolean`; `scopes?`: `string`[]; \} | - |
| `request.allowedClientIds?` | `string`[] | **Example** `[ "backstage-app" ]` |
| `request.cacheTtl?` | `number` | **Example** `600` |
| `request.configuration?` | \{ \[`key`: `string`\]: `unknown`; \} | **Example** `{}` |
| `request.emailDomain?` | `string` \| `null` | **Example** `@example.com` |
| `request.isDefault?` | `boolean` | **Example** `false` |
| `request.isEnabled?` | `boolean` | **Example** `true` |
| `request.scopes?` | `string`[] | **Example** `[ "openid", "profile", "email" ]` |

##### Returns

`Promise`\<\{
  `allowedClientIds`: `string`[];
  `authorizationEndpoint`: `string` \| `null`;
  `cacheTtl`: `number`;
  `clientId`: `string` \| `null`;
  `configuration`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `createdAt`: `string`;
  `emailDomain`: `string` \| `null`;
  `id`: `string`;
  `isDefault`: `boolean`;
  `isEnabled`: `boolean`;
  `issuer`: `string`;
  `jwksUri`: `string`;
  `jwksUriInternal`: `string` \| `null`;
  `organisationId`: `string` \| `null`;
  `providerType`: `string`;
  `scopes`: `string`[];
  `supportsPkce`: `boolean`;
  `tokenEndpoint`: `string` \| `null`;
  `tokenEndpointInternal`: `string` \| `null`;
  `updatedAt`: `string`;
  `userinfoEndpoint`: `string` \| `null`;
  `userinfoEndpointInternal`: `string` \| `null`;
\}\>

##### Operation Id

updateIdentityProvider

***

### inventory

```ts
inventory: {
  create: (request: {
     accountId: string;
     eventId?: string;
     eventLayoutAreaId?: string;
     eventOccurrenceId?: string;
     isAllocated?: boolean;
     metadata?: Record<string, any>;
     productId?: string;
     sourceType: "event_occurrence_area" | "product";
     totalCapacity: number;
   }) => Promise<{
     accountId: string;
     available: number;
     confirmed: number;
     createdAt: string;
     eventId: string | null;
     eventLayoutAreaId: string | null;
     eventOccurrenceId: string | null;
     held: number;
     id: string;
     isAllocated: boolean;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     organisationId: string;
     productId: string | null;
     reserved: number;
     sourceType: "event_occurrence_area" | "product";
     totalCapacity: number;
     updatedAt: string;
     version: number;
  }>;
  delete: (id: string, options?: {
     accountId: string;
  }) => Promise<string>;
  get: (id: string, options?: {
     accountId: string;
   }) => Promise<{
     accountId: string;
     available: number;
     confirmed: number;
     createdAt: string;
     eventId: string | null;
     eventLayoutAreaId: string | null;
     eventOccurrenceId: string | null;
     held: number;
     id: string;
     isAllocated: boolean;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     organisationId: string;
     productId: string | null;
     reserved: number;
     sourceType: "event_occurrence_area" | "product";
     totalCapacity: number;
     updatedAt: string;
     version: number;
  }>;
  getAuditLog: (id: string, options?: {
     accountId: string;
   }) => Promise<{
     action: string;
     actorId: string | null;
     actorType: string | null;
     changes: {
      [key: string]: unknown;
     };
     createdAt: string;
     id: number;
     inventoryId: string;
     referenceId: string | null;
     referenceType: string | null;
  }[]>;
  list: (options?: {
     eventId?: string;
     eventOccurrenceId?: string;
     isAllocated?: "true" | "false";
     productId?: string;
     sourceType?: "event_occurrence_area" | "product";
   }) => Promise<{
     accountId: string;
     available: number;
     confirmed: number;
     createdAt: string;
     eventId: string | null;
     eventLayoutAreaId: string | null;
     eventOccurrenceId: string | null;
     held: number;
     id: string;
     isAllocated: boolean;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     organisationId: string;
     productId: string | null;
     reserved: number;
     sourceType: "event_occurrence_area" | "product";
     totalCapacity: number;
     updatedAt: string;
     version: number;
  }[]>;
  updateCapacity: (id: string, request: {
     accountId: string;
     totalCapacity: number;
   }) => Promise<{
     accountId: string;
     available: number;
     confirmed: number;
     createdAt: string;
     eventId: string | null;
     eventLayoutAreaId: string | null;
     eventOccurrenceId: string | null;
     held: number;
     id: string;
     isAllocated: boolean;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     organisationId: string;
     productId: string | null;
     reserved: number;
     sourceType: "event_occurrence_area" | "product";
     totalCapacity: number;
     updatedAt: string;
     version: number;
  }>;
};
```

Defined in: [client.ts:2037](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L2037)

Inventory methods

#### create()

```ts
create: (request: {
  accountId: string;
  eventId?: string;
  eventLayoutAreaId?: string;
  eventOccurrenceId?: string;
  isAllocated?: boolean;
  metadata?: Record<string, any>;
  productId?: string;
  sourceType: "event_occurrence_area" | "product";
  totalCapacity: number;
}) => Promise<{
  accountId: string;
  available: number;
  confirmed: number;
  createdAt: string;
  eventId: string | null;
  eventLayoutAreaId: string | null;
  eventOccurrenceId: string | null;
  held: number;
  id: string;
  isAllocated: boolean;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  organisationId: string;
  productId: string | null;
  reserved: number;
  sourceType: "event_occurrence_area" | "product";
  totalCapacity: number;
  updatedAt: string;
  version: number;
}>;
```

Create inventory
Create a new inventory bucket for tracking capacity

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `accountId`: `string`; `eventId?`: `string`; `eventLayoutAreaId?`: `string`; `eventOccurrenceId?`: `string`; `isAllocated?`: `boolean`; `metadata?`: `Record`\<`string`, `any`\>; `productId?`: `string`; `sourceType`: `"event_occurrence_area"` \| `"product"`; `totalCapacity`: `number`; \} |
| `request.accountId` | `string` |
| `request.eventId?` | `string` |
| `request.eventLayoutAreaId?` | `string` |
| `request.eventOccurrenceId?` | `string` |
| `request.isAllocated?` | `boolean` |
| `request.metadata?` | `Record`\<`string`, `any`\> |
| `request.productId?` | `string` |
| `request.sourceType` | `"event_occurrence_area"` \| `"product"` |
| `request.totalCapacity` | `number` |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `available`: `number`;
  `confirmed`: `number`;
  `createdAt`: `string`;
  `eventId`: `string` \| `null`;
  `eventLayoutAreaId`: `string` \| `null`;
  `eventOccurrenceId`: `string` \| `null`;
  `held`: `number`;
  `id`: `string`;
  `isAllocated`: `boolean`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `organisationId`: `string`;
  `productId`: `string` \| `null`;
  `reserved`: `number`;
  `sourceType`: `"event_occurrence_area"` \| `"product"`;
  `totalCapacity`: `number`;
  `updatedAt`: `string`;
  `version`: `number`;
\}\>

##### Operation Id

createInventory

#### delete()

```ts
delete: (id: string, options?: {
  accountId: string;
}) => Promise<string>;
```

Delete inventory
Delete an inventory bucket (only if no confirmed reservations)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `options?` | \{ `accountId`: `string`; \} |
| `options.accountId?` | `string` |

##### Returns

`Promise`\<`string`\>

##### Operation Id

deleteInventory

#### get()

```ts
get: (id: string, options?: {
  accountId: string;
}) => Promise<{
  accountId: string;
  available: number;
  confirmed: number;
  createdAt: string;
  eventId: string | null;
  eventLayoutAreaId: string | null;
  eventOccurrenceId: string | null;
  held: number;
  id: string;
  isAllocated: boolean;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  organisationId: string;
  productId: string | null;
  reserved: number;
  sourceType: "event_occurrence_area" | "product";
  totalCapacity: number;
  updatedAt: string;
  version: number;
}>;
```

Get inventory
Get a specific inventory bucket by ID

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `options?` | \{ `accountId`: `string`; \} |
| `options.accountId?` | `string` |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `available`: `number`;
  `confirmed`: `number`;
  `createdAt`: `string`;
  `eventId`: `string` \| `null`;
  `eventLayoutAreaId`: `string` \| `null`;
  `eventOccurrenceId`: `string` \| `null`;
  `held`: `number`;
  `id`: `string`;
  `isAllocated`: `boolean`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `organisationId`: `string`;
  `productId`: `string` \| `null`;
  `reserved`: `number`;
  `sourceType`: `"event_occurrence_area"` \| `"product"`;
  `totalCapacity`: `number`;
  `updatedAt`: `string`;
  `version`: `number`;
\}\>

##### Operation Id

getInventory

#### getAuditLog()

```ts
getAuditLog: (id: string, options?: {
  accountId: string;
}) => Promise<{
  action: string;
  actorId: string | null;
  actorType: string | null;
  changes: {
   [key: string]: unknown;
  };
  createdAt: string;
  id: number;
  inventoryId: string;
  referenceId: string | null;
  referenceType: string | null;
}[]>;
```

Get inventory audit log
Get the audit log for an inventory bucket

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `options?` | \{ `accountId`: `string`; \} |
| `options.accountId?` | `string` |

##### Returns

`Promise`\<\{
  `action`: `string`;
  `actorId`: `string` \| `null`;
  `actorType`: `string` \| `null`;
  `changes`: \{
   \[`key`: `string`\]: `unknown`;
  \};
  `createdAt`: `string`;
  `id`: `number`;
  `inventoryId`: `string`;
  `referenceId`: `string` \| `null`;
  `referenceType`: `string` \| `null`;
\}[]\>

##### Operation Id

getInventoryAuditLog

#### list()

```ts
list: (options?: {
  eventId?: string;
  eventOccurrenceId?: string;
  isAllocated?: "true" | "false";
  productId?: string;
  sourceType?: "event_occurrence_area" | "product";
}) => Promise<{
  accountId: string;
  available: number;
  confirmed: number;
  createdAt: string;
  eventId: string | null;
  eventLayoutAreaId: string | null;
  eventOccurrenceId: string | null;
  held: number;
  id: string;
  isAllocated: boolean;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  organisationId: string;
  productId: string | null;
  reserved: number;
  sourceType: "event_occurrence_area" | "product";
  totalCapacity: number;
  updatedAt: string;
  version: number;
}[]>;
```

List inventory
List all inventory buckets for the organisation with optional filtering

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `eventId?`: `string`; `eventOccurrenceId?`: `string`; `isAllocated?`: `"true"` \| `"false"`; `productId?`: `string`; `sourceType?`: `"event_occurrence_area"` \| `"product"`; \} |
| `options.eventId?` | `string` |
| `options.eventOccurrenceId?` | `string` |
| `options.isAllocated?` | `"true"` \| `"false"` |
| `options.productId?` | `string` |
| `options.sourceType?` | `"event_occurrence_area"` \| `"product"` |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `available`: `number`;
  `confirmed`: `number`;
  `createdAt`: `string`;
  `eventId`: `string` \| `null`;
  `eventLayoutAreaId`: `string` \| `null`;
  `eventOccurrenceId`: `string` \| `null`;
  `held`: `number`;
  `id`: `string`;
  `isAllocated`: `boolean`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `organisationId`: `string`;
  `productId`: `string` \| `null`;
  `reserved`: `number`;
  `sourceType`: `"event_occurrence_area"` \| `"product"`;
  `totalCapacity`: `number`;
  `updatedAt`: `string`;
  `version`: `number`;
\}[]\>

##### Operation Id

listInventory

#### updateCapacity()

```ts
updateCapacity: (id: string, request: {
  accountId: string;
  totalCapacity: number;
}) => Promise<{
  accountId: string;
  available: number;
  confirmed: number;
  createdAt: string;
  eventId: string | null;
  eventLayoutAreaId: string | null;
  eventOccurrenceId: string | null;
  held: number;
  id: string;
  isAllocated: boolean;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  organisationId: string;
  productId: string | null;
  reserved: number;
  sourceType: "event_occurrence_area" | "product";
  totalCapacity: number;
  updatedAt: string;
  version: number;
}>;
```

Update inventory capacity
Update the total capacity of an inventory bucket

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `request` | \{ `accountId`: `string`; `totalCapacity`: `number`; \} |
| `request.accountId` | `string` |
| `request.totalCapacity` | `number` |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `available`: `number`;
  `confirmed`: `number`;
  `createdAt`: `string`;
  `eventId`: `string` \| `null`;
  `eventLayoutAreaId`: `string` \| `null`;
  `eventOccurrenceId`: `string` \| `null`;
  `held`: `number`;
  `id`: `string`;
  `isAllocated`: `boolean`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `organisationId`: `string`;
  `productId`: `string` \| `null`;
  `reserved`: `number`;
  `sourceType`: `"event_occurrence_area"` \| `"product"`;
  `totalCapacity`: `number`;
  `updatedAt`: `string`;
  `version`: `number`;
\}\>

##### Operation Id

updateInventoryCapacity

***

### inventoryHolds

```ts
inventoryHolds: {
  createHold: (request: {
     accountId: string;
     expiresAt?: string;
     heldBy: string;
     inventoryId: string;
     quantity?: number;
     reason: string;
     seatIds?: string[];
   }) => Promise<{
     accountId: string;
     createdAt: string;
     expiresAt: string | null;
     heldBy: string | null;
     id: string;
     inventoryId: string;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     organisationId: string;
     quantity: number;
     reason: string | null;
     referenceId: string | null;
     referenceType: "subscription" | "order" | "hold" | null;
     seatIds: string[] | null;
     type: "confirmed" | "maintenance" | "hold" | "temporary";
     updatedAt: string;
  }>;
  releaseHold: (id: string, request: {
     accountId: string;
  }) => Promise<string>;
};
```

Defined in: [client.ts:2301](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L2301)

Inventory Holds methods

#### createHold()

```ts
createHold: (request: {
  accountId: string;
  expiresAt?: string;
  heldBy: string;
  inventoryId: string;
  quantity?: number;
  reason: string;
  seatIds?: string[];
}) => Promise<{
  accountId: string;
  createdAt: string;
  expiresAt: string | null;
  heldBy: string | null;
  id: string;
  inventoryId: string;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  organisationId: string;
  quantity: number;
  reason: string | null;
  referenceId: string | null;
  referenceType: "subscription" | "order" | "hold" | null;
  seatIds: string[] | null;
  type: "confirmed" | "maintenance" | "hold" | "temporary";
  updatedAt: string;
}>;
```

Create hold
Create a hold on inventory (for VIPs, promoters, etc.)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `accountId`: `string`; `expiresAt?`: `string`; `heldBy`: `string`; `inventoryId`: `string`; `quantity?`: `number`; `reason`: `string`; `seatIds?`: `string`[]; \} |
| `request.accountId` | `string` |
| `request.expiresAt?` | `string` |
| `request.heldBy` | `string` |
| `request.inventoryId` | `string` |
| `request.quantity?` | `number` |
| `request.reason` | `string` |
| `request.seatIds?` | `string`[] |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `createdAt`: `string`;
  `expiresAt`: `string` \| `null`;
  `heldBy`: `string` \| `null`;
  `id`: `string`;
  `inventoryId`: `string`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `organisationId`: `string`;
  `quantity`: `number`;
  `reason`: `string` \| `null`;
  `referenceId`: `string` \| `null`;
  `referenceType`: `"subscription"` \| `"order"` \| `"hold"` \| `null`;
  `seatIds`: `string`[] \| `null`;
  `type`: `"confirmed"` \| `"maintenance"` \| `"hold"` \| `"temporary"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

createHold

#### releaseHold()

```ts
releaseHold: (id: string, request: {
  accountId: string;
}) => Promise<string>;
```

Release hold
Release a hold and return inventory to available

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `request` | \{ `accountId`: `string`; \} |
| `request.accountId` | `string` |

##### Returns

`Promise`\<`string`\>

##### Operation Id

releaseHold

***

### inventoryReservations

```ts
inventoryReservations: {
  checkAvailability: (request: {
     requests: {
        inventoryId: string;
        quantity?: number;
        seatIds?: string[];
     }[];
   }) => Promise<{
     available: boolean;
     availableQuantity: number;
     requestedQuantity: number;
  }>;
  confirmReservation: (id: string, request: {
     accountId: string;
     referenceId?: string;
     referenceType?: "subscription" | "order" | "hold";
   }) => Promise<{
     accountId: string;
     createdAt: string;
     expiresAt: string | null;
     heldBy: string | null;
     id: string;
     inventoryId: string;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     organisationId: string;
     quantity: number;
     reason: string | null;
     referenceId: string | null;
     referenceType: "subscription" | "order" | "hold" | null;
     seatIds: string[] | null;
     type: "confirmed" | "maintenance" | "hold" | "temporary";
     updatedAt: string;
  }>;
  extendReservation: (id: string, request: {
     expiresAt: string;
   }) => Promise<{
     accountId: string;
     createdAt: string;
     expiresAt: string | null;
     heldBy: string | null;
     id: string;
     inventoryId: string;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     organisationId: string;
     quantity: number;
     reason: string | null;
     referenceId: string | null;
     referenceType: "subscription" | "order" | "hold" | null;
     seatIds: string[] | null;
     type: "confirmed" | "maintenance" | "hold" | "temporary";
     updatedAt: string;
  }>;
  getReservation: (id: string, options?: {
     accountId: string;
   }) => Promise<{
     accountId: string;
     createdAt: string;
     expiresAt: string | null;
     heldBy: string | null;
     id: string;
     inventoryId: string;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     organisationId: string;
     quantity: number;
     reason: string | null;
     referenceId: string | null;
     referenceType: "subscription" | "order" | "hold" | null;
     seatIds: string[] | null;
     type: "confirmed" | "maintenance" | "hold" | "temporary";
     updatedAt: string;
  }>;
  listReservations: (options?: {
     accountId?: string;
     inventoryId?: string;
     referenceId?: string;
     referenceType?: "subscription" | "order" | "hold";
     type?: "confirmed" | "maintenance" | "hold" | "temporary";
   }) => Promise<{
     accountId: string;
     createdAt: string;
     expiresAt: string | null;
     heldBy: string | null;
     id: string;
     inventoryId: string;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     organisationId: string;
     quantity: number;
     reason: string | null;
     referenceId: string | null;
     referenceType: "subscription" | "order" | "hold" | null;
     seatIds: string[] | null;
     type: "confirmed" | "maintenance" | "hold" | "temporary";
     updatedAt: string;
  }[]>;
  releaseReservation: (id: string, request: {
     accountId: string;
  }) => Promise<string>;
  reserve: (request: {
     accountId: string;
     inventoryId: string;
     quantity?: number;
     referenceId: string;
     referenceType: "subscription" | "order" | "hold";
     seatIds?: string[];
     ttlSeconds?: number;
   }) => Promise<{
     accountId: string;
     createdAt: string;
     expiresAt: string | null;
     heldBy: string | null;
     id: string;
     inventoryId: string;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     organisationId: string;
     quantity: number;
     reason: string | null;
     referenceId: string | null;
     referenceType: "subscription" | "order" | "hold" | null;
     seatIds: string[] | null;
     type: "confirmed" | "maintenance" | "hold" | "temporary";
     updatedAt: string;
  }>;
};
```

Defined in: [client.ts:2186](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L2186)

Inventory Reservations methods

#### checkAvailability()

```ts
checkAvailability: (request: {
  requests: {
     inventoryId: string;
     quantity?: number;
     seatIds?: string[];
  }[];
}) => Promise<{
  available: boolean;
  availableQuantity: number;
  requestedQuantity: number;
}>;
```

Check availability
Check if requested quantity is available in inventory

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `requests`: \{ `inventoryId`: `string`; `quantity?`: `number`; `seatIds?`: `string`[]; \}[]; \} |
| `request.requests` | \{ `inventoryId`: `string`; `quantity?`: `number`; `seatIds?`: `string`[]; \}[] |

##### Returns

`Promise`\<\{
  `available`: `boolean`;
  `availableQuantity`: `number`;
  `requestedQuantity`: `number`;
\}\>

##### Operation Id

checkAvailability

#### confirmReservation()

```ts
confirmReservation: (id: string, request: {
  accountId: string;
  referenceId?: string;
  referenceType?: "subscription" | "order" | "hold";
}) => Promise<{
  accountId: string;
  createdAt: string;
  expiresAt: string | null;
  heldBy: string | null;
  id: string;
  inventoryId: string;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  organisationId: string;
  quantity: number;
  reason: string | null;
  referenceId: string | null;
  referenceType: "subscription" | "order" | "hold" | null;
  seatIds: string[] | null;
  type: "confirmed" | "maintenance" | "hold" | "temporary";
  updatedAt: string;
}>;
```

Confirm reservation
Confirm a temporary reservation (converts reserved to confirmed)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `request` | \{ `accountId`: `string`; `referenceId?`: `string`; `referenceType?`: `"subscription"` \| `"order"` \| `"hold"`; \} |
| `request.accountId` | `string` |
| `request.referenceId?` | `string` |
| `request.referenceType?` | `"subscription"` \| `"order"` \| `"hold"` |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `createdAt`: `string`;
  `expiresAt`: `string` \| `null`;
  `heldBy`: `string` \| `null`;
  `id`: `string`;
  `inventoryId`: `string`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `organisationId`: `string`;
  `quantity`: `number`;
  `reason`: `string` \| `null`;
  `referenceId`: `string` \| `null`;
  `referenceType`: `"subscription"` \| `"order"` \| `"hold"` \| `null`;
  `seatIds`: `string`[] \| `null`;
  `type`: `"confirmed"` \| `"maintenance"` \| `"hold"` \| `"temporary"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

confirmReservation

#### extendReservation()

```ts
extendReservation: (id: string, request: {
  expiresAt: string;
}) => Promise<{
  accountId: string;
  createdAt: string;
  expiresAt: string | null;
  heldBy: string | null;
  id: string;
  inventoryId: string;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  organisationId: string;
  quantity: number;
  reason: string | null;
  referenceId: string | null;
  referenceType: "subscription" | "order" | "hold" | null;
  seatIds: string[] | null;
  type: "confirmed" | "maintenance" | "hold" | "temporary";
  updatedAt: string;
}>;
```

Extend reservation
Extend the expiry time of a temporary reservation

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `request` | \{ `expiresAt`: `string`; \} |
| `request.expiresAt` | `string` |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `createdAt`: `string`;
  `expiresAt`: `string` \| `null`;
  `heldBy`: `string` \| `null`;
  `id`: `string`;
  `inventoryId`: `string`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `organisationId`: `string`;
  `quantity`: `number`;
  `reason`: `string` \| `null`;
  `referenceId`: `string` \| `null`;
  `referenceType`: `"subscription"` \| `"order"` \| `"hold"` \| `null`;
  `seatIds`: `string`[] \| `null`;
  `type`: `"confirmed"` \| `"maintenance"` \| `"hold"` \| `"temporary"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

extendReservation

#### getReservation()

```ts
getReservation: (id: string, options?: {
  accountId: string;
}) => Promise<{
  accountId: string;
  createdAt: string;
  expiresAt: string | null;
  heldBy: string | null;
  id: string;
  inventoryId: string;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  organisationId: string;
  quantity: number;
  reason: string | null;
  referenceId: string | null;
  referenceType: "subscription" | "order" | "hold" | null;
  seatIds: string[] | null;
  type: "confirmed" | "maintenance" | "hold" | "temporary";
  updatedAt: string;
}>;
```

Get reservation
Get a specific reservation by ID

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `options?` | \{ `accountId`: `string`; \} |
| `options.accountId?` | `string` |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `createdAt`: `string`;
  `expiresAt`: `string` \| `null`;
  `heldBy`: `string` \| `null`;
  `id`: `string`;
  `inventoryId`: `string`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `organisationId`: `string`;
  `quantity`: `number`;
  `reason`: `string` \| `null`;
  `referenceId`: `string` \| `null`;
  `referenceType`: `"subscription"` \| `"order"` \| `"hold"` \| `null`;
  `seatIds`: `string`[] \| `null`;
  `type`: `"confirmed"` \| `"maintenance"` \| `"hold"` \| `"temporary"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

getReservation

#### listReservations()

```ts
listReservations: (options?: {
  accountId?: string;
  inventoryId?: string;
  referenceId?: string;
  referenceType?: "subscription" | "order" | "hold";
  type?: "confirmed" | "maintenance" | "hold" | "temporary";
}) => Promise<{
  accountId: string;
  createdAt: string;
  expiresAt: string | null;
  heldBy: string | null;
  id: string;
  inventoryId: string;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  organisationId: string;
  quantity: number;
  reason: string | null;
  referenceId: string | null;
  referenceType: "subscription" | "order" | "hold" | null;
  seatIds: string[] | null;
  type: "confirmed" | "maintenance" | "hold" | "temporary";
  updatedAt: string;
}[]>;
```

List reservations
List all reservations with optional filtering

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `accountId?`: `string`; `inventoryId?`: `string`; `referenceId?`: `string`; `referenceType?`: `"subscription"` \| `"order"` \| `"hold"`; `type?`: `"confirmed"` \| `"maintenance"` \| `"hold"` \| `"temporary"`; \} |
| `options.accountId?` | `string` |
| `options.inventoryId?` | `string` |
| `options.referenceId?` | `string` |
| `options.referenceType?` | `"subscription"` \| `"order"` \| `"hold"` |
| `options.type?` | `"confirmed"` \| `"maintenance"` \| `"hold"` \| `"temporary"` |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `createdAt`: `string`;
  `expiresAt`: `string` \| `null`;
  `heldBy`: `string` \| `null`;
  `id`: `string`;
  `inventoryId`: `string`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `organisationId`: `string`;
  `quantity`: `number`;
  `reason`: `string` \| `null`;
  `referenceId`: `string` \| `null`;
  `referenceType`: `"subscription"` \| `"order"` \| `"hold"` \| `null`;
  `seatIds`: `string`[] \| `null`;
  `type`: `"confirmed"` \| `"maintenance"` \| `"hold"` \| `"temporary"`;
  `updatedAt`: `string`;
\}[]\>

##### Operation Id

listReservations

#### releaseReservation()

```ts
releaseReservation: (id: string, request: {
  accountId: string;
}) => Promise<string>;
```

Release reservation
Release a reservation and return inventory to available

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `request` | \{ `accountId`: `string`; \} |
| `request.accountId` | `string` |

##### Returns

`Promise`\<`string`\>

##### Operation Id

releaseReservation

#### reserve()

```ts
reserve: (request: {
  accountId: string;
  inventoryId: string;
  quantity?: number;
  referenceId: string;
  referenceType: "subscription" | "order" | "hold";
  seatIds?: string[];
  ttlSeconds?: number;
}) => Promise<{
  accountId: string;
  createdAt: string;
  expiresAt: string | null;
  heldBy: string | null;
  id: string;
  inventoryId: string;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  organisationId: string;
  quantity: number;
  reason: string | null;
  referenceId: string | null;
  referenceType: "subscription" | "order" | "hold" | null;
  seatIds: string[] | null;
  type: "confirmed" | "maintenance" | "hold" | "temporary";
  updatedAt: string;
}>;
```

Reserve inventory
Create a temporary reservation for GA or allocated seats

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `accountId`: `string`; `inventoryId`: `string`; `quantity?`: `number`; `referenceId`: `string`; `referenceType`: `"subscription"` \| `"order"` \| `"hold"`; `seatIds?`: `string`[]; `ttlSeconds?`: `number`; \} |
| `request.accountId` | `string` |
| `request.inventoryId` | `string` |
| `request.quantity?` | `number` |
| `request.referenceId` | `string` |
| `request.referenceType` | `"subscription"` \| `"order"` \| `"hold"` |
| `request.seatIds?` | `string`[] |
| `request.ttlSeconds?` | `number` |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `createdAt`: `string`;
  `expiresAt`: `string` \| `null`;
  `heldBy`: `string` \| `null`;
  `id`: `string`;
  `inventoryId`: `string`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `organisationId`: `string`;
  `quantity`: `number`;
  `reason`: `string` \| `null`;
  `referenceId`: `string` \| `null`;
  `referenceType`: `"subscription"` \| `"order"` \| `"hold"` \| `null`;
  `seatIds`: `string`[] \| `null`;
  `type`: `"confirmed"` \| `"maintenance"` \| `"hold"` \| `"temporary"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

reserveInventory

***

### inventorySeats

```ts
inventorySeats: {
  importSeats: (id: string, request: {
     seats: {
        attributes?: Record<string, any>;
        eventLayoutSeatId?: string;
        isAccessible?: boolean;
        isCompanion?: boolean;
        priceCategory?: string;
        rowName: string;
        seatNumber: string;
     }[];
   }) => Promise<{
     count: number;
     seats: {
        accountId: string;
        attributes:   | {
         [key: string]: unknown;
         }
           | null;
        createdAt: string;
        eventLayoutSeatId: string | null;
        id: string;
        inventoryId: string;
        isAccessible: boolean;
        isCompanion: boolean;
        organisationId: string;
        priceCategory: string | null;
        reservationId: string | null;
        rowName: string;
        seatNumber: string;
        status: "available" | "held" | "reserved" | "confirmed" | "maintenance";
        updatedAt: string;
        version: number;
     }[];
  }>;
  listSeats: (id: string, options?: {
     isAccessible?: "true" | "false";
     priceCategory?: string;
     rowName?: string;
     status?: "available" | "held" | "reserved" | "confirmed" | "maintenance";
   }) => Promise<{
     accountId: string;
     attributes:   | {
      [key: string]: unknown;
      }
        | null;
     createdAt: string;
     eventLayoutSeatId: string | null;
     id: string;
     inventoryId: string;
     isAccessible: boolean;
     isCompanion: boolean;
     organisationId: string;
     priceCategory: string | null;
     reservationId: string | null;
     rowName: string;
     seatNumber: string;
     status: "available" | "held" | "reserved" | "confirmed" | "maintenance";
     updatedAt: string;
     version: number;
  }[]>;
};
```

Defined in: [client.ts:2146](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L2146)

Inventory Seats methods

#### importSeats()

```ts
importSeats: (id: string, request: {
  seats: {
     attributes?: Record<string, any>;
     eventLayoutSeatId?: string;
     isAccessible?: boolean;
     isCompanion?: boolean;
     priceCategory?: string;
     rowName: string;
     seatNumber: string;
  }[];
}) => Promise<{
  count: number;
  seats: {
     accountId: string;
     attributes:   | {
      [key: string]: unknown;
      }
        | null;
     createdAt: string;
     eventLayoutSeatId: string | null;
     id: string;
     inventoryId: string;
     isAccessible: boolean;
     isCompanion: boolean;
     organisationId: string;
     priceCategory: string | null;
     reservationId: string | null;
     rowName: string;
     seatNumber: string;
     status: "available" | "held" | "reserved" | "confirmed" | "maintenance";
     updatedAt: string;
     version: number;
  }[];
}>;
```

Bulk import seats
Import seats into an allocated inventory bucket

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `request` | \{ `seats`: \{ `attributes?`: `Record`\<`string`, `any`\>; `eventLayoutSeatId?`: `string`; `isAccessible?`: `boolean`; `isCompanion?`: `boolean`; `priceCategory?`: `string`; `rowName`: `string`; `seatNumber`: `string`; \}[]; \} |
| `request.seats` | \{ `attributes?`: `Record`\<`string`, `any`\>; `eventLayoutSeatId?`: `string`; `isAccessible?`: `boolean`; `isCompanion?`: `boolean`; `priceCategory?`: `string`; `rowName`: `string`; `seatNumber`: `string`; \}[] |

##### Returns

`Promise`\<\{
  `count`: `number`;
  `seats`: \{
     `accountId`: `string`;
     `attributes`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `createdAt`: `string`;
     `eventLayoutSeatId`: `string` \| `null`;
     `id`: `string`;
     `inventoryId`: `string`;
     `isAccessible`: `boolean`;
     `isCompanion`: `boolean`;
     `organisationId`: `string`;
     `priceCategory`: `string` \| `null`;
     `reservationId`: `string` \| `null`;
     `rowName`: `string`;
     `seatNumber`: `string`;
     `status`: `"available"` \| `"held"` \| `"reserved"` \| `"confirmed"` \| `"maintenance"`;
     `updatedAt`: `string`;
     `version`: `number`;
  \}[];
\}\>

##### Operation Id

bulkImportSeats

#### listSeats()

```ts
listSeats: (id: string, options?: {
  isAccessible?: "true" | "false";
  priceCategory?: string;
  rowName?: string;
  status?: "available" | "held" | "reserved" | "confirmed" | "maintenance";
}) => Promise<{
  accountId: string;
  attributes:   | {
   [key: string]: unknown;
   }
     | null;
  createdAt: string;
  eventLayoutSeatId: string | null;
  id: string;
  inventoryId: string;
  isAccessible: boolean;
  isCompanion: boolean;
  organisationId: string;
  priceCategory: string | null;
  reservationId: string | null;
  rowName: string;
  seatNumber: string;
  status: "available" | "held" | "reserved" | "confirmed" | "maintenance";
  updatedAt: string;
  version: number;
}[]>;
```

List inventory seats
List all seats for an allocated inventory bucket

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `options?` | \{ `isAccessible?`: `"true"` \| `"false"`; `priceCategory?`: `string`; `rowName?`: `string`; `status?`: `"available"` \| `"held"` \| `"reserved"` \| `"confirmed"` \| `"maintenance"`; \} |
| `options.isAccessible?` | `"true"` \| `"false"` |
| `options.priceCategory?` | `string` |
| `options.rowName?` | `string` |
| `options.status?` | `"available"` \| `"held"` \| `"reserved"` \| `"confirmed"` \| `"maintenance"` |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `attributes`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `createdAt`: `string`;
  `eventLayoutSeatId`: `string` \| `null`;
  `id`: `string`;
  `inventoryId`: `string`;
  `isAccessible`: `boolean`;
  `isCompanion`: `boolean`;
  `organisationId`: `string`;
  `priceCategory`: `string` \| `null`;
  `reservationId`: `string` \| `null`;
  `rowName`: `string`;
  `seatNumber`: `string`;
  `status`: `"available"` \| `"held"` \| `"reserved"` \| `"confirmed"` \| `"maintenance"`;
  `updatedAt`: `string`;
  `version`: `number`;
\}[]\>

##### Operation Id

listInventorySeats

***

### me

```ts
me: {
  current: () => Promise<{
     email: string;
     externalUserId?: string;
     firstName?: string;
     id: string;
     identityProvider?: string;
     lastName?: string;
  }>;
  organisations: () => Promise<{
     id: string;
     logoUrl?: string;
     name: string;
     primaryColor?: string;
     secondaryColor?: string;
     userId: string;
  }[]>;
  permissions: (options?: {
     action?: string;
     resource?: string;
   }) => Promise<{
     filters: {
        action: string | null;
        resource: string | null;
     };
     isOrgAdmin: boolean;
     permissions: {
        accounts: string[];
        isAllAccounts: boolean;
        permission: string;
     }[];
  }>;
  roles: () => Promise<{
     isOrgAdmin: boolean;
     roles: {
        accountId: string;
        description: string | null;
        id: string;
        isSystemRole: boolean;
        name: string | null;
     }[];
  }>;
};
```

Defined in: [client.ts:746](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L746)

Me methods

#### current()

```ts
current: () => Promise<{
  email: string;
  externalUserId?: string;
  firstName?: string;
  id: string;
  identityProvider?: string;
  lastName?: string;
}>;
```

Get current user
Get the currently authenticated user information

##### Returns

`Promise`\<\{
  `email`: `string`;
  `externalUserId?`: `string`;
  `firstName?`: `string`;
  `id`: `string`;
  `identityProvider?`: `string`;
  `lastName?`: `string`;
\}\>

##### Operation Id

getCurrentUser

#### organisations()

```ts
organisations: () => Promise<{
  id: string;
  logoUrl?: string;
  name: string;
  primaryColor?: string;
  secondaryColor?: string;
  userId: string;
}[]>;
```

Get my organisations
Get all organisations the current user is a member of

##### Returns

`Promise`\<\{
  `id`: `string`;
  `logoUrl?`: `string`;
  `name`: `string`;
  `primaryColor?`: `string`;
  `secondaryColor?`: `string`;
  `userId`: `string`;
\}[]\>

##### Operation Id

getMyOrganisations

#### permissions()

```ts
permissions: (options?: {
  action?: string;
  resource?: string;
}) => Promise<{
  filters: {
     action: string | null;
     resource: string | null;
  };
  isOrgAdmin: boolean;
  permissions: {
     accounts: string[];
     isAllAccounts: boolean;
     permission: string;
  }[];
}>;
```

Get my permissions
Get the current user's effective permissions based on their role assignments. Supports filtering by resource and/or action.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `action?`: `string`; `resource?`: `string`; \} |
| `options.action?` | `string` |
| `options.resource?` | `string` |

##### Returns

`Promise`\<\{
  `filters`: \{
     `action`: `string` \| `null`;
     `resource`: `string` \| `null`;
  \};
  `isOrgAdmin`: `boolean`;
  `permissions`: \{
     `accounts`: `string`[];
     `isAllAccounts`: `boolean`;
     `permission`: `string`;
  \}[];
\}\>

##### Operation Id

getMyPermissions

#### roles()

```ts
roles: () => Promise<{
  isOrgAdmin: boolean;
  roles: {
     accountId: string;
     description: string | null;
     id: string;
     isSystemRole: boolean;
     name: string | null;
  }[];
}>;
```

Get my roles
Get the current user's role assignments with role info (name, description). Does not include permissions - use /me/permissions for that.

##### Returns

`Promise`\<\{
  `isOrgAdmin`: `boolean`;
  `roles`: \{
     `accountId`: `string`;
     `description`: `string` \| `null`;
     `id`: `string`;
     `isSystemRole`: `boolean`;
     `name`: `string` \| `null`;
  \}[];
\}\>

##### Operation Id

getMyRoles

***

### meta

```ts
meta: {
  versions: () => Promise<{
     current: string;
     resolved: string;
     versions: {
        breakingChanges: string[];
        date: string;
        deprecatedAt: string | null;
        status: "current" | "supported" | "deprecated" | "sunset";
        summary: string;
        sunsetAt: string | null;
     }[];
  }>;
};
```

Defined in: [client.ts:651](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L651)

Meta methods

#### versions()

```ts
versions: () => Promise<{
  current: string;
  resolved: string;
  versions: {
     breakingChanges: string[];
     date: string;
     deprecatedAt: string | null;
     status: "current" | "supported" | "deprecated" | "sunset";
     summary: string;
     sunsetAt: string | null;
  }[];
}>;
```

List API versions
Lists all dated API versions with their lifecycle status. Pin a version per-request with the TL-Version header; organisations are pinned to the version current at signup by default.

##### Returns

`Promise`\<\{
  `current`: `string`;
  `resolved`: `string`;
  `versions`: \{
     `breakingChanges`: `string`[];
     `date`: `string`;
     `deprecatedAt`: `string` \| `null`;
     `status`: `"current"` \| `"supported"` \| `"deprecated"` \| `"sunset"`;
     `summary`: `string`;
     `sunsetAt`: `string` \| `null`;
  \}[];
\}\>

##### Operation Id

listApiVersions

***

### orders

```ts
orders: {
  addItem: (orderId: string, request: {
     description?: string;
     feeDetails?: Record<string, any>;
     metadata?: Record<string, any>;
     name: string;
     productDetails?: Record<string, any>;
     quantity?: number;
     ticketDetails?: Record<string, any>;
     type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
     unitPrice: string;
   }) => Promise<{
     item: {
        createdAt: string;
        description: string | null;
        feeDetails:   | {
         [key: string]: unknown;
         }
           | null;
        id: string;
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        name: string;
        orderId: string;
        productDetails:   | {
         [key: string]: unknown;
         }
           | null;
        quantity: number;
        ticketDetails:   | {
         [key: string]: unknown;
         }
           | null;
        totalPrice: string;
        type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
        unitPrice: string;
        updatedAt: string;
     };
     order: {
        accountId: string;
        cancellationReason: string | null;
        cancelledAt: string | null;
        channel: string | null;
        completedAt: string | null;
        confirmedAt: string | null;
        createdAt: string;
        currency: string;
        customerId: string | null;
        customerNotes: string | null;
        discountTotal: string;
        expiresAt: string | null;
        feeTotal: string;
        id: string;
        internalNotes: string | null;
        isGuestCheckout: boolean;
        items?: {
           createdAt: string;
           description: string | null;
           feeDetails:   | {
            [key: string]: unknown;
            }
              | null;
           id: string;
           metadata:   | {
            [key: string]: unknown;
            }
              | null;
           name: string;
           orderId: string;
           productDetails:   | {
            [key: string]: unknown;
            }
              | null;
           quantity: number;
           ticketDetails:   | {
            [key: string]: unknown;
            }
              | null;
           totalPrice: string;
           type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
           unitPrice: string;
           updatedAt: string;
        }[];
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        orderNumber: string;
        organisationId: string;
        status:   | "completed"
           | "cancelled"
           | "pending"
           | "failed"
           | "refunded"
           | "confirmed"
           | "processing"
           | "expired";
        subtotal: string;
        taxTotal: string;
        total: string;
        updatedAt: string;
     };
  }>;
  cancel: (orderId: string, request: {
     reason: string;
   }) => Promise<{
     accountId: string;
     cancellationReason: string | null;
     cancelledAt: string | null;
     channel: string | null;
     completedAt: string | null;
     confirmedAt: string | null;
     createdAt: string;
     currency: string;
     customerId: string | null;
     customerNotes: string | null;
     discountTotal: string;
     expiresAt: string | null;
     feeTotal: string;
     id: string;
     internalNotes: string | null;
     isGuestCheckout: boolean;
     items?: {
        createdAt: string;
        description: string | null;
        feeDetails:   | {
         [key: string]: unknown;
         }
           | null;
        id: string;
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        name: string;
        orderId: string;
        productDetails:   | {
         [key: string]: unknown;
         }
           | null;
        quantity: number;
        ticketDetails:   | {
         [key: string]: unknown;
         }
           | null;
        totalPrice: string;
        type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
        unitPrice: string;
        updatedAt: string;
     }[];
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     orderNumber: string;
     organisationId: string;
     status:   | "completed"
        | "cancelled"
        | "pending"
        | "failed"
        | "refunded"
        | "confirmed"
        | "processing"
        | "expired";
     subtotal: string;
     taxTotal: string;
     total: string;
     updatedAt: string;
  }>;
  create: (request: {
     accountId: string;
     channel?: string;
     currency?: string;
     customerId?: string;
     customerNotes?: string;
     expiresInMinutes?: number;
     internalNotes?: string;
     isGuestCheckout?: boolean;
     items?: {
        description?: string;
        feeDetails?: Record<string, any>;
        metadata?: Record<string, any>;
        name: string;
        productDetails?: Record<string, any>;
        quantity?: number;
        ticketDetails?: Record<string, any>;
        type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
        unitPrice: string;
     }[];
     metadata?: Record<string, any>;
   }) => Promise<{
     accountId: string;
     cancellationReason: string | null;
     cancelledAt: string | null;
     channel: string | null;
     completedAt: string | null;
     confirmedAt: string | null;
     createdAt: string;
     currency: string;
     customerId: string | null;
     customerNotes: string | null;
     discountTotal: string;
     expiresAt: string | null;
     feeTotal: string;
     id: string;
     internalNotes: string | null;
     isGuestCheckout: boolean;
     items?: {
        createdAt: string;
        description: string | null;
        feeDetails:   | {
         [key: string]: unknown;
         }
           | null;
        id: string;
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        name: string;
        orderId: string;
        productDetails:   | {
         [key: string]: unknown;
         }
           | null;
        quantity: number;
        ticketDetails:   | {
         [key: string]: unknown;
         }
           | null;
        totalPrice: string;
        type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
        unitPrice: string;
        updatedAt: string;
     }[];
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     orderNumber: string;
     organisationId: string;
     status:   | "completed"
        | "cancelled"
        | "pending"
        | "failed"
        | "refunded"
        | "confirmed"
        | "processing"
        | "expired";
     subtotal: string;
     taxTotal: string;
     total: string;
     updatedAt: string;
  }>;
  get: (orderId: string) => Promise<{
     accountId: string;
     cancellationReason: string | null;
     cancelledAt: string | null;
     channel: string | null;
     completedAt: string | null;
     confirmedAt: string | null;
     createdAt: string;
     currency: string;
     customerId: string | null;
     customerNotes: string | null;
     discountTotal: string;
     expiresAt: string | null;
     feeTotal: string;
     id: string;
     internalNotes: string | null;
     isGuestCheckout: boolean;
     items?: {
        createdAt: string;
        description: string | null;
        feeDetails:   | {
         [key: string]: unknown;
         }
           | null;
        id: string;
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        name: string;
        orderId: string;
        productDetails:   | {
         [key: string]: unknown;
         }
           | null;
        quantity: number;
        ticketDetails:   | {
         [key: string]: unknown;
         }
           | null;
        totalPrice: string;
        type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
        unitPrice: string;
        updatedAt: string;
     }[];
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     orderNumber: string;
     organisationId: string;
     status:   | "completed"
        | "cancelled"
        | "pending"
        | "failed"
        | "refunded"
        | "confirmed"
        | "processing"
        | "expired";
     subtotal: string;
     taxTotal: string;
     total: string;
     updatedAt: string;
  }>;
  getByNumber: (orderNumber: string) => Promise<{
     accountId: string;
     cancellationReason: string | null;
     cancelledAt: string | null;
     channel: string | null;
     completedAt: string | null;
     confirmedAt: string | null;
     createdAt: string;
     currency: string;
     customerId: string | null;
     customerNotes: string | null;
     discountTotal: string;
     expiresAt: string | null;
     feeTotal: string;
     id: string;
     internalNotes: string | null;
     isGuestCheckout: boolean;
     items?: {
        createdAt: string;
        description: string | null;
        feeDetails:   | {
         [key: string]: unknown;
         }
           | null;
        id: string;
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        name: string;
        orderId: string;
        productDetails:   | {
         [key: string]: unknown;
         }
           | null;
        quantity: number;
        ticketDetails:   | {
         [key: string]: unknown;
         }
           | null;
        totalPrice: string;
        type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
        unitPrice: string;
        updatedAt: string;
     }[];
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     orderNumber: string;
     organisationId: string;
     status:   | "completed"
        | "cancelled"
        | "pending"
        | "failed"
        | "refunded"
        | "confirmed"
        | "processing"
        | "expired";
     subtotal: string;
     taxTotal: string;
     total: string;
     updatedAt: string;
  }>;
  getPaymentStatus: (orderId: string) => Promise<{
     amount: string | null;
     currency: string | null;
     failedAt: string | null;
     failureReason: string | null;
     paidAt: string | null;
     paymentId: string | null;
     status:   | "cancelled"
        | "pending"
        | "succeeded"
        | "failed"
        | "processing"
        | "requires_action"
        | "none";
  }>;
  initiatePayment: (orderId: string, request: {
     metadata?: Record<string, any>;
     paymentMethod:   | "bank_transfer"
        | "online_card"
        | "online_bank_transfer"
        | "online_wallet"
        | "in_person_card"
        | "in_person_cash"
        | "cheque";
     returnUrl?: string;
   }) => Promise<{
     clientSecret: string | null;
     expiresAt: string | null;
     paymentId: string;
     redirectUrl: string | null;
     status: "pending" | "succeeded" | "failed" | "processing" | "requires_action";
  }>;
  list: (options?: {
     channel?: string;
     customerId?: string;
     fromDate?: string;
     limit?: string;
     page?: string;
     search?: string;
     status?:   | "completed"
        | "cancelled"
        | "pending"
        | "failed"
        | "refunded"
        | "confirmed"
        | "processing"
        | "expired";
     toDate?: string;
   }) => Promise<{
     orders: {
        accountId: string;
        cancellationReason: string | null;
        cancelledAt: string | null;
        channel: string | null;
        completedAt: string | null;
        confirmedAt: string | null;
        createdAt: string;
        currency: string;
        customerId: string | null;
        customerNotes: string | null;
        discountTotal: string;
        expiresAt: string | null;
        feeTotal: string;
        id: string;
        internalNotes: string | null;
        isGuestCheckout: boolean;
        items?: {
           createdAt: string;
           description: string | null;
           feeDetails:   | {
            [key: ...]: ...;
            }
              | null;
           id: string;
           metadata:   | {
            [key: ...]: ...;
            }
              | null;
           name: string;
           orderId: string;
           productDetails:   | {
            [key: ...]: ...;
            }
              | null;
           quantity: number;
           ticketDetails:   | {
            [key: ...]: ...;
            }
              | null;
           totalPrice: string;
           type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
           unitPrice: string;
           updatedAt: string;
        }[];
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        orderNumber: string;
        organisationId: string;
        status:   | "completed"
           | "cancelled"
           | "pending"
           | "failed"
           | "refunded"
           | "confirmed"
           | "processing"
           | "expired";
        subtotal: string;
        taxTotal: string;
        total: string;
        updatedAt: string;
     }[];
     pagination: {
        limit: number;
        page: number;
        total: number;
        totalPages: number;
     };
  }>;
  removeItem: (orderId: string, itemId: string) => Promise<{
     accountId: string;
     cancellationReason: string | null;
     cancelledAt: string | null;
     channel: string | null;
     completedAt: string | null;
     confirmedAt: string | null;
     createdAt: string;
     currency: string;
     customerId: string | null;
     customerNotes: string | null;
     discountTotal: string;
     expiresAt: string | null;
     feeTotal: string;
     id: string;
     internalNotes: string | null;
     isGuestCheckout: boolean;
     items?: {
        createdAt: string;
        description: string | null;
        feeDetails:   | {
         [key: string]: unknown;
         }
           | null;
        id: string;
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        name: string;
        orderId: string;
        productDetails:   | {
         [key: string]: unknown;
         }
           | null;
        quantity: number;
        ticketDetails:   | {
         [key: string]: unknown;
         }
           | null;
        totalPrice: string;
        type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
        unitPrice: string;
        updatedAt: string;
     }[];
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     orderNumber: string;
     organisationId: string;
     status:   | "completed"
        | "cancelled"
        | "pending"
        | "failed"
        | "refunded"
        | "confirmed"
        | "processing"
        | "expired";
     subtotal: string;
     taxTotal: string;
     total: string;
     updatedAt: string;
  }>;
  transitionStatus: (orderId: string, request: {
     status:   | "completed"
        | "cancelled"
        | "failed"
        | "refunded"
        | "confirmed"
        | "processing"
        | "expired";
   }) => Promise<{
     accountId: string;
     cancellationReason: string | null;
     cancelledAt: string | null;
     channel: string | null;
     completedAt: string | null;
     confirmedAt: string | null;
     createdAt: string;
     currency: string;
     customerId: string | null;
     customerNotes: string | null;
     discountTotal: string;
     expiresAt: string | null;
     feeTotal: string;
     id: string;
     internalNotes: string | null;
     isGuestCheckout: boolean;
     items?: {
        createdAt: string;
        description: string | null;
        feeDetails:   | {
         [key: string]: unknown;
         }
           | null;
        id: string;
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        name: string;
        orderId: string;
        productDetails:   | {
         [key: string]: unknown;
         }
           | null;
        quantity: number;
        ticketDetails:   | {
         [key: string]: unknown;
         }
           | null;
        totalPrice: string;
        type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
        unitPrice: string;
        updatedAt: string;
     }[];
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     orderNumber: string;
     organisationId: string;
     status:   | "completed"
        | "cancelled"
        | "pending"
        | "failed"
        | "refunded"
        | "confirmed"
        | "processing"
        | "expired";
     subtotal: string;
     taxTotal: string;
     total: string;
     updatedAt: string;
  }>;
  update: (orderId: string, request: {
     addItems?: {
        description?: string;
        feeDetails?: Record<string, any>;
        metadata?: Record<string, any>;
        name: string;
        productDetails?: Record<string, any>;
        quantity?: number;
        ticketDetails?: Record<string, any>;
        type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
        unitPrice: string;
     }[];
     customerId?: string;
     customerNotes?: string;
     extendExpiry?: boolean;
     internalNotes?: string;
     metadata?: Record<string, any>;
     removeItems?: string[];
     updateItems?: {
        itemId: string;
        updates: {
           metadata?: Record<string, any>;
           quantity?: number;
           unitPrice?: string;
        };
     }[];
   }) => Promise<{
     accountId: string;
     cancellationReason: string | null;
     cancelledAt: string | null;
     channel: string | null;
     completedAt: string | null;
     confirmedAt: string | null;
     createdAt: string;
     currency: string;
     customerId: string | null;
     customerNotes: string | null;
     discountTotal: string;
     expiresAt: string | null;
     feeTotal: string;
     id: string;
     internalNotes: string | null;
     isGuestCheckout: boolean;
     items?: {
        createdAt: string;
        description: string | null;
        feeDetails:   | {
         [key: string]: unknown;
         }
           | null;
        id: string;
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        name: string;
        orderId: string;
        productDetails:   | {
         [key: string]: unknown;
         }
           | null;
        quantity: number;
        ticketDetails:   | {
         [key: string]: unknown;
         }
           | null;
        totalPrice: string;
        type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
        unitPrice: string;
        updatedAt: string;
     }[];
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     orderNumber: string;
     organisationId: string;
     status:   | "completed"
        | "cancelled"
        | "pending"
        | "failed"
        | "refunded"
        | "confirmed"
        | "processing"
        | "expired";
     subtotal: string;
     taxTotal: string;
     total: string;
     updatedAt: string;
  }>;
  updateItem: (orderId: string, itemId: string, request: {
     metadata?: Record<string, any>;
     quantity?: number;
     unitPrice?: string;
   }) => Promise<{
     item: {
        createdAt: string;
        description: string | null;
        feeDetails:   | {
         [key: string]: unknown;
         }
           | null;
        id: string;
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        name: string;
        orderId: string;
        productDetails:   | {
         [key: string]: unknown;
         }
           | null;
        quantity: number;
        ticketDetails:   | {
         [key: string]: unknown;
         }
           | null;
        totalPrice: string;
        type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
        unitPrice: string;
        updatedAt: string;
     };
     order: {
        accountId: string;
        cancellationReason: string | null;
        cancelledAt: string | null;
        channel: string | null;
        completedAt: string | null;
        confirmedAt: string | null;
        createdAt: string;
        currency: string;
        customerId: string | null;
        customerNotes: string | null;
        discountTotal: string;
        expiresAt: string | null;
        feeTotal: string;
        id: string;
        internalNotes: string | null;
        isGuestCheckout: boolean;
        items?: {
           createdAt: string;
           description: string | null;
           feeDetails:   | {
            [key: string]: unknown;
            }
              | null;
           id: string;
           metadata:   | {
            [key: string]: unknown;
            }
              | null;
           name: string;
           orderId: string;
           productDetails:   | {
            [key: string]: unknown;
            }
              | null;
           quantity: number;
           ticketDetails:   | {
            [key: string]: unknown;
            }
              | null;
           totalPrice: string;
           type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
           unitPrice: string;
           updatedAt: string;
        }[];
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        orderNumber: string;
        organisationId: string;
        status:   | "completed"
           | "cancelled"
           | "pending"
           | "failed"
           | "refunded"
           | "confirmed"
           | "processing"
           | "expired";
        subtotal: string;
        taxTotal: string;
        total: string;
        updatedAt: string;
     };
  }>;
  validate: (orderId: string, request: {
   }) => Promise<{
     errors: {
        code: string;
        itemId?: string;
        message: string;
     }[];
     valid: boolean;
  }>;
};
```

Defined in: [client.ts:2430](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L2430)

Orders methods

#### addItem()

```ts
addItem: (orderId: string, request: {
  description?: string;
  feeDetails?: Record<string, any>;
  metadata?: Record<string, any>;
  name: string;
  productDetails?: Record<string, any>;
  quantity?: number;
  ticketDetails?: Record<string, any>;
  type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
  unitPrice: string;
}) => Promise<{
  item: {
     createdAt: string;
     description: string | null;
     feeDetails:   | {
      [key: string]: unknown;
      }
        | null;
     id: string;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     name: string;
     orderId: string;
     productDetails:   | {
      [key: string]: unknown;
      }
        | null;
     quantity: number;
     ticketDetails:   | {
      [key: string]: unknown;
      }
        | null;
     totalPrice: string;
     type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
     unitPrice: string;
     updatedAt: string;
  };
  order: {
     accountId: string;
     cancellationReason: string | null;
     cancelledAt: string | null;
     channel: string | null;
     completedAt: string | null;
     confirmedAt: string | null;
     createdAt: string;
     currency: string;
     customerId: string | null;
     customerNotes: string | null;
     discountTotal: string;
     expiresAt: string | null;
     feeTotal: string;
     id: string;
     internalNotes: string | null;
     isGuestCheckout: boolean;
     items?: {
        createdAt: string;
        description: string | null;
        feeDetails:   | {
         [key: string]: unknown;
         }
           | null;
        id: string;
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        name: string;
        orderId: string;
        productDetails:   | {
         [key: string]: unknown;
         }
           | null;
        quantity: number;
        ticketDetails:   | {
         [key: string]: unknown;
         }
           | null;
        totalPrice: string;
        type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
        unitPrice: string;
        updatedAt: string;
     }[];
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     orderNumber: string;
     organisationId: string;
     status:   | "completed"
        | "cancelled"
        | "pending"
        | "failed"
        | "refunded"
        | "confirmed"
        | "processing"
        | "expired";
     subtotal: string;
     taxTotal: string;
     total: string;
     updatedAt: string;
  };
}>;
```

Add line item
Add a line item to an order

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |
| `request` | \{ `description?`: `string`; `feeDetails?`: `Record`\<`string`, `any`\>; `metadata?`: `Record`\<`string`, `any`\>; `name`: `string`; `productDetails?`: `Record`\<`string`, `any`\>; `quantity?`: `number`; `ticketDetails?`: `Record`\<`string`, `any`\>; `type`: `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"`; `unitPrice`: `string`; \} |
| `request.description?` | `string` |
| `request.feeDetails?` | `Record`\<`string`, `any`\> |
| `request.metadata?` | `Record`\<`string`, `any`\> |
| `request.name` | `string` |
| `request.productDetails?` | `Record`\<`string`, `any`\> |
| `request.quantity?` | `number` |
| `request.ticketDetails?` | `Record`\<`string`, `any`\> |
| `request.type` | `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"` |
| `request.unitPrice` | `string` |

##### Returns

`Promise`\<\{
  `item`: \{
     `createdAt`: `string`;
     `description`: `string` \| `null`;
     `feeDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `id`: `string`;
     `metadata`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `name`: `string`;
     `orderId`: `string`;
     `productDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `quantity`: `number`;
     `ticketDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `totalPrice`: `string`;
     `type`: `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"`;
     `unitPrice`: `string`;
     `updatedAt`: `string`;
  \};
  `order`: \{
     `accountId`: `string`;
     `cancellationReason`: `string` \| `null`;
     `cancelledAt`: `string` \| `null`;
     `channel`: `string` \| `null`;
     `completedAt`: `string` \| `null`;
     `confirmedAt`: `string` \| `null`;
     `createdAt`: `string`;
     `currency`: `string`;
     `customerId`: `string` \| `null`;
     `customerNotes`: `string` \| `null`;
     `discountTotal`: `string`;
     `expiresAt`: `string` \| `null`;
     `feeTotal`: `string`;
     `id`: `string`;
     `internalNotes`: `string` \| `null`;
     `isGuestCheckout`: `boolean`;
     `items?`: \{
        `createdAt`: `string`;
        `description`: `string` \| `null`;
        `feeDetails`:   \| \{
         \[`key`: `string`\]: `unknown`;
         \}
           \| `null`;
        `id`: `string`;
        `metadata`:   \| \{
         \[`key`: `string`\]: `unknown`;
         \}
           \| `null`;
        `name`: `string`;
        `orderId`: `string`;
        `productDetails`:   \| \{
         \[`key`: `string`\]: `unknown`;
         \}
           \| `null`;
        `quantity`: `number`;
        `ticketDetails`:   \| \{
         \[`key`: `string`\]: `unknown`;
         \}
           \| `null`;
        `totalPrice`: `string`;
        `type`: `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"`;
        `unitPrice`: `string`;
        `updatedAt`: `string`;
     \}[];
     `metadata`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `orderNumber`: `string`;
     `organisationId`: `string`;
     `status`:   \| `"completed"`
        \| `"cancelled"`
        \| `"pending"`
        \| `"failed"`
        \| `"refunded"`
        \| `"confirmed"`
        \| `"processing"`
        \| `"expired"`;
     `subtotal`: `string`;
     `taxTotal`: `string`;
     `total`: `string`;
     `updatedAt`: `string`;
  \};
\}\>

##### Operation Id

addOrderLineItem

#### cancel()

```ts
cancel: (orderId: string, request: {
  reason: string;
}) => Promise<{
  accountId: string;
  cancellationReason: string | null;
  cancelledAt: string | null;
  channel: string | null;
  completedAt: string | null;
  confirmedAt: string | null;
  createdAt: string;
  currency: string;
  customerId: string | null;
  customerNotes: string | null;
  discountTotal: string;
  expiresAt: string | null;
  feeTotal: string;
  id: string;
  internalNotes: string | null;
  isGuestCheckout: boolean;
  items?: {
     createdAt: string;
     description: string | null;
     feeDetails:   | {
      [key: string]: unknown;
      }
        | null;
     id: string;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     name: string;
     orderId: string;
     productDetails:   | {
      [key: string]: unknown;
      }
        | null;
     quantity: number;
     ticketDetails:   | {
      [key: string]: unknown;
      }
        | null;
     totalPrice: string;
     type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
     unitPrice: string;
     updatedAt: string;
  }[];
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  orderNumber: string;
  organisationId: string;
  status:   | "completed"
     | "cancelled"
     | "pending"
     | "failed"
     | "refunded"
     | "confirmed"
     | "processing"
     | "expired";
  subtotal: string;
  taxTotal: string;
  total: string;
  updatedAt: string;
}>;
```

Cancel order
Cancel an order with a reason

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |
| `request` | \{ `reason`: `string`; \} |
| `request.reason` | `string` |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `cancellationReason`: `string` \| `null`;
  `cancelledAt`: `string` \| `null`;
  `channel`: `string` \| `null`;
  `completedAt`: `string` \| `null`;
  `confirmedAt`: `string` \| `null`;
  `createdAt`: `string`;
  `currency`: `string`;
  `customerId`: `string` \| `null`;
  `customerNotes`: `string` \| `null`;
  `discountTotal`: `string`;
  `expiresAt`: `string` \| `null`;
  `feeTotal`: `string`;
  `id`: `string`;
  `internalNotes`: `string` \| `null`;
  `isGuestCheckout`: `boolean`;
  `items?`: \{
     `createdAt`: `string`;
     `description`: `string` \| `null`;
     `feeDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `id`: `string`;
     `metadata`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `name`: `string`;
     `orderId`: `string`;
     `productDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `quantity`: `number`;
     `ticketDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `totalPrice`: `string`;
     `type`: `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"`;
     `unitPrice`: `string`;
     `updatedAt`: `string`;
  \}[];
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `orderNumber`: `string`;
  `organisationId`: `string`;
  `status`:   \| `"completed"`
     \| `"cancelled"`
     \| `"pending"`
     \| `"failed"`
     \| `"refunded"`
     \| `"confirmed"`
     \| `"processing"`
     \| `"expired"`;
  `subtotal`: `string`;
  `taxTotal`: `string`;
  `total`: `string`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

cancelOrder

#### create()

```ts
create: (request: {
  accountId: string;
  channel?: string;
  currency?: string;
  customerId?: string;
  customerNotes?: string;
  expiresInMinutes?: number;
  internalNotes?: string;
  isGuestCheckout?: boolean;
  items?: {
     description?: string;
     feeDetails?: Record<string, any>;
     metadata?: Record<string, any>;
     name: string;
     productDetails?: Record<string, any>;
     quantity?: number;
     ticketDetails?: Record<string, any>;
     type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
     unitPrice: string;
  }[];
  metadata?: Record<string, any>;
}) => Promise<{
  accountId: string;
  cancellationReason: string | null;
  cancelledAt: string | null;
  channel: string | null;
  completedAt: string | null;
  confirmedAt: string | null;
  createdAt: string;
  currency: string;
  customerId: string | null;
  customerNotes: string | null;
  discountTotal: string;
  expiresAt: string | null;
  feeTotal: string;
  id: string;
  internalNotes: string | null;
  isGuestCheckout: boolean;
  items?: {
     createdAt: string;
     description: string | null;
     feeDetails:   | {
      [key: string]: unknown;
      }
        | null;
     id: string;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     name: string;
     orderId: string;
     productDetails:   | {
      [key: string]: unknown;
      }
        | null;
     quantity: number;
     ticketDetails:   | {
      [key: string]: unknown;
      }
        | null;
     totalPrice: string;
     type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
     unitPrice: string;
     updatedAt: string;
  }[];
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  orderNumber: string;
  organisationId: string;
  status:   | "completed"
     | "cancelled"
     | "pending"
     | "failed"
     | "refunded"
     | "confirmed"
     | "processing"
     | "expired";
  subtotal: string;
  taxTotal: string;
  total: string;
  updatedAt: string;
}>;
```

Create order
Create a new order with optional line items

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `accountId`: `string`; `channel?`: `string`; `currency?`: `string`; `customerId?`: `string`; `customerNotes?`: `string`; `expiresInMinutes?`: `number`; `internalNotes?`: `string`; `isGuestCheckout?`: `boolean`; `items?`: \{ `description?`: `string`; `feeDetails?`: `Record`\<`string`, `any`\>; `metadata?`: `Record`\<`string`, `any`\>; `name`: `string`; `productDetails?`: `Record`\<`string`, `any`\>; `quantity?`: `number`; `ticketDetails?`: `Record`\<`string`, `any`\>; `type`: `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"`; `unitPrice`: `string`; \}[]; `metadata?`: `Record`\<`string`, `any`\>; \} |
| `request.accountId` | `string` |
| `request.channel?` | `string` |
| `request.currency?` | `string` |
| `request.customerId?` | `string` |
| `request.customerNotes?` | `string` |
| `request.expiresInMinutes?` | `number` |
| `request.internalNotes?` | `string` |
| `request.isGuestCheckout?` | `boolean` |
| `request.items?` | \{ `description?`: `string`; `feeDetails?`: `Record`\<`string`, `any`\>; `metadata?`: `Record`\<`string`, `any`\>; `name`: `string`; `productDetails?`: `Record`\<`string`, `any`\>; `quantity?`: `number`; `ticketDetails?`: `Record`\<`string`, `any`\>; `type`: `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"`; `unitPrice`: `string`; \}[] |
| `request.metadata?` | `Record`\<`string`, `any`\> |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `cancellationReason`: `string` \| `null`;
  `cancelledAt`: `string` \| `null`;
  `channel`: `string` \| `null`;
  `completedAt`: `string` \| `null`;
  `confirmedAt`: `string` \| `null`;
  `createdAt`: `string`;
  `currency`: `string`;
  `customerId`: `string` \| `null`;
  `customerNotes`: `string` \| `null`;
  `discountTotal`: `string`;
  `expiresAt`: `string` \| `null`;
  `feeTotal`: `string`;
  `id`: `string`;
  `internalNotes`: `string` \| `null`;
  `isGuestCheckout`: `boolean`;
  `items?`: \{
     `createdAt`: `string`;
     `description`: `string` \| `null`;
     `feeDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `id`: `string`;
     `metadata`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `name`: `string`;
     `orderId`: `string`;
     `productDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `quantity`: `number`;
     `ticketDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `totalPrice`: `string`;
     `type`: `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"`;
     `unitPrice`: `string`;
     `updatedAt`: `string`;
  \}[];
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `orderNumber`: `string`;
  `organisationId`: `string`;
  `status`:   \| `"completed"`
     \| `"cancelled"`
     \| `"pending"`
     \| `"failed"`
     \| `"refunded"`
     \| `"confirmed"`
     \| `"processing"`
     \| `"expired"`;
  `subtotal`: `string`;
  `taxTotal`: `string`;
  `total`: `string`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

createOrder

#### get()

```ts
get: (orderId: string) => Promise<{
  accountId: string;
  cancellationReason: string | null;
  cancelledAt: string | null;
  channel: string | null;
  completedAt: string | null;
  confirmedAt: string | null;
  createdAt: string;
  currency: string;
  customerId: string | null;
  customerNotes: string | null;
  discountTotal: string;
  expiresAt: string | null;
  feeTotal: string;
  id: string;
  internalNotes: string | null;
  isGuestCheckout: boolean;
  items?: {
     createdAt: string;
     description: string | null;
     feeDetails:   | {
      [key: string]: unknown;
      }
        | null;
     id: string;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     name: string;
     orderId: string;
     productDetails:   | {
      [key: string]: unknown;
      }
        | null;
     quantity: number;
     ticketDetails:   | {
      [key: string]: unknown;
      }
        | null;
     totalPrice: string;
     type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
     unitPrice: string;
     updatedAt: string;
  }[];
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  orderNumber: string;
  organisationId: string;
  status:   | "completed"
     | "cancelled"
     | "pending"
     | "failed"
     | "refunded"
     | "confirmed"
     | "processing"
     | "expired";
  subtotal: string;
  taxTotal: string;
  total: string;
  updatedAt: string;
}>;
```

Get order
Get a specific order by ID

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `cancellationReason`: `string` \| `null`;
  `cancelledAt`: `string` \| `null`;
  `channel`: `string` \| `null`;
  `completedAt`: `string` \| `null`;
  `confirmedAt`: `string` \| `null`;
  `createdAt`: `string`;
  `currency`: `string`;
  `customerId`: `string` \| `null`;
  `customerNotes`: `string` \| `null`;
  `discountTotal`: `string`;
  `expiresAt`: `string` \| `null`;
  `feeTotal`: `string`;
  `id`: `string`;
  `internalNotes`: `string` \| `null`;
  `isGuestCheckout`: `boolean`;
  `items?`: \{
     `createdAt`: `string`;
     `description`: `string` \| `null`;
     `feeDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `id`: `string`;
     `metadata`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `name`: `string`;
     `orderId`: `string`;
     `productDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `quantity`: `number`;
     `ticketDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `totalPrice`: `string`;
     `type`: `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"`;
     `unitPrice`: `string`;
     `updatedAt`: `string`;
  \}[];
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `orderNumber`: `string`;
  `organisationId`: `string`;
  `status`:   \| `"completed"`
     \| `"cancelled"`
     \| `"pending"`
     \| `"failed"`
     \| `"refunded"`
     \| `"confirmed"`
     \| `"processing"`
     \| `"expired"`;
  `subtotal`: `string`;
  `taxTotal`: `string`;
  `total`: `string`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

getOrder

#### getByNumber()

```ts
getByNumber: (orderNumber: string) => Promise<{
  accountId: string;
  cancellationReason: string | null;
  cancelledAt: string | null;
  channel: string | null;
  completedAt: string | null;
  confirmedAt: string | null;
  createdAt: string;
  currency: string;
  customerId: string | null;
  customerNotes: string | null;
  discountTotal: string;
  expiresAt: string | null;
  feeTotal: string;
  id: string;
  internalNotes: string | null;
  isGuestCheckout: boolean;
  items?: {
     createdAt: string;
     description: string | null;
     feeDetails:   | {
      [key: string]: unknown;
      }
        | null;
     id: string;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     name: string;
     orderId: string;
     productDetails:   | {
      [key: string]: unknown;
      }
        | null;
     quantity: number;
     ticketDetails:   | {
      [key: string]: unknown;
      }
        | null;
     totalPrice: string;
     type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
     unitPrice: string;
     updatedAt: string;
  }[];
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  orderNumber: string;
  organisationId: string;
  status:   | "completed"
     | "cancelled"
     | "pending"
     | "failed"
     | "refunded"
     | "confirmed"
     | "processing"
     | "expired";
  subtotal: string;
  taxTotal: string;
  total: string;
  updatedAt: string;
}>;
```

Get order by number
Get a specific order by order number

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderNumber` | `string` |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `cancellationReason`: `string` \| `null`;
  `cancelledAt`: `string` \| `null`;
  `channel`: `string` \| `null`;
  `completedAt`: `string` \| `null`;
  `confirmedAt`: `string` \| `null`;
  `createdAt`: `string`;
  `currency`: `string`;
  `customerId`: `string` \| `null`;
  `customerNotes`: `string` \| `null`;
  `discountTotal`: `string`;
  `expiresAt`: `string` \| `null`;
  `feeTotal`: `string`;
  `id`: `string`;
  `internalNotes`: `string` \| `null`;
  `isGuestCheckout`: `boolean`;
  `items?`: \{
     `createdAt`: `string`;
     `description`: `string` \| `null`;
     `feeDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `id`: `string`;
     `metadata`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `name`: `string`;
     `orderId`: `string`;
     `productDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `quantity`: `number`;
     `ticketDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `totalPrice`: `string`;
     `type`: `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"`;
     `unitPrice`: `string`;
     `updatedAt`: `string`;
  \}[];
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `orderNumber`: `string`;
  `organisationId`: `string`;
  `status`:   \| `"completed"`
     \| `"cancelled"`
     \| `"pending"`
     \| `"failed"`
     \| `"refunded"`
     \| `"confirmed"`
     \| `"processing"`
     \| `"expired"`;
  `subtotal`: `string`;
  `taxTotal`: `string`;
  `total`: `string`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

getOrderByNumber

#### getPaymentStatus()

```ts
getPaymentStatus: (orderId: string) => Promise<{
  amount: string | null;
  currency: string | null;
  failedAt: string | null;
  failureReason: string | null;
  paidAt: string | null;
  paymentId: string | null;
  status:   | "cancelled"
     | "pending"
     | "succeeded"
     | "failed"
     | "processing"
     | "requires_action"
     | "none";
}>;
```

Get payment status
Get the current payment status for an order

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |

##### Returns

`Promise`\<\{
  `amount`: `string` \| `null`;
  `currency`: `string` \| `null`;
  `failedAt`: `string` \| `null`;
  `failureReason`: `string` \| `null`;
  `paidAt`: `string` \| `null`;
  `paymentId`: `string` \| `null`;
  `status`:   \| `"cancelled"`
     \| `"pending"`
     \| `"succeeded"`
     \| `"failed"`
     \| `"processing"`
     \| `"requires_action"`
     \| `"none"`;
\}\>

##### Operation Id

getOrderPaymentStatus

#### initiatePayment()

```ts
initiatePayment: (orderId: string, request: {
  metadata?: Record<string, any>;
  paymentMethod:   | "bank_transfer"
     | "online_card"
     | "online_bank_transfer"
     | "online_wallet"
     | "in_person_card"
     | "in_person_cash"
     | "cheque";
  returnUrl?: string;
}) => Promise<{
  clientSecret: string | null;
  expiresAt: string | null;
  paymentId: string;
  redirectUrl: string | null;
  status: "pending" | "succeeded" | "failed" | "processing" | "requires_action";
}>;
```

Initiate payment
Initiate payment for an order

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |
| `request` | \{ `metadata?`: `Record`\<`string`, `any`\>; `paymentMethod`: \| `"bank_transfer"` \| `"online_card"` \| `"online_bank_transfer"` \| `"online_wallet"` \| `"in_person_card"` \| `"in_person_cash"` \| `"cheque"`; `returnUrl?`: `string`; \} |
| `request.metadata?` | `Record`\<`string`, `any`\> |
| `request.paymentMethod` | \| `"bank_transfer"` \| `"online_card"` \| `"online_bank_transfer"` \| `"online_wallet"` \| `"in_person_card"` \| `"in_person_cash"` \| `"cheque"` |
| `request.returnUrl?` | `string` |

##### Returns

`Promise`\<\{
  `clientSecret`: `string` \| `null`;
  `expiresAt`: `string` \| `null`;
  `paymentId`: `string`;
  `redirectUrl`: `string` \| `null`;
  `status`: `"pending"` \| `"succeeded"` \| `"failed"` \| `"processing"` \| `"requires_action"`;
\}\>

##### Operation Id

initiateOrderPayment

#### list()

```ts
list: (options?: {
  channel?: string;
  customerId?: string;
  fromDate?: string;
  limit?: string;
  page?: string;
  search?: string;
  status?:   | "completed"
     | "cancelled"
     | "pending"
     | "failed"
     | "refunded"
     | "confirmed"
     | "processing"
     | "expired";
  toDate?: string;
}) => Promise<{
  orders: {
     accountId: string;
     cancellationReason: string | null;
     cancelledAt: string | null;
     channel: string | null;
     completedAt: string | null;
     confirmedAt: string | null;
     createdAt: string;
     currency: string;
     customerId: string | null;
     customerNotes: string | null;
     discountTotal: string;
     expiresAt: string | null;
     feeTotal: string;
     id: string;
     internalNotes: string | null;
     isGuestCheckout: boolean;
     items?: {
        createdAt: string;
        description: string | null;
        feeDetails:   | {
         [key: ...]: ...;
         }
           | null;
        id: string;
        metadata:   | {
         [key: ...]: ...;
         }
           | null;
        name: string;
        orderId: string;
        productDetails:   | {
         [key: ...]: ...;
         }
           | null;
        quantity: number;
        ticketDetails:   | {
         [key: ...]: ...;
         }
           | null;
        totalPrice: string;
        type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
        unitPrice: string;
        updatedAt: string;
     }[];
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     orderNumber: string;
     organisationId: string;
     status:   | "completed"
        | "cancelled"
        | "pending"
        | "failed"
        | "refunded"
        | "confirmed"
        | "processing"
        | "expired";
     subtotal: string;
     taxTotal: string;
     total: string;
     updatedAt: string;
  }[];
  pagination: {
     limit: number;
     page: number;
     total: number;
     totalPages: number;
  };
}>;
```

List orders
List all orders with optional filtering and pagination

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `channel?`: `string`; `customerId?`: `string`; `fromDate?`: `string`; `limit?`: `string`; `page?`: `string`; `search?`: `string`; `status?`: \| `"completed"` \| `"cancelled"` \| `"pending"` \| `"failed"` \| `"refunded"` \| `"confirmed"` \| `"processing"` \| `"expired"`; `toDate?`: `string`; \} |
| `options.channel?` | `string` |
| `options.customerId?` | `string` |
| `options.fromDate?` | `string` |
| `options.limit?` | `string` |
| `options.page?` | `string` |
| `options.search?` | `string` |
| `options.status?` | \| `"completed"` \| `"cancelled"` \| `"pending"` \| `"failed"` \| `"refunded"` \| `"confirmed"` \| `"processing"` \| `"expired"` |
| `options.toDate?` | `string` |

##### Returns

`Promise`\<\{
  `orders`: \{
     `accountId`: `string`;
     `cancellationReason`: `string` \| `null`;
     `cancelledAt`: `string` \| `null`;
     `channel`: `string` \| `null`;
     `completedAt`: `string` \| `null`;
     `confirmedAt`: `string` \| `null`;
     `createdAt`: `string`;
     `currency`: `string`;
     `customerId`: `string` \| `null`;
     `customerNotes`: `string` \| `null`;
     `discountTotal`: `string`;
     `expiresAt`: `string` \| `null`;
     `feeTotal`: `string`;
     `id`: `string`;
     `internalNotes`: `string` \| `null`;
     `isGuestCheckout`: `boolean`;
     `items?`: \{
        `createdAt`: `string`;
        `description`: `string` \| `null`;
        `feeDetails`:   \| \{
         \[`key`: ...\]: ...;
         \}
           \| `null`;
        `id`: `string`;
        `metadata`:   \| \{
         \[`key`: ...\]: ...;
         \}
           \| `null`;
        `name`: `string`;
        `orderId`: `string`;
        `productDetails`:   \| \{
         \[`key`: ...\]: ...;
         \}
           \| `null`;
        `quantity`: `number`;
        `ticketDetails`:   \| \{
         \[`key`: ...\]: ...;
         \}
           \| `null`;
        `totalPrice`: `string`;
        `type`: `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"`;
        `unitPrice`: `string`;
        `updatedAt`: `string`;
     \}[];
     `metadata`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `orderNumber`: `string`;
     `organisationId`: `string`;
     `status`:   \| `"completed"`
        \| `"cancelled"`
        \| `"pending"`
        \| `"failed"`
        \| `"refunded"`
        \| `"confirmed"`
        \| `"processing"`
        \| `"expired"`;
     `subtotal`: `string`;
     `taxTotal`: `string`;
     `total`: `string`;
     `updatedAt`: `string`;
  \}[];
  `pagination`: \{
     `limit`: `number`;
     `page`: `number`;
     `total`: `number`;
     `totalPages`: `number`;
  \};
\}\>

##### Operation Id

listOrders

#### removeItem()

```ts
removeItem: (orderId: string, itemId: string) => Promise<{
  accountId: string;
  cancellationReason: string | null;
  cancelledAt: string | null;
  channel: string | null;
  completedAt: string | null;
  confirmedAt: string | null;
  createdAt: string;
  currency: string;
  customerId: string | null;
  customerNotes: string | null;
  discountTotal: string;
  expiresAt: string | null;
  feeTotal: string;
  id: string;
  internalNotes: string | null;
  isGuestCheckout: boolean;
  items?: {
     createdAt: string;
     description: string | null;
     feeDetails:   | {
      [key: string]: unknown;
      }
        | null;
     id: string;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     name: string;
     orderId: string;
     productDetails:   | {
      [key: string]: unknown;
      }
        | null;
     quantity: number;
     ticketDetails:   | {
      [key: string]: unknown;
      }
        | null;
     totalPrice: string;
     type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
     unitPrice: string;
     updatedAt: string;
  }[];
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  orderNumber: string;
  organisationId: string;
  status:   | "completed"
     | "cancelled"
     | "pending"
     | "failed"
     | "refunded"
     | "confirmed"
     | "processing"
     | "expired";
  subtotal: string;
  taxTotal: string;
  total: string;
  updatedAt: string;
}>;
```

Remove line item
Remove a line item from an order

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |
| `itemId` | `string` |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `cancellationReason`: `string` \| `null`;
  `cancelledAt`: `string` \| `null`;
  `channel`: `string` \| `null`;
  `completedAt`: `string` \| `null`;
  `confirmedAt`: `string` \| `null`;
  `createdAt`: `string`;
  `currency`: `string`;
  `customerId`: `string` \| `null`;
  `customerNotes`: `string` \| `null`;
  `discountTotal`: `string`;
  `expiresAt`: `string` \| `null`;
  `feeTotal`: `string`;
  `id`: `string`;
  `internalNotes`: `string` \| `null`;
  `isGuestCheckout`: `boolean`;
  `items?`: \{
     `createdAt`: `string`;
     `description`: `string` \| `null`;
     `feeDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `id`: `string`;
     `metadata`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `name`: `string`;
     `orderId`: `string`;
     `productDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `quantity`: `number`;
     `ticketDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `totalPrice`: `string`;
     `type`: `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"`;
     `unitPrice`: `string`;
     `updatedAt`: `string`;
  \}[];
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `orderNumber`: `string`;
  `organisationId`: `string`;
  `status`:   \| `"completed"`
     \| `"cancelled"`
     \| `"pending"`
     \| `"failed"`
     \| `"refunded"`
     \| `"confirmed"`
     \| `"processing"`
     \| `"expired"`;
  `subtotal`: `string`;
  `taxTotal`: `string`;
  `total`: `string`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

removeOrderLineItem

#### transitionStatus()

```ts
transitionStatus: (orderId: string, request: {
  status:   | "completed"
     | "cancelled"
     | "failed"
     | "refunded"
     | "confirmed"
     | "processing"
     | "expired";
}) => Promise<{
  accountId: string;
  cancellationReason: string | null;
  cancelledAt: string | null;
  channel: string | null;
  completedAt: string | null;
  confirmedAt: string | null;
  createdAt: string;
  currency: string;
  customerId: string | null;
  customerNotes: string | null;
  discountTotal: string;
  expiresAt: string | null;
  feeTotal: string;
  id: string;
  internalNotes: string | null;
  isGuestCheckout: boolean;
  items?: {
     createdAt: string;
     description: string | null;
     feeDetails:   | {
      [key: string]: unknown;
      }
        | null;
     id: string;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     name: string;
     orderId: string;
     productDetails:   | {
      [key: string]: unknown;
      }
        | null;
     quantity: number;
     ticketDetails:   | {
      [key: string]: unknown;
      }
        | null;
     totalPrice: string;
     type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
     unitPrice: string;
     updatedAt: string;
  }[];
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  orderNumber: string;
  organisationId: string;
  status:   | "completed"
     | "cancelled"
     | "pending"
     | "failed"
     | "refunded"
     | "confirmed"
     | "processing"
     | "expired";
  subtotal: string;
  taxTotal: string;
  total: string;
  updatedAt: string;
}>;
```

Transition order status
Transition an order to a new status

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |
| `request` | \{ `status`: \| `"completed"` \| `"cancelled"` \| `"failed"` \| `"refunded"` \| `"confirmed"` \| `"processing"` \| `"expired"`; \} |
| `request.status` | \| `"completed"` \| `"cancelled"` \| `"failed"` \| `"refunded"` \| `"confirmed"` \| `"processing"` \| `"expired"` |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `cancellationReason`: `string` \| `null`;
  `cancelledAt`: `string` \| `null`;
  `channel`: `string` \| `null`;
  `completedAt`: `string` \| `null`;
  `confirmedAt`: `string` \| `null`;
  `createdAt`: `string`;
  `currency`: `string`;
  `customerId`: `string` \| `null`;
  `customerNotes`: `string` \| `null`;
  `discountTotal`: `string`;
  `expiresAt`: `string` \| `null`;
  `feeTotal`: `string`;
  `id`: `string`;
  `internalNotes`: `string` \| `null`;
  `isGuestCheckout`: `boolean`;
  `items?`: \{
     `createdAt`: `string`;
     `description`: `string` \| `null`;
     `feeDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `id`: `string`;
     `metadata`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `name`: `string`;
     `orderId`: `string`;
     `productDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `quantity`: `number`;
     `ticketDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `totalPrice`: `string`;
     `type`: `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"`;
     `unitPrice`: `string`;
     `updatedAt`: `string`;
  \}[];
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `orderNumber`: `string`;
  `organisationId`: `string`;
  `status`:   \| `"completed"`
     \| `"cancelled"`
     \| `"pending"`
     \| `"failed"`
     \| `"refunded"`
     \| `"confirmed"`
     \| `"processing"`
     \| `"expired"`;
  `subtotal`: `string`;
  `taxTotal`: `string`;
  `total`: `string`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

transitionOrderStatus

#### update()

```ts
update: (orderId: string, request: {
  addItems?: {
     description?: string;
     feeDetails?: Record<string, any>;
     metadata?: Record<string, any>;
     name: string;
     productDetails?: Record<string, any>;
     quantity?: number;
     ticketDetails?: Record<string, any>;
     type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
     unitPrice: string;
  }[];
  customerId?: string;
  customerNotes?: string;
  extendExpiry?: boolean;
  internalNotes?: string;
  metadata?: Record<string, any>;
  removeItems?: string[];
  updateItems?: {
     itemId: string;
     updates: {
        metadata?: Record<string, any>;
        quantity?: number;
        unitPrice?: string;
     };
  }[];
}) => Promise<{
  accountId: string;
  cancellationReason: string | null;
  cancelledAt: string | null;
  channel: string | null;
  completedAt: string | null;
  confirmedAt: string | null;
  createdAt: string;
  currency: string;
  customerId: string | null;
  customerNotes: string | null;
  discountTotal: string;
  expiresAt: string | null;
  feeTotal: string;
  id: string;
  internalNotes: string | null;
  isGuestCheckout: boolean;
  items?: {
     createdAt: string;
     description: string | null;
     feeDetails:   | {
      [key: string]: unknown;
      }
        | null;
     id: string;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     name: string;
     orderId: string;
     productDetails:   | {
      [key: string]: unknown;
      }
        | null;
     quantity: number;
     ticketDetails:   | {
      [key: string]: unknown;
      }
        | null;
     totalPrice: string;
     type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
     unitPrice: string;
     updatedAt: string;
  }[];
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  orderNumber: string;
  organisationId: string;
  status:   | "completed"
     | "cancelled"
     | "pending"
     | "failed"
     | "refunded"
     | "confirmed"
     | "processing"
     | "expired";
  subtotal: string;
  taxTotal: string;
  total: string;
  updatedAt: string;
}>;
```

Update order
Update an existing order

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |
| `request` | \{ `addItems?`: \{ `description?`: `string`; `feeDetails?`: `Record`\<`string`, `any`\>; `metadata?`: `Record`\<`string`, `any`\>; `name`: `string`; `productDetails?`: `Record`\<`string`, `any`\>; `quantity?`: `number`; `ticketDetails?`: `Record`\<`string`, `any`\>; `type`: `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"`; `unitPrice`: `string`; \}[]; `customerId?`: `string`; `customerNotes?`: `string`; `extendExpiry?`: `boolean`; `internalNotes?`: `string`; `metadata?`: `Record`\<`string`, `any`\>; `removeItems?`: `string`[]; `updateItems?`: \{ `itemId`: `string`; `updates`: \{ `metadata?`: `Record`\<`string`, `any`\>; `quantity?`: `number`; `unitPrice?`: `string`; \}; \}[]; \} |
| `request.addItems?` | \{ `description?`: `string`; `feeDetails?`: `Record`\<`string`, `any`\>; `metadata?`: `Record`\<`string`, `any`\>; `name`: `string`; `productDetails?`: `Record`\<`string`, `any`\>; `quantity?`: `number`; `ticketDetails?`: `Record`\<`string`, `any`\>; `type`: `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"`; `unitPrice`: `string`; \}[] |
| `request.customerId?` | `string` |
| `request.customerNotes?` | `string` |
| `request.extendExpiry?` | `boolean` |
| `request.internalNotes?` | `string` |
| `request.metadata?` | `Record`\<`string`, `any`\> |
| `request.removeItems?` | `string`[] |
| `request.updateItems?` | \{ `itemId`: `string`; `updates`: \{ `metadata?`: `Record`\<`string`, `any`\>; `quantity?`: `number`; `unitPrice?`: `string`; \}; \}[] |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `cancellationReason`: `string` \| `null`;
  `cancelledAt`: `string` \| `null`;
  `channel`: `string` \| `null`;
  `completedAt`: `string` \| `null`;
  `confirmedAt`: `string` \| `null`;
  `createdAt`: `string`;
  `currency`: `string`;
  `customerId`: `string` \| `null`;
  `customerNotes`: `string` \| `null`;
  `discountTotal`: `string`;
  `expiresAt`: `string` \| `null`;
  `feeTotal`: `string`;
  `id`: `string`;
  `internalNotes`: `string` \| `null`;
  `isGuestCheckout`: `boolean`;
  `items?`: \{
     `createdAt`: `string`;
     `description`: `string` \| `null`;
     `feeDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `id`: `string`;
     `metadata`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `name`: `string`;
     `orderId`: `string`;
     `productDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `quantity`: `number`;
     `ticketDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `totalPrice`: `string`;
     `type`: `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"`;
     `unitPrice`: `string`;
     `updatedAt`: `string`;
  \}[];
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `orderNumber`: `string`;
  `organisationId`: `string`;
  `status`:   \| `"completed"`
     \| `"cancelled"`
     \| `"pending"`
     \| `"failed"`
     \| `"refunded"`
     \| `"confirmed"`
     \| `"processing"`
     \| `"expired"`;
  `subtotal`: `string`;
  `taxTotal`: `string`;
  `total`: `string`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

updateOrder

#### updateItem()

```ts
updateItem: (orderId: string, itemId: string, request: {
  metadata?: Record<string, any>;
  quantity?: number;
  unitPrice?: string;
}) => Promise<{
  item: {
     createdAt: string;
     description: string | null;
     feeDetails:   | {
      [key: string]: unknown;
      }
        | null;
     id: string;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     name: string;
     orderId: string;
     productDetails:   | {
      [key: string]: unknown;
      }
        | null;
     quantity: number;
     ticketDetails:   | {
      [key: string]: unknown;
      }
        | null;
     totalPrice: string;
     type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
     unitPrice: string;
     updatedAt: string;
  };
  order: {
     accountId: string;
     cancellationReason: string | null;
     cancelledAt: string | null;
     channel: string | null;
     completedAt: string | null;
     confirmedAt: string | null;
     createdAt: string;
     currency: string;
     customerId: string | null;
     customerNotes: string | null;
     discountTotal: string;
     expiresAt: string | null;
     feeTotal: string;
     id: string;
     internalNotes: string | null;
     isGuestCheckout: boolean;
     items?: {
        createdAt: string;
        description: string | null;
        feeDetails:   | {
         [key: string]: unknown;
         }
           | null;
        id: string;
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        name: string;
        orderId: string;
        productDetails:   | {
         [key: string]: unknown;
         }
           | null;
        quantity: number;
        ticketDetails:   | {
         [key: string]: unknown;
         }
           | null;
        totalPrice: string;
        type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
        unitPrice: string;
        updatedAt: string;
     }[];
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     orderNumber: string;
     organisationId: string;
     status:   | "completed"
        | "cancelled"
        | "pending"
        | "failed"
        | "refunded"
        | "confirmed"
        | "processing"
        | "expired";
     subtotal: string;
     taxTotal: string;
     total: string;
     updatedAt: string;
  };
}>;
```

Update line item
Update a line item in an order

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |
| `itemId` | `string` |
| `request` | \{ `metadata?`: `Record`\<`string`, `any`\>; `quantity?`: `number`; `unitPrice?`: `string`; \} |
| `request.metadata?` | `Record`\<`string`, `any`\> |
| `request.quantity?` | `number` |
| `request.unitPrice?` | `string` |

##### Returns

`Promise`\<\{
  `item`: \{
     `createdAt`: `string`;
     `description`: `string` \| `null`;
     `feeDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `id`: `string`;
     `metadata`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `name`: `string`;
     `orderId`: `string`;
     `productDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `quantity`: `number`;
     `ticketDetails`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `totalPrice`: `string`;
     `type`: `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"`;
     `unitPrice`: `string`;
     `updatedAt`: `string`;
  \};
  `order`: \{
     `accountId`: `string`;
     `cancellationReason`: `string` \| `null`;
     `cancelledAt`: `string` \| `null`;
     `channel`: `string` \| `null`;
     `completedAt`: `string` \| `null`;
     `confirmedAt`: `string` \| `null`;
     `createdAt`: `string`;
     `currency`: `string`;
     `customerId`: `string` \| `null`;
     `customerNotes`: `string` \| `null`;
     `discountTotal`: `string`;
     `expiresAt`: `string` \| `null`;
     `feeTotal`: `string`;
     `id`: `string`;
     `internalNotes`: `string` \| `null`;
     `isGuestCheckout`: `boolean`;
     `items?`: \{
        `createdAt`: `string`;
        `description`: `string` \| `null`;
        `feeDetails`:   \| \{
         \[`key`: `string`\]: `unknown`;
         \}
           \| `null`;
        `id`: `string`;
        `metadata`:   \| \{
         \[`key`: `string`\]: `unknown`;
         \}
           \| `null`;
        `name`: `string`;
        `orderId`: `string`;
        `productDetails`:   \| \{
         \[`key`: `string`\]: `unknown`;
         \}
           \| `null`;
        `quantity`: `number`;
        `ticketDetails`:   \| \{
         \[`key`: `string`\]: `unknown`;
         \}
           \| `null`;
        `totalPrice`: `string`;
        `type`: `"product"` \| `"ticket"` \| `"addon"` \| `"fee"` \| `"tax"` \| `"discount"`;
        `unitPrice`: `string`;
        `updatedAt`: `string`;
     \}[];
     `metadata`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `orderNumber`: `string`;
     `organisationId`: `string`;
     `status`:   \| `"completed"`
        \| `"cancelled"`
        \| `"pending"`
        \| `"failed"`
        \| `"refunded"`
        \| `"confirmed"`
        \| `"processing"`
        \| `"expired"`;
     `subtotal`: `string`;
     `taxTotal`: `string`;
     `total`: `string`;
     `updatedAt`: `string`;
  \};
\}\>

##### Operation Id

updateOrderLineItem

#### validate()

```ts
validate: (orderId: string, request: {
}) => Promise<{
  errors: {
     code: string;
     itemId?: string;
     message: string;
  }[];
  valid: boolean;
}>;
```

Validate order
Validate an order before payment (check inventory, pricing, etc.)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |
| `request` | \{ \} |

##### Returns

`Promise`\<\{
  `errors`: \{
     `code`: `string`;
     `itemId?`: `string`;
     `message`: `string`;
  \}[];
  `valid`: `boolean`;
\}\>

##### Operation Id

validateOrder

***

### organisations

```ts
organisations: {
  get: (id: string) => Promise<{
     apiVersion: string;
     createdAt: string;
     id: string;
     logoUrl?: string;
     metadata?: {
      [key: string]: unknown;
     };
     name: string;
     primaryColor?: string;
     secondaryColor?: string;
     updatedAt: string;
  }>;
  update: (id: string, request: {
     apiVersion?: string;
     logoUrl?: string;
     metadata?: {
      [key: string]: unknown;
     };
     name?: string;
     primaryColor?: string;
     secondaryColor?: string;
   }) => Promise<{
     apiVersion: string;
     createdAt: string;
     id: string;
     logoUrl?: string;
     metadata?: {
      [key: string]: unknown;
     };
     name: string;
     primaryColor?: string;
     secondaryColor?: string;
     updatedAt: string;
  }>;
};
```

Defined in: [client.ts:809](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L809)

Organisations methods

#### get()

```ts
get: (id: string) => Promise<{
  apiVersion: string;
  createdAt: string;
  id: string;
  logoUrl?: string;
  metadata?: {
   [key: string]: unknown;
  };
  name: string;
  primaryColor?: string;
  secondaryColor?: string;
  updatedAt: string;
}>;
```

Get organisation
Get organisation details including branding information

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

##### Returns

`Promise`\<\{
  `apiVersion`: `string`;
  `createdAt`: `string`;
  `id`: `string`;
  `logoUrl?`: `string`;
  `metadata?`: \{
   \[`key`: `string`\]: `unknown`;
  \};
  `name`: `string`;
  `primaryColor?`: `string`;
  `secondaryColor?`: `string`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

getOrganisation

#### update()

```ts
update: (id: string, request: {
  apiVersion?: string;
  logoUrl?: string;
  metadata?: {
   [key: string]: unknown;
  };
  name?: string;
  primaryColor?: string;
  secondaryColor?: string;
}) => Promise<{
  apiVersion: string;
  createdAt: string;
  id: string;
  logoUrl?: string;
  metadata?: {
   [key: string]: unknown;
  };
  name: string;
  primaryColor?: string;
  secondaryColor?: string;
  updatedAt: string;
}>;
```

Update organisation
Update organisation details and branding (owner permission required)

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | - |
| `request` | \{ `apiVersion?`: `string`; `logoUrl?`: `string`; `metadata?`: \{ \[`key`: `string`\]: `unknown`; \}; `name?`: `string`; `primaryColor?`: `string`; `secondaryColor?`: `string`; \} | - |
| `request.apiVersion?` | `string` | **Description** Pin the organisation to a dated API version. Must be a known, non-sunset version (see GET /meta/versions). **Example** `2026-06-13` |
| `request.logoUrl?` | `string` | Format: uri **Description** URL to organisation logo **Example** `https://example.com/logo.png` |
| `request.metadata?` | \{ \[`key`: `string`\]: `unknown`; \} | **Description** Additional metadata **Example** `{ * "industry": "Technology", * "size": "Medium" * }` |
| `request.name?` | `string` | **Description** Organisation name **Example** `Acme Corporation` |
| `request.primaryColor?` | `string` | **Description** Primary brand color (hex format) **Example** `#FF5733` |
| `request.secondaryColor?` | `string` | **Description** Secondary brand color (hex format) **Example** `#3366FF` |

##### Returns

`Promise`\<\{
  `apiVersion`: `string`;
  `createdAt`: `string`;
  `id`: `string`;
  `logoUrl?`: `string`;
  `metadata?`: \{
   \[`key`: `string`\]: `unknown`;
  \};
  `name`: `string`;
  `primaryColor?`: `string`;
  `secondaryColor?`: `string`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

updateOrganisation

***

### paymentProviders

```ts
paymentProviders: {
  create: (request: {
     accountId?: string;
     applicationFee?: {
        type: "percentage" | "fixed";
        value: number;
     };
     capabilities?: {
        maxAmount?: number;
        minAmount?: number;
        requiresCustomerAction?: boolean;
        supportedCurrencies?: string[];
        supportsDelayedCapture?: boolean;
        supportsInstantCapture?: boolean;
        supportsPartialRefunds?: boolean;
        supportsRefunds?: boolean;
     };
     configuration: Record<string, any>;
     description?: string;
     feeStructure?: {
        currency?: string;
        fixed?: number;
        percentage?: number;
        type: "percentage" | "fixed" | "percentage_plus_fixed";
     };
     integrationServiceUrl?: string;
     integrationServiceVersion?: string;
     integrationType?: "ticketlayer_pay" | "self_service";
     isDefault?: boolean;
     metadata?: Record<string, any>;
     name: string;
     priority?: number;
     supportedPaymentTypes:   | "bank_transfer"
        | "online_card"
        | "online_bank_transfer"
        | "online_wallet"
        | "in_person_card"
        | "in_person_cash"
        | "cheque"[];
     type:   | "stripe_connect"
        | "stripe_direct"
        | "adyen"
        | "square"
        | "paypal"
        | "cash"
        | "bank_transfer";
   }) => Promise<{
     accountId: string | null;
     applicationFee:   | {
        type: "percentage" | "fixed";
        value: number;
      }
        | null;
     capabilities:   | {
        maxAmount?: number;
        minAmount?: number;
        requiresCustomerAction?: boolean;
        supportedCurrencies?: string[];
        supportsDelayedCapture?: boolean;
        supportsInstantCapture?: boolean;
        supportsPartialRefunds?: boolean;
        supportsRefunds?: boolean;
      }
        | null;
     configuration: {
      [key: string]: unknown;
     };
     createdAt: string;
     description: string | null;
     feeStructure:   | {
        currency?: string;
        fixed?: number;
        percentage?: number;
        type: "percentage" | "fixed" | "percentage_plus_fixed";
      }
        | null;
     id: string;
     integrationServiceUrl: string | null;
     integrationServiceVersion: string;
     isDefault: boolean;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     name: string;
     organisationId: string;
     priority: number;
     status: "active" | "inactive" | "pending_setup";
     supportedPaymentTypes: (
        | "bank_transfer"
        | "online_card"
        | "online_bank_transfer"
        | "online_wallet"
        | "in_person_card"
        | "in_person_cash"
       | "cheque")[];
     type:   | "stripe_connect"
        | "stripe_direct"
        | "adyen"
        | "square"
        | "paypal"
        | "cash"
        | "bank_transfer";
     updatedAt: string;
  }>;
  delete: (providerId: string) => Promise<{
     id: string;
     success: boolean;
  }>;
  get: (providerId: string) => Promise<{
     accountId: string | null;
     applicationFee:   | {
        type: "percentage" | "fixed";
        value: number;
      }
        | null;
     capabilities:   | {
        maxAmount?: number;
        minAmount?: number;
        requiresCustomerAction?: boolean;
        supportedCurrencies?: string[];
        supportsDelayedCapture?: boolean;
        supportsInstantCapture?: boolean;
        supportsPartialRefunds?: boolean;
        supportsRefunds?: boolean;
      }
        | null;
     configuration: {
      [key: string]: unknown;
     };
     createdAt: string;
     description: string | null;
     feeStructure:   | {
        currency?: string;
        fixed?: number;
        percentage?: number;
        type: "percentage" | "fixed" | "percentage_plus_fixed";
      }
        | null;
     id: string;
     integrationServiceUrl: string | null;
     integrationServiceVersion: string;
     isDefault: boolean;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     name: string;
     organisationId: string;
     priority: number;
     status: "active" | "inactive" | "pending_setup";
     supportedPaymentTypes: (
        | "bank_transfer"
        | "online_card"
        | "online_bank_transfer"
        | "online_wallet"
        | "in_person_card"
        | "in_person_cash"
       | "cheque")[];
     type:   | "stripe_connect"
        | "stripe_direct"
        | "adyen"
        | "square"
        | "paypal"
        | "cash"
        | "bank_transfer";
     updatedAt: string;
  }>;
  getDefault: () => Promise<{
     accountId: string | null;
     applicationFee:   | {
        type: "percentage" | "fixed";
        value: number;
      }
        | null;
     capabilities:   | {
        maxAmount?: number;
        minAmount?: number;
        requiresCustomerAction?: boolean;
        supportedCurrencies?: string[];
        supportsDelayedCapture?: boolean;
        supportsInstantCapture?: boolean;
        supportsPartialRefunds?: boolean;
        supportsRefunds?: boolean;
      }
        | null;
     configuration: {
      [key: string]: unknown;
     };
     createdAt: string;
     description: string | null;
     feeStructure:   | {
        currency?: string;
        fixed?: number;
        percentage?: number;
        type: "percentage" | "fixed" | "percentage_plus_fixed";
      }
        | null;
     id: string;
     integrationServiceUrl: string | null;
     integrationServiceVersion: string;
     isDefault: boolean;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     name: string;
     organisationId: string;
     priority: number;
     status: "active" | "inactive" | "pending_setup";
     supportedPaymentTypes: (
        | "bank_transfer"
        | "online_card"
        | "online_bank_transfer"
        | "online_wallet"
        | "in_person_card"
        | "in_person_cash"
       | "cheque")[];
     type:   | "stripe_connect"
        | "stripe_direct"
        | "adyen"
        | "square"
        | "paypal"
        | "cash"
        | "bank_transfer";
     updatedAt: string;
  }>;
  list: (options?: {
     accountId?: string;
     integrationType?: "ticketlayer_pay" | "self_service";
     isDefault?: string;
     limit?: string;
     page?: string;
     paymentType?:   | "bank_transfer"
        | "online_card"
        | "online_bank_transfer"
        | "online_wallet"
        | "in_person_card"
        | "in_person_cash"
        | "cheque";
     status?: "active" | "inactive" | "pending_setup";
     type?:   | "stripe_connect"
        | "stripe_direct"
        | "adyen"
        | "square"
        | "paypal"
        | "cash"
        | "bank_transfer";
   }) => Promise<{
     pagination: {
        limit: number;
        page: number;
        total: number;
        totalPages: number;
     };
     providers: {
        accountId: string | null;
        applicationFee:   | {
           type: "percentage" | "fixed";
           value: number;
         }
           | null;
        capabilities:   | {
           maxAmount?: number;
           minAmount?: number;
           requiresCustomerAction?: boolean;
           supportedCurrencies?: string[];
           supportsDelayedCapture?: boolean;
           supportsInstantCapture?: boolean;
           supportsPartialRefunds?: boolean;
           supportsRefunds?: boolean;
         }
           | null;
        configuration: {
         [key: string]: unknown;
        };
        createdAt: string;
        description: string | null;
        feeStructure:   | {
           currency?: string;
           fixed?: number;
           percentage?: number;
           type: "percentage" | "fixed" | "percentage_plus_fixed";
         }
           | null;
        id: string;
        integrationServiceUrl: string | null;
        integrationServiceVersion: string;
        isDefault: boolean;
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        name: string;
        organisationId: string;
        priority: number;
        status: "active" | "inactive" | "pending_setup";
        supportedPaymentTypes: (
           | "bank_transfer"
           | "online_card"
           | "online_bank_transfer"
           | "online_wallet"
           | "in_person_card"
           | "in_person_cash"
          | "cheque")[];
        type:   | "stripe_connect"
           | "stripe_direct"
           | "adyen"
           | "square"
           | "paypal"
           | "cash"
           | "bank_transfer";
        updatedAt: string;
     }[];
  }>;
  update: (providerId: string, request: {
     applicationFee?: {
        type: "percentage" | "fixed";
        value: number;
     };
     capabilities?: {
        maxAmount?: number;
        minAmount?: number;
        requiresCustomerAction?: boolean;
        supportedCurrencies?: string[];
        supportsDelayedCapture?: boolean;
        supportsInstantCapture?: boolean;
        supportsPartialRefunds?: boolean;
        supportsRefunds?: boolean;
     };
     configuration?: Record<string, any>;
     description?: string;
     feeStructure?: {
        currency?: string;
        fixed?: number;
        percentage?: number;
        type: "percentage" | "fixed" | "percentage_plus_fixed";
     };
     integrationServiceUrl?: string;
     integrationServiceVersion?: string;
     isDefault?: boolean;
     metadata?: Record<string, any>;
     name?: string;
     priority?: number;
     status?: "active" | "inactive" | "pending_setup";
     supportedPaymentTypes?:   | "bank_transfer"
        | "online_card"
        | "online_bank_transfer"
        | "online_wallet"
        | "in_person_card"
        | "in_person_cash"
        | "cheque"[];
   }) => Promise<{
     accountId: string | null;
     applicationFee:   | {
        type: "percentage" | "fixed";
        value: number;
      }
        | null;
     capabilities:   | {
        maxAmount?: number;
        minAmount?: number;
        requiresCustomerAction?: boolean;
        supportedCurrencies?: string[];
        supportsDelayedCapture?: boolean;
        supportsInstantCapture?: boolean;
        supportsPartialRefunds?: boolean;
        supportsRefunds?: boolean;
      }
        | null;
     configuration: {
      [key: string]: unknown;
     };
     createdAt: string;
     description: string | null;
     feeStructure:   | {
        currency?: string;
        fixed?: number;
        percentage?: number;
        type: "percentage" | "fixed" | "percentage_plus_fixed";
      }
        | null;
     id: string;
     integrationServiceUrl: string | null;
     integrationServiceVersion: string;
     isDefault: boolean;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     name: string;
     organisationId: string;
     priority: number;
     status: "active" | "inactive" | "pending_setup";
     supportedPaymentTypes: (
        | "bank_transfer"
        | "online_card"
        | "online_bank_transfer"
        | "online_wallet"
        | "in_person_card"
        | "in_person_cash"
       | "cheque")[];
     type:   | "stripe_connect"
        | "stripe_direct"
        | "adyen"
        | "square"
        | "paypal"
        | "cash"
        | "bank_transfer";
     updatedAt: string;
  }>;
};
```

Defined in: [client.ts:2722](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L2722)

Payment Providers methods

#### create()

```ts
create: (request: {
  accountId?: string;
  applicationFee?: {
     type: "percentage" | "fixed";
     value: number;
  };
  capabilities?: {
     maxAmount?: number;
     minAmount?: number;
     requiresCustomerAction?: boolean;
     supportedCurrencies?: string[];
     supportsDelayedCapture?: boolean;
     supportsInstantCapture?: boolean;
     supportsPartialRefunds?: boolean;
     supportsRefunds?: boolean;
  };
  configuration: Record<string, any>;
  description?: string;
  feeStructure?: {
     currency?: string;
     fixed?: number;
     percentage?: number;
     type: "percentage" | "fixed" | "percentage_plus_fixed";
  };
  integrationServiceUrl?: string;
  integrationServiceVersion?: string;
  integrationType?: "ticketlayer_pay" | "self_service";
  isDefault?: boolean;
  metadata?: Record<string, any>;
  name: string;
  priority?: number;
  supportedPaymentTypes:   | "bank_transfer"
     | "online_card"
     | "online_bank_transfer"
     | "online_wallet"
     | "in_person_card"
     | "in_person_cash"
     | "cheque"[];
  type:   | "stripe_connect"
     | "stripe_direct"
     | "adyen"
     | "square"
     | "paypal"
     | "cash"
     | "bank_transfer";
}) => Promise<{
  accountId: string | null;
  applicationFee:   | {
     type: "percentage" | "fixed";
     value: number;
   }
     | null;
  capabilities:   | {
     maxAmount?: number;
     minAmount?: number;
     requiresCustomerAction?: boolean;
     supportedCurrencies?: string[];
     supportsDelayedCapture?: boolean;
     supportsInstantCapture?: boolean;
     supportsPartialRefunds?: boolean;
     supportsRefunds?: boolean;
   }
     | null;
  configuration: {
   [key: string]: unknown;
  };
  createdAt: string;
  description: string | null;
  feeStructure:   | {
     currency?: string;
     fixed?: number;
     percentage?: number;
     type: "percentage" | "fixed" | "percentage_plus_fixed";
   }
     | null;
  id: string;
  integrationServiceUrl: string | null;
  integrationServiceVersion: string;
  isDefault: boolean;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  name: string;
  organisationId: string;
  priority: number;
  status: "active" | "inactive" | "pending_setup";
  supportedPaymentTypes: (
     | "bank_transfer"
     | "online_card"
     | "online_bank_transfer"
     | "online_wallet"
     | "in_person_card"
     | "in_person_cash"
    | "cheque")[];
  type:   | "stripe_connect"
     | "stripe_direct"
     | "adyen"
     | "square"
     | "paypal"
     | "cash"
     | "bank_transfer";
  updatedAt: string;
}>;
```

Create payment provider
Create a new payment provider configuration

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `accountId?`: `string`; `applicationFee?`: \{ `type`: `"percentage"` \| `"fixed"`; `value`: `number`; \}; `capabilities?`: \{ `maxAmount?`: `number`; `minAmount?`: `number`; `requiresCustomerAction?`: `boolean`; `supportedCurrencies?`: `string`[]; `supportsDelayedCapture?`: `boolean`; `supportsInstantCapture?`: `boolean`; `supportsPartialRefunds?`: `boolean`; `supportsRefunds?`: `boolean`; \}; `configuration`: `Record`\<`string`, `any`\>; `description?`: `string`; `feeStructure?`: \{ `currency?`: `string`; `fixed?`: `number`; `percentage?`: `number`; `type`: `"percentage"` \| `"fixed"` \| `"percentage_plus_fixed"`; \}; `integrationServiceUrl?`: `string`; `integrationServiceVersion?`: `string`; `integrationType?`: `"ticketlayer_pay"` \| `"self_service"`; `isDefault?`: `boolean`; `metadata?`: `Record`\<`string`, `any`\>; `name`: `string`; `priority?`: `number`; `supportedPaymentTypes`: \| `"bank_transfer"` \| `"online_card"` \| `"online_bank_transfer"` \| `"online_wallet"` \| `"in_person_card"` \| `"in_person_cash"` \| `"cheque"`[]; `type`: \| `"stripe_connect"` \| `"stripe_direct"` \| `"adyen"` \| `"square"` \| `"paypal"` \| `"cash"` \| `"bank_transfer"`; \} |
| `request.accountId?` | `string` |
| `request.applicationFee?` | \{ `type`: `"percentage"` \| `"fixed"`; `value`: `number`; \} |
| `request.applicationFee.type` | `"percentage"` \| `"fixed"` |
| `request.applicationFee.value` | `number` |
| `request.capabilities?` | \{ `maxAmount?`: `number`; `minAmount?`: `number`; `requiresCustomerAction?`: `boolean`; `supportedCurrencies?`: `string`[]; `supportsDelayedCapture?`: `boolean`; `supportsInstantCapture?`: `boolean`; `supportsPartialRefunds?`: `boolean`; `supportsRefunds?`: `boolean`; \} |
| `request.capabilities.maxAmount?` | `number` |
| `request.capabilities.minAmount?` | `number` |
| `request.capabilities.requiresCustomerAction?` | `boolean` |
| `request.capabilities.supportedCurrencies?` | `string`[] |
| `request.capabilities.supportsDelayedCapture?` | `boolean` |
| `request.capabilities.supportsInstantCapture?` | `boolean` |
| `request.capabilities.supportsPartialRefunds?` | `boolean` |
| `request.capabilities.supportsRefunds?` | `boolean` |
| `request.configuration` | `Record`\<`string`, `any`\> |
| `request.description?` | `string` |
| `request.feeStructure?` | \{ `currency?`: `string`; `fixed?`: `number`; `percentage?`: `number`; `type`: `"percentage"` \| `"fixed"` \| `"percentage_plus_fixed"`; \} |
| `request.feeStructure.currency?` | `string` |
| `request.feeStructure.fixed?` | `number` |
| `request.feeStructure.percentage?` | `number` |
| `request.feeStructure.type` | `"percentage"` \| `"fixed"` \| `"percentage_plus_fixed"` |
| `request.integrationServiceUrl?` | `string` |
| `request.integrationServiceVersion?` | `string` |
| `request.integrationType?` | `"ticketlayer_pay"` \| `"self_service"` |
| `request.isDefault?` | `boolean` |
| `request.metadata?` | `Record`\<`string`, `any`\> |
| `request.name` | `string` |
| `request.priority?` | `number` |
| `request.supportedPaymentTypes` | \| `"bank_transfer"` \| `"online_card"` \| `"online_bank_transfer"` \| `"online_wallet"` \| `"in_person_card"` \| `"in_person_cash"` \| `"cheque"`[] |
| `request.type` | \| `"stripe_connect"` \| `"stripe_direct"` \| `"adyen"` \| `"square"` \| `"paypal"` \| `"cash"` \| `"bank_transfer"` |

##### Returns

`Promise`\<\{
  `accountId`: `string` \| `null`;
  `applicationFee`:   \| \{
     `type`: `"percentage"` \| `"fixed"`;
     `value`: `number`;
   \}
     \| `null`;
  `capabilities`:   \| \{
     `maxAmount?`: `number`;
     `minAmount?`: `number`;
     `requiresCustomerAction?`: `boolean`;
     `supportedCurrencies?`: `string`[];
     `supportsDelayedCapture?`: `boolean`;
     `supportsInstantCapture?`: `boolean`;
     `supportsPartialRefunds?`: `boolean`;
     `supportsRefunds?`: `boolean`;
   \}
     \| `null`;
  `configuration`: \{
   \[`key`: `string`\]: `unknown`;
  \};
  `createdAt`: `string`;
  `description`: `string` \| `null`;
  `feeStructure`:   \| \{
     `currency?`: `string`;
     `fixed?`: `number`;
     `percentage?`: `number`;
     `type`: `"percentage"` \| `"fixed"` \| `"percentage_plus_fixed"`;
   \}
     \| `null`;
  `id`: `string`;
  `integrationServiceUrl`: `string` \| `null`;
  `integrationServiceVersion`: `string`;
  `isDefault`: `boolean`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `name`: `string`;
  `organisationId`: `string`;
  `priority`: `number`;
  `status`: `"active"` \| `"inactive"` \| `"pending_setup"`;
  `supportedPaymentTypes`: (
     \| `"bank_transfer"`
     \| `"online_card"`
     \| `"online_bank_transfer"`
     \| `"online_wallet"`
     \| `"in_person_card"`
     \| `"in_person_cash"`
    \| `"cheque"`)[];
  `type`:   \| `"stripe_connect"`
     \| `"stripe_direct"`
     \| `"adyen"`
     \| `"square"`
     \| `"paypal"`
     \| `"cash"`
     \| `"bank_transfer"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

createPaymentProvider

#### delete()

```ts
delete: (providerId: string) => Promise<{
  id: string;
  success: boolean;
}>;
```

Delete payment provider
Delete a payment provider (soft delete)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `providerId` | `string` |

##### Returns

`Promise`\<\{
  `id`: `string`;
  `success`: `boolean`;
\}\>

##### Operation Id

deletePaymentProvider

#### get()

```ts
get: (providerId: string) => Promise<{
  accountId: string | null;
  applicationFee:   | {
     type: "percentage" | "fixed";
     value: number;
   }
     | null;
  capabilities:   | {
     maxAmount?: number;
     minAmount?: number;
     requiresCustomerAction?: boolean;
     supportedCurrencies?: string[];
     supportsDelayedCapture?: boolean;
     supportsInstantCapture?: boolean;
     supportsPartialRefunds?: boolean;
     supportsRefunds?: boolean;
   }
     | null;
  configuration: {
   [key: string]: unknown;
  };
  createdAt: string;
  description: string | null;
  feeStructure:   | {
     currency?: string;
     fixed?: number;
     percentage?: number;
     type: "percentage" | "fixed" | "percentage_plus_fixed";
   }
     | null;
  id: string;
  integrationServiceUrl: string | null;
  integrationServiceVersion: string;
  isDefault: boolean;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  name: string;
  organisationId: string;
  priority: number;
  status: "active" | "inactive" | "pending_setup";
  supportedPaymentTypes: (
     | "bank_transfer"
     | "online_card"
     | "online_bank_transfer"
     | "online_wallet"
     | "in_person_card"
     | "in_person_cash"
    | "cheque")[];
  type:   | "stripe_connect"
     | "stripe_direct"
     | "adyen"
     | "square"
     | "paypal"
     | "cash"
     | "bank_transfer";
  updatedAt: string;
}>;
```

Get payment provider
Get a specific payment provider by ID

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `providerId` | `string` |

##### Returns

`Promise`\<\{
  `accountId`: `string` \| `null`;
  `applicationFee`:   \| \{
     `type`: `"percentage"` \| `"fixed"`;
     `value`: `number`;
   \}
     \| `null`;
  `capabilities`:   \| \{
     `maxAmount?`: `number`;
     `minAmount?`: `number`;
     `requiresCustomerAction?`: `boolean`;
     `supportedCurrencies?`: `string`[];
     `supportsDelayedCapture?`: `boolean`;
     `supportsInstantCapture?`: `boolean`;
     `supportsPartialRefunds?`: `boolean`;
     `supportsRefunds?`: `boolean`;
   \}
     \| `null`;
  `configuration`: \{
   \[`key`: `string`\]: `unknown`;
  \};
  `createdAt`: `string`;
  `description`: `string` \| `null`;
  `feeStructure`:   \| \{
     `currency?`: `string`;
     `fixed?`: `number`;
     `percentage?`: `number`;
     `type`: `"percentage"` \| `"fixed"` \| `"percentage_plus_fixed"`;
   \}
     \| `null`;
  `id`: `string`;
  `integrationServiceUrl`: `string` \| `null`;
  `integrationServiceVersion`: `string`;
  `isDefault`: `boolean`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `name`: `string`;
  `organisationId`: `string`;
  `priority`: `number`;
  `status`: `"active"` \| `"inactive"` \| `"pending_setup"`;
  `supportedPaymentTypes`: (
     \| `"bank_transfer"`
     \| `"online_card"`
     \| `"online_bank_transfer"`
     \| `"online_wallet"`
     \| `"in_person_card"`
     \| `"in_person_cash"`
    \| `"cheque"`)[];
  `type`:   \| `"stripe_connect"`
     \| `"stripe_direct"`
     \| `"adyen"`
     \| `"square"`
     \| `"paypal"`
     \| `"cash"`
     \| `"bank_transfer"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

getPaymentProvider

#### getDefault()

```ts
getDefault: () => Promise<{
  accountId: string | null;
  applicationFee:   | {
     type: "percentage" | "fixed";
     value: number;
   }
     | null;
  capabilities:   | {
     maxAmount?: number;
     minAmount?: number;
     requiresCustomerAction?: boolean;
     supportedCurrencies?: string[];
     supportsDelayedCapture?: boolean;
     supportsInstantCapture?: boolean;
     supportsPartialRefunds?: boolean;
     supportsRefunds?: boolean;
   }
     | null;
  configuration: {
   [key: string]: unknown;
  };
  createdAt: string;
  description: string | null;
  feeStructure:   | {
     currency?: string;
     fixed?: number;
     percentage?: number;
     type: "percentage" | "fixed" | "percentage_plus_fixed";
   }
     | null;
  id: string;
  integrationServiceUrl: string | null;
  integrationServiceVersion: string;
  isDefault: boolean;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  name: string;
  organisationId: string;
  priority: number;
  status: "active" | "inactive" | "pending_setup";
  supportedPaymentTypes: (
     | "bank_transfer"
     | "online_card"
     | "online_bank_transfer"
     | "online_wallet"
     | "in_person_card"
     | "in_person_cash"
    | "cheque")[];
  type:   | "stripe_connect"
     | "stripe_direct"
     | "adyen"
     | "square"
     | "paypal"
     | "cash"
     | "bank_transfer";
  updatedAt: string;
}>;
```

Get default payment provider
Get the default payment provider for the account/organisation

##### Returns

`Promise`\<\{
  `accountId`: `string` \| `null`;
  `applicationFee`:   \| \{
     `type`: `"percentage"` \| `"fixed"`;
     `value`: `number`;
   \}
     \| `null`;
  `capabilities`:   \| \{
     `maxAmount?`: `number`;
     `minAmount?`: `number`;
     `requiresCustomerAction?`: `boolean`;
     `supportedCurrencies?`: `string`[];
     `supportsDelayedCapture?`: `boolean`;
     `supportsInstantCapture?`: `boolean`;
     `supportsPartialRefunds?`: `boolean`;
     `supportsRefunds?`: `boolean`;
   \}
     \| `null`;
  `configuration`: \{
   \[`key`: `string`\]: `unknown`;
  \};
  `createdAt`: `string`;
  `description`: `string` \| `null`;
  `feeStructure`:   \| \{
     `currency?`: `string`;
     `fixed?`: `number`;
     `percentage?`: `number`;
     `type`: `"percentage"` \| `"fixed"` \| `"percentage_plus_fixed"`;
   \}
     \| `null`;
  `id`: `string`;
  `integrationServiceUrl`: `string` \| `null`;
  `integrationServiceVersion`: `string`;
  `isDefault`: `boolean`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `name`: `string`;
  `organisationId`: `string`;
  `priority`: `number`;
  `status`: `"active"` \| `"inactive"` \| `"pending_setup"`;
  `supportedPaymentTypes`: (
     \| `"bank_transfer"`
     \| `"online_card"`
     \| `"online_bank_transfer"`
     \| `"online_wallet"`
     \| `"in_person_card"`
     \| `"in_person_cash"`
    \| `"cheque"`)[];
  `type`:   \| `"stripe_connect"`
     \| `"stripe_direct"`
     \| `"adyen"`
     \| `"square"`
     \| `"paypal"`
     \| `"cash"`
     \| `"bank_transfer"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

getDefaultPaymentProvider

#### list()

```ts
list: (options?: {
  accountId?: string;
  integrationType?: "ticketlayer_pay" | "self_service";
  isDefault?: string;
  limit?: string;
  page?: string;
  paymentType?:   | "bank_transfer"
     | "online_card"
     | "online_bank_transfer"
     | "online_wallet"
     | "in_person_card"
     | "in_person_cash"
     | "cheque";
  status?: "active" | "inactive" | "pending_setup";
  type?:   | "stripe_connect"
     | "stripe_direct"
     | "adyen"
     | "square"
     | "paypal"
     | "cash"
     | "bank_transfer";
}) => Promise<{
  pagination: {
     limit: number;
     page: number;
     total: number;
     totalPages: number;
  };
  providers: {
     accountId: string | null;
     applicationFee:   | {
        type: "percentage" | "fixed";
        value: number;
      }
        | null;
     capabilities:   | {
        maxAmount?: number;
        minAmount?: number;
        requiresCustomerAction?: boolean;
        supportedCurrencies?: string[];
        supportsDelayedCapture?: boolean;
        supportsInstantCapture?: boolean;
        supportsPartialRefunds?: boolean;
        supportsRefunds?: boolean;
      }
        | null;
     configuration: {
      [key: string]: unknown;
     };
     createdAt: string;
     description: string | null;
     feeStructure:   | {
        currency?: string;
        fixed?: number;
        percentage?: number;
        type: "percentage" | "fixed" | "percentage_plus_fixed";
      }
        | null;
     id: string;
     integrationServiceUrl: string | null;
     integrationServiceVersion: string;
     isDefault: boolean;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     name: string;
     organisationId: string;
     priority: number;
     status: "active" | "inactive" | "pending_setup";
     supportedPaymentTypes: (
        | "bank_transfer"
        | "online_card"
        | "online_bank_transfer"
        | "online_wallet"
        | "in_person_card"
        | "in_person_cash"
       | "cheque")[];
     type:   | "stripe_connect"
        | "stripe_direct"
        | "adyen"
        | "square"
        | "paypal"
        | "cash"
        | "bank_transfer";
     updatedAt: string;
  }[];
}>;
```

List payment providers
List all payment providers with optional filtering and pagination

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `accountId?`: `string`; `integrationType?`: `"ticketlayer_pay"` \| `"self_service"`; `isDefault?`: `string`; `limit?`: `string`; `page?`: `string`; `paymentType?`: \| `"bank_transfer"` \| `"online_card"` \| `"online_bank_transfer"` \| `"online_wallet"` \| `"in_person_card"` \| `"in_person_cash"` \| `"cheque"`; `status?`: `"active"` \| `"inactive"` \| `"pending_setup"`; `type?`: \| `"stripe_connect"` \| `"stripe_direct"` \| `"adyen"` \| `"square"` \| `"paypal"` \| `"cash"` \| `"bank_transfer"`; \} |
| `options.accountId?` | `string` |
| `options.integrationType?` | `"ticketlayer_pay"` \| `"self_service"` |
| `options.isDefault?` | `string` |
| `options.limit?` | `string` |
| `options.page?` | `string` |
| `options.paymentType?` | \| `"bank_transfer"` \| `"online_card"` \| `"online_bank_transfer"` \| `"online_wallet"` \| `"in_person_card"` \| `"in_person_cash"` \| `"cheque"` |
| `options.status?` | `"active"` \| `"inactive"` \| `"pending_setup"` |
| `options.type?` | \| `"stripe_connect"` \| `"stripe_direct"` \| `"adyen"` \| `"square"` \| `"paypal"` \| `"cash"` \| `"bank_transfer"` |

##### Returns

`Promise`\<\{
  `pagination`: \{
     `limit`: `number`;
     `page`: `number`;
     `total`: `number`;
     `totalPages`: `number`;
  \};
  `providers`: \{
     `accountId`: `string` \| `null`;
     `applicationFee`:   \| \{
        `type`: `"percentage"` \| `"fixed"`;
        `value`: `number`;
      \}
        \| `null`;
     `capabilities`:   \| \{
        `maxAmount?`: `number`;
        `minAmount?`: `number`;
        `requiresCustomerAction?`: `boolean`;
        `supportedCurrencies?`: `string`[];
        `supportsDelayedCapture?`: `boolean`;
        `supportsInstantCapture?`: `boolean`;
        `supportsPartialRefunds?`: `boolean`;
        `supportsRefunds?`: `boolean`;
      \}
        \| `null`;
     `configuration`: \{
      \[`key`: `string`\]: `unknown`;
     \};
     `createdAt`: `string`;
     `description`: `string` \| `null`;
     `feeStructure`:   \| \{
        `currency?`: `string`;
        `fixed?`: `number`;
        `percentage?`: `number`;
        `type`: `"percentage"` \| `"fixed"` \| `"percentage_plus_fixed"`;
      \}
        \| `null`;
     `id`: `string`;
     `integrationServiceUrl`: `string` \| `null`;
     `integrationServiceVersion`: `string`;
     `isDefault`: `boolean`;
     `metadata`:   \| \{
      \[`key`: `string`\]: `unknown`;
      \}
        \| `null`;
     `name`: `string`;
     `organisationId`: `string`;
     `priority`: `number`;
     `status`: `"active"` \| `"inactive"` \| `"pending_setup"`;
     `supportedPaymentTypes`: (
        \| `"bank_transfer"`
        \| `"online_card"`
        \| `"online_bank_transfer"`
        \| `"online_wallet"`
        \| `"in_person_card"`
        \| `"in_person_cash"`
       \| `"cheque"`)[];
     `type`:   \| `"stripe_connect"`
        \| `"stripe_direct"`
        \| `"adyen"`
        \| `"square"`
        \| `"paypal"`
        \| `"cash"`
        \| `"bank_transfer"`;
     `updatedAt`: `string`;
  \}[];
\}\>

##### Operation Id

listPaymentProviders

#### update()

```ts
update: (providerId: string, request: {
  applicationFee?: {
     type: "percentage" | "fixed";
     value: number;
  };
  capabilities?: {
     maxAmount?: number;
     minAmount?: number;
     requiresCustomerAction?: boolean;
     supportedCurrencies?: string[];
     supportsDelayedCapture?: boolean;
     supportsInstantCapture?: boolean;
     supportsPartialRefunds?: boolean;
     supportsRefunds?: boolean;
  };
  configuration?: Record<string, any>;
  description?: string;
  feeStructure?: {
     currency?: string;
     fixed?: number;
     percentage?: number;
     type: "percentage" | "fixed" | "percentage_plus_fixed";
  };
  integrationServiceUrl?: string;
  integrationServiceVersion?: string;
  isDefault?: boolean;
  metadata?: Record<string, any>;
  name?: string;
  priority?: number;
  status?: "active" | "inactive" | "pending_setup";
  supportedPaymentTypes?:   | "bank_transfer"
     | "online_card"
     | "online_bank_transfer"
     | "online_wallet"
     | "in_person_card"
     | "in_person_cash"
     | "cheque"[];
}) => Promise<{
  accountId: string | null;
  applicationFee:   | {
     type: "percentage" | "fixed";
     value: number;
   }
     | null;
  capabilities:   | {
     maxAmount?: number;
     minAmount?: number;
     requiresCustomerAction?: boolean;
     supportedCurrencies?: string[];
     supportsDelayedCapture?: boolean;
     supportsInstantCapture?: boolean;
     supportsPartialRefunds?: boolean;
     supportsRefunds?: boolean;
   }
     | null;
  configuration: {
   [key: string]: unknown;
  };
  createdAt: string;
  description: string | null;
  feeStructure:   | {
     currency?: string;
     fixed?: number;
     percentage?: number;
     type: "percentage" | "fixed" | "percentage_plus_fixed";
   }
     | null;
  id: string;
  integrationServiceUrl: string | null;
  integrationServiceVersion: string;
  isDefault: boolean;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  name: string;
  organisationId: string;
  priority: number;
  status: "active" | "inactive" | "pending_setup";
  supportedPaymentTypes: (
     | "bank_transfer"
     | "online_card"
     | "online_bank_transfer"
     | "online_wallet"
     | "in_person_card"
     | "in_person_cash"
    | "cheque")[];
  type:   | "stripe_connect"
     | "stripe_direct"
     | "adyen"
     | "square"
     | "paypal"
     | "cash"
     | "bank_transfer";
  updatedAt: string;
}>;
```

Update payment provider
Update an existing payment provider configuration

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `providerId` | `string` |
| `request` | \{ `applicationFee?`: \{ `type`: `"percentage"` \| `"fixed"`; `value`: `number`; \}; `capabilities?`: \{ `maxAmount?`: `number`; `minAmount?`: `number`; `requiresCustomerAction?`: `boolean`; `supportedCurrencies?`: `string`[]; `supportsDelayedCapture?`: `boolean`; `supportsInstantCapture?`: `boolean`; `supportsPartialRefunds?`: `boolean`; `supportsRefunds?`: `boolean`; \}; `configuration?`: `Record`\<`string`, `any`\>; `description?`: `string`; `feeStructure?`: \{ `currency?`: `string`; `fixed?`: `number`; `percentage?`: `number`; `type`: `"percentage"` \| `"fixed"` \| `"percentage_plus_fixed"`; \}; `integrationServiceUrl?`: `string`; `integrationServiceVersion?`: `string`; `isDefault?`: `boolean`; `metadata?`: `Record`\<`string`, `any`\>; `name?`: `string`; `priority?`: `number`; `status?`: `"active"` \| `"inactive"` \| `"pending_setup"`; `supportedPaymentTypes?`: \| `"bank_transfer"` \| `"online_card"` \| `"online_bank_transfer"` \| `"online_wallet"` \| `"in_person_card"` \| `"in_person_cash"` \| `"cheque"`[]; \} |
| `request.applicationFee?` | \{ `type`: `"percentage"` \| `"fixed"`; `value`: `number`; \} |
| `request.applicationFee.type` | `"percentage"` \| `"fixed"` |
| `request.applicationFee.value` | `number` |
| `request.capabilities?` | \{ `maxAmount?`: `number`; `minAmount?`: `number`; `requiresCustomerAction?`: `boolean`; `supportedCurrencies?`: `string`[]; `supportsDelayedCapture?`: `boolean`; `supportsInstantCapture?`: `boolean`; `supportsPartialRefunds?`: `boolean`; `supportsRefunds?`: `boolean`; \} |
| `request.capabilities.maxAmount?` | `number` |
| `request.capabilities.minAmount?` | `number` |
| `request.capabilities.requiresCustomerAction?` | `boolean` |
| `request.capabilities.supportedCurrencies?` | `string`[] |
| `request.capabilities.supportsDelayedCapture?` | `boolean` |
| `request.capabilities.supportsInstantCapture?` | `boolean` |
| `request.capabilities.supportsPartialRefunds?` | `boolean` |
| `request.capabilities.supportsRefunds?` | `boolean` |
| `request.configuration?` | `Record`\<`string`, `any`\> |
| `request.description?` | `string` |
| `request.feeStructure?` | \{ `currency?`: `string`; `fixed?`: `number`; `percentage?`: `number`; `type`: `"percentage"` \| `"fixed"` \| `"percentage_plus_fixed"`; \} |
| `request.feeStructure.currency?` | `string` |
| `request.feeStructure.fixed?` | `number` |
| `request.feeStructure.percentage?` | `number` |
| `request.feeStructure.type` | `"percentage"` \| `"fixed"` \| `"percentage_plus_fixed"` |
| `request.integrationServiceUrl?` | `string` |
| `request.integrationServiceVersion?` | `string` |
| `request.isDefault?` | `boolean` |
| `request.metadata?` | `Record`\<`string`, `any`\> |
| `request.name?` | `string` |
| `request.priority?` | `number` |
| `request.status?` | `"active"` \| `"inactive"` \| `"pending_setup"` |
| `request.supportedPaymentTypes?` | \| `"bank_transfer"` \| `"online_card"` \| `"online_bank_transfer"` \| `"online_wallet"` \| `"in_person_card"` \| `"in_person_cash"` \| `"cheque"`[] |

##### Returns

`Promise`\<\{
  `accountId`: `string` \| `null`;
  `applicationFee`:   \| \{
     `type`: `"percentage"` \| `"fixed"`;
     `value`: `number`;
   \}
     \| `null`;
  `capabilities`:   \| \{
     `maxAmount?`: `number`;
     `minAmount?`: `number`;
     `requiresCustomerAction?`: `boolean`;
     `supportedCurrencies?`: `string`[];
     `supportsDelayedCapture?`: `boolean`;
     `supportsInstantCapture?`: `boolean`;
     `supportsPartialRefunds?`: `boolean`;
     `supportsRefunds?`: `boolean`;
   \}
     \| `null`;
  `configuration`: \{
   \[`key`: `string`\]: `unknown`;
  \};
  `createdAt`: `string`;
  `description`: `string` \| `null`;
  `feeStructure`:   \| \{
     `currency?`: `string`;
     `fixed?`: `number`;
     `percentage?`: `number`;
     `type`: `"percentage"` \| `"fixed"` \| `"percentage_plus_fixed"`;
   \}
     \| `null`;
  `id`: `string`;
  `integrationServiceUrl`: `string` \| `null`;
  `integrationServiceVersion`: `string`;
  `isDefault`: `boolean`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `name`: `string`;
  `organisationId`: `string`;
  `priority`: `number`;
  `status`: `"active"` \| `"inactive"` \| `"pending_setup"`;
  `supportedPaymentTypes`: (
     \| `"bank_transfer"`
     \| `"online_card"`
     \| `"online_bank_transfer"`
     \| `"online_wallet"`
     \| `"in_person_card"`
     \| `"in_person_cash"`
    \| `"cheque"`)[];
  `type`:   \| `"stripe_connect"`
     \| `"stripe_direct"`
     \| `"adyen"`
     \| `"square"`
     \| `"paypal"`
     \| `"cash"`
     \| `"bank_transfer"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

updatePaymentProvider

***

### payments

```ts
payments: {
  cancel: (paymentId: string, request: {
     reason?: string;
   }) => Promise<{
     amount: string;
     createdAt: string;
     currency: string;
     failedAt: string | null;
     failureCode: string | null;
     failureMessage: string | null;
     id: string;
     invoiceId: string | null;
     method: string | null;
     organisationId: string;
     paidAt: string | null;
     status: "cancelled" | "pending" | "succeeded" | "failed" | "refunded";
     updatedAt: string;
  }>;
  create: (request: {
     accountId: string;
     amount: number;
     currency: string;
     isPartialPayment?: boolean;
     metadata?: Record<string, any>;
     orderId: string;
     orderNumber: string;
     paymentProviderId?: string;
     paymentType:   | "bank_transfer"
        | "online_card"
        | "online_bank_transfer"
        | "online_wallet"
        | "in_person_card"
        | "in_person_cash"
        | "cheque";
     remainingBalance?: number;
     returnUrl?: string;
   }) => Promise<{
     amount: string;
     createdAt: string;
     currency: string;
     failedAt: string | null;
     failureCode: string | null;
     failureMessage: string | null;
     id: string;
     invoiceId: string | null;
     method: string | null;
     organisationId: string;
     paidAt: string | null;
     status: "cancelled" | "pending" | "succeeded" | "failed" | "refunded";
     updatedAt: string;
  }>;
  createRefund: (paymentId: string, request: {
     amount: number;
     metadata?: Record<string, any>;
     notes?: string;
     reason: string;
   }) => Promise<{
     amount: number;
     completedAt: string | null;
     createdAt: string;
     externalRefundId: string | null;
     failedAt: string | null;
     failureCode: string | null;
     failureMessage: string | null;
     id: string;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     notes: string | null;
     paymentId: string;
     reason: string;
     status: "cancelled" | "pending" | "succeeded" | "failed" | "processing";
     updatedAt: string;
  }>;
  get: (paymentId: string) => Promise<{
     amount: string;
     createdAt: string;
     currency: string;
     failedAt: string | null;
     failureCode: string | null;
     failureMessage: string | null;
     id: string;
     invoiceId: string | null;
     method: string | null;
     organisationId: string;
     paidAt: string | null;
     status: "cancelled" | "pending" | "succeeded" | "failed" | "refunded";
     updatedAt: string;
  }>;
  list: (options?: {
     fromDate?: string;
     limit?: string;
     orderId?: string;
     page?: string;
     paymentProviderId?: string;
     paymentType?:   | "bank_transfer"
        | "online_card"
        | "online_bank_transfer"
        | "online_wallet"
        | "in_person_card"
        | "in_person_cash"
        | "cheque";
     status?:   | "cancelled"
        | "pending"
        | "succeeded"
        | "failed"
        | "processing"
        | "expired"
        | "requires_action"
        | "created";
     toDate?: string;
   }) => Promise<{
     amount: string;
     createdAt: string;
     currency: string;
     failedAt: string | null;
     failureCode: string | null;
     failureMessage: string | null;
     id: string;
     invoiceId: string | null;
     method: string | null;
     organisationId: string;
     paidAt: string | null;
     status: "cancelled" | "pending" | "succeeded" | "failed" | "refunded";
     updatedAt: string;
  }[]>;
  listRefunds: (paymentId: string) => Promise<{
     amount: number;
     completedAt: string | null;
     createdAt: string;
     externalRefundId: string | null;
     failedAt: string | null;
     failureCode: string | null;
     failureMessage: string | null;
     id: string;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     notes: string | null;
     paymentId: string;
     reason: string;
     status: "cancelled" | "pending" | "succeeded" | "failed" | "processing";
     updatedAt: string;
  }[]>;
};
```

Defined in: [client.ts:2624](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L2624)

Payments methods

#### cancel()

```ts
cancel: (paymentId: string, request: {
  reason?: string;
}) => Promise<{
  amount: string;
  createdAt: string;
  currency: string;
  failedAt: string | null;
  failureCode: string | null;
  failureMessage: string | null;
  id: string;
  invoiceId: string | null;
  method: string | null;
  organisationId: string;
  paidAt: string | null;
  status: "cancelled" | "pending" | "succeeded" | "failed" | "refunded";
  updatedAt: string;
}>;
```

Cancel payment
Cancel a pending payment

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentId` | `string` |
| `request` | \{ `reason?`: `string`; \} |
| `request.reason?` | `string` |

##### Returns

`Promise`\<\{
  `amount`: `string`;
  `createdAt`: `string`;
  `currency`: `string`;
  `failedAt`: `string` \| `null`;
  `failureCode`: `string` \| `null`;
  `failureMessage`: `string` \| `null`;
  `id`: `string`;
  `invoiceId`: `string` \| `null`;
  `method`: `string` \| `null`;
  `organisationId`: `string`;
  `paidAt`: `string` \| `null`;
  `status`: `"cancelled"` \| `"pending"` \| `"succeeded"` \| `"failed"` \| `"refunded"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

cancelPayment

#### create()

```ts
create: (request: {
  accountId: string;
  amount: number;
  currency: string;
  isPartialPayment?: boolean;
  metadata?: Record<string, any>;
  orderId: string;
  orderNumber: string;
  paymentProviderId?: string;
  paymentType:   | "bank_transfer"
     | "online_card"
     | "online_bank_transfer"
     | "online_wallet"
     | "in_person_card"
     | "in_person_cash"
     | "cheque";
  remainingBalance?: number;
  returnUrl?: string;
}) => Promise<{
  amount: string;
  createdAt: string;
  currency: string;
  failedAt: string | null;
  failureCode: string | null;
  failureMessage: string | null;
  id: string;
  invoiceId: string | null;
  method: string | null;
  organisationId: string;
  paidAt: string | null;
  status: "cancelled" | "pending" | "succeeded" | "failed" | "refunded";
  updatedAt: string;
}>;
```

Create payment
Create a new payment for an order

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `accountId`: `string`; `amount`: `number`; `currency`: `string`; `isPartialPayment?`: `boolean`; `metadata?`: `Record`\<`string`, `any`\>; `orderId`: `string`; `orderNumber`: `string`; `paymentProviderId?`: `string`; `paymentType`: \| `"bank_transfer"` \| `"online_card"` \| `"online_bank_transfer"` \| `"online_wallet"` \| `"in_person_card"` \| `"in_person_cash"` \| `"cheque"`; `remainingBalance?`: `number`; `returnUrl?`: `string`; \} |
| `request.accountId` | `string` |
| `request.amount` | `number` |
| `request.currency` | `string` |
| `request.isPartialPayment?` | `boolean` |
| `request.metadata?` | `Record`\<`string`, `any`\> |
| `request.orderId` | `string` |
| `request.orderNumber` | `string` |
| `request.paymentProviderId?` | `string` |
| `request.paymentType` | \| `"bank_transfer"` \| `"online_card"` \| `"online_bank_transfer"` \| `"online_wallet"` \| `"in_person_card"` \| `"in_person_cash"` \| `"cheque"` |
| `request.remainingBalance?` | `number` |
| `request.returnUrl?` | `string` |

##### Returns

`Promise`\<\{
  `amount`: `string`;
  `createdAt`: `string`;
  `currency`: `string`;
  `failedAt`: `string` \| `null`;
  `failureCode`: `string` \| `null`;
  `failureMessage`: `string` \| `null`;
  `id`: `string`;
  `invoiceId`: `string` \| `null`;
  `method`: `string` \| `null`;
  `organisationId`: `string`;
  `paidAt`: `string` \| `null`;
  `status`: `"cancelled"` \| `"pending"` \| `"succeeded"` \| `"failed"` \| `"refunded"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

createPayment

#### createRefund()

```ts
createRefund: (paymentId: string, request: {
  amount: number;
  metadata?: Record<string, any>;
  notes?: string;
  reason: string;
}) => Promise<{
  amount: number;
  completedAt: string | null;
  createdAt: string;
  externalRefundId: string | null;
  failedAt: string | null;
  failureCode: string | null;
  failureMessage: string | null;
  id: string;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  notes: string | null;
  paymentId: string;
  reason: string;
  status: "cancelled" | "pending" | "succeeded" | "failed" | "processing";
  updatedAt: string;
}>;
```

Create refund
Create a refund for a payment

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentId` | `string` |
| `request` | \{ `amount`: `number`; `metadata?`: `Record`\<`string`, `any`\>; `notes?`: `string`; `reason`: `string`; \} |
| `request.amount` | `number` |
| `request.metadata?` | `Record`\<`string`, `any`\> |
| `request.notes?` | `string` |
| `request.reason` | `string` |

##### Returns

`Promise`\<\{
  `amount`: `number`;
  `completedAt`: `string` \| `null`;
  `createdAt`: `string`;
  `externalRefundId`: `string` \| `null`;
  `failedAt`: `string` \| `null`;
  `failureCode`: `string` \| `null`;
  `failureMessage`: `string` \| `null`;
  `id`: `string`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `notes`: `string` \| `null`;
  `paymentId`: `string`;
  `reason`: `string`;
  `status`: `"cancelled"` \| `"pending"` \| `"succeeded"` \| `"failed"` \| `"processing"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

createPaymentRefund

#### get()

```ts
get: (paymentId: string) => Promise<{
  amount: string;
  createdAt: string;
  currency: string;
  failedAt: string | null;
  failureCode: string | null;
  failureMessage: string | null;
  id: string;
  invoiceId: string | null;
  method: string | null;
  organisationId: string;
  paidAt: string | null;
  status: "cancelled" | "pending" | "succeeded" | "failed" | "refunded";
  updatedAt: string;
}>;
```

Get payment
Get a specific payment by ID

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentId` | `string` |

##### Returns

`Promise`\<\{
  `amount`: `string`;
  `createdAt`: `string`;
  `currency`: `string`;
  `failedAt`: `string` \| `null`;
  `failureCode`: `string` \| `null`;
  `failureMessage`: `string` \| `null`;
  `id`: `string`;
  `invoiceId`: `string` \| `null`;
  `method`: `string` \| `null`;
  `organisationId`: `string`;
  `paidAt`: `string` \| `null`;
  `status`: `"cancelled"` \| `"pending"` \| `"succeeded"` \| `"failed"` \| `"refunded"`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

getPayment

#### list()

```ts
list: (options?: {
  fromDate?: string;
  limit?: string;
  orderId?: string;
  page?: string;
  paymentProviderId?: string;
  paymentType?:   | "bank_transfer"
     | "online_card"
     | "online_bank_transfer"
     | "online_wallet"
     | "in_person_card"
     | "in_person_cash"
     | "cheque";
  status?:   | "cancelled"
     | "pending"
     | "succeeded"
     | "failed"
     | "processing"
     | "expired"
     | "requires_action"
     | "created";
  toDate?: string;
}) => Promise<{
  amount: string;
  createdAt: string;
  currency: string;
  failedAt: string | null;
  failureCode: string | null;
  failureMessage: string | null;
  id: string;
  invoiceId: string | null;
  method: string | null;
  organisationId: string;
  paidAt: string | null;
  status: "cancelled" | "pending" | "succeeded" | "failed" | "refunded";
  updatedAt: string;
}[]>;
```

List payments
List all payments with optional filtering and pagination

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `fromDate?`: `string`; `limit?`: `string`; `orderId?`: `string`; `page?`: `string`; `paymentProviderId?`: `string`; `paymentType?`: \| `"bank_transfer"` \| `"online_card"` \| `"online_bank_transfer"` \| `"online_wallet"` \| `"in_person_card"` \| `"in_person_cash"` \| `"cheque"`; `status?`: \| `"cancelled"` \| `"pending"` \| `"succeeded"` \| `"failed"` \| `"processing"` \| `"expired"` \| `"requires_action"` \| `"created"`; `toDate?`: `string`; \} |
| `options.fromDate?` | `string` |
| `options.limit?` | `string` |
| `options.orderId?` | `string` |
| `options.page?` | `string` |
| `options.paymentProviderId?` | `string` |
| `options.paymentType?` | \| `"bank_transfer"` \| `"online_card"` \| `"online_bank_transfer"` \| `"online_wallet"` \| `"in_person_card"` \| `"in_person_cash"` \| `"cheque"` |
| `options.status?` | \| `"cancelled"` \| `"pending"` \| `"succeeded"` \| `"failed"` \| `"processing"` \| `"expired"` \| `"requires_action"` \| `"created"` |
| `options.toDate?` | `string` |

##### Returns

`Promise`\<\{
  `amount`: `string`;
  `createdAt`: `string`;
  `currency`: `string`;
  `failedAt`: `string` \| `null`;
  `failureCode`: `string` \| `null`;
  `failureMessage`: `string` \| `null`;
  `id`: `string`;
  `invoiceId`: `string` \| `null`;
  `method`: `string` \| `null`;
  `organisationId`: `string`;
  `paidAt`: `string` \| `null`;
  `status`: `"cancelled"` \| `"pending"` \| `"succeeded"` \| `"failed"` \| `"refunded"`;
  `updatedAt`: `string`;
\}[]\>

##### Operation Id

listPayments

#### listRefunds()

```ts
listRefunds: (paymentId: string) => Promise<{
  amount: number;
  completedAt: string | null;
  createdAt: string;
  externalRefundId: string | null;
  failedAt: string | null;
  failureCode: string | null;
  failureMessage: string | null;
  id: string;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  notes: string | null;
  paymentId: string;
  reason: string;
  status: "cancelled" | "pending" | "succeeded" | "failed" | "processing";
  updatedAt: string;
}[]>;
```

List refunds
List all refunds for a specific payment

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentId` | `string` |

##### Returns

`Promise`\<\{
  `amount`: `number`;
  `completedAt`: `string` \| `null`;
  `createdAt`: `string`;
  `externalRefundId`: `string` \| `null`;
  `failedAt`: `string` \| `null`;
  `failureCode`: `string` \| `null`;
  `failureMessage`: `string` \| `null`;
  `id`: `string`;
  `metadata`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `notes`: `string` \| `null`;
  `paymentId`: `string`;
  `reason`: `string`;
  `status`: `"cancelled"` \| `"pending"` \| `"succeeded"` \| `"failed"` \| `"processing"`;
  `updatedAt`: `string`;
\}[]\>

##### Operation Id

listPaymentRefunds

***

### presaleCodes

```ts
presaleCodes: {
  create: (request: {
     accountId: string;
     benefit: string;
     benefitExpiresAt?: string;
     channelId?: string;
     code: string;
     expiresAt?: string;
     maxRedemptions?: number;
   }) => Promise<{
     accountId: string;
     benefit: string;
     benefitExpiresAt: string | null;
     channelId: string | null;
     code: string;
     createdAt: string;
     createdBy: string | null;
     expiresAt: string | null;
     id: string;
     isActive: boolean;
     maxRedemptions: number | null;
     organisationId: string;
     redemptionCount: number;
     updatedAt: string;
  }>;
  deactivate: (codeId: string) => Promise<{
     accountId: string;
     benefit: string;
     benefitExpiresAt: string | null;
     channelId: string | null;
     code: string;
     createdAt: string;
     createdBy: string | null;
     expiresAt: string | null;
     id: string;
     isActive: boolean;
     maxRedemptions: number | null;
     organisationId: string;
     redemptionCount: number;
     updatedAt: string;
  }>;
  list: () => Promise<{
     accountId: string;
     benefit: string;
     benefitExpiresAt: string | null;
     channelId: string | null;
     code: string;
     createdAt: string;
     createdBy: string | null;
     expiresAt: string | null;
     id: string;
     isActive: boolean;
     maxRedemptions: number | null;
     organisationId: string;
     redemptionCount: number;
     updatedAt: string;
  }[]>;
};
```

Defined in: [client.ts:3048](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L3048)

Presale Codes methods

#### create()

```ts
create: (request: {
  accountId: string;
  benefit: string;
  benefitExpiresAt?: string;
  channelId?: string;
  code: string;
  expiresAt?: string;
  maxRedemptions?: number;
}) => Promise<{
  accountId: string;
  benefit: string;
  benefitExpiresAt: string | null;
  channelId: string | null;
  code: string;
  createdAt: string;
  createdBy: string | null;
  expiresAt: string | null;
  id: string;
  isActive: boolean;
  maxRedemptions: number | null;
  organisationId: string;
  redemptionCount: number;
  updatedAt: string;
}>;
```

Create presale code
Create a shareable presale code that grants a benefit on redemption

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `accountId`: `string`; `benefit`: `string`; `benefitExpiresAt?`: `string`; `channelId?`: `string`; `code`: `string`; `expiresAt?`: `string`; `maxRedemptions?`: `number`; \} |
| `request.accountId` | `string` |
| `request.benefit` | `string` |
| `request.benefitExpiresAt?` | `string` |
| `request.channelId?` | `string` |
| `request.code` | `string` |
| `request.expiresAt?` | `string` |
| `request.maxRedemptions?` | `number` |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `benefit`: `string`;
  `benefitExpiresAt`: `string` \| `null`;
  `channelId`: `string` \| `null`;
  `code`: `string`;
  `createdAt`: `string`;
  `createdBy`: `string` \| `null`;
  `expiresAt`: `string` \| `null`;
  `id`: `string`;
  `isActive`: `boolean`;
  `maxRedemptions`: `number` \| `null`;
  `organisationId`: `string`;
  `redemptionCount`: `number`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

createPresaleCode

#### deactivate()

```ts
deactivate: (codeId: string) => Promise<{
  accountId: string;
  benefit: string;
  benefitExpiresAt: string | null;
  channelId: string | null;
  code: string;
  createdAt: string;
  createdBy: string | null;
  expiresAt: string | null;
  id: string;
  isActive: boolean;
  maxRedemptions: number | null;
  organisationId: string;
  redemptionCount: number;
  updatedAt: string;
}>;
```

Deactivate presale code
Deactivate a presale code so it can no longer be redeemed

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `codeId` | `string` |

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `benefit`: `string`;
  `benefitExpiresAt`: `string` \| `null`;
  `channelId`: `string` \| `null`;
  `code`: `string`;
  `createdAt`: `string`;
  `createdBy`: `string` \| `null`;
  `expiresAt`: `string` \| `null`;
  `id`: `string`;
  `isActive`: `boolean`;
  `maxRedemptions`: `number` \| `null`;
  `organisationId`: `string`;
  `redemptionCount`: `number`;
  `updatedAt`: `string`;
\}\>

##### Operation Id

deactivatePresaleCode

#### list()

```ts
list: () => Promise<{
  accountId: string;
  benefit: string;
  benefitExpiresAt: string | null;
  channelId: string | null;
  code: string;
  createdAt: string;
  createdBy: string | null;
  expiresAt: string | null;
  id: string;
  isActive: boolean;
  maxRedemptions: number | null;
  organisationId: string;
  redemptionCount: number;
  updatedAt: string;
}[]>;
```

List presale codes
List the organisation's presale codes visible to the caller

##### Returns

`Promise`\<\{
  `accountId`: `string`;
  `benefit`: `string`;
  `benefitExpiresAt`: `string` \| `null`;
  `channelId`: `string` \| `null`;
  `code`: `string`;
  `createdAt`: `string`;
  `createdBy`: `string` \| `null`;
  `expiresAt`: `string` \| `null`;
  `id`: `string`;
  `isActive`: `boolean`;
  `maxRedemptions`: `number` \| `null`;
  `organisationId`: `string`;
  `redemptionCount`: `number`;
  `updatedAt`: `string`;
\}[]\>

##### Operation Id

listPresaleCodes

***

### roles

```ts
roles: {
  create: (request: {
     description?: string;
     name: string;
     permissions: string[];
   }) => Promise<{
     createdAt: string;
     description: string | null;
     id: string;
     isDeleted: boolean;
     isSystemRole: boolean;
     name: string;
     organisationId: string;
     permissions: string[];
     updatedAt: string;
  }>;
  delete: (id: string) => Promise<{
     id: string;
     success: boolean;
  }>;
  get: (id: string) => Promise<{
     createdAt: string;
     description: string | null;
     id: string;
     isDeleted: boolean;
     isSystemRole: boolean;
     name: string;
     organisationId: string;
     permissions: string[];
     updatedAt: string;
  }>;
  list: () => Promise<{
     createdAt: string;
     description: string | null;
     id: string;
     isDeleted: boolean;
     isSystemRole: boolean;
     name: string;
     organisationId: string;
     permissions: string[];
     updatedAt: string;
  }[]>;
  update: (id: string, request: {
     description?: string;
     name?: string;
     permissions?: string[];
   }) => Promise<{
     createdAt: string;
     description: string | null;
     id: string;
     isDeleted: boolean;
     isSystemRole: boolean;
     name: string;
     organisationId: string;
     permissions: string[];
     updatedAt: string;
  }>;
};
```

Defined in: [client.ts:1046](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L1046)

Roles methods

#### create()

```ts
create: (request: {
  description?: string;
  name: string;
  permissions: string[];
}) => Promise<{
  createdAt: string;
  description: string | null;
  id: string;
  isDeleted: boolean;
  isSystemRole: boolean;
  name: string;
  organisationId: string;
  permissions: string[];
  updatedAt: string;
}>;
```

Create role
Create a new custom role with specified permissions. Permissions use format: resource.action:scope (e.g., events.create, events.read:all, events.*:acc_123)

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | \{ `description?`: `string`; `name`: `string`; `permissions`: `string`[]; \} | - |
| `request.description?` | `string` | **Description** Optional description of the role **Example** `Manages events and related resources` |
| `request.name` | `string` | **Description** The name of the role **Example** `Event Manager` |
| `request.permissions` | `string`[] | **Description** Array of permission strings **Example** `[ "events.*", "venues.read:all", "orders.read" ]` |

##### Returns

`Promise`\<\{
  `createdAt`: `string`;
  `description`: `string` \| `null`;
  `id`: `string`;
  `isDeleted`: `boolean`;
  `isSystemRole`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `permissions`: `string`[];
  `updatedAt`: `string`;
\}\>

##### Operation Id

createRole

#### delete()

```ts
delete: (id: string) => Promise<{
  id: string;
  success: boolean;
}>;
```

Delete role
Delete a custom role (soft delete). System roles cannot be deleted.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

##### Returns

`Promise`\<\{
  `id`: `string`;
  `success`: `boolean`;
\}\>

##### Operation Id

deleteRole

#### get()

```ts
get: (id: string) => Promise<{
  createdAt: string;
  description: string | null;
  id: string;
  isDeleted: boolean;
  isSystemRole: boolean;
  name: string;
  organisationId: string;
  permissions: string[];
  updatedAt: string;
}>;
```

Get role
Get a specific role by ID

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

##### Returns

`Promise`\<\{
  `createdAt`: `string`;
  `description`: `string` \| `null`;
  `id`: `string`;
  `isDeleted`: `boolean`;
  `isSystemRole`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `permissions`: `string`[];
  `updatedAt`: `string`;
\}\>

##### Operation Id

getRole

#### list()

```ts
list: () => Promise<{
  createdAt: string;
  description: string | null;
  id: string;
  isDeleted: boolean;
  isSystemRole: boolean;
  name: string;
  organisationId: string;
  permissions: string[];
  updatedAt: string;
}[]>;
```

List roles
List all roles for the organisation. Returns both system-defined and custom roles.

##### Returns

`Promise`\<\{
  `createdAt`: `string`;
  `description`: `string` \| `null`;
  `id`: `string`;
  `isDeleted`: `boolean`;
  `isSystemRole`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `permissions`: `string`[];
  `updatedAt`: `string`;
\}[]\>

##### Operation Id

listRoles

#### update()

```ts
update: (id: string, request: {
  description?: string;
  name?: string;
  permissions?: string[];
}) => Promise<{
  createdAt: string;
  description: string | null;
  id: string;
  isDeleted: boolean;
  isSystemRole: boolean;
  name: string;
  organisationId: string;
  permissions: string[];
  updatedAt: string;
}>;
```

Update role
Update an existing custom role. System roles cannot be modified.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | - |
| `request` | \{ `description?`: `string`; `name?`: `string`; `permissions?`: `string`[]; \} | - |
| `request.description?` | `string` | **Description** Optional description of the role **Example** `Manages events and related resources` |
| `request.name?` | `string` | **Description** The name of the role **Example** `Event Manager` |
| `request.permissions?` | `string`[] | **Description** Array of permission strings **Example** `[ "events.*", "venues.read:all", "orders.read" ]` |

##### Returns

`Promise`\<\{
  `createdAt`: `string`;
  `description`: `string` \| `null`;
  `id`: `string`;
  `isDeleted`: `boolean`;
  `isSystemRole`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `permissions`: `string`[];
  `updatedAt`: `string`;
\}\>

##### Operation Id

updateRole

***

### sales

```ts
sales: {
  get: (eventId: string) => Promise<{
     currency: string | null;
     description: string | null;
     heroImageUrl: string | null;
     id: string;
     imageUrl: string | null;
     name: string;
     occurrences: {
        endDate: string;
        endsAt: string | null;
        endTime: string;
        id: string;
        startDate: string;
        startsAt: string | null;
        startTime: string;
        status: string;
        ticketTypes: {
           categoryId: string;
           categoryName: string;
           currency: string;
           description: string | null;
           ticketTypeId: string;
           ticketTypeName: string;
           unitPrice: number;
        }[];
        timezone: string;
     }[];
     presentation:   | {
        buttonSize?: "small" | "medium" | "large";
        cinemaGradient?: {
           position: "bottom" | "center";
           strength: 20 | 50 | 70;
        };
        heroLayout?: {
           size: "small" | "medium" | "large";
           type: "hero" | "cinema";
        };
        navbar?: {
           transparent?: boolean;
        };
        twoColumnSplit?: [number, number];
      }
        | null;
     priceFrom: number | null;
     shortDescription: string | null;
     status: string;
     subtitle: string | null;
     timezone: string;
     venueCity: string | null;
     venueId: string | null;
     venueName: string | null;
  }>;
  getTheme: () => Promise<{
     brand: {
      [key: string]: unknown;
     };
     colors: {
      [key: string]: unknown;
     };
     design?:   | {
      [key: string]: unknown;
      }
        | null;
     id: string;
     name: string;
     shape: {
      [key: string]: unknown;
     };
     typography: {
      [key: string]: unknown;
     };
  }>;
  resolveChannel: (options?: {
     domain: string;
   }) => Promise<{
     channel: {
        id: string;
        name: string;
        slug: string;
     };
     publishableKey: string | null;
  }>;
};
```

Defined in: [client.ts:3446](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L3446)

Sales methods

#### get()

```ts
get: (eventId: string) => Promise<{
  currency: string | null;
  description: string | null;
  heroImageUrl: string | null;
  id: string;
  imageUrl: string | null;
  name: string;
  occurrences: {
     endDate: string;
     endsAt: string | null;
     endTime: string;
     id: string;
     startDate: string;
     startsAt: string | null;
     startTime: string;
     status: string;
     ticketTypes: {
        categoryId: string;
        categoryName: string;
        currency: string;
        description: string | null;
        ticketTypeId: string;
        ticketTypeName: string;
        unitPrice: number;
     }[];
     timezone: string;
  }[];
  presentation:   | {
     buttonSize?: "small" | "medium" | "large";
     cinemaGradient?: {
        position: "bottom" | "center";
        strength: 20 | 50 | 70;
     };
     heroLayout?: {
        size: "small" | "medium" | "large";
        type: "hero" | "cinema";
     };
     navbar?: {
        transparent?: boolean;
     };
     twoColumnSplit?: [number, number];
   }
     | null;
  priceFrom: number | null;
  shortDescription: string | null;
  status: string;
  subtitle: string | null;
  timezone: string;
  venueCity: string | null;
  venueId: string | null;
  venueName: string | null;
}>;
```

Get event catalogue detail
Catalogue detail for an event listed on this channel: occurrences with their priced ticket-type offers. Benefit-gated types are included only when the request carries a customer token holding the benefit. Returns 404 if the event is not listed on this channel.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventId` | `string` |

##### Returns

`Promise`\<\{
  `currency`: `string` \| `null`;
  `description`: `string` \| `null`;
  `heroImageUrl`: `string` \| `null`;
  `id`: `string`;
  `imageUrl`: `string` \| `null`;
  `name`: `string`;
  `occurrences`: \{
     `endDate`: `string`;
     `endsAt`: `string` \| `null`;
     `endTime`: `string`;
     `id`: `string`;
     `startDate`: `string`;
     `startsAt`: `string` \| `null`;
     `startTime`: `string`;
     `status`: `string`;
     `ticketTypes`: \{
        `categoryId`: `string`;
        `categoryName`: `string`;
        `currency`: `string`;
        `description`: `string` \| `null`;
        `ticketTypeId`: `string`;
        `ticketTypeName`: `string`;
        `unitPrice`: `number`;
     \}[];
     `timezone`: `string`;
  \}[];
  `presentation`:   \| \{
     `buttonSize?`: `"small"` \| `"medium"` \| `"large"`;
     `cinemaGradient?`: \{
        `position`: `"bottom"` \| `"center"`;
        `strength`: `20` \| `50` \| `70`;
     \};
     `heroLayout?`: \{
        `size`: `"small"` \| `"medium"` \| `"large"`;
        `type`: `"hero"` \| `"cinema"`;
     \};
     `navbar?`: \{
        `transparent?`: `boolean`;
     \};
     `twoColumnSplit?`: \[`number`, `number`\];
   \}
     \| `null`;
  `priceFrom`: `number` \| `null`;
  `shortDescription`: `string` \| `null`;
  `status`: `string`;
  `subtitle`: `string` \| `null`;
  `timezone`: `string`;
  `venueCity`: `string` \| `null`;
  `venueId`: `string` \| `null`;
  `venueName`: `string` \| `null`;
\}\>

##### Operation Id

getSalesEvent

#### getTheme()

```ts
getTheme: () => Promise<{
  brand: {
   [key: string]: unknown;
  };
  colors: {
   [key: string]: unknown;
  };
  design?:   | {
   [key: string]: unknown;
   }
     | null;
  id: string;
  name: string;
  shape: {
   [key: string]: unknown;
  };
  typography: {
   [key: string]: unknown;
  };
}>;
```

Get channel theme
The channel's resolved (inheritance-merged) theme for SSR injection. Returns 404 if the channel has neither its own theme nor an organisation base theme.

##### Returns

`Promise`\<\{
  `brand`: \{
   \[`key`: `string`\]: `unknown`;
  \};
  `colors`: \{
   \[`key`: `string`\]: `unknown`;
  \};
  `design?`:   \| \{
   \[`key`: `string`\]: `unknown`;
   \}
     \| `null`;
  `id`: `string`;
  `name`: `string`;
  `shape`: \{
   \[`key`: `string`\]: `unknown`;
  \};
  `typography`: \{
   \[`key`: `string`\]: `unknown`;
  \};
\}\>

##### Operation Id

getSalesTheme

#### resolveChannel()

```ts
resolveChannel: (options?: {
  domain: string;
}) => Promise<{
  channel: {
     id: string;
     name: string;
     slug: string;
  };
  publishableKey: string | null;
}>;
```

Resolve a channel by domain
Public tenant resolution for hosted surfaces: maps a hostname (the channel's configured subdomain or custom domain) to its channel summary and publishable key. No authentication; rate-limited.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `domain`: `string`; \} |
| `options.domain?` | `string` |

##### Returns

`Promise`\<\{
  `channel`: \{
     `id`: `string`;
     `name`: `string`;
     `slug`: `string`;
  \};
  `publishableKey`: `string` \| `null`;
\}\>

##### Operation Id

resolveSalesChannel

***

### salesCarts

```ts
salesCarts: {
  addItem: (cartId: string, request: {
     categoryId: string;
     eventLayoutAreaId?: string;
     eventLayoutSeatIds?: string[];
     eventOccurrenceId: string;
     quantity?: number;
     ticketTypeId: string;
   }) => Promise<{
     currency: string | null;
     expiresAt: string;
     id: string;
     items: {
        categoryName: string;
        currency: string;
        eventName: string;
        eventOccurrenceId: string;
        id: string;
        quantity: number;
        subtotal: number;
        ticketTypeName: string;
        unitPrice: number;
     }[];
     itemsSubtotal: number;
     orderId: string | null;
     status: string;
  }>;
  checkout: (cartId: string, request: {
     customer?: {
        email: string;
        firstName?: string;
        lastName?: string;
        marketingConsent?: boolean;
        phone?: string;
     };
     customerNotes?: string;
     metadata?: Record<string, any>;
   }) => Promise<{
     cart: {
        currency: string | null;
        expiresAt: string;
        id: string;
        items: {
           categoryName: string;
           currency: string;
           eventName: string;
           eventOccurrenceId: string;
           id: string;
           quantity: number;
           subtotal: number;
           ticketTypeName: string;
           unitPrice: number;
        }[];
        itemsSubtotal: number;
        orderId: string | null;
        status: string;
     };
     order: {
        createdAt: string;
        currency: string;
        expiresAt: string | null;
        id: string;
        items: {
           description: string | null;
           name: string;
           quantity: number;
           subtotal: string;
           type: string;
           unitPrice: string;
        }[];
        orderNumber: string;
        paymentStatus: string;
        status: string;
        subtotal: string;
        total: string;
        totalFees: string;
        totalTax: string;
     };
     orderAccessToken: string;
  }>;
  create: (request: {
     metadata?: Record<string, any>;
   }) => Promise<{
     currency: string | null;
     expiresAt: string;
     id: string;
     items: {
        categoryName: string;
        currency: string;
        eventName: string;
        eventOccurrenceId: string;
        id: string;
        quantity: number;
        subtotal: number;
        ticketTypeName: string;
        unitPrice: number;
     }[];
     itemsSubtotal: number;
     orderId: string | null;
     status: string;
  }>;
  get: (cartId: string) => Promise<{
     currency: string | null;
     expiresAt: string;
     id: string;
     items: {
        categoryName: string;
        currency: string;
        eventName: string;
        eventOccurrenceId: string;
        id: string;
        quantity: number;
        subtotal: number;
        ticketTypeName: string;
        unitPrice: number;
     }[];
     itemsSubtotal: number;
     orderId: string | null;
     status: string;
  }>;
  removeItem: (cartId: string, itemId: string) => Promise<{
     currency: string | null;
     expiresAt: string;
     id: string;
     items: {
        categoryName: string;
        currency: string;
        eventName: string;
        eventOccurrenceId: string;
        id: string;
        quantity: number;
        subtotal: number;
        ticketTypeName: string;
        unitPrice: number;
     }[];
     itemsSubtotal: number;
     orderId: string | null;
     status: string;
  }>;
};
```

Defined in: [client.ts:3234](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L3234)

Sales Carts methods

#### addItem()

```ts
addItem: (cartId: string, request: {
  categoryId: string;
  eventLayoutAreaId?: string;
  eventLayoutSeatIds?: string[];
  eventOccurrenceId: string;
  quantity?: number;
  ticketTypeId: string;
}) => Promise<{
  currency: string | null;
  expiresAt: string;
  id: string;
  items: {
     categoryName: string;
     currency: string;
     eventName: string;
     eventOccurrenceId: string;
     id: string;
     quantity: number;
     subtotal: number;
     ticketTypeName: string;
     unitPrice: number;
  }[];
  itemsSubtotal: number;
  orderId: string | null;
  status: string;
}>;
```

Add cart item
Add an item to the cart, taking a real inventory reservation with the channel's TTL

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `cartId` | `string` |
| `request` | \{ `categoryId`: `string`; `eventLayoutAreaId?`: `string`; `eventLayoutSeatIds?`: `string`[]; `eventOccurrenceId`: `string`; `quantity?`: `number`; `ticketTypeId`: `string`; \} |
| `request.categoryId` | `string` |
| `request.eventLayoutAreaId?` | `string` |
| `request.eventLayoutSeatIds?` | `string`[] |
| `request.eventOccurrenceId` | `string` |
| `request.quantity?` | `number` |
| `request.ticketTypeId` | `string` |

##### Returns

`Promise`\<\{
  `currency`: `string` \| `null`;
  `expiresAt`: `string`;
  `id`: `string`;
  `items`: \{
     `categoryName`: `string`;
     `currency`: `string`;
     `eventName`: `string`;
     `eventOccurrenceId`: `string`;
     `id`: `string`;
     `quantity`: `number`;
     `subtotal`: `number`;
     `ticketTypeName`: `string`;
     `unitPrice`: `number`;
  \}[];
  `itemsSubtotal`: `number`;
  `orderId`: `string` \| `null`;
  `status`: `string`;
\}\>

##### Operation Id

addSalesCartItem

#### checkout()

```ts
checkout: (cartId: string, request: {
  customer?: {
     email: string;
     firstName?: string;
     lastName?: string;
     marketingConsent?: boolean;
     phone?: string;
  };
  customerNotes?: string;
  metadata?: Record<string, any>;
}) => Promise<{
  cart: {
     currency: string | null;
     expiresAt: string;
     id: string;
     items: {
        categoryName: string;
        currency: string;
        eventName: string;
        eventOccurrenceId: string;
        id: string;
        quantity: number;
        subtotal: number;
        ticketTypeName: string;
        unitPrice: number;
     }[];
     itemsSubtotal: number;
     orderId: string | null;
     status: string;
  };
  order: {
     createdAt: string;
     currency: string;
     expiresAt: string | null;
     id: string;
     items: {
        description: string | null;
        name: string;
        quantity: number;
        subtotal: string;
        type: string;
        unitPrice: string;
     }[];
     orderNumber: string;
     paymentStatus: string;
     status: string;
     subtotal: string;
     total: string;
     totalFees: string;
     totalTax: string;
  };
  orderAccessToken: string;
}>;
```

Checkout cart
Convert the cart into an order. Returns an order access token for possession-based guest access (confirmation page, payment status polling).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `cartId` | `string` |
| `request` | \{ `customer?`: \{ `email`: `string`; `firstName?`: `string`; `lastName?`: `string`; `marketingConsent?`: `boolean`; `phone?`: `string`; \}; `customerNotes?`: `string`; `metadata?`: `Record`\<`string`, `any`\>; \} |
| `request.customer?` | \{ `email`: `string`; `firstName?`: `string`; `lastName?`: `string`; `marketingConsent?`: `boolean`; `phone?`: `string`; \} |
| `request.customer.email` | `string` |
| `request.customer.firstName?` | `string` |
| `request.customer.lastName?` | `string` |
| `request.customer.marketingConsent?` | `boolean` |
| `request.customer.phone?` | `string` |
| `request.customerNotes?` | `string` |
| `request.metadata?` | `Record`\<`string`, `any`\> |

##### Returns

`Promise`\<\{
  `cart`: \{
     `currency`: `string` \| `null`;
     `expiresAt`: `string`;
     `id`: `string`;
     `items`: \{
        `categoryName`: `string`;
        `currency`: `string`;
        `eventName`: `string`;
        `eventOccurrenceId`: `string`;
        `id`: `string`;
        `quantity`: `number`;
        `subtotal`: `number`;
        `ticketTypeName`: `string`;
        `unitPrice`: `number`;
     \}[];
     `itemsSubtotal`: `number`;
     `orderId`: `string` \| `null`;
     `status`: `string`;
  \};
  `order`: \{
     `createdAt`: `string`;
     `currency`: `string`;
     `expiresAt`: `string` \| `null`;
     `id`: `string`;
     `items`: \{
        `description`: `string` \| `null`;
        `name`: `string`;
        `quantity`: `number`;
        `subtotal`: `string`;
        `type`: `string`;
        `unitPrice`: `string`;
     \}[];
     `orderNumber`: `string`;
     `paymentStatus`: `string`;
     `status`: `string`;
     `subtotal`: `string`;
     `total`: `string`;
     `totalFees`: `string`;
     `totalTax`: `string`;
  \};
  `orderAccessToken`: `string`;
\}\>

##### Operation Id

checkoutSalesCart

#### create()

```ts
create: (request: {
  metadata?: Record<string, any>;
}) => Promise<{
  currency: string | null;
  expiresAt: string;
  id: string;
  items: {
     categoryName: string;
     currency: string;
     eventName: string;
     eventOccurrenceId: string;
     id: string;
     quantity: number;
     subtotal: number;
     ticketTypeName: string;
     unitPrice: number;
  }[];
  itemsSubtotal: number;
  orderId: string | null;
  status: string;
}>;
```

Create cart
Create a cart on this channel. Customer identity comes only from a verified customer token, never from the body.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `metadata?`: `Record`\<`string`, `any`\>; \} |
| `request.metadata?` | `Record`\<`string`, `any`\> |

##### Returns

`Promise`\<\{
  `currency`: `string` \| `null`;
  `expiresAt`: `string`;
  `id`: `string`;
  `items`: \{
     `categoryName`: `string`;
     `currency`: `string`;
     `eventName`: `string`;
     `eventOccurrenceId`: `string`;
     `id`: `string`;
     `quantity`: `number`;
     `subtotal`: `number`;
     `ticketTypeName`: `string`;
     `unitPrice`: `number`;
  \}[];
  `itemsSubtotal`: `number`;
  `orderId`: `string` \| `null`;
  `status`: `string`;
\}\>

##### Operation Id

createSalesCart

#### get()

```ts
get: (cartId: string) => Promise<{
  currency: string | null;
  expiresAt: string;
  id: string;
  items: {
     categoryName: string;
     currency: string;
     eventName: string;
     eventOccurrenceId: string;
     id: string;
     quantity: number;
     subtotal: number;
     ticketTypeName: string;
     unitPrice: number;
  }[];
  itemsSubtotal: number;
  orderId: string | null;
  status: string;
}>;
```

Get cart
Get a cart with its items

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `cartId` | `string` |

##### Returns

`Promise`\<\{
  `currency`: `string` \| `null`;
  `expiresAt`: `string`;
  `id`: `string`;
  `items`: \{
     `categoryName`: `string`;
     `currency`: `string`;
     `eventName`: `string`;
     `eventOccurrenceId`: `string`;
     `id`: `string`;
     `quantity`: `number`;
     `subtotal`: `number`;
     `ticketTypeName`: `string`;
     `unitPrice`: `number`;
  \}[];
  `itemsSubtotal`: `number`;
  `orderId`: `string` \| `null`;
  `status`: `string`;
\}\>

##### Operation Id

getSalesCart

#### removeItem()

```ts
removeItem: (cartId: string, itemId: string) => Promise<{
  currency: string | null;
  expiresAt: string;
  id: string;
  items: {
     categoryName: string;
     currency: string;
     eventName: string;
     eventOccurrenceId: string;
     id: string;
     quantity: number;
     subtotal: number;
     ticketTypeName: string;
     unitPrice: number;
  }[];
  itemsSubtotal: number;
  orderId: string | null;
  status: string;
}>;
```

Remove cart item
Remove an item from the cart, releasing its reservation

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `cartId` | `string` |
| `itemId` | `string` |

##### Returns

`Promise`\<\{
  `currency`: `string` \| `null`;
  `expiresAt`: `string`;
  `id`: `string`;
  `items`: \{
     `categoryName`: `string`;
     `currency`: `string`;
     `eventName`: `string`;
     `eventOccurrenceId`: `string`;
     `id`: `string`;
     `quantity`: `number`;
     `subtotal`: `number`;
     `ticketTypeName`: `string`;
     `unitPrice`: `number`;
  \}[];
  `itemsSubtotal`: `number`;
  `orderId`: `string` \| `null`;
  `status`: `string`;
\}\>

##### Operation Id

removeSalesCartItem

***

### salesChannels

```ts
salesChannels: (channelId: string) => {
  carts: {
     addItem: (cartId: string, request: {
        categoryId: string;
        eventLayoutAreaId?: string;
        eventLayoutSeatIds?: string[];
        eventOccurrenceId: string;
        quantity?: number;
        ticketTypeId: string;
      }) => Promise<{
        cart: {
           accountId: string;
           channelId: string;
           createdAt: string;
           currency: string | null;
           customerId: string | null;
           expiresAt: string;
           id: string;
           metadata:   | {
            [key: string]: unknown;
            }
              | null;
           orderId: string | null;
           organisationId: string;
           status: "active" | "expired" | "checked_out" | "abandoned";
           updatedAt: string;
        };
        items: {
           cartId: string;
           categoryId: string;
           createdAt: string;
           eventLayoutAreaId: string | null;
           eventLayoutSeatId: string | null;
           eventOccurrenceId: string;
           id: string;
           notes: string | null;
           organisationId: string;
           priceSnapshot: {
              categoryName: string;
              currency: string;
              eventId: string;
              eventName: string;
              priceSchemeId: string;
              ticketTypeName: string;
              unitPrice: number;
           };
           quantity: number;
           reservationId: string;
           ticketTypeId: string;
        }[];
     }>;
     checkout: (cartId: string, request: {
        customerId?: string;
        customerNotes?: string;
        discount?: {
           amount?: number;
           label?: string;
           percent?: number;
           reason: string;
        };
        metadata?: Record<string, any>;
      }) => Promise<{
        cart: {
           accountId: string;
           channelId: string;
           createdAt: string;
           currency: string | null;
           customerId: string | null;
           expiresAt: string;
           id: string;
           metadata:   | {
            [key: string]: unknown;
            }
              | null;
           orderId: string | null;
           organisationId: string;
           status: "active" | "expired" | "checked_out" | "abandoned";
           updatedAt: string;
        };
        order: {
           accountId: string;
           createdAt: string;
           currency: string;
           customerId: string | null;
           expiresAt: string | null;
           id: string;
           items: {
              description: ... | ...;
              id: string;
              name: string;
              orderId: string;
              quantity: number;
              subtotal: string;
              type: string;
              unitPrice: string;
           }[];
           orderNumber: string;
           organisationId: string;
           paymentStatus: string;
           status: string;
           subtotal: string;
           total: string;
           totalFees: string;
           totalPaid: string;
           totalTax: string;
           updatedAt: string;
        };
     }>;
     create: (request: {
        customerId?: string;
        metadata?: Record<string, any>;
      }) => Promise<{
        cart: {
           accountId: string;
           channelId: string;
           createdAt: string;
           currency: string | null;
           customerId: string | null;
           expiresAt: string;
           id: string;
           metadata:   | {
            [key: string]: unknown;
            }
              | null;
           orderId: string | null;
           organisationId: string;
           status: "active" | "expired" | "checked_out" | "abandoned";
           updatedAt: string;
        };
        items: {
           cartId: string;
           categoryId: string;
           createdAt: string;
           eventLayoutAreaId: string | null;
           eventLayoutSeatId: string | null;
           eventOccurrenceId: string;
           id: string;
           notes: string | null;
           organisationId: string;
           priceSnapshot: {
              categoryName: string;
              currency: string;
              eventId: string;
              eventName: string;
              priceSchemeId: string;
              ticketTypeName: string;
              unitPrice: number;
           };
           quantity: number;
           reservationId: string;
           ticketTypeId: string;
        }[];
     }>;
     get: (cartId: string) => Promise<{
        cart: {
           accountId: string;
           channelId: string;
           createdAt: string;
           currency: string | null;
           customerId: string | null;
           expiresAt: string;
           id: string;
           metadata:   | {
            [key: string]: unknown;
            }
              | null;
           orderId: string | null;
           organisationId: string;
           status: "active" | "expired" | "checked_out" | "abandoned";
           updatedAt: string;
        };
        items: {
           cartId: string;
           categoryId: string;
           createdAt: string;
           eventLayoutAreaId: string | null;
           eventLayoutSeatId: string | null;
           eventOccurrenceId: string;
           id: string;
           notes: string | null;
           organisationId: string;
           priceSnapshot: {
              categoryName: string;
              currency: string;
              eventId: string;
              eventName: string;
              priceSchemeId: string;
              ticketTypeName: string;
              unitPrice: number;
           };
           quantity: number;
           reservationId: string;
           ticketTypeId: string;
        }[];
     }>;
     removeItem: (cartId: string, itemId: string) => Promise<{
        cart: {
           accountId: string;
           channelId: string;
           createdAt: string;
           currency: string | null;
           customerId: string | null;
           expiresAt: string;
           id: string;
           metadata:   | {
            [key: string]: unknown;
            }
              | null;
           orderId: string | null;
           organisationId: string;
           status: "active" | "expired" | "checked_out" | "abandoned";
           updatedAt: string;
        };
        items: {
           cartId: string;
           categoryId: string;
           createdAt: string;
           eventLayoutAreaId: string | null;
           eventLayoutSeatId: string | null;
           eventOccurrenceId: string;
           id: string;
           notes: string | null;
           organisationId: string;
           priceSnapshot: {
              categoryName: string;
              currency: string;
              eventId: string;
              eventName: string;
              priceSchemeId: string;
              ticketTypeName: string;
              unitPrice: number;
           };
           quantity: number;
           reservationId: string;
           ticketTypeId: string;
        }[];
     }>;
  };
  keys: {
     issue: (request: {
        keyType: "publishable" | "secret";
        name: string;
      }) => Promise<{
        key: {
           channelId: string;
           createdAt: string;
           id: string;
           keyType: "publishable" | "secret";
           last4: string;
           name: string;
           status: "active" | "revoked" | "compromised";
        };
        keyMaterial: string;
        warning?: string;
     }>;
     list: () => Promise<{
        channelId: string;
        createdAt: string;
        id: string;
        keyType: "publishable" | "secret";
        last4: string;
        lastUsedAt: string | null;
        name: string;
        publishableKey: string | null;
        revokedAt: string | null;
        status: "active" | "revoked" | "compromised";
     }[]>;
     revoke: (keyId: string, request: {
        reason?: string;
      }) => Promise<{
        id: string;
        revokedAt: string | null;
        status: "active" | "revoked" | "compromised";
     }>;
  };
  listings: {
     create: (request: {
        eventId: string;
        saleEndsAt?: string;
        saleStartsAt?: string;
      }) => Promise<{
        channelId: string;
        createdAt: string;
        createdBy: string | null;
        eventId: string;
        id: string;
        isActive: boolean;
        organisationId: string;
        saleEndsAt: string | null;
        saleStartsAt: string | null;
        updatedAt: string;
     }>;
     delete: (listingId: string) => Promise<boolean>;
     list: () => Promise<{
        channelId: string;
        createdAt: string;
        createdBy: string | null;
        eventId: string;
        id: string;
        isActive: boolean;
        organisationId: string;
        saleEndsAt: string | null;
        saleStartsAt: string | null;
        updatedAt: string;
     }[]>;
  };
} & {
  create: (request: {
     accountId: string;
     channelTags?: string[];
     channelType:   | "website"
        | "embed"
        | "box_office"
        | "kiosk"
        | "reseller_api"
        | "internal";
     checkoutTtlSeconds?: number;
     customerConfig?: {
        allowGuestCheckout?: boolean;
        collectAddress?: boolean;
        collectPhone?: boolean;
        requireLogin?: boolean;
     };
     customerFacing?: {
        allowedOrigins?: any[];
        customDomain?: string;
        enabled?: boolean;
        magicLinkBaseUrl?: string;
        partnerIdentity?: {
           algorithm: "RS256" | "RS384" | "RS512" | "ES256" | "ES384" | "ES512";
           issuer: string;
           publicKeyPem: string;
        };
        subdomain?: string;
     };
     description?: string;
     eventFilter?: {
        channelTags?: string[];
        mode: "all" | "tagged";
     };
     feeProfileId?: string;
     name: string;
     pricingConfig?: {
        includeFeesInPrice?: boolean;
        showMemberPricing?: boolean;
        showOriginalPrice?: boolean;
     };
     receivingAccountId?: string;
     reservationTtlSeconds?: number;
     slug: string;
   }) => Promise<{
     accountId: string;
     channelTags: string[];
     channelType:   | "website"
        | "embed"
        | "box_office"
        | "kiosk"
        | "reseller_api"
        | "internal";
     checkoutTtlSeconds: number;
     createdAt: string;
     customerConfig: {
        allowGuestCheckout: boolean;
        collectAddress: boolean;
        collectPhone: boolean;
        requireLogin: boolean;
     };
     customerFacing: {
        allowedOrigins: string[];
        customDomain?: string;
        enabled: boolean;
        magicLinkBaseUrl?: string;
        partnerIdentity?: {
           algorithm: string;
           issuer: string;
           publicKeyPem: string;
        };
        subdomain?: string;
     };
     deletedAt: string | null;
     description: string | null;
     eventFilter: {
        channelTags?: string[];
        mode: "all" | "tagged";
     };
     feeProfileId: string | null;
     id: string;
     isActive: boolean;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     pricingConfig: {
        includeFeesInPrice: boolean;
        showMemberPricing: boolean;
        showOriginalPrice: boolean;
     };
     receivingAccountId: string;
     reservationTtlSeconds: number;
     slug: string;
     themeId: string | null;
     updatedAt: string;
  }>;
  delete: (channelId: string) => Promise<boolean>;
  get: (channelId: string) => Promise<{
     accountId: string;
     channelTags: string[];
     channelType:   | "website"
        | "embed"
        | "box_office"
        | "kiosk"
        | "reseller_api"
        | "internal";
     checkoutTtlSeconds: number;
     createdAt: string;
     customerConfig: {
        allowGuestCheckout: boolean;
        collectAddress: boolean;
        collectPhone: boolean;
        requireLogin: boolean;
     };
     customerFacing: {
        allowedOrigins: string[];
        customDomain?: string;
        enabled: boolean;
        magicLinkBaseUrl?: string;
        partnerIdentity?: {
           algorithm: string;
           issuer: string;
           publicKeyPem: string;
        };
        subdomain?: string;
     };
     deletedAt: string | null;
     description: string | null;
     eventFilter: {
        channelTags?: string[];
        mode: "all" | "tagged";
     };
     feeProfileId: string | null;
     id: string;
     isActive: boolean;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     pricingConfig: {
        includeFeesInPrice: boolean;
        showMemberPricing: boolean;
        showOriginalPrice: boolean;
     };
     receivingAccountId: string;
     reservationTtlSeconds: number;
     slug: string;
     themeId: string | null;
     updatedAt: string;
  }>;
  list: () => Promise<{
     accountId: string;
     channelTags: string[];
     channelType:   | "website"
        | "embed"
        | "box_office"
        | "kiosk"
        | "reseller_api"
        | "internal";
     checkoutTtlSeconds: number;
     createdAt: string;
     customerConfig: {
        allowGuestCheckout: boolean;
        collectAddress: boolean;
        collectPhone: boolean;
        requireLogin: boolean;
     };
     customerFacing: {
        allowedOrigins: string[];
        customDomain?: string;
        enabled: boolean;
        magicLinkBaseUrl?: string;
        partnerIdentity?: {
           algorithm: string;
           issuer: string;
           publicKeyPem: string;
        };
        subdomain?: string;
     };
     deletedAt: string | null;
     description: string | null;
     eventFilter: {
        channelTags?: string[];
        mode: "all" | "tagged";
     };
     feeProfileId: string | null;
     id: string;
     isActive: boolean;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     pricingConfig: {
        includeFeesInPrice: boolean;
        showMemberPricing: boolean;
        showOriginalPrice: boolean;
     };
     receivingAccountId: string;
     reservationTtlSeconds: number;
     slug: string;
     themeId: string | null;
     updatedAt: string;
  }[]>;
  update: (channelId: string, request: {
     channelTags?: string[];
     checkoutTtlSeconds?: number;
     customerConfig?: {
        allowGuestCheckout?: boolean;
        collectAddress?: boolean;
        collectPhone?: boolean;
        requireLogin?: boolean;
     };
     customerFacing?: {
        allowedOrigins?: any[];
        customDomain?: string;
        enabled?: boolean;
        magicLinkBaseUrl?: string;
        partnerIdentity?: {
           algorithm: "RS256" | "RS384" | "RS512" | "ES256" | "ES384" | "ES512";
           issuer: string;
           publicKeyPem: string;
        };
        subdomain?: string;
     };
     description?: string;
     eventFilter?: {
        channelTags?: string[];
        mode: "all" | "tagged";
     };
     feeProfileId?: any;
     isActive?: boolean;
     name?: string;
     paymentProviderId?: any;
     pricingConfig?: {
        includeFeesInPrice?: boolean;
        showMemberPricing?: boolean;
        showOriginalPrice?: boolean;
     };
     receivingAccountId?: string;
     reservationTtlSeconds?: number;
   }) => Promise<{
     accountId: string;
     channelTags: string[];
     channelType:   | "website"
        | "embed"
        | "box_office"
        | "kiosk"
        | "reseller_api"
        | "internal";
     checkoutTtlSeconds: number;
     createdAt: string;
     customerConfig: {
        allowGuestCheckout: boolean;
        collectAddress: boolean;
        collectPhone: boolean;
        requireLogin: boolean;
     };
     customerFacing: {
        allowedOrigins: string[];
        customDomain?: string;
        enabled: boolean;
        magicLinkBaseUrl?: string;
        partnerIdentity?: {
           algorithm: string;
           issuer: string;
           publicKeyPem: string;
        };
        subdomain?: string;
     };
     deletedAt: string | null;
     description: string | null;
     eventFilter: {
        channelTags?: string[];
        mode: "all" | "tagged";
     };
     feeProfileId: string | null;
     id: string;
     isActive: boolean;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     pricingConfig: {
        includeFeesInPrice: boolean;
        showMemberPricing: boolean;
        showOriginalPrice: boolean;
     };
     receivingAccountId: string;
     reservationTtlSeconds: number;
     slug: string;
     themeId: string | null;
     updatedAt: string;
  }>;
};
```

Defined in: [client.ts:2820](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L2820)

Sales Channels methods
Use salesChannels() to access nested resources: salesChannels(id).keys, listings, carts

#### Type Declaration

##### create()

```ts
create: (request: {
  accountId: string;
  channelTags?: string[];
  channelType:   | "website"
     | "embed"
     | "box_office"
     | "kiosk"
     | "reseller_api"
     | "internal";
  checkoutTtlSeconds?: number;
  customerConfig?: {
     allowGuestCheckout?: boolean;
     collectAddress?: boolean;
     collectPhone?: boolean;
     requireLogin?: boolean;
  };
  customerFacing?: {
     allowedOrigins?: any[];
     customDomain?: string;
     enabled?: boolean;
     magicLinkBaseUrl?: string;
     partnerIdentity?: {
        algorithm: "RS256" | "RS384" | "RS512" | "ES256" | "ES384" | "ES512";
        issuer: string;
        publicKeyPem: string;
     };
     subdomain?: string;
  };
  description?: string;
  eventFilter?: {
     channelTags?: string[];
     mode: "all" | "tagged";
  };
  feeProfileId?: string;
  name: string;
  pricingConfig?: {
     includeFeesInPrice?: boolean;
     showMemberPricing?: boolean;
     showOriginalPrice?: boolean;
  };
  receivingAccountId?: string;
  reservationTtlSeconds?: number;
  slug: string;
}) => Promise<{
  accountId: string;
  channelTags: string[];
  channelType:   | "website"
     | "embed"
     | "box_office"
     | "kiosk"
     | "reseller_api"
     | "internal";
  checkoutTtlSeconds: number;
  createdAt: string;
  customerConfig: {
     allowGuestCheckout: boolean;
     collectAddress: boolean;
     collectPhone: boolean;
     requireLogin: boolean;
  };
  customerFacing: {
     allowedOrigins: string[];
     customDomain?: string;
     enabled: boolean;
     magicLinkBaseUrl?: string;
     partnerIdentity?: {
        algorithm: string;
        issuer: string;
        publicKeyPem: string;
     };
     subdomain?: string;
  };
  deletedAt: string | null;
  description: string | null;
  eventFilter: {
     channelTags?: string[];
     mode: "all" | "tagged";
  };
  feeProfileId: string | null;
  id: string;
  isActive: boolean;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  pricingConfig: {
     includeFeesInPrice: boolean;
     showMemberPricing: boolean;
     showOriginalPrice: boolean;
  };
  receivingAccountId: string;
  reservationTtlSeconds: number;
  slug: string;
  themeId: string | null;
  updatedAt: string;
}>;
```

Create sales channel
Create a sales channel: a policy bundle describing where and under what commercial rules tickets are sold

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `accountId`: `string`; `channelTags?`: `string`[]; `channelType`: \| `"website"` \| `"embed"` \| `"box_office"` \| `"kiosk"` \| `"reseller_api"` \| `"internal"`; `checkoutTtlSeconds?`: `number`; `customerConfig?`: \{ `allowGuestCheckout?`: `boolean`; `collectAddress?`: `boolean`; `collectPhone?`: `boolean`; `requireLogin?`: `boolean`; \}; `customerFacing?`: \{ `allowedOrigins?`: `any`[]; `customDomain?`: `string`; `enabled?`: `boolean`; `magicLinkBaseUrl?`: `string`; `partnerIdentity?`: \{ `algorithm`: `"RS256"` \| `"RS384"` \| `"RS512"` \| `"ES256"` \| `"ES384"` \| `"ES512"`; `issuer`: `string`; `publicKeyPem`: `string`; \}; `subdomain?`: `string`; \}; `description?`: `string`; `eventFilter?`: \{ `channelTags?`: `string`[]; `mode`: `"all"` \| `"tagged"`; \}; `feeProfileId?`: `string`; `name`: `string`; `pricingConfig?`: \{ `includeFeesInPrice?`: `boolean`; `showMemberPricing?`: `boolean`; `showOriginalPrice?`: `boolean`; \}; `receivingAccountId?`: `string`; `reservationTtlSeconds?`: `number`; `slug`: `string`; \} |
| `request.accountId` | `string` |
| `request.channelTags?` | `string`[] |
| `request.channelType` | \| `"website"` \| `"embed"` \| `"box_office"` \| `"kiosk"` \| `"reseller_api"` \| `"internal"` |
| `request.checkoutTtlSeconds?` | `number` |
| `request.customerConfig?` | \{ `allowGuestCheckout?`: `boolean`; `collectAddress?`: `boolean`; `collectPhone?`: `boolean`; `requireLogin?`: `boolean`; \} |
| `request.customerConfig.allowGuestCheckout?` | `boolean` |
| `request.customerConfig.collectAddress?` | `boolean` |
| `request.customerConfig.collectPhone?` | `boolean` |
| `request.customerConfig.requireLogin?` | `boolean` |
| `request.customerFacing?` | \{ `allowedOrigins?`: `any`[]; `customDomain?`: `string`; `enabled?`: `boolean`; `magicLinkBaseUrl?`: `string`; `partnerIdentity?`: \{ `algorithm`: `"RS256"` \| `"RS384"` \| `"RS512"` \| `"ES256"` \| `"ES384"` \| `"ES512"`; `issuer`: `string`; `publicKeyPem`: `string`; \}; `subdomain?`: `string`; \} |
| `request.customerFacing.allowedOrigins?` | `any`[] |
| `request.customerFacing.customDomain?` | `string` |
| `request.customerFacing.enabled?` | `boolean` |
| `request.customerFacing.magicLinkBaseUrl?` | `string` |
| `request.customerFacing.partnerIdentity?` | \{ `algorithm`: `"RS256"` \| `"RS384"` \| `"RS512"` \| `"ES256"` \| `"ES384"` \| `"ES512"`; `issuer`: `string`; `publicKeyPem`: `string`; \} |
| `request.customerFacing.partnerIdentity.algorithm` | `"RS256"` \| `"RS384"` \| `"RS512"` \| `"ES256"` \| `"ES384"` \| `"ES512"` |
| `request.customerFacing.partnerIdentity.issuer` | `string` |
| `request.customerFacing.partnerIdentity.publicKeyPem` | `string` |
| `request.customerFacing.subdomain?` | `string` |
| `request.description?` | `string` |
| `request.eventFilter?` | \{ `channelTags?`: `string`[]; `mode`: `"all"` \| `"tagged"`; \} |
| `request.eventFilter.channelTags?` | `string`[] |
| `request.eventFilter.mode` | `"all"` \| `"tagged"` |
| `request.feeProfileId?` | `string` |
| `request.name` | `string` |
| `request.pricingConfig?` | \{ `includeFeesInPrice?`: `boolean`; `showMemberPricing?`: `boolean`; `showOriginalPrice?`: `boolean`; \} |
| `request.pricingConfig.includeFeesInPrice?` | `boolean` |
| `request.pricingConfig.showMemberPricing?` | `boolean` |
| `request.pricingConfig.showOriginalPrice?` | `boolean` |
| `request.receivingAccountId?` | `string` |
| `request.reservationTtlSeconds?` | `number` |
| `request.slug` | `string` |

###### Returns

`Promise`\<\{
  `accountId`: `string`;
  `channelTags`: `string`[];
  `channelType`:   \| `"website"`
     \| `"embed"`
     \| `"box_office"`
     \| `"kiosk"`
     \| `"reseller_api"`
     \| `"internal"`;
  `checkoutTtlSeconds`: `number`;
  `createdAt`: `string`;
  `customerConfig`: \{
     `allowGuestCheckout`: `boolean`;
     `collectAddress`: `boolean`;
     `collectPhone`: `boolean`;
     `requireLogin`: `boolean`;
  \};
  `customerFacing`: \{
     `allowedOrigins`: `string`[];
     `customDomain?`: `string`;
     `enabled`: `boolean`;
     `magicLinkBaseUrl?`: `string`;
     `partnerIdentity?`: \{
        `algorithm`: `string`;
        `issuer`: `string`;
        `publicKeyPem`: `string`;
     \};
     `subdomain?`: `string`;
  \};
  `deletedAt`: `string` \| `null`;
  `description`: `string` \| `null`;
  `eventFilter`: \{
     `channelTags?`: `string`[];
     `mode`: `"all"` \| `"tagged"`;
  \};
  `feeProfileId`: `string` \| `null`;
  `id`: `string`;
  `isActive`: `boolean`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `pricingConfig`: \{
     `includeFeesInPrice`: `boolean`;
     `showMemberPricing`: `boolean`;
     `showOriginalPrice`: `boolean`;
  \};
  `receivingAccountId`: `string`;
  `reservationTtlSeconds`: `number`;
  `slug`: `string`;
  `themeId`: `string` \| `null`;
  `updatedAt`: `string`;
\}\>

###### Operation Id

createSalesChannel

##### delete()

```ts
delete: (channelId: string) => Promise<boolean>;
```

Delete sales channel
Soft-delete a sales channel

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `channelId` | `string` |

###### Returns

`Promise`\<`boolean`\>

###### Operation Id

deleteSalesChannel

##### get()

```ts
get: (channelId: string) => Promise<{
  accountId: string;
  channelTags: string[];
  channelType:   | "website"
     | "embed"
     | "box_office"
     | "kiosk"
     | "reseller_api"
     | "internal";
  checkoutTtlSeconds: number;
  createdAt: string;
  customerConfig: {
     allowGuestCheckout: boolean;
     collectAddress: boolean;
     collectPhone: boolean;
     requireLogin: boolean;
  };
  customerFacing: {
     allowedOrigins: string[];
     customDomain?: string;
     enabled: boolean;
     magicLinkBaseUrl?: string;
     partnerIdentity?: {
        algorithm: string;
        issuer: string;
        publicKeyPem: string;
     };
     subdomain?: string;
  };
  deletedAt: string | null;
  description: string | null;
  eventFilter: {
     channelTags?: string[];
     mode: "all" | "tagged";
  };
  feeProfileId: string | null;
  id: string;
  isActive: boolean;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  pricingConfig: {
     includeFeesInPrice: boolean;
     showMemberPricing: boolean;
     showOriginalPrice: boolean;
  };
  receivingAccountId: string;
  reservationTtlSeconds: number;
  slug: string;
  themeId: string | null;
  updatedAt: string;
}>;
```

Get sales channel
Get a sales channel by ID

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `channelId` | `string` |

###### Returns

`Promise`\<\{
  `accountId`: `string`;
  `channelTags`: `string`[];
  `channelType`:   \| `"website"`
     \| `"embed"`
     \| `"box_office"`
     \| `"kiosk"`
     \| `"reseller_api"`
     \| `"internal"`;
  `checkoutTtlSeconds`: `number`;
  `createdAt`: `string`;
  `customerConfig`: \{
     `allowGuestCheckout`: `boolean`;
     `collectAddress`: `boolean`;
     `collectPhone`: `boolean`;
     `requireLogin`: `boolean`;
  \};
  `customerFacing`: \{
     `allowedOrigins`: `string`[];
     `customDomain?`: `string`;
     `enabled`: `boolean`;
     `magicLinkBaseUrl?`: `string`;
     `partnerIdentity?`: \{
        `algorithm`: `string`;
        `issuer`: `string`;
        `publicKeyPem`: `string`;
     \};
     `subdomain?`: `string`;
  \};
  `deletedAt`: `string` \| `null`;
  `description`: `string` \| `null`;
  `eventFilter`: \{
     `channelTags?`: `string`[];
     `mode`: `"all"` \| `"tagged"`;
  \};
  `feeProfileId`: `string` \| `null`;
  `id`: `string`;
  `isActive`: `boolean`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `pricingConfig`: \{
     `includeFeesInPrice`: `boolean`;
     `showMemberPricing`: `boolean`;
     `showOriginalPrice`: `boolean`;
  \};
  `receivingAccountId`: `string`;
  `reservationTtlSeconds`: `number`;
  `slug`: `string`;
  `themeId`: `string` \| `null`;
  `updatedAt`: `string`;
\}\>

###### Operation Id

getSalesChannel

##### list()

```ts
list: () => Promise<{
  accountId: string;
  channelTags: string[];
  channelType:   | "website"
     | "embed"
     | "box_office"
     | "kiosk"
     | "reseller_api"
     | "internal";
  checkoutTtlSeconds: number;
  createdAt: string;
  customerConfig: {
     allowGuestCheckout: boolean;
     collectAddress: boolean;
     collectPhone: boolean;
     requireLogin: boolean;
  };
  customerFacing: {
     allowedOrigins: string[];
     customDomain?: string;
     enabled: boolean;
     magicLinkBaseUrl?: string;
     partnerIdentity?: {
        algorithm: string;
        issuer: string;
        publicKeyPem: string;
     };
     subdomain?: string;
  };
  deletedAt: string | null;
  description: string | null;
  eventFilter: {
     channelTags?: string[];
     mode: "all" | "tagged";
  };
  feeProfileId: string | null;
  id: string;
  isActive: boolean;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  pricingConfig: {
     includeFeesInPrice: boolean;
     showMemberPricing: boolean;
     showOriginalPrice: boolean;
  };
  receivingAccountId: string;
  reservationTtlSeconds: number;
  slug: string;
  themeId: string | null;
  updatedAt: string;
}[]>;
```

List sales channels
List the organisation's sales channels visible to the caller

###### Returns

`Promise`\<\{
  `accountId`: `string`;
  `channelTags`: `string`[];
  `channelType`:   \| `"website"`
     \| `"embed"`
     \| `"box_office"`
     \| `"kiosk"`
     \| `"reseller_api"`
     \| `"internal"`;
  `checkoutTtlSeconds`: `number`;
  `createdAt`: `string`;
  `customerConfig`: \{
     `allowGuestCheckout`: `boolean`;
     `collectAddress`: `boolean`;
     `collectPhone`: `boolean`;
     `requireLogin`: `boolean`;
  \};
  `customerFacing`: \{
     `allowedOrigins`: `string`[];
     `customDomain?`: `string`;
     `enabled`: `boolean`;
     `magicLinkBaseUrl?`: `string`;
     `partnerIdentity?`: \{
        `algorithm`: `string`;
        `issuer`: `string`;
        `publicKeyPem`: `string`;
     \};
     `subdomain?`: `string`;
  \};
  `deletedAt`: `string` \| `null`;
  `description`: `string` \| `null`;
  `eventFilter`: \{
     `channelTags?`: `string`[];
     `mode`: `"all"` \| `"tagged"`;
  \};
  `feeProfileId`: `string` \| `null`;
  `id`: `string`;
  `isActive`: `boolean`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `pricingConfig`: \{
     `includeFeesInPrice`: `boolean`;
     `showMemberPricing`: `boolean`;
     `showOriginalPrice`: `boolean`;
  \};
  `receivingAccountId`: `string`;
  `reservationTtlSeconds`: `number`;
  `slug`: `string`;
  `themeId`: `string` \| `null`;
  `updatedAt`: `string`;
\}[]\>

###### Operation Id

listSalesChannels

##### update()

```ts
update: (channelId: string, request: {
  channelTags?: string[];
  checkoutTtlSeconds?: number;
  customerConfig?: {
     allowGuestCheckout?: boolean;
     collectAddress?: boolean;
     collectPhone?: boolean;
     requireLogin?: boolean;
  };
  customerFacing?: {
     allowedOrigins?: any[];
     customDomain?: string;
     enabled?: boolean;
     magicLinkBaseUrl?: string;
     partnerIdentity?: {
        algorithm: "RS256" | "RS384" | "RS512" | "ES256" | "ES384" | "ES512";
        issuer: string;
        publicKeyPem: string;
     };
     subdomain?: string;
  };
  description?: string;
  eventFilter?: {
     channelTags?: string[];
     mode: "all" | "tagged";
  };
  feeProfileId?: any;
  isActive?: boolean;
  name?: string;
  paymentProviderId?: any;
  pricingConfig?: {
     includeFeesInPrice?: boolean;
     showMemberPricing?: boolean;
     showOriginalPrice?: boolean;
  };
  receivingAccountId?: string;
  reservationTtlSeconds?: number;
}) => Promise<{
  accountId: string;
  channelTags: string[];
  channelType:   | "website"
     | "embed"
     | "box_office"
     | "kiosk"
     | "reseller_api"
     | "internal";
  checkoutTtlSeconds: number;
  createdAt: string;
  customerConfig: {
     allowGuestCheckout: boolean;
     collectAddress: boolean;
     collectPhone: boolean;
     requireLogin: boolean;
  };
  customerFacing: {
     allowedOrigins: string[];
     customDomain?: string;
     enabled: boolean;
     magicLinkBaseUrl?: string;
     partnerIdentity?: {
        algorithm: string;
        issuer: string;
        publicKeyPem: string;
     };
     subdomain?: string;
  };
  deletedAt: string | null;
  description: string | null;
  eventFilter: {
     channelTags?: string[];
     mode: "all" | "tagged";
  };
  feeProfileId: string | null;
  id: string;
  isActive: boolean;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  pricingConfig: {
     includeFeesInPrice: boolean;
     showMemberPricing: boolean;
     showOriginalPrice: boolean;
  };
  receivingAccountId: string;
  reservationTtlSeconds: number;
  slug: string;
  themeId: string | null;
  updatedAt: string;
}>;
```

Update sales channel
Update a sales channel's configuration

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `channelId` | `string` |
| `request` | \{ `channelTags?`: `string`[]; `checkoutTtlSeconds?`: `number`; `customerConfig?`: \{ `allowGuestCheckout?`: `boolean`; `collectAddress?`: `boolean`; `collectPhone?`: `boolean`; `requireLogin?`: `boolean`; \}; `customerFacing?`: \{ `allowedOrigins?`: `any`[]; `customDomain?`: `string`; `enabled?`: `boolean`; `magicLinkBaseUrl?`: `string`; `partnerIdentity?`: \{ `algorithm`: `"RS256"` \| `"RS384"` \| `"RS512"` \| `"ES256"` \| `"ES384"` \| `"ES512"`; `issuer`: `string`; `publicKeyPem`: `string`; \}; `subdomain?`: `string`; \}; `description?`: `string`; `eventFilter?`: \{ `channelTags?`: `string`[]; `mode`: `"all"` \| `"tagged"`; \}; `feeProfileId?`: `any`; `isActive?`: `boolean`; `name?`: `string`; `paymentProviderId?`: `any`; `pricingConfig?`: \{ `includeFeesInPrice?`: `boolean`; `showMemberPricing?`: `boolean`; `showOriginalPrice?`: `boolean`; \}; `receivingAccountId?`: `string`; `reservationTtlSeconds?`: `number`; \} |
| `request.channelTags?` | `string`[] |
| `request.checkoutTtlSeconds?` | `number` |
| `request.customerConfig?` | \{ `allowGuestCheckout?`: `boolean`; `collectAddress?`: `boolean`; `collectPhone?`: `boolean`; `requireLogin?`: `boolean`; \} |
| `request.customerConfig.allowGuestCheckout?` | `boolean` |
| `request.customerConfig.collectAddress?` | `boolean` |
| `request.customerConfig.collectPhone?` | `boolean` |
| `request.customerConfig.requireLogin?` | `boolean` |
| `request.customerFacing?` | \{ `allowedOrigins?`: `any`[]; `customDomain?`: `string`; `enabled?`: `boolean`; `magicLinkBaseUrl?`: `string`; `partnerIdentity?`: \{ `algorithm`: `"RS256"` \| `"RS384"` \| `"RS512"` \| `"ES256"` \| `"ES384"` \| `"ES512"`; `issuer`: `string`; `publicKeyPem`: `string`; \}; `subdomain?`: `string`; \} |
| `request.customerFacing.allowedOrigins?` | `any`[] |
| `request.customerFacing.customDomain?` | `string` |
| `request.customerFacing.enabled?` | `boolean` |
| `request.customerFacing.magicLinkBaseUrl?` | `string` |
| `request.customerFacing.partnerIdentity?` | \{ `algorithm`: `"RS256"` \| `"RS384"` \| `"RS512"` \| `"ES256"` \| `"ES384"` \| `"ES512"`; `issuer`: `string`; `publicKeyPem`: `string`; \} |
| `request.customerFacing.partnerIdentity.algorithm` | `"RS256"` \| `"RS384"` \| `"RS512"` \| `"ES256"` \| `"ES384"` \| `"ES512"` |
| `request.customerFacing.partnerIdentity.issuer` | `string` |
| `request.customerFacing.partnerIdentity.publicKeyPem` | `string` |
| `request.customerFacing.subdomain?` | `string` |
| `request.description?` | `string` |
| `request.eventFilter?` | \{ `channelTags?`: `string`[]; `mode`: `"all"` \| `"tagged"`; \} |
| `request.eventFilter.channelTags?` | `string`[] |
| `request.eventFilter.mode` | `"all"` \| `"tagged"` |
| `request.feeProfileId?` | `any` |
| `request.isActive?` | `boolean` |
| `request.name?` | `string` |
| `request.paymentProviderId?` | `any` |
| `request.pricingConfig?` | \{ `includeFeesInPrice?`: `boolean`; `showMemberPricing?`: `boolean`; `showOriginalPrice?`: `boolean`; \} |
| `request.pricingConfig.includeFeesInPrice?` | `boolean` |
| `request.pricingConfig.showMemberPricing?` | `boolean` |
| `request.pricingConfig.showOriginalPrice?` | `boolean` |
| `request.receivingAccountId?` | `string` |
| `request.reservationTtlSeconds?` | `number` |

###### Returns

`Promise`\<\{
  `accountId`: `string`;
  `channelTags`: `string`[];
  `channelType`:   \| `"website"`
     \| `"embed"`
     \| `"box_office"`
     \| `"kiosk"`
     \| `"reseller_api"`
     \| `"internal"`;
  `checkoutTtlSeconds`: `number`;
  `createdAt`: `string`;
  `customerConfig`: \{
     `allowGuestCheckout`: `boolean`;
     `collectAddress`: `boolean`;
     `collectPhone`: `boolean`;
     `requireLogin`: `boolean`;
  \};
  `customerFacing`: \{
     `allowedOrigins`: `string`[];
     `customDomain?`: `string`;
     `enabled`: `boolean`;
     `magicLinkBaseUrl?`: `string`;
     `partnerIdentity?`: \{
        `algorithm`: `string`;
        `issuer`: `string`;
        `publicKeyPem`: `string`;
     \};
     `subdomain?`: `string`;
  \};
  `deletedAt`: `string` \| `null`;
  `description`: `string` \| `null`;
  `eventFilter`: \{
     `channelTags?`: `string`[];
     `mode`: `"all"` \| `"tagged"`;
  \};
  `feeProfileId`: `string` \| `null`;
  `id`: `string`;
  `isActive`: `boolean`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `pricingConfig`: \{
     `includeFeesInPrice`: `boolean`;
     `showMemberPricing`: `boolean`;
     `showOriginalPrice`: `boolean`;
  \};
  `receivingAccountId`: `string`;
  `reservationTtlSeconds`: `number`;
  `slug`: `string`;
  `themeId`: `string` \| `null`;
  `updatedAt`: `string`;
\}\>

###### Operation Id

updateSalesChannel

***

### salesCustomerAuth

```ts
salesCustomerAuth: {
  magicLink: (request: {
     email?: string;
     phone?: string;
  }) => Promise<boolean>;
};
```

Defined in: [client.ts:3183](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L3183)

Sales Customer Auth methods

#### magicLink()

```ts
magicLink: (request: {
  email?: string;
  phone?: string;
}) => Promise<boolean>;
```

Request magic link
Start a magic-link sign-in for a customer. Always reports success - account existence is never revealed.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `email?`: `string`; `phone?`: `string`; \} |
| `request.email?` | `string` |
| `request.phone?` | `string` |

##### Returns

`Promise`\<`boolean`\>

##### Operation Id

requestSalesMagicLink

***

### salesCustomers

```ts
salesCustomers: {
  create: (request: {
     email: string;
     firstName?: string;
     lastName?: string;
     marketingConsent?: boolean;
     phone?: string;
   }) => Promise<{
     email: string;
     firstName: string | null;
     id: string;
     lastName: string | null;
  }>;
  get: (customerId: string) => Promise<{
     email: string;
     firstName: string | null;
     id: string;
     lastName: string | null;
  }>;
  update: (customerId: string, request: {
     firstName?: string;
     lastName?: string;
     phone?: string;
   }) => Promise<{
     email: string;
     firstName: string | null;
     id: string;
     lastName: string | null;
  }>;
};
```

Defined in: [client.ts:3381](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L3381)

Sales Customers methods

#### create()

```ts
create: (request: {
  email: string;
  firstName?: string;
  lastName?: string;
  marketingConsent?: boolean;
  phone?: string;
}) => Promise<{
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
}>;
```

Create customer
Provenance-scoped channel CRM (secret keys only). Reuses the org's existing record for the email and grants the channel access; there is no list or search.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `email`: `string`; `firstName?`: `string`; `lastName?`: `string`; `marketingConsent?`: `boolean`; `phone?`: `string`; \} |
| `request.email` | `string` |
| `request.firstName?` | `string` |
| `request.lastName?` | `string` |
| `request.marketingConsent?` | `boolean` |
| `request.phone?` | `string` |

##### Returns

`Promise`\<\{
  `email`: `string`;
  `firstName`: `string` \| `null`;
  `id`: `string`;
  `lastName`: `string` \| `null`;
\}\>

##### Operation Id

createSalesCustomer

#### get()

```ts
get: (customerId: string) => Promise<{
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
}>;
```

Get customer
Get a customer the channel holds an access grant for (created through it, or who bought through it)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |

##### Returns

`Promise`\<\{
  `email`: `string`;
  `firstName`: `string` \| `null`;
  `id`: `string`;
  `lastName`: `string` \| `null`;
\}\>

##### Operation Id

getSalesCustomer

#### update()

```ts
update: (customerId: string, request: {
  firstName?: string;
  lastName?: string;
  phone?: string;
}) => Promise<{
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
}>;
```

Update customer
Update a customer the channel holds an access grant for. The update surface is deliberately small - email changes go through the org's staff.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |
| `request` | \{ `firstName?`: `string`; `lastName?`: `string`; `phone?`: `string`; \} |
| `request.firstName?` | `string` |
| `request.lastName?` | `string` |
| `request.phone?` | `string` |

##### Returns

`Promise`\<\{
  `email`: `string`;
  `firstName`: `string` \| `null`;
  `id`: `string`;
  `lastName`: `string` \| `null`;
\}\>

##### Operation Id

updateSalesCustomer

***

### salesCustomerTokens

```ts
salesCustomerTokens: {
  create: (request: {
     proof: any;
   }) => Promise<{
     customer: {
        email: string;
        firstName: string | null;
        id: string;
        lastName: string | null;
     };
     customerToken: string;
     expiresIn: number;
  }>;
  refresh: () => Promise<{
     customer: {
        email: string;
        firstName: string | null;
        id: string;
        lastName: string | null;
     };
     customerToken: string;
     expiresIn: number;
  }>;
};
```

Defined in: [client.ts:3202](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L3202)

Sales Customer Tokens methods

#### create()

```ts
create: (request: {
  proof: any;
}) => Promise<{
  customer: {
     email: string;
     firstName: string | null;
     id: string;
     lastName: string | null;
  };
  customerToken: string;
  expiresIn: number;
}>;
```

Exchange identity proof for customer token
Exchange an identity proof (magic-link code or partner assertion) for a short-lived customer token bound to this channel. Identity is exchanged, never asserted.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `proof`: `any`; \} |
| `request.proof` | `any` |

##### Returns

`Promise`\<\{
  `customer`: \{
     `email`: `string`;
     `firstName`: `string` \| `null`;
     `id`: `string`;
     `lastName`: `string` \| `null`;
  \};
  `customerToken`: `string`;
  `expiresIn`: `number`;
\}\>

##### Operation Id

createSalesCustomerToken

#### refresh()

```ts
refresh: () => Promise<{
  customer: {
     email: string;
     firstName: string | null;
     id: string;
     lastName: string | null;
  };
  customerToken: string;
  expiresIn: number;
}>;
```

Refresh a customer token
Re-signs a still-valid customer token (presented via X-Customer-Token) for a fresh 30 minutes, carrying the original 24-hour absolute ceiling forward. Once the ceiling passes the customer must re-authenticate.

##### Returns

`Promise`\<\{
  `customer`: \{
     `email`: `string`;
     `firstName`: `string` \| `null`;
     `id`: `string`;
     `lastName`: `string` \| `null`;
  \};
  `customerToken`: `string`;
  `expiresIn`: `number`;
\}\>

##### Operation Id

refreshSalesCustomerToken

***

### salesListings

```ts
salesListings: {
  list: () => Promise<{
     channel: {
        id: string;
        name: string;
        slug: string;
     };
     listings: {
        currency: string | null;
        eventId: string;
        id: string;
        imageUrl: string | null;
        name: string | null;
        nextOccurrenceAt: string | null;
        priceFrom: number | null;
        saleEndsAt: string | null;
        saleStartsAt: string | null;
        shortDescription: string | null;
        subtitle: string | null;
        venueCity: string | null;
        venueName: string | null;
     }[];
  }>;
};
```

Defined in: [client.ts:3165](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L3165)

Sales Listings methods

#### list()

```ts
list: () => Promise<{
  channel: {
     id: string;
     name: string;
     slug: string;
  };
  listings: {
     currency: string | null;
     eventId: string;
     id: string;
     imageUrl: string | null;
     name: string | null;
     nextOccurrenceAt: string | null;
     priceFrom: number | null;
     saleEndsAt: string | null;
     saleStartsAt: string | null;
     shortDescription: string | null;
     subtitle: string | null;
     venueCity: string | null;
     venueName: string | null;
  }[];
}>;
```

List active listings
What is on sale through this channel right now. The channel is resolved from the key, never from a parameter.

##### Returns

`Promise`\<\{
  `channel`: \{
     `id`: `string`;
     `name`: `string`;
     `slug`: `string`;
  \};
  `listings`: \{
     `currency`: `string` \| `null`;
     `eventId`: `string`;
     `id`: `string`;
     `imageUrl`: `string` \| `null`;
     `name`: `string` \| `null`;
     `nextOccurrenceAt`: `string` \| `null`;
     `priceFrom`: `number` \| `null`;
     `saleEndsAt`: `string` \| `null`;
     `saleStartsAt`: `string` \| `null`;
     `shortDescription`: `string` \| `null`;
     `subtitle`: `string` \| `null`;
     `venueCity`: `string` \| `null`;
     `venueName`: `string` \| `null`;
  \}[];
\}\>

##### Operation Id

listSalesListings

***

### salesMyOrders

```ts
salesMyOrders: {
  list: () => Promise<{
     createdAt: string;
     currency: string;
     expiresAt: string | null;
     id: string;
     items: {
        description: string | null;
        name: string;
        quantity: number;
        subtotal: string;
        type: string;
        unitPrice: string;
     }[];
     orderNumber: string;
     paymentStatus: string;
     status: string;
     subtotal: string;
     total: string;
     totalFees: string;
     totalTax: string;
  }[]>;
};
```

Defined in: [client.ts:3307](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L3307)

Sales My Orders methods

#### list()

```ts
list: () => Promise<{
  createdAt: string;
  currency: string;
  expiresAt: string | null;
  id: string;
  items: {
     description: string | null;
     name: string;
     quantity: number;
     subtotal: string;
     type: string;
     unitPrice: string;
  }[];
  orderNumber: string;
  paymentStatus: string;
  status: string;
  subtotal: string;
  total: string;
  totalFees: string;
  totalTax: string;
}[]>;
```

List my orders
The verified customer's own orders. Requires a customer token - orders cannot be listed with key or possession credentials alone.

##### Returns

`Promise`\<\{
  `createdAt`: `string`;
  `currency`: `string`;
  `expiresAt`: `string` \| `null`;
  `id`: `string`;
  `items`: \{
     `description`: `string` \| `null`;
     `name`: `string`;
     `quantity`: `number`;
     `subtotal`: `string`;
     `type`: `string`;
     `unitPrice`: `string`;
  \}[];
  `orderNumber`: `string`;
  `paymentStatus`: `string`;
  `status`: `string`;
  `subtotal`: `string`;
  `total`: `string`;
  `totalFees`: `string`;
  `totalTax`: `string`;
\}[]\>

##### Operation Id

listMySalesOrders

***

### salesOrderPayments

```ts
salesOrderPayments: {
  create: (orderId: string, request: {
     paymentType?: "online_card" | "online_bank_transfer" | "online_wallet";
     returnUrl?: string;
   }) => Promise<{
     amount: string;
     connectedAccountId: string | null;
     currency: string;
     externalPaymentUrl: string | null;
     id: string;
     orderId: string;
     paymentType: string;
     providerClientSecret: string | null;
     providerType: string | null;
     publishableKey: string | null;
     status: string;
  }>;
};
```

Defined in: [client.ts:3343](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L3343)

Sales Order Payments methods

#### create()

```ts
create: (orderId: string, request: {
  paymentType?: "online_card" | "online_bank_transfer" | "online_wallet";
  returnUrl?: string;
}) => Promise<{
  amount: string;
  connectedAccountId: string | null;
  currency: string;
  externalPaymentUrl: string | null;
  id: string;
  orderId: string;
  paymentType: string;
  providerClientSecret: string | null;
  providerType: string | null;
  publishableKey: string | null;
  status: string;
}>;
```

Create order payment
Initiate payment for the order's outstanding balance through the channel's payment provider

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |
| `request` | \{ `paymentType?`: `"online_card"` \| `"online_bank_transfer"` \| `"online_wallet"`; `returnUrl?`: `string`; \} |
| `request.paymentType?` | `"online_card"` \| `"online_bank_transfer"` \| `"online_wallet"` |
| `request.returnUrl?` | `string` |

##### Returns

`Promise`\<\{
  `amount`: `string`;
  `connectedAccountId`: `string` \| `null`;
  `currency`: `string`;
  `externalPaymentUrl`: `string` \| `null`;
  `id`: `string`;
  `orderId`: `string`;
  `paymentType`: `string`;
  `providerClientSecret`: `string` \| `null`;
  `providerType`: `string` \| `null`;
  `publishableKey`: `string` \| `null`;
  `status`: `string`;
\}\>

##### Operation Id

createSalesOrderPayment

***

### salesOrders

```ts
salesOrders: {
  get: (orderId: string) => Promise<{
     createdAt: string;
     currency: string;
     expiresAt: string | null;
     id: string;
     items: {
        description: string | null;
        name: string;
        quantity: number;
        subtotal: string;
        type: string;
        unitPrice: string;
     }[];
     orderNumber: string;
     paymentStatus: string;
     status: string;
     subtotal: string;
     total: string;
     totalFees: string;
     totalTax: string;
  }>;
};
```

Defined in: [client.ts:3325](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L3325)

Sales Orders methods

#### get()

```ts
get: (orderId: string) => Promise<{
  createdAt: string;
  currency: string;
  expiresAt: string | null;
  id: string;
  items: {
     description: string | null;
     name: string;
     quantity: number;
     subtotal: string;
     type: string;
     unitPrice: string;
  }[];
  orderNumber: string;
  paymentStatus: string;
  status: string;
  subtotal: string;
  total: string;
  totalFees: string;
  totalTax: string;
}>;
```

Get order
Get an order on this channel. Access requires a secret key (own channel), an X-Order-Access-Token header (guest possession) or a customer token (own orders).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |

##### Returns

`Promise`\<\{
  `createdAt`: `string`;
  `currency`: `string`;
  `expiresAt`: `string` \| `null`;
  `id`: `string`;
  `items`: \{
     `description`: `string` \| `null`;
     `name`: `string`;
     `quantity`: `number`;
     `subtotal`: `string`;
     `type`: `string`;
     `unitPrice`: `string`;
  \}[];
  `orderNumber`: `string`;
  `paymentStatus`: `string`;
  `status`: `string`;
  `subtotal`: `string`;
  `total`: `string`;
  `totalFees`: `string`;
  `totalTax`: `string`;
\}\>

##### Operation Id

getSalesOrder

***

### salesPresaleCodes

```ts
salesPresaleCodes: {
  redeem: (request: {
     code: string;
   }) => Promise<{
     alreadyHeld: boolean;
     benefit: string;
  }>;
};
```

Defined in: [client.ts:3427](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L3427)

Sales Presale Codes methods

#### redeem()

```ts
redeem: (request: {
  code: string;
}) => Promise<{
  alreadyHeld: boolean;
  benefit: string;
}>;
```

Redeem presale code
A verified customer redeems a presale code for its benefit; gated pricing unlocks immediately. Requires a customer token.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `code`: `string`; \} |
| `request.code` | `string` |

##### Returns

`Promise`\<\{
  `alreadyHeld`: `boolean`;
  `benefit`: `string`;
\}\>

##### Operation Id

redeemSalesPresaleCode

***

### salesRefundRequests

```ts
salesRefundRequests: {
  create: (orderId: string, request: {
     reason?: string;
     type: "refund" | "exchange";
   }) => Promise<{
     createdAt: string;
     id: string;
     orderId: string;
     reason: string | null;
     status: string;
     type: string;
  }>;
};
```

Defined in: [client.ts:3362](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L3362)

Sales Refund Requests methods

#### create()

```ts
create: (orderId: string, request: {
  reason?: string;
  type: "refund" | "exchange";
}) => Promise<{
  createdAt: string;
  id: string;
  orderId: string;
  reason: string | null;
  status: string;
  type: string;
}>;
```

Request refund or exchange
File a refund or exchange request for the order within the resolved refund policy. Requester identity is derived from the credential, never from the body.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |
| `request` | \{ `reason?`: `string`; `type`: `"refund"` \| `"exchange"`; \} |
| `request.reason?` | `string` |
| `request.type` | `"refund"` \| `"exchange"` |

##### Returns

`Promise`\<\{
  `createdAt`: `string`;
  `id`: `string`;
  `orderId`: `string`;
  `reason`: `string` \| `null`;
  `status`: `string`;
  `type`: `string`;
\}\>

##### Operation Id

createSalesOrderRefundRequest

***

### themes

```ts
themes: {
  create: (request: {
     brand?: {
        displayName?: string;
        faviconUrl?: string;
        logoDarkUrl?: string;
        logoUrl?: string;
     };
     colors?: {
        accent?: string;
        accentForeground?: string;
        background?: string;
        border?: string;
        destructive?: string;
        destructiveForeground?: string;
        foreground?: string;
        input?: string;
        muted?: string;
        mutedForeground?: string;
        primary?: string;
        primaryForeground?: string;
        ring?: string;
        secondary?: string;
        secondaryForeground?: string;
        success?: string;
        successForeground?: string;
        warning?: string;
        warningForeground?: string;
     };
     description?: string;
     design?: {
        cinemaGradient?: {
           position: "bottom" | "center";
           strength: 20 | 50 | 70;
        };
        heroLayout?: {
           size: "small" | "medium" | "large";
           type: "hero" | "cinema";
        };
      } & {
      [key: string]: unknown;
     };
     extendsThemeId?: string;
     isActive?: boolean;
     isBaseTheme?: boolean;
     name: string;
     shape?: {
        radiusFull?: string;
        radiusLg?: string;
        radiusMd?: string;
        radiusNone?: string;
        radiusSm?: string;
     };
     typography?: {
        baseSize?: string;
        fontFamily?: string;
        fontFamilyMono?: string;
        scaleRatio?: number;
     };
   }) => Promise<{
     brand: {
        displayName?: string;
        faviconUrl?: string;
        logoDarkUrl?: string;
        logoUrl?: string;
     };
     colors: {
        accent?: string;
        accentForeground?: string;
        background?: string;
        border?: string;
        destructive?: string;
        destructiveForeground?: string;
        foreground?: string;
        input?: string;
        muted?: string;
        mutedForeground?: string;
        primary?: string;
        primaryForeground?: string;
        ring?: string;
        secondary?: string;
        secondaryForeground?: string;
        success?: string;
        successForeground?: string;
        warning?: string;
        warningForeground?: string;
     };
     createdAt: string;
     description: string | null;
     design:   | {
        cinemaGradient?: {
           position: "bottom" | "center";
           strength: 20 | 50 | 70;
        };
        heroLayout?: {
           size: "small" | "medium" | "large";
           type: "hero" | "cinema";
        };
      }
        | null;
     extendsThemeId: string | null;
     id: string;
     isActive: boolean;
     isBaseTheme: boolean;
     name: string;
     organisationId: string;
     shape: {
        radiusFull?: string;
        radiusLg?: string;
        radiusMd?: string;
        radiusNone?: string;
        radiusSm?: string;
     };
     typography: {
        baseSize?: string;
        fontFamily?: string;
        fontFamilyMono?: string;
        scaleRatio?: number;
     };
     updatedAt: string;
  }>;
  delete: (id: string) => Promise<boolean>;
  get: (id: string) => Promise<{
     brand: {
        displayName?: string;
        faviconUrl?: string;
        logoDarkUrl?: string;
        logoUrl?: string;
     };
     colors: {
        accent?: string;
        accentForeground?: string;
        background?: string;
        border?: string;
        destructive?: string;
        destructiveForeground?: string;
        foreground?: string;
        input?: string;
        muted?: string;
        mutedForeground?: string;
        primary?: string;
        primaryForeground?: string;
        ring?: string;
        secondary?: string;
        secondaryForeground?: string;
        success?: string;
        successForeground?: string;
        warning?: string;
        warningForeground?: string;
     };
     createdAt: string;
     description: string | null;
     design:   | {
        cinemaGradient?: {
           position: "bottom" | "center";
           strength: 20 | 50 | 70;
        };
        heroLayout?: {
           size: "small" | "medium" | "large";
           type: "hero" | "cinema";
        };
      }
        | null;
     extendsThemeId: string | null;
     id: string;
     isActive: boolean;
     isBaseTheme: boolean;
     name: string;
     organisationId: string;
     shape: {
        radiusFull?: string;
        radiusLg?: string;
        radiusMd?: string;
        radiusNone?: string;
        radiusSm?: string;
     };
     typography: {
        baseSize?: string;
        fontFamily?: string;
        fontFamilyMono?: string;
        scaleRatio?: number;
     };
     updatedAt: string;
  }>;
  list: () => Promise<{
     brand: {
        displayName?: string;
        faviconUrl?: string;
        logoDarkUrl?: string;
        logoUrl?: string;
     };
     colors: {
        accent?: string;
        accentForeground?: string;
        background?: string;
        border?: string;
        destructive?: string;
        destructiveForeground?: string;
        foreground?: string;
        input?: string;
        muted?: string;
        mutedForeground?: string;
        primary?: string;
        primaryForeground?: string;
        ring?: string;
        secondary?: string;
        secondaryForeground?: string;
        success?: string;
        successForeground?: string;
        warning?: string;
        warningForeground?: string;
     };
     createdAt: string;
     description: string | null;
     design:   | {
        cinemaGradient?: {
           position: "bottom" | "center";
           strength: 20 | 50 | 70;
        };
        heroLayout?: {
           size: "small" | "medium" | "large";
           type: "hero" | "cinema";
        };
      }
        | null;
     extendsThemeId: string | null;
     id: string;
     isActive: boolean;
     isBaseTheme: boolean;
     name: string;
     organisationId: string;
     shape: {
        radiusFull?: string;
        radiusLg?: string;
        radiusMd?: string;
        radiusNone?: string;
        radiusSm?: string;
     };
     typography: {
        baseSize?: string;
        fontFamily?: string;
        fontFamilyMono?: string;
        scaleRatio?: number;
     };
     updatedAt: string;
  }[]>;
  resolved: (id: string) => Promise<{
     brand: {
        displayName?: string;
        faviconUrl?: string;
        logoDarkUrl?: string;
        logoUrl?: string;
     };
     colors: {
        accent?: string;
        accentForeground?: string;
        background?: string;
        border?: string;
        destructive?: string;
        destructiveForeground?: string;
        foreground?: string;
        input?: string;
        muted?: string;
        mutedForeground?: string;
        primary?: string;
        primaryForeground?: string;
        ring?: string;
        secondary?: string;
        secondaryForeground?: string;
        success?: string;
        successForeground?: string;
        warning?: string;
        warningForeground?: string;
     };
     description: string | null;
     design:   | {
        cinemaGradient?: {
           position: "bottom" | "center";
           strength: 20 | 50 | 70;
        };
        heroLayout?: {
           size: "small" | "medium" | "large";
           type: "hero" | "cinema";
        };
      }
        | null;
     extendsThemeId: string | null;
     id: string;
     isActive: boolean;
     isBaseTheme: boolean;
     name: string;
     organisationId: string;
     shape: {
        radiusFull?: string;
        radiusLg?: string;
        radiusMd?: string;
        radiusNone?: string;
        radiusSm?: string;
     };
     typography: {
        baseSize?: string;
        fontFamily?: string;
        fontFamilyMono?: string;
        scaleRatio?: number;
     };
  }>;
  update: (id: string, request: {
     brand?: {
        displayName?: string;
        faviconUrl?: string;
        logoDarkUrl?: string;
        logoUrl?: string;
     };
     colors?: {
        accent?: string;
        accentForeground?: string;
        background?: string;
        border?: string;
        destructive?: string;
        destructiveForeground?: string;
        foreground?: string;
        input?: string;
        muted?: string;
        mutedForeground?: string;
        primary?: string;
        primaryForeground?: string;
        ring?: string;
        secondary?: string;
        secondaryForeground?: string;
        success?: string;
        successForeground?: string;
        warning?: string;
        warningForeground?: string;
     };
     description?: any;
     design?: any;
     extendsThemeId?: any;
     isActive?: boolean;
     isBaseTheme?: boolean;
     name?: string;
     shape?: {
        radiusFull?: string;
        radiusLg?: string;
        radiusMd?: string;
        radiusNone?: string;
        radiusSm?: string;
     };
     typography?: {
        baseSize?: string;
        fontFamily?: string;
        fontFamilyMono?: string;
        scaleRatio?: number;
     };
   }) => Promise<{
     brand: {
        displayName?: string;
        faviconUrl?: string;
        logoDarkUrl?: string;
        logoUrl?: string;
     };
     colors: {
        accent?: string;
        accentForeground?: string;
        background?: string;
        border?: string;
        destructive?: string;
        destructiveForeground?: string;
        foreground?: string;
        input?: string;
        muted?: string;
        mutedForeground?: string;
        primary?: string;
        primaryForeground?: string;
        ring?: string;
        secondary?: string;
        secondaryForeground?: string;
        success?: string;
        successForeground?: string;
        warning?: string;
        warningForeground?: string;
     };
     createdAt: string;
     description: string | null;
     design:   | {
        cinemaGradient?: {
           position: "bottom" | "center";
           strength: 20 | 50 | 70;
        };
        heroLayout?: {
           size: "small" | "medium" | "large";
           type: "hero" | "cinema";
        };
      }
        | null;
     extendsThemeId: string | null;
     id: string;
     isActive: boolean;
     isBaseTheme: boolean;
     name: string;
     organisationId: string;
     shape: {
        radiusFull?: string;
        radiusLg?: string;
        radiusMd?: string;
        radiusNone?: string;
        radiusSm?: string;
     };
     typography: {
        baseSize?: string;
        fontFamily?: string;
        fontFamilyMono?: string;
        scaleRatio?: number;
     };
     updatedAt: string;
  }>;
};
```

Defined in: [client.ts:3495](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L3495)

Themes methods

#### create()

```ts
create: (request: {
  brand?: {
     displayName?: string;
     faviconUrl?: string;
     logoDarkUrl?: string;
     logoUrl?: string;
  };
  colors?: {
     accent?: string;
     accentForeground?: string;
     background?: string;
     border?: string;
     destructive?: string;
     destructiveForeground?: string;
     foreground?: string;
     input?: string;
     muted?: string;
     mutedForeground?: string;
     primary?: string;
     primaryForeground?: string;
     ring?: string;
     secondary?: string;
     secondaryForeground?: string;
     success?: string;
     successForeground?: string;
     warning?: string;
     warningForeground?: string;
  };
  description?: string;
  design?: {
     cinemaGradient?: {
        position: "bottom" | "center";
        strength: 20 | 50 | 70;
     };
     heroLayout?: {
        size: "small" | "medium" | "large";
        type: "hero" | "cinema";
     };
   } & {
   [key: string]: unknown;
  };
  extendsThemeId?: string;
  isActive?: boolean;
  isBaseTheme?: boolean;
  name: string;
  shape?: {
     radiusFull?: string;
     radiusLg?: string;
     radiusMd?: string;
     radiusNone?: string;
     radiusSm?: string;
  };
  typography?: {
     baseSize?: string;
     fontFamily?: string;
     fontFamilyMono?: string;
     scaleRatio?: number;
  };
}) => Promise<{
  brand: {
     displayName?: string;
     faviconUrl?: string;
     logoDarkUrl?: string;
     logoUrl?: string;
  };
  colors: {
     accent?: string;
     accentForeground?: string;
     background?: string;
     border?: string;
     destructive?: string;
     destructiveForeground?: string;
     foreground?: string;
     input?: string;
     muted?: string;
     mutedForeground?: string;
     primary?: string;
     primaryForeground?: string;
     ring?: string;
     secondary?: string;
     secondaryForeground?: string;
     success?: string;
     successForeground?: string;
     warning?: string;
     warningForeground?: string;
  };
  createdAt: string;
  description: string | null;
  design:   | {
     cinemaGradient?: {
        position: "bottom" | "center";
        strength: 20 | 50 | 70;
     };
     heroLayout?: {
        size: "small" | "medium" | "large";
        type: "hero" | "cinema";
     };
   }
     | null;
  extendsThemeId: string | null;
  id: string;
  isActive: boolean;
  isBaseTheme: boolean;
  name: string;
  organisationId: string;
  shape: {
     radiusFull?: string;
     radiusLg?: string;
     radiusMd?: string;
     radiusNone?: string;
     radiusSm?: string;
  };
  typography: {
     baseSize?: string;
     fontFamily?: string;
     fontFamilyMono?: string;
     scaleRatio?: number;
  };
  updatedAt: string;
}>;
```

Create theme
Create a new branding/design theme

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `brand?`: \{ `displayName?`: `string`; `faviconUrl?`: `string`; `logoDarkUrl?`: `string`; `logoUrl?`: `string`; \}; `colors?`: \{ `accent?`: `string`; `accentForeground?`: `string`; `background?`: `string`; `border?`: `string`; `destructive?`: `string`; `destructiveForeground?`: `string`; `foreground?`: `string`; `input?`: `string`; `muted?`: `string`; `mutedForeground?`: `string`; `primary?`: `string`; `primaryForeground?`: `string`; `ring?`: `string`; `secondary?`: `string`; `secondaryForeground?`: `string`; `success?`: `string`; `successForeground?`: `string`; `warning?`: `string`; `warningForeground?`: `string`; \}; `description?`: `string`; `design?`: \{ `cinemaGradient?`: \{ `position`: `"bottom"` \| `"center"`; `strength`: `20` \| `50` \| `70`; \}; `heroLayout?`: \{ `size`: `"small"` \| `"medium"` \| `"large"`; `type`: `"hero"` \| `"cinema"`; \}; \} & \{ \[`key`: `string`\]: `unknown`; \}; `extendsThemeId?`: `string`; `isActive?`: `boolean`; `isBaseTheme?`: `boolean`; `name`: `string`; `shape?`: \{ `radiusFull?`: `string`; `radiusLg?`: `string`; `radiusMd?`: `string`; `radiusNone?`: `string`; `radiusSm?`: `string`; \}; `typography?`: \{ `baseSize?`: `string`; `fontFamily?`: `string`; `fontFamilyMono?`: `string`; `scaleRatio?`: `number`; \}; \} |
| `request.brand?` | \{ `displayName?`: `string`; `faviconUrl?`: `string`; `logoDarkUrl?`: `string`; `logoUrl?`: `string`; \} |
| `request.brand.displayName?` | `string` |
| `request.brand.faviconUrl?` | `string` |
| `request.brand.logoDarkUrl?` | `string` |
| `request.brand.logoUrl?` | `string` |
| `request.colors?` | \{ `accent?`: `string`; `accentForeground?`: `string`; `background?`: `string`; `border?`: `string`; `destructive?`: `string`; `destructiveForeground?`: `string`; `foreground?`: `string`; `input?`: `string`; `muted?`: `string`; `mutedForeground?`: `string`; `primary?`: `string`; `primaryForeground?`: `string`; `ring?`: `string`; `secondary?`: `string`; `secondaryForeground?`: `string`; `success?`: `string`; `successForeground?`: `string`; `warning?`: `string`; `warningForeground?`: `string`; \} |
| `request.colors.accent?` | `string` |
| `request.colors.accentForeground?` | `string` |
| `request.colors.background?` | `string` |
| `request.colors.border?` | `string` |
| `request.colors.destructive?` | `string` |
| `request.colors.destructiveForeground?` | `string` |
| `request.colors.foreground?` | `string` |
| `request.colors.input?` | `string` |
| `request.colors.muted?` | `string` |
| `request.colors.mutedForeground?` | `string` |
| `request.colors.primary?` | `string` |
| `request.colors.primaryForeground?` | `string` |
| `request.colors.ring?` | `string` |
| `request.colors.secondary?` | `string` |
| `request.colors.secondaryForeground?` | `string` |
| `request.colors.success?` | `string` |
| `request.colors.successForeground?` | `string` |
| `request.colors.warning?` | `string` |
| `request.colors.warningForeground?` | `string` |
| `request.description?` | `string` |
| `request.design?` | \{ `cinemaGradient?`: \{ `position`: `"bottom"` \| `"center"`; `strength`: `20` \| `50` \| `70`; \}; `heroLayout?`: \{ `size`: `"small"` \| `"medium"` \| `"large"`; `type`: `"hero"` \| `"cinema"`; \}; \} & \{ \[`key`: `string`\]: `unknown`; \} |
| `request.extendsThemeId?` | `string` |
| `request.isActive?` | `boolean` |
| `request.isBaseTheme?` | `boolean` |
| `request.name` | `string` |
| `request.shape?` | \{ `radiusFull?`: `string`; `radiusLg?`: `string`; `radiusMd?`: `string`; `radiusNone?`: `string`; `radiusSm?`: `string`; \} |
| `request.shape.radiusFull?` | `string` |
| `request.shape.radiusLg?` | `string` |
| `request.shape.radiusMd?` | `string` |
| `request.shape.radiusNone?` | `string` |
| `request.shape.radiusSm?` | `string` |
| `request.typography?` | \{ `baseSize?`: `string`; `fontFamily?`: `string`; `fontFamilyMono?`: `string`; `scaleRatio?`: `number`; \} |
| `request.typography.baseSize?` | `string` |
| `request.typography.fontFamily?` | `string` |
| `request.typography.fontFamilyMono?` | `string` |
| `request.typography.scaleRatio?` | `number` |

##### Returns

`Promise`\<\{
  `brand`: \{
     `displayName?`: `string`;
     `faviconUrl?`: `string`;
     `logoDarkUrl?`: `string`;
     `logoUrl?`: `string`;
  \};
  `colors`: \{
     `accent?`: `string`;
     `accentForeground?`: `string`;
     `background?`: `string`;
     `border?`: `string`;
     `destructive?`: `string`;
     `destructiveForeground?`: `string`;
     `foreground?`: `string`;
     `input?`: `string`;
     `muted?`: `string`;
     `mutedForeground?`: `string`;
     `primary?`: `string`;
     `primaryForeground?`: `string`;
     `ring?`: `string`;
     `secondary?`: `string`;
     `secondaryForeground?`: `string`;
     `success?`: `string`;
     `successForeground?`: `string`;
     `warning?`: `string`;
     `warningForeground?`: `string`;
  \};
  `createdAt`: `string`;
  `description`: `string` \| `null`;
  `design`:   \| \{
     `cinemaGradient?`: \{
        `position`: `"bottom"` \| `"center"`;
        `strength`: `20` \| `50` \| `70`;
     \};
     `heroLayout?`: \{
        `size`: `"small"` \| `"medium"` \| `"large"`;
        `type`: `"hero"` \| `"cinema"`;
     \};
   \}
     \| `null`;
  `extendsThemeId`: `string` \| `null`;
  `id`: `string`;
  `isActive`: `boolean`;
  `isBaseTheme`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `shape`: \{
     `radiusFull?`: `string`;
     `radiusLg?`: `string`;
     `radiusMd?`: `string`;
     `radiusNone?`: `string`;
     `radiusSm?`: `string`;
  \};
  `typography`: \{
     `baseSize?`: `string`;
     `fontFamily?`: `string`;
     `fontFamilyMono?`: `string`;
     `scaleRatio?`: `number`;
  \};
  `updatedAt`: `string`;
\}\>

##### Operation Id

createTheme

#### delete()

```ts
delete: (id: string) => Promise<boolean>;
```

Delete theme
Soft-delete a theme

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

##### Returns

`Promise`\<`boolean`\>

##### Operation Id

deleteTheme

#### get()

```ts
get: (id: string) => Promise<{
  brand: {
     displayName?: string;
     faviconUrl?: string;
     logoDarkUrl?: string;
     logoUrl?: string;
  };
  colors: {
     accent?: string;
     accentForeground?: string;
     background?: string;
     border?: string;
     destructive?: string;
     destructiveForeground?: string;
     foreground?: string;
     input?: string;
     muted?: string;
     mutedForeground?: string;
     primary?: string;
     primaryForeground?: string;
     ring?: string;
     secondary?: string;
     secondaryForeground?: string;
     success?: string;
     successForeground?: string;
     warning?: string;
     warningForeground?: string;
  };
  createdAt: string;
  description: string | null;
  design:   | {
     cinemaGradient?: {
        position: "bottom" | "center";
        strength: 20 | 50 | 70;
     };
     heroLayout?: {
        size: "small" | "medium" | "large";
        type: "hero" | "cinema";
     };
   }
     | null;
  extendsThemeId: string | null;
  id: string;
  isActive: boolean;
  isBaseTheme: boolean;
  name: string;
  organisationId: string;
  shape: {
     radiusFull?: string;
     radiusLg?: string;
     radiusMd?: string;
     radiusNone?: string;
     radiusSm?: string;
  };
  typography: {
     baseSize?: string;
     fontFamily?: string;
     fontFamilyMono?: string;
     scaleRatio?: number;
  };
  updatedAt: string;
}>;
```

Get theme
Get a specific theme by ID

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

##### Returns

`Promise`\<\{
  `brand`: \{
     `displayName?`: `string`;
     `faviconUrl?`: `string`;
     `logoDarkUrl?`: `string`;
     `logoUrl?`: `string`;
  \};
  `colors`: \{
     `accent?`: `string`;
     `accentForeground?`: `string`;
     `background?`: `string`;
     `border?`: `string`;
     `destructive?`: `string`;
     `destructiveForeground?`: `string`;
     `foreground?`: `string`;
     `input?`: `string`;
     `muted?`: `string`;
     `mutedForeground?`: `string`;
     `primary?`: `string`;
     `primaryForeground?`: `string`;
     `ring?`: `string`;
     `secondary?`: `string`;
     `secondaryForeground?`: `string`;
     `success?`: `string`;
     `successForeground?`: `string`;
     `warning?`: `string`;
     `warningForeground?`: `string`;
  \};
  `createdAt`: `string`;
  `description`: `string` \| `null`;
  `design`:   \| \{
     `cinemaGradient?`: \{
        `position`: `"bottom"` \| `"center"`;
        `strength`: `20` \| `50` \| `70`;
     \};
     `heroLayout?`: \{
        `size`: `"small"` \| `"medium"` \| `"large"`;
        `type`: `"hero"` \| `"cinema"`;
     \};
   \}
     \| `null`;
  `extendsThemeId`: `string` \| `null`;
  `id`: `string`;
  `isActive`: `boolean`;
  `isBaseTheme`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `shape`: \{
     `radiusFull?`: `string`;
     `radiusLg?`: `string`;
     `radiusMd?`: `string`;
     `radiusNone?`: `string`;
     `radiusSm?`: `string`;
  \};
  `typography`: \{
     `baseSize?`: `string`;
     `fontFamily?`: `string`;
     `fontFamilyMono?`: `string`;
     `scaleRatio?`: `number`;
  \};
  `updatedAt`: `string`;
\}\>

##### Operation Id

getTheme

#### list()

```ts
list: () => Promise<{
  brand: {
     displayName?: string;
     faviconUrl?: string;
     logoDarkUrl?: string;
     logoUrl?: string;
  };
  colors: {
     accent?: string;
     accentForeground?: string;
     background?: string;
     border?: string;
     destructive?: string;
     destructiveForeground?: string;
     foreground?: string;
     input?: string;
     muted?: string;
     mutedForeground?: string;
     primary?: string;
     primaryForeground?: string;
     ring?: string;
     secondary?: string;
     secondaryForeground?: string;
     success?: string;
     successForeground?: string;
     warning?: string;
     warningForeground?: string;
  };
  createdAt: string;
  description: string | null;
  design:   | {
     cinemaGradient?: {
        position: "bottom" | "center";
        strength: 20 | 50 | 70;
     };
     heroLayout?: {
        size: "small" | "medium" | "large";
        type: "hero" | "cinema";
     };
   }
     | null;
  extendsThemeId: string | null;
  id: string;
  isActive: boolean;
  isBaseTheme: boolean;
  name: string;
  organisationId: string;
  shape: {
     radiusFull?: string;
     radiusLg?: string;
     radiusMd?: string;
     radiusNone?: string;
     radiusSm?: string;
  };
  typography: {
     baseSize?: string;
     fontFamily?: string;
     fontFamilyMono?: string;
     scaleRatio?: number;
  };
  updatedAt: string;
}[]>;
```

List themes
List all branding/design themes for the organisation

##### Returns

`Promise`\<\{
  `brand`: \{
     `displayName?`: `string`;
     `faviconUrl?`: `string`;
     `logoDarkUrl?`: `string`;
     `logoUrl?`: `string`;
  \};
  `colors`: \{
     `accent?`: `string`;
     `accentForeground?`: `string`;
     `background?`: `string`;
     `border?`: `string`;
     `destructive?`: `string`;
     `destructiveForeground?`: `string`;
     `foreground?`: `string`;
     `input?`: `string`;
     `muted?`: `string`;
     `mutedForeground?`: `string`;
     `primary?`: `string`;
     `primaryForeground?`: `string`;
     `ring?`: `string`;
     `secondary?`: `string`;
     `secondaryForeground?`: `string`;
     `success?`: `string`;
     `successForeground?`: `string`;
     `warning?`: `string`;
     `warningForeground?`: `string`;
  \};
  `createdAt`: `string`;
  `description`: `string` \| `null`;
  `design`:   \| \{
     `cinemaGradient?`: \{
        `position`: `"bottom"` \| `"center"`;
        `strength`: `20` \| `50` \| `70`;
     \};
     `heroLayout?`: \{
        `size`: `"small"` \| `"medium"` \| `"large"`;
        `type`: `"hero"` \| `"cinema"`;
     \};
   \}
     \| `null`;
  `extendsThemeId`: `string` \| `null`;
  `id`: `string`;
  `isActive`: `boolean`;
  `isBaseTheme`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `shape`: \{
     `radiusFull?`: `string`;
     `radiusLg?`: `string`;
     `radiusMd?`: `string`;
     `radiusNone?`: `string`;
     `radiusSm?`: `string`;
  \};
  `typography`: \{
     `baseSize?`: `string`;
     `fontFamily?`: `string`;
     `fontFamilyMono?`: `string`;
     `scaleRatio?`: `number`;
  \};
  `updatedAt`: `string`;
\}[]\>

##### Operation Id

listThemes

#### resolved()

```ts
resolved: (id: string) => Promise<{
  brand: {
     displayName?: string;
     faviconUrl?: string;
     logoDarkUrl?: string;
     logoUrl?: string;
  };
  colors: {
     accent?: string;
     accentForeground?: string;
     background?: string;
     border?: string;
     destructive?: string;
     destructiveForeground?: string;
     foreground?: string;
     input?: string;
     muted?: string;
     mutedForeground?: string;
     primary?: string;
     primaryForeground?: string;
     ring?: string;
     secondary?: string;
     secondaryForeground?: string;
     success?: string;
     successForeground?: string;
     warning?: string;
     warningForeground?: string;
  };
  description: string | null;
  design:   | {
     cinemaGradient?: {
        position: "bottom" | "center";
        strength: 20 | 50 | 70;
     };
     heroLayout?: {
        size: "small" | "medium" | "large";
        type: "hero" | "cinema";
     };
   }
     | null;
  extendsThemeId: string | null;
  id: string;
  isActive: boolean;
  isBaseTheme: boolean;
  name: string;
  organisationId: string;
  shape: {
     radiusFull?: string;
     radiusLg?: string;
     radiusMd?: string;
     radiusNone?: string;
     radiusSm?: string;
  };
  typography: {
     baseSize?: string;
     fontFamily?: string;
     fontFamilyMono?: string;
     scaleRatio?: number;
  };
}>;
```

Get resolved theme
Get a theme with its inheritance chain deep-merged (parent tokens overridden by the child)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

##### Returns

`Promise`\<\{
  `brand`: \{
     `displayName?`: `string`;
     `faviconUrl?`: `string`;
     `logoDarkUrl?`: `string`;
     `logoUrl?`: `string`;
  \};
  `colors`: \{
     `accent?`: `string`;
     `accentForeground?`: `string`;
     `background?`: `string`;
     `border?`: `string`;
     `destructive?`: `string`;
     `destructiveForeground?`: `string`;
     `foreground?`: `string`;
     `input?`: `string`;
     `muted?`: `string`;
     `mutedForeground?`: `string`;
     `primary?`: `string`;
     `primaryForeground?`: `string`;
     `ring?`: `string`;
     `secondary?`: `string`;
     `secondaryForeground?`: `string`;
     `success?`: `string`;
     `successForeground?`: `string`;
     `warning?`: `string`;
     `warningForeground?`: `string`;
  \};
  `description`: `string` \| `null`;
  `design`:   \| \{
     `cinemaGradient?`: \{
        `position`: `"bottom"` \| `"center"`;
        `strength`: `20` \| `50` \| `70`;
     \};
     `heroLayout?`: \{
        `size`: `"small"` \| `"medium"` \| `"large"`;
        `type`: `"hero"` \| `"cinema"`;
     \};
   \}
     \| `null`;
  `extendsThemeId`: `string` \| `null`;
  `id`: `string`;
  `isActive`: `boolean`;
  `isBaseTheme`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `shape`: \{
     `radiusFull?`: `string`;
     `radiusLg?`: `string`;
     `radiusMd?`: `string`;
     `radiusNone?`: `string`;
     `radiusSm?`: `string`;
  \};
  `typography`: \{
     `baseSize?`: `string`;
     `fontFamily?`: `string`;
     `fontFamilyMono?`: `string`;
     `scaleRatio?`: `number`;
  \};
\}\>

##### Operation Id

getResolvedTheme

#### update()

```ts
update: (id: string, request: {
  brand?: {
     displayName?: string;
     faviconUrl?: string;
     logoDarkUrl?: string;
     logoUrl?: string;
  };
  colors?: {
     accent?: string;
     accentForeground?: string;
     background?: string;
     border?: string;
     destructive?: string;
     destructiveForeground?: string;
     foreground?: string;
     input?: string;
     muted?: string;
     mutedForeground?: string;
     primary?: string;
     primaryForeground?: string;
     ring?: string;
     secondary?: string;
     secondaryForeground?: string;
     success?: string;
     successForeground?: string;
     warning?: string;
     warningForeground?: string;
  };
  description?: any;
  design?: any;
  extendsThemeId?: any;
  isActive?: boolean;
  isBaseTheme?: boolean;
  name?: string;
  shape?: {
     radiusFull?: string;
     radiusLg?: string;
     radiusMd?: string;
     radiusNone?: string;
     radiusSm?: string;
  };
  typography?: {
     baseSize?: string;
     fontFamily?: string;
     fontFamilyMono?: string;
     scaleRatio?: number;
  };
}) => Promise<{
  brand: {
     displayName?: string;
     faviconUrl?: string;
     logoDarkUrl?: string;
     logoUrl?: string;
  };
  colors: {
     accent?: string;
     accentForeground?: string;
     background?: string;
     border?: string;
     destructive?: string;
     destructiveForeground?: string;
     foreground?: string;
     input?: string;
     muted?: string;
     mutedForeground?: string;
     primary?: string;
     primaryForeground?: string;
     ring?: string;
     secondary?: string;
     secondaryForeground?: string;
     success?: string;
     successForeground?: string;
     warning?: string;
     warningForeground?: string;
  };
  createdAt: string;
  description: string | null;
  design:   | {
     cinemaGradient?: {
        position: "bottom" | "center";
        strength: 20 | 50 | 70;
     };
     heroLayout?: {
        size: "small" | "medium" | "large";
        type: "hero" | "cinema";
     };
   }
     | null;
  extendsThemeId: string | null;
  id: string;
  isActive: boolean;
  isBaseTheme: boolean;
  name: string;
  organisationId: string;
  shape: {
     radiusFull?: string;
     radiusLg?: string;
     radiusMd?: string;
     radiusNone?: string;
     radiusSm?: string;
  };
  typography: {
     baseSize?: string;
     fontFamily?: string;
     fontFamilyMono?: string;
     scaleRatio?: number;
  };
  updatedAt: string;
}>;
```

Update theme
Update an existing theme

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `request` | \{ `brand?`: \{ `displayName?`: `string`; `faviconUrl?`: `string`; `logoDarkUrl?`: `string`; `logoUrl?`: `string`; \}; `colors?`: \{ `accent?`: `string`; `accentForeground?`: `string`; `background?`: `string`; `border?`: `string`; `destructive?`: `string`; `destructiveForeground?`: `string`; `foreground?`: `string`; `input?`: `string`; `muted?`: `string`; `mutedForeground?`: `string`; `primary?`: `string`; `primaryForeground?`: `string`; `ring?`: `string`; `secondary?`: `string`; `secondaryForeground?`: `string`; `success?`: `string`; `successForeground?`: `string`; `warning?`: `string`; `warningForeground?`: `string`; \}; `description?`: `any`; `design?`: `any`; `extendsThemeId?`: `any`; `isActive?`: `boolean`; `isBaseTheme?`: `boolean`; `name?`: `string`; `shape?`: \{ `radiusFull?`: `string`; `radiusLg?`: `string`; `radiusMd?`: `string`; `radiusNone?`: `string`; `radiusSm?`: `string`; \}; `typography?`: \{ `baseSize?`: `string`; `fontFamily?`: `string`; `fontFamilyMono?`: `string`; `scaleRatio?`: `number`; \}; \} |
| `request.brand?` | \{ `displayName?`: `string`; `faviconUrl?`: `string`; `logoDarkUrl?`: `string`; `logoUrl?`: `string`; \} |
| `request.brand.displayName?` | `string` |
| `request.brand.faviconUrl?` | `string` |
| `request.brand.logoDarkUrl?` | `string` |
| `request.brand.logoUrl?` | `string` |
| `request.colors?` | \{ `accent?`: `string`; `accentForeground?`: `string`; `background?`: `string`; `border?`: `string`; `destructive?`: `string`; `destructiveForeground?`: `string`; `foreground?`: `string`; `input?`: `string`; `muted?`: `string`; `mutedForeground?`: `string`; `primary?`: `string`; `primaryForeground?`: `string`; `ring?`: `string`; `secondary?`: `string`; `secondaryForeground?`: `string`; `success?`: `string`; `successForeground?`: `string`; `warning?`: `string`; `warningForeground?`: `string`; \} |
| `request.colors.accent?` | `string` |
| `request.colors.accentForeground?` | `string` |
| `request.colors.background?` | `string` |
| `request.colors.border?` | `string` |
| `request.colors.destructive?` | `string` |
| `request.colors.destructiveForeground?` | `string` |
| `request.colors.foreground?` | `string` |
| `request.colors.input?` | `string` |
| `request.colors.muted?` | `string` |
| `request.colors.mutedForeground?` | `string` |
| `request.colors.primary?` | `string` |
| `request.colors.primaryForeground?` | `string` |
| `request.colors.ring?` | `string` |
| `request.colors.secondary?` | `string` |
| `request.colors.secondaryForeground?` | `string` |
| `request.colors.success?` | `string` |
| `request.colors.successForeground?` | `string` |
| `request.colors.warning?` | `string` |
| `request.colors.warningForeground?` | `string` |
| `request.description?` | `any` |
| `request.design?` | `any` |
| `request.extendsThemeId?` | `any` |
| `request.isActive?` | `boolean` |
| `request.isBaseTheme?` | `boolean` |
| `request.name?` | `string` |
| `request.shape?` | \{ `radiusFull?`: `string`; `radiusLg?`: `string`; `radiusMd?`: `string`; `radiusNone?`: `string`; `radiusSm?`: `string`; \} |
| `request.shape.radiusFull?` | `string` |
| `request.shape.radiusLg?` | `string` |
| `request.shape.radiusMd?` | `string` |
| `request.shape.radiusNone?` | `string` |
| `request.shape.radiusSm?` | `string` |
| `request.typography?` | \{ `baseSize?`: `string`; `fontFamily?`: `string`; `fontFamilyMono?`: `string`; `scaleRatio?`: `number`; \} |
| `request.typography.baseSize?` | `string` |
| `request.typography.fontFamily?` | `string` |
| `request.typography.fontFamilyMono?` | `string` |
| `request.typography.scaleRatio?` | `number` |

##### Returns

`Promise`\<\{
  `brand`: \{
     `displayName?`: `string`;
     `faviconUrl?`: `string`;
     `logoDarkUrl?`: `string`;
     `logoUrl?`: `string`;
  \};
  `colors`: \{
     `accent?`: `string`;
     `accentForeground?`: `string`;
     `background?`: `string`;
     `border?`: `string`;
     `destructive?`: `string`;
     `destructiveForeground?`: `string`;
     `foreground?`: `string`;
     `input?`: `string`;
     `muted?`: `string`;
     `mutedForeground?`: `string`;
     `primary?`: `string`;
     `primaryForeground?`: `string`;
     `ring?`: `string`;
     `secondary?`: `string`;
     `secondaryForeground?`: `string`;
     `success?`: `string`;
     `successForeground?`: `string`;
     `warning?`: `string`;
     `warningForeground?`: `string`;
  \};
  `createdAt`: `string`;
  `description`: `string` \| `null`;
  `design`:   \| \{
     `cinemaGradient?`: \{
        `position`: `"bottom"` \| `"center"`;
        `strength`: `20` \| `50` \| `70`;
     \};
     `heroLayout?`: \{
        `size`: `"small"` \| `"medium"` \| `"large"`;
        `type`: `"hero"` \| `"cinema"`;
     \};
   \}
     \| `null`;
  `extendsThemeId`: `string` \| `null`;
  `id`: `string`;
  `isActive`: `boolean`;
  `isBaseTheme`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `shape`: \{
     `radiusFull?`: `string`;
     `radiusLg?`: `string`;
     `radiusMd?`: `string`;
     `radiusNone?`: `string`;
     `radiusSm?`: `string`;
  \};
  `typography`: \{
     `baseSize?`: `string`;
     `fontFamily?`: `string`;
     `fontFamilyMono?`: `string`;
     `scaleRatio?`: `number`;
  \};
  `updatedAt`: `string`;
\}\>

##### Operation Id

updateTheme

***

### userAccountRoles

```ts
userAccountRoles: {
  assign: (request: {
     accountId: string;
     roleId: string;
     userId: string;
   }) => Promise<{
     account?: {
        id: string;
        name: string;
     };
     accountId: string;
     createdAt: string;
     id: string;
     organisationId: string;
     role?: {
        id: string;
        isSystemRole: boolean;
        name: string;
     };
     roleId: string;
     user?: {
        email: string;
        firstName: string | null;
        id: string;
        lastName: string | null;
     };
     userId: string;
  }>;
  list: () => Promise<{
     account?: {
        id: string;
        name: string;
     };
     accountId: string;
     createdAt: string;
     id: string;
     organisationId: string;
     role?: {
        id: string;
        isSystemRole: boolean;
        name: string;
     };
     roleId: string;
     user?: {
        email: string;
        firstName: string | null;
        id: string;
        lastName: string | null;
     };
     userId: string;
  }[]>;
  listByAccount: (accountId: string) => Promise<{
     account?: {
        id: string;
        name: string;
     };
     accountId: string;
     createdAt: string;
     id: string;
     organisationId: string;
     role?: {
        id: string;
        isSystemRole: boolean;
        name: string;
     };
     roleId: string;
     user?: {
        email: string;
        firstName: string | null;
        id: string;
        lastName: string | null;
     };
     userId: string;
  }[]>;
  listByUser: (userId: string) => Promise<{
     account?: {
        id: string;
        name: string;
     };
     accountId: string;
     createdAt: string;
     id: string;
     organisationId: string;
     role?: {
        id: string;
        isSystemRole: boolean;
        name: string;
     };
     roleId: string;
     user?: {
        email: string;
        firstName: string | null;
        id: string;
        lastName: string | null;
     };
     userId: string;
  }[]>;
  remove: (id: string) => Promise<boolean>;
  update: (request: {
     accountId: string;
     roleIds: string[];
     userId: string;
   }) => Promise<{
     account?: {
        id: string;
        name: string;
     };
     accountId: string;
     createdAt: string;
     id: string;
     organisationId: string;
     role?: {
        id: string;
        isSystemRole: boolean;
        name: string;
     };
     roleId: string;
     user?: {
        email: string;
        firstName: string | null;
        id: string;
        lastName: string | null;
     };
     userId: string;
  }[]>;
};
```

Defined in: [client.ts:1118](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L1118)

User Account Roles methods

#### assign()

```ts
assign: (request: {
  accountId: string;
  roleId: string;
  userId: string;
}) => Promise<{
  account?: {
     id: string;
     name: string;
  };
  accountId: string;
  createdAt: string;
  id: string;
  organisationId: string;
  role?: {
     id: string;
     isSystemRole: boolean;
     name: string;
  };
  roleId: string;
  user?: {
     email: string;
     firstName: string | null;
     id: string;
     lastName: string | null;
  };
  userId: string;
}>;
```

Assign role to user
Assign a role to a user for a specific account. Creates a new role assignment.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | \{ `accountId`: `string`; `roleId`: `string`; `userId`: `string`; \} | - |
| `request.accountId` | `string` | **Description** Account ID **Example** `acc_abc123` |
| `request.roleId` | `string` | **Description** Role ID (can be a system role or custom role) **Example** `rol_system_event_manager` |
| `request.userId` | `string` | **Description** User ID **Example** `usr_abc123` |

##### Returns

`Promise`\<\{
  `account?`: \{
     `id`: `string`;
     `name`: `string`;
  \};
  `accountId`: `string`;
  `createdAt`: `string`;
  `id`: `string`;
  `organisationId`: `string`;
  `role?`: \{
     `id`: `string`;
     `isSystemRole`: `boolean`;
     `name`: `string`;
  \};
  `roleId`: `string`;
  `user?`: \{
     `email`: `string`;
     `firstName`: `string` \| `null`;
     `id`: `string`;
     `lastName`: `string` \| `null`;
  \};
  `userId`: `string`;
\}\>

##### Operation Id

assignRole

#### list()

```ts
list: () => Promise<{
  account?: {
     id: string;
     name: string;
  };
  accountId: string;
  createdAt: string;
  id: string;
  organisationId: string;
  role?: {
     id: string;
     isSystemRole: boolean;
     name: string;
  };
  roleId: string;
  user?: {
     email: string;
     firstName: string | null;
     id: string;
     lastName: string | null;
  };
  userId: string;
}[]>;
```

List all role assignments
List all role assignments in the organisation. Shows which users have which roles on which accounts.

##### Returns

`Promise`\<\{
  `account?`: \{
     `id`: `string`;
     `name`: `string`;
  \};
  `accountId`: `string`;
  `createdAt`: `string`;
  `id`: `string`;
  `organisationId`: `string`;
  `role?`: \{
     `id`: `string`;
     `isSystemRole`: `boolean`;
     `name`: `string`;
  \};
  `roleId`: `string`;
  `user?`: \{
     `email`: `string`;
     `firstName`: `string` \| `null`;
     `id`: `string`;
     `lastName`: `string` \| `null`;
  \};
  `userId`: `string`;
\}[]\>

##### Operation Id

listUserAccountRoles

#### listByAccount()

```ts
listByAccount: (accountId: string) => Promise<{
  account?: {
     id: string;
     name: string;
  };
  accountId: string;
  createdAt: string;
  id: string;
  organisationId: string;
  role?: {
     id: string;
     isSystemRole: boolean;
     name: string;
  };
  roleId: string;
  user?: {
     email: string;
     firstName: string | null;
     id: string;
     lastName: string | null;
  };
  userId: string;
}[]>;
```

List role assignments for account
List all role assignments for a specific account (all users with access).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `accountId` | `string` |

##### Returns

`Promise`\<\{
  `account?`: \{
     `id`: `string`;
     `name`: `string`;
  \};
  `accountId`: `string`;
  `createdAt`: `string`;
  `id`: `string`;
  `organisationId`: `string`;
  `role?`: \{
     `id`: `string`;
     `isSystemRole`: `boolean`;
     `name`: `string`;
  \};
  `roleId`: `string`;
  `user?`: \{
     `email`: `string`;
     `firstName`: `string` \| `null`;
     `id`: `string`;
     `lastName`: `string` \| `null`;
  \};
  `userId`: `string`;
\}[]\>

##### Operation Id

listUserAccountRolesByAccount

#### listByUser()

```ts
listByUser: (userId: string) => Promise<{
  account?: {
     id: string;
     name: string;
  };
  accountId: string;
  createdAt: string;
  id: string;
  organisationId: string;
  role?: {
     id: string;
     isSystemRole: boolean;
     name: string;
  };
  roleId: string;
  user?: {
     email: string;
     firstName: string | null;
     id: string;
     lastName: string | null;
  };
  userId: string;
}[]>;
```

List role assignments for user
List all role assignments for a specific user across all accounts.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |

##### Returns

`Promise`\<\{
  `account?`: \{
     `id`: `string`;
     `name`: `string`;
  \};
  `accountId`: `string`;
  `createdAt`: `string`;
  `id`: `string`;
  `organisationId`: `string`;
  `role?`: \{
     `id`: `string`;
     `isSystemRole`: `boolean`;
     `name`: `string`;
  \};
  `roleId`: `string`;
  `user?`: \{
     `email`: `string`;
     `firstName`: `string` \| `null`;
     `id`: `string`;
     `lastName`: `string` \| `null`;
  \};
  `userId`: `string`;
\}[]\>

##### Operation Id

listUserAccountRolesByUser

#### remove()

```ts
remove: (id: string) => Promise<boolean>;
```

Remove role assignment
Remove a specific role assignment from a user.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

##### Returns

`Promise`\<`boolean`\>

##### Operation Id

removeRoleAssignment

#### update()

```ts
update: (request: {
  accountId: string;
  roleIds: string[];
  userId: string;
}) => Promise<{
  account?: {
     id: string;
     name: string;
  };
  accountId: string;
  createdAt: string;
  id: string;
  organisationId: string;
  role?: {
     id: string;
     isSystemRole: boolean;
     name: string;
  };
  roleId: string;
  user?: {
     email: string;
     firstName: string | null;
     id: string;
     lastName: string | null;
  };
  userId: string;
}[]>;
```

Update user roles on account
Update the roles for a user on an account. Replaces all existing role assignments for this user-account pair.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | \{ `accountId`: `string`; `roleIds`: `string`[]; `userId`: `string`; \} | - |
| `request.accountId` | `string` | **Description** Account ID **Example** `acc_abc123` |
| `request.roleIds` | `string`[] | **Description** Array of role IDs to assign (replaces existing roles) **Example** `[ "rol_system_event_manager", "rol_system_box_office" ]` |
| `request.userId` | `string` | **Description** User ID **Example** `usr_abc123` |

##### Returns

`Promise`\<\{
  `account?`: \{
     `id`: `string`;
     `name`: `string`;
  \};
  `accountId`: `string`;
  `createdAt`: `string`;
  `id`: `string`;
  `organisationId`: `string`;
  `role?`: \{
     `id`: `string`;
     `isSystemRole`: `boolean`;
     `name`: `string`;
  \};
  `roleId`: `string`;
  `user?`: \{
     `email`: `string`;
     `firstName`: `string` \| `null`;
     `id`: `string`;
     `lastName`: `string` \| `null`;
  \};
  `userId`: `string`;
\}[]\>

##### Operation Id

updateUserAccountRoles

***

### userInvitations

```ts
userInvitations: {
  cancel: (id: string) => Promise<{
     id: string;
     success: boolean;
  }>;
  create: (request: {
     email: string;
     firstName?: string;
     lastName?: string;
     organisationId: string;
     roleIds?: string[];
   }) => Promise<{
     code: string;
     createdAt: string;
     email: string;
     expiresAt: string;
     id: string;
     organisationId: string;
     redeemedAt: string | null;
     userId: string;
  }>;
  get: (id: string) => Promise<{
     code: string;
     createdAt: string;
     email: string;
     expiresAt: string;
     id: string;
     organisationId: string;
     redeemedAt: string | null;
     userId: string;
  }>;
  list: (options?: {
     organisationId?: string;
     status?: "pending" | "expired" | "all" | "redeemed";
   }) => Promise<{
     code: string;
     createdAt: string;
     email: string;
     expiresAt: string;
     id: string;
     organisationId: string;
     redeemedAt: string | null;
     userId: string;
  }[]>;
  resend: (id: string) => Promise<{
     code: string;
     createdAt: string;
     email: string;
     expiresAt: string;
     id: string;
     organisationId: string;
     redeemedAt: string | null;
     userId: string;
  }>;
};
```

Defined in: [client.ts:969](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L969)

User Invitations methods

#### cancel()

```ts
cancel: (id: string) => Promise<{
  id: string;
  success: boolean;
}>;
```

Cancel user invitation
Cancel a pending user invitation

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

##### Returns

`Promise`\<\{
  `id`: `string`;
  `success`: `boolean`;
\}\>

##### Operation Id

cancelUserInvitation

#### create()

```ts
create: (request: {
  email: string;
  firstName?: string;
  lastName?: string;
  organisationId: string;
  roleIds?: string[];
}) => Promise<{
  code: string;
  createdAt: string;
  email: string;
  expiresAt: string;
  id: string;
  organisationId: string;
  redeemedAt: string | null;
  userId: string;
}>;
```

Create user invitation
Create a new user invitation and send invitation email

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | \{ `email`: `string`; `firstName?`: `string`; `lastName?`: `string`; `organisationId`: `string`; `roleIds?`: `string`[]; \} | - |
| `request.email` | `string` | Format: email **Example** `newuser@example.com` |
| `request.firstName?` | `string` | **Example** `John` |
| `request.lastName?` | `string` | **Example** `Doe` |
| `request.organisationId` | `string` | **Example** `org_xyz789` |
| `request.roleIds?` | `string`[] | **Example** `[ "rol_admin123" ]` |

##### Returns

`Promise`\<\{
  `code`: `string`;
  `createdAt`: `string`;
  `email`: `string`;
  `expiresAt`: `string`;
  `id`: `string`;
  `organisationId`: `string`;
  `redeemedAt`: `string` \| `null`;
  `userId`: `string`;
\}\>

##### Operation Id

createUserInvitation

#### get()

```ts
get: (id: string) => Promise<{
  code: string;
  createdAt: string;
  email: string;
  expiresAt: string;
  id: string;
  organisationId: string;
  redeemedAt: string | null;
  userId: string;
}>;
```

Get user invitation
Get a specific user invitation by ID

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

##### Returns

`Promise`\<\{
  `code`: `string`;
  `createdAt`: `string`;
  `email`: `string`;
  `expiresAt`: `string`;
  `id`: `string`;
  `organisationId`: `string`;
  `redeemedAt`: `string` \| `null`;
  `userId`: `string`;
\}\>

##### Operation Id

getUserInvitation

#### list()

```ts
list: (options?: {
  organisationId?: string;
  status?: "pending" | "expired" | "all" | "redeemed";
}) => Promise<{
  code: string;
  createdAt: string;
  email: string;
  expiresAt: string;
  id: string;
  organisationId: string;
  redeemedAt: string | null;
  userId: string;
}[]>;
```

List user invitations
List all user invitations for the organisation

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `organisationId?`: `string`; `status?`: `"pending"` \| `"expired"` \| `"all"` \| `"redeemed"`; \} |
| `options.organisationId?` | `string` |
| `options.status?` | `"pending"` \| `"expired"` \| `"all"` \| `"redeemed"` |

##### Returns

`Promise`\<\{
  `code`: `string`;
  `createdAt`: `string`;
  `email`: `string`;
  `expiresAt`: `string`;
  `id`: `string`;
  `organisationId`: `string`;
  `redeemedAt`: `string` \| `null`;
  `userId`: `string`;
\}[]\>

##### Operation Id

listUserInvitations

#### resend()

```ts
resend: (id: string) => Promise<{
  code: string;
  createdAt: string;
  email: string;
  expiresAt: string;
  id: string;
  organisationId: string;
  redeemedAt: string | null;
  userId: string;
}>;
```

Resend user invitation
Resend a user invitation email

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

##### Returns

`Promise`\<\{
  `code`: `string`;
  `createdAt`: `string`;
  `email`: `string`;
  `expiresAt`: `string`;
  `id`: `string`;
  `organisationId`: `string`;
  `redeemedAt`: `string` \| `null`;
  `userId`: `string`;
\}\>

##### Operation Id

resendUserInvitation

***

### venues

```ts
venues: (id: string) => {
  venuelayoutareas: {
     addArea: (layoutId: string, request: {
        capacity: number;
        categoryId?: string;
        color?: string;
        description?: string;
        displayOrder?: number;
        name: string;
        position?: {
           height: number;
           width: number;
           x: number;
           y: number;
        };
        seats?: any[];
        status?: "active" | "inactive";
        type: "unallocated" | "allocated";
      }) => Promise<{
        area: {
           capacity: number;
           color?: string;
           description?: string;
           displayOrder: number;
           id: string;
           name: string;
           seats?: unknown[];
           status: "active" | "inactive";
           type: "unallocated" | "allocated";
        };
        venueLayout?: unknown;
     }>;
     deleteArea: (layoutId: string, areaId: string) => Promise<{
        success: boolean;
        venueLayout?: unknown;
     }>;
     updateArea: (layoutId: string, areaId: string, request: {
        capacity?: number;
        categoryId?: string;
        color?: string;
        description?: string;
        displayOrder?: number;
        name?: string;
        position?: {
           height: number;
           width: number;
           x: number;
           y: number;
        };
        seats?: any[];
        status?: "active" | "inactive";
        type?: "unallocated" | "allocated";
      }) => Promise<{
        area: {
           capacity: number;
           color?: string;
           description?: string;
           displayOrder: number;
           id: string;
           name: string;
           seats?: unknown[];
           status: "active" | "inactive";
           type: "unallocated" | "allocated";
        };
        venueLayout?: unknown;
     }>;
  };
  venuelayoutcategories: {
     addCategory: (layoutId: string, request: {
        color?: string;
        description?: string;
        displayOrder?: number;
        name: string;
      }) => Promise<{
        category: {
           color?: string;
           description?: string;
           displayOrder: number;
           id: string;
           name: string;
        };
        venueLayout?: unknown;
     }>;
     deleteCategory: (layoutId: string, categoryId: string) => Promise<{
        success: boolean;
        venueLayout?: unknown;
     }>;
     updateCategory: (layoutId: string, categoryId: string, request: {
        color?: string;
        description?: string;
        displayOrder?: number;
        name?: string;
      }) => Promise<{
        category: {
           color?: string;
           description?: string;
           displayOrder: number;
           id: string;
           name: string;
        };
        venueLayout?: unknown;
     }>;
  };
  venuelayouts: {
     create: (request: {
        areas?: {
           capacity: number;
           color?: string;
           description?: string;
           displayOrder: number;
           floorId?: string;
           id?: string;
           name: string;
           position?: {
              height: ...;
              width: ...;
              x: ...;
              y: ...;
           };
           seats?: ...[];
           sections?: ...[];
           status?: "active" | "inactive";
           type: "unallocated" | "allocated";
        }[];
        categories?: {
           color?: string;
           description?: string;
           displayOrder: number;
           id?: string;
           name: string;
        }[];
        decorations?: {
           id?: string;
           label?: string;
           name?: string;
           position: {
              height: number;
              rotation?: ... | ...;
              width: number;
              x: number;
              y: number;
           };
           style?: {
              fill?: ...;
              fontSize?: ...;
              fontWeight?: ...;
              stroke?: ...;
           };
           type:   | "stage"
              | "pillar"
              | "barrier"
              | "aisle"
              | "wall"
              | "exit"
              | "entrance"
              | "bar"
              | "restroom"
              | "label"
              | "custom";
        }[];
        description?: string;
        floors?: {
           description?: string;
           displayOrder: number;
           id?: string;
           name: string;
        }[];
        name: string;
        status?: "active" | "archived";
        tags?: string[];
        totalCapacity?: number;
      }) => Promise<{
        accountId: string;
        areas: unknown[];
        categories: unknown[];
        createdAt: string;
        createdBy?: string;
        decorations?: {
           id: string;
           label?: ... | ...;
           name?: ... | ...;
           position: {
              height: ...;
              rotation?: ...;
              width: ...;
              x: ...;
              y: ...;
           };
           style?: ... | ...;
           type: ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ...;
        }[];
        description?: string;
        id: string;
        isDeleted: boolean;
        name: string;
        organisationId: string;
        status: "active" | "archived";
        tags: string[];
        totalCapacity: number;
        updatedAt: string;
        venueId: string;
     }>;
     delete: (layoutId: string) => Promise<{
        id: string;
        success: boolean;
     }>;
     get: (layoutId: string) => Promise<{
        accountId: string;
        areas: unknown[];
        categories: unknown[];
        createdAt: string;
        createdBy?: string;
        decorations?: {
           id: string;
           label?: ... | ...;
           name?: ... | ...;
           position: {
              height: ...;
              rotation?: ...;
              width: ...;
              x: ...;
              y: ...;
           };
           style?: ... | ...;
           type: ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ...;
        }[];
        description?: string;
        id: string;
        isDeleted: boolean;
        name: string;
        organisationId: string;
        status: "active" | "archived";
        tags: string[];
        totalCapacity: number;
        updatedAt: string;
        venueId: string;
     }>;
     list: (options?: {
        accountId?: string;
        limit?: string;
        page?: string;
        search?: string;
        status?: "active" | "archived";
      }) => Promise<{
        pagination: {
           hasNext: boolean;
           hasPrev: boolean;
           limit: number;
           page: number;
           total: number;
           totalPages: number;
        };
        venueLayouts: {
           accountId: string;
           areas: unknown[];
           categories: unknown[];
           createdAt: string;
           createdBy?: string;
           decorations?: ...[];
           description?: string;
           id: string;
           isDeleted: boolean;
           name: string;
           organisationId: string;
           status: "active" | "archived";
           tags: string[];
           totalCapacity: number;
           updatedAt: string;
           venueId: string;
        }[];
     }>;
     update: (layoutId: string, request: {
        areas?: {
           capacity: number;
           color?: string;
           description?: string;
           displayOrder: number;
           floorId?: string;
           id?: string;
           name: string;
           position?: {
              height: ...;
              width: ...;
              x: ...;
              y: ...;
           };
           seats?: ...[];
           sections?: ...[];
           status?: "active" | "inactive";
           type: "unallocated" | "allocated";
        }[];
        categories?: {
           color?: string;
           description?: string;
           displayOrder: number;
           id?: string;
           name: string;
        }[];
        decorations?: {
           id?: string;
           label?: string;
           name?: string;
           position: {
              height: number;
              rotation?: ... | ...;
              width: number;
              x: number;
              y: number;
           };
           style?: {
              fill?: ...;
              fontSize?: ...;
              fontWeight?: ...;
              stroke?: ...;
           };
           type:   | "stage"
              | "pillar"
              | "barrier"
              | "aisle"
              | "wall"
              | "exit"
              | "entrance"
              | "bar"
              | "restroom"
              | "label"
              | "custom";
        }[];
        description?: string;
        floors?: {
           description?: string;
           displayOrder: number;
           id?: string;
           name: string;
        }[];
        name?: string;
        status?: "active" | "archived";
        tags?: string[];
        totalCapacity?: number;
      }) => Promise<{
        accountId: string;
        areas: unknown[];
        categories: unknown[];
        createdAt: string;
        createdBy?: string;
        decorations?: {
           id: string;
           label?: ... | ...;
           name?: ... | ...;
           position: {
              height: ...;
              rotation?: ...;
              width: ...;
              x: ...;
              y: ...;
           };
           style?: ... | ...;
           type: ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ...;
        }[];
        description?: string;
        id: string;
        isDeleted: boolean;
        name: string;
        organisationId: string;
        status: "active" | "archived";
        tags: string[];
        totalCapacity: number;
        updatedAt: string;
        venueId: string;
     }>;
  };
  venuelayoutseats: {
     addSeat: (layoutId: string, areaId: string, request: {
        attributes?:   | "accessible"
           | "aisle_left"
           | "aisle_right"
           | "wheelchair_space"
           | "companion_seat"
           | "easy_access"
           | "obstructed_view"
           | "restricted_view"
           | "excellent_view"
           | "stage_view"
           | "extra_legroom"
           | "premium_comfort"
           | "front_row"
           | "back_row"
           | "center"[];
        categoryId?: string;
        companionSeats?: string[];
        companionTo?: string;
        holdType?: string;
        internalNotes?: string;
        label?: string;
        number: string;
        position?: {
           rotation?: number;
           x: number;
           y: number;
        };
        publicNotes?: string;
        row: string;
        section?: string;
        status?: "available" | "blocked" | "accessible" | "held" | "removed";
      }) => Promise<{
        seat: {
           attributes?: string[];
           categoryId?: string;
           companionSeats?: string[];
           companionTo?: string;
           holdType?: string;
           id: string;
           internalNotes?: string;
           label: string;
           number: string;
           position?: {
              rotation?: ... | ...;
              x: number;
              y: number;
           };
           publicNotes?: string;
           row: string;
           section?: string;
           status: "available" | "blocked" | "accessible" | "held" | "removed";
        };
        venueLayout?: unknown;
     }>;
     bulkAddSeats: (layoutId: string, areaId: string, request: {
        seats: {
           attributes?:   | "accessible"
              | "aisle_left"
              | "aisle_right"
              | "wheelchair_space"
              | "companion_seat"
              | "easy_access"
              | "obstructed_view"
              | "restricted_view"
              | "excellent_view"
              | "stage_view"
              | "extra_legroom"
              | "premium_comfort"
              | "front_row"
              | "back_row"
              | "center"[];
           categoryId?: string;
           companionSeats?: string[];
           companionTo?: string;
           holdType?: string;
           internalNotes?: string;
           label?: string;
           number: string;
           position?: {
              rotation?: ... | ...;
              x: number;
              y: number;
           };
           publicNotes?: string;
           row: string;
           section?: string;
           status?: "available" | "blocked" | "accessible" | "held" | "removed";
        }[];
      }) => Promise<{
        seatsAdded: number;
        venueLayout?: unknown;
     }>;
     deleteSeat: (layoutId: string, areaId: string, seatId: string) => Promise<{
        success: boolean;
        venueLayout?: unknown;
     }>;
     generateSeats: (layoutId: string, areaId: string, request: {
        categoryId?: string;
        endRow: string;
        rowPrefix?: string;
        seatPrefix?: string;
        seatsPerRow: number;
        section?: string;
        skipRows?: string[];
        skipSeats?: string[];
        startRow: string;
      }) => Promise<{
        seats: {
           attributes?: ...[];
           categoryId?: string;
           companionSeats?: ...[];
           companionTo?: string;
           holdType?: string;
           id: string;
           internalNotes?: string;
           label: string;
           number: string;
           position?: {
              rotation?: ...;
              x: ...;
              y: ...;
           };
           publicNotes?: string;
           row: string;
           section?: string;
           status: "available" | "blocked" | "accessible" | "held" | "removed";
        }[];
        seatsGenerated: number;
        venueLayout?: unknown;
     }>;
     syncSeats: (layoutId: string, areaId: string, request: {
        clearExisting?: boolean;
        seats: {
           attributes?:   | "accessible"
              | "aisle_left"
              | "aisle_right"
              | "wheelchair_space"
              | "companion_seat"
              | "easy_access"
              | "obstructed_view"
              | "restricted_view"
              | "excellent_view"
              | "stage_view"
              | "extra_legroom"
              | "premium_comfort"
              | "front_row"
              | "back_row"
              | "center"[];
           categoryId?: string;
           companionSeats?: string[];
           companionTo?: string;
           holdType?: string;
           id?: string;
           internalNotes?: string;
           label?: string;
           number: string;
           position?: {
              rotation?: ... | ...;
              x: number;
              y: number;
           };
           publicNotes?: string;
           row: string;
           section?: string;
           status?: "available" | "blocked" | "accessible" | "held" | "removed";
        }[];
      }) => Promise<{
        seats: {
           attributes?: ...[];
           categoryId?: string;
           companionSeats?: ...[];
           companionTo?: string;
           holdType?: string;
           id: string;
           internalNotes?: string;
           label: string;
           number: string;
           position?: {
              rotation?: ...;
              x: ...;
              y: ...;
           };
           publicNotes?: string;
           row: string;
           section?: string;
           status: "available" | "blocked" | "accessible" | "held" | "removed";
        }[];
        seatsSynced: number;
        venueLayout?: unknown;
     }>;
     updateSeat: (layoutId: string, areaId: string, seatId: string, request: {
        attributes?:   | "accessible"
           | "aisle_left"
           | "aisle_right"
           | "wheelchair_space"
           | "companion_seat"
           | "easy_access"
           | "obstructed_view"
           | "restricted_view"
           | "excellent_view"
           | "stage_view"
           | "extra_legroom"
           | "premium_comfort"
           | "front_row"
           | "back_row"
           | "center"[];
        categoryId?: string;
        companionSeats?: string[];
        companionTo?: string;
        holdType?: string;
        internalNotes?: string;
        label?: string;
        number?: string;
        position?: {
           rotation?: number;
           x: number;
           y: number;
        };
        publicNotes?: string;
        row?: string;
        section?: string;
        status?: "available" | "blocked" | "accessible" | "held" | "removed";
      }) => Promise<{
        seat: {
           attributes?: string[];
           categoryId?: string;
           companionSeats?: string[];
           companionTo?: string;
           holdType?: string;
           id: string;
           internalNotes?: string;
           label: string;
           number: string;
           position?: {
              rotation?: ... | ...;
              x: number;
              y: number;
           };
           publicNotes?: string;
           row: string;
           section?: string;
           status: "available" | "blocked" | "accessible" | "held" | "removed";
        };
        venueLayout?: unknown;
     }>;
  };
} & {
  create: (request: {
     accountId: string;
     city?: string;
     coordinates?: {
        latitude: number;
        longitude: number;
     };
     country?: string;
     description?: string;
     email?: string;
     features?: string[];
     name: string;
     phone?: string;
     status?: "active" | "archived";
     streetAddress?: string;
     tags?: string[];
     timezone?: string;
     website?: string;
   }) => Promise<{
     accountId: string;
     coordinates?: {
        coordinates: [number, number];
        type: "Point";
     };
     country?: string;
     createdAt: string;
     createdBy?: string;
     description?: string;
     email?: string;
     features: string[];
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     phone?: string;
     status: "active" | "archived";
     streetAddress?: string;
     tags: string[];
     timezone: string;
     updatedAt: string;
     website?: string;
  }>;
  delete: (id: string) => Promise<{
     id: string;
     success: boolean;
  }>;
  get: (id: string) => Promise<{
     accountId: string;
     coordinates?: {
        coordinates: [number, number];
        type: "Point";
     };
     country?: string;
     createdAt: string;
     createdBy?: string;
     description?: string;
     email?: string;
     features: string[];
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     phone?: string;
     status: "active" | "archived";
     streetAddress?: string;
     tags: string[];
     timezone: string;
     updatedAt: string;
     website?: string;
  }>;
  list: (options?: {
     accountId?: string;
     limit?: string;
     page?: string;
     search?: string;
     status?: "active" | "archived";
   }) => Promise<{
     pagination: {
        hasNext: boolean;
        hasPrev: boolean;
        limit: number;
        page: number;
        total: number;
        totalPages: number;
     };
     venues: {
        accountId: string;
        coordinates?: {
           coordinates: [number, number];
           type: "Point";
        };
        country?: string;
        createdAt: string;
        createdBy?: string;
        description?: string;
        email?: string;
        features: string[];
        id: string;
        isDeleted: boolean;
        name: string;
        organisationId: string;
        phone?: string;
        status: "active" | "archived";
        streetAddress?: string;
        tags: string[];
        timezone: string;
        updatedAt: string;
        website?: string;
     }[];
  }>;
  update: (id: string, request: {
     city?: string;
     coordinates?: any;
     country?: string;
     description?: string;
     email?: any;
     features?: string[];
     name?: string;
     phone?: any;
     status?: "active" | "archived";
     streetAddress?: string;
     tags?: string[];
     timezone?: string;
     website?: any;
   }) => Promise<{
     accountId: string;
     coordinates?: {
        coordinates: [number, number];
        type: "Point";
     };
     country?: string;
     createdAt: string;
     createdBy?: string;
     description?: string;
     email?: string;
     features: string[];
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     phone?: string;
     status: "active" | "archived";
     streetAddress?: string;
     tags: string[];
     timezone: string;
     updatedAt: string;
     website?: string;
  }>;
};
```

Defined in: [client.ts:1443](https://github.com/ticketlayer/backstage-sdk-ts/blob/db5fdbff5f45ecfd806de67a2c5f759c2717f694/src/client.ts#L1443)

Venues methods
Use venues() to access nested resources: venues(id).venuelayouts, venuelayoutareas, venuelayoutcategories, venuelayoutseats

#### Type Declaration

##### create()

```ts
create: (request: {
  accountId: string;
  city?: string;
  coordinates?: {
     latitude: number;
     longitude: number;
  };
  country?: string;
  description?: string;
  email?: string;
  features?: string[];
  name: string;
  phone?: string;
  status?: "active" | "archived";
  streetAddress?: string;
  tags?: string[];
  timezone?: string;
  website?: string;
}) => Promise<{
  accountId: string;
  coordinates?: {
     coordinates: [number, number];
     type: "Point";
  };
  country?: string;
  createdAt: string;
  createdBy?: string;
  description?: string;
  email?: string;
  features: string[];
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  phone?: string;
  status: "active" | "archived";
  streetAddress?: string;
  tags: string[];
  timezone: string;
  updatedAt: string;
  website?: string;
}>;
```

Create venue
Create a new venue in the organisation

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | \{ `accountId`: `string`; `city?`: `string`; `coordinates?`: \{ `latitude`: `number`; `longitude`: `number`; \}; `country?`: `string`; `description?`: `string`; `email?`: `string`; `features?`: `string`[]; `name`: `string`; `phone?`: `string`; `status?`: `"active"` \| `"archived"`; `streetAddress?`: `string`; `tags?`: `string`[]; `timezone?`: `string`; `website?`: `string`; \} |
| `request.accountId` | `string` |
| `request.city?` | `string` |
| `request.coordinates?` | \{ `latitude`: `number`; `longitude`: `number`; \} |
| `request.coordinates.latitude` | `number` |
| `request.coordinates.longitude` | `number` |
| `request.country?` | `string` |
| `request.description?` | `string` |
| `request.email?` | `string` |
| `request.features?` | `string`[] |
| `request.name` | `string` |
| `request.phone?` | `string` |
| `request.status?` | `"active"` \| `"archived"` |
| `request.streetAddress?` | `string` |
| `request.tags?` | `string`[] |
| `request.timezone?` | `string` |
| `request.website?` | `string` |

###### Returns

`Promise`\<\{
  `accountId`: `string`;
  `coordinates?`: \{
     `coordinates`: \[`number`, `number`\];
     `type`: `"Point"`;
  \};
  `country?`: `string`;
  `createdAt`: `string`;
  `createdBy?`: `string`;
  `description?`: `string`;
  `email?`: `string`;
  `features`: `string`[];
  `id`: `string`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `phone?`: `string`;
  `status`: `"active"` \| `"archived"`;
  `streetAddress?`: `string`;
  `tags`: `string`[];
  `timezone`: `string`;
  `updatedAt`: `string`;
  `website?`: `string`;
\}\>

###### Operation Id

createVenue

##### delete()

```ts
delete: (id: string) => Promise<{
  id: string;
  success: boolean;
}>;
```

Delete venue
Delete a venue (soft delete)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

###### Returns

`Promise`\<\{
  `id`: `string`;
  `success`: `boolean`;
\}\>

###### Operation Id

deleteVenue

##### get()

```ts
get: (id: string) => Promise<{
  accountId: string;
  coordinates?: {
     coordinates: [number, number];
     type: "Point";
  };
  country?: string;
  createdAt: string;
  createdBy?: string;
  description?: string;
  email?: string;
  features: string[];
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  phone?: string;
  status: "active" | "archived";
  streetAddress?: string;
  tags: string[];
  timezone: string;
  updatedAt: string;
  website?: string;
}>;
```

Get venue
Get a specific venue by ID

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

###### Returns

`Promise`\<\{
  `accountId`: `string`;
  `coordinates?`: \{
     `coordinates`: \[`number`, `number`\];
     `type`: `"Point"`;
  \};
  `country?`: `string`;
  `createdAt`: `string`;
  `createdBy?`: `string`;
  `description?`: `string`;
  `email?`: `string`;
  `features`: `string`[];
  `id`: `string`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `phone?`: `string`;
  `status`: `"active"` \| `"archived"`;
  `streetAddress?`: `string`;
  `tags`: `string`[];
  `timezone`: `string`;
  `updatedAt`: `string`;
  `website?`: `string`;
\}\>

###### Operation Id

getVenue

##### list()

```ts
list: (options?: {
  accountId?: string;
  limit?: string;
  page?: string;
  search?: string;
  status?: "active" | "archived";
}) => Promise<{
  pagination: {
     hasNext: boolean;
     hasPrev: boolean;
     limit: number;
     page: number;
     total: number;
     totalPages: number;
  };
  venues: {
     accountId: string;
     coordinates?: {
        coordinates: [number, number];
        type: "Point";
     };
     country?: string;
     createdAt: string;
     createdBy?: string;
     description?: string;
     email?: string;
     features: string[];
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     phone?: string;
     status: "active" | "archived";
     streetAddress?: string;
     tags: string[];
     timezone: string;
     updatedAt: string;
     website?: string;
  }[];
}>;
```

List venues
List all venues for the organisation with optional filtering and pagination

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `accountId?`: `string`; `limit?`: `string`; `page?`: `string`; `search?`: `string`; `status?`: `"active"` \| `"archived"`; \} |
| `options.accountId?` | `string` |
| `options.limit?` | `string` |
| `options.page?` | `string` |
| `options.search?` | `string` |
| `options.status?` | `"active"` \| `"archived"` |

###### Returns

`Promise`\<\{
  `pagination`: \{
     `hasNext`: `boolean`;
     `hasPrev`: `boolean`;
     `limit`: `number`;
     `page`: `number`;
     `total`: `number`;
     `totalPages`: `number`;
  \};
  `venues`: \{
     `accountId`: `string`;
     `coordinates?`: \{
        `coordinates`: \[`number`, `number`\];
        `type`: `"Point"`;
     \};
     `country?`: `string`;
     `createdAt`: `string`;
     `createdBy?`: `string`;
     `description?`: `string`;
     `email?`: `string`;
     `features`: `string`[];
     `id`: `string`;
     `isDeleted`: `boolean`;
     `name`: `string`;
     `organisationId`: `string`;
     `phone?`: `string`;
     `status`: `"active"` \| `"archived"`;
     `streetAddress?`: `string`;
     `tags`: `string`[];
     `timezone`: `string`;
     `updatedAt`: `string`;
     `website?`: `string`;
  \}[];
\}\>

###### Operation Id

listVenues

##### update()

```ts
update: (id: string, request: {
  city?: string;
  coordinates?: any;
  country?: string;
  description?: string;
  email?: any;
  features?: string[];
  name?: string;
  phone?: any;
  status?: "active" | "archived";
  streetAddress?: string;
  tags?: string[];
  timezone?: string;
  website?: any;
}) => Promise<{
  accountId: string;
  coordinates?: {
     coordinates: [number, number];
     type: "Point";
  };
  country?: string;
  createdAt: string;
  createdBy?: string;
  description?: string;
  email?: string;
  features: string[];
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  phone?: string;
  status: "active" | "archived";
  streetAddress?: string;
  tags: string[];
  timezone: string;
  updatedAt: string;
  website?: string;
}>;
```

Update venue
Update an existing venue

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `request` | \{ `city?`: `string`; `coordinates?`: `any`; `country?`: `string`; `description?`: `string`; `email?`: `any`; `features?`: `string`[]; `name?`: `string`; `phone?`: `any`; `status?`: `"active"` \| `"archived"`; `streetAddress?`: `string`; `tags?`: `string`[]; `timezone?`: `string`; `website?`: `any`; \} |
| `request.city?` | `string` |
| `request.coordinates?` | `any` |
| `request.country?` | `string` |
| `request.description?` | `string` |
| `request.email?` | `any` |
| `request.features?` | `string`[] |
| `request.name?` | `string` |
| `request.phone?` | `any` |
| `request.status?` | `"active"` \| `"archived"` |
| `request.streetAddress?` | `string` |
| `request.tags?` | `string`[] |
| `request.timezone?` | `string` |
| `request.website?` | `any` |

###### Returns

`Promise`\<\{
  `accountId`: `string`;
  `coordinates?`: \{
     `coordinates`: \[`number`, `number`\];
     `type`: `"Point"`;
  \};
  `country?`: `string`;
  `createdAt`: `string`;
  `createdBy?`: `string`;
  `description?`: `string`;
  `email?`: `string`;
  `features`: `string`[];
  `id`: `string`;
  `isDeleted`: `boolean`;
  `name`: `string`;
  `organisationId`: `string`;
  `phone?`: `string`;
  `status`: `"active"` \| `"archived"`;
  `streetAddress?`: `string`;
  `tags`: `string`[];
  `timezone`: `string`;
  `updatedAt`: `string`;
  `website?`: `string`;
\}\>

###### Operation Id

updateVenue
