## purekeep

Pure persistent binary NodeJS JavaScript database

Admin panel that is compatible with this - [everinel](https://github.com/dencelman1/everinel)


# Step 1: installation

```sh
npm i purekeep
```


# Data types, logical and comparative operators:

```js

import {
    LogicType as l,
    CompareType as c,
    Type
} from "purekeep"

var {

    int8,
    str8,
    bool,

    int16,
    int32,
    int64,

    uint8,
    uint16,
    uint32,
    uint64,

    float32,
    float64,
    
    str16le,

} = Type;


// for queries:

l["||"]; // or
l["&&"]; // and

c[ "=" ]; // equal;
c[ ">" ]; // greater than;
c[ "<" ]; // less than;
c[ ">=" ]; // greater than or equal;
c[ "<=" ]; // less than or equal;

// mainly for string ( but for int, float, bool - its equal ( c['='] ) ):

c.has; // example: "1234" contains "23";
c.in; // example: "23" contained in "1234";

```


# Step 2: table deploy

```js
import {
    TableDeploy,
    Type as _
} from 'purekeep';


TableDeploy(
    "path to table folder",
    Number.MAX_SAFE_INTEGER,
    [
        _.str8, // name
        _.bool, // is_vip
        _.float32, // float_value
        _.int8, // my_integer_value
    ],
    [
        20, // length of str8 string
        0,
        0,
        0
    ],
);
```


# Step 3: table initialization and connect

```js

// table.js

import { Table } from 'purekeep';

export var

    entry_fields = {

        // here you define the name of the fields in the record

        name: 0,
        is_vip: 1,
        float_value: 2,
        my_integer_value: 3
    },

    // functions for getting / writing data from / to a byte buffer
    functions = d.funcs(Object.keys(entry_fields))

    table = new Table("path to table folder")
;
```


# Step 4: usage


```js

import { table, entry_fields, functions } from "./table.js";

var
    {
        name_, // function for editing value of "name" field in bytes buffer
        name, // function for reading value of "name" field from bytes buffer

    } = functions,

    EL = table.EL, // byte length of entry
    r = table.r, // byte length of each entry field

    B = table.entry(1), // creating bytes buffer for 1 entry
    ED = table.entry(1),
    ID = [ 0 ] // IDs array
;

// function for editing "name" field: name_

name_(
    ED, // which buffer i need to edit
    "I" + "\x00".repeat(19), // new value
    0, // index of entry inside buffer which value i have to edit
);
my_integer_value_(ED, 1, 0);

name_(B, "hello_world", 0);
    
is_vip_(B, true, 0);
float_value_(B, 10.5, 0);

```

# create:

```js
console.log(
    "created id: "
    + table.create(
        B // buffer of 1 entry data
    )
);
```

# read:

```js

import {
    CompareType as ct,
    LogicType as lt,
} from 'purekeep';

var
    B = table.entry(1),
    I = [0],

    name = functions.name,

    query_values = [
        Buffer.from("hello_world"+"\x00".repeat(9)),
        Buffer.alloc(1, "\x01", "utf8") // TRUE
    ]

    query_conditions = (
        [
            entry_fields.name,
            ct["="],
            0,
            lt["||"],
            entry_fields.is_vip,
            ct["="],
            1
        ], 
    )

    // this means: if ( name === query_values[0] || is_vip === true )
;

console.log("how many entries found = " + (

    table.read(
        B, // a buffer that receives data from found records
        I, // a array that receives ID of found records
        1, // how much i have get entries (limit)

        // query conditions
        query_conditions,
        query_conditions.length,
        query_values,
    )

))

console.log("found id: "+ I[0]);

name(B, 0) // "hello_world\x00\x00\x00\x00\x00\x00\x00\x00\x00"

```


# update:

```js

import {
    CompareType as ct,
} from 'purekeep';

var 
    B = table.entry(1),
    

    number_of_records_in_the_database = table.L,

    o = table.arrayFromO,

    I = Array.from(
        (
            (o.length = number_of_records_in_the_database),
            o
        ),
        () => 0
    ),

    float_value_ = functions.float_value_,
    fields_size = table.t,

    write_funcs = table.bto,

    WHICH_FIELDS_MUST_BE_UPDATED = [
        entry_fields.float_value,
    ],

    QUERY = [
        entry_fields.float_value, ct["<"], 0
    ],
    QUERY_VALUE = [
        Buffer.alloc(
            fields_size[entry_fields.float_value] // bytes length of "float_value"
        )
    ]

    // here if ( float_value < 20.50 ) { float_value = 20.50 }
;
write_funcs[entry_fields.float_value](QUERY_VALUE[0], 20.50, 0)

float_value_(B, 20.50, 0);

console.log(
    "how many entries updated: "
    + table.update(
        B, // new data for update here ( in our case: float_value=20.50 )
        I, // here will be IDs of entries which shall be updated

        // the maximum number of records that can be edited in this request ( limit )
        // in this case: unlimit ( all table )
        number_of_records_in_the_table,

        WHICH_FIELDS_MUST_BE_UPDATED, // which fields must be updated
        WHICH_FIELDS_MUST_BE_UPDATED.length, // length of fields which must be updated

        QUERY,
        QUERY.length,
        QUERY_VALUE
    )
);

console.log(
    "ids of updated entries"
    + JSON.stringify(I)
);

```


# delete:

```js

import {
    CompareType as ct,
} from 'purekeep';

var I = [0,0,0, 0,0]

console.log(
    "how many entries removed: "
    + 
    table.delete(
        I,
        5, // delete only <= 5 entries

        [
            entry_fields.is_vip, ct["="], 0
        ],
        3, // QUERY.LENGTH

        [
            Buffer.alloc(1, "\x00", 0) // FALSE
        ],
    )
    // here if ( is_vip === false ) { delete( entry ) }
);

console.log(
    "ids of deleted entries"
    + JSON.stringify(I)
);

```


# ( read / delete / update ) by id:


```js
var
    B = table.entry(1),

    {name_} = functions,

    id = 10
;

// all these 3 methods returns: 1 - (found / updated / deleted), 0 - not found;

table.read_id(id, B); // B - buffer where you ll get entry data

name_(B, "new_value"+"\x00".repeat(11), 0);

table.update_id( id, B ); // update with new name ( "new_value\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" ):
table.delete_id( id );

```


# Limits:

Maximum size of table = (
    <= ( max of uint32 = 4_294_967_295 bytes ≈ 4 GB )
);

If you need more you can create handler function for next events:

```js

"filled"; // when the table is full
"released"; // when the table freed up after filling

table.onfilled = (
    function(
        E, // new entries for creating
        f // how many entries created before this callback function call
    ) {
        // ....your code is here;

        return f; // how many entries you created;
    }
);

table.onreleased = (
    function(
        I, // indexes of entries which was deleted and shall be;
        f, // how many already deleted
        limit, // how many to delete (<= limit)

        Q, // query of delete request
        QL, // Q.length
        QV, // query values for query ( Q )
    ) {
        limit - f; // how much more is left to delete in this request
        
        return 0;
    }
);

```


# Performance:

- database request for **1** entry takes **1-10** milliseconds based on your hardware, recording size, etc.


> ( productivity, efficiency and performance of a program ) > ( convenience for the developer );
