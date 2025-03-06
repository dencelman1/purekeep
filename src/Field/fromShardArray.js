import {openSync} from 'fs';

export default (
    (v, p) => {
        v[0] =  openSync(p, "a+");
        v[1] = openSync((p + "h"), "a+");
        return v;
    }
)