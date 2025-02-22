
import {
    connect,

    Table,
    _
} from '../src/i.js';

import {join} from 'path';


export default (
    (
        (deployed, db) => {
            return (
                deployed
                ? (
                    new Table(
                        db,
                        Number.MAX_SAFE_INTEGER,
                        (e) => ( e * 10 ),
                        [
                            _.uint32,
                            _.str_utf8,
                            _.bool,
                            _.float32,
                        ],
                        [
                            () => 0,
                            () => 20,
                            () => 0,
                            () => 0
                        ]
                    )
                )
                : connect(db)
            );
        }
    )(
        true,
        join(process.cwd(), "test/givtak")
    )
);