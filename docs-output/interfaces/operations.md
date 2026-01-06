[**@ticketlayer/backstage-sdk**](../README.md)

***

[@ticketlayer/backstage-sdk](../README.md) / operations

# Interface: operations

Defined in: generated/types.ts:2151

## Properties

### addAreaToVenueLayout

```ts
addAreaToVenueLayout: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
        layoutId: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
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
           seats?: unknown[];
           status?: "active" | "inactive";
           type: "unallocated" | "allocated";
        };
     };
  };
  responses: {
     201: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:7136

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
     layoutId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
  layoutId: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.path.layoutId

```ts
layoutId: string;
```

###### Description

Layout ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
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
        seats?: unknown[];
        status?: "active" | "inactive";
        type: "unallocated" | "allocated";
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
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
     seats?: unknown[];
     status?: "active" | "inactive";
     type: "unallocated" | "allocated";
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
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
  seats?: unknown[];
  status?: "active" | "inactive";
  type: "unallocated" | "allocated";
};
```

##### requestBody.content.application/json.capacity

```ts
capacity: number;
```

###### Description

Total capacity for this area

###### Example

```ts
500
```

##### requestBody.content.application/json.categoryId?

```ts
optional categoryId: string;
```

###### Description

Category ID for pricing (especially for GA areas)

###### Example

```ts
vlc_abc123
```

##### requestBody.content.application/json.color?

```ts
optional color: string;
```

###### Description

Hex color for visual distinction

###### Example

```ts
#FFD700
```

##### requestBody.content.application/json.description?

```ts
optional description: string;
```

###### Description

Area description

###### Example

```ts
General admission standing area
```

##### requestBody.content.application/json.displayOrder?

```ts
optional displayOrder: number;
```

###### Description

Display order in UI (auto-assigned if not provided)

###### Example

```ts
1
```

##### requestBody.content.application/json.name

```ts
name: string;
```

###### Description

Area name

###### Example

```ts
Main Floor
```

##### requestBody.content.application/json.position?

```ts
optional position: {
  height: number;
  width: number;
  x: number;
  y: number;
};
```

###### Description

Visual positioning for GA areas on seating map

###### Example

```ts
{
                     *       "x": 100,
                     *       "y": 100,
                     *       "width": 200,
                     *       "height": 150
                     *     }
```

##### requestBody.content.application/json.position.height

```ts
height: number;
```

##### requestBody.content.application/json.position.width

```ts
width: number;
```

##### requestBody.content.application/json.position.x

```ts
x: number;
```

##### requestBody.content.application/json.position.y

```ts
y: number;
```

##### requestBody.content.application/json.seats?

```ts
optional seats: unknown[];
```

###### Description

Seats array (only for allocated seating areas, leave empty for GA)

##### requestBody.content.application/json.status?

```ts
optional status: "active" | "inactive";
```

###### Description

Area status

###### Default

```ts
active
```

###### Example

```ts
active
@enum {string}
```

##### requestBody.content.application/json.type

```ts
type: "unallocated" | "allocated";
```

###### Description

Area type (unallocated for GA, allocated for assigned seating)

###### Example

```ts
unallocated
@enum {string}
```

#### responses

```ts
responses: {
  201: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.201

```ts
201: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Area added successfully

##### responses.201.content

```ts
content: {
  application/json: {
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
};
```

##### responses.201.content.application/json

