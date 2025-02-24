
import {
    Table,
    _
} from '../src/i.js';

import {join} from 'path';

export default (
    new Table(
        join(process.cwd(), "test/givtak"),
        Number.MAX_SAFE_INTEGER,
        true,
        [
            _.str_utf8,
            _.bool,
            _.float32,
        ],
        [
            20,
            0,
            0
        ]
    )
);