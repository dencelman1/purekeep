
import {openSync} from 'fs';


export default (
    function(p, v, l) {

        v[0] = (
            openSync(
                `${p}l${l}`,
                'a+'
            )
        );
        return v;
    }
)