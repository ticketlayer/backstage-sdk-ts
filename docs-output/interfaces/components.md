[**@ticketlayer/backstage-sdk**](../README.md)

***

[@ticketlayer/backstage-sdk](../README.md) / components

# Interface: components

Defined in: generated/types.ts:1929

## Properties

### headers

```ts
headers: never;
```

Defined in: generated/types.ts:4297

***

### parameters

```ts
parameters: {
  orgHeader: string;
};
```

Defined in: generated/types.ts:4292

#### orgHeader

```ts
orgHeader: string;
```

##### Description

Organisation slug to scope the request

***

### pathItems

```ts
pathItems: never;
```

Defined in: generated/types.ts:4298

***

### requestBodies

```ts
requestBodies: never;
```

Defined in: generated/types.ts:4296

***

### responses

```ts
responses: never;
```

Defined in: generated/types.ts:4291

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
  AddLineItemResponse: {
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
  ApplicationFee:   | {
     type: "percentage" | "fixed";
     value: number;
   }
     | null;
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
  AuditLogEntry: {
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
  };
  AutoTopupConfig:   | {
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
     | null;
  BlockCustomerResponse: {
     customer: {
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
     };
  };
  BulkAddSeatsResponse: {
     seatsAdded: number;
     venueLayout?: unknown;
  };
  BulkImportSeatsResponse: {
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
  };
  CancelOrderResponse: {
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
  };
  CancelPaymentResponse: {
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
      } & {
        accountId: string;
        amount: number;
        applicationFee: number | null;
        cancelledAt: string | null;
        capturedAt: string | null;
        clientSecret: string | null;
        createdAt: string;
        currency: string;
        expiresAt: string | null;
        externalPaymentId: string | null;
        failedAt: string | null;
        failureCode: string | null;
        failureMessage: string | null;
        id: string;
        isPartialPayment: boolean;
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        netAmount: number | null;
        orderId: string;
        orderNumber: string;
        organisationId: string;
        paymentMethod:   | {
           brand: string | null;
           expiryMonth: number | null;
           expiryYear: number | null;
           last4: string | null;
           type: "card" | "bank_transfer" | "cash" | "wallet";
         }
           | null;
        paymentProviderId: string;
        paymentType:   | "bank_transfer"
           | "online_card"
           | "online_bank_transfer"
           | "online_wallet"
           | "in_person_card"
           | "in_person_cash"
           | "cheque";
        processingFee: number | null;
        redirectUrl: string | null;
        remainingBalance: number | null;
        status:   | "cancelled"
           | "pending"
           | "succeeded"
           | "failed"
           | "processing"
           | "expired"
           | "requires_action"
           | "created";
        updatedAt: string;
     };
  };
  CancelSubscriptionResponse: {
     subscription: {
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
     };
  };
  CanSellResponse: {
     canSell: boolean;
     currentBalance: number;
     reason: string | null;
  };
  CheckAvailabilityResponse: {
     available: boolean;
     availableQuantity: number;
     requestedQuantity: number;
  };
  ConfirmReservationResponse: {
     reservation: {
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
     };
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
  CreateCustomerResponse: {
     customer: {
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
  CreateHoldResponse: {
     reservation: {
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
     };
  };
  CreateInventoryResponse: {
     inventory: {
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
     };
  };
  CreateOrderResponse: {
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
  };
  CreatePaymentProviderResponse: {
     provider: {
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
        type:   | "bank_transfer"
           | "cash"
           | "stripe_connect"
           | "stripe_direct"
           | "adyen"
           | "square"
           | "paypal";
        updatedAt: string;
     };
  };
  CreatePaymentResponse: {
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
      } & {
        accountId: string;
        amount: number;
        applicationFee: number | null;
        cancelledAt: string | null;
        capturedAt: string | null;
        clientSecret: string | null;
        createdAt: string;
        currency: string;
        expiresAt: string | null;
        externalPaymentId: string | null;
        failedAt: string | null;
        failureCode: string | null;
        failureMessage: string | null;
        id: string;
        isPartialPayment: boolean;
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        netAmount: number | null;
        orderId: string;
        orderNumber: string;
        organisationId: string;
        paymentMethod:   | {
           brand: string | null;
           expiryMonth: number | null;
           expiryYear: number | null;
           last4: string | null;
           type: "card" | "bank_transfer" | "cash" | "wallet";
         }
           | null;
        paymentProviderId: string;
        paymentType:   | "bank_transfer"
           | "online_card"
           | "online_bank_transfer"
           | "online_wallet"
           | "in_person_card"
           | "in_person_cash"
           | "cheque";
        processingFee: number | null;
        redirectUrl: string | null;
        remainingBalance: number | null;
        status:   | "cancelled"
           | "pending"
           | "succeeded"
           | "failed"
           | "processing"
           | "expired"
           | "requires_action"
           | "created";
        updatedAt: string;
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
  CreatePurchaseRequest: {
     currency?: string;
     email?: string;
     packageId: string;
     paymentMethodId: string;
  };
  CreateRefundResponse: {
     refund: {
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
  CreateSubscriptionRequest: {
     currency?: string;
     email?: string;
     interval: "month" | "year";
     packageId: string;
     paymentMethodId: string;
  };
  CreateSubscriptionResponse: {
     subscription: {
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
     };
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
  CreditBalance: {
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
  };
  CreditPackage: {
     baseCurrency: string;
     basePrice: string;
     credits: number;
     discountPercent: string;
     displayOrder: number;
     finalPrice: string;
     id: string;
     isActive: boolean;
     name: string;
  };
  CreditTransaction: {
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
  Customer: {
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
  DeleteInventoryResponse: {
     message: string;
  };
  DeletePaymentProviderResponse: {
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
  ExtendReservationResponse: {
     reservation: {
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
     };
  };
  FederateRequest: {
     token: string;
  };
  FeeStructure:   | {
     currency?: string;
     fixed?: number;
     percentage?: number;
     type: "percentage" | "fixed" | "percentage_plus_fixed";
   }
     | null;
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
  GetAuditLogResponse: {
     auditLog: {
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
     }[];
  };
  GetAutoTopupResponse: {
     autoTopup:   | {
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
        | null;
  };
  GetBalanceResponse: {
     balance: {
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
     };
  };
  GetCustomerResponse: {
     customer: {
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
  GetInventoryResponse: {
     inventory: {
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
     };
  };
  GetInvoiceResponse: {
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
  GetOrderResponse: {
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
  GetPaymentProviderResponse: {
     provider: {
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
        type:   | "bank_transfer"
           | "cash"
           | "stripe_connect"
           | "stripe_direct"
           | "adyen"
           | "square"
           | "paypal";
        updatedAt: string;
     };
  };
  GetPaymentResponse: {
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
      } & {
        accountId: string;
        amount: number;
        applicationFee: number | null;
        cancelledAt: string | null;
        capturedAt: string | null;
        clientSecret: string | null;
        createdAt: string;
        currency: string;
        expiresAt: string | null;
        externalPaymentId: string | null;
        failedAt: string | null;
        failureCode: string | null;
        failureMessage: string | null;
        id: string;
        isPartialPayment: boolean;
        metadata:   | {
         [key: string]: unknown;
         }
           | null;
        netAmount: number | null;
        orderId: string;
        orderNumber: string;
        organisationId: string;
        paymentMethod:   | {
           brand: string | null;
           expiryMonth: number | null;
           expiryYear: number | null;
           last4: string | null;
           type: "card" | "bank_transfer" | "cash" | "wallet";
         }
           | null;
        paymentProviderId: string;
        paymentType:   | "bank_transfer"
           | "online_card"
           | "online_bank_transfer"
           | "online_wallet"
           | "in_person_card"
           | "in_person_cash"
           | "cheque";
        processingFee: number | null;
        redirectUrl: string | null;
        remainingBalance: number | null;
        status:   | "cancelled"
           | "pending"
           | "succeeded"
           | "failed"
           | "processing"
           | "expired"
           | "requires_action"
           | "created";
        updatedAt: string;
     };
  };
  GetPaymentStatusResponse: {
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
  GetReservationResponse: {
     reservation: {
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
  InitiatePaymentResponse: {
     clientSecret: string | null;
     expiresAt: string | null;
     paymentId: string;
     redirectUrl: string | null;
     status: "pending" | "succeeded" | "failed" | "processing" | "requires_action";
  };
  Inventory: {
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
  };
  InventoryReservation: {
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
  };
  InventorySeat: {
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
  };
  Invoice: {
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
  ListCustomersResponse: {
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
  ListInventoryResponse: {
     inventory: {
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
     }[];
  };
  ListInvoicesResponse: {
     invoices: {
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
     }[];
  };
  ListOrdersResponse: {
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
     }[];
     pagination: {
        limit: number;
        page: number;
        total: number;
        totalPages: number;
     };
  };
  ListPackagesResponse: {
     packages: {
        baseCurrency: string;
        basePrice: string;
        credits: number;
        discountPercent: string;
        displayOrder: number;
        finalPrice: string;
        id: string;
        isActive: boolean;
        name: string;
     }[];
  };
  ListPaymentProvidersResponse: {
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
        type:   | "bank_transfer"
           | "cash"
           | "stripe_connect"
           | "stripe_direct"
           | "adyen"
           | "square"
           | "paypal";
        updatedAt: string;
     }[];
  };
  ListPaymentsResponse: {
     payments: {
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
  ListRefundsResponse: {
     refunds: {
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
     }[];
  };
  ListReservationsResponse: {
     reservations: {
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
  ListSeatsResponse: {
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
  };
  ListSubscriptionsResponse: {
     subscriptions: {
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
     }[];
  };
  ListTransactionsResponse: {
     transactions: {
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
  Order: {
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
  OrderLineItem: {
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
  Payment: {
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
  PaymentMethodDetails:   | {
     brand: string | null;
     expiryMonth: number | null;
     expiryYear: number | null;
     last4: string | null;
     type: "card" | "bank_transfer" | "cash" | "wallet";
   }
     | null;
  PaymentProvider: {
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
     type:   | "bank_transfer"
        | "cash"
        | "stripe_connect"
        | "stripe_direct"
        | "adyen"
        | "square"
        | "paypal";
     updatedAt: string;
  };
  PaymentProviderCapabilities:   | {
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
  PurchaseResult: {
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
  Refund: {
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
  };
  ReleaseHoldResponse: {
     message: string;
  };
  ReleaseReservationResponse: {
     message: string;
  };
  RemoveAssignmentResponse: {
     success: boolean;
  };
  RemoveLineItemResponse: {
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
  ReserveInventoryResponse: {
     reservation: {
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
  Subscription: {
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
  TransitionOrderStatusResponse: {
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
  };
  UnblockCustomerResponse: {
     customer: {
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
     };
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
  UpdateAutoTopupRequest: {
     enabled: boolean;
     thresholdCredits: number;
     topupPackageId: string;
  };
  UpdateAutoTopupResponse: {
     autoTopup: {
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
     } & Record<string, never>;
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
  UpdateCustomerResponse: {
     customer: {
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
     };
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
  UpdateInventoryResponse: {
     inventory: {
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
     };
  };
  UpdateLineItemResponse: {
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
  };
  UpdateOrderResponse: {
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
  UpdatePaymentProviderResponse: {
     provider: {
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
        type:   | "bank_transfer"
           | "cash"
           | "stripe_connect"
           | "stripe_direct"
           | "adyen"
           | "square"
           | "paypal";
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
  ValidateOrderResponse: {
     errors: {
        code: string;
        itemId?: string;
        message: string;
     }[];
     valid: boolean;
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

Defined in: generated/types.ts:1930

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

#### AddLineItemResponse

```ts
AddLineItemResponse: {
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
};
```

##### AddLineItemResponse.item

```ts
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
```

##### AddLineItemResponse.item.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### AddLineItemResponse.item.description

```ts
description: string | null;
```

###### Example

```ts
Entry to main event area
```

##### AddLineItemResponse.item.feeDetails

```ts
feeDetails: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
null
```

##### AddLineItemResponse.item.id

```ts
id: string;
```

###### Example

```ts
oli_abc123
```

##### AddLineItemResponse.item.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "source": "web"
             *     }
```

##### AddLineItemResponse.item.name

```ts
name: string;
```

###### Example

```ts
General Admission
```

##### AddLineItemResponse.item.orderId

```ts
orderId: string;
```

###### Example

```ts
ord_abc123xyz789
```

##### AddLineItemResponse.item.productDetails

```ts
productDetails: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
null
```

##### AddLineItemResponse.item.quantity

```ts
quantity: number;
```

###### Example

```ts
2
```

##### AddLineItemResponse.item.ticketDetails

```ts
ticketDetails: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "eventId": "evt_123"
             *     }
```

##### AddLineItemResponse.item.totalPrice

```ts
totalPrice: string;
```

###### Example

```ts
50.00
```

##### AddLineItemResponse.item.type

```ts
type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
```

###### Example

```ts
ticket
@enum {string}
```

##### AddLineItemResponse.item.unitPrice

```ts
unitPrice: string;
```

###### Example

```ts
25.00
```

##### AddLineItemResponse.item.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### AddLineItemResponse.order

```ts
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
```

##### AddLineItemResponse.order.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_xyz789
```

##### AddLineItemResponse.order.cancellationReason

```ts
cancellationReason: string | null;
```

###### Example

```ts
null
```

##### AddLineItemResponse.order.cancelledAt

```ts
cancelledAt: string | null;
```

###### Example

```ts
null
```

##### AddLineItemResponse.order.channel

```ts
channel: string | null;
```

###### Example

```ts
web
```

##### AddLineItemResponse.order.completedAt

```ts
completedAt: string | null;
```

###### Example

```ts
null
```

##### AddLineItemResponse.order.confirmedAt

```ts
confirmedAt: string | null;
```

###### Example

```ts
null
```

##### AddLineItemResponse.order.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### AddLineItemResponse.order.currency

```ts
currency: string;
```

###### Example

```ts
GBP
```

##### AddLineItemResponse.order.customerId

```ts
customerId: string | null;
```

###### Example

```ts
cus_abc123
```

##### AddLineItemResponse.order.customerNotes

```ts
customerNotes: string | null;
```

###### Example

```ts
Please contact me before delivery
```

##### AddLineItemResponse.order.discountTotal

```ts
discountTotal: string;
```

###### Example

```ts
0.00
```

##### AddLineItemResponse.order.expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-01-15T10:45:00Z
```

##### AddLineItemResponse.order.feeTotal

```ts
feeTotal: string;
```

###### Example

```ts
2.50
```

##### AddLineItemResponse.order.id

```ts
id: string;
```

###### Example

```ts
ord_abc123xyz789
```

##### AddLineItemResponse.order.internalNotes

```ts
internalNotes: string | null;
```

###### Example

```ts
VIP customer
```

##### AddLineItemResponse.order.isGuestCheckout

```ts
isGuestCheckout: boolean;
```

###### Example

```ts
false
```

##### AddLineItemResponse.order.items?

```ts
optional items: {
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
```

###### Description

Order line items

##### AddLineItemResponse.order.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "promoCode": "SUMMER20"
             *     }
```

##### AddLineItemResponse.order.orderNumber

```ts
orderNumber: string;
```

###### Example

```ts
ORD-ABC123
```

##### AddLineItemResponse.order.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### AddLineItemResponse.order.status

```ts
status: 
  | "completed"
  | "cancelled"
  | "pending"
  | "failed"
  | "refunded"
  | "confirmed"
  | "processing"
  | "expired";
```

###### Example

```ts
pending
@enum {string}
```

##### AddLineItemResponse.order.subtotal

```ts
subtotal: string;
```

###### Example

```ts
50.00
```

##### AddLineItemResponse.order.taxTotal

```ts
taxTotal: string;
```

###### Example

```ts
10.00
```

##### AddLineItemResponse.order.total

```ts
total: string;
```

###### Example

```ts
62.50
```

##### AddLineItemResponse.order.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
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

#### ApplicationFee

```ts
ApplicationFee: 
  | {
  type: "percentage" | "fixed";
  value: number;
}
  | null;
```

##### Type Declaration

```ts
{
  type: "percentage" | "fixed";
  value: number;
}
```

`null`

##### Description

Application fee configuration

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

#### AuditLogEntry

```ts
AuditLogEntry: {
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
};
```

##### AuditLogEntry.action

```ts
action: string;
```

###### Example

```ts
reserve
```

##### AuditLogEntry.actorId

```ts
actorId: string | null;
```

###### Example

```ts
usr_abc123
```

##### AuditLogEntry.actorType

```ts
actorType: string | null;
```

###### Example

```ts
user
```

##### AuditLogEntry.changes

```ts
changes: {
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
             *       "quantity": 2,
             *       "type": "temporary"
             *     }
```

##### AuditLogEntry.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### AuditLogEntry.id

```ts
id: number;
```

###### Example

```ts
1
```

##### AuditLogEntry.inventoryId

```ts
inventoryId: string;
```

###### Example

```ts
inv_abc123
```

##### AuditLogEntry.referenceId

```ts
referenceId: string | null;
```

###### Example

```ts
ord_def456
```

##### AuditLogEntry.referenceType

```ts
referenceType: string | null;
```

###### Example

```ts
order
```

#### AutoTopupConfig

```ts
AutoTopupConfig: 
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
  | null;
```

##### Type Declaration

```ts
{
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
```

`null`

#### BlockCustomerResponse

```ts
BlockCustomerResponse: {
  customer: {
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
  };
};
```

##### BlockCustomerResponse.customer

```ts
customer: {
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
};
```

##### BlockCustomerResponse.customer.accountId

```ts
accountId: string | null;
```

###### Example

```ts
acc_xyz789
```

##### BlockCustomerResponse.customer.blockedAt

```ts
blockedAt: string | null;
```

###### Example

```ts
null
```

##### BlockCustomerResponse.customer.blockedReason

```ts
blockedReason: string | null;
```

###### Example

```ts
null
```

##### BlockCustomerResponse.customer.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### BlockCustomerResponse.customer.email

```ts
email: string;
```

###### Example

```ts
customer@example.com
```

##### BlockCustomerResponse.customer.externalId

```ts
externalId: string | null;
```

###### Example

```ts
ext_cust_12345
```

##### BlockCustomerResponse.customer.firstName

```ts
firstName: string | null;
```

###### Example

```ts
John
```

##### BlockCustomerResponse.customer.id

```ts
id: string;
```

###### Example

```ts
cus_abc123
```

##### BlockCustomerResponse.customer.isBlocked

```ts
isBlocked: boolean;
```

###### Example

```ts
false
```

##### BlockCustomerResponse.customer.lastName

```ts
lastName: string | null;
```

###### Example

```ts
Doe
```

##### BlockCustomerResponse.customer.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "loyaltyTier": "gold"
             *     }
```

##### BlockCustomerResponse.customer.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### BlockCustomerResponse.customer.phone

```ts
phone: string | null;
```

###### Example

```ts
+44 7700 900000
```

##### BlockCustomerResponse.customer.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
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

#### BulkImportSeatsResponse

```ts
BulkImportSeatsResponse: {
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
};
```

##### BulkImportSeatsResponse.count

```ts
count: number;
```

###### Example

```ts
100
```

##### BulkImportSeatsResponse.seats

```ts
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
```

#### CancelOrderResponse

```ts
CancelOrderResponse: {
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
};
```

##### CancelOrderResponse.order

```ts
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
```

##### CancelOrderResponse.order.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_xyz789
```

##### CancelOrderResponse.order.cancellationReason

```ts
cancellationReason: string | null;
```

###### Example

```ts
null
```

##### CancelOrderResponse.order.cancelledAt

```ts
cancelledAt: string | null;
```

###### Example

```ts
null
```

##### CancelOrderResponse.order.channel

```ts
channel: string | null;
```

###### Example

```ts
web
```

##### CancelOrderResponse.order.completedAt

```ts
completedAt: string | null;
```

###### Example

```ts
null
```

##### CancelOrderResponse.order.confirmedAt

```ts
confirmedAt: string | null;
```

###### Example

```ts
null
```

##### CancelOrderResponse.order.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### CancelOrderResponse.order.currency

```ts
currency: string;
```

###### Example

```ts
GBP
```

##### CancelOrderResponse.order.customerId

```ts
customerId: string | null;
```

###### Example

```ts
cus_abc123
```

##### CancelOrderResponse.order.customerNotes

```ts
customerNotes: string | null;
```

###### Example

```ts
Please contact me before delivery
```

##### CancelOrderResponse.order.discountTotal

```ts
discountTotal: string;
```

###### Example

```ts
0.00
```

##### CancelOrderResponse.order.expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-01-15T10:45:00Z
```

##### CancelOrderResponse.order.feeTotal

```ts
feeTotal: string;
```

###### Example

```ts
2.50
```

##### CancelOrderResponse.order.id

```ts
id: string;
```

###### Example

```ts
ord_abc123xyz789
```

##### CancelOrderResponse.order.internalNotes

```ts
internalNotes: string | null;
```

###### Example

```ts
VIP customer
```

##### CancelOrderResponse.order.isGuestCheckout

```ts
isGuestCheckout: boolean;
```

###### Example

```ts
false
```

##### CancelOrderResponse.order.items?

```ts
optional items: {
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
```

###### Description

Order line items

##### CancelOrderResponse.order.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "promoCode": "SUMMER20"
             *     }
```

##### CancelOrderResponse.order.orderNumber

```ts
orderNumber: string;
```

###### Example

```ts
ORD-ABC123
```

##### CancelOrderResponse.order.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### CancelOrderResponse.order.status

```ts
status: 
  | "completed"
  | "cancelled"
  | "pending"
  | "failed"
  | "refunded"
  | "confirmed"
  | "processing"
  | "expired";
```

###### Example

```ts
pending
@enum {string}
```

##### CancelOrderResponse.order.subtotal

```ts
subtotal: string;
```

###### Example

```ts
50.00
```

##### CancelOrderResponse.order.taxTotal

```ts
taxTotal: string;
```

###### Example

```ts
10.00
```

##### CancelOrderResponse.order.total

```ts
total: string;
```

###### Example

```ts
62.50
```

##### CancelOrderResponse.order.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

#### CancelPaymentResponse

```ts
CancelPaymentResponse: {
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
   } & {
     accountId: string;
     amount: number;
     applicationFee: number | null;
     cancelledAt: string | null;
     capturedAt: string | null;
     clientSecret: string | null;
     createdAt: string;
     currency: string;
     expiresAt: string | null;
     externalPaymentId: string | null;
     failedAt: string | null;
     failureCode: string | null;
     failureMessage: string | null;
     id: string;
     isPartialPayment: boolean;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     netAmount: number | null;
     orderId: string;
     orderNumber: string;
     organisationId: string;
     paymentMethod:   | {
        brand: string | null;
        expiryMonth: number | null;
        expiryYear: number | null;
        last4: string | null;
        type: "card" | "bank_transfer" | "cash" | "wallet";
      }
        | null;
     paymentProviderId: string;
     paymentType:   | "bank_transfer"
        | "online_card"
        | "online_bank_transfer"
        | "online_wallet"
        | "in_person_card"
        | "in_person_cash"
        | "cheque";
     processingFee: number | null;
     redirectUrl: string | null;
     remainingBalance: number | null;
     status:   | "cancelled"
        | "pending"
        | "succeeded"
        | "failed"
        | "processing"
        | "expired"
        | "requires_action"
        | "created";
     updatedAt: string;
  };
};
```

##### CancelPaymentResponse.payment

```ts
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
} & {
  accountId: string;
  amount: number;
  applicationFee: number | null;
  cancelledAt: string | null;
  capturedAt: string | null;
  clientSecret: string | null;
  createdAt: string;
  currency: string;
  expiresAt: string | null;
  externalPaymentId: string | null;
  failedAt: string | null;
  failureCode: string | null;
  failureMessage: string | null;
  id: string;
  isPartialPayment: boolean;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  netAmount: number | null;
  orderId: string;
  orderNumber: string;
  organisationId: string;
  paymentMethod:   | {
     brand: string | null;
     expiryMonth: number | null;
     expiryYear: number | null;
     last4: string | null;
     type: "card" | "bank_transfer" | "cash" | "wallet";
   }
     | null;
  paymentProviderId: string;
  paymentType:   | "bank_transfer"
     | "online_card"
     | "online_bank_transfer"
     | "online_wallet"
     | "in_person_card"
     | "in_person_cash"
     | "cheque";
  processingFee: number | null;
  redirectUrl: string | null;
  remainingBalance: number | null;
  status:   | "cancelled"
     | "pending"
     | "succeeded"
     | "failed"
     | "processing"
     | "expired"
     | "requires_action"
     | "created";
  updatedAt: string;
};
```

###### Type Declaration

###### amount

```ts
amount: string;
```

###### Example

```ts
25.00
```

###### createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

###### currency

```ts
currency: string;
```

###### Example

```ts
USD
```

###### failedAt

```ts
failedAt: string | null;
```

###### Example

```ts
null
```

###### failureCode

```ts
failureCode: string | null;
```

###### Example

```ts
null
```

###### failureMessage

```ts
failureMessage: string | null;
```

###### Example

```ts
null
```

###### id

```ts
id: string;
```

###### Example

```ts
pay_abc123
```

###### invoiceId

```ts
invoiceId: string | null;
```

###### Example

```ts
inv_abc123
```

###### method

```ts
method: string | null;
```

###### Example

```ts
card
```

###### organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_abc123
```

###### paidAt

```ts
paidAt: string | null;
```

###### Example

```ts
2024-01-15T10:35:00Z
```

###### status

```ts
status: "cancelled" | "pending" | "succeeded" | "failed" | "refunded";
```

###### Example

```ts
succeeded
@enum {string}
```

###### updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:35:00Z
```

###### Type Declaration

###### accountId

```ts
accountId: string;
```

###### Example

```ts
acc_xyz789
```

###### amount

```ts
amount: number;
```

###### Example

```ts
97
```

###### applicationFee

```ts
applicationFee: number | null;
```

###### Example

```ts
2
```

###### cancelledAt

```ts
cancelledAt: string | null;
```

###### Example

```ts
null
```

###### capturedAt

```ts
capturedAt: string | null;
```

###### Example

```ts
null
```

###### clientSecret

```ts
clientSecret: string | null;
```

###### Example

```ts
pi_xxx_secret_yyy
```

###### createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

###### currency

```ts
currency: string;
```

###### Example

```ts
GBP
```

###### expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-01-15T10:45:00Z
```

###### externalPaymentId

```ts
externalPaymentId: string | null;
```

###### Example

```ts
pi_1234567890abcdef
```

###### failedAt

```ts
failedAt: string | null;
```

###### Example

```ts
null
```

###### failureCode

```ts
failureCode: string | null;
```

###### Example

```ts
null
```

###### failureMessage

```ts
failureMessage: string | null;
```

###### Example

```ts
null
```

###### id

```ts
id: string;
```

###### Example

```ts
pay_abc123xyz789
```

###### isPartialPayment

```ts
isPartialPayment: boolean;
```

###### Example

```ts
false
```

###### metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
                 *       "customerEmail": "customer@example.com"
                 *     }
```

###### netAmount

```ts
netAmount: number | null;
```

###### Example

```ts
92.09
```

###### orderId

```ts
orderId: string;
```

###### Example

```ts
ord_abc123
```

###### orderNumber

```ts
orderNumber: string;
```

###### Example

```ts
ORD-ABC123
```

###### organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

###### paymentMethod

```ts
paymentMethod: 
  | {
  brand: string | null;
  expiryMonth: number | null;
  expiryYear: number | null;
  last4: string | null;
  type: "card" | "bank_transfer" | "cash" | "wallet";
}
  | null;
```

###### Type Declaration

```ts
{
  brand: string | null;
  expiryMonth: number | null;
  expiryYear: number | null;
  last4: string | null;
  type: "card" | "bank_transfer" | "cash" | "wallet";
}
```

`null`

###### paymentProviderId

```ts
paymentProviderId: string;
```

###### Example

```ts
pp_stripeXxx123
```

###### paymentType

```ts
paymentType: 
  | "bank_transfer"
  | "online_card"
  | "online_bank_transfer"
  | "online_wallet"
  | "in_person_card"
  | "in_person_cash"
  | "cheque";
```

###### Example

```ts
online_card
@enum {string}
```

###### processingFee

```ts
processingFee: number | null;
```

###### Example

```ts
2.91
```

###### redirectUrl

```ts
redirectUrl: string | null;
```

###### Example

```ts
https://checkout.stripe.com/pay/xxx
```

###### remainingBalance

```ts
remainingBalance: number | null;
```

###### Example

```ts
0
```

###### status

```ts
status: 
  | "cancelled"
  | "pending"
  | "succeeded"
  | "failed"
  | "processing"
  | "expired"
  | "requires_action"
  | "created";
```

###### Example

```ts
pending
@enum {string}
```

###### updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

#### CancelSubscriptionResponse

```ts
CancelSubscriptionResponse: {
  subscription: {
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
  };
};
```

##### CancelSubscriptionResponse.subscription

```ts
subscription: {
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
};
```

##### CancelSubscriptionResponse.subscription.cancelledAt

```ts
cancelledAt: string | null;
```

###### Example

```ts
null
```

##### CancelSubscriptionResponse.subscription.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### CancelSubscriptionResponse.subscription.credits

```ts
credits: number;
```

###### Example

```ts
100
```

##### CancelSubscriptionResponse.subscription.currency

```ts
currency: string;
```

###### Example

```ts
USD
```

##### CancelSubscriptionResponse.subscription.currentPeriodEnd

```ts
currentPeriodEnd: string | null;
```

###### Example

```ts
2024-02-15T00:00:00Z
```

##### CancelSubscriptionResponse.subscription.currentPeriodStart

```ts
currentPeriodStart: string | null;
```

###### Example

```ts
2024-01-15T00:00:00Z
```

##### CancelSubscriptionResponse.subscription.endedAt

```ts
endedAt: string | null;
```

###### Example

```ts
null
```

##### CancelSubscriptionResponse.subscription.id

```ts
id: string;
```

###### Example

```ts
sub_abc123
```

##### CancelSubscriptionResponse.subscription.interval

```ts
interval: "month" | "year";
```

###### Example

```ts
month
@enum {string}
```

##### CancelSubscriptionResponse.subscription.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_abc123
```

##### CancelSubscriptionResponse.subscription.packageId

```ts
packageId: string;
```

###### Example

```ts
pkg_100
```

##### CancelSubscriptionResponse.subscription.price

```ts
price: string;
```

###### Example

```ts
25.00
```

##### CancelSubscriptionResponse.subscription.status

```ts
status: "active" | "cancelled" | "paused" | "past_due" | "ended";
```

###### Example

```ts
active
@enum {string}
```

##### CancelSubscriptionResponse.subscription.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

#### CanSellResponse

```ts
CanSellResponse: {
  canSell: boolean;
  currentBalance: number;
  reason: string | null;
};
```

##### CanSellResponse.canSell

```ts
canSell: boolean;
```

###### Example

```ts
true
```

##### CanSellResponse.currentBalance

```ts
currentBalance: number;
```

###### Example

```ts
150
```

##### CanSellResponse.reason

```ts
reason: string | null;
```

###### Example

```ts
null
```

#### CheckAvailabilityResponse

```ts
CheckAvailabilityResponse: {
  available: boolean;
  availableQuantity: number;
  requestedQuantity: number;
};
```

##### CheckAvailabilityResponse.available

```ts
available: boolean;
```

###### Example

```ts
true
```

##### CheckAvailabilityResponse.availableQuantity

```ts
availableQuantity: number;
```

###### Example

```ts
50
```

##### CheckAvailabilityResponse.requestedQuantity

```ts
requestedQuantity: number;
```

###### Example

```ts
2
```

#### ConfirmReservationResponse

```ts
ConfirmReservationResponse: {
  reservation: {
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
  };
};
```

##### ConfirmReservationResponse.reservation

```ts
reservation: {
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
};
```

##### ConfirmReservationResponse.reservation.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### ConfirmReservationResponse.reservation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### ConfirmReservationResponse.reservation.expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-12-28T10:45:00Z
```

##### ConfirmReservationResponse.reservation.heldBy

```ts
heldBy: string | null;
```

###### Example

```ts
usr_abc123
```

##### ConfirmReservationResponse.reservation.id

```ts
id: string;
```

###### Example

```ts
ivr_abc123
```

##### ConfirmReservationResponse.reservation.inventoryId

```ts
inventoryId: string;
```

###### Example

```ts
inv_ghi789
```

##### ConfirmReservationResponse.reservation.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
null
```

##### ConfirmReservationResponse.reservation.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### ConfirmReservationResponse.reservation.quantity

```ts
quantity: number;
```

###### Example

```ts
2
```

##### ConfirmReservationResponse.reservation.reason

```ts
reason: string | null;
```

###### Example

```ts
Customer checkout
```

##### ConfirmReservationResponse.reservation.referenceId

```ts
referenceId: string | null;
```

###### Example

```ts
ord_jkl012
```

##### ConfirmReservationResponse.reservation.referenceType

```ts
referenceType: "subscription" | "order" | "hold" | null;
```

###### Description

Type of reference for this reservation

###### Example

```ts
order
@enum {string|null}
```

##### ConfirmReservationResponse.reservation.seatIds

```ts
seatIds: string[] | null;
```

###### Example

```ts
[
      "ivs_abc123",
      "ivs_def456"
    ]
```

##### ConfirmReservationResponse.reservation.type

```ts
type: "confirmed" | "maintenance" | "hold" | "temporary";
```

###### Description

Type of reservation

###### Example

```ts
temporary
@enum {string}
```

##### ConfirmReservationResponse.reservation.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
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

#### CreateCustomerResponse

```ts
CreateCustomerResponse: {
  customer: {
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
  };
};
```

##### CreateCustomerResponse.customer

```ts
customer: {
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
};
```

##### CreateCustomerResponse.customer.accountId

```ts
accountId: string | null;
```

###### Example

```ts
acc_xyz789
```

##### CreateCustomerResponse.customer.blockedAt

```ts
blockedAt: string | null;
```

###### Example

```ts
null
```

##### CreateCustomerResponse.customer.blockedReason

```ts
blockedReason: string | null;
```

###### Example

```ts
null
```

##### CreateCustomerResponse.customer.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### CreateCustomerResponse.customer.email

```ts
email: string;
```

###### Example

```ts
customer@example.com
```

##### CreateCustomerResponse.customer.externalId

```ts
externalId: string | null;
```

###### Example

```ts
ext_cust_12345
```

##### CreateCustomerResponse.customer.firstName

```ts
firstName: string | null;
```

###### Example

```ts
John
```

##### CreateCustomerResponse.customer.id

```ts
id: string;
```

###### Example

```ts
cus_abc123
```

##### CreateCustomerResponse.customer.isBlocked

```ts
isBlocked: boolean;
```

###### Example

```ts
false
```

##### CreateCustomerResponse.customer.lastName

```ts
lastName: string | null;
```

###### Example

```ts
Doe
```

##### CreateCustomerResponse.customer.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "loyaltyTier": "gold"
             *     }
```

##### CreateCustomerResponse.customer.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### CreateCustomerResponse.customer.phone

```ts
phone: string | null;
```

###### Example

```ts
+44 7700 900000
```

##### CreateCustomerResponse.customer.updatedAt

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

#### CreateHoldResponse

```ts
CreateHoldResponse: {
  reservation: {
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
  };
};
```

##### CreateHoldResponse.reservation

```ts
reservation: {
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
};
```

##### CreateHoldResponse.reservation.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### CreateHoldResponse.reservation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### CreateHoldResponse.reservation.expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-12-28T10:45:00Z
```

##### CreateHoldResponse.reservation.heldBy

```ts
heldBy: string | null;
```

###### Example

```ts
usr_abc123
```

##### CreateHoldResponse.reservation.id

```ts
id: string;
```

###### Example

```ts
ivr_abc123
```

##### CreateHoldResponse.reservation.inventoryId

```ts
inventoryId: string;
```

###### Example

```ts
inv_ghi789
```

##### CreateHoldResponse.reservation.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
null
```

##### CreateHoldResponse.reservation.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### CreateHoldResponse.reservation.quantity

```ts
quantity: number;
```

###### Example

```ts
2
```

##### CreateHoldResponse.reservation.reason

```ts
reason: string | null;
```

###### Example

```ts
Customer checkout
```

##### CreateHoldResponse.reservation.referenceId

```ts
referenceId: string | null;
```

###### Example

```ts
ord_jkl012
```

##### CreateHoldResponse.reservation.referenceType

```ts
referenceType: "subscription" | "order" | "hold" | null;
```

###### Description

Type of reference for this reservation

###### Example

```ts
order
@enum {string|null}
```

##### CreateHoldResponse.reservation.seatIds

```ts
seatIds: string[] | null;
```

###### Example

```ts
[
      "ivs_abc123",
      "ivs_def456"
    ]
```

##### CreateHoldResponse.reservation.type

```ts
type: "confirmed" | "maintenance" | "hold" | "temporary";
```

###### Description

Type of reservation

###### Example

```ts
temporary
@enum {string}
```

##### CreateHoldResponse.reservation.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

#### CreateInventoryResponse

```ts
CreateInventoryResponse: {
  inventory: {
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
  };
};
```

##### CreateInventoryResponse.inventory

```ts
inventory: {
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
};
```

##### CreateInventoryResponse.inventory.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### CreateInventoryResponse.inventory.available

```ts
available: number;
```

###### Example

```ts
450
```

##### CreateInventoryResponse.inventory.confirmed

```ts
confirmed: number;
```

###### Example

```ts
20
```

##### CreateInventoryResponse.inventory.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### CreateInventoryResponse.inventory.eventId

```ts
eventId: string | null;
```

###### Example

```ts
evt_ghi789
```

##### CreateInventoryResponse.inventory.eventLayoutAreaId

```ts
eventLayoutAreaId: string | null;
```

###### Example

```ts
ela_mno345
```

##### CreateInventoryResponse.inventory.eventOccurrenceId

```ts
eventOccurrenceId: string | null;
```

###### Example

```ts
evo_jkl012
```

##### CreateInventoryResponse.inventory.held

```ts
held: number;
```

###### Example

```ts
0
```

##### CreateInventoryResponse.inventory.id

```ts
id: string;
```

###### Example

```ts
inv_abc123
```

##### CreateInventoryResponse.inventory.isAllocated

```ts
isAllocated: boolean;
```

###### Example

```ts
false
```

##### CreateInventoryResponse.inventory.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
null
```

##### CreateInventoryResponse.inventory.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### CreateInventoryResponse.inventory.productId

```ts
productId: string | null;
```

###### Example

```ts
prd_pqr678
```

##### CreateInventoryResponse.inventory.reserved

```ts
reserved: number;
```

###### Example

```ts
30
```

##### CreateInventoryResponse.inventory.sourceType

```ts
sourceType: "event_occurrence_area" | "product";
```

###### Description

Type of inventory source

###### Example

```ts
event_occurrence_area
@enum {string}
```

##### CreateInventoryResponse.inventory.totalCapacity

```ts
totalCapacity: number;
```

###### Example

```ts
500
```

##### CreateInventoryResponse.inventory.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### CreateInventoryResponse.inventory.version

```ts
version: number;
```

###### Example

```ts
1
```

#### CreateOrderResponse

```ts
CreateOrderResponse: {
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
};
```

##### CreateOrderResponse.order

```ts
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
```

##### CreateOrderResponse.order.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_xyz789
```

##### CreateOrderResponse.order.cancellationReason

```ts
cancellationReason: string | null;
```

###### Example

```ts
null
```

##### CreateOrderResponse.order.cancelledAt

```ts
cancelledAt: string | null;
```

###### Example

```ts
null
```

##### CreateOrderResponse.order.channel

```ts
channel: string | null;
```

###### Example

```ts
web
```

##### CreateOrderResponse.order.completedAt

```ts
completedAt: string | null;
```

###### Example

```ts
null
```

##### CreateOrderResponse.order.confirmedAt

```ts
confirmedAt: string | null;
```

###### Example

```ts
null
```

##### CreateOrderResponse.order.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### CreateOrderResponse.order.currency

```ts
currency: string;
```

###### Example

```ts
GBP
```

##### CreateOrderResponse.order.customerId

```ts
customerId: string | null;
```

###### Example

```ts
cus_abc123
```

##### CreateOrderResponse.order.customerNotes

```ts
customerNotes: string | null;
```

###### Example

```ts
Please contact me before delivery
```

##### CreateOrderResponse.order.discountTotal

```ts
discountTotal: string;
```

###### Example

```ts
0.00
```

##### CreateOrderResponse.order.expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-01-15T10:45:00Z
```

##### CreateOrderResponse.order.feeTotal

```ts
feeTotal: string;
```

###### Example

```ts
2.50
```

##### CreateOrderResponse.order.id

```ts
id: string;
```

###### Example

```ts
ord_abc123xyz789
```

##### CreateOrderResponse.order.internalNotes

```ts
internalNotes: string | null;
```

###### Example

```ts
VIP customer
```

##### CreateOrderResponse.order.isGuestCheckout

```ts
isGuestCheckout: boolean;
```

###### Example

```ts
false
```

##### CreateOrderResponse.order.items?

```ts
optional items: {
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
```

###### Description

Order line items

##### CreateOrderResponse.order.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "promoCode": "SUMMER20"
             *     }
```

##### CreateOrderResponse.order.orderNumber

```ts
orderNumber: string;
```

###### Example

```ts
ORD-ABC123
```

##### CreateOrderResponse.order.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### CreateOrderResponse.order.status

```ts
status: 
  | "completed"
  | "cancelled"
  | "pending"
  | "failed"
  | "refunded"
  | "confirmed"
  | "processing"
  | "expired";
```

###### Example

```ts
pending
@enum {string}
```

##### CreateOrderResponse.order.subtotal

```ts
subtotal: string;
```

###### Example

```ts
50.00
```

##### CreateOrderResponse.order.taxTotal

```ts
taxTotal: string;
```

###### Example

```ts
10.00
```

##### CreateOrderResponse.order.total

```ts
total: string;
```

###### Example

```ts
62.50
```

##### CreateOrderResponse.order.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

#### CreatePaymentProviderResponse

```ts
CreatePaymentProviderResponse: {
  provider: {
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
     type:   | "bank_transfer"
        | "cash"
        | "stripe_connect"
        | "stripe_direct"
        | "adyen"
        | "square"
        | "paypal";
     updatedAt: string;
  };
};
```

##### CreatePaymentProviderResponse.provider

```ts
provider: {
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
  type:   | "bank_transfer"
     | "cash"
     | "stripe_connect"
     | "stripe_direct"
     | "adyen"
     | "square"
     | "paypal";
  updatedAt: string;
};
```

##### CreatePaymentProviderResponse.provider.accountId

```ts
accountId: string | null;
```

###### Example

```ts
acc_xyz789
```

##### CreatePaymentProviderResponse.provider.applicationFee

```ts
applicationFee: 
  | {
  type: "percentage" | "fixed";
  value: number;
}
  | null;
```

###### Type Declaration

```ts
{
  type: "percentage" | "fixed";
  value: number;
}
```

`null`

##### CreatePaymentProviderResponse.provider.capabilities

```ts
capabilities: 
  | {
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
```

###### Type Declaration

```ts
{
  maxAmount?: number;
  minAmount?: number;
  requiresCustomerAction?: boolean;
  supportedCurrencies?: string[];
  supportsDelayedCapture?: boolean;
  supportsInstantCapture?: boolean;
  supportsPartialRefunds?: boolean;
  supportsRefunds?: boolean;
}
```

`null`

##### CreatePaymentProviderResponse.provider.configuration

```ts
configuration: {
[key: string]: unknown;
};
```

###### Index Signature

```ts
[key: string]: unknown
```

###### Description

Provider-specific configuration (sensitive fields redacted)

###### Example

```ts
{
             *       "stripeConnectedAccountId": "acct_xxx"
             *     }
```

##### CreatePaymentProviderResponse.provider.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### CreatePaymentProviderResponse.provider.description

```ts
description: string | null;
```

###### Example

```ts
Primary payment processor for online orders
```

##### CreatePaymentProviderResponse.provider.feeStructure

```ts
feeStructure: 
  | {
  currency?: string;
  fixed?: number;
  percentage?: number;
  type: "percentage" | "fixed" | "percentage_plus_fixed";
}
  | null;
```

###### Type Declaration

```ts
{
  currency?: string;
  fixed?: number;
  percentage?: number;
  type: "percentage" | "fixed" | "percentage_plus_fixed";
}
```

`null`

##### CreatePaymentProviderResponse.provider.id

```ts
id: string;
```

###### Example

```ts
pp_stripeXxx123
```

##### CreatePaymentProviderResponse.provider.integrationServiceUrl

```ts
integrationServiceUrl: string | null;
```

###### Example

```ts
https://stripe.paymentintegration.ticketlayer.com
```

##### CreatePaymentProviderResponse.provider.integrationServiceVersion

```ts
integrationServiceVersion: string;
```

###### Example

```ts
v1
```

##### CreatePaymentProviderResponse.provider.isDefault

```ts
isDefault: boolean;
```

###### Example

```ts
true
```

##### CreatePaymentProviderResponse.provider.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "environment": "production"
             *     }
```

##### CreatePaymentProviderResponse.provider.name

```ts
name: string;
```

###### Example

```ts
Main Stripe Account
```

##### CreatePaymentProviderResponse.provider.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### CreatePaymentProviderResponse.provider.priority

```ts
priority: number;
```

###### Example

```ts
100
```

##### CreatePaymentProviderResponse.provider.status

```ts
status: "active" | "inactive" | "pending_setup";
```

###### Example

```ts
active
@enum {string}
```

##### CreatePaymentProviderResponse.provider.supportedPaymentTypes

```ts
supportedPaymentTypes: (
  | "bank_transfer"
  | "online_card"
  | "online_bank_transfer"
  | "online_wallet"
  | "in_person_card"
  | "in_person_cash"
  | "cheque")[];
```

###### Example

```ts
[
      "online_card",
      "online_wallet"
    ]
```

##### CreatePaymentProviderResponse.provider.type

```ts
type: 
  | "bank_transfer"
  | "cash"
  | "stripe_connect"
  | "stripe_direct"
  | "adyen"
  | "square"
  | "paypal";
```

###### Example

```ts
stripe_connect
@enum {string}
```

##### CreatePaymentProviderResponse.provider.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

#### CreatePaymentResponse

```ts
CreatePaymentResponse: {
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
   } & {
     accountId: string;
     amount: number;
     applicationFee: number | null;
     cancelledAt: string | null;
     capturedAt: string | null;
     clientSecret: string | null;
     createdAt: string;
     currency: string;
     expiresAt: string | null;
     externalPaymentId: string | null;
     failedAt: string | null;
     failureCode: string | null;
     failureMessage: string | null;
     id: string;
     isPartialPayment: boolean;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     netAmount: number | null;
     orderId: string;
     orderNumber: string;
     organisationId: string;
     paymentMethod:   | {
        brand: string | null;
        expiryMonth: number | null;
        expiryYear: number | null;
        last4: string | null;
        type: "card" | "bank_transfer" | "cash" | "wallet";
      }
        | null;
     paymentProviderId: string;
     paymentType:   | "bank_transfer"
        | "online_card"
        | "online_bank_transfer"
        | "online_wallet"
        | "in_person_card"
        | "in_person_cash"
        | "cheque";
     processingFee: number | null;
     redirectUrl: string | null;
     remainingBalance: number | null;
     status:   | "cancelled"
        | "pending"
        | "succeeded"
        | "failed"
        | "processing"
        | "expired"
        | "requires_action"
        | "created";
     updatedAt: string;
  };
};
```

##### CreatePaymentResponse.payment

```ts
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
} & {
  accountId: string;
  amount: number;
  applicationFee: number | null;
  cancelledAt: string | null;
  capturedAt: string | null;
  clientSecret: string | null;
  createdAt: string;
  currency: string;
  expiresAt: string | null;
  externalPaymentId: string | null;
  failedAt: string | null;
  failureCode: string | null;
  failureMessage: string | null;
  id: string;
  isPartialPayment: boolean;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  netAmount: number | null;
  orderId: string;
  orderNumber: string;
  organisationId: string;
  paymentMethod:   | {
     brand: string | null;
     expiryMonth: number | null;
     expiryYear: number | null;
     last4: string | null;
     type: "card" | "bank_transfer" | "cash" | "wallet";
   }
     | null;
  paymentProviderId: string;
  paymentType:   | "bank_transfer"
     | "online_card"
     | "online_bank_transfer"
     | "online_wallet"
     | "in_person_card"
     | "in_person_cash"
     | "cheque";
  processingFee: number | null;
  redirectUrl: string | null;
  remainingBalance: number | null;
  status:   | "cancelled"
     | "pending"
     | "succeeded"
     | "failed"
     | "processing"
     | "expired"
     | "requires_action"
     | "created";
  updatedAt: string;
};
```

###### Type Declaration

###### amount

```ts
amount: string;
```

###### Example

```ts
25.00
```

###### createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

###### currency

```ts
currency: string;
```

###### Example

```ts
USD
```

###### failedAt

```ts
failedAt: string | null;
```

###### Example

```ts
null
```

###### failureCode

```ts
failureCode: string | null;
```

###### Example

```ts
null
```

###### failureMessage

```ts
failureMessage: string | null;
```

###### Example

```ts
null
```

###### id

```ts
id: string;
```

###### Example

```ts
pay_abc123
```

###### invoiceId

```ts
invoiceId: string | null;
```

###### Example

```ts
inv_abc123
```

###### method

```ts
method: string | null;
```

###### Example

```ts
card
```

###### organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_abc123
```

###### paidAt

```ts
paidAt: string | null;
```

###### Example

```ts
2024-01-15T10:35:00Z
```

###### status

```ts
status: "cancelled" | "pending" | "succeeded" | "failed" | "refunded";
```

###### Example

```ts
succeeded
@enum {string}
```

###### updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:35:00Z
```

###### Type Declaration

###### accountId

```ts
accountId: string;
```

###### Example

```ts
acc_xyz789
```

###### amount

```ts
amount: number;
```

###### Example

```ts
97
```

###### applicationFee

```ts
applicationFee: number | null;
```

###### Example

```ts
2
```

###### cancelledAt

```ts
cancelledAt: string | null;
```

###### Example

```ts
null
```

###### capturedAt

```ts
capturedAt: string | null;
```

###### Example

```ts
null
```

###### clientSecret

```ts
clientSecret: string | null;
```

###### Example

```ts
pi_xxx_secret_yyy
```

###### createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

###### currency

```ts
currency: string;
```

###### Example

```ts
GBP
```

###### expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-01-15T10:45:00Z
```

###### externalPaymentId

```ts
externalPaymentId: string | null;
```

###### Example

```ts
pi_1234567890abcdef
```

###### failedAt

```ts
failedAt: string | null;
```

###### Example

```ts
null
```

###### failureCode

```ts
failureCode: string | null;
```

###### Example

```ts
null
```

###### failureMessage

```ts
failureMessage: string | null;
```

###### Example

```ts
null
```

###### id

```ts
id: string;
```

###### Example

```ts
pay_abc123xyz789
```

###### isPartialPayment

```ts
isPartialPayment: boolean;
```

###### Example

```ts
false
```

###### metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
                 *       "customerEmail": "customer@example.com"
                 *     }
```

###### netAmount

```ts
netAmount: number | null;
```

###### Example

```ts
92.09
```

###### orderId

```ts
orderId: string;
```

###### Example

```ts
ord_abc123
```

###### orderNumber

```ts
orderNumber: string;
```

###### Example

```ts
ORD-ABC123
```

###### organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

###### paymentMethod

```ts
paymentMethod: 
  | {
  brand: string | null;
  expiryMonth: number | null;
  expiryYear: number | null;
  last4: string | null;
  type: "card" | "bank_transfer" | "cash" | "wallet";
}
  | null;
```

###### Type Declaration

```ts
{
  brand: string | null;
  expiryMonth: number | null;
  expiryYear: number | null;
  last4: string | null;
  type: "card" | "bank_transfer" | "cash" | "wallet";
}
```

`null`

###### paymentProviderId

```ts
paymentProviderId: string;
```

###### Example

```ts
pp_stripeXxx123
```

###### paymentType

```ts
paymentType: 
  | "bank_transfer"
  | "online_card"
  | "online_bank_transfer"
  | "online_wallet"
  | "in_person_card"
  | "in_person_cash"
  | "cheque";
```

###### Example

```ts
online_card
@enum {string}
```

###### processingFee

```ts
processingFee: number | null;
```

###### Example

```ts
2.91
```

###### redirectUrl

```ts
redirectUrl: string | null;
```

###### Example

```ts
https://checkout.stripe.com/pay/xxx
```

###### remainingBalance

```ts
remainingBalance: number | null;
```

###### Example

```ts
0
```

###### status

```ts
status: 
  | "cancelled"
  | "pending"
  | "succeeded"
  | "failed"
  | "processing"
  | "expired"
  | "requires_action"
  | "created";
```

###### Example

```ts
pending
@enum {string}
```

###### updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
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

#### CreatePurchaseRequest

```ts
CreatePurchaseRequest: {
  currency?: string;
  email?: string;
  packageId: string;
  paymentMethodId: string;
};
```

##### CreatePurchaseRequest.currency?

```ts
optional currency: string;
```

##### CreatePurchaseRequest.email?

```ts
optional email: string;
```

Format: email

##### CreatePurchaseRequest.packageId

```ts
packageId: string;
```

##### CreatePurchaseRequest.paymentMethodId

```ts
paymentMethodId: string;
```

#### CreateRefundResponse

```ts
CreateRefundResponse: {
  refund: {
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
  };
};
```

##### CreateRefundResponse.refund

```ts
refund: {
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
};
```

##### CreateRefundResponse.refund.amount

```ts
amount: number;
```

###### Example

```ts
48.5
```

##### CreateRefundResponse.refund.completedAt

```ts
completedAt: string | null;
```

###### Example

```ts
2024-01-15T11:00:00Z
```

##### CreateRefundResponse.refund.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:50:00Z
```

##### CreateRefundResponse.refund.externalRefundId

```ts
externalRefundId: string | null;
```

###### Example

```ts
re_xxx
```

##### CreateRefundResponse.refund.failedAt

```ts
failedAt: string | null;
```

###### Example

```ts
null
```

##### CreateRefundResponse.refund.failureCode

```ts
failureCode: string | null;
```

###### Example

```ts
null
```

##### CreateRefundResponse.refund.failureMessage

```ts
failureMessage: string | null;
```

###### Example

```ts
null
```

##### CreateRefundResponse.refund.id

```ts
id: string;
```

###### Example

```ts
ref_abc123xyz789
```

##### CreateRefundResponse.refund.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "ticketNumber": "T-001"
             *     }
```

##### CreateRefundResponse.refund.notes

```ts
notes: string | null;
```

###### Example

```ts
Customer unable to attend
```

##### CreateRefundResponse.refund.paymentId

```ts
paymentId: string;
```

###### Example

```ts
pay_abc123xyz789
```

##### CreateRefundResponse.refund.reason

```ts
reason: string;
```

###### Example

```ts
requested_by_customer
```

##### CreateRefundResponse.refund.status

```ts
status: "cancelled" | "pending" | "succeeded" | "failed" | "processing";
```

###### Example

```ts
succeeded
@enum {string}
```

##### CreateRefundResponse.refund.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T11:00:00Z
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

#### CreateSubscriptionRequest

```ts
CreateSubscriptionRequest: {
  currency?: string;
  email?: string;
  interval: "month" | "year";
  packageId: string;
  paymentMethodId: string;
};
```

##### CreateSubscriptionRequest.currency?

```ts
optional currency: string;
```

##### CreateSubscriptionRequest.email?

```ts
optional email: string;
```

Format: email

##### CreateSubscriptionRequest.interval

```ts
interval: "month" | "year";
```

##### CreateSubscriptionRequest.packageId

```ts
packageId: string;
```

##### CreateSubscriptionRequest.paymentMethodId

```ts
paymentMethodId: string;
```

#### CreateSubscriptionResponse

```ts
CreateSubscriptionResponse: {
  subscription: {
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
  };
};
```

##### CreateSubscriptionResponse.subscription

```ts
subscription: {
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
};
```

##### CreateSubscriptionResponse.subscription.cancelledAt

```ts
cancelledAt: string | null;
```

###### Example

```ts
null
```

##### CreateSubscriptionResponse.subscription.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### CreateSubscriptionResponse.subscription.credits

```ts
credits: number;
```

###### Example

```ts
100
```

##### CreateSubscriptionResponse.subscription.currency

```ts
currency: string;
```

###### Example

```ts
USD
```

##### CreateSubscriptionResponse.subscription.currentPeriodEnd

```ts
currentPeriodEnd: string | null;
```

###### Example

```ts
2024-02-15T00:00:00Z
```

##### CreateSubscriptionResponse.subscription.currentPeriodStart

```ts
currentPeriodStart: string | null;
```

###### Example

```ts
2024-01-15T00:00:00Z
```

##### CreateSubscriptionResponse.subscription.endedAt

```ts
endedAt: string | null;
```

###### Example

```ts
null
```

##### CreateSubscriptionResponse.subscription.id

```ts
id: string;
```

###### Example

```ts
sub_abc123
```

##### CreateSubscriptionResponse.subscription.interval

```ts
interval: "month" | "year";
```

###### Example

```ts
month
@enum {string}
```

##### CreateSubscriptionResponse.subscription.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_abc123
```

##### CreateSubscriptionResponse.subscription.packageId

```ts
packageId: string;
```

###### Example

```ts
pkg_100
```

##### CreateSubscriptionResponse.subscription.price

```ts
price: string;
```

###### Example

```ts
25.00
```

##### CreateSubscriptionResponse.subscription.status

```ts
status: "active" | "cancelled" | "paused" | "past_due" | "ended";
```

###### Example

```ts
active
@enum {string}
```

##### CreateSubscriptionResponse.subscription.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
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

#### CreditBalance

```ts
CreditBalance: {
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
};
```

##### CreditBalance.balance

```ts
balance: number;
```

###### Example

```ts
150
```

##### CreditBalance.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### CreditBalance.id

```ts
id: string;
```

###### Example

```ts
bal_abc123
```

##### CreditBalance.isSuspended

```ts
isSuspended: boolean;
```

###### Example

```ts
false
```

##### CreditBalance.lifetimeCredits

```ts
lifetimeCredits: number;
```

###### Example

```ts
500
```

##### CreditBalance.lifetimeUsed

```ts
lifetimeUsed: number;
```

###### Example

```ts
350
```

##### CreditBalance.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_abc123
```

##### CreditBalance.status

```ts
status: "healthy" | "low" | "depleted" | "negative" | "suspended";
```

###### Example

```ts
healthy
@enum {string}
```

##### CreditBalance.suspendedAt

```ts
suspendedAt: string | null;
```

###### Example

```ts
null
```

##### CreditBalance.suspendedReason

```ts
suspendedReason: string | null;
```

###### Example

```ts
null
```

##### CreditBalance.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

#### CreditPackage

```ts
CreditPackage: {
  baseCurrency: string;
  basePrice: string;
  credits: number;
  discountPercent: string;
  displayOrder: number;
  finalPrice: string;
  id: string;
  isActive: boolean;
  name: string;
};
```

##### CreditPackage.baseCurrency

```ts
baseCurrency: string;
```

###### Example

```ts
USD
```

##### CreditPackage.basePrice

```ts
basePrice: string;
```

###### Example

```ts
25.00
```

##### CreditPackage.credits

```ts
credits: number;
```

###### Example

```ts
100
```

##### CreditPackage.discountPercent

```ts
discountPercent: string;
```

###### Example

```ts
0.00
```

##### CreditPackage.displayOrder

```ts
displayOrder: number;
```

###### Example

```ts
1
```

##### CreditPackage.finalPrice

```ts
finalPrice: string;
```

###### Example

```ts
25.00
```

##### CreditPackage.id

```ts
id: string;
```

###### Example

```ts
pkg_100
```

##### CreditPackage.isActive

```ts
isActive: boolean;
```

###### Example

```ts
true
```

##### CreditPackage.name

```ts
name: string;
```

###### Example

```ts
100 Credits
```

#### CreditTransaction

```ts
CreditTransaction: {
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
```

##### CreditTransaction.amount

```ts
amount: number;
```

###### Example

```ts
100
```

##### CreditTransaction.balanceAfter

```ts
balanceAfter: number;
```

###### Example

```ts
150
```

##### CreditTransaction.balanceBefore

```ts
balanceBefore: number;
```

###### Example

```ts
50
```

##### CreditTransaction.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### CreditTransaction.description

```ts
description: string | null;
```

###### Example

```ts
Credit purchase - 100 Credits
```

##### CreditTransaction.id

```ts
id: string;
```

###### Example

```ts
txn_abc123
```

##### CreditTransaction.invoiceId

```ts
invoiceId: string | null;
```

###### Example

```ts
inv_abc123
```

##### CreditTransaction.orderId

```ts
orderId: string | null;
```

###### Example

```ts
null
```

##### CreditTransaction.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_abc123
```

##### CreditTransaction.subscriptionId

```ts
subscriptionId: string | null;
```

###### Example

```ts
null
```

##### CreditTransaction.type

```ts
type: 
  | "initial"
  | "purchase"
  | "subscription"
  | "ticket_sale"
  | "adjustment"
  | "refund";
```

###### Example

```ts
purchase
@enum {string}
```

#### Customer

```ts
Customer: {
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
};
```

##### Customer.accountId

```ts
accountId: string | null;
```

###### Example

```ts
acc_xyz789
```

##### Customer.blockedAt

```ts
blockedAt: string | null;
```

###### Example

```ts
null
```

##### Customer.blockedReason

```ts
blockedReason: string | null;
```

###### Example

```ts
null
```

##### Customer.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### Customer.email

```ts
email: string;
```

###### Example

```ts
customer@example.com
```

##### Customer.externalId

```ts
externalId: string | null;
```

###### Example

```ts
ext_cust_12345
```

##### Customer.firstName

```ts
firstName: string | null;
```

###### Example

```ts
John
```

##### Customer.id

```ts
id: string;
```

###### Example

```ts
cus_abc123
```

##### Customer.isBlocked

```ts
isBlocked: boolean;
```

###### Example

```ts
false
```

##### Customer.lastName

```ts
lastName: string | null;
```

###### Example

```ts
Doe
```

##### Customer.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "loyaltyTier": "gold"
             *     }
```

##### Customer.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### Customer.phone

```ts
phone: string | null;
```

###### Example

```ts
+44 7700 900000
```

##### Customer.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
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

#### DeleteInventoryResponse

```ts
DeleteInventoryResponse: {
  message: string;
};
```

##### DeleteInventoryResponse.message

```ts
message: string;
```

###### Example

```ts
Inventory deleted successfully
```

#### DeletePaymentProviderResponse

```ts
DeletePaymentProviderResponse: {
  id: string;
  success: boolean;
};
```

##### DeletePaymentProviderResponse.id

```ts
id: string;
```

###### Example

```ts
pp_stripeXxx123
```

##### DeletePaymentProviderResponse.success

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

#### ExtendReservationResponse

```ts
ExtendReservationResponse: {
  reservation: {
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
  };
};
```

##### ExtendReservationResponse.reservation

```ts
reservation: {
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
};
```

##### ExtendReservationResponse.reservation.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### ExtendReservationResponse.reservation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### ExtendReservationResponse.reservation.expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-12-28T10:45:00Z
```

##### ExtendReservationResponse.reservation.heldBy

```ts
heldBy: string | null;
```

###### Example

```ts
usr_abc123
```

##### ExtendReservationResponse.reservation.id

```ts
id: string;
```

###### Example

```ts
ivr_abc123
```

##### ExtendReservationResponse.reservation.inventoryId

```ts
inventoryId: string;
```

###### Example

```ts
inv_ghi789
```

##### ExtendReservationResponse.reservation.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
null
```

##### ExtendReservationResponse.reservation.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### ExtendReservationResponse.reservation.quantity

```ts
quantity: number;
```

###### Example

```ts
2
```

##### ExtendReservationResponse.reservation.reason

```ts
reason: string | null;
```

###### Example

```ts
Customer checkout
```

##### ExtendReservationResponse.reservation.referenceId

```ts
referenceId: string | null;
```

###### Example

```ts
ord_jkl012
```

##### ExtendReservationResponse.reservation.referenceType

```ts
referenceType: "subscription" | "order" | "hold" | null;
```

###### Description

Type of reference for this reservation

###### Example

```ts
order
@enum {string|null}
```

##### ExtendReservationResponse.reservation.seatIds

```ts
seatIds: string[] | null;
```

###### Example

```ts
[
      "ivs_abc123",
      "ivs_def456"
    ]
```

##### ExtendReservationResponse.reservation.type

```ts
type: "confirmed" | "maintenance" | "hold" | "temporary";
```

###### Description

Type of reservation

###### Example

```ts
temporary
@enum {string}
```

##### ExtendReservationResponse.reservation.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
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

#### FeeStructure

```ts
FeeStructure: 
  | {
  currency?: string;
  fixed?: number;
  percentage?: number;
  type: "percentage" | "fixed" | "percentage_plus_fixed";
}
  | null;
```

##### Type Declaration

```ts
{
  currency?: string;
  fixed?: number;
  percentage?: number;
  type: "percentage" | "fixed" | "percentage_plus_fixed";
}
```

`null`

##### Description

Fee structure

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

#### GetAuditLogResponse

```ts
GetAuditLogResponse: {
  auditLog: {
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
  }[];
};
```

##### GetAuditLogResponse.auditLog

```ts
auditLog: {
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
}[];
```

#### GetAutoTopupResponse

```ts
GetAutoTopupResponse: {
  autoTopup:   | {
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
     | null;
};
```

##### GetAutoTopupResponse.autoTopup

```ts
autoTopup: 
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
  | null;
```

###### Type Declaration

```ts
{
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
```

`null`

#### GetBalanceResponse

```ts
GetBalanceResponse: {
  balance: {
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
  };
};
```

##### GetBalanceResponse.balance

```ts
balance: {
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
};
```

##### GetBalanceResponse.balance.balance

```ts
balance: number;
```

###### Example

```ts
150
```

##### GetBalanceResponse.balance.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### GetBalanceResponse.balance.id

```ts
id: string;
```

###### Example

```ts
bal_abc123
```

##### GetBalanceResponse.balance.isSuspended

```ts
isSuspended: boolean;
```

###### Example

```ts
false
```

##### GetBalanceResponse.balance.lifetimeCredits

```ts
lifetimeCredits: number;
```

###### Example

```ts
500
```

##### GetBalanceResponse.balance.lifetimeUsed

```ts
lifetimeUsed: number;
```

###### Example

```ts
350
```

##### GetBalanceResponse.balance.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_abc123
```

##### GetBalanceResponse.balance.status

```ts
status: "healthy" | "low" | "depleted" | "negative" | "suspended";
```

###### Example

```ts
healthy
@enum {string}
```

##### GetBalanceResponse.balance.suspendedAt

```ts
suspendedAt: string | null;
```

###### Example

```ts
null
```

##### GetBalanceResponse.balance.suspendedReason

```ts
suspendedReason: string | null;
```

###### Example

```ts
null
```

##### GetBalanceResponse.balance.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

#### GetCustomerResponse

```ts
GetCustomerResponse: {
  customer: {
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
  };
};
```

##### GetCustomerResponse.customer

```ts
customer: {
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
};
```

##### GetCustomerResponse.customer.accountId

```ts
accountId: string | null;
```

###### Example

```ts
acc_xyz789
```

##### GetCustomerResponse.customer.blockedAt

```ts
blockedAt: string | null;
```

###### Example

```ts
null
```

##### GetCustomerResponse.customer.blockedReason

```ts
blockedReason: string | null;
```

###### Example

```ts
null
```

##### GetCustomerResponse.customer.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### GetCustomerResponse.customer.email

```ts
email: string;
```

###### Example

```ts
customer@example.com
```

##### GetCustomerResponse.customer.externalId

```ts
externalId: string | null;
```

###### Example

```ts
ext_cust_12345
```

##### GetCustomerResponse.customer.firstName

```ts
firstName: string | null;
```

###### Example

```ts
John
```

##### GetCustomerResponse.customer.id

```ts
id: string;
```

###### Example

```ts
cus_abc123
```

##### GetCustomerResponse.customer.isBlocked

```ts
isBlocked: boolean;
```

###### Example

```ts
false
```

##### GetCustomerResponse.customer.lastName

```ts
lastName: string | null;
```

###### Example

```ts
Doe
```

##### GetCustomerResponse.customer.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "loyaltyTier": "gold"
             *     }
```

##### GetCustomerResponse.customer.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### GetCustomerResponse.customer.phone

```ts
phone: string | null;
```

###### Example

```ts
+44 7700 900000
```

##### GetCustomerResponse.customer.updatedAt

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

#### GetInventoryResponse

```ts
GetInventoryResponse: {
  inventory: {
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
  };
};
```

##### GetInventoryResponse.inventory

```ts
inventory: {
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
};
```

##### GetInventoryResponse.inventory.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### GetInventoryResponse.inventory.available

```ts
available: number;
```

###### Example

```ts
450
```

##### GetInventoryResponse.inventory.confirmed

```ts
confirmed: number;
```

###### Example

```ts
20
```

##### GetInventoryResponse.inventory.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### GetInventoryResponse.inventory.eventId

```ts
eventId: string | null;
```

###### Example

```ts
evt_ghi789
```

##### GetInventoryResponse.inventory.eventLayoutAreaId

```ts
eventLayoutAreaId: string | null;
```

###### Example

```ts
ela_mno345
```

##### GetInventoryResponse.inventory.eventOccurrenceId

```ts
eventOccurrenceId: string | null;
```

###### Example

```ts
evo_jkl012
```

##### GetInventoryResponse.inventory.held

```ts
held: number;
```

###### Example

```ts
0
```

##### GetInventoryResponse.inventory.id

```ts
id: string;
```

###### Example

```ts
inv_abc123
```

##### GetInventoryResponse.inventory.isAllocated

```ts
isAllocated: boolean;
```

###### Example

```ts
false
```

##### GetInventoryResponse.inventory.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
null
```

##### GetInventoryResponse.inventory.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### GetInventoryResponse.inventory.productId

```ts
productId: string | null;
```

###### Example

```ts
prd_pqr678
```

##### GetInventoryResponse.inventory.reserved

```ts
reserved: number;
```

###### Example

```ts
30
```

##### GetInventoryResponse.inventory.sourceType

```ts
sourceType: "event_occurrence_area" | "product";
```

###### Description

Type of inventory source

###### Example

```ts
event_occurrence_area
@enum {string}
```

##### GetInventoryResponse.inventory.totalCapacity

```ts
totalCapacity: number;
```

###### Example

```ts
500
```

##### GetInventoryResponse.inventory.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### GetInventoryResponse.inventory.version

```ts
version: number;
```

###### Example

```ts
1
```

#### GetInvoiceResponse

```ts
GetInvoiceResponse: {
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
};
```

##### GetInvoiceResponse.invoice

```ts
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
```

##### GetInvoiceResponse.invoice.amountDue

```ts
amountDue: string;
```

###### Example

```ts
0.00
```

##### GetInvoiceResponse.invoice.amountPaid

```ts
amountPaid: string;
```

###### Example

```ts
25.00
```

##### GetInvoiceResponse.invoice.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### GetInvoiceResponse.invoice.currency

```ts
currency: string;
```

###### Example

```ts
USD
```

##### GetInvoiceResponse.invoice.dueDate

```ts
dueDate: string | null;
```

###### Example

```ts
2024-01-30
```

##### GetInvoiceResponse.invoice.id

```ts
id: string;
```

###### Example

```ts
inv_abc123
```

##### GetInvoiceResponse.invoice.invoiceNumber

```ts
invoiceNumber: string;
```

###### Example

```ts
INV-2024-0001
```

##### GetInvoiceResponse.invoice.issueDate

```ts
issueDate: string;
```

###### Example

```ts
2024-01-15
```

##### GetInvoiceResponse.invoice.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_abc123
```

##### GetInvoiceResponse.invoice.paidAt

```ts
paidAt: string | null;
```

###### Example

```ts
2024-01-15T10:35:00Z
```

##### GetInvoiceResponse.invoice.pdfUrl

```ts
pdfUrl: string | null;
```

###### Example

```ts
https://invoice.stripe.com/...
```

##### GetInvoiceResponse.invoice.status

```ts
status: "draft" | "open" | "paid" | "void" | "uncollectible";
```

###### Example

```ts
paid
@enum {string}
```

##### GetInvoiceResponse.invoice.subtotal

```ts
subtotal: string;
```

###### Example

```ts
25.00
```

##### GetInvoiceResponse.invoice.tax

```ts
tax: string;
```

###### Example

```ts
0.00
```

##### GetInvoiceResponse.invoice.total

```ts
total: string;
```

###### Example

```ts
25.00
```

##### GetInvoiceResponse.invoice.type

```ts
type: "purchase" | "subscription" | "payg";
```

###### Example

```ts
purchase
@enum {string}
```

##### GetInvoiceResponse.invoice.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:35:00Z
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

#### GetOrderResponse

```ts
GetOrderResponse: {
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
};
```

##### GetOrderResponse.order

```ts
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
```

##### GetOrderResponse.order.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_xyz789
```

##### GetOrderResponse.order.cancellationReason

```ts
cancellationReason: string | null;
```

###### Example

```ts
null
```

##### GetOrderResponse.order.cancelledAt

```ts
cancelledAt: string | null;
```

###### Example

```ts
null
```

##### GetOrderResponse.order.channel

```ts
channel: string | null;
```

###### Example

```ts
web
```

##### GetOrderResponse.order.completedAt

```ts
completedAt: string | null;
```

###### Example

```ts
null
```

##### GetOrderResponse.order.confirmedAt

```ts
confirmedAt: string | null;
```

###### Example

```ts
null
```

##### GetOrderResponse.order.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### GetOrderResponse.order.currency

```ts
currency: string;
```

###### Example

```ts
GBP
```

##### GetOrderResponse.order.customerId

```ts
customerId: string | null;
```

###### Example

```ts
cus_abc123
```

##### GetOrderResponse.order.customerNotes

```ts
customerNotes: string | null;
```

###### Example

```ts
Please contact me before delivery
```

##### GetOrderResponse.order.discountTotal

```ts
discountTotal: string;
```

###### Example

```ts
0.00
```

##### GetOrderResponse.order.expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-01-15T10:45:00Z
```

##### GetOrderResponse.order.feeTotal

```ts
feeTotal: string;
```

###### Example

```ts
2.50
```

##### GetOrderResponse.order.id

```ts
id: string;
```

###### Example

```ts
ord_abc123xyz789
```

##### GetOrderResponse.order.internalNotes

```ts
internalNotes: string | null;
```

###### Example

```ts
VIP customer
```

##### GetOrderResponse.order.isGuestCheckout

```ts
isGuestCheckout: boolean;
```

###### Example

```ts
false
```

##### GetOrderResponse.order.items?

```ts
optional items: {
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
```

###### Description

Order line items

##### GetOrderResponse.order.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "promoCode": "SUMMER20"
             *     }
```

##### GetOrderResponse.order.orderNumber

```ts
orderNumber: string;
```

###### Example

```ts
ORD-ABC123
```

##### GetOrderResponse.order.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### GetOrderResponse.order.status

```ts
status: 
  | "completed"
  | "cancelled"
  | "pending"
  | "failed"
  | "refunded"
  | "confirmed"
  | "processing"
  | "expired";
```

###### Example

```ts
pending
@enum {string}
```

##### GetOrderResponse.order.subtotal

```ts
subtotal: string;
```

###### Example

```ts
50.00
```

##### GetOrderResponse.order.taxTotal

```ts
taxTotal: string;
```

###### Example

```ts
10.00
```

##### GetOrderResponse.order.total

```ts
total: string;
```

###### Example

```ts
62.50
```

##### GetOrderResponse.order.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
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

#### GetPaymentProviderResponse

```ts
GetPaymentProviderResponse: {
  provider: {
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
     type:   | "bank_transfer"
        | "cash"
        | "stripe_connect"
        | "stripe_direct"
        | "adyen"
        | "square"
        | "paypal";
     updatedAt: string;
  };
};
```

##### GetPaymentProviderResponse.provider

```ts
provider: {
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
  type:   | "bank_transfer"
     | "cash"
     | "stripe_connect"
     | "stripe_direct"
     | "adyen"
     | "square"
     | "paypal";
  updatedAt: string;
};
```

##### GetPaymentProviderResponse.provider.accountId

```ts
accountId: string | null;
```

###### Example

```ts
acc_xyz789
```

##### GetPaymentProviderResponse.provider.applicationFee

```ts
applicationFee: 
  | {
  type: "percentage" | "fixed";
  value: number;
}
  | null;
```

###### Type Declaration

```ts
{
  type: "percentage" | "fixed";
  value: number;
}
```

`null`

##### GetPaymentProviderResponse.provider.capabilities

```ts
capabilities: 
  | {
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
```

###### Type Declaration

```ts
{
  maxAmount?: number;
  minAmount?: number;
  requiresCustomerAction?: boolean;
  supportedCurrencies?: string[];
  supportsDelayedCapture?: boolean;
  supportsInstantCapture?: boolean;
  supportsPartialRefunds?: boolean;
  supportsRefunds?: boolean;
}
```

`null`

##### GetPaymentProviderResponse.provider.configuration

```ts
configuration: {
[key: string]: unknown;
};
```

###### Index Signature

```ts
[key: string]: unknown
```

###### Description

Provider-specific configuration (sensitive fields redacted)

###### Example

```ts
{
             *       "stripeConnectedAccountId": "acct_xxx"
             *     }
```

##### GetPaymentProviderResponse.provider.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### GetPaymentProviderResponse.provider.description

```ts
description: string | null;
```

###### Example

```ts
Primary payment processor for online orders
```

##### GetPaymentProviderResponse.provider.feeStructure

```ts
feeStructure: 
  | {
  currency?: string;
  fixed?: number;
  percentage?: number;
  type: "percentage" | "fixed" | "percentage_plus_fixed";
}
  | null;
```

###### Type Declaration

```ts
{
  currency?: string;
  fixed?: number;
  percentage?: number;
  type: "percentage" | "fixed" | "percentage_plus_fixed";
}
```

`null`

##### GetPaymentProviderResponse.provider.id

```ts
id: string;
```

###### Example

```ts
pp_stripeXxx123
```

##### GetPaymentProviderResponse.provider.integrationServiceUrl

```ts
integrationServiceUrl: string | null;
```

###### Example

```ts
https://stripe.paymentintegration.ticketlayer.com
```

##### GetPaymentProviderResponse.provider.integrationServiceVersion

```ts
integrationServiceVersion: string;
```

###### Example

```ts
v1
```

##### GetPaymentProviderResponse.provider.isDefault

```ts
isDefault: boolean;
```

###### Example

```ts
true
```

##### GetPaymentProviderResponse.provider.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "environment": "production"
             *     }
```

##### GetPaymentProviderResponse.provider.name

```ts
name: string;
```

###### Example

```ts
Main Stripe Account
```

##### GetPaymentProviderResponse.provider.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### GetPaymentProviderResponse.provider.priority

```ts
priority: number;
```

###### Example

```ts
100
```

##### GetPaymentProviderResponse.provider.status

```ts
status: "active" | "inactive" | "pending_setup";
```

###### Example

```ts
active
@enum {string}
```

##### GetPaymentProviderResponse.provider.supportedPaymentTypes

```ts
supportedPaymentTypes: (
  | "bank_transfer"
  | "online_card"
  | "online_bank_transfer"
  | "online_wallet"
  | "in_person_card"
  | "in_person_cash"
  | "cheque")[];
```

###### Example

```ts
[
      "online_card",
      "online_wallet"
    ]
```

##### GetPaymentProviderResponse.provider.type

```ts
type: 
  | "bank_transfer"
  | "cash"
  | "stripe_connect"
  | "stripe_direct"
  | "adyen"
  | "square"
  | "paypal";
```

###### Example

```ts
stripe_connect
@enum {string}
```

##### GetPaymentProviderResponse.provider.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

#### GetPaymentResponse

```ts
GetPaymentResponse: {
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
   } & {
     accountId: string;
     amount: number;
     applicationFee: number | null;
     cancelledAt: string | null;
     capturedAt: string | null;
     clientSecret: string | null;
     createdAt: string;
     currency: string;
     expiresAt: string | null;
     externalPaymentId: string | null;
     failedAt: string | null;
     failureCode: string | null;
     failureMessage: string | null;
     id: string;
     isPartialPayment: boolean;
     metadata:   | {
      [key: string]: unknown;
      }
        | null;
     netAmount: number | null;
     orderId: string;
     orderNumber: string;
     organisationId: string;
     paymentMethod:   | {
        brand: string | null;
        expiryMonth: number | null;
        expiryYear: number | null;
        last4: string | null;
        type: "card" | "bank_transfer" | "cash" | "wallet";
      }
        | null;
     paymentProviderId: string;
     paymentType:   | "bank_transfer"
        | "online_card"
        | "online_bank_transfer"
        | "online_wallet"
        | "in_person_card"
        | "in_person_cash"
        | "cheque";
     processingFee: number | null;
     redirectUrl: string | null;
     remainingBalance: number | null;
     status:   | "cancelled"
        | "pending"
        | "succeeded"
        | "failed"
        | "processing"
        | "expired"
        | "requires_action"
        | "created";
     updatedAt: string;
  };
};
```

##### GetPaymentResponse.payment

```ts
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
} & {
  accountId: string;
  amount: number;
  applicationFee: number | null;
  cancelledAt: string | null;
  capturedAt: string | null;
  clientSecret: string | null;
  createdAt: string;
  currency: string;
  expiresAt: string | null;
  externalPaymentId: string | null;
  failedAt: string | null;
  failureCode: string | null;
  failureMessage: string | null;
  id: string;
  isPartialPayment: boolean;
  metadata:   | {
   [key: string]: unknown;
   }
     | null;
  netAmount: number | null;
  orderId: string;
  orderNumber: string;
  organisationId: string;
  paymentMethod:   | {
     brand: string | null;
     expiryMonth: number | null;
     expiryYear: number | null;
     last4: string | null;
     type: "card" | "bank_transfer" | "cash" | "wallet";
   }
     | null;
  paymentProviderId: string;
  paymentType:   | "bank_transfer"
     | "online_card"
     | "online_bank_transfer"
     | "online_wallet"
     | "in_person_card"
     | "in_person_cash"
     | "cheque";
  processingFee: number | null;
  redirectUrl: string | null;
  remainingBalance: number | null;
  status:   | "cancelled"
     | "pending"
     | "succeeded"
     | "failed"
     | "processing"
     | "expired"
     | "requires_action"
     | "created";
  updatedAt: string;
};
```

###### Type Declaration

###### amount

```ts
amount: string;
```

###### Example

```ts
25.00
```

###### createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

###### currency

```ts
currency: string;
```

###### Example

```ts
USD
```

###### failedAt

```ts
failedAt: string | null;
```

###### Example

```ts
null
```

###### failureCode

```ts
failureCode: string | null;
```

###### Example

```ts
null
```

###### failureMessage

```ts
failureMessage: string | null;
```

###### Example

```ts
null
```

###### id

```ts
id: string;
```

###### Example

```ts
pay_abc123
```

###### invoiceId

```ts
invoiceId: string | null;
```

###### Example

```ts
inv_abc123
```

###### method

```ts
method: string | null;
```

###### Example

```ts
card
```

###### organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_abc123
```

###### paidAt

```ts
paidAt: string | null;
```

###### Example

```ts
2024-01-15T10:35:00Z
```

###### status

```ts
status: "cancelled" | "pending" | "succeeded" | "failed" | "refunded";
```

###### Example

```ts
succeeded
@enum {string}
```

###### updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:35:00Z
```

###### Type Declaration

###### accountId

```ts
accountId: string;
```

###### Example

```ts
acc_xyz789
```

###### amount

```ts
amount: number;
```

###### Example

```ts
97
```

###### applicationFee

```ts
applicationFee: number | null;
```

###### Example

```ts
2
```

###### cancelledAt

```ts
cancelledAt: string | null;
```

###### Example

```ts
null
```

###### capturedAt

```ts
capturedAt: string | null;
```

###### Example

```ts
null
```

###### clientSecret

```ts
clientSecret: string | null;
```

###### Example

```ts
pi_xxx_secret_yyy
```

###### createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

###### currency

```ts
currency: string;
```

###### Example

```ts
GBP
```

###### expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-01-15T10:45:00Z
```

###### externalPaymentId

```ts
externalPaymentId: string | null;
```

###### Example

```ts
pi_1234567890abcdef
```

###### failedAt

```ts
failedAt: string | null;
```

###### Example

```ts
null
```

###### failureCode

```ts
failureCode: string | null;
```

###### Example

```ts
null
```

###### failureMessage

```ts
failureMessage: string | null;
```

###### Example

```ts
null
```

###### id

```ts
id: string;
```

###### Example

```ts
pay_abc123xyz789
```

###### isPartialPayment

```ts
isPartialPayment: boolean;
```

###### Example

```ts
false
```

###### metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
                 *       "customerEmail": "customer@example.com"
                 *     }
```

###### netAmount

```ts
netAmount: number | null;
```

###### Example

```ts
92.09
```

###### orderId

```ts
orderId: string;
```

###### Example

```ts
ord_abc123
```

###### orderNumber

```ts
orderNumber: string;
```

###### Example

```ts
ORD-ABC123
```

###### organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

###### paymentMethod

```ts
paymentMethod: 
  | {
  brand: string | null;
  expiryMonth: number | null;
  expiryYear: number | null;
  last4: string | null;
  type: "card" | "bank_transfer" | "cash" | "wallet";
}
  | null;
```

###### Type Declaration

```ts
{
  brand: string | null;
  expiryMonth: number | null;
  expiryYear: number | null;
  last4: string | null;
  type: "card" | "bank_transfer" | "cash" | "wallet";
}
```

`null`

###### paymentProviderId

```ts
paymentProviderId: string;
```

###### Example

```ts
pp_stripeXxx123
```

###### paymentType

```ts
paymentType: 
  | "bank_transfer"
  | "online_card"
  | "online_bank_transfer"
  | "online_wallet"
  | "in_person_card"
  | "in_person_cash"
  | "cheque";
```

###### Example

```ts
online_card
@enum {string}
```

###### processingFee

```ts
processingFee: number | null;
```

###### Example

```ts
2.91
```

###### redirectUrl

```ts
redirectUrl: string | null;
```

###### Example

```ts
https://checkout.stripe.com/pay/xxx
```

###### remainingBalance

```ts
remainingBalance: number | null;
```

###### Example

```ts
0
```

###### status

```ts
status: 
  | "cancelled"
  | "pending"
  | "succeeded"
  | "failed"
  | "processing"
  | "expired"
  | "requires_action"
  | "created";
```

###### Example

```ts
pending
@enum {string}
```

###### updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

#### GetPaymentStatusResponse

```ts
GetPaymentStatusResponse: {
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
};
```

##### GetPaymentStatusResponse.amount

```ts
amount: string | null;
```

###### Example

```ts
62.50
```

##### GetPaymentStatusResponse.currency

```ts
currency: string | null;
```

###### Example

```ts
GBP
```

##### GetPaymentStatusResponse.failedAt

```ts
failedAt: string | null;
```

###### Example

```ts
null
```

##### GetPaymentStatusResponse.failureReason

```ts
failureReason: string | null;
```

###### Example

```ts
null
```

##### GetPaymentStatusResponse.paidAt

```ts
paidAt: string | null;
```

###### Example

```ts
null
```

##### GetPaymentStatusResponse.paymentId

```ts
paymentId: string | null;
```

###### Example

```ts
pay_abc123xyz789
```

##### GetPaymentStatusResponse.status

```ts
status: 
  | "cancelled"
  | "pending"
  | "succeeded"
  | "failed"
  | "processing"
  | "requires_action"
  | "none";
```

###### Example

```ts
pending
@enum {string}
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

#### GetReservationResponse

```ts
GetReservationResponse: {
  reservation: {
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
  };
};
```

##### GetReservationResponse.reservation

```ts
reservation: {
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
};
```

##### GetReservationResponse.reservation.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### GetReservationResponse.reservation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### GetReservationResponse.reservation.expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-12-28T10:45:00Z
```

##### GetReservationResponse.reservation.heldBy

```ts
heldBy: string | null;
```

###### Example

```ts
usr_abc123
```

##### GetReservationResponse.reservation.id

```ts
id: string;
```

###### Example

```ts
ivr_abc123
```

##### GetReservationResponse.reservation.inventoryId

```ts
inventoryId: string;
```

###### Example

```ts
inv_ghi789
```

##### GetReservationResponse.reservation.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
null
```

##### GetReservationResponse.reservation.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### GetReservationResponse.reservation.quantity

```ts
quantity: number;
```

###### Example

```ts
2
```

##### GetReservationResponse.reservation.reason

```ts
reason: string | null;
```

###### Example

```ts
Customer checkout
```

##### GetReservationResponse.reservation.referenceId

```ts
referenceId: string | null;
```

###### Example

```ts
ord_jkl012
```

##### GetReservationResponse.reservation.referenceType

```ts
referenceType: "subscription" | "order" | "hold" | null;
```

###### Description

Type of reference for this reservation

###### Example

```ts
order
@enum {string|null}
```

##### GetReservationResponse.reservation.seatIds

```ts
seatIds: string[] | null;
```

###### Example

```ts
[
      "ivs_abc123",
      "ivs_def456"
    ]
```

##### GetReservationResponse.reservation.type

```ts
type: "confirmed" | "maintenance" | "hold" | "temporary";
```

###### Description

Type of reservation

###### Example

```ts
temporary
@enum {string}
```

##### GetReservationResponse.reservation.updatedAt

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

#### InitiatePaymentResponse

```ts
InitiatePaymentResponse: {
  clientSecret: string | null;
  expiresAt: string | null;
  paymentId: string;
  redirectUrl: string | null;
  status: "pending" | "succeeded" | "failed" | "processing" | "requires_action";
};
```

##### InitiatePaymentResponse.clientSecret

```ts
clientSecret: string | null;
```

###### Example

```ts
pi_xxx_secret_yyy
```

##### InitiatePaymentResponse.expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-01-15T10:45:00Z
```

##### InitiatePaymentResponse.paymentId

```ts
paymentId: string;
```

###### Example

```ts
pay_abc123xyz789
```

##### InitiatePaymentResponse.redirectUrl

```ts
redirectUrl: string | null;
```

###### Example

```ts
https://checkout.stripe.com/pay/xxx
```

##### InitiatePaymentResponse.status

```ts
status: "pending" | "succeeded" | "failed" | "processing" | "requires_action";
```

###### Example

```ts
pending
@enum {string}
```

#### Inventory

```ts
Inventory: {
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
};
```

##### Inventory.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### Inventory.available

```ts
available: number;
```

###### Example

```ts
450
```

##### Inventory.confirmed

```ts
confirmed: number;
```

###### Example

```ts
20
```

##### Inventory.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### Inventory.eventId

```ts
eventId: string | null;
```

###### Example

```ts
evt_ghi789
```

##### Inventory.eventLayoutAreaId

```ts
eventLayoutAreaId: string | null;
```

###### Example

```ts
ela_mno345
```

##### Inventory.eventOccurrenceId

```ts
eventOccurrenceId: string | null;
```

###### Example

```ts
evo_jkl012
```

##### Inventory.held

```ts
held: number;
```

###### Example

```ts
0
```

##### Inventory.id

```ts
id: string;
```

###### Example

```ts
inv_abc123
```

##### Inventory.isAllocated

```ts
isAllocated: boolean;
```

###### Example

```ts
false
```

##### Inventory.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
null
```

##### Inventory.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### Inventory.productId

```ts
productId: string | null;
```

###### Example

```ts
prd_pqr678
```

##### Inventory.reserved

```ts
reserved: number;
```

###### Example

```ts
30
```

##### Inventory.sourceType

```ts
sourceType: "event_occurrence_area" | "product";
```

###### Description

Type of inventory source

###### Example

```ts
event_occurrence_area
@enum {string}
```

##### Inventory.totalCapacity

```ts
totalCapacity: number;
```

###### Example

```ts
500
```

##### Inventory.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### Inventory.version

```ts
version: number;
```

###### Example

```ts
1
```

#### InventoryReservation

```ts
InventoryReservation: {
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
};
```

##### InventoryReservation.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### InventoryReservation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### InventoryReservation.expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-12-28T10:45:00Z
```

##### InventoryReservation.heldBy

```ts
heldBy: string | null;
```

###### Example

```ts
usr_abc123
```

##### InventoryReservation.id

```ts
id: string;
```

###### Example

```ts
ivr_abc123
```

##### InventoryReservation.inventoryId

```ts
inventoryId: string;
```

###### Example

```ts
inv_ghi789
```

##### InventoryReservation.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
null
```

##### InventoryReservation.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### InventoryReservation.quantity

```ts
quantity: number;
```

###### Example

```ts
2
```

##### InventoryReservation.reason

```ts
reason: string | null;
```

###### Example

```ts
Customer checkout
```

##### InventoryReservation.referenceId

```ts
referenceId: string | null;
```

###### Example

```ts
ord_jkl012
```

##### InventoryReservation.referenceType

```ts
referenceType: "subscription" | "order" | "hold" | null;
```

###### Description

Type of reference for this reservation

###### Example

```ts
order
@enum {string|null}
```

##### InventoryReservation.seatIds

```ts
seatIds: string[] | null;
```

###### Example

```ts
[
      "ivs_abc123",
      "ivs_def456"
    ]
```

##### InventoryReservation.type

```ts
type: "confirmed" | "maintenance" | "hold" | "temporary";
```

###### Description

Type of reservation

###### Example

```ts
temporary
@enum {string}
```

##### InventoryReservation.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

#### InventorySeat

```ts
InventorySeat: {
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
};
```

##### InventorySeat.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_ghi012
```

##### InventorySeat.attributes

```ts
attributes: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
null
```

##### InventorySeat.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### InventorySeat.eventLayoutSeatId

```ts
eventLayoutSeatId: string | null;
```

###### Example

```ts
eas_jkl345
```

##### InventorySeat.id

```ts
id: string;
```

###### Example

```ts
ivs_abc123
```

##### InventorySeat.inventoryId

```ts
inventoryId: string;
```

###### Example

```ts
inv_def456
```

##### InventorySeat.isAccessible

```ts
isAccessible: boolean;
```

###### Example

```ts
false
```

##### InventorySeat.isCompanion

```ts
isCompanion: boolean;
```

###### Example

```ts
false
```

##### InventorySeat.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### InventorySeat.priceCategory

```ts
priceCategory: string | null;
```

###### Example

```ts
premium
```

##### InventorySeat.reservationId

```ts
reservationId: string | null;
```

###### Example

```ts
ivr_mno678
```

##### InventorySeat.rowName

```ts
rowName: string;
```

###### Example

```ts
A
```

##### InventorySeat.seatNumber

```ts
seatNumber: string;
```

###### Example

```ts
12
```

##### InventorySeat.status

```ts
status: "available" | "held" | "reserved" | "confirmed" | "maintenance";
```

###### Description

Current status of the seat

###### Example

```ts
available
@enum {string}
```

##### InventorySeat.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### InventorySeat.version

```ts
version: number;
```

###### Example

```ts
1
```

#### Invoice

```ts
Invoice: {
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
```

##### Invoice.amountDue

```ts
amountDue: string;
```

###### Example

```ts
0.00
```

##### Invoice.amountPaid

```ts
amountPaid: string;
```

###### Example

```ts
25.00
```

##### Invoice.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### Invoice.currency

```ts
currency: string;
```

###### Example

```ts
USD
```

##### Invoice.dueDate

```ts
dueDate: string | null;
```

###### Example

```ts
2024-01-30
```

##### Invoice.id

```ts
id: string;
```

###### Example

```ts
inv_abc123
```

##### Invoice.invoiceNumber

```ts
invoiceNumber: string;
```

###### Example

```ts
INV-2024-0001
```

##### Invoice.issueDate

```ts
issueDate: string;
```

###### Example

```ts
2024-01-15
```

##### Invoice.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_abc123
```

##### Invoice.paidAt

```ts
paidAt: string | null;
```

###### Example

```ts
2024-01-15T10:35:00Z
```

##### Invoice.pdfUrl

```ts
pdfUrl: string | null;
```

###### Example

```ts
https://invoice.stripe.com/...
```

##### Invoice.status

```ts
status: "draft" | "open" | "paid" | "void" | "uncollectible";
```

###### Example

```ts
paid
@enum {string}
```

##### Invoice.subtotal

```ts
subtotal: string;
```

###### Example

```ts
25.00
```

##### Invoice.tax

```ts
tax: string;
```

###### Example

```ts
0.00
```

##### Invoice.total

```ts
total: string;
```

###### Example

```ts
25.00
```

##### Invoice.type

```ts
type: "purchase" | "subscription" | "payg";
```

###### Example

```ts
purchase
@enum {string}
```

##### Invoice.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:35:00Z
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

#### ListCustomersResponse

```ts
ListCustomersResponse: {
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
};
```

##### ListCustomersResponse.customers

```ts
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
```

##### ListCustomersResponse.pagination

```ts
pagination: {
  limit: number;
  page: number;
  total: number;
  totalPages: number;
};
```

##### ListCustomersResponse.pagination.limit

```ts
limit: number;
```

###### Example

```ts
20
```

##### ListCustomersResponse.pagination.page

```ts
page: number;
```

###### Example

```ts
1
```

##### ListCustomersResponse.pagination.total

```ts
total: number;
```

###### Example

```ts
150
```

##### ListCustomersResponse.pagination.totalPages

```ts
totalPages: number;
```

###### Example

```ts
8
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

#### ListInventoryResponse

```ts
ListInventoryResponse: {
  inventory: {
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
  }[];
};
```

##### ListInventoryResponse.inventory

```ts
inventory: {
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
}[];
```

#### ListInvoicesResponse

```ts
ListInvoicesResponse: {
  invoices: {
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
  }[];
};
```

##### ListInvoicesResponse.invoices

```ts
invoices: {
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
}[];
```

#### ListOrdersResponse

```ts
ListOrdersResponse: {
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
  }[];
  pagination: {
     limit: number;
     page: number;
     total: number;
     totalPages: number;
  };
};
```

##### ListOrdersResponse.orders

```ts
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
}[];
```

##### ListOrdersResponse.pagination

```ts
pagination: {
  limit: number;
  page: number;
  total: number;
  totalPages: number;
};
```

##### ListOrdersResponse.pagination.limit

```ts
limit: number;
```

###### Example

```ts
20
```

##### ListOrdersResponse.pagination.page

```ts
page: number;
```

###### Example

```ts
1
```

##### ListOrdersResponse.pagination.total

```ts
total: number;
```

###### Example

```ts
150
```

##### ListOrdersResponse.pagination.totalPages

```ts
totalPages: number;
```

###### Example

```ts
8
```

#### ListPackagesResponse

```ts
ListPackagesResponse: {
  packages: {
     baseCurrency: string;
     basePrice: string;
     credits: number;
     discountPercent: string;
     displayOrder: number;
     finalPrice: string;
     id: string;
     isActive: boolean;
     name: string;
  }[];
};
```

##### ListPackagesResponse.packages

```ts
packages: {
  baseCurrency: string;
  basePrice: string;
  credits: number;
  discountPercent: string;
  displayOrder: number;
  finalPrice: string;
  id: string;
  isActive: boolean;
  name: string;
}[];
```

#### ListPaymentProvidersResponse

```ts
ListPaymentProvidersResponse: {
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
     type:   | "bank_transfer"
        | "cash"
        | "stripe_connect"
        | "stripe_direct"
        | "adyen"
        | "square"
        | "paypal";
     updatedAt: string;
  }[];
};
```

##### ListPaymentProvidersResponse.pagination

```ts
pagination: {
  limit: number;
  page: number;
  total: number;
  totalPages: number;
};
```

##### ListPaymentProvidersResponse.pagination.limit

```ts
limit: number;
```

###### Example

```ts
20
```

##### ListPaymentProvidersResponse.pagination.page

```ts
page: number;
```

###### Example

```ts
1
```

##### ListPaymentProvidersResponse.pagination.total

```ts
total: number;
```

###### Example

```ts
5
```

##### ListPaymentProvidersResponse.pagination.totalPages

```ts
totalPages: number;
```

###### Example

```ts
1
```

##### ListPaymentProvidersResponse.providers

```ts
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
  type:   | "bank_transfer"
     | "cash"
     | "stripe_connect"
     | "stripe_direct"
     | "adyen"
     | "square"
     | "paypal";
  updatedAt: string;
}[];
```

#### ListPaymentsResponse

```ts
ListPaymentsResponse: {
  payments: {
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
  }[];
};
```

##### ListPaymentsResponse.payments

```ts
payments: {
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

#### ListRefundsResponse

```ts
ListRefundsResponse: {
  refunds: {
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
  }[];
};
```

##### ListRefundsResponse.refunds

```ts
refunds: {
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
}[];
```

#### ListReservationsResponse

```ts
ListReservationsResponse: {
  reservations: {
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
  }[];
};
```

##### ListReservationsResponse.reservations

```ts
reservations: {
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

#### ListSeatsResponse

```ts
ListSeatsResponse: {
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
};
```

##### ListSeatsResponse.seats

```ts
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
```

#### ListSubscriptionsResponse

```ts
ListSubscriptionsResponse: {
  subscriptions: {
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
  }[];
};
```

##### ListSubscriptionsResponse.subscriptions

```ts
subscriptions: {
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
}[];
```

#### ListTransactionsResponse

```ts
ListTransactionsResponse: {
  transactions: {
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
  }[];
};
```

##### ListTransactionsResponse.transactions

```ts
transactions: {
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

#### Order

```ts
Order: {
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
```

##### Order.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_xyz789
```

##### Order.cancellationReason

```ts
cancellationReason: string | null;
```

###### Example

```ts
null
```

##### Order.cancelledAt

```ts
cancelledAt: string | null;
```

###### Example

```ts
null
```

##### Order.channel

```ts
channel: string | null;
```

###### Example

```ts
web
```

##### Order.completedAt

```ts
completedAt: string | null;
```

###### Example

```ts
null
```

##### Order.confirmedAt

```ts
confirmedAt: string | null;
```

###### Example

```ts
null
```

##### Order.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### Order.currency

```ts
currency: string;
```

###### Example

```ts
GBP
```

##### Order.customerId

```ts
customerId: string | null;
```

###### Example

```ts
cus_abc123
```

##### Order.customerNotes

```ts
customerNotes: string | null;
```

###### Example

```ts
Please contact me before delivery
```

##### Order.discountTotal

```ts
discountTotal: string;
```

###### Example

```ts
0.00
```

##### Order.expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-01-15T10:45:00Z
```

##### Order.feeTotal

```ts
feeTotal: string;
```

###### Example

```ts
2.50
```

##### Order.id

```ts
id: string;
```

###### Example

```ts
ord_abc123xyz789
```

##### Order.internalNotes

```ts
internalNotes: string | null;
```

###### Example

```ts
VIP customer
```

##### Order.isGuestCheckout

```ts
isGuestCheckout: boolean;
```

###### Example

```ts
false
```

##### Order.items?

```ts
optional items: {
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
```

###### Description

Order line items

##### Order.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "promoCode": "SUMMER20"
             *     }
```

##### Order.orderNumber

```ts
orderNumber: string;
```

###### Example

```ts
ORD-ABC123
```

##### Order.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### Order.status

```ts
status: 
  | "completed"
  | "cancelled"
  | "pending"
  | "failed"
  | "refunded"
  | "confirmed"
  | "processing"
  | "expired";
```

###### Example

```ts
pending
@enum {string}
```

##### Order.subtotal

```ts
subtotal: string;
```

###### Example

```ts
50.00
```

##### Order.taxTotal

```ts
taxTotal: string;
```

###### Example

```ts
10.00
```

##### Order.total

```ts
total: string;
```

###### Example

```ts
62.50
```

##### Order.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

#### OrderLineItem

```ts
OrderLineItem: {
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
```

##### OrderLineItem.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### OrderLineItem.description

```ts
description: string | null;
```

###### Example

```ts
Entry to main event area
```

##### OrderLineItem.feeDetails

```ts
feeDetails: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
null
```

##### OrderLineItem.id

```ts
id: string;
```

###### Example

```ts
oli_abc123
```

##### OrderLineItem.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "source": "web"
             *     }
```

##### OrderLineItem.name

```ts
name: string;
```

###### Example

```ts
General Admission
```

##### OrderLineItem.orderId

```ts
orderId: string;
```

###### Example

```ts
ord_abc123xyz789
```

##### OrderLineItem.productDetails

```ts
productDetails: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
null
```

##### OrderLineItem.quantity

```ts
quantity: number;
```

###### Example

```ts
2
```

##### OrderLineItem.ticketDetails

```ts
ticketDetails: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "eventId": "evt_123"
             *     }
```

##### OrderLineItem.totalPrice

```ts
totalPrice: string;
```

###### Example

```ts
50.00
```

##### OrderLineItem.type

```ts
type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
```

###### Example

```ts
ticket
@enum {string}
```

##### OrderLineItem.unitPrice

```ts
unitPrice: string;
```

###### Example

```ts
25.00
```

##### OrderLineItem.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
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

#### Payment

```ts
Payment: {
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
```

##### Payment.amount

```ts
amount: string;
```

###### Example

```ts
25.00
```

##### Payment.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### Payment.currency

```ts
currency: string;
```

###### Example

```ts
USD
```

##### Payment.failedAt

```ts
failedAt: string | null;
```

###### Example

```ts
null
```

##### Payment.failureCode

```ts
failureCode: string | null;
```

###### Example

```ts
null
```

##### Payment.failureMessage

```ts
failureMessage: string | null;
```

###### Example

```ts
null
```

##### Payment.id

```ts
id: string;
```

###### Example

```ts
pay_abc123
```

##### Payment.invoiceId

```ts
invoiceId: string | null;
```

###### Example

```ts
inv_abc123
```

##### Payment.method

```ts
method: string | null;
```

###### Example

```ts
card
```

##### Payment.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_abc123
```

##### Payment.paidAt

```ts
paidAt: string | null;
```

###### Example

```ts
2024-01-15T10:35:00Z
```

##### Payment.status

```ts
status: "cancelled" | "pending" | "succeeded" | "failed" | "refunded";
```

###### Example

```ts
succeeded
@enum {string}
```

##### Payment.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:35:00Z
```

#### PaymentMethodDetails

```ts
PaymentMethodDetails: 
  | {
  brand: string | null;
  expiryMonth: number | null;
  expiryYear: number | null;
  last4: string | null;
  type: "card" | "bank_transfer" | "cash" | "wallet";
}
  | null;
```

##### Type Declaration

```ts
{
  brand: string | null;
  expiryMonth: number | null;
  expiryYear: number | null;
  last4: string | null;
  type: "card" | "bank_transfer" | "cash" | "wallet";
}
```

`null`

##### Description

Payment method details

#### PaymentProvider

```ts
PaymentProvider: {
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
  type:   | "bank_transfer"
     | "cash"
     | "stripe_connect"
     | "stripe_direct"
     | "adyen"
     | "square"
     | "paypal";
  updatedAt: string;
};
```

##### PaymentProvider.accountId

```ts
accountId: string | null;
```

###### Example

```ts
acc_xyz789
```

##### PaymentProvider.applicationFee

```ts
applicationFee: 
  | {
  type: "percentage" | "fixed";
  value: number;
}
  | null;
```

###### Type Declaration

```ts
{
  type: "percentage" | "fixed";
  value: number;
}
```

`null`

##### PaymentProvider.capabilities

```ts
capabilities: 
  | {
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
```

###### Type Declaration

```ts
{
  maxAmount?: number;
  minAmount?: number;
  requiresCustomerAction?: boolean;
  supportedCurrencies?: string[];
  supportsDelayedCapture?: boolean;
  supportsInstantCapture?: boolean;
  supportsPartialRefunds?: boolean;
  supportsRefunds?: boolean;
}
```

`null`

##### PaymentProvider.configuration

```ts
configuration: {
[key: string]: unknown;
};
```

###### Index Signature

```ts
[key: string]: unknown
```

###### Description

Provider-specific configuration (sensitive fields redacted)

###### Example

```ts
{
             *       "stripeConnectedAccountId": "acct_xxx"
             *     }
```

##### PaymentProvider.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### PaymentProvider.description

```ts
description: string | null;
```

###### Example

```ts
Primary payment processor for online orders
```

##### PaymentProvider.feeStructure

```ts
feeStructure: 
  | {
  currency?: string;
  fixed?: number;
  percentage?: number;
  type: "percentage" | "fixed" | "percentage_plus_fixed";
}
  | null;
```

###### Type Declaration

```ts
{
  currency?: string;
  fixed?: number;
  percentage?: number;
  type: "percentage" | "fixed" | "percentage_plus_fixed";
}
```

`null`

##### PaymentProvider.id

```ts
id: string;
```

###### Example

```ts
pp_stripeXxx123
```

##### PaymentProvider.integrationServiceUrl

```ts
integrationServiceUrl: string | null;
```

###### Example

```ts
https://stripe.paymentintegration.ticketlayer.com
```

##### PaymentProvider.integrationServiceVersion

```ts
integrationServiceVersion: string;
```

###### Example

```ts
v1
```

##### PaymentProvider.isDefault

```ts
isDefault: boolean;
```

###### Example

```ts
true
```

##### PaymentProvider.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "environment": "production"
             *     }
```

##### PaymentProvider.name

```ts
name: string;
```

###### Example

```ts
Main Stripe Account
```

##### PaymentProvider.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### PaymentProvider.priority

```ts
priority: number;
```

###### Example

```ts
100
```

##### PaymentProvider.status

```ts
status: "active" | "inactive" | "pending_setup";
```

###### Example

```ts
active
@enum {string}
```

##### PaymentProvider.supportedPaymentTypes

```ts
supportedPaymentTypes: (
  | "bank_transfer"
  | "online_card"
  | "online_bank_transfer"
  | "online_wallet"
  | "in_person_card"
  | "in_person_cash"
  | "cheque")[];
```

###### Example

```ts
[
      "online_card",
      "online_wallet"
    ]
```

##### PaymentProvider.type

```ts
type: 
  | "bank_transfer"
  | "cash"
  | "stripe_connect"
  | "stripe_direct"
  | "adyen"
  | "square"
  | "paypal";
```

###### Example

```ts
stripe_connect
@enum {string}
```

##### PaymentProvider.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

#### PaymentProviderCapabilities

```ts
PaymentProviderCapabilities: 
  | {
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
```

##### Type Declaration

```ts
{
  maxAmount?: number;
  minAmount?: number;
  requiresCustomerAction?: boolean;
  supportedCurrencies?: string[];
  supportsDelayedCapture?: boolean;
  supportsInstantCapture?: boolean;
  supportsPartialRefunds?: boolean;
  supportsRefunds?: boolean;
}
```

`null`

##### Description

Provider capabilities

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

#### PurchaseResult

```ts
PurchaseResult: {
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
};
```

##### PurchaseResult.invoice

```ts
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
```

##### PurchaseResult.invoice.amountDue

```ts
amountDue: string;
```

###### Example

```ts
0.00
```

##### PurchaseResult.invoice.amountPaid

```ts
amountPaid: string;
```

###### Example

```ts
25.00
```

##### PurchaseResult.invoice.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### PurchaseResult.invoice.currency

```ts
currency: string;
```

###### Example

```ts
USD
```

##### PurchaseResult.invoice.dueDate

```ts
dueDate: string | null;
```

###### Example

```ts
2024-01-30
```

##### PurchaseResult.invoice.id

```ts
id: string;
```

###### Example

```ts
inv_abc123
```

##### PurchaseResult.invoice.invoiceNumber

```ts
invoiceNumber: string;
```

###### Example

```ts
INV-2024-0001
```

##### PurchaseResult.invoice.issueDate

```ts
issueDate: string;
```

###### Example

```ts
2024-01-15
```

##### PurchaseResult.invoice.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_abc123
```

##### PurchaseResult.invoice.paidAt

```ts
paidAt: string | null;
```

###### Example

```ts
2024-01-15T10:35:00Z
```

##### PurchaseResult.invoice.pdfUrl

```ts
pdfUrl: string | null;
```

###### Example

```ts
https://invoice.stripe.com/...
```

##### PurchaseResult.invoice.status

```ts
status: "draft" | "open" | "paid" | "void" | "uncollectible";
```

###### Example

```ts
paid
@enum {string}
```

##### PurchaseResult.invoice.subtotal

```ts
subtotal: string;
```

###### Example

```ts
25.00
```

##### PurchaseResult.invoice.tax

```ts
tax: string;
```

###### Example

```ts
0.00
```

##### PurchaseResult.invoice.total

```ts
total: string;
```

###### Example

```ts
25.00
```

##### PurchaseResult.invoice.type

```ts
type: "purchase" | "subscription" | "payg";
```

###### Example

```ts
purchase
@enum {string}
```

##### PurchaseResult.invoice.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:35:00Z
```

##### PurchaseResult.newBalance

```ts
newBalance: number;
```

###### Example

```ts
150
```

##### PurchaseResult.payment

```ts
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
```

##### PurchaseResult.payment.amount

```ts
amount: string;
```

###### Example

```ts
25.00
```

##### PurchaseResult.payment.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### PurchaseResult.payment.currency

```ts
currency: string;
```

###### Example

```ts
USD
```

##### PurchaseResult.payment.failedAt

```ts
failedAt: string | null;
```

###### Example

```ts
null
```

##### PurchaseResult.payment.failureCode

```ts
failureCode: string | null;
```

###### Example

```ts
null
```

##### PurchaseResult.payment.failureMessage

```ts
failureMessage: string | null;
```

###### Example

```ts
null
```

##### PurchaseResult.payment.id

```ts
id: string;
```

###### Example

```ts
pay_abc123
```

##### PurchaseResult.payment.invoiceId

```ts
invoiceId: string | null;
```

###### Example

```ts
inv_abc123
```

##### PurchaseResult.payment.method

```ts
method: string | null;
```

###### Example

```ts
card
```

##### PurchaseResult.payment.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_abc123
```

##### PurchaseResult.payment.paidAt

```ts
paidAt: string | null;
```

###### Example

```ts
2024-01-15T10:35:00Z
```

##### PurchaseResult.payment.status

```ts
status: "cancelled" | "pending" | "succeeded" | "failed" | "refunded";
```

###### Example

```ts
succeeded
@enum {string}
```

##### PurchaseResult.payment.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:35:00Z
```

##### PurchaseResult.success

```ts
success: boolean;
```

###### Example

```ts
true
```

##### PurchaseResult.transaction

```ts
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
```

##### PurchaseResult.transaction.amount

```ts
amount: number;
```

###### Example

```ts
100
```

##### PurchaseResult.transaction.balanceAfter

```ts
balanceAfter: number;
```

###### Example

```ts
150
```

##### PurchaseResult.transaction.balanceBefore

```ts
balanceBefore: number;
```

###### Example

```ts
50
```

##### PurchaseResult.transaction.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### PurchaseResult.transaction.description

```ts
description: string | null;
```

###### Example

```ts
Credit purchase - 100 Credits
```

##### PurchaseResult.transaction.id

```ts
id: string;
```

###### Example

```ts
txn_abc123
```

##### PurchaseResult.transaction.invoiceId

```ts
invoiceId: string | null;
```

###### Example

```ts
inv_abc123
```

##### PurchaseResult.transaction.orderId

```ts
orderId: string | null;
```

###### Example

```ts
null
```

##### PurchaseResult.transaction.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_abc123
```

##### PurchaseResult.transaction.subscriptionId

```ts
subscriptionId: string | null;
```

###### Example

```ts
null
```

##### PurchaseResult.transaction.type

```ts
type: 
  | "initial"
  | "purchase"
  | "subscription"
  | "ticket_sale"
  | "adjustment"
  | "refund";
```

###### Example

```ts
purchase
@enum {string}
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

#### Refund

```ts
Refund: {
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
};
```

##### Refund.amount

```ts
amount: number;
```

###### Example

```ts
48.5
```

##### Refund.completedAt

```ts
completedAt: string | null;
```

###### Example

```ts
2024-01-15T11:00:00Z
```

##### Refund.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:50:00Z
```

##### Refund.externalRefundId

```ts
externalRefundId: string | null;
```

###### Example

```ts
re_xxx
```

##### Refund.failedAt

```ts
failedAt: string | null;
```

###### Example

```ts
null
```

##### Refund.failureCode

```ts
failureCode: string | null;
```

###### Example

```ts
null
```

##### Refund.failureMessage

```ts
failureMessage: string | null;
```

###### Example

```ts
null
```

##### Refund.id

```ts
id: string;
```

###### Example

```ts
ref_abc123xyz789
```

##### Refund.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "ticketNumber": "T-001"
             *     }
```

##### Refund.notes

```ts
notes: string | null;
```

###### Example

```ts
Customer unable to attend
```

##### Refund.paymentId

```ts
paymentId: string;
```

###### Example

```ts
pay_abc123xyz789
```

##### Refund.reason

```ts
reason: string;
```

###### Example

```ts
requested_by_customer
```

##### Refund.status

```ts
status: "cancelled" | "pending" | "succeeded" | "failed" | "processing";
```

###### Example

```ts
succeeded
@enum {string}
```

##### Refund.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T11:00:00Z
```

#### ReleaseHoldResponse

```ts
ReleaseHoldResponse: {
  message: string;
};
```

##### ReleaseHoldResponse.message

```ts
message: string;
```

###### Example

```ts
Hold released successfully
```

#### ReleaseReservationResponse

```ts
ReleaseReservationResponse: {
  message: string;
};
```

##### ReleaseReservationResponse.message

```ts
message: string;
```

###### Example

```ts
Reservation released successfully
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

#### RemoveLineItemResponse

```ts
RemoveLineItemResponse: {
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
};
```

##### RemoveLineItemResponse.order

```ts
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
```

##### RemoveLineItemResponse.order.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_xyz789
```

##### RemoveLineItemResponse.order.cancellationReason

```ts
cancellationReason: string | null;
```

###### Example

```ts
null
```

##### RemoveLineItemResponse.order.cancelledAt

```ts
cancelledAt: string | null;
```

###### Example

```ts
null
```

##### RemoveLineItemResponse.order.channel

```ts
channel: string | null;
```

###### Example

```ts
web
```

##### RemoveLineItemResponse.order.completedAt

```ts
completedAt: string | null;
```

###### Example

```ts
null
```

##### RemoveLineItemResponse.order.confirmedAt

```ts
confirmedAt: string | null;
```

###### Example

```ts
null
```

##### RemoveLineItemResponse.order.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### RemoveLineItemResponse.order.currency

```ts
currency: string;
```

###### Example

```ts
GBP
```

##### RemoveLineItemResponse.order.customerId

```ts
customerId: string | null;
```

###### Example

```ts
cus_abc123
```

##### RemoveLineItemResponse.order.customerNotes

```ts
customerNotes: string | null;
```

###### Example

```ts
Please contact me before delivery
```

##### RemoveLineItemResponse.order.discountTotal

```ts
discountTotal: string;
```

###### Example

```ts
0.00
```

##### RemoveLineItemResponse.order.expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-01-15T10:45:00Z
```

##### RemoveLineItemResponse.order.feeTotal

```ts
feeTotal: string;
```

###### Example

```ts
2.50
```

##### RemoveLineItemResponse.order.id

```ts
id: string;
```

###### Example

```ts
ord_abc123xyz789
```

##### RemoveLineItemResponse.order.internalNotes

```ts
internalNotes: string | null;
```

###### Example

```ts
VIP customer
```

##### RemoveLineItemResponse.order.isGuestCheckout

```ts
isGuestCheckout: boolean;
```

###### Example

```ts
false
```

##### RemoveLineItemResponse.order.items?

```ts
optional items: {
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
```

###### Description

Order line items

##### RemoveLineItemResponse.order.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "promoCode": "SUMMER20"
             *     }
```

##### RemoveLineItemResponse.order.orderNumber

```ts
orderNumber: string;
```

###### Example

```ts
ORD-ABC123
```

##### RemoveLineItemResponse.order.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### RemoveLineItemResponse.order.status

```ts
status: 
  | "completed"
  | "cancelled"
  | "pending"
  | "failed"
  | "refunded"
  | "confirmed"
  | "processing"
  | "expired";
```

###### Example

```ts
pending
@enum {string}
```

##### RemoveLineItemResponse.order.subtotal

```ts
subtotal: string;
```

###### Example

```ts
50.00
```

##### RemoveLineItemResponse.order.taxTotal

```ts
taxTotal: string;
```

###### Example

```ts
10.00
```

##### RemoveLineItemResponse.order.total

```ts
total: string;
```

###### Example

```ts
62.50
```

##### RemoveLineItemResponse.order.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
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

#### ReserveInventoryResponse

```ts
ReserveInventoryResponse: {
  reservation: {
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
  };
};
```

##### ReserveInventoryResponse.reservation

```ts
reservation: {
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
};
```

##### ReserveInventoryResponse.reservation.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### ReserveInventoryResponse.reservation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### ReserveInventoryResponse.reservation.expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-12-28T10:45:00Z
```

##### ReserveInventoryResponse.reservation.heldBy

```ts
heldBy: string | null;
```

###### Example

```ts
usr_abc123
```

##### ReserveInventoryResponse.reservation.id

```ts
id: string;
```

###### Example

```ts
ivr_abc123
```

##### ReserveInventoryResponse.reservation.inventoryId

```ts
inventoryId: string;
```

###### Example

```ts
inv_ghi789
```

##### ReserveInventoryResponse.reservation.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
null
```

##### ReserveInventoryResponse.reservation.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### ReserveInventoryResponse.reservation.quantity

```ts
quantity: number;
```

###### Example

```ts
2
```

##### ReserveInventoryResponse.reservation.reason

```ts
reason: string | null;
```

###### Example

```ts
Customer checkout
```

##### ReserveInventoryResponse.reservation.referenceId

```ts
referenceId: string | null;
```

###### Example

```ts
ord_jkl012
```

##### ReserveInventoryResponse.reservation.referenceType

```ts
referenceType: "subscription" | "order" | "hold" | null;
```

###### Description

Type of reference for this reservation

###### Example

```ts
order
@enum {string|null}
```

##### ReserveInventoryResponse.reservation.seatIds

```ts
seatIds: string[] | null;
```

###### Example

```ts
[
      "ivs_abc123",
      "ivs_def456"
    ]
```

##### ReserveInventoryResponse.reservation.type

```ts
type: "confirmed" | "maintenance" | "hold" | "temporary";
```

###### Description

Type of reservation

###### Example

```ts
temporary
@enum {string}
```

##### ReserveInventoryResponse.reservation.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
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

#### Subscription

```ts
Subscription: {
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
};
```

##### Subscription.cancelledAt

```ts
cancelledAt: string | null;
```

###### Example

```ts
null
```

##### Subscription.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### Subscription.credits

```ts
credits: number;
```

###### Example

```ts
100
```

##### Subscription.currency

```ts
currency: string;
```

###### Example

```ts
USD
```

##### Subscription.currentPeriodEnd

```ts
currentPeriodEnd: string | null;
```

###### Example

```ts
2024-02-15T00:00:00Z
```

##### Subscription.currentPeriodStart

```ts
currentPeriodStart: string | null;
```

###### Example

```ts
2024-01-15T00:00:00Z
```

##### Subscription.endedAt

```ts
endedAt: string | null;
```

###### Example

```ts
null
```

##### Subscription.id

```ts
id: string;
```

###### Example

```ts
sub_abc123
```

##### Subscription.interval

```ts
interval: "month" | "year";
```

###### Example

```ts
month
@enum {string}
```

##### Subscription.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_abc123
```

##### Subscription.packageId

```ts
packageId: string;
```

###### Example

```ts
pkg_100
```

##### Subscription.price

```ts
price: string;
```

###### Example

```ts
25.00
```

##### Subscription.status

```ts
status: "active" | "cancelled" | "paused" | "past_due" | "ended";
```

###### Example

```ts
active
@enum {string}
```

##### Subscription.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
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

#### TransitionOrderStatusResponse

```ts
TransitionOrderStatusResponse: {
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
};
```

##### TransitionOrderStatusResponse.order

```ts
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
```

##### TransitionOrderStatusResponse.order.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_xyz789
```

##### TransitionOrderStatusResponse.order.cancellationReason

```ts
cancellationReason: string | null;
```

###### Example

```ts
null
```

##### TransitionOrderStatusResponse.order.cancelledAt

```ts
cancelledAt: string | null;
```

###### Example

```ts
null
```

##### TransitionOrderStatusResponse.order.channel

```ts
channel: string | null;
```

###### Example

```ts
web
```

##### TransitionOrderStatusResponse.order.completedAt

```ts
completedAt: string | null;
```

###### Example

```ts
null
```

##### TransitionOrderStatusResponse.order.confirmedAt

```ts
confirmedAt: string | null;
```

###### Example

```ts
null
```

##### TransitionOrderStatusResponse.order.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### TransitionOrderStatusResponse.order.currency

```ts
currency: string;
```

###### Example

```ts
GBP
```

##### TransitionOrderStatusResponse.order.customerId

```ts
customerId: string | null;
```

###### Example

```ts
cus_abc123
```

##### TransitionOrderStatusResponse.order.customerNotes

```ts
customerNotes: string | null;
```

###### Example

```ts
Please contact me before delivery
```

##### TransitionOrderStatusResponse.order.discountTotal

```ts
discountTotal: string;
```

###### Example

```ts
0.00
```

##### TransitionOrderStatusResponse.order.expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-01-15T10:45:00Z
```

##### TransitionOrderStatusResponse.order.feeTotal

```ts
feeTotal: string;
```

###### Example

```ts
2.50
```

##### TransitionOrderStatusResponse.order.id

```ts
id: string;
```

###### Example

```ts
ord_abc123xyz789
```

##### TransitionOrderStatusResponse.order.internalNotes

```ts
internalNotes: string | null;
```

###### Example

```ts
VIP customer
```

##### TransitionOrderStatusResponse.order.isGuestCheckout

```ts
isGuestCheckout: boolean;
```

###### Example

```ts
false
```

##### TransitionOrderStatusResponse.order.items?

```ts
optional items: {
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
```

###### Description

Order line items

##### TransitionOrderStatusResponse.order.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "promoCode": "SUMMER20"
             *     }
```

##### TransitionOrderStatusResponse.order.orderNumber

```ts
orderNumber: string;
```

###### Example

```ts
ORD-ABC123
```

##### TransitionOrderStatusResponse.order.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### TransitionOrderStatusResponse.order.status

```ts
status: 
  | "completed"
  | "cancelled"
  | "pending"
  | "failed"
  | "refunded"
  | "confirmed"
  | "processing"
  | "expired";
```

###### Example

```ts
pending
@enum {string}
```

##### TransitionOrderStatusResponse.order.subtotal

```ts
subtotal: string;
```

###### Example

```ts
50.00
```

##### TransitionOrderStatusResponse.order.taxTotal

```ts
taxTotal: string;
```

###### Example

```ts
10.00
```

##### TransitionOrderStatusResponse.order.total

```ts
total: string;
```

###### Example

```ts
62.50
```

##### TransitionOrderStatusResponse.order.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

#### UnblockCustomerResponse

```ts
UnblockCustomerResponse: {
  customer: {
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
  };
};
```

##### UnblockCustomerResponse.customer

```ts
customer: {
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
};
```

##### UnblockCustomerResponse.customer.accountId

```ts
accountId: string | null;
```

###### Example

```ts
acc_xyz789
```

##### UnblockCustomerResponse.customer.blockedAt

```ts
blockedAt: string | null;
```

###### Example

```ts
null
```

##### UnblockCustomerResponse.customer.blockedReason

```ts
blockedReason: string | null;
```

###### Example

```ts
null
```

##### UnblockCustomerResponse.customer.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### UnblockCustomerResponse.customer.email

```ts
email: string;
```

###### Example

```ts
customer@example.com
```

##### UnblockCustomerResponse.customer.externalId

```ts
externalId: string | null;
```

###### Example

```ts
ext_cust_12345
```

##### UnblockCustomerResponse.customer.firstName

```ts
firstName: string | null;
```

###### Example

```ts
John
```

##### UnblockCustomerResponse.customer.id

```ts
id: string;
```

###### Example

```ts
cus_abc123
```

##### UnblockCustomerResponse.customer.isBlocked

```ts
isBlocked: boolean;
```

###### Example

```ts
false
```

##### UnblockCustomerResponse.customer.lastName

```ts
lastName: string | null;
```

###### Example

```ts
Doe
```

##### UnblockCustomerResponse.customer.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "loyaltyTier": "gold"
             *     }
```

##### UnblockCustomerResponse.customer.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### UnblockCustomerResponse.customer.phone

```ts
phone: string | null;
```

###### Example

```ts
+44 7700 900000
```

##### UnblockCustomerResponse.customer.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
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

#### UpdateAutoTopupRequest

```ts
UpdateAutoTopupRequest: {
  enabled: boolean;
  thresholdCredits: number;
  topupPackageId: string;
};
```

##### UpdateAutoTopupRequest.enabled

```ts
enabled: boolean;
```

##### UpdateAutoTopupRequest.thresholdCredits

```ts
thresholdCredits: number;
```

##### UpdateAutoTopupRequest.topupPackageId

```ts
topupPackageId: string;
```

#### UpdateAutoTopupResponse

```ts
UpdateAutoTopupResponse: {
  autoTopup: {
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
  } & Record<string, never>;
};
```

##### UpdateAutoTopupResponse.autoTopup

```ts
autoTopup: {
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
} & Record<string, never>;
```

###### Type Declaration

###### attemptsToday

```ts
attemptsToday: number;
```

###### Example

```ts
0
```

###### createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

###### enabled

```ts
enabled: boolean;
```

###### Example

```ts
true
```

###### id

```ts
id: string;
```

###### Example

```ts
atu_abc123
```

###### lastAttemptAt

```ts
lastAttemptAt: string | null;
```

###### Example

```ts
null
```

###### maxAttemptsPerDay

```ts
maxAttemptsPerDay: number;
```

###### Example

```ts
3
```

###### organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_abc123
```

###### thresholdCredits

```ts
thresholdCredits: number;
```

###### Example

```ts
50
```

###### topupPackageId

```ts
topupPackageId: string;
```

###### Example

```ts
pkg_100
```

###### updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
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

#### UpdateCustomerResponse

```ts
UpdateCustomerResponse: {
  customer: {
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
  };
};
```

##### UpdateCustomerResponse.customer

```ts
customer: {
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
};
```

##### UpdateCustomerResponse.customer.accountId

```ts
accountId: string | null;
```

###### Example

```ts
acc_xyz789
```

##### UpdateCustomerResponse.customer.blockedAt

```ts
blockedAt: string | null;
```

###### Example

```ts
null
```

##### UpdateCustomerResponse.customer.blockedReason

```ts
blockedReason: string | null;
```

###### Example

```ts
null
```

##### UpdateCustomerResponse.customer.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### UpdateCustomerResponse.customer.email

```ts
email: string;
```

###### Example

```ts
customer@example.com
```

##### UpdateCustomerResponse.customer.externalId

```ts
externalId: string | null;
```

###### Example

```ts
ext_cust_12345
```

##### UpdateCustomerResponse.customer.firstName

```ts
firstName: string | null;
```

###### Example

```ts
John
```

##### UpdateCustomerResponse.customer.id

```ts
id: string;
```

###### Example

```ts
cus_abc123
```

##### UpdateCustomerResponse.customer.isBlocked

```ts
isBlocked: boolean;
```

###### Example

```ts
false
```

##### UpdateCustomerResponse.customer.lastName

```ts
lastName: string | null;
```

###### Example

```ts
Doe
```

##### UpdateCustomerResponse.customer.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "loyaltyTier": "gold"
             *     }
```

##### UpdateCustomerResponse.customer.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### UpdateCustomerResponse.customer.phone

```ts
phone: string | null;
```

###### Example

```ts
+44 7700 900000
```

##### UpdateCustomerResponse.customer.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
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

#### UpdateInventoryResponse

```ts
UpdateInventoryResponse: {
  inventory: {
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
  };
};
```

##### UpdateInventoryResponse.inventory

```ts
inventory: {
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
};
```

##### UpdateInventoryResponse.inventory.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### UpdateInventoryResponse.inventory.available

```ts
available: number;
```

###### Example

```ts
450
```

##### UpdateInventoryResponse.inventory.confirmed

```ts
confirmed: number;
```

###### Example

```ts
20
```

##### UpdateInventoryResponse.inventory.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### UpdateInventoryResponse.inventory.eventId

```ts
eventId: string | null;
```

###### Example

```ts
evt_ghi789
```

##### UpdateInventoryResponse.inventory.eventLayoutAreaId

```ts
eventLayoutAreaId: string | null;
```

###### Example

```ts
ela_mno345
```

##### UpdateInventoryResponse.inventory.eventOccurrenceId

```ts
eventOccurrenceId: string | null;
```

###### Example

```ts
evo_jkl012
```

##### UpdateInventoryResponse.inventory.held

```ts
held: number;
```

###### Example

```ts
0
```

##### UpdateInventoryResponse.inventory.id

```ts
id: string;
```

###### Example

```ts
inv_abc123
```

##### UpdateInventoryResponse.inventory.isAllocated

```ts
isAllocated: boolean;
```

###### Example

```ts
false
```

##### UpdateInventoryResponse.inventory.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
null
```

##### UpdateInventoryResponse.inventory.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### UpdateInventoryResponse.inventory.productId

```ts
productId: string | null;
```

###### Example

```ts
prd_pqr678
```

##### UpdateInventoryResponse.inventory.reserved

```ts
reserved: number;
```

###### Example

```ts
30
```

##### UpdateInventoryResponse.inventory.sourceType

```ts
sourceType: "event_occurrence_area" | "product";
```

###### Description

Type of inventory source

###### Example

```ts
event_occurrence_area
@enum {string}
```

##### UpdateInventoryResponse.inventory.totalCapacity

```ts
totalCapacity: number;
```

###### Example

```ts
500
```

##### UpdateInventoryResponse.inventory.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### UpdateInventoryResponse.inventory.version

```ts
version: number;
```

###### Example

```ts
1
```

#### UpdateLineItemResponse

```ts
UpdateLineItemResponse: {
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
};
```

##### UpdateLineItemResponse.item

```ts
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
```

##### UpdateLineItemResponse.item.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### UpdateLineItemResponse.item.description

```ts
description: string | null;
```

###### Example

```ts
Entry to main event area
```

##### UpdateLineItemResponse.item.feeDetails

```ts
feeDetails: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
null
```

##### UpdateLineItemResponse.item.id

```ts
id: string;
```

###### Example

```ts
oli_abc123
```

##### UpdateLineItemResponse.item.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "source": "web"
             *     }
```

##### UpdateLineItemResponse.item.name

```ts
name: string;
```

###### Example

```ts
General Admission
```

##### UpdateLineItemResponse.item.orderId

```ts
orderId: string;
```

###### Example

```ts
ord_abc123xyz789
```

##### UpdateLineItemResponse.item.productDetails

```ts
productDetails: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
null
```

##### UpdateLineItemResponse.item.quantity

```ts
quantity: number;
```

###### Example

```ts
2
```

##### UpdateLineItemResponse.item.ticketDetails

```ts
ticketDetails: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "eventId": "evt_123"
             *     }
```

##### UpdateLineItemResponse.item.totalPrice

```ts
totalPrice: string;
```

###### Example

```ts
50.00
```

##### UpdateLineItemResponse.item.type

```ts
type: "product" | "ticket" | "addon" | "fee" | "tax" | "discount";
```

###### Example

```ts
ticket
@enum {string}
```

##### UpdateLineItemResponse.item.unitPrice

```ts
unitPrice: string;
```

###### Example

```ts
25.00
```

##### UpdateLineItemResponse.item.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### UpdateLineItemResponse.order

```ts
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
```

##### UpdateLineItemResponse.order.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_xyz789
```

##### UpdateLineItemResponse.order.cancellationReason

```ts
cancellationReason: string | null;
```

###### Example

```ts
null
```

##### UpdateLineItemResponse.order.cancelledAt

```ts
cancelledAt: string | null;
```

###### Example

```ts
null
```

##### UpdateLineItemResponse.order.channel

```ts
channel: string | null;
```

###### Example

```ts
web
```

##### UpdateLineItemResponse.order.completedAt

```ts
completedAt: string | null;
```

###### Example

```ts
null
```

##### UpdateLineItemResponse.order.confirmedAt

```ts
confirmedAt: string | null;
```

###### Example

```ts
null
```

##### UpdateLineItemResponse.order.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### UpdateLineItemResponse.order.currency

```ts
currency: string;
```

###### Example

```ts
GBP
```

##### UpdateLineItemResponse.order.customerId

```ts
customerId: string | null;
```

###### Example

```ts
cus_abc123
```

##### UpdateLineItemResponse.order.customerNotes

```ts
customerNotes: string | null;
```

###### Example

```ts
Please contact me before delivery
```

##### UpdateLineItemResponse.order.discountTotal

```ts
discountTotal: string;
```

###### Example

```ts
0.00
```

##### UpdateLineItemResponse.order.expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-01-15T10:45:00Z
```

##### UpdateLineItemResponse.order.feeTotal

```ts
feeTotal: string;
```

###### Example

```ts
2.50
```

##### UpdateLineItemResponse.order.id

```ts
id: string;
```

###### Example

```ts
ord_abc123xyz789
```

##### UpdateLineItemResponse.order.internalNotes

```ts
internalNotes: string | null;
```

###### Example

```ts
VIP customer
```

##### UpdateLineItemResponse.order.isGuestCheckout

```ts
isGuestCheckout: boolean;
```

###### Example

```ts
false
```

##### UpdateLineItemResponse.order.items?

```ts
optional items: {
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
```

###### Description

Order line items

##### UpdateLineItemResponse.order.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "promoCode": "SUMMER20"
             *     }
```

##### UpdateLineItemResponse.order.orderNumber

```ts
orderNumber: string;
```

###### Example

```ts
ORD-ABC123
```

##### UpdateLineItemResponse.order.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### UpdateLineItemResponse.order.status

```ts
status: 
  | "completed"
  | "cancelled"
  | "pending"
  | "failed"
  | "refunded"
  | "confirmed"
  | "processing"
  | "expired";
```

###### Example

```ts
pending
@enum {string}
```

##### UpdateLineItemResponse.order.subtotal

```ts
subtotal: string;
```

###### Example

```ts
50.00
```

##### UpdateLineItemResponse.order.taxTotal

```ts
taxTotal: string;
```

###### Example

```ts
10.00
```

##### UpdateLineItemResponse.order.total

```ts
total: string;
```

###### Example

```ts
62.50
```

##### UpdateLineItemResponse.order.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

#### UpdateOrderResponse

```ts
UpdateOrderResponse: {
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
};
```

##### UpdateOrderResponse.order

```ts
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
```

##### UpdateOrderResponse.order.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_xyz789
```

##### UpdateOrderResponse.order.cancellationReason

```ts
cancellationReason: string | null;
```

###### Example

```ts
null
```

##### UpdateOrderResponse.order.cancelledAt

```ts
cancelledAt: string | null;
```

###### Example

```ts
null
```

##### UpdateOrderResponse.order.channel

```ts
channel: string | null;
```

###### Example

```ts
web
```

##### UpdateOrderResponse.order.completedAt

```ts
completedAt: string | null;
```

###### Example

```ts
null
```

##### UpdateOrderResponse.order.confirmedAt

```ts
confirmedAt: string | null;
```

###### Example

```ts
null
```

##### UpdateOrderResponse.order.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### UpdateOrderResponse.order.currency

```ts
currency: string;
```

###### Example

```ts
GBP
```

##### UpdateOrderResponse.order.customerId

```ts
customerId: string | null;
```

###### Example

```ts
cus_abc123
```

##### UpdateOrderResponse.order.customerNotes

```ts
customerNotes: string | null;
```

###### Example

```ts
Please contact me before delivery
```

##### UpdateOrderResponse.order.discountTotal

```ts
discountTotal: string;
```

###### Example

```ts
0.00
```

##### UpdateOrderResponse.order.expiresAt

```ts
expiresAt: string | null;
```

###### Example

```ts
2024-01-15T10:45:00Z
```

##### UpdateOrderResponse.order.feeTotal

```ts
feeTotal: string;
```

###### Example

```ts
2.50
```

##### UpdateOrderResponse.order.id

```ts
id: string;
```

###### Example

```ts
ord_abc123xyz789
```

##### UpdateOrderResponse.order.internalNotes

```ts
internalNotes: string | null;
```

###### Example

```ts
VIP customer
```

##### UpdateOrderResponse.order.isGuestCheckout

```ts
isGuestCheckout: boolean;
```

###### Example

```ts
false
```

##### UpdateOrderResponse.order.items?

```ts
optional items: {
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
```

###### Description

Order line items

##### UpdateOrderResponse.order.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "promoCode": "SUMMER20"
             *     }
```

##### UpdateOrderResponse.order.orderNumber

```ts
orderNumber: string;
```

###### Example

```ts
ORD-ABC123
```

##### UpdateOrderResponse.order.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### UpdateOrderResponse.order.status

```ts
status: 
  | "completed"
  | "cancelled"
  | "pending"
  | "failed"
  | "refunded"
  | "confirmed"
  | "processing"
  | "expired";
```

###### Example

```ts
pending
@enum {string}
```

##### UpdateOrderResponse.order.subtotal

```ts
subtotal: string;
```

###### Example

```ts
50.00
```

##### UpdateOrderResponse.order.taxTotal

```ts
taxTotal: string;
```

###### Example

```ts
10.00
```

##### UpdateOrderResponse.order.total

```ts
total: string;
```

###### Example

```ts
62.50
```

##### UpdateOrderResponse.order.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
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

#### UpdatePaymentProviderResponse

```ts
UpdatePaymentProviderResponse: {
  provider: {
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
     type:   | "bank_transfer"
        | "cash"
        | "stripe_connect"
        | "stripe_direct"
        | "adyen"
        | "square"
        | "paypal";
     updatedAt: string;
  };
};
```

##### UpdatePaymentProviderResponse.provider

```ts
provider: {
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
  type:   | "bank_transfer"
     | "cash"
     | "stripe_connect"
     | "stripe_direct"
     | "adyen"
     | "square"
     | "paypal";
  updatedAt: string;
};
```

##### UpdatePaymentProviderResponse.provider.accountId

```ts
accountId: string | null;
```

###### Example

```ts
acc_xyz789
```

##### UpdatePaymentProviderResponse.provider.applicationFee

```ts
applicationFee: 
  | {
  type: "percentage" | "fixed";
  value: number;
}
  | null;
```

###### Type Declaration

```ts
{
  type: "percentage" | "fixed";
  value: number;
}
```

`null`

##### UpdatePaymentProviderResponse.provider.capabilities

```ts
capabilities: 
  | {
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
```

###### Type Declaration

```ts
{
  maxAmount?: number;
  minAmount?: number;
  requiresCustomerAction?: boolean;
  supportedCurrencies?: string[];
  supportsDelayedCapture?: boolean;
  supportsInstantCapture?: boolean;
  supportsPartialRefunds?: boolean;
  supportsRefunds?: boolean;
}
```

`null`

##### UpdatePaymentProviderResponse.provider.configuration

```ts
configuration: {
[key: string]: unknown;
};
```

###### Index Signature

```ts
[key: string]: unknown
```

###### Description

Provider-specific configuration (sensitive fields redacted)

###### Example

```ts
{
             *       "stripeConnectedAccountId": "acct_xxx"
             *     }
```

##### UpdatePaymentProviderResponse.provider.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### UpdatePaymentProviderResponse.provider.description

```ts
description: string | null;
```

###### Example

```ts
Primary payment processor for online orders
```

##### UpdatePaymentProviderResponse.provider.feeStructure

```ts
feeStructure: 
  | {
  currency?: string;
  fixed?: number;
  percentage?: number;
  type: "percentage" | "fixed" | "percentage_plus_fixed";
}
  | null;
```

###### Type Declaration

```ts
{
  currency?: string;
  fixed?: number;
  percentage?: number;
  type: "percentage" | "fixed" | "percentage_plus_fixed";
}
```

`null`

##### UpdatePaymentProviderResponse.provider.id

```ts
id: string;
```

###### Example

```ts
pp_stripeXxx123
```

##### UpdatePaymentProviderResponse.provider.integrationServiceUrl

```ts
integrationServiceUrl: string | null;
```

###### Example

```ts
https://stripe.paymentintegration.ticketlayer.com
```

##### UpdatePaymentProviderResponse.provider.integrationServiceVersion

```ts
integrationServiceVersion: string;
```

###### Example

```ts
v1
```

##### UpdatePaymentProviderResponse.provider.isDefault

```ts
isDefault: boolean;
```

###### Example

```ts
true
```

##### UpdatePaymentProviderResponse.provider.metadata

```ts
metadata: 
  | {
[key: string]: unknown;
}
  | null;
```

###### Example

```ts
{
             *       "environment": "production"
             *     }
```

##### UpdatePaymentProviderResponse.provider.name

```ts
name: string;
```

###### Example

```ts
Main Stripe Account
```

##### UpdatePaymentProviderResponse.provider.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### UpdatePaymentProviderResponse.provider.priority

```ts
priority: number;
```

###### Example

```ts
100
```

##### UpdatePaymentProviderResponse.provider.status

```ts
status: "active" | "inactive" | "pending_setup";
```

###### Example

```ts
active
@enum {string}
```

##### UpdatePaymentProviderResponse.provider.supportedPaymentTypes

```ts
supportedPaymentTypes: (
  | "bank_transfer"
  | "online_card"
  | "online_bank_transfer"
  | "online_wallet"
  | "in_person_card"
  | "in_person_cash"
  | "cheque")[];
```

###### Example

```ts
[
      "online_card",
      "online_wallet"
    ]
```

##### UpdatePaymentProviderResponse.provider.type

```ts
type: 
  | "bank_transfer"
  | "cash"
  | "stripe_connect"
  | "stripe_direct"
  | "adyen"
  | "square"
  | "paypal";
```

###### Example

```ts
stripe_connect
@enum {string}
```

##### UpdatePaymentProviderResponse.provider.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
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

#### ValidateOrderResponse

```ts
ValidateOrderResponse: {
  errors: {
     code: string;
     itemId?: string;
     message: string;
  }[];
  valid: boolean;
};
```

##### ValidateOrderResponse.errors

```ts
errors: {
  code: string;
  itemId?: string;
  message: string;
}[];
```

###### Description

Validation errors if any

##### ValidateOrderResponse.valid

```ts
valid: boolean;
```

###### Example

```ts
true
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