```ts
application/json: {
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

##### responses.201.content.application/json.area

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

##### responses.201.content.application/json.area.capacity

```ts
capacity: number;
```

###### Example

```ts
500
```

##### responses.201.content.application/json.area.color?

```ts
optional color: string;
```

###### Example

```ts
#FFD700
```

##### responses.201.content.application/json.area.description?

```ts
optional description: string;
```

###### Example

```ts
General admission area
```

##### responses.201.content.application/json.area.displayOrder

```ts
displayOrder: number;
```

###### Example

```ts
1
```

##### responses.201.content.application/json.area.id

```ts
id: string;
```

###### Example

```ts
vla_abc123
```

##### responses.201.content.application/json.area.name

```ts
name: string;
```

###### Example

```ts
Main Floor
```

##### responses.201.content.application/json.area.seats?

```ts
optional seats: unknown[];
```

###### Example

```ts
[]
```

##### responses.201.content.application/json.area.status

```ts
status: "active" | "inactive";
```

###### Example

```ts
active
@enum {string}
```

##### responses.201.content.application/json.area.type

```ts
type: "unallocated" | "allocated";
```

###### Example

```ts
unallocated
@enum {string}
```

##### responses.201.content.application/json.venueLayout?

```ts
optional venueLayout: unknown;
```

##### responses.201.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### addCategoryToVenueLayout

```ts
addCategoryToVenueLayout: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
        layoutId: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           color?: string;
           description?: string;
           displayOrder?: number;
           name: string;
        };
     };
  };
  responses: {
     201: {
        content: {
           application/json: {
              category: {
                 color?: string;
                 description?: string;
                 displayOrder: number;
                 id: string;
                 name: string;
              };
              venueLayout?: unknown;
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:7449

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
     layoutId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
  layoutId: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.path.layoutId

```ts
layoutId: string;
```

###### Description

Layout ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        color?: string;
        description?: string;
        displayOrder?: number;
        name: string;
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     color?: string;
     description?: string;
     displayOrder?: number;
     name: string;
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  color?: string;
  description?: string;
  displayOrder?: number;
  name: string;
};
```

##### requestBody.content.application/json.color?

```ts
optional color: string;
```

###### Description

Hex color for visual distinction

###### Example

```ts
#FFD700
```

##### requestBody.content.application/json.description?

```ts
optional description: string;
```

###### Description

Category description

###### Example

```ts
Best seats in the house with excellent sightlines
```

##### requestBody.content.application/json.displayOrder?

```ts
optional displayOrder: number;
```

###### Description

Display order in UI (auto-assigned if not provided)

###### Example

```ts
1
```

##### requestBody.content.application/json.name

```ts
name: string;
```

###### Description

Category name (e.g., Premium, Standard, VIP)

###### Example

```ts
Premium
```

#### responses

```ts
responses: {
  201: {
     content: {
        application/json: {
           category: {
              color?: string;
              description?: string;
              displayOrder: number;
              id: string;
              name: string;
           };
           venueLayout?: unknown;
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.201

```ts
201: {
  content: {
     application/json: {
        category: {
           color?: string;
           description?: string;
           displayOrder: number;
           id: string;
           name: string;
        };
        venueLayout?: unknown;
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Category added successfully

##### responses.201.content

```ts
content: {
  application/json: {
     category: {
        color?: string;
        description?: string;
        displayOrder: number;
        id: string;
        name: string;
     };
     venueLayout?: unknown;
  };
};
```

##### responses.201.content.application/json

```ts
application/json: {
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

##### responses.201.content.application/json.category

```ts
category: {
  color?: string;
  description?: string;
  displayOrder: number;
  id: string;
  name: string;
};
```

##### responses.201.content.application/json.category.color?

```ts
optional color: string;
```

###### Example

```ts
#FFD700
```

##### responses.201.content.application/json.category.description?

```ts
optional description: string;
```

###### Example

```ts
Best seats in the house
```

##### responses.201.content.application/json.category.displayOrder

```ts
displayOrder: number;
```

###### Example

```ts
1
```

##### responses.201.content.application/json.category.id

```ts
id: string;
```

###### Example

```ts
vlc_abc123
```

##### responses.201.content.application/json.category.name

```ts
name: string;
```

###### Example

```ts
Premium
```

##### responses.201.content.application/json.venueLayout?

```ts
optional venueLayout: unknown;
```

##### responses.201.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### addSeatToArea

```ts
addSeatToArea: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        areaId: string;
        id: string;
        layoutId: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           attributes?: (
              | "accessible"
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
             | "center")[];
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
        };
     };
  };
  responses: {
     201: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:7683

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     areaId: string;
     id: string;
     layoutId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  areaId: string;
  id: string;
  layoutId: string;
};
```

##### parameters.path.areaId

```ts
areaId: string;
```

###### Description

Area ID

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.path.layoutId

```ts
layoutId: string;
```

###### Description

Layout ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        attributes?: (
           | "accessible"
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
          | "center")[];
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
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     attributes?: (
        | "accessible"
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
       | "center")[];
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
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  attributes?: (
     | "accessible"
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
    | "center")[];
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
};
```

##### requestBody.content.application/json.attributes?

```ts
optional attributes: (
  | "accessible"
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
  | "center")[];
```

###### Description

Seat attributes

###### Example

```ts
[
      "aisle_right",
      "excellent_view"
    ]
```

##### requestBody.content.application/json.categoryId?

```ts
optional categoryId: string;
```

###### Description

Category ID for pricing

###### Example

```ts
vlc_premium
```

##### requestBody.content.application/json.companionSeats?

```ts
optional companionSeats: string[];
```

###### Description

IDs of companion seats (for wheelchair spaces)

###### Example

```ts
[
      "vlas_h9",
      "vlas_h10"
    ]
```

##### requestBody.content.application/json.companionTo?

```ts
optional companionTo: string;
```

###### Description

ID of wheelchair space this is companion to

###### Example

```ts
vlas_h8
```

##### requestBody.content.application/json.holdType?

```ts
optional holdType: string;
```

###### Description

Hold type if status is held

###### Example

```ts
promoter
```

##### requestBody.content.application/json.internalNotes?

```ts
optional internalNotes: string;
```

###### Description

Internal notes

###### Example

```ts
Next to sound booth
```

##### requestBody.content.application/json.label?

```ts
optional label: string;
```

###### Description

Display label (auto-generated if not provided)

###### Example

```ts
Orchestra Center, Row A, Seat 15
```

##### requestBody.content.application/json.number

```ts
number: string;
```

###### Description

Seat number

###### Example

```ts
15
```

##### requestBody.content.application/json.position?

```ts
optional position: {
  rotation?: number;
  x: number;
  y: number;
};
```

##### requestBody.content.application/json.position.rotation?

```ts
optional rotation: number;
```

###### Description

0-359 degrees

###### Example

```ts
0
```

##### requestBody.content.application/json.position.x

```ts
x: number;
```

###### Description

X coordinate on map

###### Example

```ts
100.5
```

##### requestBody.content.application/json.position.y

```ts
y: number;
```

###### Description

Y coordinate on map

###### Example

```ts
200.5
```

##### requestBody.content.application/json.publicNotes?

```ts
optional publicNotes: string;
```

###### Description

Public notes shown to customers

###### Example

```ts
Best view of stage
```

##### requestBody.content.application/json.row

```ts
row: string;
```

###### Description

Row identifier

###### Example

```ts
A
```

##### requestBody.content.application/json.section?

```ts
optional section: string;
```

###### Description

Section identifier

###### Example

```ts
Orchestra Center
```

##### requestBody.content.application/json.status?

```ts
optional status: "available" | "blocked" | "accessible" | "held" | "removed";
```

###### Description

Seat status

###### Example

```ts
available
@enum {string}
```

#### responses

```ts
responses: {
  201: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.201

```ts
201: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Seat added successfully

##### responses.201.content

```ts
content: {
  application/json: {
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
};
```

##### responses.201.content.application/json

```ts
application/json: {
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

##### responses.201.content.application/json.seat

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

##### responses.201.content.application/json.seat.attributes?

```ts
optional attributes: string[];
```

##### responses.201.content.application/json.seat.categoryId?

```ts
optional categoryId: string;
```

###### Example

```ts
vlc_premium
```

##### responses.201.content.application/json.seat.companionSeats?

```ts
optional companionSeats: string[];
```

##### responses.201.content.application/json.seat.companionTo?

```ts
optional companionTo: string;
```

##### responses.201.content.application/json.seat.holdType?

```ts
optional holdType: string;
```

##### responses.201.content.application/json.seat.id

```ts
id: string;
```

###### Example

```ts
vlas_abc123
```

##### responses.201.content.application/json.seat.internalNotes?

```ts
optional internalNotes: string;
```

##### responses.201.content.application/json.seat.label

```ts
label: string;
```

###### Example

```ts
Orchestra Center, Row A, Seat 15
```

##### responses.201.content.application/json.seat.number

```ts
number: string;
```

###### Example

```ts
15
```

##### responses.201.content.application/json.seat.position?

```ts
optional position: {
  rotation?: number;
  x: number;
  y: number;
};
```

##### responses.201.content.application/json.seat.position.rotation?

```ts
optional rotation: number;
```

##### responses.201.content.application/json.seat.position.x

```ts
x: number;
```

##### responses.201.content.application/json.seat.position.y

```ts
y: number;
```

##### responses.201.content.application/json.seat.publicNotes?

```ts
optional publicNotes: string;
```

##### responses.201.content.application/json.seat.row

```ts
row: string;
```

###### Example

```ts
A
```

##### responses.201.content.application/json.seat.section?

```ts
optional section: string;
```

###### Example

```ts
Orchestra Center
```

##### responses.201.content.application/json.seat.status

```ts
status: "available" | "blocked" | "accessible" | "held" | "removed";
```

###### Example

```ts
available
@enum {string}
```

##### responses.201.content.application/json.venueLayout?

```ts
optional venueLayout: unknown;
```

##### responses.201.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### assignRole

```ts
assignRole: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           accountId: string;
           roleId: string;
           userId: string;
        };
     };
  };
  responses: {
     201: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:3924

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        accountId: string;
        roleId: string;
        userId: string;
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     accountId: string;
     roleId: string;
     userId: string;
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  accountId: string;
  roleId: string;
  userId: string;
};
```

##### requestBody.content.application/json.accountId

```ts
accountId: string;
```

###### Description

Account ID

###### Example

```ts
acc_abc123
```

##### requestBody.content.application/json.roleId

```ts
roleId: string;
```

###### Description

Role ID (can be a system role or custom role)

###### Example

```ts
rol_system_event_manager
```

##### requestBody.content.application/json.userId

```ts
userId: string;
```

###### Description

User ID

###### Example

```ts
usr_abc123
```

#### responses

```ts
responses: {
  201: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.201

```ts
201: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Role assigned successfully

##### responses.201.content

```ts
content: {
  application/json: {
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
};
```

##### responses.201.content.application/json

```ts
application/json: {
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

##### responses.201.content.application/json.assignment

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

##### responses.201.content.application/json.assignment.account?

```ts
optional account: {
  id: string;
  name: string;
};
```

###### Description

Account details

##### responses.201.content.application/json.assignment.account.id

```ts
id: string;
```

##### responses.201.content.application/json.assignment.account.name

```ts
name: string;
```

##### responses.201.content.application/json.assignment.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_xyz789
```

##### responses.201.content.application/json.assignment.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### responses.201.content.application/json.assignment.id

```ts
id: string;
```

###### Example

```ts
uar_abc123
```

##### responses.201.content.application/json.assignment.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.201.content.application/json.assignment.role?

```ts
optional role: {
  id: string;
  isSystemRole: boolean;
  name: string;
};
```

###### Description

Role details

##### responses.201.content.application/json.assignment.role.id

```ts
id: string;
```

##### responses.201.content.application/json.assignment.role.isSystemRole

```ts
isSystemRole: boolean;
```

##### responses.201.content.application/json.assignment.role.name

```ts
name: string;
```

##### responses.201.content.application/json.assignment.roleId

```ts
roleId: string;
```

###### Example

```ts
rol_system_event_manager
```

##### responses.201.content.application/json.assignment.user?

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

##### responses.201.content.application/json.assignment.user.email

```ts
email: string;
```

##### responses.201.content.application/json.assignment.user.firstName

```ts
firstName: string | null;
```

##### responses.201.content.application/json.assignment.user.id

```ts
id: string;
```

##### responses.201.content.application/json.assignment.user.lastName

```ts
lastName: string | null;
```

##### responses.201.content.application/json.assignment.userId

```ts
userId: string;
```

###### Example

```ts
usr_abc123
```

##### responses.201.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### bulkAddSeatsToArea

```ts
bulkAddSeatsToArea: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        areaId: string;
        id: string;
        layoutId: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           seats: {
              attributes?: (
                 | "accessible"
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
                | "center")[];
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
           }[];
        };
     };
  };
  responses: {
     201: {
        content: {
           application/json: {
              seatsAdded: number;
              venueLayout?: unknown;
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:7834

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     areaId: string;
     id: string;
     layoutId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  areaId: string;
  id: string;
  layoutId: string;
};
```

##### parameters.path.areaId

```ts
areaId: string;
```

###### Description

Area ID

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.path.layoutId

```ts
layoutId: string;
```

###### Description

Layout ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        seats: {
           attributes?: (
              | "accessible"
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
             | "center")[];
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
        }[];
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     seats: {
        attributes?: (
           | "accessible"
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
          | "center")[];
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
     }[];
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  seats: {
     attributes?: (
        | "accessible"
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
       | "center")[];
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
  }[];
};
```

##### requestBody.content.application/json.seats

```ts
seats: {
  attributes?: (
     | "accessible"
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
    | "center")[];
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
}[];
```

###### Description

Array of seats to add

#### responses

```ts
responses: {
  201: {
     content: {
        application/json: {
           seatsAdded: number;
           venueLayout?: unknown;
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.201

```ts
201: {
  content: {
     application/json: {
        seatsAdded: number;
        venueLayout?: unknown;
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Seats added successfully

##### responses.201.content

```ts
content: {
  application/json: {
     seatsAdded: number;
     venueLayout?: unknown;
  };
};
```

##### responses.201.content.application/json

```ts
application/json: {
  seatsAdded: number;
  venueLayout?: unknown;
};
```

##### responses.201.content.application/json.seatsAdded

```ts
seatsAdded: number;
```

###### Example

```ts
50
```

##### responses.201.content.application/json.venueLayout?

```ts
optional venueLayout: unknown;
```

##### responses.201.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### cancelUserInvitation

```ts
cancelUserInvitation: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
              id: string;
              success: boolean;
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:3404

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           id: string;
           success: boolean;
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        id: string;
        success: boolean;
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Invitation cancelled successfully

##### responses.200.content

```ts
content: {
  application/json: {
     id: string;
     success: boolean;
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
  id: string;
  success: boolean;
};
```

##### responses.200.content.application/json.id

```ts
id: string;
```

###### Example

```ts
inv_abc123
```

##### responses.200.content.application/json.success

```ts
success: boolean;
```

###### Example

```ts
true
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### createAccount

```ts
createAccount: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           name: string;
           status?: "active" | "inactive";
        };
     };
  };
  responses: {
     201: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:2793

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        name: string;
        status?: "active" | "inactive";
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     name: string;
     status?: "active" | "inactive";
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  name: string;
  status?: "active" | "inactive";
};
```

##### requestBody.content.application/json.name

```ts
name: string;
```

###### Description

Account name

###### Example

```ts
Main Account
```

##### requestBody.content.application/json.status?

```ts
optional status: "active" | "inactive";
```

###### Description

Account status

###### Default

```ts
active
```

###### Example

```ts
active
@enum {string}
```

#### responses

```ts
responses: {
  201: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.201

```ts
201: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Account created successfully

##### responses.201.content

```ts
content: {
  application/json: {
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
};
```

##### responses.201.content.application/json

```ts
application/json: {
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

##### responses.201.content.application/json.account

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

##### responses.201.content.application/json.account.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### responses.201.content.application/json.account.id

```ts
id: string;
```

###### Example

```ts
acc_abc123
```

##### responses.201.content.application/json.account.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.201.content.application/json.account.name

```ts
name: string;
```

###### Example

```ts
Main Account
```

##### responses.201.content.application/json.account.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.201.content.application/json.account.status

```ts
status: "active" | "inactive";
```

###### Example

```ts
active
@enum {string}
```

##### responses.201.content.application/json.account.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

##### responses.201.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### createEvent

```ts
createEvent: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           accountId: string;
           description?: string;
           layout?: {
              areas?: {
                 capacity: number;
                 categoryId?: ... | ...;
                 description?: ... | ...;
                 displayOrder?: ... | ...;
                 id?: ... | ...;
                 name: string;
                 type: ... | ...;
              }[];
              categories?: {
                 color?: ... | ...;
                 description?: ... | ...;
                 displayOrder?: ... | ...;
                 id?: ... | ...;
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
           venueId?: string | null;
           venueName?: string | null;
        };
     };
  };
  responses: {
     201: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:4227

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        accountId: string;
        description?: string;
        layout?: {
           areas?: {
              capacity: number;
              categoryId?: ... | ...;
              description?: ... | ...;
              displayOrder?: ... | ...;
              id?: ... | ...;
              name: string;
              type: ... | ...;
           }[];
           categories?: {
              color?: ... | ...;
              description?: ... | ...;
              displayOrder?: ... | ...;
              id?: ... | ...;
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
        venueId?: string | null;
        venueName?: string | null;
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     accountId: string;
     description?: string;
     layout?: {
        areas?: {
           capacity: number;
           categoryId?: ... | ...;
           description?: ... | ...;
           displayOrder?: ... | ...;
           id?: ... | ...;
           name: string;
           type: ... | ...;
        }[];
        categories?: {
           color?: ... | ...;
           description?: ... | ...;
           displayOrder?: ... | ...;
           id?: ... | ...;
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
     venueId?: string | null;
     venueName?: string | null;
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  accountId: string;
  description?: string;
  layout?: {
     areas?: {
        capacity: number;
        categoryId?: ... | ...;
        description?: ... | ...;
        displayOrder?: ... | ...;
        id?: ... | ...;
        name: string;
        type: ... | ...;
     }[];
     categories?: {
        color?: ... | ...;
        description?: ... | ...;
        displayOrder?: ... | ...;
        id?: ... | ...;
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
  venueId?: string | null;
  venueName?: string | null;
};
```

##### requestBody.content.application/json.accountId

```ts
accountId: string;
```

###### Description

Account ID that owns this event

###### Example

```ts
acc_xyz789
```

##### requestBody.content.application/json.description?

```ts
optional description: string;
```

###### Description

Event description

###### Example

```ts
A three-day music festival featuring top artists
```

##### requestBody.content.application/json.layout?

```ts
optional layout: {
  areas?: {
     capacity: number;
     categoryId?: ... | ...;
     description?: ... | ...;
     displayOrder?: ... | ...;
     id?: ... | ...;
     name: string;
     type: ... | ...;
  }[];
  categories?: {
     color?: ... | ...;
     description?: ... | ...;
     displayOrder?: ... | ...;
     id?: ... | ...;
     name: string;
  }[];
  venueLayoutTemplateId?: string;
};
```

###### Description

Event layout with categories and capacity areas

##### requestBody.content.application/json.layout.areas?

```ts
optional areas: {
  capacity: number;
  categoryId?: ... | ...;
  description?: ... | ...;
  displayOrder?: ... | ...;
  id?: ... | ...;
  name: string;
  type: ... | ...;
}[];
```

###### Description

Capacity areas (GA and/or allocated)

###### Default

```ts
[]
```

##### requestBody.content.application/json.layout.categories?

```ts
optional categories: {
  color?: ... | ...;
  description?: ... | ...;
  displayOrder?: ... | ...;
  id?: ... | ...;
  name: string;
}[];
```

###### Description

Pricing categories for this event

###### Default

```ts
[]
```

##### requestBody.content.application/json.layout.venueLayoutTemplateId?

```ts
optional venueLayoutTemplateId: string;
```

###### Description

Source venue layout template ID (if imported)

###### Example

```ts
vlt_abc123
```

##### requestBody.content.application/json.name

```ts
name: string;
```

###### Description

Event name

###### Example

```ts
Summer Music Festival
```

##### requestBody.content.application/json.offSaleDate?

```ts
optional offSaleDate: string;
```

Format: date-time

###### Description

When sales close

###### Example

```ts
2025-06-15T23:59:59Z
```

##### requestBody.content.application/json.onSaleDate?

```ts
optional onSaleDate: string;
```

Format: date-time

###### Description

When tickets go on sale

###### Example

```ts
2025-06-01T09:00:00Z
```

##### requestBody.content.application/json.status?

```ts
optional status: 
  | "draft"
  | "published"
  | "on_sale"
  | "sold_out"
  | "completed"
  | "cancelled";
```

###### Description

Event status

###### Default

```ts
draft
```

###### Example

```ts
draft
@enum {string}
```

##### requestBody.content.application/json.tags?

```ts
optional tags: string[];
```

###### Description

Event tags

###### Default

```ts
[]
```

###### Example

```ts
[
      "music",
      "festival",
      "outdoor"
    ]
```

##### requestBody.content.application/json.ticketTypes?

```ts
optional ticketTypes: {
  description?: string;
  displayOrder: number;
  id?: string;
  name: string;
}[];
```

###### Description

Ticket types for this event (e.g., Adult, Child)

###### Default

```ts
[]
```

##### requestBody.content.application/json.timezone?

```ts
optional timezone: string;
```

###### Description

Event timezone

###### Default

```ts
UTC
```

###### Example

```ts
Europe/London
```

##### requestBody.content.application/json.venueId?

```ts
optional venueId: string | null;
```

###### Description

Venue ID (link to formal venue)

###### Example

```ts
vnu_def456
```

##### requestBody.content.application/json.venueName?

```ts
optional venueName: string | null;
```

###### Description

Venue name (text-only, alternative to venueId)

###### Example

```ts
Wembley Stadium
```

#### responses

```ts
responses: {
  201: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.201

```ts
201: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Event created successfully

##### responses.201.content

```ts
content: {
  application/json: {
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
};
```

##### responses.201.content.application/json

```ts
application/json: {
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

##### responses.201.content.application/json.event

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

##### responses.201.content.application/json.event.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### responses.201.content.application/json.event.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### responses.201.content.application/json.event.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### responses.201.content.application/json.event.description?

```ts
optional description: string;
```

###### Example

```ts
A three-day music festival
```

##### responses.201.content.application/json.event.id

```ts
id: string;
```

###### Example

```ts
evt_abc123
```

##### responses.201.content.application/json.event.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.201.content.application/json.event.name

```ts
name: string;
```

###### Example

```ts
Summer Music Festival
```

##### responses.201.content.application/json.event.occurrenceCount

```ts
occurrenceCount: number;
```

###### Example

```ts
3
```

##### responses.201.content.application/json.event.offSaleDate?

```ts
optional offSaleDate: string;
```

###### Example

```ts
2025-06-15T23:59:59Z
```

##### responses.201.content.application/json.event.onSaleDate?

```ts
optional onSaleDate: string;
```

###### Example

```ts
2025-06-01T09:00:00Z
```

##### responses.201.content.application/json.event.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.201.content.application/json.event.productCount

```ts
productCount: number;
```

###### Example

```ts
0
```

##### responses.201.content.application/json.event.status

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

##### responses.201.content.application/json.event.tags

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

##### responses.201.content.application/json.event.ticketCount

```ts
ticketCount: number;
```

###### Example

```ts
0
```

##### responses.201.content.application/json.event.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### responses.201.content.application/json.event.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### responses.201.content.application/json.event.venueId?

```ts
optional venueId: string;
```

###### Example

```ts
vnu_ghi789
```

##### responses.201.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### createEventOccurrence

```ts
createEventOccurrence: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        eventId: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
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
        };
     };
  };
  responses: {
     201: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:4866

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     eventId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  eventId: string;
};
```

##### parameters.path.eventId

```ts
eventId: string;
```

###### Description

Event ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
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
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
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
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
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
};
```

##### requestBody.content.application/json.categoryMapping?

```ts
optional categoryMapping: {
  enabled?: boolean;
  ticketCategoryId: string;
  venueLayoutCategoryId: string;
}[];
```

###### Description

Category mapping for template mode ticket schemes

##### requestBody.content.application/json.endDate

```ts
endDate: string;
```

Format: date-time

###### Description

End date (ISO date)

###### Example

```ts
2025-06-15T00:00:00Z
```

##### requestBody.content.application/json.endTime

```ts
endTime: string;
```

###### Description

End time (HH:mm:ss)

###### Example

```ts
23:00:00
```

##### requestBody.content.application/json.priceSchemeId?

```ts
optional priceSchemeId: string;
```

###### Description

Price scheme to use (must belong to the ticket scheme)

###### Example

```ts
tps_def456
```

##### requestBody.content.application/json.startDate

```ts
startDate: string;
```

Format: date-time

###### Description

Start date (ISO date)

###### Example

```ts
2025-06-15T00:00:00Z
```

##### requestBody.content.application/json.startTime

```ts
startTime: string;
```

###### Description

Start time (HH:mm:ss)

###### Example

```ts
19:00:00
```

##### requestBody.content.application/json.status

```ts
status: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
```

###### Description

Occurrence status

###### Example

```ts
draft
@enum {string}
```

##### requestBody.content.application/json.ticketSchemeId?

```ts
optional ticketSchemeId: string;
```

###### Description

Ticket scheme to use for this occurrence

###### Example

```ts
tsc_abc123
```

##### requestBody.content.application/json.timezone?

```ts
optional timezone: string;
```

###### Description

Occurrence timezone (can override event timezone)

###### Default

```ts
UTC
```

###### Example

```ts
Europe/London
```

##### requestBody.content.application/json.venueId?

```ts
optional venueId: string;
```

###### Description

Venue ID (can override event venue)

###### Example

```ts
vnu_ghi789
```

##### requestBody.content.application/json.venueLayoutId?

```ts
optional venueLayoutId: string;
```

###### Description

Venue layout ID

###### Example

```ts
vnl_jkl012
```

#### responses

```ts
responses: {
  201: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.201

```ts
201: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Event occurrence created successfully

##### responses.201.content

```ts
content: {
  application/json: {
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
};
```

##### responses.201.content.application/json

```ts
application/json: {
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

##### responses.201.content.application/json.eventOccurrence

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

##### responses.201.content.application/json.eventOccurrence.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### responses.201.content.application/json.eventOccurrence.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### responses.201.content.application/json.eventOccurrence.endDate

```ts
endDate: string;
```

###### Example

```ts
2025-06-15T00:00:00Z
```

##### responses.201.content.application/json.eventOccurrence.endTime

```ts
endTime: string;
```

###### Example

```ts
23:00:00
```

##### responses.201.content.application/json.eventOccurrence.eventId

```ts
eventId: string;
```

###### Example

```ts
evt_ghi789
```

##### responses.201.content.application/json.eventOccurrence.id

```ts
id: string;
```

###### Example

```ts
eoc_abc123
```

##### responses.201.content.application/json.eventOccurrence.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.201.content.application/json.eventOccurrence.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.201.content.application/json.eventOccurrence.startDate

```ts
startDate: string;
```

###### Example

```ts
2025-06-15T00:00:00Z
```

##### responses.201.content.application/json.eventOccurrence.startTime

```ts
startTime: string;
```

###### Example

```ts
19:00:00
```

##### responses.201.content.application/json.eventOccurrence.status

```ts
status: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
```

###### Example

```ts
draft
@enum {string}
```

##### responses.201.content.application/json.eventOccurrence.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### responses.201.content.application/json.eventOccurrence.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### responses.201.content.application/json.eventOccurrence.venueId?

```ts
optional venueId: string;
```

###### Example

```ts
vnu_abc123
```

##### responses.201.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### createEventPriceScheme

```ts
createEventPriceScheme: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        eventId: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
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
        };
     };
  };
  responses: {
     201: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:5317

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     eventId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  eventId: string;
};
```

##### parameters.path.eventId

```ts
eventId: string;
```

###### Description

Event ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
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
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
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
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
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
};
```

##### requestBody.content.application/json.description?

```ts
optional description: string;
```

###### Description

Price scheme description

###### Example

```ts
Default pricing for all shows
```

##### requestBody.content.application/json.name

```ts
name: string;
```

###### Description

Price scheme name

###### Example

```ts
Standard Pricing
```

##### requestBody.content.application/json.parentPriceSchemeId?

```ts
optional parentPriceSchemeId: string;
```

###### Description

Parent price scheme to inherit from

###### Example

```ts
tps_parent123
```

##### requestBody.content.application/json.status?

```ts
optional status: "active" | "draft" | "archived";
```

###### Description

Price scheme status

###### Example

```ts
draft
@enum {string}
```

##### requestBody.content.application/json.ticketPrices?

```ts
optional ticketPrices: {
  categoryId: string;
  currency?: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
  price: number;
  typeId: string;
}[];
```

###### Description

Price matrix entries

###### Default

```ts
[]
```

#### responses

```ts
responses: {
  201: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.201

```ts
201: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Price scheme created successfully

##### responses.201.content

```ts
content: {
  application/json: {
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
};
```

##### responses.201.content.application/json

```ts
application/json: {
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

##### responses.201.content.application/json.priceScheme

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

##### responses.201.content.application/json.priceScheme.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### responses.201.content.application/json.priceScheme.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### responses.201.content.application/json.priceScheme.description?

```ts
optional description: string;
```

###### Example

```ts
Default pricing for all shows
```

##### responses.201.content.application/json.priceScheme.eventId

```ts
eventId: string;
```

###### Example

```ts
evt_ghi789
```

##### responses.201.content.application/json.priceScheme.id

```ts
id: string;
```

###### Example

```ts
tps_abc123
```

##### responses.201.content.application/json.priceScheme.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.201.content.application/json.priceScheme.name

```ts
name: string;
```

###### Example

```ts
Standard Pricing
```

##### responses.201.content.application/json.priceScheme.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.201.content.application/json.priceScheme.parentPriceSchemeId?

```ts
optional parentPriceSchemeId: string;
```

###### Example

```ts
tps_parent123
```

##### responses.201.content.application/json.priceScheme.status

```ts
status: "active" | "draft" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### responses.201.content.application/json.priceScheme.ticketPrices

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

##### responses.201.content.application/json.priceScheme.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### responses.201.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### createRole

```ts
createRole: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           description?: string;
           name: string;
           permissions: string[];
        };
     };
  };
  responses: {
     201: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:3573

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        description?: string;
        name: string;
        permissions: string[];
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     description?: string;
     name: string;
     permissions: string[];
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  description?: string;
  name: string;
  permissions: string[];
};
```

##### requestBody.content.application/json.description?

```ts
optional description: string;
```

###### Description

Optional description of the role

###### Example

```ts
Manages events and related resources
```

##### requestBody.content.application/json.name

```ts
name: string;
```

###### Description

The name of the role

###### Example

```ts
Event Manager
```

##### requestBody.content.application/json.permissions

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

#### responses

```ts
responses: {
  201: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.201

```ts
201: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Role created successfully

##### responses.201.content

```ts
content: {
  application/json: {
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
};
```

##### responses.201.content.application/json

```ts
application/json: {
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

##### responses.201.content.application/json.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### responses.201.content.application/json.description

```ts
description: string | null;
```

###### Example

```ts
Manages events and related resources
```

##### responses.201.content.application/json.id

```ts
id: string;
```

###### Example

```ts
rol_abc123
```

##### responses.201.content.application/json.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.201.content.application/json.isSystemRole

```ts
isSystemRole: boolean;
```

###### Description

Whether this is a system-defined role (cannot be modified or deleted)

###### Example

```ts
false
```

##### responses.201.content.application/json.name

```ts
name: string;
```

###### Example

```ts
Event Manager
```

##### responses.201.content.application/json.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.201.content.application/json.permissions

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

##### responses.201.content.application/json.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

##### responses.201.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### createUserInvitation

```ts
createUserInvitation: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           email: string;
           firstName?: string;
           lastName?: string;
           organisationId: string;
           roleIds?: string[];
        };
     };
  };
  responses: {
     201: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:3288

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        email: string;
        firstName?: string;
        lastName?: string;
        organisationId: string;
        roleIds?: string[];
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     email: string;
     firstName?: string;
     lastName?: string;
     organisationId: string;
     roleIds?: string[];
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  email: string;
  firstName?: string;
  lastName?: string;
  organisationId: string;
  roleIds?: string[];
};
```

##### requestBody.content.application/json.email

```ts
email: string;
```

Format: email

###### Example

```ts
newuser@example.com
```

##### requestBody.content.application/json.firstName?

```ts
optional firstName: string;
```

###### Example

```ts
John
```

##### requestBody.content.application/json.lastName?

```ts
optional lastName: string;
```

###### Example

```ts
Doe
```

##### requestBody.content.application/json.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### requestBody.content.application/json.roleIds?

```ts
optional roleIds: string[];
```

###### Example

```ts
[
      "rol_admin123"
    ]
```

#### responses

```ts
responses: {
  201: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.201

```ts
201: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Invitation created successfully

##### responses.201.content

```ts
content: {
  application/json: {
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
};
```

##### responses.201.content.application/json

```ts
application/json: {
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

##### responses.201.content.application/json.invitation

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

##### responses.201.content.application/json.invitation.code

```ts
code: string;
```

###### Example

```ts
inv_BvQ8mK...
```

##### responses.201.content.application/json.invitation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-01T00:00:00.000Z
```

##### responses.201.content.application/json.invitation.email

```ts
email: string;
```

Format: email

###### Example

```ts
newuser@example.com
```

##### responses.201.content.application/json.invitation.expiresAt

```ts
expiresAt: string;
```

###### Example

```ts
2024-01-08T00:00:00.000Z
```

##### responses.201.content.application/json.invitation.id

```ts
id: string;
```

###### Example

```ts
inv_abc123
```

##### responses.201.content.application/json.invitation.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.201.content.application/json.invitation.redeemedAt

```ts
redeemedAt: string | null;
```

###### Example

```ts
null
```

##### responses.201.content.application/json.invitation.userId

```ts
userId: string;
```

###### Example

```ts
usr_pending123
```

##### responses.201.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### createVenue

```ts
createVenue: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
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
        };
     };
  };
  responses: {
     201: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:5700

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
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
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
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
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
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
};
```

##### requestBody.content.application/json.accountId

```ts
accountId: string;
```

###### Description

Account ID that owns this venue

###### Example

```ts
acc_xyz789
```

##### requestBody.content.application/json.coordinates?

```ts
optional coordinates: {
  latitude: number;
  longitude: number;
};
```

###### Description

GPS coordinates for mapping

##### requestBody.content.application/json.coordinates.latitude

```ts
latitude: number;
```

###### Description

Latitude (-90 to 90)

###### Example

```ts
51.5074
```

##### requestBody.content.application/json.coordinates.longitude

```ts
longitude: number;
```

###### Description

Longitude (-180 to 180)

###### Example

```ts
-0.1278
```

##### requestBody.content.application/json.country?

```ts
optional country: string;
```

###### Description

Country

###### Example

```ts
United Kingdom
```

##### requestBody.content.application/json.description?

```ts
optional description: string;
```

###### Description

Venue description

###### Example

```ts
Historic concert hall in London
```

##### requestBody.content.application/json.email?

```ts
optional email: string;
```

Format: email

###### Description

Contact email

###### Example

```ts
info@royalalberthall.com
```

##### requestBody.content.application/json.features?

```ts
optional features: string[];
```

###### Description

Venue features and facilities

###### Default

```ts
[]
```

###### Example

```ts
[
      "parking",
      "wheelchair_accessible",
      "bar",
      "restaurant"
    ]
```

##### requestBody.content.application/json.name

```ts
name: string;
```

###### Description

Venue name

###### Example

```ts
Royal Albert Hall
```

##### requestBody.content.application/json.phone?

```ts
optional phone: string;
```

###### Description

Contact phone number

###### Example

```ts
+44 20 7589 8212
```

##### requestBody.content.application/json.status?

```ts
optional status: "active" | "archived";
```

###### Description

Venue status

###### Default

```ts
active
```

###### Example

```ts
active
@enum {string}
```

##### requestBody.content.application/json.streetAddress?

```ts
optional streetAddress: string;
```

###### Description

Street address

###### Example

```ts
Kensington Gore
```

##### requestBody.content.application/json.tags?

```ts
optional tags: string[];
```

###### Description

Venue tags

###### Default

```ts
[]
```

###### Example

```ts
[
      "concert-hall",
      "historic",
      "premium"
    ]
```

##### requestBody.content.application/json.timezone?

```ts
optional timezone: string;
```

###### Description

IANA timezone

###### Default

```ts
UTC
```

###### Example

```ts
Europe/London
```

##### requestBody.content.application/json.website?

```ts
optional website: string;
```

Format: uri

###### Description

Venue website

###### Example

```ts
https://www.royalalberthall.com
```

#### responses

```ts
responses: {
  201: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.201

```ts
201: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Venue created successfully

##### responses.201.content

```ts
content: {
  application/json: {
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
};
```

##### responses.201.content.application/json

```ts
application/json: {
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

##### responses.201.content.application/json.venue

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

##### responses.201.content.application/json.venue.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### responses.201.content.application/json.venue.coordinates?

```ts
optional coordinates: {
  coordinates: [number, number];
  type: "Point";
};
```

##### responses.201.content.application/json.venue.coordinates.coordinates

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

##### responses.201.content.application/json.venue.coordinates.type

```ts
type: "Point";
```

###### Example

```ts
Point
@enum {string}
```

##### responses.201.content.application/json.venue.country?

```ts
optional country: string;
```

###### Example

```ts
United Kingdom
```

##### responses.201.content.application/json.venue.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### responses.201.content.application/json.venue.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### responses.201.content.application/json.venue.description?

```ts
optional description: string;
```

###### Example

```ts
Historic concert hall in London
```

##### responses.201.content.application/json.venue.email?

```ts
optional email: string;
```

###### Example

```ts
info@royalalberthall.com
```

##### responses.201.content.application/json.venue.features

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

##### responses.201.content.application/json.venue.id

```ts
id: string;
```

###### Example

```ts
vnu_abc123
```

##### responses.201.content.application/json.venue.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.201.content.application/json.venue.name

```ts
name: string;
```

###### Example

```ts
Royal Albert Hall
```

##### responses.201.content.application/json.venue.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.201.content.application/json.venue.phone?

```ts
optional phone: string;
```

###### Example

```ts
+44 20 7589 8212
```

##### responses.201.content.application/json.venue.status

```ts
status: "active" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### responses.201.content.application/json.venue.streetAddress?

```ts
optional streetAddress: string;
```

###### Example

```ts
Kensington Gore
```

##### responses.201.content.application/json.venue.tags

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

##### responses.201.content.application/json.venue.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### responses.201.content.application/json.venue.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### responses.201.content.application/json.venue.website?

```ts
optional website: string;
```

###### Example

```ts
https://www.royalalberthall.com
```

##### responses.201.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### createVenueLayout

```ts
createVenueLayout: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           areas?: {
              capacity: number;
              color?: string;
              description?: string;
              displayOrder: number;
              floorId?: string;
              id?: string;
              name: string;
              position?: {
                 height: number;
                 width: number;
                 x: number;
                 y: number;
              };
              seats?: {
                 attributes?: ...;
                 categoryId?: ...;
                 companionSeats?: ...;
                 companionTo?: ...;
                 holdType?: ...;
                 id?: ...;
                 internalNotes?: ...;
                 label: ...;
                 number: ...;
                 position?: ...;
                 publicNotes?: ...;
                 row: ...;
                 section?: ...;
                 sectionId?: ...;
                 status?: ...;
              }[];
              sections?: {
                 description?: ...;
                 displayOrder: ...;
                 id?: ...;
                 name: ...;
              }[];
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
                 rotation?: number;
                 width: number;
                 x: number;
                 y: number;
              };
              style?: {
                 fill?: ... | ...;
                 fontSize?: ... | ...;
                 fontWeight?: ... | ...;
                 stroke?: ... | ...;
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
        };
     };
  };
  responses: {
     201: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:6174

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        areas?: {
           capacity: number;
           color?: string;
           description?: string;
           displayOrder: number;
           floorId?: string;
           id?: string;
           name: string;
           position?: {
              height: number;
              width: number;
              x: number;
              y: number;
           };
           seats?: {
              attributes?: ...;
              categoryId?: ...;
              companionSeats?: ...;
              companionTo?: ...;
              holdType?: ...;
              id?: ...;
              internalNotes?: ...;
              label: ...;
              number: ...;
              position?: ...;
              publicNotes?: ...;
              row: ...;
              section?: ...;
              sectionId?: ...;
              status?: ...;
           }[];
           sections?: {
              description?: ...;
              displayOrder: ...;
              id?: ...;
              name: ...;
           }[];
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
              rotation?: number;
              width: number;
              x: number;
              y: number;
           };
           style?: {
              fill?: ... | ...;
              fontSize?: ... | ...;
              fontWeight?: ... | ...;
              stroke?: ... | ...;
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
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     areas?: {
        capacity: number;
        color?: string;
        description?: string;
        displayOrder: number;
        floorId?: string;
        id?: string;
        name: string;
        position?: {
           height: number;
           width: number;
           x: number;
           y: number;
        };
        seats?: {
           attributes?: ...;
           categoryId?: ...;
           companionSeats?: ...;
           companionTo?: ...;
           holdType?: ...;
           id?: ...;
           internalNotes?: ...;
           label: ...;
           number: ...;
           position?: ...;
           publicNotes?: ...;
           row: ...;
           section?: ...;
           sectionId?: ...;
           status?: ...;
        }[];
        sections?: {
           description?: ...;
           displayOrder: ...;
           id?: ...;
           name: ...;
        }[];
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
           rotation?: number;
           width: number;
           x: number;
           y: number;
        };
        style?: {
           fill?: ... | ...;
           fontSize?: ... | ...;
           fontWeight?: ... | ...;
           stroke?: ... | ...;
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
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  areas?: {
     capacity: number;
     color?: string;
     description?: string;
     displayOrder: number;
     floorId?: string;
     id?: string;
     name: string;
     position?: {
        height: number;
        width: number;
        x: number;
        y: number;
     };
     seats?: {
        attributes?: ...;
        categoryId?: ...;
        companionSeats?: ...;
        companionTo?: ...;
        holdType?: ...;
        id?: ...;
        internalNotes?: ...;
        label: ...;
        number: ...;
        position?: ...;
        publicNotes?: ...;
        row: ...;
        section?: ...;
        sectionId?: ...;
        status?: ...;
     }[];
     sections?: {
        description?: ...;
        displayOrder: ...;
        id?: ...;
        name: ...;
     }[];
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
        rotation?: number;
        width: number;
        x: number;
        y: number;
     };
     style?: {
        fill?: ... | ...;
        fontSize?: ... | ...;
        fontWeight?: ... | ...;
        stroke?: ... | ...;
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
};
```

##### requestBody.content.application/json.areas?

```ts
optional areas: {
  capacity: number;
  color?: string;
  description?: string;
  displayOrder: number;
  floorId?: string;
  id?: string;
  name: string;
  position?: {
     height: number;
     width: number;
     x: number;
     y: number;
  };
  seats?: {
     attributes?: ...;
     categoryId?: ...;
     companionSeats?: ...;
     companionTo?: ...;
     holdType?: ...;
     id?: ...;
     internalNotes?: ...;
     label: ...;
     number: ...;
     position?: ...;
     publicNotes?: ...;
     row: ...;
     section?: ...;
     sectionId?: ...;
     status?: ...;
  }[];
  sections?: {
     description?: ...;
     displayOrder: ...;
     id?: ...;
     name: ...;
  }[];
  status?: "active" | "inactive";
  type: "unallocated" | "allocated";
}[];
```

###### Description

Venue areas (GA and allocated)

###### Default

```ts
[]
```

##### requestBody.content.application/json.categories?

```ts
optional categories: {
  color?: string;
  description?: string;
  displayOrder: number;
  id?: string;
  name: string;
}[];
```

###### Description

Pricing categories/zones

###### Default

```ts
[]
```

##### requestBody.content.application/json.decorations?

```ts
optional decorations: {
  id?: string;
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
     fill?: ... | ...;
     fontSize?: ... | ...;
     fontWeight?: ... | ...;
     stroke?: ... | ...;
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

###### Description

Visual elements (stages, pillars, labels, etc.)

###### Default

```ts
[]
```

##### requestBody.content.application/json.description?

```ts
optional description: string;
```

###### Description

Layout description

###### Example

```ts
Standard theatre configuration with allocated seating
```

##### requestBody.content.application/json.floors?

```ts
optional floors: {
  description?: string;
  displayOrder: number;
  id?: string;
  name: string;
}[];
```

###### Description

Floors for multi-level venues

###### Default

```ts
[]
```

##### requestBody.content.application/json.name

```ts
name: string;
```

###### Description

Layout name

###### Example

```ts
Theatre Mode
```

##### requestBody.content.application/json.status?

```ts
optional status: "active" | "archived";
```

###### Description

Layout status

###### Default

```ts
active
```

###### Example

```ts
active
@enum {string}
```

##### requestBody.content.application/json.tags?

```ts
optional tags: string[];
```

###### Description

Layout tags

###### Default

```ts
[]
```

###### Example

```ts
[
      "theatre",
      "seated"
    ]
```

##### requestBody.content.application/json.totalCapacity?

```ts
optional totalCapacity: number;
```

###### Description

Total capacity (denormalized sum of all area capacities)

###### Default

```ts
0
```

###### Example

```ts
1500
```

#### responses

```ts
responses: {
  201: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.201

```ts
201: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Venue layout created successfully

##### responses.201.content

```ts
content: {
  application/json: {
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
};
```

##### responses.201.content.application/json

```ts
application/json: {
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

##### responses.201.content.application/json.venueLayout

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

##### responses.201.content.application/json.venueLayout.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_ghi012
```

##### responses.201.content.application/json.venueLayout.areas

```ts
areas: unknown[];
```

###### Example

```ts
[]
```

##### responses.201.content.application/json.venueLayout.categories

```ts
categories: unknown[];
```

###### Example

```ts
[]
```

##### responses.201.content.application/json.venueLayout.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### responses.201.content.application/json.venueLayout.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### responses.201.content.application/json.venueLayout.decorations?

```ts
optional decorations: {
  id: string;
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
```

###### Example

```ts
[]
```

##### responses.201.content.application/json.venueLayout.description?

```ts
optional description: string;
```

###### Example

```ts
Standard theatre configuration
```

##### responses.201.content.application/json.venueLayout.id

```ts
id: string;
```

###### Example

```ts
vlt_abc123
```

##### responses.201.content.application/json.venueLayout.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.201.content.application/json.venueLayout.name

```ts
name: string;
```

###### Example

```ts
Theatre Mode
```

##### responses.201.content.application/json.venueLayout.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.201.content.application/json.venueLayout.status

```ts
status: "active" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### responses.201.content.application/json.venueLayout.tags

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

##### responses.201.content.application/json.venueLayout.totalCapacity

```ts
totalCapacity: number;
```

###### Example

```ts
1500
```

##### responses.201.content.application/json.venueLayout.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### responses.201.content.application/json.venueLayout.venueId

```ts
venueId: string;
```

###### Example

```ts
vnu_def456
```

##### responses.201.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### deleteAccount

```ts
deleteAccount: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
              id: string;
              success: boolean;
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:2923

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Account ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           id: string;
           success: boolean;
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        id: string;
        success: boolean;
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Account deleted successfully

##### responses.200.content

```ts
content: {
  application/json: {
     id: string;
     success: boolean;
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
  id: string;
  success: boolean;
};
```

##### responses.200.content.application/json.id

```ts
id: string;
```

###### Example

```ts
acc_abc123
```

##### responses.200.content.application/json.success

```ts
success: boolean;
```

###### Example

```ts
true
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### deleteEvent

```ts
deleteEvent: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
              id: string;
              success: boolean;
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:4517

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Event ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           id: string;
           success: boolean;
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        id: string;
        success: boolean;
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Event deleted successfully

##### responses.200.content

```ts
content: {
  application/json: {
     id: string;
     success: boolean;
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
  id: string;
  success: boolean;
};
```

##### responses.200.content.application/json.id

```ts
id: string;
```

###### Example

```ts
evt_abc123
```

##### responses.200.content.application/json.success

```ts
success: boolean;
```

###### Example

```ts
true
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### deleteEventOccurrence

```ts
deleteEventOccurrence: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        eventId: string;
        occurrenceId: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
              id: string;
              success: boolean;
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:5062

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     eventId: string;
     occurrenceId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  eventId: string;
  occurrenceId: string;
};
```

##### parameters.path.eventId

```ts
eventId: string;
```

###### Description

Event ID

##### parameters.path.occurrenceId

```ts
occurrenceId: string;
```

###### Description

Occurrence ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           id: string;
           success: boolean;
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        id: string;
        success: boolean;
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Event occurrence deleted successfully

##### responses.200.content

```ts
content: {
  application/json: {
     id: string;
     success: boolean;
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
  id: string;
  success: boolean;
};
```

##### responses.200.content.application/json.id

```ts
id: string;
```

###### Example

```ts
evoc_abc123
```

##### responses.200.content.application/json.success

```ts
success: boolean;
```

###### Example

```ts
true
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### deleteEventPriceScheme

```ts
deleteEventPriceScheme: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        eventId: string;
        priceSchemeId: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
              id: string;
              success: boolean;
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:5479

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     eventId: string;
     priceSchemeId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  eventId: string;
  priceSchemeId: string;
};
```

##### parameters.path.eventId

```ts
eventId: string;
```

###### Description

Event ID

##### parameters.path.priceSchemeId

```ts
priceSchemeId: string;
```

###### Description

Price scheme ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           id: string;
           success: boolean;
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        id: string;
        success: boolean;
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Price scheme deleted successfully

##### responses.200.content

```ts
content: {
  application/json: {
     id: string;
     success: boolean;
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
  id: string;
  success: boolean;
};
```

##### responses.200.content.application/json.id

```ts
id: string;
```

###### Example

```ts
tps_abc123
```

##### responses.200.content.application/json.success

```ts
success: boolean;
```

###### Example

```ts
true
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### deleteRole

```ts
deleteRole: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
              id: string;
              success: boolean;
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:3690

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Role ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           id: string;
           success: boolean;
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        id: string;
        success: boolean;
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Role deleted successfully

##### responses.200.content

```ts
content: {
  application/json: {
     id: string;
     success: boolean;
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
  id: string;
  success: boolean;
};
```

##### responses.200.content.application/json.id

```ts
id: string;
```

###### Example

```ts
rol_abc123
```

##### responses.200.content.application/json.success

```ts
success: boolean;
```

###### Example

```ts
true
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### deleteSeatFromArea

```ts
deleteSeatFromArea: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        areaId: string;
        id: string;
        layoutId: string;
        seatId: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
              success: boolean;
              venueLayout?: unknown;
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:8251

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     areaId: string;
     id: string;
     layoutId: string;
     seatId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  areaId: string;
  id: string;
  layoutId: string;
  seatId: string;
};
```

##### parameters.path.areaId

```ts
areaId: string;
```

###### Description

Area ID

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.path.layoutId

```ts
layoutId: string;
```

###### Description

Layout ID

##### parameters.path.seatId

```ts
seatId: string;
```

###### Description

Seat ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           success: boolean;
           venueLayout?: unknown;
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        success: boolean;
        venueLayout?: unknown;
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Seat deleted successfully

##### responses.200.content

```ts
content: {
  application/json: {
     success: boolean;
     venueLayout?: unknown;
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
  success: boolean;
  venueLayout?: unknown;
};
```

##### responses.200.content.application/json.success

```ts
success: boolean;
```

###### Example

```ts
true
```

##### responses.200.content.application/json.venueLayout?

```ts
optional venueLayout: unknown;
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### deleteVenue

```ts
deleteVenue: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
              id: string;
              success: boolean;
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:5907

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           id: string;
           success: boolean;
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        id: string;
        success: boolean;
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Venue deleted successfully

##### responses.200.content

```ts
content: {
  application/json: {
     id: string;
     success: boolean;
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
  id: string;
  success: boolean;
};
```

##### responses.200.content.application/json.id

```ts
id: string;
```

###### Example

```ts
vnu_abc123
```

##### responses.200.content.application/json.success

```ts
success: boolean;
```

###### Example

```ts
true
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### deleteVenueLayout

```ts
deleteVenueLayout: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
        layoutId: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
              id: string;
              success: boolean;
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:6661

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
     layoutId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
  layoutId: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.path.layoutId

```ts
layoutId: string;
```

###### Description

Layout ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           id: string;
           success: boolean;
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        id: string;
        success: boolean;
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Venue layout deleted successfully

##### responses.200.content

```ts
content: {
  application/json: {
     id: string;
     success: boolean;
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
  id: string;
  success: boolean;
};
```

##### responses.200.content.application/json.id

```ts
id: string;
```

###### Example

```ts
vnl_abc123
```

##### responses.200.content.application/json.success

```ts
success: boolean;
```

###### Example

```ts
true
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### deleteVenueLayoutArea

```ts
deleteVenueLayoutArea: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        areaId: string;
        id: string;
        layoutId: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
              success: boolean;
              venueLayout?: unknown;
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:7261

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     areaId: string;
     id: string;
     layoutId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  areaId: string;
  id: string;
  layoutId: string;
};
```

##### parameters.path.areaId

```ts
areaId: string;
```

###### Description

Area ID

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.path.layoutId

```ts
layoutId: string;
```

###### Description

Layout ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           success: boolean;
           venueLayout?: unknown;
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        success: boolean;
        venueLayout?: unknown;
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Area deleted successfully

##### responses.200.content

```ts
content: {
  application/json: {
     success: boolean;
     venueLayout?: unknown;
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
  success: boolean;
  venueLayout?: unknown;
};
```

##### responses.200.content.application/json.success

```ts
success: boolean;
```

###### Example

```ts
true
```

##### responses.200.content.application/json.venueLayout?

```ts
optional venueLayout: unknown;
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### deleteVenueLayoutCategory

```ts
deleteVenueLayoutCategory: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        categoryId: string;
        id: string;
        layoutId: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
              success: boolean;
              venueLayout?: unknown;
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:7534

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     categoryId: string;
     id: string;
     layoutId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  categoryId: string;
  id: string;
  layoutId: string;
};
```

##### parameters.path.categoryId

```ts
categoryId: string;
```

###### Description

Category ID

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.path.layoutId

```ts
layoutId: string;
```

###### Description

Layout ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           success: boolean;
           venueLayout?: unknown;
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        success: boolean;
        venueLayout?: unknown;
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Category deleted successfully

##### responses.200.content

```ts
content: {
  application/json: {
     success: boolean;
     venueLayout?: unknown;
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
  success: boolean;
  venueLayout?: unknown;
};
```

##### responses.200.content.application/json.success

```ts
success: boolean;
```

###### Example

```ts
true
```

##### responses.200.content.application/json.venueLayout?

```ts
optional venueLayout: unknown;
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### federate

```ts
federate: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           token: string;
        };
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
              accessToken: string;
              refreshToken: string;
              user: {
                 email: string;
                 firstName?: string;
                 id: string;
                 lastName?: string;
              };
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:2329

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        token: string;
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     token: string;
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  token: string;
};
```

##### requestBody.content.application/json.token

```ts
token: string;
```

###### Description

Stagedoor JWT token to federate

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           accessToken: string;
           refreshToken: string;
           user: {
              email: string;
              firstName?: string;
              id: string;
              lastName?: string;
           };
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        accessToken: string;
        refreshToken: string;
        user: {
           email: string;
           firstName?: string;
           id: string;
           lastName?: string;
        };
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Federation successful

##### responses.200.content

```ts
content: {
  application/json: {
     accessToken: string;
     refreshToken: string;
     user: {
        email: string;
        firstName?: string;
        id: string;
        lastName?: string;
     };
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.accessToken

```ts
accessToken: string;
```

###### Description

JWT access token

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

##### responses.200.content.application/json.refreshToken

```ts
refreshToken: string;
```

###### Description

JWT refresh token

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

##### responses.200.content.application/json.user

```ts
user: {
  email: string;
  firstName?: string;
  id: string;
  lastName?: string;
};
```

##### responses.200.content.application/json.user.email

```ts
email: string;
```

##### responses.200.content.application/json.user.firstName?

```ts
optional firstName: string;
```

##### responses.200.content.application/json.user.id

```ts
id: string;
```

##### responses.200.content.application/json.user.lastName?

```ts
optional lastName: string;
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### generateSeatsForArea

```ts
generateSeatsForArea: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        areaId: string;
        id: string;
        layoutId: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           categoryId?: string;
           endRow: string;
           rowPrefix?: string;
           seatPrefix?: string;
           seatsPerRow: number;
           section?: string;
           skipRows?: string[];
           skipSeats?: string[];
           startRow: string;
        };
     };
  };
  responses: {
     201: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:7988

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     areaId: string;
     id: string;
     layoutId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  areaId: string;
  id: string;
  layoutId: string;
};
```

##### parameters.path.areaId

```ts
areaId: string;
```

###### Description

Area ID

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.path.layoutId

```ts
layoutId: string;
```

###### Description

Layout ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        categoryId?: string;
        endRow: string;
        rowPrefix?: string;
        seatPrefix?: string;
        seatsPerRow: number;
        section?: string;
        skipRows?: string[];
        skipSeats?: string[];
        startRow: string;
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     categoryId?: string;
     endRow: string;
     rowPrefix?: string;
     seatPrefix?: string;
     seatsPerRow: number;
     section?: string;
     skipRows?: string[];
     skipSeats?: string[];
     startRow: string;
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  categoryId?: string;
  endRow: string;
  rowPrefix?: string;
  seatPrefix?: string;
  seatsPerRow: number;
  section?: string;
  skipRows?: string[];
  skipSeats?: string[];
  startRow: string;
};
```

##### requestBody.content.application/json.categoryId?

```ts
optional categoryId: string;
```

###### Description

Category ID for all generated seats

###### Example

```ts
vlc_standard
```

##### requestBody.content.application/json.endRow

```ts
endRow: string;
```

###### Description

Ending row (can be letter A-Z or number)

###### Example

```ts
J
```

##### requestBody.content.application/json.rowPrefix?

```ts
optional rowPrefix: string;
```

###### Description

Prefix for row labels

###### Example

```ts
R
```

##### requestBody.content.application/json.seatPrefix?

```ts
optional seatPrefix: string;
```

###### Description

Prefix for seat numbers

###### Example

```ts

```

##### requestBody.content.application/json.seatsPerRow

```ts
seatsPerRow: number;
```

###### Description

Number of seats per row

###### Example

```ts
20
```

##### requestBody.content.application/json.section?

```ts
optional section: string;
```

###### Description

Section name for all generated seats

###### Example

```ts
Orchestra
```

##### requestBody.content.application/json.skipRows?

```ts
optional skipRows: string[];
```

###### Description

Rows to skip

###### Example

```ts
[
      "C",
      "F"
    ]
```

##### requestBody.content.application/json.skipSeats?

```ts
optional skipSeats: string[];
```

###### Description

Specific seats to skip (format: row-seat)

###### Example

```ts
[
      "A-1",
      "A-2"
    ]
```

##### requestBody.content.application/json.startRow

```ts
startRow: string;
```

###### Description

Starting row (can be letter A-Z or number)

###### Example

```ts
A
```

#### responses

```ts
responses: {
  201: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.201

```ts
201: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Seats generated successfully

##### responses.201.content

```ts
content: {
  application/json: {
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
};
```

##### responses.201.content.application/json

```ts
application/json: {
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

##### responses.201.content.application/json.seats

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

##### responses.201.content.application/json.seatsGenerated

```ts
seatsGenerated: number;
```

###### Example

```ts
200
```

##### responses.201.content.application/json.venueLayout?

```ts
optional venueLayout: unknown;
```

##### responses.201.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### getAccount

```ts
getAccount: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:2865

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Account ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Account retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.account

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

##### responses.200.content.application/json.account.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### responses.200.content.application/json.account.id

```ts
id: string;
```

###### Example

```ts
acc_abc123
```

##### responses.200.content.application/json.account.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.account.name

```ts
name: string;
```

###### Example

```ts
Main Account
```

##### responses.200.content.application/json.account.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.account.status

```ts
status: "active" | "inactive";
```

###### Example

```ts
active
@enum {string}
```

##### responses.200.content.application/json.account.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### getCurrentUser

```ts
getCurrentUser: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
              user: {
                 email: string;
                 externalUserId?: string;
                 firstName?: string;
                 id: string;
                 identityProvider?: string;
                 lastName?: string;
              };
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:2388

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           user: {
              email: string;
              externalUserId?: string;
              firstName?: string;
              id: string;
              identityProvider?: string;
              lastName?: string;
           };
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        user: {
           email: string;
           externalUserId?: string;
           firstName?: string;
           id: string;
           identityProvider?: string;
           lastName?: string;
        };
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

User retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
     user: {
        email: string;
        externalUserId?: string;
        firstName?: string;
        id: string;
        identityProvider?: string;
        lastName?: string;
     };
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.user

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

##### responses.200.content.application/json.user.email

```ts
email: string;
```

Format: email

###### Example

```ts
user@example.com
```

##### responses.200.content.application/json.user.externalUserId?

```ts
optional externalUserId: string;
```

###### Example

```ts
stagedoor-user-123
```

##### responses.200.content.application/json.user.firstName?

```ts
optional firstName: string;
```

###### Example

```ts
John
```

##### responses.200.content.application/json.user.id

```ts
id: string;
```

###### Example

```ts
usr_abc123
```

##### responses.200.content.application/json.user.identityProvider?

```ts
optional identityProvider: string;
```

###### Example

```ts
stagedoor
```

##### responses.200.content.application/json.user.lastName?

```ts
optional lastName: string;
```

###### Example

```ts
Doe
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### getEvent

```ts
getEvent: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: {
        expand?: string;
     };
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:4456

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: {
     expand?: string;
  };
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Event ID

##### parameters.query?

```ts
optional query: {
  expand?: string;
};
```

##### parameters.query.expand?

```ts
optional expand: string;
```

###### Description

Comma-separated list of fields to expand. Available: venue

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Event retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.event

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

##### responses.200.content.application/json.event.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### responses.200.content.application/json.event.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### responses.200.content.application/json.event.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### responses.200.content.application/json.event.description?

```ts
optional description: string;
```

###### Example

```ts
A three-day music festival
```

##### responses.200.content.application/json.event.id

```ts
id: string;
```

###### Example

```ts
evt_abc123
```

##### responses.200.content.application/json.event.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.event.name

```ts
name: string;
```

###### Example

```ts
Summer Music Festival
```

##### responses.200.content.application/json.event.occurrenceCount

```ts
occurrenceCount: number;
```

###### Example

```ts
3
```

##### responses.200.content.application/json.event.offSaleDate?

```ts
optional offSaleDate: string;
```

###### Example

```ts
2025-06-15T23:59:59Z
```

##### responses.200.content.application/json.event.onSaleDate?

```ts
optional onSaleDate: string;
```

###### Example

```ts
2025-06-01T09:00:00Z
```

##### responses.200.content.application/json.event.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.event.productCount

```ts
productCount: number;
```

###### Example

```ts
0
```

##### responses.200.content.application/json.event.status

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

##### responses.200.content.application/json.event.tags

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

##### responses.200.content.application/json.event.ticketCount

```ts
ticketCount: number;
```

###### Example

```ts
0
```

##### responses.200.content.application/json.event.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### responses.200.content.application/json.event.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### responses.200.content.application/json.event.venueId?

```ts
optional venueId: string;
```

###### Example

```ts
vnu_ghi789
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### getEventOccurrence

```ts
getEventOccurrence: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        eventId: string;
        occurrenceId: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:5002

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     eventId: string;
     occurrenceId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  eventId: string;
  occurrenceId: string;
};
```

##### parameters.path.eventId

```ts
eventId: string;
```

###### Description

Event ID

##### parameters.path.occurrenceId

```ts
occurrenceId: string;
```

###### Description

Occurrence ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Event occurrence retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.eventOccurrence

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

##### responses.200.content.application/json.eventOccurrence.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### responses.200.content.application/json.eventOccurrence.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### responses.200.content.application/json.eventOccurrence.endDate

```ts
endDate: string;
```

###### Example

```ts
2025-06-15T00:00:00Z
```

##### responses.200.content.application/json.eventOccurrence.endTime

```ts
endTime: string;
```

###### Example

```ts
23:00:00
```

##### responses.200.content.application/json.eventOccurrence.eventId

```ts
eventId: string;
```

###### Example

```ts
evt_ghi789
```

##### responses.200.content.application/json.eventOccurrence.id

```ts
id: string;
```

###### Example

```ts
eoc_abc123
```

##### responses.200.content.application/json.eventOccurrence.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.eventOccurrence.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.eventOccurrence.startDate

```ts
startDate: string;
```

###### Example

```ts
2025-06-15T00:00:00Z
```

##### responses.200.content.application/json.eventOccurrence.startTime

```ts
startTime: string;
```

###### Example

```ts
19:00:00
```

##### responses.200.content.application/json.eventOccurrence.status

```ts
status: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
```

###### Example

```ts
draft
@enum {string}
```

##### responses.200.content.application/json.eventOccurrence.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### responses.200.content.application/json.eventOccurrence.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### responses.200.content.application/json.eventOccurrence.venueId?

```ts
optional venueId: string;
```

###### Example

```ts
vnu_abc123
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### getEventPriceScheme

```ts
getEventPriceScheme: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        eventId: string;
        priceSchemeId: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:5419

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     eventId: string;
     priceSchemeId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  eventId: string;
  priceSchemeId: string;
};
```

##### parameters.path.eventId

```ts
eventId: string;
```

###### Description

Event ID

##### parameters.path.priceSchemeId

```ts
priceSchemeId: string;
```

###### Description

Price scheme ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Price scheme retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.priceScheme

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

##### responses.200.content.application/json.priceScheme.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### responses.200.content.application/json.priceScheme.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### responses.200.content.application/json.priceScheme.description?

```ts
optional description: string;
```

###### Example

```ts
Default pricing for all shows
```

##### responses.200.content.application/json.priceScheme.eventId

```ts
eventId: string;
```

###### Example

```ts
evt_ghi789
```

##### responses.200.content.application/json.priceScheme.id

```ts
id: string;
```

###### Example

```ts
tps_abc123
```

##### responses.200.content.application/json.priceScheme.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.priceScheme.name

```ts
name: string;
```

###### Example

```ts
Standard Pricing
```

##### responses.200.content.application/json.priceScheme.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.priceScheme.parentPriceSchemeId?

```ts
optional parentPriceSchemeId: string;
```

###### Example

```ts
tps_parent123
```

##### responses.200.content.application/json.priceScheme.status

```ts
status: "active" | "draft" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### responses.200.content.application/json.priceScheme.ticketPrices

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

##### responses.200.content.application/json.priceScheme.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### getIdentityProvider

```ts
getIdentityProvider: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:3112

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Identity provider retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.provider

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

##### responses.200.content.application/json.provider.allowedClientIds

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

##### responses.200.content.application/json.provider.authorizationEndpoint

```ts
authorizationEndpoint: string | null;
```

###### Example

```ts
https://stagedoor.example.com/api/oauth/authorize
```

##### responses.200.content.application/json.provider.cacheTtl

```ts
cacheTtl: number;
```

###### Example

```ts
300
```

##### responses.200.content.application/json.provider.clientId

```ts
clientId: string | null;
```

###### Example

```ts
backstage-app
```

##### responses.200.content.application/json.provider.configuration

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

##### responses.200.content.application/json.provider.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-01T00:00:00.000Z
```

##### responses.200.content.application/json.provider.emailDomain

```ts
emailDomain: string | null;
```

###### Example

```ts
@example.com
```

##### responses.200.content.application/json.provider.id

```ts
id: string;
```

###### Example

```ts
stagedoor-idp
```

##### responses.200.content.application/json.provider.isDefault

```ts
isDefault: boolean;
```

###### Example

```ts
true
```

##### responses.200.content.application/json.provider.isEnabled

```ts
isEnabled: boolean;
```

###### Example

```ts
true
```

##### responses.200.content.application/json.provider.issuer

```ts
issuer: string;
```

###### Example

```ts
https://stagedoor.example.com
```

##### responses.200.content.application/json.provider.jwksUri

```ts
jwksUri: string;
```

###### Example

```ts
https://stagedoor.example.com/.well-known/jwks.json
```

##### responses.200.content.application/json.provider.jwksUriInternal

```ts
jwksUriInternal: string | null;
```

###### Example

```ts
http://stagedoor:3000/.well-known/jwks.json
```

##### responses.200.content.application/json.provider.organisationId

```ts
organisationId: string | null;
```

###### Example

```ts
org_abc123
```

##### responses.200.content.application/json.provider.providerType

```ts
providerType: string;
```

###### Example

```ts
stagedoor
```

##### responses.200.content.application/json.provider.scopes

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

##### responses.200.content.application/json.provider.supportsPkce

```ts
supportsPkce: boolean;
```

###### Example

```ts
true
```

##### responses.200.content.application/json.provider.tokenEndpoint

```ts
tokenEndpoint: string | null;
```

###### Example

```ts
https://stagedoor.example.com/api/oauth/token
```

##### responses.200.content.application/json.provider.tokenEndpointInternal

```ts
tokenEndpointInternal: string | null;
```

###### Example

```ts
http://stagedoor:3000/api/oauth/token
```

##### responses.200.content.application/json.provider.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-01T00:00:00.000Z
```

##### responses.200.content.application/json.provider.userinfoEndpoint

```ts
userinfoEndpoint: string | null;
```

###### Example

```ts
https://stagedoor.example.com/api/oauth/userinfo
```

##### responses.200.content.application/json.provider.userinfoEndpointInternal

```ts
userinfoEndpointInternal: string | null;
```

###### Example

```ts
http://stagedoor:3000/api/oauth/userinfo
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### getMyOrganisations

```ts
getMyOrganisations: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
              organisations: {
                 id: string;
                 logoUrl?: string;
                 name: string;
                 primaryColor?: string;
                 secondaryColor?: string;
                 userId: string;
              }[];
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:2443

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           organisations: {
              id: string;
              logoUrl?: string;
              name: string;
              primaryColor?: string;
              secondaryColor?: string;
              userId: string;
           }[];
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        organisations: {
           id: string;
           logoUrl?: string;
           name: string;
           primaryColor?: string;
           secondaryColor?: string;
           userId: string;
        }[];
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Organisations retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
     organisations: {
        id: string;
        logoUrl?: string;
        name: string;
        primaryColor?: string;
        secondaryColor?: string;
        userId: string;
     }[];
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.organisations

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

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### getMyPermissions

```ts
getMyPermissions: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: {
        action?: string;
        resource?: string;
     };
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:2553

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: {
     action?: string;
     resource?: string;
  };
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: {
  action?: string;
  resource?: string;
};
```

##### parameters.query.action?

```ts
optional action: string;
```

###### Description

Filter by action (e.g., create, read, update, delete)

##### parameters.query.resource?

```ts
optional resource: string;
```

###### Description

Filter by resource (e.g., events, accounts, orders)

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Permissions retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.filters

```ts
filters: {
  action: string | null;
  resource: string | null;
};
```

##### responses.200.content.application/json.filters.action

```ts
action: string | null;
```

###### Example

```ts
create
```

##### responses.200.content.application/json.filters.resource

```ts
resource: string | null;
```

###### Example

```ts
events
```

##### responses.200.content.application/json.isOrgAdmin

```ts
isOrgAdmin: boolean;
```

###### Example

```ts
true
```

##### responses.200.content.application/json.permissions

```ts
permissions: {
  accounts: string[];
  isAllAccounts: boolean;
  permission: string;
}[];
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### getMyRoles

```ts
getMyRoles: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
              isOrgAdmin: boolean;
              roles: {
                 accountId: string;
                 description: string | null;
                 id: string;
                 isSystemRole: boolean;
                 name: string | null;
              }[];
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:2498

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           isOrgAdmin: boolean;
           roles: {
              accountId: string;
              description: string | null;
              id: string;
              isSystemRole: boolean;
              name: string | null;
           }[];
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        isOrgAdmin: boolean;
        roles: {
           accountId: string;
           description: string | null;
           id: string;
           isSystemRole: boolean;
           name: string | null;
        }[];
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Roles retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
     isOrgAdmin: boolean;
     roles: {
        accountId: string;
        description: string | null;
        id: string;
        isSystemRole: boolean;
        name: string | null;
     }[];
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.isOrgAdmin

```ts
isOrgAdmin: boolean;
```

###### Description

Whether the user has org-wide admin access

###### Example

```ts
true
```

##### responses.200.content.application/json.roles

```ts
roles: {
  accountId: string;
  description: string | null;
  id: string;
  isSystemRole: boolean;
  name: string | null;
}[];
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### getOrganisation

```ts
getOrganisation: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:2613

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Organisation ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Organisation retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.organisation

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

##### responses.200.content.application/json.organisation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### responses.200.content.application/json.organisation.id

```ts
id: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.organisation.logoUrl?

```ts
optional logoUrl: string;
```

###### Example

```ts
https://example.com/logo.png
```

##### responses.200.content.application/json.organisation.metadata?

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

##### responses.200.content.application/json.organisation.name

```ts
name: string;
```

###### Example

```ts
Acme Corporation
```

##### responses.200.content.application/json.organisation.primaryColor?

```ts
optional primaryColor: string;
```

###### Example

```ts
#FF5733
```

##### responses.200.content.application/json.organisation.secondaryColor?

```ts
optional secondaryColor: string;
```

###### Example

```ts
#3366FF
```

##### responses.200.content.application/json.organisation.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### getRole

```ts
getRole: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:3632

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Role ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Role retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### responses.200.content.application/json.description

```ts
description: string | null;
```

###### Example

```ts
Manages events and related resources
```

##### responses.200.content.application/json.id

```ts
id: string;
```

###### Example

```ts
rol_abc123
```

##### responses.200.content.application/json.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.isSystemRole

```ts
isSystemRole: boolean;
```

###### Description

Whether this is a system-defined role (cannot be modified or deleted)

###### Example

```ts
false
```

##### responses.200.content.application/json.name

```ts
name: string;
```

###### Example

```ts
Event Manager
```

##### responses.200.content.application/json.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.permissions

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

##### responses.200.content.application/json.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### getUserInvitation

```ts
getUserInvitation: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:3347

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Invitation retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.invitation

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

##### responses.200.content.application/json.invitation.code

```ts
code: string;
```

###### Example

```ts
inv_BvQ8mK...
```

##### responses.200.content.application/json.invitation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-01T00:00:00.000Z
```

##### responses.200.content.application/json.invitation.email

```ts
email: string;
```

Format: email

###### Example

```ts
newuser@example.com
```

##### responses.200.content.application/json.invitation.expiresAt

```ts
expiresAt: string;
```

###### Example

```ts
2024-01-08T00:00:00.000Z
```

##### responses.200.content.application/json.invitation.id

```ts
id: string;
```

###### Example

```ts
inv_abc123
```

##### responses.200.content.application/json.invitation.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.invitation.redeemedAt

```ts
redeemedAt: string | null;
```

###### Example

```ts
null
```

##### responses.200.content.application/json.invitation.userId

```ts
userId: string;
```

###### Example

```ts
usr_pending123
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### getVenue

```ts
getVenue: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:5849

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Venue retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.venue

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

##### responses.200.content.application/json.venue.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### responses.200.content.application/json.venue.coordinates?

```ts
optional coordinates: {
  coordinates: [number, number];
  type: "Point";
};
```

##### responses.200.content.application/json.venue.coordinates.coordinates

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

##### responses.200.content.application/json.venue.coordinates.type

```ts
type: "Point";
```

###### Example

```ts
Point
@enum {string}
```

##### responses.200.content.application/json.venue.country?

```ts
optional country: string;
```

###### Example

```ts
United Kingdom
```

##### responses.200.content.application/json.venue.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### responses.200.content.application/json.venue.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### responses.200.content.application/json.venue.description?

```ts
optional description: string;
```

###### Example

```ts
Historic concert hall in London
```

##### responses.200.content.application/json.venue.email?

```ts
optional email: string;
```

###### Example

```ts
info@royalalberthall.com
```

##### responses.200.content.application/json.venue.features

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

##### responses.200.content.application/json.venue.id

```ts
id: string;
```

###### Example

```ts
vnu_abc123
```

##### responses.200.content.application/json.venue.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.venue.name

```ts
name: string;
```

###### Example

```ts
Royal Albert Hall
```

##### responses.200.content.application/json.venue.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.venue.phone?

```ts
optional phone: string;
```

###### Example

```ts
+44 20 7589 8212
```

##### responses.200.content.application/json.venue.status

```ts
status: "active" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### responses.200.content.application/json.venue.streetAddress?

```ts
optional streetAddress: string;
```

###### Example

```ts
Kensington Gore
```

##### responses.200.content.application/json.venue.tags

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

##### responses.200.content.application/json.venue.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### responses.200.content.application/json.venue.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### responses.200.content.application/json.venue.website?

```ts
optional website: string;
```

###### Example

```ts
https://www.royalalberthall.com
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### getVenueLayout

```ts
getVenueLayout: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
        layoutId: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:6601

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
     layoutId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
  layoutId: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.path.layoutId

```ts
layoutId: string;
```

###### Description

Layout ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Venue layout retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.venueLayout

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

##### responses.200.content.application/json.venueLayout.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_ghi012
```

##### responses.200.content.application/json.venueLayout.areas

```ts
areas: unknown[];
```

###### Example

```ts
[]
```

##### responses.200.content.application/json.venueLayout.categories

```ts
categories: unknown[];
```

###### Example

```ts
[]
```

##### responses.200.content.application/json.venueLayout.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### responses.200.content.application/json.venueLayout.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### responses.200.content.application/json.venueLayout.decorations?

```ts
optional decorations: {
  id: string;
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
```

###### Example

```ts
[]
```

##### responses.200.content.application/json.venueLayout.description?

```ts
optional description: string;
```

###### Example

```ts
Standard theatre configuration
```

##### responses.200.content.application/json.venueLayout.id

```ts
id: string;
```

###### Example

```ts
vlt_abc123
```

##### responses.200.content.application/json.venueLayout.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.venueLayout.name

```ts
name: string;
```

###### Example

```ts
Theatre Mode
```

##### responses.200.content.application/json.venueLayout.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.venueLayout.status

```ts
status: "active" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### responses.200.content.application/json.venueLayout.tags

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

##### responses.200.content.application/json.venueLayout.totalCapacity

```ts
totalCapacity: number;
```

###### Example

```ts
1500
```

##### responses.200.content.application/json.venueLayout.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### responses.200.content.application/json.venueLayout.venueId

```ts
venueId: string;
```

###### Example

```ts
vnu_def456
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### listAccounts

```ts
listAccounts: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: {
        search?: string;
        status?: "active" | "inactive";
     };
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:2733

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: {
     search?: string;
     status?: "active" | "inactive";
  };
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: {
  search?: string;
  status?: "active" | "inactive";
};
```

##### parameters.query.search?

```ts
optional search: string;
```

###### Description

Search accounts by name

##### parameters.query.status?

```ts
optional status: "active" | "inactive";
```

###### Description

Filter by account status

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Accounts retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.accounts

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

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### listEventOccurrences

```ts
listEventOccurrences: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        eventId: string;
     };
     query?: {
        limit?: string;
        page?: string;
        startDateFrom?: string;
        startDateTo?: string;
        status?: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
        venueId?: string;
     };
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:4795

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     eventId: string;
  };
  query?: {
     limit?: string;
     page?: string;
     startDateFrom?: string;
     startDateTo?: string;
     status?: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
     venueId?: string;
  };
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  eventId: string;
};
```

##### parameters.path.eventId

```ts
eventId: string;
```

###### Description

Event ID

##### parameters.query?

```ts
optional query: {
  limit?: string;
  page?: string;
  startDateFrom?: string;
  startDateTo?: string;
  status?: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
  venueId?: string;
};
```

##### parameters.query.limit?

```ts
optional limit: string;
```

###### Description

Items per page (max 100)

##### parameters.query.page?

```ts
optional page: string;
```

###### Description

Page number

##### parameters.query.startDateFrom?

```ts
optional startDateFrom: string;
```

###### Description

Filter occurrences starting from this date

##### parameters.query.startDateTo?

```ts
optional startDateTo: string;
```

###### Description

Filter occurrences starting until this date

##### parameters.query.status?

```ts
optional status: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
```

###### Description

Filter by status

##### parameters.query.venueId?

```ts
optional venueId: string;
```

###### Description

Filter by venue ID

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Event occurrences retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.eventOccurrences

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

##### responses.200.content.application/json.pagination

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

##### responses.200.content.application/json.pagination.hasNext

```ts
hasNext: boolean;
```

###### Example

```ts
true
```

##### responses.200.content.application/json.pagination.hasPrev

```ts
hasPrev: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.pagination.limit

```ts
limit: number;
```

###### Example

```ts
20
```

##### responses.200.content.application/json.pagination.page

```ts
page: number;
```

###### Example

```ts
1
```

##### responses.200.content.application/json.pagination.total

```ts
total: number;
```

###### Example

```ts
45
```

##### responses.200.content.application/json.pagination.totalPages

```ts
totalPages: number;
```

###### Example

```ts
3
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### listEventPriceSchemes

```ts
listEventPriceSchemes: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        eventId: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:5259

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     eventId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  eventId: string;
};
```

##### parameters.path.eventId

```ts
eventId: string;
```

###### Description

Event ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Price schemes retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.priceSchemes

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

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### listEvents

```ts
listEvents: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: {
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
     };
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:4157

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: {
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
  };
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: {
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
};
```

##### parameters.query.accountId?

```ts
optional accountId: string;
```

###### Description

Filter by account ID

##### parameters.query.expand?

```ts
optional expand: string;
```

###### Description

Comma-separated list of fields to expand. Available: venue

##### parameters.query.limit?

```ts
optional limit: string;
```

###### Description

Items per page (max 100)

##### parameters.query.page?

```ts
optional page: string;
```

###### Description

Page number

##### parameters.query.search?

```ts
optional search: string;
```

###### Description

Search events by name

##### parameters.query.status?

```ts
optional status: 
  | "draft"
  | "published"
  | "on_sale"
  | "sold_out"
  | "completed"
  | "cancelled";
```

###### Description

Filter by event status

##### parameters.query.venueId?

```ts
optional venueId: string;
```

###### Description

Filter by venue ID

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Events retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.events

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

##### responses.200.content.application/json.pagination

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

##### responses.200.content.application/json.pagination.hasNext

```ts
hasNext: boolean;
```

###### Example

```ts
true
```

##### responses.200.content.application/json.pagination.hasPrev

```ts
hasPrev: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.pagination.limit

```ts
limit: number;
```

###### Example

```ts
20
```

##### responses.200.content.application/json.pagination.page

```ts
page: number;
```

###### Example

```ts
1
```

##### responses.200.content.application/json.pagination.total

```ts
total: number;
```

###### Example

```ts
45
```

##### responses.200.content.application/json.pagination.totalPages

```ts
totalPages: number;
```

###### Example

```ts
3
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### listIdentityProviders

```ts
listIdentityProviders: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: {
        organisationId?: string;
     };
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:3055

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: {
     organisationId?: string;
  };
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: {
  organisationId?: string;
};
```

##### parameters.query.organisationId?

```ts
optional organisationId: string;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Identity providers retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.providers

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

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### listRoles

```ts
listRoles: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:3518

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Roles retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.roles

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

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### listUserAccountRoles

```ts
listUserAccountRoles: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:3810

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Role assignments retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.assignments

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

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### listUserAccountRolesByAccount

```ts
listUserAccountRolesByAccount: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        accountId: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:4099

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     accountId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  accountId: string;
};
```

##### parameters.path.accountId

```ts
accountId: string;
```

###### Description

Account ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Role assignments retrieved

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.assignments

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

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### listUserAccountRolesByUser

```ts
listUserAccountRolesByUser: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        userId: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:4041

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     userId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  userId: string;
};
```

##### parameters.path.userId

```ts
userId: string;
```

###### Description

User ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Role assignments retrieved

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.assignments

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

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### listUserInvitations

```ts
listUserInvitations: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: {
        organisationId?: string;
        status?: "pending" | "redeemed" | "expired" | "all";
     };
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:3230

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: {
     organisationId?: string;
     status?: "pending" | "redeemed" | "expired" | "all";
  };
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: {
  organisationId?: string;
  status?: "pending" | "redeemed" | "expired" | "all";
};
```

##### parameters.query.organisationId?

```ts
optional organisationId: string;
```

##### parameters.query.status?

```ts
optional status: "pending" | "redeemed" | "expired" | "all";
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Invitations retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.invitations

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

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### listVenueLayouts

```ts
listVenueLayouts: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: {
        accountId?: string;
        limit?: string;
        page?: string;
        search?: string;
        status?: "active" | "archived";
     };
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
              }[];
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:6105

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: {
     accountId?: string;
     limit?: string;
     page?: string;
     search?: string;
     status?: "active" | "archived";
  };
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.query?

```ts
optional query: {
  accountId?: string;
  limit?: string;
  page?: string;
  search?: string;
  status?: "active" | "archived";
};
```

##### parameters.query.accountId?

```ts
optional accountId: string;
```

###### Description

Filter by account ID

##### parameters.query.limit?

```ts
optional limit: string;
```

###### Description

Items per page (max 100)

##### parameters.query.page?

```ts
optional page: string;
```

###### Description

Page number

##### parameters.query.search?

```ts
optional search: string;
```

###### Description

Search layouts by name

##### parameters.query.status?

```ts
optional status: "active" | "archived";
```

###### Description

Filter by layout status

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
           }[];
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
        }[];
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Venue layouts retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
     }[];
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
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
  }[];
};
```

##### responses.200.content.application/json.pagination

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

##### responses.200.content.application/json.pagination.hasNext

```ts
hasNext: boolean;
```

###### Example

```ts
true
```

##### responses.200.content.application/json.pagination.hasPrev

```ts
hasPrev: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.pagination.limit

```ts
limit: number;
```

###### Example

```ts
20
```

##### responses.200.content.application/json.pagination.page

```ts
page: number;
```

###### Example

```ts
1
```

##### responses.200.content.application/json.pagination.total

```ts
total: number;
```

###### Example

```ts
45
```

##### responses.200.content.application/json.pagination.totalPages

```ts
totalPages: number;
```

###### Example

```ts
3
```

##### responses.200.content.application/json.venueLayouts

```ts
venueLayouts: {
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
}[];
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### listVenues

```ts
listVenues: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: {
        accountId?: string;
        limit?: string;
        page?: string;
        search?: string;
        status?: "active" | "archived";
     };
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:5634

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: {
     accountId?: string;
     limit?: string;
     page?: string;
     search?: string;
     status?: "active" | "archived";
  };
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: {
  accountId?: string;
  limit?: string;
  page?: string;
  search?: string;
  status?: "active" | "archived";
};
```

##### parameters.query.accountId?

```ts
optional accountId: string;
```

###### Description

Filter by account ID

##### parameters.query.limit?

```ts
optional limit: string;
```

###### Description

Items per page (max 100)

##### parameters.query.page?

```ts
optional page: string;
```

###### Description

Page number

##### parameters.query.search?

```ts
optional search: string;
```

###### Description

Search venues by name

##### parameters.query.status?

```ts
optional status: "active" | "archived";
```

###### Description

Filter by venue status

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Venues retrieved successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.pagination

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

##### responses.200.content.application/json.pagination.hasNext

```ts
hasNext: boolean;
```

###### Example

```ts
true
```

##### responses.200.content.application/json.pagination.hasPrev

```ts
hasPrev: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.pagination.limit

```ts
limit: number;
```

###### Example

```ts
20
```

##### responses.200.content.application/json.pagination.page

```ts
page: number;
```

###### Example

```ts
1
```

##### responses.200.content.application/json.pagination.total

```ts
total: number;
```

###### Example

```ts
45
```

##### responses.200.content.application/json.pagination.totalPages

```ts
totalPages: number;
```

###### Example

```ts
3
```

##### responses.200.content.application/json.venues

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

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### login

```ts
login: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           email: string;
           password: string;
        };
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
              accessToken: string;
              refreshToken: string;
              user: {
                 email: string;
                 firstName?: string;
                 id: string;
                 lastName?: string;
              };
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:2152

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        email: string;
        password: string;
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     email: string;
     password: string;
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  email: string;
  password: string;
};
```

##### requestBody.content.application/json.email

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

##### requestBody.content.application/json.password

```ts
password: string;
```

###### Description

User password

###### Example

```ts
password123
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           accessToken: string;
           refreshToken: string;
           user: {
              email: string;
              firstName?: string;
              id: string;
              lastName?: string;
           };
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        accessToken: string;
        refreshToken: string;
        user: {
           email: string;
           firstName?: string;
           id: string;
           lastName?: string;
        };
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Login successful

##### responses.200.content

```ts
content: {
  application/json: {
     accessToken: string;
     refreshToken: string;
     user: {
        email: string;
        firstName?: string;
        id: string;
        lastName?: string;
     };
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.accessToken

```ts
accessToken: string;
```

###### Description

JWT access token

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

##### responses.200.content.application/json.refreshToken

```ts
refreshToken: string;
```

###### Description

JWT refresh token

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

##### responses.200.content.application/json.user

```ts
user: {
  email: string;
  firstName?: string;
  id: string;
  lastName?: string;
};
```

##### responses.200.content.application/json.user.email

```ts
email: string;
```

##### responses.200.content.application/json.user.firstName?

```ts
optional firstName: string;
```

##### responses.200.content.application/json.user.id

```ts
id: string;
```

##### responses.200.content.application/json.user.lastName?

```ts
optional lastName: string;
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### redeem

```ts
redeem: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           code: string;
           password: string;
        };
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
              accessToken: string;
              refreshToken: string;
              user: {
                 email: string;
                 firstName?: string;
                 id: string;
                 lastName?: string;
              };
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:2270

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        code: string;
        password: string;
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     code: string;
     password: string;
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  code: string;
  password: string;
};
```

##### requestBody.content.application/json.code

```ts
code: string;
```

###### Description

Invitation code received via email

###### Example

```ts
INV-1234567890
```

##### requestBody.content.application/json.password

```ts
password: string;
```

###### Description

New password for the account (minimum 8 characters)

###### Example

```ts
securePassword123
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           accessToken: string;
           refreshToken: string;
           user: {
              email: string;
              firstName?: string;
              id: string;
              lastName?: string;
           };
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        accessToken: string;
        refreshToken: string;
        user: {
           email: string;
           firstName?: string;
           id: string;
           lastName?: string;
        };
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Invitation redeemed successfully

##### responses.200.content

```ts
content: {
  application/json: {
     accessToken: string;
     refreshToken: string;
     user: {
        email: string;
        firstName?: string;
        id: string;
        lastName?: string;
     };
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.accessToken

```ts
accessToken: string;
```

###### Description

JWT access token

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

##### responses.200.content.application/json.refreshToken

```ts
refreshToken: string;
```

###### Description

JWT refresh token

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

##### responses.200.content.application/json.user

```ts
user: {
  email: string;
  firstName?: string;
  id: string;
  lastName?: string;
};
```

##### responses.200.content.application/json.user.email

```ts
email: string;
```

##### responses.200.content.application/json.user.firstName?

```ts
optional firstName: string;
```

##### responses.200.content.application/json.user.id

```ts
id: string;
```

##### responses.200.content.application/json.user.lastName?

```ts
optional lastName: string;
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### refresh

```ts
refresh: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           refreshToken: string;
        };
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
              accessToken: string;
              refreshToken: string;
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:2211

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        refreshToken: string;
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     refreshToken: string;
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  refreshToken: string;
};
```

##### requestBody.content.application/json.refreshToken

```ts
refreshToken: string;
```

###### Description

Refresh token from previous login

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           accessToken: string;
           refreshToken: string;
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        accessToken: string;
        refreshToken: string;
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Token refreshed successfully

##### responses.200.content

```ts
content: {
  application/json: {
     accessToken: string;
     refreshToken: string;
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
  accessToken: string;
  refreshToken: string;
};
```

##### responses.200.content.application/json.accessToken

```ts
accessToken: string;
```

###### Description

New JWT access token

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

##### responses.200.content.application/json.refreshToken

```ts
refreshToken: string;
```

###### Description

New JWT refresh token

###### Example

```ts
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### removeRoleAssignment

```ts
removeRoleAssignment: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
              success: boolean;
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:3983

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Role assignment ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           success: boolean;
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        success: boolean;
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Role assignment removed

##### responses.200.content

```ts
content: {
  application/json: {
     success: boolean;
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
  success: boolean;
};
```

##### responses.200.content.application/json.success

```ts
success: boolean;
```

###### Example

```ts
true
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### resendUserInvitation

```ts
resendUserInvitation: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: undefined;
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:3461

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: undefined;
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Invitation resent successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.invitation

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

##### responses.200.content.application/json.invitation.code

```ts
code: string;
```

###### Example

```ts
inv_BvQ8mK...
```

##### responses.200.content.application/json.invitation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-01T00:00:00.000Z
```

##### responses.200.content.application/json.invitation.email

```ts
email: string;
```

Format: email

###### Example

```ts
newuser@example.com
```

##### responses.200.content.application/json.invitation.expiresAt

```ts
expiresAt: string;
```

###### Example

```ts
2024-01-08T00:00:00.000Z
```

##### responses.200.content.application/json.invitation.id

```ts
id: string;
```

###### Example

```ts
inv_abc123
```

##### responses.200.content.application/json.invitation.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.invitation.redeemedAt

```ts
redeemedAt: string | null;
```

###### Example

```ts
null
```

##### responses.200.content.application/json.invitation.userId

```ts
userId: string;
```

###### Example

```ts
usr_pending123
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### syncSeatsInArea

```ts
syncSeatsInArea: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        areaId: string;
        id: string;
        layoutId: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           clearExisting?: boolean;
           seats: {
              attributes?: (
                 | "accessible"
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
                | "center")[];
              categoryId?: string;
              companionSeats?: string[];
              companionTo?: string;
              holdType?: string;
              id?: string;
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
           }[];
        };
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:8106

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     areaId: string;
     id: string;
     layoutId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  areaId: string;
  id: string;
  layoutId: string;
};
```

##### parameters.path.areaId

```ts
areaId: string;
```

###### Description

Area ID

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.path.layoutId

```ts
layoutId: string;
```

###### Description

Layout ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        clearExisting?: boolean;
        seats: {
           attributes?: (
              | "accessible"
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
             | "center")[];
           categoryId?: string;
           companionSeats?: string[];
           companionTo?: string;
           holdType?: string;
           id?: string;
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
        }[];
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     clearExisting?: boolean;
     seats: {
        attributes?: (
           | "accessible"
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
          | "center")[];
        categoryId?: string;
        companionSeats?: string[];
        companionTo?: string;
        holdType?: string;
        id?: string;
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
     }[];
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  clearExisting?: boolean;
  seats: {
     attributes?: (
        | "accessible"
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
       | "center")[];
     categoryId?: string;
     companionSeats?: string[];
     companionTo?: string;
     holdType?: string;
     id?: string;
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
  }[];
};
```

##### requestBody.content.application/json.clearExisting?

```ts
optional clearExisting: boolean;
```

###### Description

Whether to clear existing seats before syncing (default: true)

###### Default

```ts
true
```

###### Example

```ts
true
```

##### requestBody.content.application/json.seats

```ts
seats: {
  attributes?: (
     | "accessible"
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
    | "center")[];
  categoryId?: string;
  companionSeats?: string[];
  companionTo?: string;
  holdType?: string;
  id?: string;
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
}[];
```

###### Description

Array of seats to sync

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Seats synced successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.seats

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

##### responses.200.content.application/json.seatsSynced

```ts
seatsSynced: number;
```

###### Example

```ts
150
```

##### responses.200.content.application/json.venueLayout?

```ts
optional venueLayout: unknown;
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### updateAccount

```ts
updateAccount: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           name?: string;
           status?: "active" | "inactive";
        };
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:2981

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Account ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        name?: string;
        status?: "active" | "inactive";
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     name?: string;
     status?: "active" | "inactive";
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  name?: string;
  status?: "active" | "inactive";
};
```

##### requestBody.content.application/json.name?

```ts
optional name: string;
```

###### Description

Account name

###### Example

```ts
Updated Account Name
```

##### requestBody.content.application/json.status?

```ts
optional status: "active" | "inactive";
```

###### Description

Account status

###### Example

```ts
active
@enum {string}
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Account updated successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.account

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

##### responses.200.content.application/json.account.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### responses.200.content.application/json.account.id

```ts
id: string;
```

###### Example

```ts
acc_abc123
```

##### responses.200.content.application/json.account.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.account.name

```ts
name: string;
```

###### Example

```ts
Main Account
```

##### responses.200.content.application/json.account.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.account.status

```ts
status: "active" | "inactive";
```

###### Example

```ts
active
@enum {string}
```

##### responses.200.content.application/json.account.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### updateEvent

```ts
updateEvent: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           description?: string | null;
           layout?: {
              areas?: {
                 capacity: number;
                 categoryId?: ... | ...;
                 description?: ... | ...;
                 displayOrder?: ... | ...;
                 id?: ... | ...;
                 name: string;
                 type: ... | ...;
              }[];
              categories?: {
                 color?: ... | ...;
                 description?: ... | ...;
                 displayOrder?: ... | ...;
                 id?: ... | ...;
                 name: string;
              }[];
              venueLayoutTemplateId?: string;
           };
           name?: string;
           offSaleDate?: string | null;
           onSaleDate?: string | null;
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
           venueId?: string | null;
           venueName?: string | null;
        };
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:4575

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Event ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        description?: string | null;
        layout?: {
           areas?: {
              capacity: number;
              categoryId?: ... | ...;
              description?: ... | ...;
              displayOrder?: ... | ...;
              id?: ... | ...;
              name: string;
              type: ... | ...;
           }[];
           categories?: {
              color?: ... | ...;
              description?: ... | ...;
              displayOrder?: ... | ...;
              id?: ... | ...;
              name: string;
           }[];
           venueLayoutTemplateId?: string;
        };
        name?: string;
        offSaleDate?: string | null;
        onSaleDate?: string | null;
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
        venueId?: string | null;
        venueName?: string | null;
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     description?: string | null;
     layout?: {
        areas?: {
           capacity: number;
           categoryId?: ... | ...;
           description?: ... | ...;
           displayOrder?: ... | ...;
           id?: ... | ...;
           name: string;
           type: ... | ...;
        }[];
        categories?: {
           color?: ... | ...;
           description?: ... | ...;
           displayOrder?: ... | ...;
           id?: ... | ...;
           name: string;
        }[];
        venueLayoutTemplateId?: string;
     };
     name?: string;
     offSaleDate?: string | null;
     onSaleDate?: string | null;
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
     venueId?: string | null;
     venueName?: string | null;
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  description?: string | null;
  layout?: {
     areas?: {
        capacity: number;
        categoryId?: ... | ...;
        description?: ... | ...;
        displayOrder?: ... | ...;
        id?: ... | ...;
        name: string;
        type: ... | ...;
     }[];
     categories?: {
        color?: ... | ...;
        description?: ... | ...;
        displayOrder?: ... | ...;
        id?: ... | ...;
        name: string;
     }[];
     venueLayoutTemplateId?: string;
  };
  name?: string;
  offSaleDate?: string | null;
  onSaleDate?: string | null;
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
  venueId?: string | null;
  venueName?: string | null;
};
```

##### requestBody.content.application/json.description?

```ts
optional description: string | null;
```

###### Description

Event description

###### Example

```ts
Updated description
```

##### requestBody.content.application/json.layout?

```ts
optional layout: {
  areas?: {
     capacity: number;
     categoryId?: ... | ...;
     description?: ... | ...;
     displayOrder?: ... | ...;
     id?: ... | ...;
     name: string;
     type: ... | ...;
  }[];
  categories?: {
     color?: ... | ...;
     description?: ... | ...;
     displayOrder?: ... | ...;
     id?: ... | ...;
     name: string;
  }[];
  venueLayoutTemplateId?: string;
};
```

###### Description

Event layout with categories and capacity areas

##### requestBody.content.application/json.layout.areas?

```ts
optional areas: {
  capacity: number;
  categoryId?: ... | ...;
  description?: ... | ...;
  displayOrder?: ... | ...;
  id?: ... | ...;
  name: string;
  type: ... | ...;
}[];
```

###### Description

Capacity areas (GA and/or allocated)

###### Default

```ts
[]
```

##### requestBody.content.application/json.layout.categories?

```ts
optional categories: {
  color?: ... | ...;
  description?: ... | ...;
  displayOrder?: ... | ...;
  id?: ... | ...;
  name: string;
}[];
```

###### Description

Pricing categories for this event

###### Default

```ts
[]
```

##### requestBody.content.application/json.layout.venueLayoutTemplateId?

```ts
optional venueLayoutTemplateId: string;
```

###### Description

Source venue layout template ID (if imported)

###### Example

```ts
vlt_abc123
```

##### requestBody.content.application/json.name?

```ts
optional name: string;
```

###### Description

Event name

###### Example

```ts
Updated Festival Name
```

##### requestBody.content.application/json.offSaleDate?

```ts
optional offSaleDate: string | null;
```

Format: date-time

###### Description

When sales close

###### Example

```ts
2025-06-15T23:59:59Z
```

##### requestBody.content.application/json.onSaleDate?

```ts
optional onSaleDate: string | null;
```

Format: date-time

###### Description

When tickets go on sale

###### Example

```ts
2025-06-01T09:00:00Z
```

##### requestBody.content.application/json.status?

```ts
optional status: 
  | "draft"
  | "published"
  | "on_sale"
  | "sold_out"
  | "completed"
  | "cancelled";
```

###### Description

Event status

###### Example

```ts
published
@enum {string}
```

##### requestBody.content.application/json.tags?

```ts
optional tags: string[];
```

###### Description

Event tags

###### Example

```ts
[
      "music",
      "festival"
    ]
```

##### requestBody.content.application/json.ticketTypes?

```ts
optional ticketTypes: {
  description?: string;
  displayOrder: number;
  id?: string;
  name: string;
}[];
```

###### Description

Ticket types for this event

##### requestBody.content.application/json.timezone?

```ts
optional timezone: string;
```

###### Description

Event timezone

###### Example

```ts
Europe/London
```

##### requestBody.content.application/json.venueId?

```ts
optional venueId: string | null;
```

###### Description

Venue ID (link to formal venue)

###### Example

```ts
vnu_def456
```

##### requestBody.content.application/json.venueName?

```ts
optional venueName: string | null;
```

###### Description

Venue name (text-only, alternative to venueId)

###### Example

```ts
Wembley Stadium
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Event updated successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.event

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

##### responses.200.content.application/json.event.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### responses.200.content.application/json.event.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### responses.200.content.application/json.event.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### responses.200.content.application/json.event.description?

```ts
optional description: string;
```

###### Example

```ts
A three-day music festival
```

##### responses.200.content.application/json.event.id

```ts
id: string;
```

###### Example

```ts
evt_abc123
```

##### responses.200.content.application/json.event.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.event.name

```ts
name: string;
```

###### Example

```ts
Summer Music Festival
```

##### responses.200.content.application/json.event.occurrenceCount

```ts
occurrenceCount: number;
```

###### Example

```ts
3
```

##### responses.200.content.application/json.event.offSaleDate?

```ts
optional offSaleDate: string;
```

###### Example

```ts
2025-06-15T23:59:59Z
```

##### responses.200.content.application/json.event.onSaleDate?

```ts
optional onSaleDate: string;
```

###### Example

```ts
2025-06-01T09:00:00Z
```

##### responses.200.content.application/json.event.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.event.productCount

```ts
productCount: number;
```

###### Example

```ts
0
```

##### responses.200.content.application/json.event.status

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

##### responses.200.content.application/json.event.tags

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

##### responses.200.content.application/json.event.ticketCount

```ts
ticketCount: number;
```

###### Example

```ts
0
```

##### responses.200.content.application/json.event.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### responses.200.content.application/json.event.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### responses.200.content.application/json.event.venueId?

```ts
optional venueId: string;
```

###### Example

```ts
vnu_ghi789
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### updateEventOccurrence

```ts
updateEventOccurrence: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        eventId: string;
        occurrenceId: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           categoryMapping?:   | {
              enabled?: boolean;
              ticketCategoryId: string;
              venueLayoutCategoryId: string;
            }[]
              | null;
           endDate?: string;
           endTime?: string;
           priceSchemeId?: string | null;
           startDate?: string;
           startTime?: string;
           status?: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
           ticketSchemeId?: string | null;
           timezone?: string;
           venueId?: string | null;
           venueLayoutId?: string | null;
        };
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:5122

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     eventId: string;
     occurrenceId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  eventId: string;
  occurrenceId: string;
};
```

##### parameters.path.eventId

```ts
eventId: string;
```

###### Description

Event ID

##### parameters.path.occurrenceId

```ts
occurrenceId: string;
```

###### Description

Occurrence ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        categoryMapping?:   | {
           enabled?: boolean;
           ticketCategoryId: string;
           venueLayoutCategoryId: string;
         }[]
           | null;
        endDate?: string;
        endTime?: string;
        priceSchemeId?: string | null;
        startDate?: string;
        startTime?: string;
        status?: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
        ticketSchemeId?: string | null;
        timezone?: string;
        venueId?: string | null;
        venueLayoutId?: string | null;
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     categoryMapping?:   | {
        enabled?: boolean;
        ticketCategoryId: string;
        venueLayoutCategoryId: string;
      }[]
        | null;
     endDate?: string;
     endTime?: string;
     priceSchemeId?: string | null;
     startDate?: string;
     startTime?: string;
     status?: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
     ticketSchemeId?: string | null;
     timezone?: string;
     venueId?: string | null;
     venueLayoutId?: string | null;
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  categoryMapping?:   | {
     enabled?: boolean;
     ticketCategoryId: string;
     venueLayoutCategoryId: string;
   }[]
     | null;
  endDate?: string;
  endTime?: string;
  priceSchemeId?: string | null;
  startDate?: string;
  startTime?: string;
  status?: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
  ticketSchemeId?: string | null;
  timezone?: string;
  venueId?: string | null;
  venueLayoutId?: string | null;
};
```

##### requestBody.content.application/json.categoryMapping?

```ts
optional categoryMapping: 
  | {
  enabled?: boolean;
  ticketCategoryId: string;
  venueLayoutCategoryId: string;
}[]
  | null;
```

###### Description

Category mapping for template mode ticket schemes

##### requestBody.content.application/json.endDate?

```ts
optional endDate: string;
```

Format: date-time

###### Description

End date (ISO date)

###### Example

```ts
2025-06-15T00:00:00Z
```

##### requestBody.content.application/json.endTime?

```ts
optional endTime: string;
```

###### Description

End time (HH:mm:ss)

###### Example

```ts
23:00:00
```

##### requestBody.content.application/json.priceSchemeId?

```ts
optional priceSchemeId: string | null;
```

###### Description

Price scheme to use (must belong to the ticket scheme)

###### Example

```ts
tps_def456
```

##### requestBody.content.application/json.startDate?

```ts
optional startDate: string;
```

Format: date-time

###### Description

Start date (ISO date)

###### Example

```ts
2025-06-15T00:00:00Z
```

##### requestBody.content.application/json.startTime?

```ts
optional startTime: string;
```

###### Description

Start time (HH:mm:ss)

###### Example

```ts
19:00:00
```

##### requestBody.content.application/json.status?

```ts
optional status: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
```

###### Description

Occurrence status

###### Example

```ts
on_sale
@enum {string}
```

##### requestBody.content.application/json.ticketSchemeId?

```ts
optional ticketSchemeId: string | null;
```

###### Description

Ticket scheme to use for this occurrence

###### Example

```ts
tsc_abc123
```

##### requestBody.content.application/json.timezone?

```ts
optional timezone: string;
```

###### Description

Occurrence timezone

###### Example

```ts
Europe/London
```

##### requestBody.content.application/json.venueId?

```ts
optional venueId: string | null;
```

###### Description

Venue ID

###### Example

```ts
vnu_ghi789
```

##### requestBody.content.application/json.venueLayoutId?

```ts
optional venueLayoutId: string | null;
```

###### Description

Venue layout ID

###### Example

```ts
vnl_jkl012
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Event occurrence updated successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.eventOccurrence

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

##### responses.200.content.application/json.eventOccurrence.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### responses.200.content.application/json.eventOccurrence.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### responses.200.content.application/json.eventOccurrence.endDate

```ts
endDate: string;
```

###### Example

```ts
2025-06-15T00:00:00Z
```

##### responses.200.content.application/json.eventOccurrence.endTime

```ts
endTime: string;
```

###### Example

```ts
23:00:00
```

##### responses.200.content.application/json.eventOccurrence.eventId

```ts
eventId: string;
```

###### Example

```ts
evt_ghi789
```

##### responses.200.content.application/json.eventOccurrence.id

```ts
id: string;
```

###### Example

```ts
eoc_abc123
```

##### responses.200.content.application/json.eventOccurrence.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.eventOccurrence.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.eventOccurrence.startDate

```ts
startDate: string;
```

###### Example

```ts
2025-06-15T00:00:00Z
```

##### responses.200.content.application/json.eventOccurrence.startTime

```ts
startTime: string;
```

###### Example

```ts
19:00:00
```

##### responses.200.content.application/json.eventOccurrence.status

```ts
status: "draft" | "on_sale" | "sold_out" | "completed" | "cancelled";
```

###### Example

```ts
draft
@enum {string}
```

##### responses.200.content.application/json.eventOccurrence.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### responses.200.content.application/json.eventOccurrence.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### responses.200.content.application/json.eventOccurrence.venueId?

```ts
optional venueId: string;
```

###### Example

```ts
vnu_abc123
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### updateEventPriceScheme

```ts
updateEventPriceScheme: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        eventId: string;
        priceSchemeId: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           description?: string | null;
           name?: string;
           status?: "active" | "draft" | "archived";
           ticketPrices?: {
              categoryId: string;
              currency?: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
              price: number;
              typeId: string;
           }[];
        };
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:5539

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     eventId: string;
     priceSchemeId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  eventId: string;
  priceSchemeId: string;
};
```

##### parameters.path.eventId

```ts
eventId: string;
```

###### Description

Event ID

##### parameters.path.priceSchemeId

```ts
priceSchemeId: string;
```

###### Description

Price scheme ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        description?: string | null;
        name?: string;
        status?: "active" | "draft" | "archived";
        ticketPrices?: {
           categoryId: string;
           currency?: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
           price: number;
           typeId: string;
        }[];
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     description?: string | null;
     name?: string;
     status?: "active" | "draft" | "archived";
     ticketPrices?: {
        categoryId: string;
        currency?: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
        price: number;
        typeId: string;
     }[];
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  description?: string | null;
  name?: string;
  status?: "active" | "draft" | "archived";
  ticketPrices?: {
     categoryId: string;
     currency?: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
     price: number;
     typeId: string;
  }[];
};
```

##### requestBody.content.application/json.description?

```ts
optional description: string | null;
```

###### Description

Price scheme description

###### Example

```ts
Updated description
```

##### requestBody.content.application/json.name?

```ts
optional name: string;
```

###### Description

Price scheme name

###### Example

```ts
Updated Pricing
```

##### requestBody.content.application/json.status?

```ts
optional status: "active" | "draft" | "archived";
```

###### Description

Price scheme status

###### Example

```ts
active
@enum {string}
```

##### requestBody.content.application/json.ticketPrices?

```ts
optional ticketPrices: {
  categoryId: string;
  currency?: "GBP" | "USD" | "EUR" | "AUD" | "CAD";
  price: number;
  typeId: string;
}[];
```

###### Description

Price matrix entries

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Price scheme updated successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.priceScheme

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

##### responses.200.content.application/json.priceScheme.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### responses.200.content.application/json.priceScheme.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### responses.200.content.application/json.priceScheme.description?

```ts
optional description: string;
```

###### Example

```ts
Default pricing for all shows
```

##### responses.200.content.application/json.priceScheme.eventId

```ts
eventId: string;
```

###### Example

```ts
evt_ghi789
```

##### responses.200.content.application/json.priceScheme.id

```ts
id: string;
```

###### Example

```ts
tps_abc123
```

##### responses.200.content.application/json.priceScheme.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.priceScheme.name

```ts
name: string;
```

###### Example

```ts
Standard Pricing
```

##### responses.200.content.application/json.priceScheme.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.priceScheme.parentPriceSchemeId?

```ts
optional parentPriceSchemeId: string;
```

###### Example

```ts
tps_parent123
```

##### responses.200.content.application/json.priceScheme.status

```ts
status: "active" | "draft" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### responses.200.content.application/json.priceScheme.ticketPrices

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

##### responses.200.content.application/json.priceScheme.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### updateIdentityProvider

```ts
updateIdentityProvider: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
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
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:3169

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
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
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
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
};
```

##### requestBody.content.application/json

```ts
application/json: {
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

##### requestBody.content.application/json.allowedClientIds?

```ts
optional allowedClientIds: string[];
```

###### Example

```ts
[
      "backstage-app"
    ]
```

##### requestBody.content.application/json.cacheTtl?

```ts
optional cacheTtl: number;
```

###### Example

```ts
600
```

##### requestBody.content.application/json.configuration?

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

##### requestBody.content.application/json.emailDomain?

```ts
optional emailDomain: string | null;
```

###### Example

```ts
@example.com
```

##### requestBody.content.application/json.isDefault?

```ts
optional isDefault: boolean;
```

###### Example

```ts
false
```

##### requestBody.content.application/json.isEnabled?

```ts
optional isEnabled: boolean;
```

###### Example

```ts
true
```

##### requestBody.content.application/json.scopes?

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

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Identity provider updated successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.provider

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

##### responses.200.content.application/json.provider.allowedClientIds

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

##### responses.200.content.application/json.provider.authorizationEndpoint

```ts
authorizationEndpoint: string | null;
```

###### Example

```ts
https://stagedoor.example.com/api/oauth/authorize
```

##### responses.200.content.application/json.provider.cacheTtl

```ts
cacheTtl: number;
```

###### Example

```ts
300
```

##### responses.200.content.application/json.provider.clientId

```ts
clientId: string | null;
```

###### Example

```ts
backstage-app
```

##### responses.200.content.application/json.provider.configuration

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

##### responses.200.content.application/json.provider.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-01T00:00:00.000Z
```

##### responses.200.content.application/json.provider.emailDomain

```ts
emailDomain: string | null;
```

###### Example

```ts
@example.com
```

##### responses.200.content.application/json.provider.id

```ts
id: string;
```

###### Example

```ts
stagedoor-idp
```

##### responses.200.content.application/json.provider.isDefault

```ts
isDefault: boolean;
```

###### Example

```ts
true
```

##### responses.200.content.application/json.provider.isEnabled

```ts
isEnabled: boolean;
```

###### Example

```ts
true
```

##### responses.200.content.application/json.provider.issuer

```ts
issuer: string;
```

###### Example

```ts
https://stagedoor.example.com
```

##### responses.200.content.application/json.provider.jwksUri

```ts
jwksUri: string;
```

###### Example

```ts
https://stagedoor.example.com/.well-known/jwks.json
```

##### responses.200.content.application/json.provider.jwksUriInternal

```ts
jwksUriInternal: string | null;
```

###### Example

```ts
http://stagedoor:3000/.well-known/jwks.json
```

##### responses.200.content.application/json.provider.organisationId

```ts
organisationId: string | null;
```

###### Example

```ts
org_abc123
```

##### responses.200.content.application/json.provider.providerType

```ts
providerType: string;
```

###### Example

```ts
stagedoor
```

##### responses.200.content.application/json.provider.scopes

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

##### responses.200.content.application/json.provider.supportsPkce

```ts
supportsPkce: boolean;
```

###### Example

```ts
true
```

##### responses.200.content.application/json.provider.tokenEndpoint

```ts
tokenEndpoint: string | null;
```

###### Example

```ts
https://stagedoor.example.com/api/oauth/token
```

##### responses.200.content.application/json.provider.tokenEndpointInternal

```ts
tokenEndpointInternal: string | null;
```

###### Example

```ts
http://stagedoor:3000/api/oauth/token
```

##### responses.200.content.application/json.provider.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-01T00:00:00.000Z
```

##### responses.200.content.application/json.provider.userinfoEndpoint

```ts
userinfoEndpoint: string | null;
```

###### Example

```ts
https://stagedoor.example.com/api/oauth/userinfo
```

##### responses.200.content.application/json.provider.userinfoEndpointInternal

```ts
userinfoEndpointInternal: string | null;
```

###### Example

```ts
http://stagedoor:3000/api/oauth/userinfo
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### updateOrganisation

```ts
updateOrganisation: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           logoUrl?: string;
           metadata?: {
            [key: string]: unknown;
           };
           name?: string;
           primaryColor?: string;
           secondaryColor?: string;
        };
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:2671

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Organisation ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        logoUrl?: string;
        metadata?: {
         [key: string]: unknown;
        };
        name?: string;
        primaryColor?: string;
        secondaryColor?: string;
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     logoUrl?: string;
     metadata?: {
      [key: string]: unknown;
     };
     name?: string;
     primaryColor?: string;
     secondaryColor?: string;
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  logoUrl?: string;
  metadata?: {
   [key: string]: unknown;
  };
  name?: string;
  primaryColor?: string;
  secondaryColor?: string;
};
```

##### requestBody.content.application/json.logoUrl?

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

##### requestBody.content.application/json.metadata?

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

##### requestBody.content.application/json.name?

```ts
optional name: string;
```

###### Description

Organisation name

###### Example

```ts
Acme Corporation
```

##### requestBody.content.application/json.primaryColor?

```ts
optional primaryColor: string;
```

###### Description

Primary brand color (hex format)

###### Example

```ts
#FF5733
```

##### requestBody.content.application/json.secondaryColor?

```ts
optional secondaryColor: string;
```

###### Description

Secondary brand color (hex format)

###### Example

```ts
#3366FF
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Organisation updated successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.organisation

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

##### responses.200.content.application/json.organisation.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### responses.200.content.application/json.organisation.id

```ts
id: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.organisation.logoUrl?

```ts
optional logoUrl: string;
```

###### Example

```ts
https://example.com/logo.png
```

##### responses.200.content.application/json.organisation.metadata?

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

##### responses.200.content.application/json.organisation.name

```ts
name: string;
```

###### Example

```ts
Acme Corporation
```

##### responses.200.content.application/json.organisation.primaryColor?

```ts
optional primaryColor: string;
```

###### Example

```ts
#FF5733
```

##### responses.200.content.application/json.organisation.secondaryColor?

```ts
optional secondaryColor: string;
```

###### Example

```ts
#3366FF
```

##### responses.200.content.application/json.organisation.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### updateRole

```ts
updateRole: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           description?: string;
           name?: string;
           permissions?: string[];
        };
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:3748

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Role ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        description?: string;
        name?: string;
        permissions?: string[];
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     description?: string;
     name?: string;
     permissions?: string[];
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  description?: string;
  name?: string;
  permissions?: string[];
};
```

##### requestBody.content.application/json.description?

```ts
optional description: string;
```

###### Description

Optional description of the role

###### Example

```ts
Manages events and related resources
```

##### requestBody.content.application/json.name?

```ts
optional name: string;
```

###### Description

The name of the role

###### Example

```ts
Event Manager
```

##### requestBody.content.application/json.permissions?

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

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Role updated successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-01-15T10:30:00Z
```

