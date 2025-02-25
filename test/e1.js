

import d from './init.js';

(
    (s, k) => {
        var
            keys = Object.keys(k),

            B = d.entry(),
            l = d.length(),

            BA = [B, B],
            LA = [l, l],

            IDS = d.ids(2),
            
            t = d.t,
            r = d.r,
            ss = d.ss,
            s = d.s,
            
            name = k.name,
            bv = k.bv,
            float_value = k.float_value,
            
            bfrom = d.bfrom,
            bto = d.bto,

            typeN = t[name],
            typeNL = s[name],

            typeB = t[bv],
            typeF = t[float_value],


            setN = bto[typeN],
            setNL = bto[typeNL],

            setB = bto[typeB],
            setF = bto[typeF],


            getN = bfrom[typeN],
            getNL = bfrom[typeNL],

            getB = bfrom[typeB],
            getF = bfrom[typeF],


            bN = B[name],
            bNL = l[name],

            bB = B[bv],
            bF = B[float_value],

            newValueN = "hello_world",

            LENGTH = 0
        ;
        
        return (

            setN(bN, newValueN, 0),
            setNL(bNL, newValueN.length, 0),
            
            setB(bB, true, 0),
            setF(bF, 10.5, 0),

            console.dir([
                getN(bN, 0, (LENGTH = getNL(bNL, 0, 0))),
                LENGTH,

                getB(bB, 0, 0),
                getF(bF, 0, 0),
            ]),

            console.dir(d.create(BA,LA,IDS))
            
            // console.log(JSON.parse(d.toJson(d.read(5, 1), keys))),

            // (s = Date.now()),

            // d.create(1_000, 1),

            // [field_value, operation_number, 0, logic_operation, field_value, operation_number, 0],
            
            // console.log((Date.now() - s)/1000)
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





