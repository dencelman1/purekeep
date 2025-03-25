import * as f from './f/i.js';

import {
    join
} from 'path';

import {
    readFileSync,
    openSync,
    statSync
} from 'fs';


function Table(
    lc
) {
    var 

        CONST = JSON.parse(readFileSync(join(lc, "c"), "utf8")),

        EL = CONST.EL,
        m = CONST.m,
        
        o = this.arrayFromO,

        b = Buffer.alloc(CONST.bs, "\x00", "utf8"),
        L = 0,
        
        getfrom = (v) => b.subarray((I + v[0]), (I + v[1])),
        I = 0,

        e = join(lc, "e"),

        bs = CONST.bs,

        i = (bs - EL),
        B = 0
    ;
    
    readSync(
        (this.p = openSync(e, 1069058)),
        (this.b = b),
        0,
        bs,
        ((B = ( statSync(e).size / bs )) - 1) * bs
    );

    for (;i >= 0;i-=EL) {
        if (b[i] === 1) {
            break;
        }
    };

    this.L = (Math.max((this.B = B), 0) * (o.length = CONST.bea)) + ((bs - i) / EL);
    this.O = i;
    
    this.sb = (
        Array.from(
            o,
            (_, i) => (
                (I = i * EL),

                Array.from(
                    m,
                    getfrom
                )
            )
        )
    );

    this.onfilled = this.ondefaultfilled;
    this.onreleased = this.ondefaultreleased;

    Object.assign(this, CONST);
};

Table.prototype = f;

export default Table;

