

import d from './init.js';

(
    (s, k) => {
        var
            keys = Object.keys(k),
            B = d.B
        ;
        return (
            d.int_(B,k.id, 0, 1),
            d.str_(B,k.name, 0, "h".repeat(21)),
            d.bool_(B,k.bv, 0, true),
            d.float_(B,k.float_value, 0, 1.1),

            (s = Date.now()),

            d.create(1_000, 1),
            console.log(JSON.parse(d.toJson(d.read(5, 1), keys))),

            console.log((Date.now() - s)/1000)
        );
    }
)(
    0,
    {
        id: 0,
        name: 1,
        bv: 2,
        float_value: 3
    }
)



