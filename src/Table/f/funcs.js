

export default (
    function(
        keys
    ) {
        var
            o = this.arrayFromO,
            l = keys.length,
            kl = l * 2,
            v = (
                (o.length = kl),
                Array.from(o, this.ENTRY)
            )
        ;

        [["", null]]
        for (
            var
                bfrom = this.bfrom,
                bto = this.bto,
                m = this.m,
                t = this.t,
                
                k = "",

                i = 0,
                
                M = m[0],
                M0 = M[0],
                V0 = v[0],
                T = 0,
                li = 0
            ;
            i < l;
            i++
        ) {
            
            M0 = (M = m[i])[0];

            T = t[i];
            
            ( V0 = v[li = (i*2)] )[0] = (k = keys[i]);

            V0[1] = (
                (
                    (o,l,a) => (
                        (b) => a(b,o,l)
                    )
                )(
                    M0,
                    M[1],
                    bfrom[T]
                )
            );
            ( V0 = v[li + 1] )[0] = (k + "_");

            V0[ 1 ] = (
                (
                    (o,a) => (b,v) => a(b,v,o)
                )(
                    M0,
                    bto[T]
                )
            );

        };
        return Object.fromEntries(v);
    }
);