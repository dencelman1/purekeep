

export default (
    function(
        E,
        L,
        a // int array for ids
    ) {

        // TODO: put into db clearly if (holes) { in holes }
        var
            P = this.P,
            SP = this.SP,
            OP = this.OP,
            
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
                l = L[j]
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
                        (SP[i] += saveField(sd[i], (lb = l[i]), ss[i], SP[i])),
                        (OP[i] += saveField(od[i], (lb = l[i]), 4, OP[i])),
                        saveField(d[i], e[i], bfrom[s[i]](lb,0,0), P[i])
                    )
                    : saveField(d[i], e[i], r[i], P[i])
                );
            };
        };
        
        a[0] = j;
        
        return (
            (this.L = el),
            a
        );
    }
)