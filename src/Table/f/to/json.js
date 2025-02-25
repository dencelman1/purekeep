
export default (
    function(B, k, l) {
        var
            V = "{",
            types = this.t,
            L = types.length,
            TypeAlias = this.TypeAlias
        ;
        for (
            var
                i = 0,
                type = ""
            ;
            i<L;
            i++
        ) {
            type = types[i];
            V+=`"${k[i]}":${JSON.stringify(this[ TypeAlias[type] ](B[i], i, 0))},`;
        };
        return V.substring(0, V.length - 1) + "}";
    }
)