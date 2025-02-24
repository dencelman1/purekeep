

import d from './init.js';

(
    (s, k) => {
        var
            keys = Object.keys(k),
            B = d.entry()
        ;
        console.dir(B);
        return (
            d.str_(B[k.name],k.name, 0, "h"),//.repeat(25)),
            d.bool_(B[k.bv],k.bv, 0, true),
            d.float_(B[k.float_value],k.float_value, 0, 1.1),

            console.log(JSON.parse(d.toJson(B, keys))),

            // console.log(JSON.parse(d.toJson(d.read(5, 1), keys))),

            console.dir(B),

            // (s = Date.now()),

            // d.create(1_000, 1),

            // [field_value, operation_number, 0, logic_operation, field_value, operation_number, 0],
            
            console.log((Date.now() - s)/1000)
        );
    }
)(
    0,
    {
        name: 0,
        bv: 1,
        float_value: 2
    }
)