##### responses.200.content.application/json.description

```ts
description: string | null;
```

###### Example

```ts
Manages events and related resources
```

##### responses.200.content.application/json.id

```ts
id: string;
```

###### Example

```ts
rol_abc123
```

##### responses.200.content.application/json.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.isSystemRole

```ts
isSystemRole: boolean;
```

###### Description

Whether this is a system-defined role (cannot be modified or deleted)

###### Example

```ts
false
```

##### responses.200.content.application/json.name

```ts
name: string;
```

###### Example

```ts
Event Manager
```

##### responses.200.content.application/json.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.permissions

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

##### responses.200.content.application/json.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-01-20T14:45:00Z
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### updateSeatInArea

```ts
updateSeatInArea: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        areaId: string;
        id: string;
        layoutId: string;
        seatId: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           attributes?: (
              | "accessible"
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
             | "center")[];
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
        };
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:8315

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     areaId: string;
     id: string;
     layoutId: string;
     seatId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  areaId: string;
  id: string;
  layoutId: string;
  seatId: string;
};
```

##### parameters.path.areaId

```ts
areaId: string;
```

###### Description

Area ID

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.path.layoutId

```ts
layoutId: string;
```

###### Description

Layout ID

##### parameters.path.seatId

```ts
seatId: string;
```

