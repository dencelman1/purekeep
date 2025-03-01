
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
            _.str8,
            _.bool,
            _.float32,
        ],
        [
            _.uint8,
            0,
            0
        ],
        [
            20,
            0,
            0,
        ]
    )
);