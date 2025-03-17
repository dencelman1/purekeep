import { readSync } from 'fs';


/*
    B, // BUFFER (put here)
    I, // ids (put here)
    

    Q, // queries
    QL // queries.length
    QV, // Query values which uses in queries (Q) conditions
    
    [
        0 field_id,
        1 operation_id,
        2 value's_index_from_QE
    ];

*/

export default (
    function(
        B,
        I,
        limit,

        Q,
        QL,
        QV,
    ) {
        var f = 0;
        
        a: for (
            var
                ei = 0,

                EL = this.EL,
                sh = this.sh,
                t = this.t,
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

                entry = null
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
                    (pri++), ei++
                ) {
                    entry = getsb[pri];

                    if (
                        ( getb[pr_of] === 1 )
                        &&
                        query(entry,Q,QV,t,QL,0,true,0,logic,cond)
                    ) {
                        I[f] = ei;
                        getb.copy(B, (f * EL), pr_of, (pr_of += EL));
    
                        if ((++f) === limit) {
                            break a;
                        };
                    }
                    else {
                        pr_of += EL;
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
