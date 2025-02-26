import * as f from './f/i.js';

import {
    writeFileSync,
    mkdirSync,
    existsSync,
    openSync,
    rmSync
} from 'fs';
import {join} from 'path';

function Table(
    location,
    idlimit,
    force,
    types,
    rules,
    size
) {
    var
        mx = Number.MAX_SAFE_INTEGER,

        em = this.empty,

        ee = join(location, "e"),
        he = join(location, "h"),

        configP = join(location, "c"),
        
        isstr = this.isstr,
        
        config = null,
        mkdirO = this.mkdirO,
        EL = 0,

        L = 0,
        ps = null,

        z = this.z,
        sdi = null,
        offset = this.offset
    ;

    this.configP = configP;
    
    ( this.r = rules )
    .reduce(
        (o, R, i,a) => {
            var I = types[i];
            return (
                (
                    a[i] = (
                        isstr(I)
                        ? R
                        : o[I]()
                    )
                ),
                o
            );
        },
        offset
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
        (this.P = config.P),
        (this.SP = config.SP),
        (this.il = config.il),
        
        (this.v = this.versionCheck(config.v)),
        (this.t = config.t),
        (this.f = config.f),
        (EL = config.EL),
        (this.s = config.s),
        (this.ss = config.ss),

        (
            sdi =
            this.sdi = (
                new Map(
                    config
                    .sdi
                    .map(
                        (v, i) => [
                            i,
                            new Map(v)
                        ]
                    )
                )
            )
        )
    )
    : (
        (this.s = size),
        (this.ss = Array.from(size, (s) => (
            s ? offset[s](): s
        ))),

        (this.f = (( this.t = types ).length)),

        (this.t = types),
        
        (
            this.EL =
            EL = (
                rules
                .reduce(
                    (
                        (r,f, i) => (
                            (r + f) + Number(
                                isstr(
                                    types[i]
                                )
                            )
                        )
                    ),
                    0
                )
            )
        ),


        (this.v = this.version),

        (this.il = (idlimit > mx ? mx: idlimit)),


        (this.P = Array.from(types, z)),
        (this.SP = Array.from(types, z)),

        (
            this.L = L = 0
        ),

        (
            sdi =
            this.sdi = new Map(
                types
                .map(
                    (_, i) => [
                        i,
                        new Map()
                    ]
                )
            )
        ),

        mkdirSync(location, mkdirO),
        mkdirSync(ee, mkdirO),
        
        writeFileSync( he, em ),

        this.confdump()
    );

    this.d = Array.from(
        (
            ps = Array.from(
                types,
                (_,i) => {
                    var p = join(ee, i.toString());
                    writeFileSync(p, em)
                    return p;
                }
            )
        ),
        (p) => openSync(p, 'a+')
    );

    this.sd = (
        Array.from(
            ps,
            (p,i) => {
                var t = types[i];
                return (
                    isstr(t)
                    ? (
                        new Map(
                            Array.from( sdi.get( i ) )
                            .map(
                                (v) => [
                                    v[0],
                                    openSync(
                                        (
                                            p
                                            + "s"
                                            + v[1].toString()
                                        ),
                                        'a+'
                                    )
                                ]
                            )
                        )
                    )
                    : null
                )
            }
        )
    );

    this.etypes = [
        rules, // unused

        rules,
        size
    ];
};

Table.prototype = f;

export default Table;