###### Description

Seat ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        attributes?: (
           | "accessible"
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
          | "center")[];
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
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     attributes?: (
        | "accessible"
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
       | "center")[];
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
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  attributes?: (
     | "accessible"
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
    | "center")[];
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
};
```

##### requestBody.content.application/json.attributes?

```ts
optional attributes: (
  | "accessible"
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
  | "center")[];
```

###### Description

Seat attributes

###### Example

```ts
[
      "aisle_right",
      "excellent_view"
    ]
```

##### requestBody.content.application/json.categoryId?

```ts
optional categoryId: string;
```

###### Description

Category ID for pricing

###### Example

```ts
vlc_premium
```

##### requestBody.content.application/json.companionSeats?

```ts
optional companionSeats: string[];
```

###### Description

IDs of companion seats (for wheelchair spaces)

###### Example

```ts
[
      "vlas_h9",
      "vlas_h10"
    ]
```

##### requestBody.content.application/json.companionTo?

```ts
optional companionTo: string;
```

###### Description

ID of wheelchair space this is companion to

###### Example

```ts
vlas_h8
```

##### requestBody.content.application/json.holdType?

```ts
optional holdType: string;
```

###### Description

Hold type if status is held

###### Example

```ts
promoter
```

##### requestBody.content.application/json.internalNotes?

```ts
optional internalNotes: string;
```

###### Description

Internal notes

###### Example

```ts
Next to sound booth
```

##### requestBody.content.application/json.label?

```ts
optional label: string;
```

###### Description

Display label (auto-generated if not provided)

###### Example

```ts
Orchestra Center, Row A, Seat 15
```

##### requestBody.content.application/json.number?

```ts
optional number: string;
```

###### Description

Seat number

###### Example

```ts
15
```

##### requestBody.content.application/json.position?

```ts
optional position: {
  rotation?: number;
  x: number;
  y: number;
};
```

##### requestBody.content.application/json.position.rotation?

```ts
optional rotation: number;
```

###### Description

0-359 degrees

###### Example

```ts
0
```

##### requestBody.content.application/json.position.x

```ts
x: number;
```

###### Description

X coordinate on map

###### Example

```ts
100.5
```

##### requestBody.content.application/json.position.y

```ts
y: number;
```

###### Description

Y coordinate on map

###### Example

```ts
200.5
```

##### requestBody.content.application/json.publicNotes?

```ts
optional publicNotes: string;
```

###### Description

Public notes shown to customers

###### Example

```ts
Best view of stage
```

##### requestBody.content.application/json.row?

```ts
optional row: string;
```

###### Description

Row identifier

###### Example

```ts
A
```

##### requestBody.content.application/json.section?

```ts
optional section: string;
```

###### Description

Section identifier

###### Example

```ts
Orchestra Center
```

##### requestBody.content.application/json.status?

```ts
optional status: "available" | "blocked" | "accessible" | "held" | "removed";
```

###### Description

Seat status

###### Example

```ts
available
@enum {string}
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Seat updated successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.seat

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

