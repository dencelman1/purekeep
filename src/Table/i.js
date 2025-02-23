import * as f from './f/i.js';

import {
    writeFileSync,
    mkdirSync,
    existsSync,
    rmdirSync,
    rmSync
} from 'fs';
import {join} from 'path';

function Table(
    location,
    idlimit,
    bsize,
    queries,
    force,
    types,
    rules,
) {
    var
        mx = Number.MAX_SAFE_INTEGER,

        em = this.empty,

        nte = this.nte = join(location, "nt"),
        ee = this.ee = join(location, "e"),
        he = this.he = join(location, "h"),

        bfrom = this.bfrom,
        bto = this.bto,

        configP = join(location, "c"),
        
        isStr = this.isStr,
        
        config = null,
        L = 0,
        mkdirO = this.mkdirO,
        EL = 0,
        BL = 0,

        Q = 0,
        FOI = 0,
        isQ = false
    ;

    this.l = location;

    ( this.r = rules )
    .reduce(
        (o, R, i,a) => {
            var I = types[i];
            return (
                (
                    a[i] = (
                        isStr(I)
                        ? R
                        : o[I]()
                    )
                ),
                o
            );
        },
        this.offset
    );

    var FO = this.FO = (
        Array.from(rules, (R, i) => {
            var
                I = types[i],
                O = FOI
            ;
            (
                FOI += (
                    isStr(I)
                    ? R + 1
                    : R
                )
            );
            return O;
        })
    );

    (
        force
        ?(
            rmSync(location, mkdirO),
            false
        )
        : existsSync(location)
    )
    ? (
        (
            L = (
                (
                    config = (
                        JSON.parse(
                            readFileSync(
                                configP,
                                "utf8"
                            )
                        )
                    )
                )
                .L
            )
        ),
        (Q = config.Q)
        (this.P = config.P),
        (this.il = config.il)
        
        (this.v = this.versionCheck(config.v)),
        (BL = config.BL),
        (this.t = config.t),
        (this.f = config.f),
        (EL = config.EL)
    )
    : (
        (
            Q = (
                queries < 3
                ? 3
                : (
                    (isQ = ((queries + 1) % 4)) === 0
                    ? queries
                    : queries + (4 - isQ)
                )
            )
        ),
        (this.f = (( this.t = types ).length)),

        (this.t = types),

        (
            BL = (
                (
                    (
                        BL = bsize(
                            EL =
                                rules
                                .reduce(
                                    (
                                        (r,f, i) => (
                                            (r + f) + Number(
                                                isStr(types[i])
                                            )
                                        )
                                    ),
                                    0
                                )
                        )
                    ) < EL
                )
                ? EL
                : BL
            )
        ),


        (this.v = this.version),

        this.il = (idlimit > mx ? mx: idlimit),
        (
            this.P =
            L = 0
        ),

        mkdirSync(location, mkdirO),
        
        writeFileSync( ee, em ),
        writeFileSync( he, em ),
        writeFileSync( nte, em ),

        writeFileSync(
            configP,
            Buffer.from(
                JSON.stringify(
                    this,
                    null,
                    0
                ),
                "utf8"
            )
        )
    );

    // *
    this.EL = EL;

    this.B = Buffer.alloc((this.BL = BL), "\x00", "utf8");
};

Table.prototype = f;

export default Table;

