import {writeSync, fsyncSync} from 'fs';


export default (
    function(
        id
    ) {
        var
            sh = this.sh[Math.floor(id / this.mx )],
            EL = this.EL,
            current_h = this.current_h,
            hB = this.hB,
            current_h_0 = current_h[0],
            sh0 = sh[0]
        ;
        return (
            hB.writeUInt32LE((id), 0),
            
            writeSync(current_h_0, hB, 0,4,current_h[3]),
            
            ( --current_h[2] )
            || (
                this.current_h =
                current_h = (
                    this.shswitch(
                        this.h,
                        this.hP,
                        ++this.hc
                    )
                )
            ),

            (current_h[3] += 4),
            (this.hL++),

            (this.L--),
            
            writeSync(sh0, this.eb, 0, 1, ((id - sh[4]) * EL)),

            (this.dump = true),

            1
        );
    }
);
