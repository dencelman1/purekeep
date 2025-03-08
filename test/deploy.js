import {
    TableDeploy,
    Type as _
} from '../src/i.js';
import { join } from 'path';

TableDeploy(
    join(process.cwd(), "test/givtak"),
    Number.MAX_SAFE_INTEGER,
    [
        _.str8,
        _.bool,
        _.float32,
    ],
    [
        20,
        0,
        0
    ],
);
