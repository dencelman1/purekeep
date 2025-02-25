import { readSync } from 'fs';


// [field_id, operation_id, value_buffer_id];
// [and, or];

// [...Buffers];

/*
    E, // entries (put here)
    L, // lengths (put here)
    A, // ids (put here)

    Q, // queries
    LQ, // logic queries
    FI // fields (which fields put into E, L)


[
    field_id,
    value_type,

    operation_id,
    value's_index_from_QE
];

*/

export default (
    function(
        E,
        L,
        
        A,


        Q,
        LQ,

        QE,

        FI
    ) {
        var
            L = this.L,
            compare = this.compare,
            logic = this.logic,
            etypes = this.etypes,

            QL = Q.length,
            f = 0,

            EL = E.length,

            ba = null,
            bb = null,

            isstr = this.isstr,

            d = this.d,
            sd = this.sd,

            bfrom = this.bfrom,
            bto = this.bto,

            s = this.s,
            r = this.r
        ;
        for (
            var
                i = 0,
                a = false,
                j = 0,
                x = 0
            ;
            (f < EL) && (i < L);
            (
                i++,
                (x = j = 0),
                (a = false)
            )
        ) {
            for (
                ;
                (j < QL);
                j += 4
            ) {
                if (
                    (j > 0)
                    &&
                    !(a = logic[x++](a))
                ) {
                    break;
                };
                
                // TODO 1:
                // Q[j], Q[j+1], Q[j+2], Q[j+3];
                // readSync(d[j], buffer, 0, stats.size, 0)

                // * here i can cache values which could be usefull in TODO 2;

                ba = Buffer.from("TODO 1: here value from ");
                
                a = (
                    (
                        compare[
                            etypes[ Q[ j + 1 ] ][ Q[ j ] ]
                        ]
                    )[
                        Q[ j + 2 ]
                    ]
                )(
                    ba,
                    Q[ j + 3 ]
                );
            };

            if (a) {
                // TODO 2: put data into E and L (what exatly i need to put - read from FI (fields indexes))
                A[++f] = i;
            };
        };
        A[0] = f;
        return E;
    }
);
