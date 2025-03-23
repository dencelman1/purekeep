

export default (
    (k,t) => {
        var
            v = "",
            K = ""
        ;
        for (
            var
                i = 0,
                l = k.length
            ;
            i < l;
            i++
        ) {
            v+=`"${K = k[i]}":${JSON.stringify(t[K])},`
        };


        return (
            "{"
            + v.substring(0, v.length - 1)
            + "}"
        );
    }
);
