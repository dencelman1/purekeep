import {writeSync} from 'fs';

export default (
    (
        d, // (d||sd)[i]
        b, // (e||l)[i]
        s, // (r||ss)[i]
        P, // P[i]
    ) => (
        writeSync(
            d,
            b,
            0,
            s,
            P   
        ),
        (P + s)
    )
);
