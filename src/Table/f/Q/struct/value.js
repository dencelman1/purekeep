
export default (
    function(a) {
        var
            o = this.arrayFromO,
            A = (
                Array.from(
                    (
                        (o.length = (a.length / 2)),
                        o
                    ),
                    this.NULL
                )
            ),
            r = this.r,
            s = this.s,
            abs = Math.abs,
            v = 0
        ;

        
        for (
            var
                l = a.length,
                i = 0
            ;
            i < l;
            i+=2
        ) {
            A[i] = Buffer.alloc(
                (
                    (a[i + 1])
                    ? s
                    : r
                )[
                    a[i]
                ],

                "\x00",
                "utf8"
            );
        };
        return A;
    }
);
