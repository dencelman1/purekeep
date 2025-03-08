import {closeSync} from 'fs';


export default (
    (v) => {
        closeSync( v[0] );
        return undefined;
    }
);
