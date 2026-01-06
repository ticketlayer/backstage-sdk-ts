[**@ticketlayer/backstage-sdk**](../README.md)

***

[@ticketlayer/backstage-sdk](../README.md) / components

# Interface: components

Defined in: generated/types.ts:949

## Properties

### headers

```ts
headers: never;
```

Defined in: generated/types.ts:2147

***

### parameters

```ts
parameters: never;
```

Defined in: generated/types.ts:2145

***

### pathItems

```ts
pathItems: never;
```

Defined in: generated/types.ts:2148

***

### requestBodies

```ts
requestBodies: never;
```

Defined in: generated/types.ts:2146

***

### responses

```ts
responses: never;
```

Defined in: generated/types.ts:2144

***

### schemas

```ts
schemas: {
  Account: {
     createdAt: string;
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     status: "active" | "inactive";
     updatedAt: string;
  };
  AddAreaResponse: {
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
  };
  AddCategoryResponse: {
     category: {
        color?: string;
        description?: string;
        displayOrder: number;
        id: string;
        name: string;
     };
     venueLayout?: unknown;
  };
  AddSeatResponse: {
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
           rotation?: number;
           x: number;
           y: number;
        };
        publicNotes?: string;
        row: string;
        section?: string;
        status: "available" | "blocked" | "accessible" | "held" | "removed";
     };
     venueLayout?: unknown;
  };
  AssignRoleRequest: {
     accountId: string;
     roleId: string;
     userId: string;
  };
  AssignRoleResponse: {
     assignment: {
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
     };
  };
  BulkAddSeatsResponse: {
     seatsAdded: number;
     venueLayout?: unknown;
  };
  CreateAccountResponse: {
     account: {
        createdAt: string;
        id: string;
        isDeleted: boolean;
        name: string;
        organisationId: string;
        status: "active" | "inactive";
        updatedAt: string;
     };
  };
  CreateEventOccurrenceResponse: {
     eventOccurrence: {
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
     };
  };
  CreateEventResponse: {
     event: {
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
     };
  };
  CreatePriceSchemeResponse: {
     priceScheme: {
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
     };
  };
  CreateRoleRequest: {
     description?: string;
     name: string;
     permissions: string[];
  };
  CreateRoleResponse: {
     createdAt: string;
     description: string | null;
     id: string;
     isDeleted: boolean;
     isSystemRole: boolean;
     name: string;
     organisationId: string;
     permissions: string[];
     updatedAt: string;
  };
  CreateUserInvitationRequest: {
     email: string;
     firstName?: string;
     lastName?: string;
     organisationId: string;
     roleIds?: string[];
  };
  CreateUserInvitationResponse: {
     invitation: {
        code: string;
        createdAt: string;
        email: string;
        expiresAt: string;
        id: string;
        organisationId: string;
        redeemedAt: string | null;
        userId: string;
     };
  };
  CreateVenueLayoutResponse: {
     venueLayout: {
        accountId: string;
        areas: unknown[];
        categories: unknown[];
        createdAt: string;
        createdBy?: string;
        decorations?: {
           id: string;
           label?: string;
           name?: string;
           position: {
              height: number;
              rotation?: number;
              width: number;
              x: number;
              y: number;
           };
           style?: {
              fill?: string;
              fontSize?: number;
              fontWeight?: string;
              stroke?: string;
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
        id: string;
        isDeleted: boolean;
        name: string;
        organisationId: string;
        status: "active" | "archived";
        tags: string[];
        totalCapacity: number;
        updatedAt: string;
        venueId: string;
     };
  };
  CreateVenueResponse: {
     venue: {
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
     };
  };
  Decoration: {
     id: string;
     label?: string;
     name?: string;
     position: {
        height: number;
        rotation?: number;
        width: number;
        x: number;
        y: number;
     };
     style?: {
        fill?: string;
        fontSize?: number;
        fontWeight?: string;
        stroke?: string;
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
  };
  DeleteAccountResponse: {
     id: string;
     success: boolean;
  };
  DeleteAreaResponse: {
     success: boolean;
     venueLayout?: unknown;
  };
  DeleteCategoryResponse: {
     success: boolean;
     venueLayout?: unknown;
  };
  DeleteEventOccurrenceResponse: {
     id: string;
     success: boolean;
  };
  DeleteEventResponse: {
     id: string;
     success: boolean;
  };
  DeletePriceSchemeResponse: {
     id: string;
     success: boolean;
  };
  DeleteRoleResponse: {
     id: string;
     success: boolean;
  };
  DeleteSeatResponse: {
     success: boolean;
     venueLayout?: unknown;
  };
  DeleteUserInvitationResponse: {
     id: string;
     success: boolean;
  };
  DeleteVenueLayoutResponse: {
     id: string;
     success: boolean;
  };
  DeleteVenueResponse: {
     id: string;
     success: boolean;
  };
  ErrorResponse: {
     code: string;
     details?: unknown;
     error: string;
     requestId?: string;
  };
  Event: {
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
  };
  EventOccurrence: {
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
  };
  FederateRequest: {
     token: string;
  };
  GenerateSeatsResponse: {
     seats: {
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
           rotation?: number;
           x: number;
           y: number;
        };
        publicNotes?: string;
        row: string;
        section?: string;
        status: "available" | "blocked" | "accessible" | "held" | "removed";
     }[];
     seatsGenerated: number;
     venueLayout?: unknown;
  };
  GeoJSONPoint: {
     coordinates: [number, number];
     type: "Point";
  };
  GetAccountResponse: {
     account: {
        createdAt: string;
        id: string;
        isDeleted: boolean;
        name: string;
        organisationId: string;
        status: "active" | "inactive";
        updatedAt: string;
     };
  };
  GetEventOccurrenceResponse: {
     eventOccurrence: {
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
     };
  };
  GetEventResponse: {
     event: {
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
     };
  };
  GetIdentityProviderResponse: {
     provider: {
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
     };
  };
  GetMeOrganisationsResponse: {
     organisations: {
        id: string;
        logoUrl?: string;
        name: string;
        primaryColor?: string;
        secondaryColor?: string;
        userId: string;
     }[];
  };
  GetMePermissionsResponse: {
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
  };
  GetMeResponse: {
     user: {
        email: string;
        externalUserId?: string;
        firstName?: string;
        id: string;
        identityProvider?: string;
        lastName?: string;
     };
  };
  GetMeRolesResponse: {
     isOrgAdmin: boolean;
     roles: {
        accountId: string;
        description: string | null;
        id: string;
        isSystemRole: boolean;
        name: string | null;
     }[];
  };
  GetOrganisationResponse: {
     organisation: {
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
     };
  };
  GetPriceSchemeResponse: {
     priceScheme: {
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
     };
  };
  GetRoleResponse: {
     createdAt: string;
     description: string | null;
     id: string;
     isDeleted: boolean;
     isSystemRole: boolean;
     name: string;
     organisationId: string;
     permissions: string[];
     updatedAt: string;
  };
  GetUserInvitationResponse: {
     invitation: {
        code: string;
        createdAt: string;
        email: string;
        expiresAt: string;
        id: string;
        organisationId: string;
        redeemedAt: string | null;
        userId: string;
     };
  };
  GetVenueLayoutResponse: {
     venueLayout: {
        accountId: string;
        areas: unknown[];
        categories: unknown[];
        createdAt: string;
        createdBy?: string;
        decorations?: {
           id: string;
           label?: string;
           name?: string;
           position: {
              height: number;
              rotation?: number;
              width: number;
              x: number;
              y: number;
           };
           style?: {
              fill?: string;
              fontSize?: number;
              fontWeight?: string;
              stroke?: string;
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
        id: string;
        isDeleted: boolean;
        name: string;
        organisationId: string;
        status: "active" | "archived";
        tags: string[];
        totalCapacity: number;
        updatedAt: string;
        venueId: string;
     };
  };
  GetVenueResponse: {
     venue: {
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
     };
  };
  IdentityProvider: {
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
  };
  ListAccountsResponse: {
     accounts: {
        createdAt: string;
        id: string;
        isDeleted: boolean;
        name: string;
        organisationId: string;
        status: "active" | "inactive";
        updatedAt: string;
     }[];
  };
  ListEventOccurrencesResponse: {
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
  };
  ListEventsResponse: {
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
  };
  ListIdentityProvidersResponse: {
     providers: {
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
     }[];
  };
  ListPriceSchemesResponse: {
     priceSchemes: {
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
     }[];
  };
  ListRolesResponse: {
     roles: {
        createdAt: string;
        description: string | null;
        id: string;
        isDeleted: boolean;
        isSystemRole: boolean;
        name: string;
        organisationId: string;
        permissions: string[];
        updatedAt: string;
     }[];
  };
  ListUserAccountRolesResponse: {
     assignments: {
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
     }[];
  };
  ListUserInvitationsResponse: {
     invitations: {
        code: string;
        createdAt: string;
        email: string;
        expiresAt: string;
        id: string;
        organisationId: string;
        redeemedAt: string | null;
        userId: string;
     }[];
  };
  ListVenueLayoutsResponse: {
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
        decorations?: {
           id: string;
           label?: string;
           name?: string;
           position: {
              height: number;
              rotation?: number;
              width: number;
              x: number;
              y: number;
           };
           style?: {
              fill?: string;
              fontSize?: number;
              fontWeight?: string;
              stroke?: string;
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
  };
  ListVenuesResponse: {
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
  };
  LoginRequest: {
     email: string;
     password: string;
  };
  LoginResponse: {
     accessToken: string;
     refreshToken: string;
     user: {
        email: string;
        firstName?: string;
        id: string;
        lastName?: string;
     };
  };
  MeOrganisation: {
     id: string;
     logoUrl?: string;
     name: string;
     primaryColor?: string;
     secondaryColor?: string;
     userId: string;
  };
  MePermissionEntry: {
     accounts: string[];
     isAllAccounts: boolean;
     permission: string;
  };
  MeRoleAssignment: {
     accountId: string;
     description: string | null;
     id: string;
     isSystemRole: boolean;
     name: string | null;
  };
  MeUser: {
     email: string;
     externalUserId?: string;
     firstName?: string;
     id: string;
     identityProvider?: string;
     lastName?: string;
  };
  Organisation: {
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
  };
  Pagination: {
     hasNext: boolean;
     hasPrev: boolean;
     limit: number;
     page: number;
     total: number;
     totalPages: number;
  };
  PriceScheme: {
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
  };
  RedeemInvitationRequest: {
     code: string;
     password: string;
  };
  RedeemInvitationResponse: {
     accessToken: string;
     refreshToken: string;
     user: {
        email: string;
        firstName?: string;
        id: string;
        lastName?: string;
     };
  };
  RefreshTokenRequest: {
     refreshToken: string;
  };
  RefreshTokenResponse: {
     accessToken: string;
     refreshToken: string;
  };
  RemoveAssignmentResponse: {
     success: boolean;
  };
  ResendUserInvitationResponse: {
     invitation: {
        code: string;
        createdAt: string;
        email: string;
        expiresAt: string;
        id: string;
        organisationId: string;
        redeemedAt: string | null;
        userId: string;
     };
  };
  Role: {
     createdAt: string;
     description: string | null;
     id: string;
     isDeleted: boolean;
     isSystemRole: boolean;
     name: string;
     organisationId: string;
     permissions: string[];
     updatedAt: string;
  };
  SuccessResponse: {
     data?: unknown;
     requestId?: string;
  };
  SyncSeatsResponse: {
     seats: {
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
           rotation?: number;
           x: number;
           y: number;
        };
        publicNotes?: string;
        row: string;
        section?: string;
        status: "available" | "blocked" | "accessible" | "held" | "removed";
     }[];
     seatsSynced: number;
     venueLayout?: unknown;
  };
  TicketPrice: {
     categoryId: string;
     currency: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
     price: number;
     typeId: string;
  };
  UpdateAccountResponse: {
     account: {
        createdAt: string;
        id: string;
        isDeleted: boolean;
        name: string;
        organisationId: string;
        status: "active" | "inactive";
        updatedAt: string;
     };
  };
  UpdateAreaResponse: {
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
  };
  UpdateCategoryResponse: {
     category: {
        color?: string;
        description?: string;
        displayOrder: number;
        id: string;
        name: string;
     };
     venueLayout?: unknown;
  };
  UpdateEventOccurrenceResponse: {
     eventOccurrence: {
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
     };
  };
  UpdateEventResponse: {
     event: {
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
     };
  };
  UpdateIdentityProviderRequest: {
     allowedClientIds?: string[];
     cacheTtl?: number;
     configuration?: {
      [key: string]: unknown;
     };
     emailDomain?: string | null;
     isDefault?: boolean;
     isEnabled?: boolean;
     scopes?: string[];
  };
  UpdateIdentityProviderResponse: {
     provider: {
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
     };
  };
  UpdateOrganisationRequest: {
     logoUrl?: string;
     metadata?: {
      [key: string]: unknown;
     };
     name?: string;
     primaryColor?: string;
     secondaryColor?: string;
  };
  UpdateOrganisationResponse: {
     organisation: {
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
     };
  };
  UpdatePriceSchemeResponse: {
     priceScheme: {
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
     };
  };
  UpdateRoleRequest: {
     description?: string;
     name?: string;
     permissions?: string[];
  };
  UpdateRoleResponse: {
     createdAt: string;
     description: string | null;
     id: string;
     isDeleted: boolean;
     isSystemRole: boolean;
     name: string;
     organisationId: string;
     permissions: string[];
     updatedAt: string;
  };
  UpdateSeatResponse: {
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
           rotation?: number;
           x: number;
           y: number;
        };
        publicNotes?: string;
        row: string;
        section?: string;
        status: "available" | "blocked" | "accessible" | "held" | "removed";
     };
     venueLayout?: unknown;
  };
  UpdateUserAccountRolesRequest: {
     accountId: string;
     roleIds: string[];
     userId: string;
  };
  UpdateUserAccountRolesResponse: {
     assignments: {
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
     }[];
  };
  UpdateVenueLayoutResponse: {
     venueLayout: {
        accountId: string;
        areas: unknown[];
        categories: unknown[];
        createdAt: string;
        createdBy?: string;
        decorations?: {
           id: string;
           label?: string;
           name?: string;
           position: {
              height: number;
              rotation?: number;
              width: number;
              x: number;
              y: number;
           };
           style?: {
              fill?: string;
              fontSize?: number;
              fontWeight?: string;
              stroke?: string;
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
        id: string;
        isDeleted: boolean;
        name: string;
        organisationId: string;
        status: "active" | "archived";
        tags: string[];
        totalCapacity: number;
        updatedAt: string;
        venueId: string;
     };
  };
  UpdateVenueResponse: {
     venue: {
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
     };
  };
  UserAccountRoleAssignment: {
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
  };
  UserInvitation: {
     code: string;
     createdAt: string;
     email: string;
     expiresAt: string;
     id: string;
     organisationId: string;
     redeemedAt: string | null;
     userId: string;
  };
  Venue: {
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
  };
  VenueLayout: {
     accountId: string;
     areas: unknown[];
     categories: unknown[];
     createdAt: string;
     createdBy?: string;
     decorations?: {
        id: string;
        label?: string;
        name?: string;
        position: {
           height: number;
           rotation?: number;
           width: number;
           x: number;
           y: number;
        };
        style?: {
           fill?: string;
           fontSize?: number;
           fontWeight?: string;
           stroke?: string;
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
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     status: "active" | "archived";
     tags: string[];
     totalCapacity: number;
     updatedAt: string;
     venueId: string;
  };
  VenueLayoutArea: {
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
  VenueLayoutCategory: {
     color?: string;
     description?: string;
     displayOrder: number;
     id: string;
     name: string;
  };
  VenueLayoutSeat: {
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
        rotation?: number;
        x: number;
        y: number;
     };
     publicNotes?: string;
     row: string;
     section?: string;
     status: "available" | "blocked" | "accessible" | "held" | "removed";
  };
};
```

Defined in: generated/types.ts:950

#### Account

```ts
Account: {
  createdAt: string;
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  status: "active" | "inactive";
  updatedAt: string;
};
```

##### Account.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### Account.id

```ts
id: string;
```

###### Example

```ts
acc_abc123
```

##### Account.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### Account.name

```ts
name: string;
```

###### Example

```ts
Main Account
```

##### Account.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### Account.status

```ts
status: "active" | "inactive";
```

###### Example

```ts
active
@enum {string}
```

##### Account.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

#### AddAreaResponse

```ts
AddAreaResponse: {
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
};
```

##### AddAreaResponse.area

