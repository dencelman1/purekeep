

import _ from './init.js';

(
    (q, s, keys) => (
        (q[0] = 1),
        (q[1] = "hello_world"),
        (q[2] = true),
        (q[3] = 0.0),

        (s = Date.now()),

        _.create(10_000),
        console.log(_.toObject(_.toJson(_.read(120, 1), keys))),

        console.log((Date.now() - s)/1000)
    )
)(_.q, 0, [
    "id",
    "name",
    "adult",
    "percentValue"
])



