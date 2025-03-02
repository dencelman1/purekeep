

export default (
    function(l) {
        var
            o = this.arrayFromO2,
            v = (
                (o.length = l),
                Array.from(o, this.NULL)
            )
        ;

        for (
            var i = 0;
            i < l;
            i++
        ) {
            v[i] = this.id();
        };

        return v;
    }
);