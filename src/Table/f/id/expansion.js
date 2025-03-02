

export default (
    function(v) {
        var
            ID = this.ID,
            s = ID.size
        ;
        for (
            var i = 0;
            i < s;
            i++
        ) {
            ID
            .get(i)
            .push(v);
        };
        return s;
    }
);
