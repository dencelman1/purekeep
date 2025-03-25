import { mkdirSync, rmSync, existsSync, writeFileSync } from 'fs';

import {join} from 'path';

import offset from '../f/offset/i.js';
import isstr from '../f/is/str.js';

import fo from './fo.js';


// bs // stat -fc %s . // block size;
// fs // db_file_size // df -T /your/path // ex: 17_592_186_044_416

// fba // used blocks size (for all file);


export default (
    (
        lc,

        bs,
        fs,

        fba,

        types,
        rules,
    ) => {
        var
            EL = (
                rules
                .reduce(
                    (r, R, i, a) => {
                        var I = 0;
                        return (
                            r
                            + (
                                a[i] = (
                                    isstr(I = types[i])
                                    ? R
                                    : offset[I]()
                                )
                            )
                        );
                    },
                    EL
                )
            ),

            bea = 0,
            mx = 0,
            
            i = 0
        ;
        return (
            ( ( (bea = fs / bs ) - Math.floor(bea) ) > 0.0 )
            ? console.error(`file size shall be divisible by block size ( ${bs} ) without remainder`)
            :
            (
                EL > bs
            )
            ? console.error(`your entry length ( ${EL} b ), it must be less than block size ( ${bs} b )`)
            :

            ( ( (bea = (bs / EL)) - Math.floor(bea) ) > 0.0 )
            ? console.error(`entry length shall be divisible by block size ( ${bs} ) without remainder`)
            :

            (
                existsSync(lc) && rmSync(lc, fo)

                , (
                    mx = (
                        (
                            fs = (
                                (
                                    fba ||= (
                                        Math.min(
                                            fba,
                                            (
                                                Math.min(
                                                    fs,
                                                    (4_294_967_296 * EL)
                                                )
                                                / bs
                                            )
                                        )
                                    )
                                )
                                * bs
                            )
                        )
                        / EL
                    )
                )

                , mkdirSync(lc, fo)

                , writeFileSync(
                    join(lc, "e"),
                    (
                        (b) => (
                            (b[0] = 1),
                            b
                        )
                    )(
                        Buffer.alloc(bs, "\x00", 'utf-8')
                    )
                )

                , writeFileSync(
                    join(lc, "c"),
                    JSON.stringify({
                        fs,
                        bs,

                        fba,
                        bea,

                        mx,
                        EL,

                        f: types.length,
                        t: types,
                        r: rules,
        
                        m: (
                            Array.from(
                                rules,
                                () => [0,0]
                            )
                            .reduce(
                                (_, M, I,a) => (
                                    (i = (M[1] = (M[0] = i) + rules[I])),
                                    a
                                ),
                                null
                            )
                        ),
                    }, null, 4),
                    "utf8"
                )
                
                , console.log("successfull deployed")
            )
        );
    }
);