import {readSync }from 'fs';

// F = Q[ai]
// BL = E[ F ]
// SIZE = r[F]
// gl = bfrom[s[F]]
// SV = CURRENT_SV[F]

export default (
    function(
        F,
        BL,
        IV,
        OB,
        SIZE,
        SV,
        gl,
        
        d, od, sd
    ) {
        var LENGTH = 0;
        return (
            readSync(
                d[F],
                BL,
                0,
                SIZE,
                (IV * SIZE)
            ),
            
            readSync(
                od[F],
                OB,
                0,
                2,
                (IV*2)
            ),

            readSync(
                (
                    this
                    .sdopen(
                        sd[F],
                        F,
                        (
                            LENGTH = gl(BL,0,0)
                        )
                    )
                )[0],
                SV,
                0,
                LENGTH,
                (OB.readUInt16LE(0) * LENGTH)
            ),

            SV
        );
    }
)