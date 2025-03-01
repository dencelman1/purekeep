import z from './z.js';
import {arrayFromO2} from '../../O/i.js';



export default (
    (af) => function(i) {
        var o = this.arrayFromO;

        o.length = i;
        arrayFromO2.length = this.idsl;

        return Array.from(o, af);
    }
)(
    () => Array.from(arrayFromO2, z)
)