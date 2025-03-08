import {openSync, existsSync, mkdirSync} from 'fs';


export default (
    (sh, p, c) => {
        var
            v = sh[c]
        ;
        return (
            ( v[0] = openSync((p + "/" + c.toString()), "a+") ),
            
            v
        );
    }
);
