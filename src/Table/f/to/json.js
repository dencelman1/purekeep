
export default (
    function(B, AR, keys) {
        var
            V = "{",
            bfrom = this.bfrom,
            t = this.t,
            s = this.s,
            r = this.r,
            type = 0,
            isstr = this.isstr,
            str = JSON.stringify,
            L = B.length
        ;
        
        for (
            var
                i = 0,
                type = 0
            ;
            i < L;
            i++
        ) {
            V += `\n    "${keys[i]}":`;

            V += str(
                isstr(type = t[i])
                ? (
                    bfrom[type](
                        AR[i],
                        0,
                        bfrom[ r[i] ]( B[i],0,0 )
                    )
                )
                : bfrom[type](B[i], 0,0)
            );

            V += ",";
        };
        return (
            V.substring(
                0,
                (
                    V.length
                    - 1
                )
            )
            + "\n}"
        );
    }
)