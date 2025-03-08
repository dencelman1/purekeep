
export default (
    function(B, keys) {
        var
            V = "{",
            bfrom = this.bfrom,
            str = JSON.stringify,
            
            m = this.m,
            t = this.t,
            L = m.length
        ;
        
        for (
            var
                i = 0,
                M = m[0]
            ;
            i < L;
            i++
        ) {
            M = m[i];
            V += `\n    "${keys[i]}":`;

            V += str(
                bfrom[t[i]](B,M[0],M[1])
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