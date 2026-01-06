[**@ticketlayer/backstage-sdk**](../README.md)

***

[@ticketlayer/backstage-sdk](../README.md) / BackstageClient

# Class: BackstageClient

Defined in: [client.ts:203](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L203)

## Constructors

### Constructor

```ts
new BackstageClient(config: BackstageClientConfig): BackstageClient;
```

Defined in: [client.ts:215](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L215)

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

Defined in: [client.ts:269](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L269)

Clear the access token

#### Returns

`void`

***

### getAccessToken()

```ts
getAccessToken(): string | undefined;
```

Defined in: [client.ts:276](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L276)

Get the current access token

#### Returns

`string` \| `undefined`

***

### getRefreshToken()

```ts
getRefreshToken(): string | undefined;
```

Defined in: [client.ts:290](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L290)

Get the current refresh token

#### Returns

`string` \| `undefined`

***

### setAccessToken()

```ts
setAccessToken(token: string): void;
```

Defined in: [client.ts:262](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L262)

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

Defined in: [client.ts:283](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L283)

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

Defined in: [client.ts:706](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L706)

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

Defined in: [client.ts:534](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L534)

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
     status?:   | "draft"
        | "published"
        | "on_sale"
        | "sold_out"
        | "completed"
        | "cancelled";
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
     status?:   | "draft"
        | "published"
        | "on_sale"
        | "sold_out"
        | "completed"
        | "cancelled";
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

Defined in: [client.ts:1069](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L1069)

Events methods
Use events() to access nested resources: events(id).occurrences, priceschemes

#### Type Declaration

##### create()

```ts
create: (request: {
  accountId: string;
  description?: string;
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
  status?:   | "draft"
     | "published"
     | "on_sale"
     | "sold_out"
     | "completed"
     | "cancelled";
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
| `request` | \{ `accountId`: `string`; `description?`: `string`; `layout?`: \{ `areas?`: \{ `capacity`: `number`; `categoryId?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; `type`: `"unallocated"` \| `"allocated"`; \}[]; `categories?`: \{ `color?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; \}[]; `venueLayoutTemplateId?`: `string`; \}; `name`: `string`; `offSaleDate?`: `string`; `onSaleDate?`: `string`; `status?`: \| `"draft"` \| `"published"` \| `"on_sale"` \| `"sold_out"` \| `"completed"` \| `"cancelled"`; `tags?`: `string`[]; `ticketTypes?`: \{ `description?`: `string`; `displayOrder`: `number`; `id?`: `string`; `name`: `string`; \}[]; `timezone?`: `string`; `venueId?`: `any`; `venueName?`: `any`; \} |
| `request.accountId` | `string` |
| `request.description?` | `string` |
| `request.layout?` | \{ `areas?`: \{ `capacity`: `number`; `categoryId?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; `type`: `"unallocated"` \| `"allocated"`; \}[]; `categories?`: \{ `color?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; \}[]; `venueLayoutTemplateId?`: `string`; \} |
| `request.layout.areas?` | \{ `capacity`: `number`; `categoryId?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; `type`: `"unallocated"` \| `"allocated"`; \}[] |
| `request.layout.categories?` | \{ `color?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; \}[] |
| `request.layout.venueLayoutTemplateId?` | `string` |
| `request.name` | `string` |
| `request.offSaleDate?` | `string` |
| `request.onSaleDate?` | `string` |
| `request.status?` | \| `"draft"` \| `"published"` \| `"on_sale"` \| `"sold_out"` \| `"completed"` \| `"cancelled"` |
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
  status?:   | "draft"
     | "published"
     | "on_sale"
     | "sold_out"
     | "completed"
     | "cancelled";
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
| `request` | \{ `description?`: `any`; `layout?`: \{ `areas?`: \{ `capacity`: `number`; `categoryId?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; `type`: `"unallocated"` \| `"allocated"`; \}[]; `categories?`: \{ `color?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; \}[]; `venueLayoutTemplateId?`: `string`; \}; `name?`: `string`; `offSaleDate?`: `any`; `onSaleDate?`: `any`; `status?`: \| `"draft"` \| `"published"` \| `"on_sale"` \| `"sold_out"` \| `"completed"` \| `"cancelled"`; `tags?`: `string`[]; `ticketTypes?`: \{ `description?`: `string`; `displayOrder`: `number`; `id?`: `string`; `name`: `string`; \}[]; `timezone?`: `string`; `venueId?`: `any`; `venueName?`: `any`; \} |
| `request.description?` | `any` |
| `request.layout?` | \{ `areas?`: \{ `capacity`: `number`; `categoryId?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; `type`: `"unallocated"` \| `"allocated"`; \}[]; `categories?`: \{ `color?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; \}[]; `venueLayoutTemplateId?`: `string`; \} |
| `request.layout.areas?` | \{ `capacity`: `number`; `categoryId?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; `type`: `"unallocated"` \| `"allocated"`; \}[] |
| `request.layout.categories?` | \{ `color?`: `string`; `description?`: `string`; `displayOrder?`: `number`; `id?`: `string`; `name`: `string`; \}[] |
| `request.layout.venueLayoutTemplateId?` | `string` |
| `request.name?` | `string` |
| `request.offSaleDate?` | `any` |
| `request.onSaleDate?` | `any` |
| `request.status?` | \| `"draft"` \| `"published"` \| `"on_sale"` \| `"sold_out"` \| `"completed"` \| `"cancelled"` |
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

