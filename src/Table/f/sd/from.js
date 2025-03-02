
import {openSync} from 'fs';


export default (
    function(p, v) {
        v[0] = (
            openSync(
                `${p}l${v[2]}`,
                'a+'
            )
        );
        return undefined;
    }
)