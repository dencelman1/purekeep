
// [
//     s: sd[f],
// ]

export default (
    function(
        s,
        f,
        l
    ) {
        var v = null;

        return (
            s.has( l )
            ? s.get( l )
            : (
                s.set(l, (v = this.sdadd(this.ps[f], l, 0))),
                v
            )
        )
    }
);