```ts
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
```

##### AddAreaResponse.area.capacity

```ts
capacity: number;
```

###### Example

```ts
500
```

##### AddAreaResponse.area.color?

```ts
optional color: string;
```

###### Example

```ts
#FFD700
```

##### AddAreaResponse.area.description?

```ts
optional description: string;
```

###### Example

```ts
General admission area
```

##### AddAreaResponse.area.displayOrder

```ts
displayOrder: number;
```

###### Example

```ts
1
```

##### AddAreaResponse.area.id

```ts
id: string;
```

###### Example

```ts
vla_abc123
```

##### AddAreaResponse.area.name

```ts
name: string;
```

###### Example

```ts
Main Floor
```

##### AddAreaResponse.area.seats?

```ts
optional seats: unknown[];
```

###### Example

```ts
[]
```

##### AddAreaResponse.area.status

```ts
status: "active" | "inactive";
```

###### Example

```ts
active
@enum {string}
```

##### AddAreaResponse.area.type

```ts
type: "unallocated" | "allocated";
```

###### Example

```ts
unallocated
@enum {string}
```

##### AddAreaResponse.venueLayout?

```ts
optional venueLayout: unknown;
```

#### AddCategoryResponse

```ts
AddCategoryResponse: {
  category: {
     color?: string;
     description?: string;
     displayOrder: number;
     id: string;
     name: string;
  };
  venueLayout?: unknown;
};
```

##### AddCategoryResponse.category

```ts
category: {
  color?: string;
  description?: string;
  displayOrder: number;
  id: string;
  name: string;
};
```

##### AddCategoryResponse.category.color?

```ts
optional color: string;
```

###### Example

```ts
#FFD700
```

##### AddCategoryResponse.category.description?

```ts
optional description: string;
```

###### Example

```ts
Best seats in the house
```

##### AddCategoryResponse.category.displayOrder

```ts
displayOrder: number;
```

###### Example

```ts
1
```

##### AddCategoryResponse.category.id

```ts
id: string;
```

###### Example

```ts
vlc_abc123
```

##### AddCategoryResponse.category.name

```ts
name: string;
```

###### Example

```ts
Premium
```

##### AddCategoryResponse.venueLayout?

```ts
optional venueLayout: unknown;
```

#### AddSeatResponse

```ts
AddSeatResponse: {
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
        rotation?: number;
        x: number;
        y: number;
     };
     publicNotes?: string;
     row: string;
     section?: string;
     status: "available" | "blocked" | "accessible" | "held" | "removed";
  };
  venueLayout?: unknown;
};
```

##### AddSeatResponse.seat

```ts
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
     rotation?: number;
     x: number;
     y: number;
  };
  publicNotes?: string;
  row: string;
  section?: string;
  status: "available" | "blocked" | "accessible" | "held" | "removed";
};
```

##### AddSeatResponse.seat.attributes?

```ts
optional attributes: string[];
```

##### AddSeatResponse.seat.categoryId?

```ts
optional categoryId: string;
```

###### Example

```ts
vlc_premium
```

##### AddSeatResponse.seat.companionSeats?

```ts
optional companionSeats: string[];
```

##### AddSeatResponse.seat.companionTo?

```ts
optional companionTo: string;
```

##### AddSeatResponse.seat.holdType?

```ts
optional holdType: string;
```

##### AddSeatResponse.seat.id

```ts
id: string;
```

###### Example

```ts
vlas_abc123
```

##### AddSeatResponse.seat.internalNotes?

```ts
optional internalNotes: string;
```

##### AddSeatResponse.seat.label

```ts
label: string;
```

###### Example

```ts
Orchestra Center, Row A, Seat 15
```

##### AddSeatResponse.seat.number

```ts
number: string;
```

###### Example

```ts
15
```

##### AddSeatResponse.seat.position?

```ts
optional position: {
  rotation?: number;
  x: number;
  y: number;
};
```

##### AddSeatResponse.seat.position.rotation?

```ts
optional rotation: number;
```

##### AddSeatResponse.seat.position.x

```ts
x: number;
```

##### AddSeatResponse.seat.position.y

```ts
y: number;
```

##### AddSeatResponse.seat.publicNotes?

```ts
optional publicNotes: string;
```

##### AddSeatResponse.seat.row

```ts
row: string;
```

###### Example

```ts
A
```

##### AddSeatResponse.seat.section?

```ts
optional section: string;
```

###### Example

```ts
Orchestra Center
```

##### AddSeatResponse.seat.status

```ts
status: "available" | "blocked" | "accessible" | "held" | "removed";
```

###### Example

```ts
available
@enum {string}
```

##### AddSeatResponse.venueLayout?

```ts
optional venueLayout: unknown;
```

#### AssignRoleRequest

```ts
AssignRoleRequest: {
  accountId: string;
  roleId: string;
  userId: string;
};
```

##### AssignRoleRequest.accountId

```ts
accountId: string;
```

###### Description

Account ID

###### Example

```ts
acc_abc123
```

##### AssignRoleRequest.roleId

```ts
roleId: string;
```

###### Description

Role ID (can be a system role or custom role)

###### Example

```ts
rol_system_event_manager
```

##### AssignRoleRequest.userId

```ts
userId: string;
```

###### Description

User ID

###### Example

```ts
usr_abc123
```

#### AssignRoleResponse

```ts
AssignRoleResponse: {
  assignment: {
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
  };
};
```

##### AssignRoleResponse.assignment

```ts
assignment: {
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
};
```

##### AssignRoleResponse.assignment.account?

```ts
optional account: {
  id: string;
  name: string;
};
```

###### Description

Account details

##### AssignRoleResponse.assignment.account.id

```ts
id: string;
```

##### AssignRoleResponse.assignment.account.name

```ts
name: string;
```

##### AssignRoleResponse.assignment.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_xyz789
```

##### AssignRoleResponse.assignment.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### AssignRoleResponse.assignment.id

```ts
id: string;
```

###### Example

```ts
uar_abc123
```

##### AssignRoleResponse.assignment.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### AssignRoleResponse.assignment.role?

```ts
optional role: {
  id: string;
  isSystemRole: boolean;
  name: string;
};
```

###### Description

Role details

##### AssignRoleResponse.assignment.role.id

```ts
id: string;
```

##### AssignRoleResponse.assignment.role.isSystemRole

```ts
isSystemRole: boolean;
```

##### AssignRoleResponse.assignment.role.name

```ts
name: string;
```

##### AssignRoleResponse.assignment.roleId

```ts
roleId: string;
```

###### Example

```ts
rol_system_event_manager
```

##### AssignRoleResponse.assignment.user?

```ts
optional user: {
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
};
```

###### Description

User details

##### AssignRoleResponse.assignment.user.email

```ts
email: string;
```

##### AssignRoleResponse.assignment.user.firstName

```ts
firstName: string | null;
```

##### AssignRoleResponse.assignment.user.id

```ts
id: string;
```

##### AssignRoleResponse.assignment.user.lastName

```ts
lastName: string | null;
```

##### AssignRoleResponse.assignment.userId

```ts
userId: string;
```

###### Example

```ts
usr_abc123
```

#### BulkAddSeatsResponse

```ts
BulkAddSeatsResponse: {
  seatsAdded: number;
  venueLayout?: unknown;
};
```

##### BulkAddSeatsResponse.seatsAdded

```ts
seatsAdded: number;
```

###### Example

```ts
50
```

##### BulkAddSeatsResponse.venueLayout?

```ts
optional venueLayout: unknown;
```

#### CreateAccountResponse

```ts
CreateAccountResponse: {
  account: {
     createdAt: string;
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     status: "active" | "inactive";
     updatedAt: string;
  };
};
```

##### CreateAccountResponse.account

```ts
account: {
  createdAt: string;
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  status: "active" | "inactive";
  updatedAt: string;
};
```

##### CreateAccountResponse.account.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### CreateAccountResponse.account.id

```ts
id: string;
```

###### Example

```ts
acc_abc123
```

##### CreateAccountResponse.account.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### CreateAccountResponse.account.name

```ts
name: string;
```

###### Example

```ts
Main Account
```

##### CreateAccountResponse.account.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### CreateAccountResponse.account.status

```ts
status: "active" | "inactive";
```

###### Example

```ts
active
@enum {string}
```

##### CreateAccountResponse.account.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

#### CreateEventOccurrenceResponse

```ts
CreateEventOccurrenceResponse: {
  eventOccurrence: {
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
  };
};
```

##### CreateEventOccurrenceResponse.eventOccurrence

```ts
eventOccurrence: {
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
};
```

##### CreateEventOccurrenceResponse.eventOccurrence.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### CreateEventOccurrenceResponse.eventOccurrence.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### CreateEventOccurrenceResponse.eventOccurrence.endDate

```ts
endDate: string;
```

###### Example

```ts
2025-06-15T00:00:00Z
```

##### CreateEventOccurrenceResponse.eventOccurrence.endTime

```ts
endTime: string;
```

###### Example

```ts
23:00:00
```

##### CreateEventOccurrenceResponse.eventOccurrence.eventId

```ts
eventId: string;
```

###### Example

```ts
evt_ghi789
```

##### CreateEventOccurrenceResponse.eventOccurrence.id

```ts
id: string;
```

###### Example

```ts
eoc_abc123
```

##### CreateEventOccurrenceResponse.eventOccurrence.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### CreateEventOccurrenceResponse.eventOccurrence.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### CreateEventOccurrenceResponse.eventOccurrence.startDate

```ts
startDate: string;
```

###### Example

```ts
2025-06-15T00:00:00Z
```

##### CreateEventOccurrenceResponse.eventOccurrence.startTime

```ts
startTime: string;
```

###### Example

```ts
19:00:00
```

##### CreateEventOccurrenceResponse.eventOccurrence.status

```ts
status: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
```

###### Example

```ts
draft
@enum {string}
```

##### CreateEventOccurrenceResponse.eventOccurrence.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### CreateEventOccurrenceResponse.eventOccurrence.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### CreateEventOccurrenceResponse.eventOccurrence.venueId?

```ts
optional venueId: string;
```

###### Example

```ts
vnu_abc123
```

#### CreateEventResponse

```ts
CreateEventResponse: {
  event: {
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
  };
};
```

##### CreateEventResponse.event

```ts
event: {
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
};
```

##### CreateEventResponse.event.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### CreateEventResponse.event.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### CreateEventResponse.event.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### CreateEventResponse.event.description?

```ts
optional description: string;
```

###### Example

```ts
A three-day music festival
```

##### CreateEventResponse.event.id

```ts
id: string;
```

###### Example

```ts
evt_abc123
```

##### CreateEventResponse.event.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### CreateEventResponse.event.name

```ts
name: string;
```

###### Example

```ts
Summer Music Festival
```

##### CreateEventResponse.event.occurrenceCount

```ts
occurrenceCount: number;
```

###### Example

```ts
3
```

##### CreateEventResponse.event.offSaleDate?

```ts
optional offSaleDate: string;
```

###### Example

```ts
2025-06-15T23:59:59Z
```

##### CreateEventResponse.event.onSaleDate?

```ts
optional onSaleDate: string;
```

###### Example

```ts
2025-06-01T09:00:00Z
```

##### CreateEventResponse.event.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### CreateEventResponse.event.productCount

```ts
productCount: number;
```

###### Example

```ts
0
```

##### CreateEventResponse.event.status

```ts
status: 
  | "draft"
  | "published"
  | "on_sale"
  | "sold_out"
  | "completed"
  | "cancelled";
```

###### Example

```ts
draft
@enum {string}
```

##### CreateEventResponse.event.tags

```ts
tags: string[];
```

###### Example

```ts
[
      "music",
      "festival"
    ]
```

##### CreateEventResponse.event.ticketCount

```ts
ticketCount: number;
```

###### Example

```ts
0
```

##### CreateEventResponse.event.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### CreateEventResponse.event.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### CreateEventResponse.event.venueId?

```ts
optional venueId: string;
```

###### Example

```ts
vnu_ghi789
```

#### CreatePriceSchemeResponse

```ts
CreatePriceSchemeResponse: {
  priceScheme: {
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
  };
};
```

##### CreatePriceSchemeResponse.priceScheme

```ts
priceScheme: {
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
};
```

##### CreatePriceSchemeResponse.priceScheme.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### CreatePriceSchemeResponse.priceScheme.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### CreatePriceSchemeResponse.priceScheme.description?

```ts
optional description: string;
```

###### Example

```ts
Default pricing for all shows
```

##### CreatePriceSchemeResponse.priceScheme.eventId

```ts
eventId: string;
```

###### Example

```ts
evt_ghi789
```

##### CreatePriceSchemeResponse.priceScheme.id

```ts
id: string;
```

###### Example

```ts
tps_abc123
```

##### CreatePriceSchemeResponse.priceScheme.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### CreatePriceSchemeResponse.priceScheme.name

```ts
name: string;
```

###### Example

```ts
Standard Pricing
```

##### CreatePriceSchemeResponse.priceScheme.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### CreatePriceSchemeResponse.priceScheme.parentPriceSchemeId?

```ts
optional parentPriceSchemeId: string;
```

###### Example

```ts
tps_parent123
```

##### CreatePriceSchemeResponse.priceScheme.status

```ts
status: "active" | "draft" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### CreatePriceSchemeResponse.priceScheme.ticketPrices

```ts
ticketPrices: {
  categoryId: string;
  currency: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
  price: number;
  typeId: string;
}[];
```

###### Description

Price matrix entries

##### CreatePriceSchemeResponse.priceScheme.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

#### CreateRoleRequest

```ts
CreateRoleRequest: {
  description?: string;
  name: string;
  permissions: string[];
};
```

##### CreateRoleRequest.description?

```ts
optional description: string;
```

###### Description

Optional description of the role

###### Example

```ts
Manages events and related resources
```

##### CreateRoleRequest.name

```ts
name: string;
```

###### Description

The name of the role

###### Example

```ts
Event Manager
```

##### CreateRoleRequest.permissions

```ts
permissions: string[];
```

###### Description

Array of permission strings

###### Example

```ts
[
      "events.*",
      "venues.read:all",
      "orders.read"
    ]
```

#### CreateRoleResponse

```ts
CreateRoleResponse: {
  createdAt: string;
  description: string | null;
  id: string;
  isDeleted: boolean;
  isSystemRole: boolean;
  name: string;
  organisationId: string;
  permissions: string[];
  updatedAt: string;
};
```

##### CreateRoleResponse.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### CreateRoleResponse.description

```ts
description: string | null;
```

###### Example

```ts
Manages events and related resources
```

##### CreateRoleResponse.id

```ts
id: string;
```

###### Example

```ts
rol_abc123
```

##### CreateRoleResponse.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### CreateRoleResponse.isSystemRole

```ts
isSystemRole: boolean;
```

###### Description

Whether this is a system-defined role (cannot be modified or deleted)

###### Example

```ts
false
```

##### CreateRoleResponse.name

```ts
name: string;
```

###### Example

```ts
Event Manager
```

##### CreateRoleResponse.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### CreateRoleResponse.permissions

```ts
permissions: string[];
```

###### Description

Array of permission strings in format resource.action:scope

###### Example

```ts
[
      "events.*",
      "venues.read:all",
      "orders.read"
    ]
```

##### CreateRoleResponse.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

#### CreateUserInvitationRequest

```ts
CreateUserInvitationRequest: {
  email: string;
  firstName?: string;
  lastName?: string;
  organisationId: string;
  roleIds?: string[];
};
```

##### CreateUserInvitationRequest.email

```ts
email: string;
```

Format: email

###### Example

```ts
newuser@example.com
```

##### CreateUserInvitationRequest.firstName?

```ts
optional firstName: string;
```

###### Example

```ts
John
```

##### CreateUserInvitationRequest.lastName?

```ts
optional lastName: string;
```

###### Example

```ts
Doe
```

##### CreateUserInvitationRequest.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### CreateUserInvitationRequest.roleIds?

```ts
optional roleIds: string[];
```

###### Example

```ts
[
      "rol_admin123"
    ]
```

#### CreateUserInvitationResponse

```ts
CreateUserInvitationResponse: {
  invitation: {
     code: string;
     createdAt: string;
     email: string;
     expiresAt: string;
     id: string;
     organisationId: string;
     redeemedAt: string | null;
     userId: string;
  };
};
```

##### CreateUserInvitationResponse.invitation

```ts
invitation: {
  code: string;
  createdAt: string;
  email: string;
  expiresAt: string;
  id: string;
  organisationId: string;
  redeemedAt: string | null;
  userId: string;
};
```

