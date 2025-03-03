

export default (
    (proto) => function(keys) {
        var
            bfrom = this.bfrom,
            bto = this.bto,
            t = this.t,
            r = this.r,

            v = [],
            i = 0,
            l = keys.length,
            k = "",
            T = 0,
            isstr = this.isstr

        ;
        for (
            ;
            i < l;
            i++
        ) {
            isstr(T = t[i])
            ? (
                v.push([(k = keys[i] + "v"), bfrom[T]]),
                v.push([k+"_", bto[T]]),

                v.push([
                    (k = k.substring(0, k.length-1) + "l"),
                    (bfrom[T = r[i]])
                ]),
                v.push([k+"_", bto[T]])
            )
            : (
                v.push([(k = keys[i]), bfrom[T]]),
                v.push([k+"_", bto[T]])
            );
        };
        return Object.fromEntries(v);
    }
)();