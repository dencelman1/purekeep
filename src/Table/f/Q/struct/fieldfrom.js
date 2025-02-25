import em from '../../empty.js';

export default (
    (a) => (r) => (
        r
        ? a(r, "\x00", "utf8")
        : em
    )
)(
    Buffer.alloc
);