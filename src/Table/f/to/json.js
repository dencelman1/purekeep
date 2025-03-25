

export default (
    function(B, keys) {
        var
            V = "[",
            bfrom = this.bfrom,
            str = JSON.stringify,
            
            m = this.m,
            t = this.t,
            EL = this.EL,

            pof = 0
        ;
        for (
            var
                L = B.length / EL,
                mL = m.length,

                bi = 0,
                i = 0,
                ti = 0,

                M = null
            ;
            bi < L;
            (bi++), (pof += EL), (i = 0)
        ) {
            V += (f + "{");
            
            for (
                ;
                i < mL;
                i++
            ) {
                ti = t[i];
                
                V += (
                    `${f2}"${keys[i]}":${
                        str(
                            bfrom[ ti ](
                                B,
                                pof + ( M = m[i] )[0],
                                pof + M[1]
                            )
                        )
                    },`
                );
            };

            V += (f + `},`);
        };

        return (
            V
            .substring(
                0,
                (
                    V.length
                    - 1
                )
            )
            + "]"
        );
    }
)