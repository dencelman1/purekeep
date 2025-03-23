import { writeSync, readSync, fsyncSync } from "fs";


export default (
    function(
        E
    ) {
        var
            s = null,
            hB = null,

            L = 0,
            EL = 0,

            id = 0,
            
            s3 = 0,
            d = 0,
            
            hL = 0,
            mx = this.mx
        ;
        return (
            (
                this.filled ||= ( mx === L )
            )
            ? this.onfilled(E,0)
            : (
                this.confsave(),

                (EL = this.EL),
                (L = this.L),

                ((hL = this.hL) > 0)
                ? (
                    
                    (this.hL = --hL),
                    (
                        (s = this.current_h)[2]++
                    ),

                    (s3 = (s[3] -= 4))
                    || (
                        hL && (
                            
                            this.current_h = this.shswitch(
                                this.h,
                                this.hP,
                                --this.hc
                            )
                        )
                    ),

                    readSync(s[0], (hB = this.hB), 0,4,s3),
                    
                    (
                        s3 = (
                            (
                                id - (s = (
                                    this.sh[
                                        Math.floor(
                                            (
                                                id = hB.readUInt32LE(0)
                                            )
                                            / mx
                                        )
                                    ]
                                ))[4]
                            )
                            * EL
                        )
                    ),

                    (d = s[0])
                )
                : (
                    ((s = this.s)[2] === 0)
                    && (
                        s =
                        this.s = (
                            this.shswitch(
                                this.sh,
                                this.eP,
                                ++this.c
                            )
                        )
                    ),
                    
                    ( s[3] = ( ( s3 = s[3] ) + EL ) ),

                    (d = s[0]),

                    (
                        --this.bse_next
                    )
                    ||
                    (
                        s[1]++,
                        (this.bse_next = this.bse)
                    ),

                    (id = L)
                ),

                (s[2]--),
                
                writeSync(
                    d,
                    E,
                    0,
                    EL,
                    s3
                ),
                fsyncSync(d),

                ( this.L = L + 1 ),

                id
            )
        );
    }
)