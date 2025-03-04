import * as f from './f/i.js';
import {ShardArray} from '../../Shard/i.js';

function FixedValue() {
    this.v = [
        ShardArray(0,0)
    ];
};

FixedValue.prototype = f;

export default FixedValue;
