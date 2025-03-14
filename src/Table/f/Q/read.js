import { readSync, writeSync } from 'fs';


/*
    B, // BUFFER (put here)
    BA, // buffer subarrays (put here through BUFFER);
    I, // ids (put here)

    Q, // queries
    QV, // Query values which uses in queries (Q) conditions
    
    [
        0 field_id,
        1 value_type,

        2 operation_id,
        3 value's_index_from_QE
    ];

*/

export default (
    function(
        B,
        BA,
        I,

        Q,
        QV,
    ) {
        var f = 0;
        a: for (
            ;
            ;
        ) {

            readSync(shard_d, cB, 0, EL, cEP);

            if (
                ( cB[0] === 1 )
                &&
                query(cBA,Q,QV,t,QL,0,logic,cond)
            ) {
                I[f++] = ei;

                if (f === to_f) {
                    break a;
                };

                cB = B[f];
                cBA = BA[f];
            };

        };
        

        return f;
    }
);
