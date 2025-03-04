

export default (
    function(
        E,
        AR,
        a, // int[][] for ids
    ) {
        var
            L = this.L
            
            , P = this.P
            , OP = this.OP
            
            , OB = this.OB
            
            , f = this.f

            , d = this.d
            , sd = this.sd
            , od = this.od

            , r = this.r

            , t = this.t

            , T = 0
            
            , isstr = this.isstr
            , bfrom = this.bfrom
            
            , saveField = this.saveField

            , LENGTH = 0
            , LENGTH_BUFFER = this.em
            , SD = null
            , i = 0
            , sdopen = this.sdopen
            , sdadd = this.sdadd
            , ps = this.ps
            
        ;

        for (
            ;
            i < f;
            i++
        ) {
            P[i] += (
                isstr(T = t[i])
                ? (
                    (
                        SD = sdopen(
                            sd[i],
                            i,
                            (
                                LENGTH = (
                                    bfrom[T = r[i]](
                                        (
                                            LENGTH_BUFFER = E[i]
                                        )
                                        , 0
                                        , 0
                                    )
                                )
                            ),
                            ps,
                            sdadd
                        )
                    ),
                    
                    (SD[3] += saveField(
                        SD[0],
                        AR[i],
                        LENGTH,
                        SD[3]
                    )),

                    OB.writeUInt16LE(SD[1]++),
                    (OP[i] += saveField(od[i], OB, 2, OP[i])),

                    saveField(d[i], LENGTH_BUFFER, T, P[i])
                )
                : saveField(d[i], E[i], r[i], P[i])
            );
        };

        L[0] = (
            (
                a[0] = L[0]
            )
            + 1
        );
        this.confsave();
        
        return 1;
    }
)