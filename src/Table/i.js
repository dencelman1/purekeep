import * as f from './f/i.js';

import {
    writeFileSync,
    mkdirSync,
    existsSync,
    rmdirSync
} from 'fs';
import {join} from 'path';
import version from "../version.js";



// char limit <= 255 (Shardig mechanism);


function Table(
    location,
    idlimit,
    pbsize,
    types,
    rules,
) {

    var
        mx = Number.MAX_SAFE_INTEGER,

        em = this.empty,

        bto = this.bto,
        
        sv = this.defaultStartValues,

        nte = this.nte = join(location, "nt"),
        ee = this.ee = join(location, "e"),
        he = this.he = join(location, "h"),
        BL = 0,

        isStr = this.isStr,

        q = (
            this.q = (
                Array.from(
                    types,
                    (v) => sv[v]()
                )
            )
        )
    ;
    
    (
        this.r = rules
    )
    .reduce(
        (o, _, i,a) => {
            var I = types[i];
            return (
                isStr(I)
                ||
                (a[i] = o[I]),
                o
            );
        },
        this.offset
    );
    this.cache = new Map();

    this.il = (idlimit > mx ? mx: idlimit);
    this.v = version;

    this.f = (
        (
            this.t = types
        )
        .length
    );

    var B = (
        this.B = (
            Buffer.alloc(
                BL =
                this.BL = (
                    q.reduce(
                        (
                            this.countBytes = (
                                (r,v,i) => (
                                    r + rules[i](v)
                                )
                            )
                        ),
                        (
                            this.L =    // entries count
                            this.P = 0 // end pointer
                        )
                    )
                )
            )
        )
    );

    this.PB = Buffer.alloc(pbsize(BL), "\x00", "utf8");
    
    this.btord = (
        (o,v,i) => (
            bto[types[i]](B,v,o),
            
            (o + rules[i](v))
        )
    );

    existsSync(this.l = location)
    || (
        mkdirSync(location, this.mkdirO),
        
        writeFileSync( ee, em ),
        writeFileSync( he, em ),
        writeFileSync( nte, em ),

        writeFileSync(
            join(location, "c"),
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
};

Table.prototype = f;

export default Table;