##### responses.200.content.application/json.seat.attributes?

```ts
optional attributes: string[];
```

##### responses.200.content.application/json.seat.categoryId?

```ts
optional categoryId: string;
```

###### Example

```ts
vlc_premium
```

##### responses.200.content.application/json.seat.companionSeats?

```ts
optional companionSeats: string[];
```

##### responses.200.content.application/json.seat.companionTo?

```ts
optional companionTo: string;
```

##### responses.200.content.application/json.seat.holdType?

```ts
optional holdType: string;
```

##### responses.200.content.application/json.seat.id

```ts
id: string;
```

###### Example

```ts
vlas_abc123
```

##### responses.200.content.application/json.seat.internalNotes?

```ts
optional internalNotes: string;
```

##### responses.200.content.application/json.seat.label

```ts
label: string;
```

###### Example

```ts
Orchestra Center, Row A, Seat 15
```

##### responses.200.content.application/json.seat.number

```ts
number: string;
```

###### Example

```ts
15
```

##### responses.200.content.application/json.seat.position?

```ts
optional position: {
  rotation?: number;
  x: number;
  y: number;
};
```

##### responses.200.content.application/json.seat.position.rotation?

```ts
optional rotation: number;
```

##### responses.200.content.application/json.seat.position.x

```ts
x: number;
```

