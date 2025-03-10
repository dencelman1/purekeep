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
        _switch = this.shswitch
    ;

    // from const:

    Object.assign(this, JSON.parse(readFileSync(join(lc, "c"), "utf8")));
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
    
    this.confid = 0;
    this.confcb = this.conftemplate(this);

    this.onfilled = this.ondefaultfilled;
    this.onreleased = this.ondefaultreleased;
};

Table.prototype = f;

export default Table;
