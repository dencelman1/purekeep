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
                n_, b_, f_, i_
            } = vars,

            EL = d.EL,
            r = d.r,

            B = d.entry(1),
            ED = d.entry(1),
            ID = [ 0 ],

            D = Date.now()
        ;
        n_(ED, "I" + "\x00".repeat(19), 0)
        i_(ED, 1, 0)
        
        // TODO: test many entries read;
        // TODO: update;

        return (
            n_(B, "hello_world", 0)
            
            , b_(B, true, 0)
            , f_(B, 10.5, 0)

            , (
                Array.from(
                    { length: 100_000 },//_000 },
                    (_, i) => {
                        var v = i.toString();
                        return (
                            n_(B, v, 0),
                            d.create(B)
                        );
                    }
                )
            )
            
            , console.log("DELETED: "+d.delete(
                [0],
                1,

                [0,ct["="],0],
                3,
                [
                    Buffer.from("0ello_world"+"\x00".repeat(9))
                ]
            ))
            , console.log("DELETED IDS: "+JSON.stringify(ID))

            , n_(B, "I" + "\x00".repeat(19), 0)

            , console.log("CREATED: " + d.create(B))
            
            , console.log(
                "found after update: " +
                
                d.read(
                    B,
                    [0],
                    1,

                    [0,ct["="],0],
                    3,
                    [
                        Buffer.from("I" + "\x00".repeat(19))
                    ]
                )
            )
            , console.log("found after update ids: " + JSON.stringify(ID))
            
            , console.log( d.to_debug_json(B, keys) )            

            , console.log((Date.now() - D)/1000)
        )
    }
)(
    keys
)