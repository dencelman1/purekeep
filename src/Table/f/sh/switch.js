import {openSync, existsSync,writeFileSync} from 'fs';


export default (
    (sh, p, c) => {
        var
            v = sh[c],
            P = (p + "/" + c.toString())
        ;
        return (
            existsSync(P) || writeFileSync(P, ""),
            (v[0] = openSync(P, "r+")),
            
            v
        );
    }
);