##### responses.200.content.application/json.seat.position.y

```ts
y: number;
```

##### responses.200.content.application/json.seat.publicNotes?

```ts
optional publicNotes: string;
```

##### responses.200.content.application/json.seat.row

```ts
row: string;
```

###### Example

```ts
A
```

##### responses.200.content.application/json.seat.section?

```ts
optional section: string;
```

###### Example

```ts
Orchestra Center
```

##### responses.200.content.application/json.seat.status

```ts
status: "available" | "blocked" | "accessible" | "held" | "removed";
```

###### Example

```ts
available
@enum {string}
```

##### responses.200.content.application/json.venueLayout?

```ts
optional venueLayout: unknown;
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### updateUserAccountRoles

```ts
updateUserAccountRoles: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path?: undefined;
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           accountId: string;
           roleIds: string[];
           userId: string;
        };
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:3865

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path?: undefined;
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path?

```ts
optional path: undefined;
```

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        accountId: string;
        roleIds: string[];
        userId: string;
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     accountId: string;
     roleIds: string[];
     userId: string;
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  accountId: string;
  roleIds: string[];
  userId: string;
};
```

##### requestBody.content.application/json.accountId

```ts
accountId: string;
```

###### Description

Account ID

###### Example

```ts
acc_abc123
```

##### requestBody.content.application/json.roleIds

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

##### requestBody.content.application/json.userId

```ts
userId: string;
```

###### Description

User ID

###### Example

```ts
usr_abc123
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Roles updated successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.assignments

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

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### updateVenue

