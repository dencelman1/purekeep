import {writeSync} from 'fs';

/*
    d, // (d||sd)[i]
    b, // (e||l)[i]
    s, // (r||ss)[i]
    P, // P[i]
*/

export default (
    (
        d,
        b,
        s,
        P,
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
