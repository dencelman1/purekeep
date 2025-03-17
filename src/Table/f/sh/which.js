

export default (
    function(sh, id) {
        
        for (
            var
                s = null,
                i = 0,
                l = sh.length
            ;
            i < l;
            i++
        ) {
            if ( ( id >= (s = sh[i])[4] ) && ( id <= s[5] ) ) {
                break;
            };
        };
        
        return s;
    }
);