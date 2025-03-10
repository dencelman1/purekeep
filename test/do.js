import "./deploy.js";

import vars from './vars.js';
import d from './init.js';
import {
    CompareType as ct,
    LogicType as lt,
    TypeEntity as te
} from '../src/i.js';
import keys from './keys.js';
import map from './map.js';


(
    (keys) => {
        var
            {
                n_, b_, f_,
                n, b, f
            } = vars,

            B = d.entry(),

            ID = [ 0 ]
        ;
        return (
            n_(B, "hello_world")
            
            , b_(B, true)
            , f_(B, 10.5)

            , console.log( d.toJson(B, keys) )

            , (
                Array.from(
                    { length: 60_000 },
                    (_, i) => {
                        var v = i.toString();
                        return (
                            n_(B, v),
                            d.create(B)
                        );
                    }
                )
            )

            , console.dir(
                d.read(
                    [ B ],
                    [ d.subarray(B) ],
                    ID,

                    [ 0, ct["="], 0 ],
                    [ Buffer.from("1001o_world" + "\x00".repeat(9)) ],
                )
            )
            , console.dir(ID)

            , console.log( d.toJson(B, keys) )
        )
    }
)(
    keys
)