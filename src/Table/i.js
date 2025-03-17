import * as f from './f/i.js';

import {
    join
} from 'path';

import {
    readFileSync
} from 'fs';


function Table(
    lc
) {
    var
        D = JSON.parse(readFileSync(join(lc, "d"), "utf8")),
        CONST = JSON.parse(readFileSync(join(lc, "c"), "utf8")),

        EL = CONST.EL,
        m = CONST.m,

        _switch = this.shswitch,
        o = this.arrayFromO,

        getb = Buffer.alloc(D.bse_s, "\x00", "utf8"),
        
        I = 0,

        getfrom = (v) => getb.subarray((I + v[0]), (I + v[1]))
    ;

    // from const:

    Object.assign(this, CONST);
    this.v = this.versionCheck(this.v);
    
    // save (dynamic):

    Object.assign(this, D);

    // in-runtime:

    this.dP = join((this.lc = lc), "d");

    this.s =
        _switch(this.sh, ( this.eP = join(lc, "e") ), this.c);

    this.current_h =
        _switch(this.h, ( this.hP = join(lc, "h") ), this.hc);

    this.hB = Buffer.alloc(8);

    // this.padb = Buffer.alloc(this.bse_s, "\x00", 'utf8');

    this.getb = getb;

    o.length = D.bse;
    
    this.getsb = (
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

    this.eb = Buffer.alloc(1, "\x00", "utf8");
    
    this.confid = 0;
    this.confcb = this.conftemplate(this);

    this.onfilled = this.ondefaultfilled;
    this.onreleased = this.ondefaultreleased;
};

Table.prototype = f;

export default Table;
