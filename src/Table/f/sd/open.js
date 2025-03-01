
export default (
    function(
        f,
        l
    ) {
        var s = this.sd[f], v = null;

        return (
            s.has( l )
            ? s.get( l )
            : (
                s.set(l, (v = this.sdadd(this.ps[f], l))),
                v
            )
        )
    }
);
