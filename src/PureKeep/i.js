import {readFileSync} from 'fs';

// 1 json database;
// 2 binary database;

function PureKeep(
    location,
    idlimit
) {
    this.l = location;
    this.il = idlimit;
};

export default PureKeep;

