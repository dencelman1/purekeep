import {readSync} from 'fs';

// F = Q[ ai ] (=FIELD_ID)

// d = d[ F ];
// B = CURRENT_E[ F ]
// S = r[F]


export default (
    (d, B, S, i) => {
        readSync(
            d,
            B,
            0,
            S,
            (i * S)
        );
        return B;
    }
)