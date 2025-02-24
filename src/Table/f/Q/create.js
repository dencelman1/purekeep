
import {writeSync, closeSync} from 'fs';


export default (
    function(
        e
    ) {

        // TODO: put into db clearly if (holes) { in holes }
        var
            P = this.P,

            d = this.d,

            f = this.f,

            t = this.t,
            r = this.r,

            s = 0,
            I = 0
        ;
        
        for (
            var i = 0;
            i < f;
            i++
        ) {
            writeSync(d[i],e[i],0,(s = r[i]()),P[i]);
            P[i] += s;
        };

        return (
            (this.P = P),
            (this.L++)
            
        );
    }
)