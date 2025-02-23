
import {
    Table,
    _
} from '../src/i.js';

import {join} from 'path';

export default (
    new Table(
        join(process.cwd(), "test/givtak"),
        Number.MAX_SAFE_INTEGER,
        (e) => (e),
        true,
        [
            _.uint32,
            _.str_utf8,
            _.bool,
            _.float32,
        ],
        [
            0,
            20,
            0,
            0
        ]
    )
);