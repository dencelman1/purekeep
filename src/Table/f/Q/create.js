
import {openSync, writeSync, closeSync} from 'fs';



export default (
    function(
        t, // times
        c // entries count
    ) {

        // TODO: put into db clearly if (holes) { in holes }
        var
            EL = this.EL,
            B = this.B,
            
            P = this.P,

            d = openSync(this.ee, 'w')
        ;
        
        for (
            var
                i = 0,
                j = 0
            ;
            i < t;
            i++
        ) {
            for (; j<c; j++) {
                writeSync(d,B,0,EL,P);
            };
            j = 0;
            P += EL;
        };

        return (
            closeSync(d),
            (this.P = P),
            (this.L += (t*c)),
            true
        );
    }
)