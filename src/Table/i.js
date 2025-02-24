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
) {
    var
        mx = Number.MAX_SAFE_INTEGER,

        em = this.empty,

        ee = join(location, "e"),
        he = this.he = join(location, "h"),

        configP = join(location, "c"),
        
        isstr = this.isstr,
        
        config = null,
        mkdirO = this.mkdirO,
        EL = 0,

        L = 0,
        ps = null
    ;

    this.l = location;

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
        this.offset
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
        (this.il = config.il)
        
        (this.v = this.versionCheck(config.v)),
        (this.t = config.t),
        (this.f = config.f),
        (EL = config.EL),
        (ps = config.ps)
    )
    : (
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
                                isstr(types[i])
                            )
                        )
                    ),
                    0
                )
            )
        ),


        (this.v = this.version),

        this.il = (idlimit > mx ? mx: idlimit),


        (
            this.P = Array.from(types, () => 0)
        ),

        (
            this.L = L = 0
        ),
        
        mkdirSync(location, mkdirO),
        mkdirSync(ee, mkdirO),
        
        writeFileSync( he, em ),

        (ps = this.ps = Array.from(types, (_,i) => {
            var p = join(ee, i.toString());
            writeFileSync(p, em)
            return p;
            
        })),
        
        writeFileSync(
            configP,
            Buffer.from(
                JSON.stringify(
                    this,
                    (_, v) => (
                        v instanceof Set
                        ? Array.from(v)
                        : v
                    ),
                    0
                ),
                "utf8"
            )
        )
    );

    this.d = Array.from(ps, (p, i) => (
        openSync(p, 'a+')
    ));

    this.sd = Array.from(ps, (p, i) => (
        isstr(types[i])
        ? openSync(p + "s", 'a+')
        : null
    ));

    // *
    
    this.pb = (
        Array.from(types, (_, i) => (
            Buffer.alloc(rules[i], "\x00", "utf8")
        ))
    );

};

Table.prototype = f;

export default Table;

