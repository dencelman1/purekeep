import { writeSync, readSync } from 'fs';


// W - int[] which values update;
// I - which ids updated ( first length );

export default (
    function(
        B,
        I,
        limit,

        W,
        wl,

        Q,
        QL,
        QV
    ) {
        var f = 0;

        a: for (
            var
                ei = 0,
                
                EL = this.EL,
                sh = this.sh,
                t = this.t,
                m = this.m,

                L = this.L,
                
                bse_s = this.bse_s,
                bse = this.bse,

                logic = this.logic,
                cond = this.compare,
                query = this.query,

                getb = this.getb,
                getsb = this.getsb,

                csh = null,
                
                shard_d = 0,
                shi = 0,

                bi = 0,
                pri = 0,

                batches = 0,
                P = 0,
                
                pr_of = 0,

                wi = 0,
                
                el_pri = 0,

                m0 = 0,

                M = null
            ;
            shi < EL;
            (shi++), (bi = P = 0)
        ) {
            shard_d = (
                (
                    csh = sh[shi]
                )[0]
            );
            batches = csh[1];
            
            for (
                ;
                bi < batches;
                (bi++), (pri = pr_of = 0), (P += bse_s)
            ) {
                readSync(shard_d, getb, 0, bse_s, P);

                for (
                    ;
                    pri < bse;
                    (pri++), ei++, (pr_of += EL)
                ) {
                    if (
                        ( getb[pr_of] === 1 )
                        &&
                        query(getsb[pri],Q,QV,t,QL,0,true,0,logic,cond)
                    ) {
                        I[f] = ei;
                        el_pri = ( EL * pri );

                        for ( ; wi < wl; wi++ ) {
                            B.copy(
                                getb,
                                (
                                    el_pri
                                    + ( m0 = ( M = m[ W[wi] ] )[0] )
                                ),
                                m0,
                                M[1]
                            );
                        };

                        writeSync(
                            shard_d,
                            getb,
                            el_pri,
                            EL,
                            (P + el_pri)
                        );
                        wi = 0;

                        if ( (++f) === limit ) {
                            break a;
                        };
                    };
                };
                if (ei >= L) {
                    break a;
                };

            };
        };
        return f;
    }
);
