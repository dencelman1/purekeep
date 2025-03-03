
import {openSync} from 'fs';


export default (
    function(p, v) {
        var P = `${p}l${v[2]}`;

        v[0] = (
            openSync(
                P,
                'a+'
            )
        );
        v[4] = (
            openSync(
                P + "o",
                'a+'
            )
        );
        return undefined;
    }
)