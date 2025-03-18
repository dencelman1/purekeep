import {writeSync} from 'fs';


export default (
    function(
        id
    ) {
        var
            sh = this.sh[Math.floor(id / this.mx )],
            EL = this.EL,
            current_h = this.current_h,
            hB = this.hB
        ;

        return (
            this.confsave(),

            hB.writeBigUInt64LE(BigInt(id), 0),
            writeSync(current_h[0], hB, 0,8,current_h[3]),

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

            (current_h[3] += 8),
            (this.hL++),

            (this.L--),
            
            writeSync(sh[0], this.eb, 0, 1, ((id - sh[4]) * EL)),

            1
        );
    }
);
