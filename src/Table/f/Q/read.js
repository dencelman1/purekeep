    import {readSync, openSync, closeSync} from 'fs';

export default (
    function(
        q,
        c
    ) {
        var 
            d = openSync(this.ee, 'r'),
            B = this.B,
            EL = this.EL,

            O = 0,
            _L = EL,

            L = this.L,

            i = 0,
            P = 0,

            a = false,

            BL = this.BL,

            compare = this.compare,
            logic = this.logic,

            lf = null,

            l = 0,
            ql = q.length,
            ch = true,
            query = this.query
        ;

        B.fill("\x00", 0, BL, "utf8");

        for (
            ;
            i < L;

            (P += EL), i++, (ch = true)
        ) {
            readSync(d, B, O, _L, P);
            
            if (
                query(
                    q,
                    B,
                    ql,
                )
            ) {
                O += EL;
                _L += EL;
                
                if ((--c) === 0) {
                    break;
                };
            };
        };

        c && B.fill("\x00", O, _L, "utf8");

        return (
            closeSync(d),
            B
        );
    }
);
