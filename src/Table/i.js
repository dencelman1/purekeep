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
    idslength,
    force,
    types,
    rules,
    size
) {
    var
        mx = Number.MAX_SAFE_INTEGER,

        em = this.empty,

        ee = join(location, "e"),
        
        configP = join(location, "c"),
        
        isstr = this.isstr,
        
        config = null,
        mkdirO = this.mkdirO,
        ps = null,

        L = 0,
        
        z = this.z,
        offset = this.offset
    ;

    this.configP = configP;
    
    (
        this.r = rules
    )
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
        ? (
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
        (ps = config.ps),

        (this.P = config.P),
        (this.SP = config.SP),
        (this.OP = config.OP),
        
        (this.il = config.il),
        
        (this.v = this.versionCheck(config.v)),
        (this.t = types = config.t),
        (this.f = config.f),
        (EL = config.EL),
        (this.s = config.s),
        (this.ss = config.ss),
        (this.idsl = config.idsl),

        (
            this.sd = (
                config
                .sdi
                .map(
                    (v, i) => {
                        var m = null;
                        return (
                            isstr( types[i] )
                            ? (
                                (
                                    m = (
                                        new Map(
                                            v
                                            .reduce(
                                                (v,V,I) => (
                                                    this.sdfrom(ps[i], V, V[2]),
                                                    v
                                                ),
                                                v
                                            )
                                        )
                                    )
                                ),
                                
                                m
                            )
                            : null
                        );
                    }
                )
            )
        )
    )
    : (
        (ps = (
            Array.from(
                types,
                (_,i) => {
                    var
                        I = i.toString(),
                        p = join(ee, I),
                        O = join(ee, i.toString() + I + "o")
                    ;
                    
                    writeFileSync(p, em);
                    writeFileSync(O, em);

                    return p;
                }
            )
        )),
        (this.idsl = idslength),

        (this.s = size),
        (this.ss = Array.from(size, (s) => (
            s
            ? offset[s]()
            : s
        ))),

        (this.f = (( this.t = types ).length)),

        (this.t = types),
        
        (
            this.EL =
            EL = (
                rules
                .reduce(
                    (
                        (r,f) => (
                            r + f
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
        (this.OP = Array.from(types, z)),

        (
            this.L = L = 0
        ),

        (
            this.sd = (
                types
                .map(
                    (v) => (
                        isstr(v)
                        ? new Map()
                        : null
                    )
                )
            )
        ),

        mkdirSync(location, mkdirO),
        mkdirSync(ee, mkdirO),
        
        this.confdump()
    );

    this.od = Array.from(
        ps,
        (p, i) => (
            openSync(
                (
                    p
                    + i.toString()
                    + "o"
                ),
                "a+"
            )
        )
    );
    
    this.d = Array.from(
        ps,
        (p) => openSync(p, 'a+')
    );

    this.ps = ps;

    this.OB = Buffer.alloc(4);
    
    this.etypes = [
        rules, // unused

        rules,
        size
    ];
};

Table.prototype = f;

export default Table;

