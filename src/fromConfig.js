import {join} from 'path';
import {readFileSync} from 'fs';

import * as f from './Table/f/i.js';
import * as tf from './Table/f/i.js';

export default (
    (l) => {
        var
            pk = (
                JSON.parse(
                    readFileSync(
                        join(l, "./config.json"),
                        "utf8"
                    )
                )
            )
        ;
        return (
            pk
            .t
            .reduce(
                (P, t) => (
                    P(t, tf),
                    P
                ),
                Object.setPrototypeOf
            )(
                pk,
                f
            )
        );
    }
)