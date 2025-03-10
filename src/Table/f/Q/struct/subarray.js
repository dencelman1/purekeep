

export default (
    function(B) {
        var a = Array.from(this.m, this.BUFFER);
        for (
            var
                i = 0,
                m = this.m,
                l = m.length,
                v = null
            ;
            i < l;
            i++
        ) {
            v = m[i];
            a[i] = B.subarray(v[0], v[1]);
        };
        return a;
    }
)