Defined in: [client.ts:784](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L784)

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

Defined in: [client.ts:611](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L611)

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

### organisations

```ts
organisations: {
  get: (id: string) => Promise<{
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
     logoUrl?: string;
     metadata?: {
      [key: string]: unknown;
     };
     name?: string;
     primaryColor?: string;
     secondaryColor?: string;
   }) => Promise<{
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

Defined in: [client.ts:674](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L674)

Organisations methods

#### get()

```ts
get: (id: string) => Promise<{
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
  logoUrl?: string;
  metadata?: {
   [key: string]: unknown;
  };
  name?: string;
  primaryColor?: string;
  secondaryColor?: string;
}) => Promise<{
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
| `request` | \{ `logoUrl?`: `string`; `metadata?`: \{ \[`key`: `string`\]: `unknown`; \}; `name?`: `string`; `primaryColor?`: `string`; `secondaryColor?`: `string`; \} | - |
| `request.logoUrl?` | `string` | Format: uri **Description** URL to organisation logo **Example** `https://example.com/logo.png` |
| `request.metadata?` | \{ \[`key`: `string`\]: `unknown`; \} | **Description** Additional metadata **Example** `{ * "industry": "Technology", * "size": "Medium" * }` |
| `request.name?` | `string` | **Description** Organisation name **Example** `Acme Corporation` |
| `request.primaryColor?` | `string` | **Description** Primary brand color (hex format) **Example** `#FF5733` |
| `request.secondaryColor?` | `string` | **Description** Secondary brand color (hex format) **Example** `#3366FF` |

##### Returns

`Promise`\<\{
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

Defined in: [client.ts:911](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L911)

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

Defined in: [client.ts:983](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L983)

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
     status?: "pending" | "redeemed" | "expired" | "all";
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

Defined in: [client.ts:834](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L834)

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
  status?: "pending" | "redeemed" | "expired" | "all";
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
| `options?` | \{ `organisationId?`: `string`; `status?`: `"pending"` \| `"redeemed"` \| `"expired"` \| `"all"`; \} |
| `options.organisationId?` | `string` |
| `options.status?` | `"pending"` \| `"redeemed"` \| `"expired"` \| `"all"` |

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

Defined in: [client.ts:1308](https://github.com/tomhartford/backstage-sdk-ts/blob/bbe3ce496eab6fe8b440aa2a85ced9a945b4f9d3/src/client.ts#L1308)

Venues methods
Use venues() to access nested resources: venues(id).venuelayouts, venuelayoutareas, venuelayoutcategories, venuelayoutseats

#### Type Declaration

##### create()

```ts
create: (request: {
  accountId: string;
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
| `request` | \{ `accountId`: `string`; `coordinates?`: \{ `latitude`: `number`; `longitude`: `number`; \}; `country?`: `string`; `description?`: `string`; `email?`: `string`; `features?`: `string`[]; `name`: `string`; `phone?`: `string`; `status?`: `"active"` \| `"archived"`; `streetAddress?`: `string`; `tags?`: `string`[]; `timezone?`: `string`; `website?`: `string`; \} |
| `request.accountId` | `string` |
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
| `request` | \{ `coordinates?`: `any`; `country?`: `string`; `description?`: `string`; `email?`: `any`; `features?`: `string`[]; `name?`: `string`; `phone?`: `any`; `status?`: `"active"` \| `"archived"`; `streetAddress?`: `string`; `tags?`: `string`[]; `timezone?`: `string`; `website?`: `any`; \} |
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
