import * as f from './f/i.js';
import {ShardArray} from '../../Shard/i.js';

function ArrayValue(
    v
) {
    this.o = [
        ShardArray(0,0)
    ];

    this.l = [
        ShardArray(0,0)
    ];

    this.v = new Map(v);
};

ArrayValue.prototype = f;

export default ArrayValue;
