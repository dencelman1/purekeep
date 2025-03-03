import * as f from './f/i.js';

import {
    writeFileSync,
    mkdirSync,
    existsSync,
    openSync,
    rmSync
} from 'fs';

import {
    join
} from 'path';


function Table(
    location,
    idlimit,
    force,

    types,

    rules,

    arraysize
) {
    var
        ee = "",
        configP = "",
        
        config = null,
        ps = null,

        mx = this.mx,
        
        isstr = this.isstr,
        z = this.z,

        offset = this.offset,
        mkdirO = this.mkdirO,

        sm = this.sm
    ;

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
            config = (
                JSON.parse(
                    readFileSync(
                        configP
                    )
                )
            )
        ),

        (this.configP = configP = config.configP),

        (rules = this.r = config.r),

        ( L = configP.L ),
        (ps = config.ps),

        (this.P = config.P),
        (this.OP = config.OP),

        (this.il = config.il),
        
        (this.t = types = config.t),
        (this.f = config.f),
        (this.EL = config.EL),
        (this.s = config.s),
        (this.idsl = config.idsl),

        (
            this.sd = (
                config
                .sdi
                .map(
                    (v, i) => (
                        isstr( types[i] )
                        ? (
                            new Map(
                                v
                                .reduce(
                                    (v,V) => (
                                        this.sdfrom(ps[i], V),
                                        v
                                    ),
                                    v
                                )
                            )
                        )
                        : null
                    )
                )
            )
        ),

        (
            this.v = (
                this
                .versionCheck(
                    config
                    .v
                )
            )
        )
    )
    : (


        (ee = join(location, "e")),

        (this.configP = configP = join(location, "c")),
        
        (
            this.r = (
                rules
            )
        )
        .reduce(
            (o, R, i, a) => {
                var I = 0;
                return (
                    (
                        a[i] = (
                            isstr(I = types[i])
                            ? R
                            : o[I]()
                        )
                    ),
                    o
                );
            },
            offset
        ),
        
        (ps = (
            Array.from(
                types,
                (_,i) => (
                    join(ee, i.toString())
                )
            )
        )),
        (this.idsl = 1),


        (
            this.s = (
                arraysize
            )
        ),
        
        (
            this.f = (
                (
                    this.t = types
                )
                .length
            )
        ),

        (this.t = types),
        
        (
            this.EL =
                rules.reduce(sm,0)
        ),


        (this.v = this.version),

        (this.il = (idlimit > mx ? mx: idlimit)),


        (this.P = Array.from(types, z)),
        (this.OP = Array.from(types, z)),

        (
            this.L = [ 0 ]
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

    this.ID = new Map();
    
    this.od = Array.from(
        ps,
        (p, i) => (
            isstr(types[i])
            ? (
                openSync(
                    (
                        p
                        + "o"
                    ),
                    "a+"
                )
            )
            : 0
        )
    );
    
    this.d = Array.from(
        ps,
        (p) => [openSync(p+"p0", 'a+')]
    );

    this.ps = ps;

    this.OB = Buffer.alloc(2);
    
    this.etypes = [
        rules, // unused

        rules,
        arraysize
    ];

    this.FORID = this.id();
    this.FORENTRY = this.entry();

};

Table.prototype = f;

export default Table;

