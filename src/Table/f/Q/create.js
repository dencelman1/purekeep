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
                (a[j] = (el++)),

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


                        (LENGTH = this.offset[T](STRING_VALUE = e[i])),

                        
                        writeSync(od[i], OB, 4, OP[i])
                        , ( OP[i] += 4 ),

                        (
                            SD = (
                                this.sdopen(
                                    sd[
                                        i
                                    ][
                                        
                                    ]
                                )
                            )[0]
                        ),
                        
                        saveField(
                            SD.d,
                            STRING_VALUE,
                            bfrom[s[i]](lb,0,0),
                            P[i]
                        ),
                        
                        (
                            SP[i] += (
                                saveField(
                                    d[i],
                                    (lb = l[i]),
                                    ss[i],
                                    SP[i]
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
            a
        );
    }
)