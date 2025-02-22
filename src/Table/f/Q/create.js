
import {openSync, writeSync, closeSync} from 'fs';



export default (
    function(
        t // times
    ) {

        // TODO: put into db clearly if (holes) { in holes }
        var
            BL = this.BL,
            B = this.B,
            
            P = this.P,

            d = openSync(this.ee, 'w')
        ;
        this.q.reduce(this.btord, 0);

        for (
            var i = 0;
            i<t;
            i++
        ) {
            this.bto[this.Type.int32](B,i,0); // *
            writeSync(d,B,0,BL,P);


            P+=BL;
        };

        return (
            closeSync(d),
            (this.P += (BL*t)),
            (this.L += t),
            true
        );
    }
)