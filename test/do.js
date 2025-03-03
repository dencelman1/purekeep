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
                nv_, nl_, b_, f_,
                nv, nl, b, f
            } = vars,

            B = d.entry(),
            
            AR = d.array(),

            BS = [ B ],
            ARS = [ AR ],

            Q_ID = d.id(),

            IDS = [Q_ID],

            Q = [
                0, te.ARRAY_VALUE, ct["="], 0
            ],

            V = d.value([
                0,0,
                0,1,

            ]),
            
            newValueN = "hello_world",
            date = 0,

            WHICH_VALUES = [0,1,2]
        ;
        return (
            nl_(B[0], newValueN.length, 0)
            , nv_(AR[0], newValueN, 0)
            
            , b_(B[1], false, 0)
            , f_(B[2], 10.5, 0)


            , console.log( d.toJson(B, AR, keys) )
            , (
                Array.from(
                    { length:60_000 },
                    (_, i) => {
                        var v = i.toString();
                        return (
                            nl_(B[0], v.length, 0)

                            , nv_(AR[0], v, 0)

                            , d.create(B, AR, Q_ID)
                        );
                    }
                )
            )
            , d.update(
                [
                    0, te.ARRAY_VALUE, ct["="], 0
                ],
                (
                    nl_(V[0], 1, 0),
                    nv_(AR[0], "1", 0),
                    V
                ),
                [0,0]
            )

            , d.read(

            )

            , console.log( d.toJson(B, AR, keys) )
        )
    }
)(
    keys
)