##### CreateUserInvitationResponse.invitation.code

```ts
code: string;
```

###### Example

```ts
inv_BvQ8mK...
```

##### CreateUserInvitationResponse.invitation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-01T00:00:00.000Z
```

##### CreateUserInvitationResponse.invitation.email

```ts
email: string;
```

Format: email

###### Example

```ts
newuser@example.com
```

##### CreateUserInvitationResponse.invitation.expiresAt

```ts
expiresAt: string;
```

###### Example

```ts
2024-01-08T00:00:00.000Z
```

##### CreateUserInvitationResponse.invitation.id

```ts
id: string;
```

###### Example

```ts
inv_abc123
```

##### CreateUserInvitationResponse.invitation.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### CreateUserInvitationResponse.invitation.redeemedAt

```ts
redeemedAt: string | null;
```

###### Example

```ts
null
```

##### CreateUserInvitationResponse.invitation.userId

```ts
userId: string;
```

###### Example

```ts
usr_pending123
```

#### CreateVenueLayoutResponse

```ts
CreateVenueLayoutResponse: {
  venueLayout: {
     accountId: string;
     areas: unknown[];
     categories: unknown[];
     createdAt: string;
     createdBy?: string;
     decorations?: {
        id: string;
        label?: string;
        name?: string;
        position: {
           height: number;
           rotation?: number;
           width: number;
           x: number;
           y: number;
        };
        style?: {
           fill?: string;
           fontSize?: number;
           fontWeight?: string;
           stroke?: string;
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
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     status: "active" | "archived";
     tags: string[];
     totalCapacity: number;
     updatedAt: string;
     venueId: string;
  };
};
```

##### CreateVenueLayoutResponse.venueLayout

```ts
venueLayout: {
  accountId: string;
  areas: unknown[];
  categories: unknown[];
  createdAt: string;
  createdBy?: string;
  decorations?: {
     id: string;
     label?: string;
     name?: string;
     position: {
        height: number;
        rotation?: number;
        width: number;
        x: number;
        y: number;
     };
     style?: {
        fill?: string;
        fontSize?: number;
        fontWeight?: string;
        stroke?: string;
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
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  status: "active" | "archived";
  tags: string[];
  totalCapacity: number;
  updatedAt: string;
  venueId: string;
};
```

##### CreateVenueLayoutResponse.venueLayout.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_ghi012
```

##### CreateVenueLayoutResponse.venueLayout.areas

```ts
areas: unknown[];
```

###### Example

```ts
[]
```

##### CreateVenueLayoutResponse.venueLayout.categories

```ts
categories: unknown[];
```

###### Example

```ts
[]
```

##### CreateVenueLayoutResponse.venueLayout.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### CreateVenueLayoutResponse.venueLayout.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### CreateVenueLayoutResponse.venueLayout.decorations?

```ts
optional decorations: {
  id: string;
  label?: string;
  name?: string;
  position: {
     height: number;
     rotation?: number;
     width: number;
     x: number;
     y: number;
  };
  style?: {
     fill?: string;
     fontSize?: number;
     fontWeight?: string;
     stroke?: string;
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
```

###### Example

```ts
[]
```

##### CreateVenueLayoutResponse.venueLayout.description?

```ts
optional description: string;
```

###### Example

```ts
Standard theatre configuration
```

##### CreateVenueLayoutResponse.venueLayout.id

```ts
id: string;
```

###### Example

```ts
vlt_abc123
```

##### CreateVenueLayoutResponse.venueLayout.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### CreateVenueLayoutResponse.venueLayout.name

```ts
name: string;
```

###### Example

```ts
Theatre Mode
```

##### CreateVenueLayoutResponse.venueLayout.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### CreateVenueLayoutResponse.venueLayout.status

```ts
status: "active" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### CreateVenueLayoutResponse.venueLayout.tags

```ts
tags: string[];
```

###### Example

```ts
[
      "theatre",
      "seated"
    ]
```

##### CreateVenueLayoutResponse.venueLayout.totalCapacity

```ts
totalCapacity: number;
```

###### Example

```ts
1500
```

##### CreateVenueLayoutResponse.venueLayout.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### CreateVenueLayoutResponse.venueLayout.venueId

```ts
venueId: string;
```

###### Example

```ts
vnu_def456
```

#### CreateVenueResponse

```ts
CreateVenueResponse: {
  venue: {
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
  };
};
```

##### CreateVenueResponse.venue

```ts
venue: {
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
};
```

##### CreateVenueResponse.venue.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### CreateVenueResponse.venue.coordinates?

```ts
optional coordinates: {
  coordinates: [number, number];
  type: "Point";
};
```

##### CreateVenueResponse.venue.coordinates.coordinates

```ts
coordinates: [number, number];
```

###### Example

```ts
[
      -0.1278,
      51.5074
    ]
```

##### CreateVenueResponse.venue.coordinates.type

```ts
type: "Point";
```

###### Example

```ts
Point
@enum {string}
```

##### CreateVenueResponse.venue.country?

```ts
optional country: string;
```

###### Example

```ts
United Kingdom
```

##### CreateVenueResponse.venue.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### CreateVenueResponse.venue.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### CreateVenueResponse.venue.description?

```ts
optional description: string;
```

###### Example

```ts
Historic concert hall in London
```

##### CreateVenueResponse.venue.email?

```ts
optional email: string;
```

###### Example

```ts
info@royalalberthall.com
```

##### CreateVenueResponse.venue.features

```ts
features: string[];
```

###### Example

```ts
[
      "parking",
      "wheelchair_accessible",
      "bar"
    ]
```

##### CreateVenueResponse.venue.id

```ts
id: string;
```

###### Example

```ts
vnu_abc123
```

##### CreateVenueResponse.venue.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### CreateVenueResponse.venue.name

```ts
name: string;
```

###### Example

```ts
Royal Albert Hall
```

##### CreateVenueResponse.venue.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### CreateVenueResponse.venue.phone?

```ts
optional phone: string;
```

###### Example

```ts
+44 20 7589 8212
```

##### CreateVenueResponse.venue.status

```ts
status: "active" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### CreateVenueResponse.venue.streetAddress?

```ts
optional streetAddress: string;
```

###### Example

```ts
Kensington Gore
```

##### CreateVenueResponse.venue.tags

```ts
tags: string[];
```

###### Example

```ts
[
      "concert-hall",
      "historic"
    ]
```

##### CreateVenueResponse.venue.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### CreateVenueResponse.venue.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### CreateVenueResponse.venue.website?

```ts
optional website: string;
```

###### Example

```ts
https://www.royalalberthall.com
```

#### Decoration

```ts
Decoration: {
  id: string;
  label?: string;
  name?: string;
  position: {
     height: number;
     rotation?: number;
     width: number;
     x: number;
     y: number;
  };
  style?: {
     fill?: string;
     fontSize?: number;
     fontWeight?: string;
     stroke?: string;
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
};
```

##### Decoration.id

```ts
id: string;
```

###### Example

```ts
vld_abc123
```

##### Decoration.label?

```ts
optional label: string;
```

###### Example

```ts
STAGE
```

##### Decoration.name?

```ts
optional name: string;
```

###### Example

```ts
Main Stage
```

##### Decoration.position

```ts
position: {
  height: number;
  rotation?: number;
  width: number;
  x: number;
  y: number;
};
```

##### Decoration.position.height

```ts
height: number;
```

###### Example

```ts
80
```

##### Decoration.position.rotation?

```ts
optional rotation: number;
```

###### Example

```ts
0
```

##### Decoration.position.width

```ts
width: number;
```

###### Example

```ts
300
```

##### Decoration.position.x

```ts
x: number;
```

###### Example

```ts
100
```

##### Decoration.position.y

```ts
y: number;
```

###### Example

```ts
50
```

##### Decoration.style?

```ts
optional style: {
  fill?: string;
  fontSize?: number;
  fontWeight?: string;
  stroke?: string;
};
```

##### Decoration.style.fill?

```ts
optional fill: string;
```

###### Example

```ts
#1f2937
```

##### Decoration.style.fontSize?

```ts
optional fontSize: number;
```

###### Example

```ts
14
```

##### Decoration.style.fontWeight?

```ts
optional fontWeight: string;
```

###### Example

```ts
bold
```

##### Decoration.style.stroke?

```ts
optional stroke: string;
```

###### Example

```ts
#111827
```

##### Decoration.type

```ts
type: 
  | "stage"
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
```

###### Example

```ts
stage
@enum {string}
```

#### DeleteAccountResponse

```ts
DeleteAccountResponse: {
  id: string;
  success: boolean;
};
```

##### DeleteAccountResponse.id

```ts
id: string;
```

###### Example

```ts
acc_abc123
```

##### DeleteAccountResponse.success

```ts
success: boolean;
```

###### Example

```ts
true
```

#### DeleteAreaResponse

```ts
DeleteAreaResponse: {
  success: boolean;
  venueLayout?: unknown;
};
```

##### DeleteAreaResponse.success

```ts
success: boolean;
```

###### Example

```ts
true
```

##### DeleteAreaResponse.venueLayout?

```ts
optional venueLayout: unknown;
```

#### DeleteCategoryResponse

```ts
DeleteCategoryResponse: {
  success: boolean;
  venueLayout?: unknown;
};
```

##### DeleteCategoryResponse.success

```ts
success: boolean;
```

###### Example

```ts
true
```

##### DeleteCategoryResponse.venueLayout?

```ts
optional venueLayout: unknown;
```

#### DeleteEventOccurrenceResponse

```ts
DeleteEventOccurrenceResponse: {
  id: string;
  success: boolean;
};
```

##### DeleteEventOccurrenceResponse.id

```ts
id: string;
```

###### Example

```ts
evoc_abc123
```

##### DeleteEventOccurrenceResponse.success

```ts
success: boolean;
```

###### Example

```ts
true
```

#### DeleteEventResponse

```ts
DeleteEventResponse: {
  id: string;
  success: boolean;
};
```

##### DeleteEventResponse.id

```ts
id: string;
```

###### Example

```ts
evt_abc123
```

##### DeleteEventResponse.success

```ts
success: boolean;
```

###### Example

```ts
true
```

#### DeletePriceSchemeResponse

```ts
DeletePriceSchemeResponse: {
  id: string;
  success: boolean;
};
```

##### DeletePriceSchemeResponse.id

```ts
id: string;
```

###### Example

```ts
tps_abc123
```

##### DeletePriceSchemeResponse.success

```ts
success: boolean;
```

###### Example

```ts
true
```

#### DeleteRoleResponse

```ts
DeleteRoleResponse: {
  id: string;
  success: boolean;
};
```

##### DeleteRoleResponse.id

```ts
id: string;
```

###### Example

```ts
rol_abc123
```

##### DeleteRoleResponse.success

```ts
success: boolean;
```

###### Example

```ts
true
```

#### DeleteSeatResponse

```ts
DeleteSeatResponse: {
  success: boolean;
  venueLayout?: unknown;
};
```

##### DeleteSeatResponse.success

```ts
success: boolean;
```

###### Example

```ts
true
```

##### DeleteSeatResponse.venueLayout?

```ts
optional venueLayout: unknown;
```

#### DeleteUserInvitationResponse

```ts
DeleteUserInvitationResponse: {
  id: string;
  success: boolean;
};
```

##### DeleteUserInvitationResponse.id

```ts
id: string;
```

###### Example

```ts
inv_abc123
```

##### DeleteUserInvitationResponse.success

```ts
success: boolean;
```

###### Example

```ts
true
```

#### DeleteVenueLayoutResponse

```ts
DeleteVenueLayoutResponse: {
  id: string;
  success: boolean;
};
```

##### DeleteVenueLayoutResponse.id

```ts
id: string;
```

###### Example

```ts
vnl_abc123
```

##### DeleteVenueLayoutResponse.success

```ts
success: boolean;
```

###### Example

```ts
true
```

#### DeleteVenueResponse

```ts
DeleteVenueResponse: {
  id: string;
  success: boolean;
};
```

##### DeleteVenueResponse.id

```ts
id: string;
```

###### Example

```ts
vnu_abc123
```

##### DeleteVenueResponse.success

```ts
success: boolean;
```

###### Example

```ts
true
```

#### ErrorResponse

```ts
ErrorResponse: {
  code: string;
  details?: unknown;
  error: string;
  requestId?: string;
};
```

##### ErrorResponse.code

```ts
code: string;
```

##### ErrorResponse.details?

```ts
optional details: unknown;
```

##### ErrorResponse.error

```ts
error: string;
```

##### ErrorResponse.requestId?

```ts
optional requestId: string;
```

#### Event

```ts
Event: {
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
};
```

##### Event.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### Event.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### Event.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### Event.description?

```ts
optional description: string;
```

###### Example

```ts
A three-day music festival
```

##### Event.id

```ts
id: string;
```

###### Example

```ts
evt_abc123
```

##### Event.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### Event.name

```ts
name: string;
```

###### Example

```ts
Summer Music Festival
```

##### Event.occurrenceCount

```ts
occurrenceCount: number;
```

###### Example

```ts
3
```

##### Event.offSaleDate?

```ts
optional offSaleDate: string;
```

###### Example

```ts
2025-06-15T23:59:59Z
```

##### Event.onSaleDate?

```ts
optional onSaleDate: string;
```

###### Example

```ts
2025-06-01T09:00:00Z
```

##### Event.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### Event.productCount

```ts
productCount: number;
```

###### Example

```ts
0
```

##### Event.status

```ts
status: 
  | "draft"
  | "published"
  | "on_sale"
  | "sold_out"
  | "completed"
  | "cancelled";
```

###### Example

```ts
draft
@enum {string}
```

##### Event.tags

```ts
tags: string[];
```

###### Example

```ts
[
      "music",
      "festival"
    ]
```

##### Event.ticketCount

```ts
ticketCount: number;
```

###### Example

```ts
0
```

##### Event.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### Event.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### Event.venueId?

```ts
optional venueId: string;
```

###### Example

```ts
vnu_ghi789
```

#### EventOccurrence

```ts
EventOccurrence: {
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
};
```

##### EventOccurrence.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### EventOccurrence.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### EventOccurrence.endDate

```ts
endDate: string;
```

###### Example

```ts
2025-06-15T00:00:00Z
```

##### EventOccurrence.endTime

```ts
endTime: string;
```

###### Example

```ts
23:00:00
```

##### EventOccurrence.eventId

```ts
eventId: string;
```

###### Example

```ts
evt_ghi789
```

##### EventOccurrence.id

```ts
id: string;
```

###### Example

```ts
eoc_abc123
```

##### EventOccurrence.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### EventOccurrence.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### EventOccurrence.startDate

```ts
startDate: string;
```

###### Example

```ts
2025-06-15T00:00:00Z
```

##### EventOccurrence.startTime

```ts
startTime: string;
```

###### Example

```ts
19:00:00
```

##### EventOccurrence.status

```ts
status: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
```

###### Example

```ts
draft
@enum {string}
```

##### EventOccurrence.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### EventOccurrence.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### EventOccurrence.venueId?

```ts
optional venueId: string;
```

###### Example

```ts
vnu_abc123
```

#### FederateRequest

```ts
FederateRequest: {
  token: string;
};
```

##### FederateRequest.token

```ts
token: string;
```

###### Description

Stagedoor JWT token to federate

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### GenerateSeatsResponse

```ts
GenerateSeatsResponse: {
  seats: {
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
        rotation?: number;
        x: number;
        y: number;
     };
     publicNotes?: string;
     row: string;
     section?: string;
     status: "available" | "blocked" | "accessible" | "held" | "removed";
  }[];
  seatsGenerated: number;
  venueLayout?: unknown;
};
```

##### GenerateSeatsResponse.seats

```ts
seats: {
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
     rotation?: number;
     x: number;
     y: number;
  };
  publicNotes?: string;
  row: string;
  section?: string;
  status: "available" | "blocked" | "accessible" | "held" | "removed";
}[];
```

##### GenerateSeatsResponse.seatsGenerated

```ts
seatsGenerated: number;
```

###### Example

```ts
200
```

##### GenerateSeatsResponse.venueLayout?

```ts
optional venueLayout: unknown;
```

#### GeoJSONPoint

```ts
GeoJSONPoint: {
  coordinates: [number, number];
  type: "Point";
};
```

##### GeoJSONPoint.coordinates

```ts
coordinates: [number, number];
```

###### Example

```ts
[
      -0.1278,
      51.5074
    ]
```

##### GeoJSONPoint.type

```ts
type: "Point";
```

###### Example

```ts
Point
@enum {string}
```

#### GetAccountResponse

```ts
GetAccountResponse: {
  account: {
     createdAt: string;
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     status: "active" | "inactive";
     updatedAt: string;
  };
};
```

##### GetAccountResponse.account

```ts
account: {
  createdAt: string;
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  status: "active" | "inactive";
  updatedAt: string;
};
```

##### GetAccountResponse.account.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### GetAccountResponse.account.id

```ts
id: string;
```

###### Example

```ts
acc_abc123
```

##### GetAccountResponse.account.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### GetAccountResponse.account.name

```ts
name: string;
```

###### Example

```ts
Main Account
```

##### GetAccountResponse.account.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### GetAccountResponse.account.status

```ts
status: "active" | "inactive";
```

###### Example

```ts
active
@enum {string}
```

##### GetAccountResponse.account.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

#### GetEventOccurrenceResponse

```ts
GetEventOccurrenceResponse: {
  eventOccurrence: {
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
  };
};
```

##### GetEventOccurrenceResponse.eventOccurrence

```ts
eventOccurrence: {
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
};
```

##### GetEventOccurrenceResponse.eventOccurrence.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### GetEventOccurrenceResponse.eventOccurrence.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### GetEventOccurrenceResponse.eventOccurrence.endDate

```ts
endDate: string;
```

###### Example

```ts
2025-06-15T00:00:00Z
```

##### GetEventOccurrenceResponse.eventOccurrence.endTime

```ts
endTime: string;
```

###### Example

```ts
23:00:00
```

##### GetEventOccurrenceResponse.eventOccurrence.eventId

```ts
eventId: string;
```

###### Example

```ts
evt_ghi789
```

##### GetEventOccurrenceResponse.eventOccurrence.id

```ts
id: string;
```

###### Example

```ts
eoc_abc123
```

##### GetEventOccurrenceResponse.eventOccurrence.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### GetEventOccurrenceResponse.eventOccurrence.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### GetEventOccurrenceResponse.eventOccurrence.startDate

```ts
startDate: string;
```

###### Example

```ts
2025-06-15T00:00:00Z
```

##### GetEventOccurrenceResponse.eventOccurrence.startTime

```ts
startTime: string;
```

###### Example

```ts
19:00:00
```

##### GetEventOccurrenceResponse.eventOccurrence.status

```ts
status: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
```

###### Example

```ts
draft
@enum {string}
```

##### GetEventOccurrenceResponse.eventOccurrence.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### GetEventOccurrenceResponse.eventOccurrence.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### GetEventOccurrenceResponse.eventOccurrence.venueId?

```ts
optional venueId: string;
```

###### Example

```ts
vnu_abc123
```

#### GetEventResponse

```ts
GetEventResponse: {
  event: {
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
  };
};
```

##### GetEventResponse.event

```ts
event: {
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
};
```

##### GetEventResponse.event.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### GetEventResponse.event.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### GetEventResponse.event.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### GetEventResponse.event.description?

```ts
optional description: string;
```

###### Example

```ts
A three-day music festival
```

##### GetEventResponse.event.id

```ts
id: string;
```

###### Example

```ts
evt_abc123
```

##### GetEventResponse.event.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### GetEventResponse.event.name

```ts
name: string;
```

###### Example

```ts
Summer Music Festival
```

##### GetEventResponse.event.occurrenceCount

```ts
occurrenceCount: number;
```

###### Example

```ts
3
```

##### GetEventResponse.event.offSaleDate?

```ts
optional offSaleDate: string;
```

###### Example

```ts
2025-06-15T23:59:59Z
```

##### GetEventResponse.event.onSaleDate?

```ts
optional onSaleDate: string;
```

###### Example

```ts
2025-06-01T09:00:00Z
```

##### GetEventResponse.event.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### GetEventResponse.event.productCount

```ts
productCount: number;
```

###### Example

```ts
0
```

##### GetEventResponse.event.status

```ts
status: 
  | "draft"
  | "published"
  | "on_sale"
  | "sold_out"
  | "completed"
  | "cancelled";
```

###### Example

```ts
draft
@enum {string}
```

##### GetEventResponse.event.tags

```ts
tags: string[];
```

###### Example

```ts
[
      "music",
      "festival"
    ]
```

##### GetEventResponse.event.ticketCount

```ts
ticketCount: number;
```

###### Example

```ts
0
```

##### GetEventResponse.event.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### GetEventResponse.event.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### GetEventResponse.event.venueId?

```ts
optional venueId: string;
```

###### Example

```ts
vnu_ghi789
```

#### GetIdentityProviderResponse

```ts
GetIdentityProviderResponse: {
  provider: {
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
  };
};
```

##### GetIdentityProviderResponse.provider

```ts
provider: {
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
};
```

##### GetIdentityProviderResponse.provider.allowedClientIds

```ts
allowedClientIds: string[];
```

###### Example

```ts
[
      "backstage-app",
      "backstage-boxoffice"
    ]
```

##### GetIdentityProviderResponse.provider.authorizationEndpoint

```ts
authorizationEndpoint: string | null;
```

###### Example

```ts
https://stagedoor.example.com/api/oauth/authorize
```

##### GetIdentityProviderResponse.provider.cacheTtl

```ts
cacheTtl: number;
```

###### Example

```ts
300
```

##### GetIdentityProviderResponse.provider.clientId

```ts
clientId: string | null;
```

###### Example

```ts
backstage-app
```

##### GetIdentityProviderResponse.provider.configuration

```ts
configuration: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{}
```

##### GetIdentityProviderResponse.provider.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-01T00:00:00.000Z
```

##### GetIdentityProviderResponse.provider.emailDomain

```ts
emailDomain: string | null;
```

###### Example

```ts
@example.com
```

##### GetIdentityProviderResponse.provider.id

```ts
id: string;
```

###### Example

```ts
stagedoor-idp
```

##### GetIdentityProviderResponse.provider.isDefault

```ts
isDefault: boolean;
```

###### Example

```ts
true
```

##### GetIdentityProviderResponse.provider.isEnabled

```ts
isEnabled: boolean;
```

###### Example

```ts
true
```

##### GetIdentityProviderResponse.provider.issuer

```ts
issuer: string;
```

###### Example

```ts
https://stagedoor.example.com
```

##### GetIdentityProviderResponse.provider.jwksUri

```ts
jwksUri: string;
```

###### Example

```ts
https://stagedoor.example.com/.well-known/jwks.json
```

##### GetIdentityProviderResponse.provider.jwksUriInternal

```ts
jwksUriInternal: string | null;
```

###### Example

```ts
http://stagedoor:3000/.well-known/jwks.json
```

##### GetIdentityProviderResponse.provider.organisationId

```ts
organisationId: string | null;
```

###### Example

```ts
org_abc123
```

##### GetIdentityProviderResponse.provider.providerType

```ts
providerType: string;
```

###### Example

```ts
stagedoor
```

##### GetIdentityProviderResponse.provider.scopes

```ts
scopes: string[];
```

###### Example

```ts
[
      "openid",
      "profile",
      "email"
    ]
```

##### GetIdentityProviderResponse.provider.supportsPkce

```ts
supportsPkce: boolean;
```

###### Example

```ts
true
```

##### GetIdentityProviderResponse.provider.tokenEndpoint

```ts
tokenEndpoint: string | null;
```

###### Example

```ts
https://stagedoor.example.com/api/oauth/token
```

##### GetIdentityProviderResponse.provider.tokenEndpointInternal

```ts
tokenEndpointInternal: string | null;
```

###### Example

```ts
http://stagedoor:3000/api/oauth/token
```

##### GetIdentityProviderResponse.provider.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-01T00:00:00.000Z
```

##### GetIdentityProviderResponse.provider.userinfoEndpoint

```ts
userinfoEndpoint: string | null;
```

###### Example

```ts
https://stagedoor.example.com/api/oauth/userinfo
```

##### GetIdentityProviderResponse.provider.userinfoEndpointInternal

```ts
userinfoEndpointInternal: string | null;
```

###### Example

```ts
http://stagedoor:3000/api/oauth/userinfo
```

#### GetMeOrganisationsResponse

```ts
GetMeOrganisationsResponse: {
  organisations: {
     id: string;
     logoUrl?: string;
     name: string;
     primaryColor?: string;
     secondaryColor?: string;
     userId: string;
  }[];
};
```

##### GetMeOrganisationsResponse.organisations

```ts
organisations: {
  id: string;
  logoUrl?: string;
  name: string;
  primaryColor?: string;
  secondaryColor?: string;
  userId: string;
}[];
```

#### GetMePermissionsResponse

```ts
GetMePermissionsResponse: {
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
};
```

##### GetMePermissionsResponse.filters

```ts
filters: {
  action: string | null;
  resource: string | null;
};
```

##### GetMePermissionsResponse.filters.action

```ts
action: string | null;
```

###### Example

```ts
create
```

##### GetMePermissionsResponse.filters.resource

```ts
resource: string | null;
```

###### Example

```ts
events
```

##### GetMePermissionsResponse.isOrgAdmin

```ts
isOrgAdmin: boolean;
```

###### Example

```ts
true
```

##### GetMePermissionsResponse.permissions

```ts
permissions: {
  accounts: string[];
  isAllAccounts: boolean;
  permission: string;
}[];
```

#### GetMeResponse

```ts
GetMeResponse: {
  user: {
     email: string;
     externalUserId?: string;
     firstName?: string;
     id: string;
     identityProvider?: string;
     lastName?: string;
  };
};
```

##### GetMeResponse.user

```ts
user: {
  email: string;
  externalUserId?: string;
  firstName?: string;
  id: string;
  identityProvider?: string;
  lastName?: string;
};
```

##### GetMeResponse.user.email

```ts
email: string;
```

Format: email

###### Example

```ts
user@example.com
```

##### GetMeResponse.user.externalUserId?

```ts
optional externalUserId: string;
```

###### Example

```ts
stagedoor-user-123
```

##### GetMeResponse.user.firstName?

```ts
optional firstName: string;
```

###### Example

```ts
John
```

##### GetMeResponse.user.id

```ts
id: string;
```

###### Example

```ts
usr_abc123
```

##### GetMeResponse.user.identityProvider?

```ts
optional identityProvider: string;
```

###### Example

```ts
stagedoor
```

##### GetMeResponse.user.lastName?

```ts
optional lastName: string;
```

###### Example

```ts
Doe
```

#### GetMeRolesResponse

```ts
GetMeRolesResponse: {
  isOrgAdmin: boolean;
  roles: {
     accountId: string;
     description: string | null;
     id: string;
     isSystemRole: boolean;
     name: string | null;
  }[];
};
```

##### GetMeRolesResponse.isOrgAdmin

```ts
isOrgAdmin: boolean;
```

###### Description

Whether the user has org-wide admin access

###### Example

```ts
true
```

##### GetMeRolesResponse.roles

```ts
roles: {
  accountId: string;
  description: string | null;
  id: string;
  isSystemRole: boolean;
  name: string | null;
}[];
```

#### GetOrganisationResponse

```ts
GetOrganisationResponse: {
  organisation: {
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
  };
};
```

##### GetOrganisationResponse.organisation

```ts
organisation: {
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
};
```

##### GetOrganisationResponse.organisation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### GetOrganisationResponse.organisation.id

```ts
id: string;
```

###### Example

```ts
org_xyz789
```

##### GetOrganisationResponse.organisation.logoUrl?

```ts
optional logoUrl: string;
```

###### Example

```ts
https://example.com/logo.png
```

##### GetOrganisationResponse.organisation.metadata?

```ts
optional metadata: {
[key: string]: unknown;
};
```

###### Index Signature

```ts
[key: string]: unknown
```

###### Example

```ts
{
             *       "industry": "Technology",
             *       "size": "Medium"
             *     }
```

##### GetOrganisationResponse.organisation.name

```ts
name: string;
```

###### Example

```ts
Acme Corporation
```

##### GetOrganisationResponse.organisation.primaryColor?

```ts
optional primaryColor: string;
```

###### Example

```ts
#FF5733
```

##### GetOrganisationResponse.organisation.secondaryColor?

```ts
optional secondaryColor: string;
```

###### Example

```ts
#3366FF
```

##### GetOrganisationResponse.organisation.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

#### GetPriceSchemeResponse

```ts
GetPriceSchemeResponse: {
  priceScheme: {
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
  };
};
```

##### GetPriceSchemeResponse.priceScheme

```ts
priceScheme: {
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
};
```

##### GetPriceSchemeResponse.priceScheme.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### GetPriceSchemeResponse.priceScheme.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### GetPriceSchemeResponse.priceScheme.description?

```ts
optional description: string;
```

###### Example

```ts
Default pricing for all shows
```

##### GetPriceSchemeResponse.priceScheme.eventId

```ts
eventId: string;
```

###### Example

```ts
evt_ghi789
```

##### GetPriceSchemeResponse.priceScheme.id

```ts
id: string;
```

###### Example

```ts
tps_abc123
```

##### GetPriceSchemeResponse.priceScheme.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### GetPriceSchemeResponse.priceScheme.name

```ts
name: string;
```

###### Example

```ts
Standard Pricing
```

##### GetPriceSchemeResponse.priceScheme.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### GetPriceSchemeResponse.priceScheme.parentPriceSchemeId?

```ts
optional parentPriceSchemeId: string;
```

###### Example

```ts
tps_parent123
```

##### GetPriceSchemeResponse.priceScheme.status

```ts
status: "active" | "draft" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### GetPriceSchemeResponse.priceScheme.ticketPrices

```ts
ticketPrices: {
  categoryId: string;
  currency: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
  price: number;
  typeId: string;
}[];
```

###### Description

Price matrix entries

##### GetPriceSchemeResponse.priceScheme.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

#### GetRoleResponse

```ts
GetRoleResponse: {
  createdAt: string;
  description: string | null;
  id: string;
  isDeleted: boolean;
  isSystemRole: boolean;
  name: string;
  organisationId: string;
  permissions: string[];
  updatedAt: string;
};
```

##### GetRoleResponse.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### GetRoleResponse.description

```ts
description: string | null;
```

###### Example

```ts
Manages events and related resources
```

##### GetRoleResponse.id

```ts
id: string;
```

###### Example

```ts
rol_abc123
```

##### GetRoleResponse.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### GetRoleResponse.isSystemRole

```ts
isSystemRole: boolean;
```

###### Description

Whether this is a system-defined role (cannot be modified or deleted)

###### Example

```ts
false
```

##### GetRoleResponse.name

```ts
name: string;
```

###### Example

```ts
Event Manager
```

##### GetRoleResponse.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### GetRoleResponse.permissions

```ts
permissions: string[];
```

###### Description

Array of permission strings in format resource.action:scope

###### Example

```ts
[
      "events.*",
      "venues.read:all",
      "orders.read"
    ]
```

##### GetRoleResponse.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

#### GetUserInvitationResponse

```ts
GetUserInvitationResponse: {
  invitation: {
     code: string;
     createdAt: string;
     email: string;
     expiresAt: string;
     id: string;
     organisationId: string;
     redeemedAt: string | null;
     userId: string;
  };
};
```

##### GetUserInvitationResponse.invitation

```ts
invitation: {
  code: string;
  createdAt: string;
  email: string;
  expiresAt: string;
  id: string;
  organisationId: string;
  redeemedAt: string | null;
  userId: string;
};
```

##### GetUserInvitationResponse.invitation.code

```ts
code: string;
```

###### Example

```ts
inv_BvQ8mK...
```

##### GetUserInvitationResponse.invitation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-01T00:00:00.000Z
```

##### GetUserInvitationResponse.invitation.email

```ts
email: string;
```

Format: email

###### Example

```ts
newuser@example.com
```

##### GetUserInvitationResponse.invitation.expiresAt

```ts
expiresAt: string;
```

###### Example

```ts
2024-01-08T00:00:00.000Z
```

##### GetUserInvitationResponse.invitation.id

```ts
id: string;
```

###### Example

```ts
inv_abc123
```

##### GetUserInvitationResponse.invitation.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### GetUserInvitationResponse.invitation.redeemedAt

```ts
redeemedAt: string | null;
```

###### Example

```ts
null
```

##### GetUserInvitationResponse.invitation.userId

```ts
userId: string;
```

###### Example

```ts
usr_pending123
```

#### GetVenueLayoutResponse

```ts
GetVenueLayoutResponse: {
  venueLayout: {
     accountId: string;
     areas: unknown[];
     categories: unknown[];
     createdAt: string;
     createdBy?: string;
     decorations?: {
        id: string;
        label?: string;
        name?: string;
        position: {
           height: number;
           rotation?: number;
           width: number;
           x: number;
           y: number;
        };
        style?: {
           fill?: string;
           fontSize?: number;
           fontWeight?: string;
           stroke?: string;
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
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     status: "active" | "archived";
     tags: string[];
     totalCapacity: number;
     updatedAt: string;
     venueId: string;
  };
};
```

##### GetVenueLayoutResponse.venueLayout

```ts
venueLayout: {
  accountId: string;
  areas: unknown[];
  categories: unknown[];
  createdAt: string;
  createdBy?: string;
  decorations?: {
     id: string;
     label?: string;
     name?: string;
     position: {
        height: number;
        rotation?: number;
        width: number;
        x: number;
        y: number;
     };
     style?: {
        fill?: string;
        fontSize?: number;
        fontWeight?: string;
        stroke?: string;
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
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  status: "active" | "archived";
  tags: string[];
  totalCapacity: number;
  updatedAt: string;
  venueId: string;
};
```

##### GetVenueLayoutResponse.venueLayout.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_ghi012
```

##### GetVenueLayoutResponse.venueLayout.areas

```ts
areas: unknown[];
```

###### Example

```ts
[]
```

##### GetVenueLayoutResponse.venueLayout.categories

```ts
categories: unknown[];
```

###### Example

```ts
[]
```

##### GetVenueLayoutResponse.venueLayout.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### GetVenueLayoutResponse.venueLayout.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### GetVenueLayoutResponse.venueLayout.decorations?

```ts
optional decorations: {
  id: string;
  label?: string;
  name?: string;
  position: {
     height: number;
     rotation?: number;
     width: number;
     x: number;
     y: number;
  };
  style?: {
     fill?: string;
     fontSize?: number;
     fontWeight?: string;
     stroke?: string;
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
```

###### Example

```ts
[]
```

##### GetVenueLayoutResponse.venueLayout.description?

```ts
optional description: string;
```

###### Example

```ts
Standard theatre configuration
```

##### GetVenueLayoutResponse.venueLayout.id

```ts
id: string;
```

###### Example

```ts
vlt_abc123
```

##### GetVenueLayoutResponse.venueLayout.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### GetVenueLayoutResponse.venueLayout.name

```ts
name: string;
```

###### Example

```ts
Theatre Mode
```

##### GetVenueLayoutResponse.venueLayout.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### GetVenueLayoutResponse.venueLayout.status

```ts
status: "active" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### GetVenueLayoutResponse.venueLayout.tags

```ts
tags: string[];
```

###### Example

```ts
[
      "theatre",
      "seated"
    ]
```

##### GetVenueLayoutResponse.venueLayout.totalCapacity

```ts
totalCapacity: number;
```

###### Example

```ts
1500
```

##### GetVenueLayoutResponse.venueLayout.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### GetVenueLayoutResponse.venueLayout.venueId

```ts
venueId: string;
```

###### Example

```ts
vnu_def456
```

#### GetVenueResponse

```ts
GetVenueResponse: {
  venue: {
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
  };
};
```

##### GetVenueResponse.venue

```ts
venue: {
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
};
```

##### GetVenueResponse.venue.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### GetVenueResponse.venue.coordinates?

```ts
optional coordinates: {
  coordinates: [number, number];
  type: "Point";
};
```

##### GetVenueResponse.venue.coordinates.coordinates

```ts
coordinates: [number, number];
```

###### Example

```ts
[
      -0.1278,
      51.5074
    ]
```

##### GetVenueResponse.venue.coordinates.type

```ts
type: "Point";
```

###### Example

```ts
Point
@enum {string}
```

##### GetVenueResponse.venue.country?

```ts
optional country: string;
```

###### Example

```ts
United Kingdom
```

##### GetVenueResponse.venue.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### GetVenueResponse.venue.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### GetVenueResponse.venue.description?

```ts
optional description: string;
```

###### Example

```ts
Historic concert hall in London
```

##### GetVenueResponse.venue.email?

```ts
optional email: string;
```

###### Example

```ts
info@royalalberthall.com
```

##### GetVenueResponse.venue.features

```ts
features: string[];
```

###### Example

```ts
[
      "parking",
      "wheelchair_accessible",
      "bar"
    ]
```

##### GetVenueResponse.venue.id

```ts
id: string;
```

###### Example

```ts
vnu_abc123
```

##### GetVenueResponse.venue.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### GetVenueResponse.venue.name

```ts
name: string;
```

###### Example

```ts
Royal Albert Hall
```

##### GetVenueResponse.venue.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### GetVenueResponse.venue.phone?

```ts
optional phone: string;
```

###### Example

```ts
+44 20 7589 8212
```

##### GetVenueResponse.venue.status

```ts
status: "active" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### GetVenueResponse.venue.streetAddress?

```ts
optional streetAddress: string;
```

###### Example

```ts
Kensington Gore
```

##### GetVenueResponse.venue.tags

```ts
tags: string[];
```

###### Example

```ts
[
      "concert-hall",
      "historic"
    ]
```

##### GetVenueResponse.venue.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### GetVenueResponse.venue.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### GetVenueResponse.venue.website?

```ts
optional website: string;
```

###### Example

```ts
https://www.royalalberthall.com
```

#### IdentityProvider

```ts
IdentityProvider: {
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
};
```

##### IdentityProvider.allowedClientIds

```ts
allowedClientIds: string[];
```

###### Example

```ts
[
      "backstage-app",
      "backstage-boxoffice"
    ]
```

##### IdentityProvider.authorizationEndpoint

```ts
authorizationEndpoint: string | null;
```

###### Example

```ts
https://stagedoor.example.com/api/oauth/authorize
```

##### IdentityProvider.cacheTtl

```ts
cacheTtl: number;
```

###### Example

```ts
300
```

##### IdentityProvider.clientId

```ts
clientId: string | null;
```

###### Example

```ts
backstage-app
```

##### IdentityProvider.configuration

```ts
configuration: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{}
```

##### IdentityProvider.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-01T00:00:00.000Z
```

##### IdentityProvider.emailDomain

```ts
emailDomain: string | null;
```

###### Example

```ts
@example.com
```

##### IdentityProvider.id

```ts
id: string;
```

###### Example

```ts
stagedoor-idp
```

##### IdentityProvider.isDefault

```ts
isDefault: boolean;
```

###### Example

```ts
true
```

##### IdentityProvider.isEnabled

```ts
isEnabled: boolean;
```

###### Example

```ts
true
```

##### IdentityProvider.issuer

```ts
issuer: string;
```

###### Example

```ts
https://stagedoor.example.com
```

##### IdentityProvider.jwksUri

```ts
jwksUri: string;
```

###### Example

```ts
https://stagedoor.example.com/.well-known/jwks.json
```

##### IdentityProvider.jwksUriInternal

```ts
jwksUriInternal: string | null;
```

###### Example

```ts
http://stagedoor:3000/.well-known/jwks.json
```

##### IdentityProvider.organisationId

```ts
organisationId: string | null;
```

###### Example

```ts
org_abc123
```

##### IdentityProvider.providerType

```ts
providerType: string;
```

###### Example

```ts
stagedoor
```

##### IdentityProvider.scopes

```ts
scopes: string[];
```

###### Example

```ts
[
      "openid",
      "profile",
      "email"
    ]
```

##### IdentityProvider.supportsPkce

```ts
supportsPkce: boolean;
```

###### Example

```ts
true
```

##### IdentityProvider.tokenEndpoint

```ts
tokenEndpoint: string | null;
```

###### Example

```ts
https://stagedoor.example.com/api/oauth/token
```

##### IdentityProvider.tokenEndpointInternal

```ts
tokenEndpointInternal: string | null;
```

###### Example

```ts
http://stagedoor:3000/api/oauth/token
```

##### IdentityProvider.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-01T00:00:00.000Z
```

##### IdentityProvider.userinfoEndpoint

```ts
userinfoEndpoint: string | null;
```

###### Example

```ts
https://stagedoor.example.com/api/oauth/userinfo
```

##### IdentityProvider.userinfoEndpointInternal

```ts
userinfoEndpointInternal: string | null;
```

###### Example

```ts
http://stagedoor:3000/api/oauth/userinfo
```

#### ListAccountsResponse

```ts
ListAccountsResponse: {
  accounts: {
     createdAt: string;
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     status: "active" | "inactive";
     updatedAt: string;
  }[];
};
```

##### ListAccountsResponse.accounts

```ts
accounts: {
  createdAt: string;
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  status: "active" | "inactive";
  updatedAt: string;
}[];
```

#### ListEventOccurrencesResponse

```ts
ListEventOccurrencesResponse: {
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
};
```

##### ListEventOccurrencesResponse.eventOccurrences

```ts
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
```

##### ListEventOccurrencesResponse.pagination

```ts
pagination: {
  hasNext: boolean;
  hasPrev: boolean;
  limit: number;
  page: number;
  total: number;
  totalPages: number;
};
```

##### ListEventOccurrencesResponse.pagination.hasNext

```ts
hasNext: boolean;
```

###### Example

```ts
true
```

##### ListEventOccurrencesResponse.pagination.hasPrev

```ts
hasPrev: boolean;
```

###### Example

```ts
false
```

##### ListEventOccurrencesResponse.pagination.limit

```ts
limit: number;
```

###### Example

```ts
20
```

##### ListEventOccurrencesResponse.pagination.page

```ts
page: number;
```

###### Example

```ts
1
```

##### ListEventOccurrencesResponse.pagination.total

```ts
total: number;
```

###### Example

```ts
45
```

##### ListEventOccurrencesResponse.pagination.totalPages

```ts
totalPages: number;
```

###### Example

```ts
3
```

#### ListEventsResponse

```ts
ListEventsResponse: {
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
};
```

##### ListEventsResponse.events

```ts
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
```

##### ListEventsResponse.pagination

```ts
pagination: {
  hasNext: boolean;
  hasPrev: boolean;
  limit: number;
  page: number;
  total: number;
  totalPages: number;
};
```

##### ListEventsResponse.pagination.hasNext

```ts
hasNext: boolean;
```

###### Example

```ts
true
```

##### ListEventsResponse.pagination.hasPrev

```ts
hasPrev: boolean;
```

###### Example

```ts
false
```

##### ListEventsResponse.pagination.limit

```ts
limit: number;
```

###### Example

```ts
20
```

##### ListEventsResponse.pagination.page

```ts
page: number;
```

###### Example

```ts
1
```

##### ListEventsResponse.pagination.total

```ts
total: number;
```

###### Example

```ts
45
```

##### ListEventsResponse.pagination.totalPages

```ts
totalPages: number;
```

###### Example

```ts
3
```

#### ListIdentityProvidersResponse

```ts
ListIdentityProvidersResponse: {
  providers: {
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
  }[];
};
```

##### ListIdentityProvidersResponse.providers

```ts
providers: {
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
}[];
```

#### ListPriceSchemesResponse

```ts
ListPriceSchemesResponse: {
  priceSchemes: {
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
  }[];
};
```

##### ListPriceSchemesResponse.priceSchemes

```ts
priceSchemes: {
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
}[];
```

#### ListRolesResponse

```ts
ListRolesResponse: {
  roles: {
     createdAt: string;
     description: string | null;
     id: string;
     isDeleted: boolean;
     isSystemRole: boolean;
     name: string;
     organisationId: string;
     permissions: string[];
     updatedAt: string;
  }[];
};
```

##### ListRolesResponse.roles

```ts
roles: {
  createdAt: string;
  description: string | null;
  id: string;
  isDeleted: boolean;
  isSystemRole: boolean;
  name: string;
  organisationId: string;
  permissions: string[];
  updatedAt: string;
}[];
```

#### ListUserAccountRolesResponse

```ts
ListUserAccountRolesResponse: {
  assignments: {
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
  }[];
};
```

##### ListUserAccountRolesResponse.assignments

```ts
assignments: {
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
}[];
```

#### ListUserInvitationsResponse

```ts
ListUserInvitationsResponse: {
  invitations: {
     code: string;
     createdAt: string;
     email: string;
     expiresAt: string;
     id: string;
     organisationId: string;
     redeemedAt: string | null;
     userId: string;
  }[];
};
```

##### ListUserInvitationsResponse.invitations

```ts
invitations: {
  code: string;
  createdAt: string;
  email: string;
  expiresAt: string;
  id: string;
  organisationId: string;
  redeemedAt: string | null;
  userId: string;
}[];
```

#### ListVenueLayoutsResponse

```ts
ListVenueLayoutsResponse: {
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
     decorations?: {
        id: string;
        label?: string;
        name?: string;
        position: {
           height: number;
           rotation?: number;
           width: number;
           x: number;
           y: number;
        };
        style?: {
           fill?: string;
           fontSize?: number;
           fontWeight?: string;
           stroke?: string;
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
};
```

##### ListVenueLayoutsResponse.pagination

```ts
pagination: {
  hasNext: boolean;
  hasPrev: boolean;
  limit: number;
  page: number;
  total: number;
  totalPages: number;
};
```

##### ListVenueLayoutsResponse.pagination.hasNext

```ts
hasNext: boolean;
```

###### Example

```ts
true
```

##### ListVenueLayoutsResponse.pagination.hasPrev

```ts
hasPrev: boolean;
```

###### Example

```ts
false
```

##### ListVenueLayoutsResponse.pagination.limit

```ts
limit: number;
```

###### Example

```ts
20
```

##### ListVenueLayoutsResponse.pagination.page

```ts
page: number;
```

###### Example

```ts
1
```

##### ListVenueLayoutsResponse.pagination.total

```ts
total: number;
```

###### Example

```ts
45
```

##### ListVenueLayoutsResponse.pagination.totalPages

```ts
totalPages: number;
```

###### Example

```ts
3
```

##### ListVenueLayoutsResponse.venueLayouts

```ts
venueLayouts: {
  accountId: string;
  areas: unknown[];
  categories: unknown[];
  createdAt: string;
  createdBy?: string;
  decorations?: {
     id: string;
     label?: string;
     name?: string;
     position: {
        height: number;
        rotation?: number;
        width: number;
        x: number;
        y: number;
     };
     style?: {
        fill?: string;
        fontSize?: number;
        fontWeight?: string;
        stroke?: string;
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
```

#### ListVenuesResponse

```ts
ListVenuesResponse: {
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
};
```

##### ListVenuesResponse.pagination

```ts
pagination: {
  hasNext: boolean;
  hasPrev: boolean;
  limit: number;
  page: number;
  total: number;
  totalPages: number;
};
```

##### ListVenuesResponse.pagination.hasNext

```ts
hasNext: boolean;
```

###### Example

```ts
true
```

##### ListVenuesResponse.pagination.hasPrev

```ts
hasPrev: boolean;
```

###### Example

```ts
false
```

##### ListVenuesResponse.pagination.limit

```ts
limit: number;
```

###### Example

```ts
20
```

##### ListVenuesResponse.pagination.page

```ts
page: number;
```

###### Example

```ts
1
```

##### ListVenuesResponse.pagination.total

```ts
total: number;
```

###### Example

```ts
45
```

##### ListVenuesResponse.pagination.totalPages

```ts
totalPages: number;
```

###### Example

```ts
3
```

##### ListVenuesResponse.venues

```ts
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
```

#### LoginRequest

```ts
LoginRequest: {
  email: string;
  password: string;
};
```

##### LoginRequest.email

```ts
email: string;
```

Format: email

###### Description

User email address

###### Example

```ts
user@example.com
```

##### LoginRequest.password

```ts
password: string;
```

###### Description

User password

###### Example

```ts
password123
```

#### LoginResponse

```ts
LoginResponse: {
  accessToken: string;
  refreshToken: string;
  user: {
     email: string;
     firstName?: string;
     id: string;
     lastName?: string;
  };
};
```

##### LoginResponse.accessToken

```ts
accessToken: string;
```

###### Description

JWT access token

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

##### LoginResponse.refreshToken

```ts
refreshToken: string;
```

###### Description

JWT refresh token

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

##### LoginResponse.user

```ts
user: {
  email: string;
  firstName?: string;
  id: string;
  lastName?: string;
};
```

##### LoginResponse.user.email

```ts
email: string;
```

##### LoginResponse.user.firstName?

```ts
optional firstName: string;
```

##### LoginResponse.user.id

```ts
id: string;
```

##### LoginResponse.user.lastName?

```ts
optional lastName: string;
```

#### MeOrganisation

```ts
MeOrganisation: {
  id: string;
  logoUrl?: string;
  name: string;
  primaryColor?: string;
  secondaryColor?: string;
  userId: string;
};
```

##### MeOrganisation.id

```ts
id: string;
```

###### Example

```ts
org_xyz789
```

##### MeOrganisation.logoUrl?

```ts
optional logoUrl: string;
```

###### Example

```ts
https://example.com/logo.png
```

##### MeOrganisation.name

```ts
name: string;
```

###### Example

```ts
Acme Corporation
```

##### MeOrganisation.primaryColor?

```ts
optional primaryColor: string;
```

###### Example

```ts
#FF5733
```

##### MeOrganisation.secondaryColor?

```ts
optional secondaryColor: string;
```

###### Example

```ts
#3366FF
```

##### MeOrganisation.userId

```ts
userId: string;
```

###### Description

The user ID in this specific organisation

###### Example

```ts
usr_abc123
```

#### MePermissionEntry

```ts
MePermissionEntry: {
  accounts: string[];
  isAllAccounts: boolean;
  permission: string;
};
```

##### MePermissionEntry.accounts

```ts
accounts: string[];
```

###### Description

Account IDs this permission applies to, or ["all"] for org-wide

###### Example

```ts
[
      "all"
    ]
```

##### MePermissionEntry.isAllAccounts

```ts
isAllAccounts: boolean;
```

###### Example

```ts
true
```

##### MePermissionEntry.permission

```ts
permission: string;
```

###### Example

```ts
events.create
```

#### MeRoleAssignment

```ts
MeRoleAssignment: {
  accountId: string;
  description: string | null;
  id: string;
  isSystemRole: boolean;
  name: string | null;
};
```

##### MeRoleAssignment.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_abc123
```

##### MeRoleAssignment.description

```ts
description: string | null;
```

###### Example

```ts
Full administrative access to the organisation
```

##### MeRoleAssignment.id

```ts
id: string;
```

###### Example

```ts
rol_system_org_owner
```

##### MeRoleAssignment.isSystemRole

```ts
isSystemRole: boolean;
```

###### Example

```ts
true
```

##### MeRoleAssignment.name

```ts
name: string | null;
```

###### Example

```ts
Organisation Owner
```

#### MeUser

```ts
MeUser: {
  email: string;
  externalUserId?: string;
  firstName?: string;
  id: string;
  identityProvider?: string;
  lastName?: string;
};
```

##### MeUser.email

```ts
email: string;
```

Format: email

###### Example

```ts
user@example.com
```

##### MeUser.externalUserId?

```ts
optional externalUserId: string;
```

###### Example

```ts
stagedoor-user-123
```

##### MeUser.firstName?

```ts
optional firstName: string;
```

###### Example

```ts
John
```

##### MeUser.id

```ts
id: string;
```

###### Example

```ts
usr_abc123
```

##### MeUser.identityProvider?

```ts
optional identityProvider: string;
```

###### Example

```ts
stagedoor
```

##### MeUser.lastName?

```ts
optional lastName: string;
```

###### Example

```ts
Doe
```

#### Organisation

```ts
Organisation: {
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
};
```

##### Organisation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### Organisation.id

```ts
id: string;
```

###### Example

```ts
org_xyz789
```

##### Organisation.logoUrl?

```ts
optional logoUrl: string;
```

###### Example

```ts
https://example.com/logo.png
```

##### Organisation.metadata?

```ts
optional metadata: {
[key: string]: unknown;
};
```

###### Index Signature

```ts
[key: string]: unknown
```

###### Example

```ts
{
             *       "industry": "Technology",
             *       "size": "Medium"
             *     }
```

##### Organisation.name

```ts
name: string;
```

###### Example

```ts
Acme Corporation
```

##### Organisation.primaryColor?

```ts
optional primaryColor: string;
```

###### Example

```ts
#FF5733
```

##### Organisation.secondaryColor?

```ts
optional secondaryColor: string;
```

###### Example

```ts
#3366FF
```

##### Organisation.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

#### Pagination

```ts
Pagination: {
  hasNext: boolean;
  hasPrev: boolean;
  limit: number;
  page: number;
  total: number;
  totalPages: number;
};
```

##### Pagination.hasNext

```ts
hasNext: boolean;
```

###### Example

```ts
true
```

##### Pagination.hasPrev

```ts
hasPrev: boolean;
```

###### Example

```ts
false
```

##### Pagination.limit

```ts
limit: number;
```

###### Example

```ts
20
```

##### Pagination.page

```ts
page: number;
```

###### Example

```ts
1
```

##### Pagination.total

```ts
total: number;
```

###### Example

```ts
45
```

##### Pagination.totalPages

```ts
totalPages: number;
```

###### Example

```ts
3
```

#### PriceScheme

```ts
PriceScheme: {
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
};
```

##### PriceScheme.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### PriceScheme.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### PriceScheme.description?

```ts
optional description: string;
```

###### Example

```ts
Default pricing for all shows
```

##### PriceScheme.eventId

```ts
eventId: string;
```

###### Example

```ts
evt_ghi789
```

##### PriceScheme.id

```ts
id: string;
```

###### Example

```ts
tps_abc123
```

##### PriceScheme.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### PriceScheme.name

```ts
name: string;
```

###### Example

```ts
Standard Pricing
```

##### PriceScheme.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### PriceScheme.parentPriceSchemeId?

```ts
optional parentPriceSchemeId: string;
```

###### Example

```ts
tps_parent123
```

##### PriceScheme.status

```ts
status: "active" | "draft" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### PriceScheme.ticketPrices

```ts
ticketPrices: {
  categoryId: string;
  currency: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
  price: number;
  typeId: string;
}[];
```

###### Description

Price matrix entries

##### PriceScheme.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

#### RedeemInvitationRequest

```ts
RedeemInvitationRequest: {
  code: string;
  password: string;
};
```

##### RedeemInvitationRequest.code

```ts
code: string;
```

###### Description

Invitation code received via email

###### Example

```ts
INV-1234567890
```

##### RedeemInvitationRequest.password

```ts
password: string;
```

###### Description

New password for the account (minimum 8 characters)

###### Example

```ts
securePassword123
```

#### RedeemInvitationResponse

```ts
RedeemInvitationResponse: {
  accessToken: string;
  refreshToken: string;
  user: {
     email: string;
     firstName?: string;
     id: string;
     lastName?: string;
  };
};
```

##### RedeemInvitationResponse.accessToken

```ts
accessToken: string;
```

###### Description

JWT access token

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

##### RedeemInvitationResponse.refreshToken

```ts
refreshToken: string;
```

###### Description

JWT refresh token

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

##### RedeemInvitationResponse.user

```ts
user: {
  email: string;
  firstName?: string;
  id: string;
  lastName?: string;
};
```

##### RedeemInvitationResponse.user.email

```ts
email: string;
```

##### RedeemInvitationResponse.user.firstName?

```ts
optional firstName: string;
```

##### RedeemInvitationResponse.user.id

```ts
id: string;
```

##### RedeemInvitationResponse.user.lastName?

```ts
optional lastName: string;
```

#### RefreshTokenRequest

```ts
RefreshTokenRequest: {
  refreshToken: string;
};
```

##### RefreshTokenRequest.refreshToken

```ts
refreshToken: string;
```

###### Description

Refresh token from previous login

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### RefreshTokenResponse

```ts
RefreshTokenResponse: {
  accessToken: string;
  refreshToken: string;
};
```

##### RefreshTokenResponse.accessToken

```ts
accessToken: string;
```

###### Description

New JWT access token

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

##### RefreshTokenResponse.refreshToken

```ts
refreshToken: string;
```

###### Description

New JWT refresh token

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### RemoveAssignmentResponse

```ts
RemoveAssignmentResponse: {
  success: boolean;
};
```

##### RemoveAssignmentResponse.success

```ts
success: boolean;
```

###### Example

```ts
true
```

#### ResendUserInvitationResponse

```ts
ResendUserInvitationResponse: {
  invitation: {
     code: string;
     createdAt: string;
     email: string;
     expiresAt: string;
     id: string;
     organisationId: string;
     redeemedAt: string | null;
     userId: string;
  };
};
```

##### ResendUserInvitationResponse.invitation

```ts
invitation: {
  code: string;
  createdAt: string;
  email: string;
  expiresAt: string;
  id: string;
  organisationId: string;
  redeemedAt: string | null;
  userId: string;
};
```

##### ResendUserInvitationResponse.invitation.code

```ts
code: string;
```

###### Example

```ts
inv_BvQ8mK...
```

##### ResendUserInvitationResponse.invitation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-01T00:00:00.000Z
```

##### ResendUserInvitationResponse.invitation.email

```ts
email: string;
```

Format: email

###### Example

```ts
newuser@example.com
```

##### ResendUserInvitationResponse.invitation.expiresAt

```ts
expiresAt: string;
```

###### Example

```ts
2024-01-08T00:00:00.000Z
```

##### ResendUserInvitationResponse.invitation.id

```ts
id: string;
```

###### Example

```ts
inv_abc123
```

##### ResendUserInvitationResponse.invitation.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### ResendUserInvitationResponse.invitation.redeemedAt

```ts
redeemedAt: string | null;
```

###### Example

```ts
null
```

##### ResendUserInvitationResponse.invitation.userId

```ts
userId: string;
```

###### Example

```ts
usr_pending123
```

#### Role

```ts
Role: {
  createdAt: string;
  description: string | null;
  id: string;
  isDeleted: boolean;
  isSystemRole: boolean;
  name: string;
  organisationId: string;
  permissions: string[];
  updatedAt: string;
};
```

##### Role.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### Role.description

```ts
description: string | null;
```

###### Example

```ts
Manages events and related resources
```

##### Role.id

```ts
id: string;
```

###### Example

```ts
rol_abc123
```

##### Role.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### Role.isSystemRole

```ts
isSystemRole: boolean;
```

###### Description

Whether this is a system-defined role (cannot be modified or deleted)

###### Example

```ts
false
```

##### Role.name

```ts
name: string;
```

###### Example

```ts
Event Manager
```

##### Role.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### Role.permissions

```ts
permissions: string[];
```

###### Description

Array of permission strings in format resource.action:scope

###### Example

```ts
[
      "events.*",
      "venues.read:all",
      "orders.read"
    ]
```

##### Role.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

#### SuccessResponse

```ts
SuccessResponse: {
  data?: unknown;
  requestId?: string;
};
```

##### SuccessResponse.data?

```ts
optional data: unknown;
```

##### SuccessResponse.requestId?

```ts
optional requestId: string;
```

#### SyncSeatsResponse

```ts
SyncSeatsResponse: {
  seats: {
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
        rotation?: number;
        x: number;
        y: number;
     };
     publicNotes?: string;
     row: string;
     section?: string;
     status: "available" | "blocked" | "accessible" | "held" | "removed";
  }[];
  seatsSynced: number;
  venueLayout?: unknown;
};
```

##### SyncSeatsResponse.seats

```ts
seats: {
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
     rotation?: number;
     x: number;
     y: number;
  };
  publicNotes?: string;
  row: string;
  section?: string;
  status: "available" | "blocked" | "accessible" | "held" | "removed";
}[];
```

##### SyncSeatsResponse.seatsSynced

```ts
seatsSynced: number;
```

###### Example

```ts
150
```

##### SyncSeatsResponse.venueLayout?

```ts
optional venueLayout: unknown;
```

#### TicketPrice

```ts
TicketPrice: {
  categoryId: string;
  currency: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
  price: number;
  typeId: string;
};
```

##### TicketPrice.categoryId

```ts
categoryId: string;
```

###### Example

```ts
cat_abc123
```

##### TicketPrice.currency

```ts
currency: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
```

###### Example

```ts
GBP
@enum {string}
```

##### TicketPrice.price

```ts
price: number;
```

###### Description

Price in smallest unit (pence/cents)

###### Example

```ts
2500
```

##### TicketPrice.typeId

```ts
typeId: string;
```

###### Example

```ts
tt_def456
```

#### UpdateAccountResponse

```ts
UpdateAccountResponse: {
  account: {
     createdAt: string;
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     status: "active" | "inactive";
     updatedAt: string;
  };
};
```

##### UpdateAccountResponse.account

```ts
account: {
  createdAt: string;
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  status: "active" | "inactive";
  updatedAt: string;
};
```

##### UpdateAccountResponse.account.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### UpdateAccountResponse.account.id

```ts
id: string;
```

###### Example

```ts
acc_abc123
```

##### UpdateAccountResponse.account.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### UpdateAccountResponse.account.name

```ts
name: string;
```

###### Example

```ts
Main Account
```

##### UpdateAccountResponse.account.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### UpdateAccountResponse.account.status

```ts
status: "active" | "inactive";
```

###### Example

```ts
active
@enum {string}
```

##### UpdateAccountResponse.account.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

#### UpdateAreaResponse

```ts
UpdateAreaResponse: {
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
};
```

##### UpdateAreaResponse.area

```ts
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
```

##### UpdateAreaResponse.area.capacity

```ts
capacity: number;
```

###### Example

```ts
500
```

##### UpdateAreaResponse.area.color?

```ts
optional color: string;
```

###### Example

```ts
#FFD700
```

##### UpdateAreaResponse.area.description?

```ts
optional description: string;
```

###### Example

```ts
General admission area
```

##### UpdateAreaResponse.area.displayOrder

```ts
displayOrder: number;
```

###### Example

```ts
1
```

##### UpdateAreaResponse.area.id

```ts
id: string;
```

###### Example

```ts
vla_abc123
```

##### UpdateAreaResponse.area.name

```ts
name: string;
```

###### Example

```ts
Main Floor
```

##### UpdateAreaResponse.area.seats?

```ts
optional seats: unknown[];
```

###### Example

```ts
[]
```

##### UpdateAreaResponse.area.status

```ts
status: "active" | "inactive";
```

###### Example

```ts
active
@enum {string}
```

##### UpdateAreaResponse.area.type

```ts
type: "unallocated" | "allocated";
```

###### Example

```ts
unallocated
@enum {string}
```

##### UpdateAreaResponse.venueLayout?

```ts
optional venueLayout: unknown;
```

#### UpdateCategoryResponse

```ts
UpdateCategoryResponse: {
  category: {
     color?: string;
     description?: string;
     displayOrder: number;
     id: string;
     name: string;
  };
  venueLayout?: unknown;
};
```

##### UpdateCategoryResponse.category

```ts
category: {
  color?: string;
  description?: string;
  displayOrder: number;
  id: string;
  name: string;
};
```

##### UpdateCategoryResponse.category.color?

```ts
optional color: string;
```

###### Example

```ts
#FFD700
```

##### UpdateCategoryResponse.category.description?

```ts
optional description: string;
```

###### Example

```ts
Best seats in the house
```

##### UpdateCategoryResponse.category.displayOrder

```ts
displayOrder: number;
```

###### Example

```ts
1
```

##### UpdateCategoryResponse.category.id

```ts
id: string;
```

###### Example

```ts
vlc_abc123
```

##### UpdateCategoryResponse.category.name

```ts
name: string;
```

###### Example

```ts
Premium
```

##### UpdateCategoryResponse.venueLayout?

```ts
optional venueLayout: unknown;
```

#### UpdateEventOccurrenceResponse

```ts
UpdateEventOccurrenceResponse: {
  eventOccurrence: {
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
  };
};
```

##### UpdateEventOccurrenceResponse.eventOccurrence

```ts
eventOccurrence: {
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
};
```

##### UpdateEventOccurrenceResponse.eventOccurrence.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### UpdateEventOccurrenceResponse.eventOccurrence.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### UpdateEventOccurrenceResponse.eventOccurrence.endDate

```ts
endDate: string;
```

###### Example

```ts
2025-06-15T00:00:00Z
```

##### UpdateEventOccurrenceResponse.eventOccurrence.endTime

```ts
endTime: string;
```

###### Example

```ts
23:00:00
```

##### UpdateEventOccurrenceResponse.eventOccurrence.eventId

```ts
eventId: string;
```

###### Example

```ts
evt_ghi789
```

##### UpdateEventOccurrenceResponse.eventOccurrence.id

```ts
id: string;
```

###### Example

```ts
eoc_abc123
```

##### UpdateEventOccurrenceResponse.eventOccurrence.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### UpdateEventOccurrenceResponse.eventOccurrence.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### UpdateEventOccurrenceResponse.eventOccurrence.startDate

```ts
startDate: string;
```

###### Example

```ts
2025-06-15T00:00:00Z
```

##### UpdateEventOccurrenceResponse.eventOccurrence.startTime

```ts
startTime: string;
```

###### Example

```ts
19:00:00
```

##### UpdateEventOccurrenceResponse.eventOccurrence.status

```ts
status: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
```

###### Example

```ts
draft
@enum {string}
```

##### UpdateEventOccurrenceResponse.eventOccurrence.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### UpdateEventOccurrenceResponse.eventOccurrence.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### UpdateEventOccurrenceResponse.eventOccurrence.venueId?

```ts
optional venueId: string;
```

###### Example

```ts
vnu_abc123
```

#### UpdateEventResponse

```ts
UpdateEventResponse: {
  event: {
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
  };
};
```

##### UpdateEventResponse.event

```ts
event: {
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
};
```

##### UpdateEventResponse.event.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### UpdateEventResponse.event.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### UpdateEventResponse.event.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### UpdateEventResponse.event.description?

```ts
optional description: string;
```

###### Example

```ts
A three-day music festival
```

##### UpdateEventResponse.event.id

```ts
id: string;
```

###### Example

```ts
evt_abc123
```

##### UpdateEventResponse.event.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### UpdateEventResponse.event.name

```ts
name: string;
```

###### Example

```ts
Summer Music Festival
```

##### UpdateEventResponse.event.occurrenceCount

```ts
occurrenceCount: number;
```

###### Example

```ts
3
```

##### UpdateEventResponse.event.offSaleDate?

```ts
optional offSaleDate: string;
```

###### Example

```ts
2025-06-15T23:59:59Z
```

##### UpdateEventResponse.event.onSaleDate?

```ts
optional onSaleDate: string;
```

###### Example

```ts
2025-06-01T09:00:00Z
```

##### UpdateEventResponse.event.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### UpdateEventResponse.event.productCount

```ts
productCount: number;
```

###### Example

```ts
0
```

##### UpdateEventResponse.event.status

```ts
status: 
  | "draft"
  | "published"
  | "on_sale"
  | "sold_out"
  | "completed"
  | "cancelled";
```

###### Example

```ts
draft
@enum {string}
```

##### UpdateEventResponse.event.tags

```ts
tags: string[];
```

###### Example

```ts
[
      "music",
      "festival"
    ]
```

##### UpdateEventResponse.event.ticketCount

```ts
ticketCount: number;
```

###### Example

```ts
0
```

##### UpdateEventResponse.event.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### UpdateEventResponse.event.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### UpdateEventResponse.event.venueId?

```ts
optional venueId: string;
```

###### Example

```ts
vnu_ghi789
```

#### UpdateIdentityProviderRequest

```ts
UpdateIdentityProviderRequest: {
  allowedClientIds?: string[];
  cacheTtl?: number;
  configuration?: {
   [key: string]: unknown;
  };
  emailDomain?: string | null;
  isDefault?: boolean;
  isEnabled?: boolean;
  scopes?: string[];
};
```

##### UpdateIdentityProviderRequest.allowedClientIds?

```ts
optional allowedClientIds: string[];
```

###### Example

```ts
[
      "backstage-app"
    ]
```

##### UpdateIdentityProviderRequest.cacheTtl?

```ts
optional cacheTtl: number;
```

###### Example

```ts
600
```

##### UpdateIdentityProviderRequest.configuration?

```ts
optional configuration: {
[key: string]: unknown;
};
```

###### Index Signature

```ts
[key: string]: unknown
```

###### Example

```ts
{}
```

##### UpdateIdentityProviderRequest.emailDomain?

```ts
optional emailDomain: string | null;
```

###### Example

```ts
@example.com
```

##### UpdateIdentityProviderRequest.isDefault?

```ts
optional isDefault: boolean;
```

###### Example

```ts
false
```

##### UpdateIdentityProviderRequest.isEnabled?

```ts
optional isEnabled: boolean;
```

###### Example

```ts
true
```

##### UpdateIdentityProviderRequest.scopes?

```ts
optional scopes: string[];
```

###### Example

```ts
[
      "openid",
      "profile",
      "email"
    ]
```

#### UpdateIdentityProviderResponse

```ts
UpdateIdentityProviderResponse: {
  provider: {
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
  };
};
```

##### UpdateIdentityProviderResponse.provider

```ts
provider: {
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
};
```

##### UpdateIdentityProviderResponse.provider.allowedClientIds

```ts
allowedClientIds: string[];
```

###### Example

```ts
[
      "backstage-app",
      "backstage-boxoffice"
    ]
```

##### UpdateIdentityProviderResponse.provider.authorizationEndpoint

```ts
authorizationEndpoint: string | null;
```

###### Example

```ts
https://stagedoor.example.com/api/oauth/authorize
```

##### UpdateIdentityProviderResponse.provider.cacheTtl

```ts
cacheTtl: number;
```

###### Example

```ts
300
```

##### UpdateIdentityProviderResponse.provider.clientId

```ts
clientId: string | null;
```

###### Example

```ts
backstage-app
```

##### UpdateIdentityProviderResponse.provider.configuration

```ts
configuration: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{}
```

##### UpdateIdentityProviderResponse.provider.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-01T00:00:00.000Z
```

##### UpdateIdentityProviderResponse.provider.emailDomain

```ts
emailDomain: string | null;
```

###### Example

```ts
@example.com
```

##### UpdateIdentityProviderResponse.provider.id

```ts
id: string;
```

###### Example

```ts
stagedoor-idp
```

##### UpdateIdentityProviderResponse.provider.isDefault

```ts
isDefault: boolean;
```

###### Example

```ts
true
```

##### UpdateIdentityProviderResponse.provider.isEnabled

```ts
isEnabled: boolean;
```

###### Example

```ts
true
```

##### UpdateIdentityProviderResponse.provider.issuer

```ts
issuer: string;
```

###### Example

```ts
https://stagedoor.example.com
```

##### UpdateIdentityProviderResponse.provider.jwksUri

```ts
jwksUri: string;
```

###### Example

```ts
https://stagedoor.example.com/.well-known/jwks.json
```

##### UpdateIdentityProviderResponse.provider.jwksUriInternal

```ts
jwksUriInternal: string | null;
```

###### Example

```ts
http://stagedoor:3000/.well-known/jwks.json
```

##### UpdateIdentityProviderResponse.provider.organisationId

```ts
organisationId: string | null;
```

###### Example

```ts
org_abc123
```

##### UpdateIdentityProviderResponse.provider.providerType

```ts
providerType: string;
```

###### Example

```ts
stagedoor
```

##### UpdateIdentityProviderResponse.provider.scopes

```ts
scopes: string[];
```

###### Example

```ts
[
      "openid",
      "profile",
      "email"
    ]
```

##### UpdateIdentityProviderResponse.provider.supportsPkce

```ts
supportsPkce: boolean;
```

###### Example

```ts
true
```

##### UpdateIdentityProviderResponse.provider.tokenEndpoint

```ts
tokenEndpoint: string | null;
```

###### Example

```ts
https://stagedoor.example.com/api/oauth/token
```

##### UpdateIdentityProviderResponse.provider.tokenEndpointInternal

```ts
tokenEndpointInternal: string | null;
```

###### Example

```ts
http://stagedoor:3000/api/oauth/token
```

##### UpdateIdentityProviderResponse.provider.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-01T00:00:00.000Z
```

##### UpdateIdentityProviderResponse.provider.userinfoEndpoint

```ts
userinfoEndpoint: string | null;
```

###### Example

```ts
https://stagedoor.example.com/api/oauth/userinfo
```

##### UpdateIdentityProviderResponse.provider.userinfoEndpointInternal

```ts
userinfoEndpointInternal: string | null;
```

###### Example

```ts
http://stagedoor:3000/api/oauth/userinfo
```

#### UpdateOrganisationRequest

```ts
UpdateOrganisationRequest: {
  logoUrl?: string;
  metadata?: {
   [key: string]: unknown;
  };
  name?: string;
  primaryColor?: string;
  secondaryColor?: string;
};
```

##### UpdateOrganisationRequest.logoUrl?

```ts
optional logoUrl: string;
```

Format: uri

###### Description

URL to organisation logo

###### Example

```ts
https://example.com/logo.png
```

##### UpdateOrganisationRequest.metadata?

```ts
optional metadata: {
[key: string]: unknown;
};
```

###### Index Signature

```ts
[key: string]: unknown
```

###### Description

Additional metadata

###### Example

```ts
{
             *       "industry": "Technology",
             *       "size": "Medium"
             *     }
```

##### UpdateOrganisationRequest.name?

```ts
optional name: string;
```

###### Description

Organisation name

###### Example

```ts
Acme Corporation
```

##### UpdateOrganisationRequest.primaryColor?

```ts
optional primaryColor: string;
```

###### Description

Primary brand color (hex format)

###### Example

```ts
#FF5733
```

##### UpdateOrganisationRequest.secondaryColor?

```ts
optional secondaryColor: string;
```

###### Description

Secondary brand color (hex format)

###### Example

```ts
#3366FF
```

#### UpdateOrganisationResponse

```ts
UpdateOrganisationResponse: {
  organisation: {
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
  };
};
```

##### UpdateOrganisationResponse.organisation

```ts
organisation: {
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
};
```

##### UpdateOrganisationResponse.organisation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### UpdateOrganisationResponse.organisation.id

```ts
id: string;
```

###### Example

```ts
org_xyz789
```

##### UpdateOrganisationResponse.organisation.logoUrl?

```ts
optional logoUrl: string;
```

###### Example

```ts
https://example.com/logo.png
```

##### UpdateOrganisationResponse.organisation.metadata?

```ts
optional metadata: {
[key: string]: unknown;
};
```

###### Index Signature

```ts
[key: string]: unknown
```

###### Example

```ts
{
             *       "industry": "Technology",
             *       "size": "Medium"
             *     }
```

##### UpdateOrganisationResponse.organisation.name

```ts
name: string;
```

###### Example

```ts
Acme Corporation
```

##### UpdateOrganisationResponse.organisation.primaryColor?

```ts
optional primaryColor: string;
```

###### Example

```ts
#FF5733
```

##### UpdateOrganisationResponse.organisation.secondaryColor?

```ts
optional secondaryColor: string;
```

###### Example

```ts
#3366FF
```

##### UpdateOrganisationResponse.organisation.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

#### UpdatePriceSchemeResponse

```ts
UpdatePriceSchemeResponse: {
  priceScheme: {
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
  };
};
```

##### UpdatePriceSchemeResponse.priceScheme

```ts
priceScheme: {
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
};
```

##### UpdatePriceSchemeResponse.priceScheme.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### UpdatePriceSchemeResponse.priceScheme.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### UpdatePriceSchemeResponse.priceScheme.description?

```ts
optional description: string;
```

###### Example

```ts
Default pricing for all shows
```

##### UpdatePriceSchemeResponse.priceScheme.eventId

```ts
eventId: string;
```

###### Example

```ts
evt_ghi789
```

##### UpdatePriceSchemeResponse.priceScheme.id

```ts
id: string;
```

###### Example

```ts
tps_abc123
```

##### UpdatePriceSchemeResponse.priceScheme.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### UpdatePriceSchemeResponse.priceScheme.name

```ts
name: string;
```

###### Example

```ts
Standard Pricing
```

##### UpdatePriceSchemeResponse.priceScheme.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### UpdatePriceSchemeResponse.priceScheme.parentPriceSchemeId?

```ts
optional parentPriceSchemeId: string;
```

###### Example

```ts
tps_parent123
```

##### UpdatePriceSchemeResponse.priceScheme.status

```ts
status: "active" | "draft" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### UpdatePriceSchemeResponse.priceScheme.ticketPrices

```ts
ticketPrices: {
  categoryId: string;
  currency: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
  price: number;
  typeId: string;
}[];
```

###### Description

Price matrix entries

##### UpdatePriceSchemeResponse.priceScheme.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

#### UpdateRoleRequest

```ts
UpdateRoleRequest: {
  description?: string;
  name?: string;
  permissions?: string[];
};
```

##### UpdateRoleRequest.description?

```ts
optional description: string;
```

###### Description

Optional description of the role

###### Example

```ts
Manages events and related resources
```

##### UpdateRoleRequest.name?

```ts
optional name: string;
```

###### Description

The name of the role

###### Example

```ts
Event Manager
```

##### UpdateRoleRequest.permissions?

```ts
optional permissions: string[];
```

###### Description

Array of permission strings

###### Example

```ts
[
      "events.*",
      "venues.read:all",
      "orders.read"
    ]
```

#### UpdateRoleResponse

```ts
UpdateRoleResponse: {
  createdAt: string;
  description: string | null;
  id: string;
  isDeleted: boolean;
  isSystemRole: boolean;
  name: string;
  organisationId: string;
  permissions: string[];
  updatedAt: string;
};
```

##### UpdateRoleResponse.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### UpdateRoleResponse.description

```ts
description: string | null;
```

###### Example

```ts
Manages events and related resources
```

##### UpdateRoleResponse.id

```ts
id: string;
```

###### Example

```ts
rol_abc123
```

##### UpdateRoleResponse.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### UpdateRoleResponse.isSystemRole

```ts
isSystemRole: boolean;
```

###### Description

Whether this is a system-defined role (cannot be modified or deleted)

###### Example

```ts
false
```

##### UpdateRoleResponse.name

```ts
name: string;
```

###### Example

```ts
Event Manager
```

##### UpdateRoleResponse.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### UpdateRoleResponse.permissions

```ts
permissions: string[];
```

###### Description

Array of permission strings in format resource.action:scope

###### Example

```ts
[
      "events.*",
      "venues.read:all",
      "orders.read"
    ]
```

##### UpdateRoleResponse.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

#### UpdateSeatResponse

```ts
UpdateSeatResponse: {
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
        rotation?: number;
        x: number;
        y: number;
     };
     publicNotes?: string;
     row: string;
     section?: string;
     status: "available" | "blocked" | "accessible" | "held" | "removed";
  };
  venueLayout?: unknown;
};
```

##### UpdateSeatResponse.seat

```ts
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
     rotation?: number;
     x: number;
     y: number;
  };
  publicNotes?: string;
  row: string;
  section?: string;
  status: "available" | "blocked" | "accessible" | "held" | "removed";
};
```

##### UpdateSeatResponse.seat.attributes?

```ts
optional attributes: string[];
```

##### UpdateSeatResponse.seat.categoryId?

```ts
optional categoryId: string;
```

###### Example

```ts
vlc_premium
```

##### UpdateSeatResponse.seat.companionSeats?

```ts
optional companionSeats: string[];
```

##### UpdateSeatResponse.seat.companionTo?

```ts
optional companionTo: string;
```

##### UpdateSeatResponse.seat.holdType?

```ts
optional holdType: string;
```

##### UpdateSeatResponse.seat.id

```ts
id: string;
```

###### Example

```ts
vlas_abc123
```

##### UpdateSeatResponse.seat.internalNotes?

```ts
optional internalNotes: string;
```

##### UpdateSeatResponse.seat.label

```ts
label: string;
```

###### Example

```ts
Orchestra Center, Row A, Seat 15
```

##### UpdateSeatResponse.seat.number

```ts
number: string;
```

###### Example

```ts
15
```

##### UpdateSeatResponse.seat.position?

```ts
optional position: {
  rotation?: number;
  x: number;
  y: number;
};
```

##### UpdateSeatResponse.seat.position.rotation?

```ts
optional rotation: number;
```

##### UpdateSeatResponse.seat.position.x

```ts
x: number;
```

##### UpdateSeatResponse.seat.position.y

```ts
y: number;
```

##### UpdateSeatResponse.seat.publicNotes?

```ts
optional publicNotes: string;
```

##### UpdateSeatResponse.seat.row

```ts
row: string;
```

###### Example

```ts
A
```

##### UpdateSeatResponse.seat.section?

```ts
optional section: string;
```

###### Example

```ts
Orchestra Center
```

##### UpdateSeatResponse.seat.status

```ts
status: "available" | "blocked" | "accessible" | "held" | "removed";
```

###### Example

```ts
available
@enum {string}
```

##### UpdateSeatResponse.venueLayout?

```ts
optional venueLayout: unknown;
```

#### UpdateUserAccountRolesRequest

```ts
UpdateUserAccountRolesRequest: {
  accountId: string;
  roleIds: string[];
  userId: string;
};
```

##### UpdateUserAccountRolesRequest.accountId

```ts
accountId: string;
```

###### Description

Account ID

###### Example

```ts
acc_abc123
```

##### UpdateUserAccountRolesRequest.roleIds

```ts
roleIds: string[];
```

###### Description

Array of role IDs to assign (replaces existing roles)

###### Example

```ts
[
      "rol_system_event_manager",
      "rol_system_box_office"
    ]
```

##### UpdateUserAccountRolesRequest.userId

```ts
userId: string;
```

###### Description

User ID

###### Example

```ts
usr_abc123
```

#### UpdateUserAccountRolesResponse

```ts
UpdateUserAccountRolesResponse: {
  assignments: {
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
  }[];
};
```

##### UpdateUserAccountRolesResponse.assignments

```ts
assignments: {
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
}[];
```

#### UpdateVenueLayoutResponse

```ts
UpdateVenueLayoutResponse: {
  venueLayout: {
     accountId: string;
     areas: unknown[];
     categories: unknown[];
     createdAt: string;
     createdBy?: string;
     decorations?: {
        id: string;
        label?: string;
        name?: string;
        position: {
           height: number;
           rotation?: number;
           width: number;
           x: number;
           y: number;
        };
        style?: {
           fill?: string;
           fontSize?: number;
           fontWeight?: string;
           stroke?: string;
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
     id: string;
     isDeleted: boolean;
     name: string;
     organisationId: string;
     status: "active" | "archived";
     tags: string[];
     totalCapacity: number;
     updatedAt: string;
     venueId: string;
  };
};
```

##### UpdateVenueLayoutResponse.venueLayout

```ts
venueLayout: {
  accountId: string;
  areas: unknown[];
  categories: unknown[];
  createdAt: string;
  createdBy?: string;
  decorations?: {
     id: string;
     label?: string;
     name?: string;
     position: {
        height: number;
        rotation?: number;
        width: number;
        x: number;
        y: number;
     };
     style?: {
        fill?: string;
        fontSize?: number;
        fontWeight?: string;
        stroke?: string;
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
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  status: "active" | "archived";
  tags: string[];
  totalCapacity: number;
  updatedAt: string;
  venueId: string;
};
```

##### UpdateVenueLayoutResponse.venueLayout.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_ghi012
```

##### UpdateVenueLayoutResponse.venueLayout.areas

```ts
areas: unknown[];
```

###### Example

```ts
[]
```

##### UpdateVenueLayoutResponse.venueLayout.categories

```ts
categories: unknown[];
```

###### Example

```ts
[]
```

##### UpdateVenueLayoutResponse.venueLayout.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### UpdateVenueLayoutResponse.venueLayout.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### UpdateVenueLayoutResponse.venueLayout.decorations?

```ts
optional decorations: {
  id: string;
  label?: string;
  name?: string;
  position: {
     height: number;
     rotation?: number;
     width: number;
     x: number;
     y: number;
  };
  style?: {
     fill?: string;
     fontSize?: number;
     fontWeight?: string;
     stroke?: string;
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
```

###### Example

```ts
[]
```

##### UpdateVenueLayoutResponse.venueLayout.description?

```ts
optional description: string;
```

###### Example

```ts
Standard theatre configuration
```

##### UpdateVenueLayoutResponse.venueLayout.id

```ts
id: string;
```

###### Example

```ts
vlt_abc123
```

##### UpdateVenueLayoutResponse.venueLayout.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### UpdateVenueLayoutResponse.venueLayout.name

```ts
name: string;
```

###### Example

```ts
Theatre Mode
```

##### UpdateVenueLayoutResponse.venueLayout.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### UpdateVenueLayoutResponse.venueLayout.status

```ts
status: "active" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### UpdateVenueLayoutResponse.venueLayout.tags

```ts
tags: string[];
```

###### Example

```ts
[
      "theatre",
      "seated"
    ]
```

##### UpdateVenueLayoutResponse.venueLayout.totalCapacity

```ts
totalCapacity: number;
```

###### Example

```ts
1500
```

##### UpdateVenueLayoutResponse.venueLayout.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### UpdateVenueLayoutResponse.venueLayout.venueId

```ts
venueId: string;
```

###### Example

```ts
vnu_def456
```

#### UpdateVenueResponse

```ts
UpdateVenueResponse: {
  venue: {
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
  };
};
```

##### UpdateVenueResponse.venue

```ts
venue: {
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
};
```

##### UpdateVenueResponse.venue.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### UpdateVenueResponse.venue.coordinates?

```ts
optional coordinates: {
  coordinates: [number, number];
  type: "Point";
};
```

##### UpdateVenueResponse.venue.coordinates.coordinates

```ts
coordinates: [number, number];
```

###### Example

```ts
[
      -0.1278,
      51.5074
    ]
```

##### UpdateVenueResponse.venue.coordinates.type

```ts
type: "Point";
```

###### Example

```ts
Point
@enum {string}
```

##### UpdateVenueResponse.venue.country?

```ts
optional country: string;
```

###### Example

```ts
United Kingdom
```

##### UpdateVenueResponse.venue.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### UpdateVenueResponse.venue.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### UpdateVenueResponse.venue.description?

```ts
optional description: string;
```

###### Example

```ts
Historic concert hall in London
```

##### UpdateVenueResponse.venue.email?

```ts
optional email: string;
```

###### Example

```ts
info@royalalberthall.com
```

##### UpdateVenueResponse.venue.features

```ts
features: string[];
```

###### Example

```ts
[
      "parking",
      "wheelchair_accessible",
      "bar"
    ]
```

##### UpdateVenueResponse.venue.id

```ts
id: string;
```

###### Example

```ts
vnu_abc123
```

##### UpdateVenueResponse.venue.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### UpdateVenueResponse.venue.name

```ts
name: string;
```

###### Example

```ts
Royal Albert Hall
```

##### UpdateVenueResponse.venue.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### UpdateVenueResponse.venue.phone?

```ts
optional phone: string;
```

###### Example

```ts
+44 20 7589 8212
```

##### UpdateVenueResponse.venue.status

```ts
status: "active" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### UpdateVenueResponse.venue.streetAddress?

```ts
optional streetAddress: string;
```

###### Example

```ts
Kensington Gore
```

##### UpdateVenueResponse.venue.tags

```ts
tags: string[];
```

###### Example

```ts
[
      "concert-hall",
      "historic"
    ]
```

##### UpdateVenueResponse.venue.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### UpdateVenueResponse.venue.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### UpdateVenueResponse.venue.website?

```ts
optional website: string;
```

###### Example

```ts
https://www.royalalberthall.com
```

#### UserAccountRoleAssignment

```ts
UserAccountRoleAssignment: {
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
};
```

##### UserAccountRoleAssignment.account?

```ts
optional account: {
  id: string;
  name: string;
};
```

###### Description

Account details

##### UserAccountRoleAssignment.account.id

```ts
id: string;
```

##### UserAccountRoleAssignment.account.name

```ts
name: string;
```

##### UserAccountRoleAssignment.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_xyz789
```

##### UserAccountRoleAssignment.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### UserAccountRoleAssignment.id

```ts
id: string;
```

###### Example

```ts
uar_abc123
```

##### UserAccountRoleAssignment.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### UserAccountRoleAssignment.role?

```ts
optional role: {
  id: string;
  isSystemRole: boolean;
  name: string;
};
```

###### Description

Role details

##### UserAccountRoleAssignment.role.id

```ts
id: string;
```

##### UserAccountRoleAssignment.role.isSystemRole

```ts
isSystemRole: boolean;
```

##### UserAccountRoleAssignment.role.name

```ts
name: string;
```

##### UserAccountRoleAssignment.roleId

```ts
roleId: string;
```

###### Example

```ts
rol_system_event_manager
```

##### UserAccountRoleAssignment.user?

```ts
optional user: {
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
};
```

###### Description

User details

##### UserAccountRoleAssignment.user.email

```ts
email: string;
```

##### UserAccountRoleAssignment.user.firstName

```ts
firstName: string | null;
```

##### UserAccountRoleAssignment.user.id

```ts
id: string;
```

##### UserAccountRoleAssignment.user.lastName

```ts
lastName: string | null;
```

##### UserAccountRoleAssignment.userId

```ts
userId: string;
```

###### Example

```ts
usr_abc123
```

#### UserInvitation

```ts
UserInvitation: {
  code: string;
  createdAt: string;
  email: string;
  expiresAt: string;
  id: string;
  organisationId: string;
  redeemedAt: string | null;
  userId: string;
};
```

##### UserInvitation.code

```ts
code: string;
```

###### Example

```ts
inv_BvQ8mK...
```

##### UserInvitation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-01T00:00:00.000Z
```

##### UserInvitation.email

```ts
email: string;
```

Format: email

###### Example

```ts
newuser@example.com
```

##### UserInvitation.expiresAt

```ts
expiresAt: string;
```

###### Example

```ts
2024-01-08T00:00:00.000Z
```

##### UserInvitation.id

```ts
id: string;
```

###### Example

```ts
inv_abc123
```

##### UserInvitation.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### UserInvitation.redeemedAt

```ts
redeemedAt: string | null;
```

###### Example

```ts
null
```

##### UserInvitation.userId

```ts
userId: string;
```

###### Example

```ts
usr_pending123
```

#### Venue

```ts
Venue: {
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
};
```

##### Venue.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### Venue.coordinates?

```ts
optional coordinates: {
  coordinates: [number, number];
  type: "Point";
};
```

##### Venue.coordinates.coordinates

```ts
coordinates: [number, number];
```

###### Example

```ts
[
      -0.1278,
      51.5074
    ]
```

##### Venue.coordinates.type

```ts
type: "Point";
```

###### Example

```ts
Point
@enum {string}
```

##### Venue.country?

```ts
optional country: string;
```

###### Example

```ts
United Kingdom
```

##### Venue.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### Venue.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### Venue.description?

```ts
optional description: string;
```

###### Example

```ts
Historic concert hall in London
```

##### Venue.email?

```ts
optional email: string;
```

###### Example

```ts
info@royalalberthall.com
```

##### Venue.features

```ts
features: string[];
```

###### Example

```ts
[
      "parking",
      "wheelchair_accessible",
      "bar"
    ]
```

##### Venue.id

```ts
id: string;
```

###### Example

```ts
vnu_abc123
```

##### Venue.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### Venue.name

```ts
name: string;
```

###### Example

```ts
Royal Albert Hall
```

##### Venue.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### Venue.phone?

```ts
optional phone: string;
```

###### Example

```ts
+44 20 7589 8212
```

##### Venue.status

```ts
status: "active" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### Venue.streetAddress?

```ts
optional streetAddress: string;
```

###### Example

```ts
Kensington Gore
```

##### Venue.tags

```ts
tags: string[];
```

###### Example

```ts
[
      "concert-hall",
      "historic"
    ]
```

##### Venue.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### Venue.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### Venue.website?

```ts
optional website: string;
```

###### Example

```ts
https://www.royalalberthall.com
```

#### VenueLayout

```ts
VenueLayout: {
  accountId: string;
  areas: unknown[];
  categories: unknown[];
  createdAt: string;
  createdBy?: string;
  decorations?: {
     id: string;
     label?: string;
     name?: string;
     position: {
        height: number;
        rotation?: number;
        width: number;
        x: number;
        y: number;
     };
     style?: {
        fill?: string;
        fontSize?: number;
        fontWeight?: string;
        stroke?: string;
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
  id: string;
  isDeleted: boolean;
  name: string;
  organisationId: string;
  status: "active" | "archived";
  tags: string[];
  totalCapacity: number;
  updatedAt: string;
  venueId: string;
};
```

##### VenueLayout.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_ghi012
```

##### VenueLayout.areas

```ts
areas: unknown[];
```

###### Example

```ts
[]
```

##### VenueLayout.categories

```ts
categories: unknown[];
```

###### Example

```ts
[]
```

##### VenueLayout.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### VenueLayout.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### VenueLayout.decorations?

```ts
optional decorations: {
  id: string;
  label?: string;
  name?: string;
  position: {
     height: number;
     rotation?: number;
     width: number;
     x: number;
     y: number;
  };
  style?: {
     fill?: string;
     fontSize?: number;
     fontWeight?: string;
     stroke?: string;
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
```

###### Example

```ts
[]
```

##### VenueLayout.description?

```ts
optional description: string;
```

###### Example

```ts
Standard theatre configuration
```

##### VenueLayout.id

```ts
id: string;
```

###### Example

```ts
vlt_abc123
```

##### VenueLayout.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### VenueLayout.name

```ts
name: string;
```

###### Example

```ts
Theatre Mode
```

##### VenueLayout.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### VenueLayout.status

```ts
status: "active" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### VenueLayout.tags

```ts
tags: string[];
```

###### Example

```ts
[
      "theatre",
      "seated"
    ]
```

##### VenueLayout.totalCapacity

```ts
totalCapacity: number;
```

###### Example

```ts
1500
```

##### VenueLayout.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### VenueLayout.venueId

```ts
venueId: string;
```

###### Example

```ts
vnu_def456
```

#### VenueLayoutArea

```ts
VenueLayoutArea: {
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
```

##### VenueLayoutArea.capacity

```ts
capacity: number;
```

###### Example

```ts
500
```

##### VenueLayoutArea.color?

```ts
optional color: string;
```

###### Example

```ts
#FFD700
```

##### VenueLayoutArea.description?

```ts
optional description: string;
```

###### Example

```ts
General admission area
```

##### VenueLayoutArea.displayOrder

```ts
displayOrder: number;
```

###### Example

```ts
1
```

##### VenueLayoutArea.id

```ts
id: string;
```

###### Example

```ts
vla_abc123
```

##### VenueLayoutArea.name

```ts
name: string;
```

###### Example

```ts
Main Floor
```

##### VenueLayoutArea.seats?

```ts
optional seats: unknown[];
```

###### Example

```ts
[]
```

##### VenueLayoutArea.status

```ts
status: "active" | "inactive";
```

###### Example

```ts
active
@enum {string}
```

##### VenueLayoutArea.type

```ts
type: "unallocated" | "allocated";
```

###### Example

```ts
unallocated
@enum {string}
```

#### VenueLayoutCategory

```ts
VenueLayoutCategory: {
  color?: string;
  description?: string;
  displayOrder: number;
  id: string;
  name: string;
};
```

##### VenueLayoutCategory.color?

```ts
optional color: string;
```

###### Example

```ts
#FFD700
```

##### VenueLayoutCategory.description?

```ts
optional description: string;
```

###### Example

```ts
Best seats in the house
```

##### VenueLayoutCategory.displayOrder

```ts
displayOrder: number;
```

###### Example

```ts
1
```

##### VenueLayoutCategory.id

```ts
id: string;
```

###### Example

```ts
vlc_abc123
```

##### VenueLayoutCategory.name

```ts
name: string;
```

###### Example

```ts
Premium
```

#### VenueLayoutSeat

```ts
VenueLayoutSeat: {
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
     rotation?: number;
     x: number;
     y: number;
  };
  publicNotes?: string;
  row: string;
  section?: string;
  status: "available" | "blocked" | "accessible" | "held" | "removed";
};
```

##### VenueLayoutSeat.attributes?

```ts
optional attributes: string[];
```

##### VenueLayoutSeat.categoryId?

```ts
optional categoryId: string;
```

###### Example

```ts
vlc_premium
```

##### VenueLayoutSeat.companionSeats?

```ts
optional companionSeats: string[];
```

##### VenueLayoutSeat.companionTo?

```ts
optional companionTo: string;
```

##### VenueLayoutSeat.holdType?

```ts
optional holdType: string;
```

##### VenueLayoutSeat.id

```ts
id: string;
```

###### Example

```ts
vlas_abc123
```

##### VenueLayoutSeat.internalNotes?

```ts
optional internalNotes: string;
```

##### VenueLayoutSeat.label

```ts
label: string;
```

###### Example

```ts
Orchestra Center, Row A, Seat 15
```

##### VenueLayoutSeat.number

```ts
number: string;
```

###### Example

```ts
15
```

##### VenueLayoutSeat.position?

```ts
optional position: {
  rotation?: number;
  x: number;
  y: number;
};
```

##### VenueLayoutSeat.position.rotation?

```ts
optional rotation: number;
```

##### VenueLayoutSeat.position.x

```ts
x: number;
```

##### VenueLayoutSeat.position.y

```ts
y: number;
```

##### VenueLayoutSeat.publicNotes?

```ts
optional publicNotes: string;
```

##### VenueLayoutSeat.row

```ts
row: string;
```

###### Example

```ts
A
```

##### VenueLayoutSeat.section?

```ts
optional section: string;
```

###### Example

```ts
Orchestra Center
```

##### VenueLayoutSeat.status

```ts
status: "available" | "blocked" | "accessible" | "held" | "removed";
```

###### Example

```ts
available
@enum {string}
```
