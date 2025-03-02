import { readSync, writeSync } from 'fs';


/*
    E, // entries (put here)
    L, // lengths (put here)
    A, // ids (put here)

    Q, // queries
    LQ, // logic queries

    QV, // Query values which uses in queries (Q) conditions
    QI, // Query IDS (same as QV);

    FI // fields (which fields put into E, L)


    [
        0 field_id,
        1 value_type,

        2 operation_id,
        3 value's_index_from_QE
    ];

*/

export default (
    function(
        E,
        SV,
        A,

        Q,
        QV,

        FI
    ) {
        var
            q = 0,

            EL = E.length,

            COUNT = this.L[0],
            QL = Q.length,

            cond = this.compare,
            logic = this.logic,

            em = this.em,
            r = this.r,
            t = this.t,

            s = this.s,

            bfrom = this.bfrom,

            copy = this.copy,
            isstr = this.isstr,

            d = this.d,
            sd = this.sd,
            od = this.od,
            OB = this.OB,

            FI_LENGTH = FI.length,
            readNumber = this.readNumber
        ;
        
        for (
            var
                a = false,

                i = A[q],
                
                ai = 0,
                
                VALUE_TYPE = 0,

                CURRENT_E = E[q],
                CURRENT_SV = SV[q],

                FIELD_ID = 0,

                I_POS = 0,
                IV = i[I_POS],

                FI_I = 0
            ;
            (IV < COUNT);
            IV++
        ) {

            for (
                ai = 0;
                ai < QL;
                ai += 4
            ) {
                if (
                    (ai > 0)
                    &&
                    !(
                        logic[ Q[ai++] ](a)
                    )
                ) {
                    break
                };

                a = (
                    cond[
                        FIELD_ID = Q[ai]
                    ][
                        Q[
                            ai + 2
                        ]
                    ](
                        (
                            (VALUE_TYPE = Q[ai+1])
                            ? (
                                this.readString(
                                    FIELD_ID,
                                    CURRENT_E[FIELD_ID],
                                    IV,
                                    OB,
                                    r[FIELD_ID],
                                    CURRENT_SV[FIELD_ID],
                                    bfrom[r[FIELD_ID]],
                                    
                                    d, od, sd
                                )
                            )
                            : readNumber(d[FIELD_ID], CURRENT_E[ FIELD_ID ], r[FIELD_ID], IV)
                        ),
                        (QV[ Q[ ai + 3 ] ])
                    )
                );
            };
            console.log(a);


            if (
                a
            ) {
                for(
                    FI_I = 0
                    ; FI_I < FI_LENGTH
                    ; FI_I++
                ){
                    isstr( t[ FIELD_ID = FI[ FI_I ] ] )
                    ? (
                        this.readString(
                            FIELD_ID,
                            CURRENT_E[FIELD_ID],
                            IV,
                            OB,
                            r[FIELD_ID],
                            CURRENT_SV[FIELD_ID],
                            bfrom[r[FIELD_ID]],
                            
                            d, od, sd
                        )
                    )
                    : readNumber(d[FIELD_ID], CURRENT_E[ FIELD_ID ], r[FIELD_ID], IV)
                };

                if ((++q) === EL) {
                    break;
                };

                i[I_POS] = IV;
                
                i = i.reduce(copy, A[q]);
                CURRENT_E = E[q];
                CURRENT_SV = SV[q];
            };
        };

        return q;
    }
);
