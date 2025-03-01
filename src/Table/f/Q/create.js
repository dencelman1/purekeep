import { readSync, writeSync } from 'fs';


export default (
    function(
        E,
        L,
        a // int[][] for ids
    ) {
        var
            P = this.P,
            SP = this.SP,

            OB = this.OB,
            
            f = this.f,

            d = this.d,
            sd = this.sd,
            od = this.od,

            r = this.r,
            ss = this.ss,
            s = this.s,

            ty = this.t,

            T = 0,
            
            isstr = this.isstr,

            bfrom = this.bfrom,
            
            saveField = this.saveField,

            lb = null,
            EL = E.length,

            el = this.L
        ;

        for (
            var
                j = 0,
                i = 0,
                e = E[j],
                l = L[j],
                SD = null,
                LENGTH = 0,
                STRING_VALUE= null
            ;
            j < EL;
            (
                (e = E[++j]),
                (a[j][
                    0 // TODO:
                ] = (el++)),

                (l = L[j]),
                
                (i = 0)
            )
        ) {
            for (
                ;
                i < f;
                i++
            ) {
                P[i] += (
                    isstr(T = ty[i])
                    ? (
                        (lb = l[i])

                        , (
                            LENGTH = (
                                bfrom[s[i]](lb,0,0)
                            )
                        )

                        , (
                            SD = (
                                this.sdopen(
                                    i,
                                    LENGTH
                                )
                            )
                        )
                        , OB.writeUInt16LE(SD[1]++, 0)
                        , writeSync(od[i], OB, 0, 2, OP[i])
                        , ( OP[i] += 2 )

                        , (
                            P[i] += (
                                saveField(d[i], lb, ss[i], P[i])
                            )
                        )

                        , (
                            SD[3] += (
                                saveField(
                                    SD.d,
                                    e[i],
                                    bfrom[s[i]](lb, 0,0),
                                    SD[3]
                                )
                            )
                        )
                    )
                    : saveField(d[i], e[i], r[i], P[i])
                );
            };
        };
        
        return (
            (this.L = el),
            EL
        );
    }
)