

export default (
    function(B, k) {
        var
            V = "{",

            types = this.t,
            L = types.length,
            bfrom = this.bfrom,
            r = this.r
        ;
        console.dir(B);
        for (var O = 0, i = 0;i<L;i++) {

            V+=`"${k[i]}":${JSON.stringify(bfrom[i](B, O))},`;
            O += r[i](bfrom[i](B, O));
        };
        
        return V.substring(0, V.length - 1) + "}";
    }
)