import * as f from './f/i.js';

import {
    join
} from 'path';

import {
    readFileSync,
    closeSync
} from 'fs';


function Table(
    lc,
    dump
) {
    var
        D = JSON.parse(readFileSync(join(lc, "d"), "utf8")),
        CONST = JSON.parse(readFileSync(join(lc, "c"), "utf8")),

        EL = CONST.EL,
        m = CONST.m,

        _switch = this.shswitch,
        o = this.arrayFromO,

        getb = Buffer.alloc(CONST.bse_s, "\x00", "utf8"),
        
        I = 0,

        getfrom = (v) => getb.subarray((I + v[0]), (I + v[1])),

        sh = D.sh,

        reverse = (r,v,i) => (
            (
                r[r.length - 1 - i] = v
            ),
            r
        ),
        i = 0,
        l = 0,

        eP = join(lc, "e"),
        hP = join(lc, "h"),
        h = D.h,
        dump = false,

        close_h = (
            (closeSync,v) => {
                var A = v[0];
                return (
                    (A === -2)
                    ||
                    (console.log(A),closeSync(A),1),
                    closeSync
                )
            }
        ),
        
        finsh = (
            () => (
                sh.reduce(close_h, h.reduce(close_h, closeSync))
            )
        )
    ;

    // from const:

    Object.assign(this, CONST);
    this.v = this.versionCheck(this.v);
    
    // save (dynamic):

    Object.assign(this, D);

    // in-runtime:

    this.dP = join((this.lc = lc), "d");

    this.hP = hP;
    this.eP = eP;
    
    for (l = sh.length; i < l; i++) {
        if ( sh[i][0] === -2 ) {
            break;
        }
        else { _switch(sh, eP, i); }
    };
    this.s = i ? sh[i = this.c]: ((dump=true), _switch(sh, eP, i));

    for (((i = 0), (l = h.length)); i < l; i++) {
        if (h[i][0] === -2) {
            break;
        }
        else { _switch(h, hP, i); }
    };
    this.current_h = i ? h[i = this.hc]: ((dump=true), _switch(h, hP, i));
    
    this.rsh = Array.from(sh).reduce( reverse, sh );

    this.hB = Buffer.alloc(8);
    
    this.getb = getb;

    o.length = CONST.bse;

    this.JSON = {
        L: 0,
        m: this.m,
        t: this.t,
        r: this.r,
        EL: this.EL,

        CompareType: this.CompareType,
        LogicType: this.LogicType,
    };
    
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

    setInterval(
        () => (this.dump &&= (this.confdump(),false)),
        dump
    );

    this.dump = dump;
    
    this.eb = Buffer.alloc(1, "\x00", "utf8");
    
    this.confid = 0;
    this.confcb = this.conftemplate(this);

    this.onfilled = this.ondefaultfilled;
    this.onreleased = this.ondefaultreleased;
};

Table.prototype = f;

export default Table;