```ts
updateVenue: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           coordinates?:   | {
              latitude: number;
              longitude: number;
            }
              | null;
           country?: string;
           description?: string;
           email?: string | null;
           features?: string[];
           name?: string;
           phone?: string | null;
           status?: "active" | "archived";
           streetAddress?: string;
           tags?: string[];
           timezone?: string;
           website?: string | null;
        };
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:5965

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        coordinates?:   | {
           latitude: number;
           longitude: number;
         }
           | null;
        country?: string;
        description?: string;
        email?: string | null;
        features?: string[];
        name?: string;
        phone?: string | null;
        status?: "active" | "archived";
        streetAddress?: string;
        tags?: string[];
        timezone?: string;
        website?: string | null;
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     coordinates?:   | {
        latitude: number;
        longitude: number;
      }
        | null;
     country?: string;
     description?: string;
     email?: string | null;
     features?: string[];
     name?: string;
     phone?: string | null;
     status?: "active" | "archived";
     streetAddress?: string;
     tags?: string[];
     timezone?: string;
     website?: string | null;
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  coordinates?:   | {
     latitude: number;
     longitude: number;
   }
     | null;
  country?: string;
  description?: string;
  email?: string | null;
  features?: string[];
  name?: string;
  phone?: string | null;
  status?: "active" | "archived";
  streetAddress?: string;
  tags?: string[];
  timezone?: string;
  website?: string | null;
};
```

##### requestBody.content.application/json.coordinates?

```ts
optional coordinates: 
  | {
  latitude: number;
  longitude: number;
}
  | null;
```

###### Type Declaration

```ts
{
  latitude: number;
  longitude: number;
}
```

`null`

###### Description

GPS coordinates for mapping

##### requestBody.content.application/json.country?

```ts
optional country: string;
```

###### Description

Country

###### Example

```ts
United Kingdom
```

##### requestBody.content.application/json.description?

```ts
optional description: string;
```

###### Description

Venue description

###### Example

```ts
Updated description
```

##### requestBody.content.application/json.email?

```ts
optional email: string | null;
```

Format: email

###### Description

Contact email

###### Example

```ts
info@venue.com
```

##### requestBody.content.application/json.features?

```ts
optional features: string[];
```

###### Description

Venue features and facilities

###### Example

```ts
[
      "parking",
      "wheelchair_accessible"
    ]
```

##### requestBody.content.application/json.name?

```ts
optional name: string;
```

###### Description

Venue name

###### Example

```ts
Updated Venue Name
```

##### requestBody.content.application/json.phone?

```ts
optional phone: string | null;
```

###### Description

Contact phone number

###### Example

```ts
+44 20 7589 8212
```

##### requestBody.content.application/json.status?

```ts
optional status: "active" | "archived";
```

###### Description

Venue status

###### Example

```ts
active
@enum {string}
```

##### requestBody.content.application/json.streetAddress?

```ts
optional streetAddress: string;
```

###### Description

Street address

###### Example

```ts
Updated Street
```

##### requestBody.content.application/json.tags?

```ts
optional tags: string[];
```

###### Description

Venue tags

###### Example

```ts
[
      "concert-hall",
      "historic"
    ]
```

##### requestBody.content.application/json.timezone?

```ts
optional timezone: string;
```

###### Description

IANA timezone

###### Example

```ts
Europe/London
```

##### requestBody.content.application/json.website?

```ts
optional website: string | null;
```

Format: uri

###### Description

Venue website

###### Example

```ts
https://www.venue.com
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Venue updated successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.venue

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

##### responses.200.content.application/json.venue.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_def456
```

##### responses.200.content.application/json.venue.coordinates?

```ts
optional coordinates: {
  coordinates: [number, number];
  type: "Point";
};
```

##### responses.200.content.application/json.venue.coordinates.coordinates

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

##### responses.200.content.application/json.venue.coordinates.type

```ts
type: "Point";
```

###### Example

```ts
Point
@enum {string}
```

##### responses.200.content.application/json.venue.country?

```ts
optional country: string;
```

###### Example

```ts
United Kingdom
```

##### responses.200.content.application/json.venue.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### responses.200.content.application/json.venue.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### responses.200.content.application/json.venue.description?

```ts
optional description: string;
```

###### Example

```ts
Historic concert hall in London
```

##### responses.200.content.application/json.venue.email?

