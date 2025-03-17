

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
            ),
            EL = this.EL
        ;
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
                    (o,l,a,EL) => (
                        (b, i) => a(b,(o+(EL*i)),l)
                    )
                )(
                    M0,
                    M[1],
                    bfrom[T],
                    EL
                )
            );
            ( V0 = v[li + 1] )[0] = (k + "_");

            V0[ 1 ] = (
                (
                    (o,a,EL) => (b,v,i) => a(b,v,(o+(EL*i)))
                )(
                    M0,
                    bto[T],
                    EL
                )
            );

        };
        return Object.fromEntries(v);
    }
);