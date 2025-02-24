
import { writeSync, closeSync} from 'fs';


export default (
    function(
        es,
        ql,
        I
    ) {

        // TODO: put into db clearly if (holes) { in holes }
        var
            P = this.P,

            d = this.d,

            f = this.f,

            r = this.r,

            L = this.L,

            s = 0
        ;
        for(
            var
                q = 0,
                e = null
            ;
            q < ql;
            q++
        ) {
            e = es[q];
            for (
                var
                    i = 0
                ;
                i < f;
                i++
            ) {
                writeSync(d[i],e[i],0,(s = r[i]),P[i]);
                P[i] += s;
            };
            I[q] = L++;
        };

        return (
            (this.L = L),
            (this.P = P),

            I
        );
    }
)