```ts
optional email: string;
```

###### Example

```ts
info@royalalberthall.com
```

##### responses.200.content.application/json.venue.features

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

##### responses.200.content.application/json.venue.id

```ts
id: string;
```

###### Example

```ts
vnu_abc123
```

##### responses.200.content.application/json.venue.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.venue.name

```ts
name: string;
```

###### Example

```ts
Royal Albert Hall
```

##### responses.200.content.application/json.venue.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.venue.phone?

```ts
optional phone: string;
```

###### Example

```ts
+44 20 7589 8212
```

##### responses.200.content.application/json.venue.status

```ts
status: "active" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### responses.200.content.application/json.venue.streetAddress?

```ts
optional streetAddress: string;
```

###### Example

```ts
Kensington Gore
```

##### responses.200.content.application/json.venue.tags

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

##### responses.200.content.application/json.venue.timezone

```ts
timezone: string;
```

###### Example

```ts
Europe/London
```

##### responses.200.content.application/json.venue.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### responses.200.content.application/json.venue.website?

```ts
optional website: string;
```

###### Example

```ts
https://www.royalalberthall.com
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### updateVenueLayout

```ts
updateVenueLayout: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        id: string;
        layoutId: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           areas?: {
              capacity: number;
              color?: string;
              description?: string;
              displayOrder: number;
              floorId?: string;
              id?: string;
              name: string;
              position?: {
                 height: number;
                 width: number;
                 x: number;
                 y: number;
              };
              seats?: {
                 attributes?: ...;
                 categoryId?: ...;
                 companionSeats?: ...;
                 companionTo?: ...;
                 holdType?: ...;
                 id?: ...;
                 internalNotes?: ...;
                 label: ...;
                 number: ...;
                 position?: ...;
                 publicNotes?: ...;
                 row: ...;
                 section?: ...;
                 sectionId?: ...;
                 status?: ...;
              }[];
              sections?: {
                 description?: ...;
                 displayOrder: ...;
                 id?: ...;
                 name: ...;
              }[];
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
                 rotation?: number;
                 width: number;
                 x: number;
                 y: number;
              };
              style?: {
                 fill?: ... | ...;
                 fontSize?: ... | ...;
                 fontWeight?: ... | ...;
                 stroke?: ... | ...;
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
        };
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:6721

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     id: string;
     layoutId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  id: string;
  layoutId: string;
};
```

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.path.layoutId

```ts
layoutId: string;
```

###### Description

Layout ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        areas?: {
           capacity: number;
           color?: string;
           description?: string;
           displayOrder: number;
           floorId?: string;
           id?: string;
           name: string;
           position?: {
              height: number;
              width: number;
              x: number;
              y: number;
           };
           seats?: {
              attributes?: ...;
              categoryId?: ...;
              companionSeats?: ...;
              companionTo?: ...;
              holdType?: ...;
              id?: ...;
              internalNotes?: ...;
              label: ...;
              number: ...;
              position?: ...;
              publicNotes?: ...;
              row: ...;
              section?: ...;
              sectionId?: ...;
              status?: ...;
           }[];
           sections?: {
              description?: ...;
              displayOrder: ...;
              id?: ...;
              name: ...;
           }[];
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
              rotation?: number;
              width: number;
              x: number;
              y: number;
           };
           style?: {
              fill?: ... | ...;
              fontSize?: ... | ...;
              fontWeight?: ... | ...;
              stroke?: ... | ...;
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
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     areas?: {
        capacity: number;
        color?: string;
        description?: string;
        displayOrder: number;
        floorId?: string;
        id?: string;
        name: string;
        position?: {
           height: number;
           width: number;
           x: number;
           y: number;
        };
        seats?: {
           attributes?: ...;
           categoryId?: ...;
           companionSeats?: ...;
           companionTo?: ...;
           holdType?: ...;
           id?: ...;
           internalNotes?: ...;
           label: ...;
           number: ...;
           position?: ...;
           publicNotes?: ...;
           row: ...;
           section?: ...;
           sectionId?: ...;
           status?: ...;
        }[];
        sections?: {
           description?: ...;
           displayOrder: ...;
           id?: ...;
           name: ...;
        }[];
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
           rotation?: number;
           width: number;
           x: number;
           y: number;
        };
        style?: {
           fill?: ... | ...;
           fontSize?: ... | ...;
           fontWeight?: ... | ...;
           stroke?: ... | ...;
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
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  areas?: {
     capacity: number;
     color?: string;
     description?: string;
     displayOrder: number;
     floorId?: string;
     id?: string;
     name: string;
     position?: {
        height: number;
        width: number;
        x: number;
        y: number;
     };
     seats?: {
        attributes?: ...;
        categoryId?: ...;
        companionSeats?: ...;
        companionTo?: ...;
        holdType?: ...;
        id?: ...;
        internalNotes?: ...;
        label: ...;
        number: ...;
        position?: ...;
        publicNotes?: ...;
        row: ...;
        section?: ...;
        sectionId?: ...;
        status?: ...;
     }[];
     sections?: {
        description?: ...;
        displayOrder: ...;
        id?: ...;
        name: ...;
     }[];
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
        rotation?: number;
        width: number;
        x: number;
        y: number;
     };
     style?: {
        fill?: ... | ...;
        fontSize?: ... | ...;
        fontWeight?: ... | ...;
        stroke?: ... | ...;
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
};
```

##### requestBody.content.application/json.areas?

```ts
optional areas: {
  capacity: number;
  color?: string;
  description?: string;
  displayOrder: number;
  floorId?: string;
  id?: string;
  name: string;
  position?: {
     height: number;
     width: number;
     x: number;
     y: number;
  };
  seats?: {
     attributes?: ...;
     categoryId?: ...;
     companionSeats?: ...;
     companionTo?: ...;
     holdType?: ...;
     id?: ...;
     internalNotes?: ...;
     label: ...;
     number: ...;
     position?: ...;
     publicNotes?: ...;
     row: ...;
     section?: ...;
     sectionId?: ...;
     status?: ...;
  }[];
  sections?: {
     description?: ...;
     displayOrder: ...;
     id?: ...;
     name: ...;
  }[];
  status?: "active" | "inactive";
  type: "unallocated" | "allocated";
}[];
```

###### Description

Venue areas (GA and allocated)

##### requestBody.content.application/json.categories?

```ts
optional categories: {
  color?: string;
  description?: string;
  displayOrder: number;
  id?: string;
  name: string;
}[];
```

###### Description

Pricing categories/zones

##### requestBody.content.application/json.decorations?

```ts
optional decorations: {
  id?: string;
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
     fill?: ... | ...;
     fontSize?: ... | ...;
     fontWeight?: ... | ...;
     stroke?: ... | ...;
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

###### Description

Visual elements (stages, pillars, labels, etc.)

##### requestBody.content.application/json.description?

```ts
optional description: string;
```

###### Description

Layout description

###### Example

```ts
Updated description
```

##### requestBody.content.application/json.floors?

```ts
optional floors: {
  description?: string;
  displayOrder: number;
  id?: string;
  name: string;
}[];
```

###### Description

Floors for multi-level venues

##### requestBody.content.application/json.name?

```ts
optional name: string;
```

###### Description

Layout name

###### Example

```ts
Updated Theatre Mode
```

##### requestBody.content.application/json.status?

```ts
optional status: "active" | "archived";
```

###### Description

Layout status

###### Example

```ts
active
@enum {string}
```

##### requestBody.content.application/json.tags?

```ts
optional tags: string[];
```

###### Description

Layout tags

###### Example

```ts
[
      "theatre",
      "seated",
      "accessible"
    ]
```

##### requestBody.content.application/json.totalCapacity?

```ts
optional totalCapacity: number;
```

###### Description

Total capacity

###### Example

```ts
1600
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Venue layout updated successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.venueLayout

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

##### responses.200.content.application/json.venueLayout.accountId

```ts
accountId: string;
```

###### Example

```ts
acc_ghi012
```

##### responses.200.content.application/json.venueLayout.areas

```ts
areas: unknown[];
```

###### Example

```ts
[]
```

##### responses.200.content.application/json.venueLayout.categories

```ts
categories: unknown[];
```

###### Example

```ts
[]
```

##### responses.200.content.application/json.venueLayout.createdAt

```ts
createdAt: string;
```

###### Example

```ts
2024-12-28T10:30:00Z
```

##### responses.200.content.application/json.venueLayout.createdBy?

```ts
optional createdBy: string;
```

###### Example

```ts
usr_abc123
```

##### responses.200.content.application/json.venueLayout.decorations?

```ts
optional decorations: {
  id: string;
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
```

###### Example

```ts
[]
```

##### responses.200.content.application/json.venueLayout.description?

```ts
optional description: string;
```

###### Example

```ts
Standard theatre configuration
```

##### responses.200.content.application/json.venueLayout.id

```ts
id: string;
```

###### Example

```ts
vlt_abc123
```

##### responses.200.content.application/json.venueLayout.isDeleted

```ts
isDeleted: boolean;
```

###### Example

```ts
false
```

##### responses.200.content.application/json.venueLayout.name

```ts
name: string;
```

###### Example

```ts
Theatre Mode
```

##### responses.200.content.application/json.venueLayout.organisationId

```ts
organisationId: string;
```

###### Example

```ts
org_xyz789
```

##### responses.200.content.application/json.venueLayout.status

```ts
status: "active" | "archived";
```

###### Example

```ts
active
@enum {string}
```

##### responses.200.content.application/json.venueLayout.tags

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

##### responses.200.content.application/json.venueLayout.totalCapacity

```ts
totalCapacity: number;
```

###### Example

```ts
1500
```

##### responses.200.content.application/json.venueLayout.updatedAt

```ts
updatedAt: string;
```

###### Example

```ts
2024-12-28T14:45:00Z
```

##### responses.200.content.application/json.venueLayout.venueId

```ts
venueId: string;
```

###### Example

```ts
vnu_def456
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### updateVenueLayoutArea

```ts
updateVenueLayoutArea: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        areaId: string;
        id: string;
        layoutId: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
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
           seats?: unknown[];
           status?: "active" | "inactive";
           type?: "unallocated" | "allocated";
        };
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
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
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:7323

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     areaId: string;
     id: string;
     layoutId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  areaId: string;
  id: string;
  layoutId: string;
};
```

##### parameters.path.areaId

```ts
areaId: string;
```

###### Description

Area ID

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.path.layoutId

```ts
layoutId: string;
```

###### Description

Layout ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
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
        seats?: unknown[];
        status?: "active" | "inactive";
        type?: "unallocated" | "allocated";
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
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
     seats?: unknown[];
     status?: "active" | "inactive";
     type?: "unallocated" | "allocated";
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
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
  seats?: unknown[];
  status?: "active" | "inactive";
  type?: "unallocated" | "allocated";
};
```

##### requestBody.content.application/json.capacity?

```ts
optional capacity: number;
```

###### Description

Total capacity

###### Example

```ts
600
```

##### requestBody.content.application/json.categoryId?

```ts
optional categoryId: string;
```

###### Description

Category ID for pricing (especially for GA areas)

###### Example

```ts
vlc_abc123
```

##### requestBody.content.application/json.color?

```ts
optional color: string;
```

###### Description

Hex color

###### Example

```ts
#FF0000
```

##### requestBody.content.application/json.description?

```ts
optional description: string;
```

###### Description

Area description

###### Example

```ts
Updated description
```

##### requestBody.content.application/json.displayOrder?

```ts
optional displayOrder: number;
```

###### Description

Display order in UI

###### Example

```ts
2
```

##### requestBody.content.application/json.name?

```ts
optional name: string;
```

###### Description

Area name

###### Example

```ts
Updated Main Floor
```

##### requestBody.content.application/json.position?

```ts
optional position: {
  height: number;
  width: number;
  x: number;
  y: number;
};
```

###### Description

Visual positioning for GA areas on seating map

###### Example

```ts
{
                     *       "x": 100,
                     *       "y": 100,
                     *       "width": 200,
                     *       "height": 150
                     *     }
```

##### requestBody.content.application/json.position.height

```ts
height: number;
```

##### requestBody.content.application/json.position.width

```ts
width: number;
```

##### requestBody.content.application/json.position.x

```ts
x: number;
```

##### requestBody.content.application/json.position.y

```ts
y: number;
```

##### requestBody.content.application/json.seats?

```ts
optional seats: unknown[];
```

###### Description

Seats array

##### requestBody.content.application/json.status?

```ts
optional status: "active" | "inactive";
```

###### Description

Area status

###### Example

```ts
inactive
@enum {string}
```

##### requestBody.content.application/json.type?

```ts
optional type: "unallocated" | "allocated";
```

###### Description

Area type

###### Example

```ts
allocated
@enum {string}
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
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
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
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
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Area updated successfully

##### responses.200.content

```ts
content: {
  application/json: {
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
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.area

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

##### responses.200.content.application/json.area.capacity

```ts
capacity: number;
```

###### Example

```ts
500
```

##### responses.200.content.application/json.area.color?

```ts
optional color: string;
```

###### Example

```ts
#FFD700
```

##### responses.200.content.application/json.area.description?

```ts
optional description: string;
```

###### Example

```ts
General admission area
```

##### responses.200.content.application/json.area.displayOrder

```ts
displayOrder: number;
```

###### Example

```ts
1
```

##### responses.200.content.application/json.area.id

```ts
id: string;
```

###### Example

```ts
vla_abc123
```

##### responses.200.content.application/json.area.name

```ts
name: string;
```

###### Example

```ts
Main Floor
```

##### responses.200.content.application/json.area.seats?

```ts
optional seats: unknown[];
```

###### Example

```ts
[]
```

##### responses.200.content.application/json.area.status

```ts
status: "active" | "inactive";
```

###### Example

```ts
active
@enum {string}
```

##### responses.200.content.application/json.area.type

```ts
type: "unallocated" | "allocated";
```

###### Example

```ts
unallocated
@enum {string}
```

##### responses.200.content.application/json.venueLayout?

```ts
optional venueLayout: unknown;
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

***

### updateVenueLayoutCategory

```ts
updateVenueLayoutCategory: {
  parameters: {
     cookie?: undefined;
     header?: undefined;
     path: {
        categoryId: string;
        id: string;
        layoutId: string;
     };
     query?: undefined;
  };
  requestBody?: {
     content: {
        application/json: {
           color?: string;
           description?: string;
           displayOrder?: number;
           name?: string;
        };
     };
  };
  responses: {
     200: {
        content: {
           application/json: {
              category: {
                 color?: string;
                 description?: string;
                 displayOrder: number;
                 id: string;
                 name: string;
              };
              venueLayout?: unknown;
           };
        };
        headers: {
         [name: string]: unknown;
        };
     };
     400: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     401: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     403: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     404: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
     500: {
        content?: undefined;
        headers: {
         [name: string]: unknown;
        };
     };
  };
};
```

Defined in: generated/types.ts:7596

#### parameters

```ts
parameters: {
  cookie?: undefined;
  header?: undefined;
  path: {
     categoryId: string;
     id: string;
     layoutId: string;
  };
  query?: undefined;
};
```

##### parameters.cookie?

```ts
optional cookie: undefined;
```

##### parameters.header?

```ts
optional header: undefined;
```

##### parameters.path

```ts
path: {
  categoryId: string;
  id: string;
  layoutId: string;
};
```

##### parameters.path.categoryId

```ts
categoryId: string;
```

###### Description

Category ID

##### parameters.path.id

```ts
id: string;
```

###### Description

Venue ID

##### parameters.path.layoutId

```ts
layoutId: string;
```

###### Description

Layout ID

##### parameters.query?

```ts
optional query: undefined;
```

#### requestBody?

```ts
optional requestBody: {
  content: {
     application/json: {
        color?: string;
        description?: string;
        displayOrder?: number;
        name?: string;
     };
  };
};
```

##### requestBody.content

```ts
content: {
  application/json: {
     color?: string;
     description?: string;
     displayOrder?: number;
     name?: string;
  };
};
```

##### requestBody.content.application/json

```ts
application/json: {
  color?: string;
  description?: string;
  displayOrder?: number;
  name?: string;
};
```

##### requestBody.content.application/json.color?

```ts
optional color: string;
```

###### Description

Hex color

###### Example

```ts
#C0C0C0
```

##### requestBody.content.application/json.description?

```ts
optional description: string;
```

###### Description

Category description

###### Example

```ts
Updated description
```

##### requestBody.content.application/json.displayOrder?

```ts
optional displayOrder: number;
```

###### Description

Display order in UI

###### Example

```ts
2
```

##### requestBody.content.application/json.name?

```ts
optional name: string;
```

###### Description

Category name

###### Example

```ts
VIP Premium
```

#### responses

```ts
responses: {
  200: {
     content: {
        application/json: {
           category: {
              color?: string;
              description?: string;
              displayOrder: number;
              id: string;
              name: string;
           };
           venueLayout?: unknown;
        };
     };
     headers: {
      [name: string]: unknown;
     };
  };
  400: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  401: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  403: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  404: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
  500: {
     content?: undefined;
     headers: {
      [name: string]: unknown;
     };
  };
};
```

##### responses.200

```ts
200: {
  content: {
     application/json: {
        category: {
           color?: string;
           description?: string;
           displayOrder: number;
           id: string;
           name: string;
        };
        venueLayout?: unknown;
     };
  };
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Category updated successfully

##### responses.200.content

```ts
content: {
  application/json: {
     category: {
        color?: string;
        description?: string;
        displayOrder: number;
        id: string;
        name: string;
     };
     venueLayout?: unknown;
  };
};
```

##### responses.200.content.application/json

```ts
application/json: {
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

##### responses.200.content.application/json.category

```ts
category: {
  color?: string;
  description?: string;
  displayOrder: number;
  id: string;
  name: string;
};
```

##### responses.200.content.application/json.category.color?

```ts
optional color: string;
```

###### Example

```ts
#FFD700
```

##### responses.200.content.application/json.category.description?

```ts
optional description: string;
```

###### Example

```ts
Best seats in the house
```

##### responses.200.content.application/json.category.displayOrder

```ts
displayOrder: number;
```

###### Example

```ts
1
```

##### responses.200.content.application/json.category.id

```ts
id: string;
```

###### Example

```ts
vlc_abc123
```

##### responses.200.content.application/json.category.name

```ts
name: string;
```

###### Example

```ts
Premium
```

##### responses.200.content.application/json.venueLayout?

```ts
optional venueLayout: unknown;
```

##### responses.200.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.400

```ts
400: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Bad Request - Invalid input

##### responses.400.content?

```ts
optional content: undefined;
```

##### responses.400.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.401

```ts
401: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Unauthorized - Authentication required

##### responses.401.content?

```ts
optional content: undefined;
```

##### responses.401.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.403

```ts
403: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Forbidden - Insufficient permissions

##### responses.403.content?

```ts
optional content: undefined;
```

##### responses.403.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.404

```ts
404: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Not Found - Resource not found

##### responses.404.content?

```ts
optional content: undefined;
```

##### responses.404.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```

##### responses.500

```ts
500: {
  content?: undefined;
  headers: {
   [name: string]: unknown;
  };
};
```

###### Description

Internal Server Error

##### responses.500.content?

```ts
optional content: undefined;
```

##### responses.500.headers

```ts
headers: {
[name: string]: unknown;
};
```

###### Index Signature

```ts
[name: string]: unknown
```
