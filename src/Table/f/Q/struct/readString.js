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
        
        SD0,
        LENGTH,
        
        d, od
    ) {
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
                SD0,
                SV,
                0,
                LENGTH,
                (OB.readUInt16LE(0) * LENGTH)
            ),

            SV
        );
    }
)