
// [
//     s: sd[f],
// ]

export default (
    (
        s,
        f,
        l,
        ps,
        sdadd
    ) => {
        var v = null;

        return (
            s.has( l )
            ? s.get( l )
            : (
                s.set(l, (v = sdadd(ps[f], l, 0))),
                v
            )
        );
    }
);
