import { writeSync, readSync, fsyncSync } from 'fs';


export default (
    function(
        B,
        I,

        o,
        l,

        W,
        wl,

        Q,
        QL,
        QV
    ) {
        var f = 0;

        a: for (
            var
                t = this.t,
                m = this.m,

                L = this.L,
                
                logic = this.logic,
                cond = this.compare,
                query = this.query,

                getb = this.getb,
                
                csh = null,

                ei = 0,

                EL = this.EL,
                shi = 0,
                
                bi = 0,
                batches = 0,


                sh = this.sh,
                P = 0,
                bse_s = this.bse_s,
                getsb = this.getsb,


                pri = 0,
                bse = this.bse,

                shard_d = 0,
                pr_of = 0,
                wi = 0,
                el_pri = 0,
                m0 = 0,
                M = null
            ;
            shi < EL;
            (shi++),(bi = P = 0)
        ) {
            for (
                    (
                        shard_d = (
                            (
                                csh = sh[shi]
                            )[0]
                        )
                    ),
                    ( batches = csh[1] )
                ;
                bi < batches;
                (bi++), (pri = pr_of = 0), (P += bse_s)
            ) {
                for (
                    readSync(shard_d, getb, 0, bse_s, P);
                    pri < bse;
                    (pri++), ei++, (pr_of += EL)
                ) {
                    if (
                        ( getb[pr_of] === 1 )
                        &&
                        query(getsb[pri],Q,QV,t,QL,0,true,0,logic,cond)
                        &&
                        (o ? ((o--), false): true)
                    ) {
                        for (
                                ( I[f] = ei ),
                                ( el_pri = ( EL * pri ) )
                            ;
                            wi < wl;
                            wi++
                        ) {
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
                        if (
                            writeSync(
                                shard_d,
                                getb,
                                el_pri,
                                EL,
                                (P + el_pri)
                            ),
                            fsyncSync(shard_d),
                            (wi = 0),

                            ( (++f) === l )
                        ) {
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
