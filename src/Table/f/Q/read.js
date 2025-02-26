import { readSync } from 'fs';


/*
    E, // entries (put here)
    L, // lengths (put here)
    A, // ids (put here)

    Q, // queries
    LQ, // logic queries
    FI // fields (which fields put into E, L)


    [
        0 field_id,
        1 value_type,

        2 operation_id,
        3 value's_index_from_QE
    ];

*/

export default (
    function(
        E,
        L,
        
        A,


        Q,
        LQ,

        QE,

        FI
    ) {
        var
            L = this.L,
            compare = this.compare,
            logic = this.logic,
            etypes = this.etypes,

            QL = Q.length,
            f = 0,

            EL = E.length,

            ba = null,
            bb = null,

            ty = this.t,

            isstr = this.isstr,

            d = this.d,
            sd = this.sd,
            od = this.od,

            bfrom = this.bfrom,
            bto = this.bto,

            s = this.s,
            r = this.r,

            Q1 = 0,
            FIL = FI.length,

            sm = this.sm,

            buffer = this.em,
            OB = this.OB
            
        ;
        for (
            var
                i = 0,
                a = false,
                j = 0,
                x = 0,
                z = 0,
                EF = E[0],
                FIZ = 0,
                rfiz = 0,
                size = 0,
                o = 0,
                ELL = null,

                ELLF = null,
                T = 0
            ;
            (f < EL) && (i < L);
            (
                i++,
                (x = j = 0),
                (a = false)
            )
        ) {
            for (
                ;
                (j < QL);
                j += 4
            ) {
                if (
                    (j > 0)
                    &&
                    !(a = logic[x++](a))
                ) {
                    break;
                };
                
                // TODO 1:
                // Q[j], Q[j+1], Q[j+2], Q[j+3];
                // readSync(d[j], buffer, 0, stats.size, 0)

                // * here i can cache values which could be usefull in TODO 2;

                ba = Buffer.from("TODO 1: here value from ");

                (
                    (
                        Q1 = (
                            Q[
                                j
                                + 1
                            ]
                        )
                    ) === 0
                )
                ? (
                    i === Q[ j + 3 ]
                )
                : (
                    (
                        a = (
                            (
                                compare[
                                    etypes[ Q1 ][ Q[ j ] ]
                                ]
                            )[
                                Q[ j + 2 ]
                            ]
                        )
                    )(
                        ba,
                        QE[
                            Q[
                                j + 3
                            ]
                        ]
                        
                    )
                );
            };

            if (a) {
                
                for (; z < FIL; z++) {
                    FIZ = FI[z];
                    
                    if (
                        isstr(
                            T = ty[v]
                        )
                    ) {
                        ELLF = L[z][ FIZ ];

                        readSync(od[ FIZ ], OB, 0, 4, i * 4);
                        readSync(sd[ FIZ ], ELLF, 0, (rfiz = s[ FIZ ]), i * rfiz);
                        
                        readSync(d[ FIZ ], EF[ FIZ ], 0, bfrom[T](ELLF,0,0), OB.readUInt32LE(0));
                    }
                    else {
                        readSync(d[ FIZ ], EF[ FIZ ], 0, (rfiz = r[ FIZ ]), (i * rfiz));
                    };
                    
                };
                
                z = 0;

                A[++f] = i;
                EF = E[f];
            };
        };
        A[0] = f;
        return E;
    }
);
