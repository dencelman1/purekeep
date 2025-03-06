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
        D = JSON.parse(readFileSync(join(lc, "d"), "utf8"))
    ;

    // from const:

    Object.assign(this, JSON.parse(readFileSync(join(lc, "c"), "utf8")));
    this.v = this.versionCheck(this.v);
    
    // save (dynamic):

    Object.assign(this, D);
    
    // in-runtime:

    this.lc = lc;

    this.dP = join(lc, "d");
    
    this.confid = 0;
    this.confcb = this.conftemplate(this);
};

Table.prototype = f;

export default Table;
