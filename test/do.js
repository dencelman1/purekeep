import "./deploy.js";

import vars from './vars.js';
import d from './init.js';
import {
    CompareType as ct,
    LogicType as lt,
    TypeEntity as te
} from '../src/i.js';
import keys from './keys.js';


(
    (keys) => {
        var
            {
                n_, b_, f_,
                n, b, f
            } = vars,

            B = d.entry(),
            newValueN = "hello_world"
        ;
        return (
            n_(B, newValueN)
            
            , b_(B, true)
            , f_(B, 10.5)

            , console.log( d.toJson(B, keys) )

            , (
                Array.from(
                    { length: 60_000 },
                    (_, i) => {
                        var v = i.toString();
                        return (
                            // n_(B, v)

                            d.create(B)
                        );
                    }
                )
            )
        )
    }
)(
    keys
)