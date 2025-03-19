

export default (
    function(e, u) {
        var
            EL = this.EL + u,
            sm = (EL * e),
            b = Buffer.alloc(sm, "\x00", "utf8")
        ;
        for (
            var i = 0;
            i < sm;
            i += EL
        ) {
            b[i] = 1;
        };
        return b;
    }
)