import {writeSync, readSync} from 'fs';


export default (
    function(
        I,
        limit,

        Q,
        QL,
        QV,
    ) {
        var
            f = 0
        ;
        
        
        

        a: for (
            var
                ei = 0,
                
                EL = this.EL,
                sh = this.sh,
                t = this.t,
                h = this.h,

                eb = this.eb,
                
                L = this.L,
                bse_s = this.bse_s,
                bse = this.bse,

                logic = this.logic,
                cond = this.compare,
                query = this.query,

                getb = this.getb,
                getsb = this.getsb,

                current_h = this.current_h,
                
                csh = null,

                hB = this.hB,
                
                shard_d = 0,
                shi = 0,

                bi = 0,
                pri = 0,

                batches = 0,
                P = 0,
                
                pr_of = 0,

                hP = this.hP


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
                        hB.writeBigUInt64LE(BigInt(I[f] = ei), 0);
                        writeSync(current_h[0], hB, 0,8,current_h[3]);

                        ( --current_h[2] )
                        || (
                            this.current_h =
                            current_h = (
                                this.shswitch(
                                    h,
                                    hP,
                                    ++this.hc
                                )
                            )
                        );
                        current_h[3] += 8;
                        this.hL++;

                        writeSync(shard_d,eb, 0,1, (P + ( EL * pri )));
                        
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
        
        return (
            this.confsave(),

            (this.L -= f),
            
            (this.filled && (f > 0))
            ? (
                (this.filled = false),
                this.onreleased(I,f,limit, Q,QL,QV)
            )
            : f
        );
    }
);
