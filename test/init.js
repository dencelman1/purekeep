
import {
    Table,
    Type as _
} from '../src/i.js';

import {join} from 'path';

export default (
    new Table(
        join(process.cwd(), "test/givtak")
    )
);