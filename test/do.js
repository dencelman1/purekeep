import vars from './vars.js';
import d from './init.js';
import {
    CompareType as ct,
    LogicType as lt,
    TypeEntity as te
} from '../src/i.js';

(
    () => {
        var
            {
                nv_, nl_, b_, f_,
                nv, nl, b, f,
                
                keys, k
            } = vars,

            B = d.entry(),
            
            AR = d.array(),

            BS = [B],
            ARS = [AR],

            Q_ID = d.id(),

            IDS = [Q_ID],
            
            newValueN = "hello_world",
            LENGTH = 0,
            date = 0
        ;
        return (
            nl_(B[0], newValueN.length, 0)
            , nv_(AR[0], newValueN, 0)
            
            , b_(B[1], false, 0)
            , f_(B[2], 10.5, 0)

            , B[0].fill("\x00")

            , (date = Date.now())

            , (
                Array.from({length:60_000}, (_, i) => (

                    nl_(B[0], i.toString().length, 0)
                    , nv_(AR[0], i.toString(), 0)

                    , d.create(B, AR, Q_ID)
                ))
            )

            
            , (
                d.read(
                    BS,
                    ARS,
                    IDS,

                    [
                        0, te.ARRAY_VALUE, ct["<"], 0
                    ],
                    ((b) => (
                        b.write("1200", 0, "utf8"),
                        [
                            b
                        ]
                    ))(Buffer.alloc(20)),

                    [0,1,2]
                )
            )
            , console.log((Date.now() - date)/1000)
            
            , console.dir([
                nv(AR[0], 0, nl(B[0], 0, 0)),
                nl(B[0], 0, 0),

                b(B[1], 0, 0),
                f(B[2], 0, 0),
            ])
            
            
            
            // , console.log(JSON.parse(d.toJson(d.read(5, 1), keys)))

            // (s = Date.now()),

            // d.create(1_000, 1),

            // [field_value, operation_number, 0, logic_operation, field_value, operation_number, 0],
            
            // console.log((Date.now() - s)/1000)
        )
    }
)()