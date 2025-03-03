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
            q = 0

            , EL = E.length

            , COUNT = this.L[0]
            , QL = Q.length

            , cond = this.compare
            , logic = this.logic

            , em = this.em
            , r = this.r
            , t = this.t

            , bfrom = this.bfrom

            , copy = this.copy
            , isstr = this.isstr

            , d = this.d
            , sd = this.sd
            , od = this.od

            , OB = this.OB

            , FI_LENGTH = FI.length
            , readNumber = this.readNumber

            , readString = this.readString

            , sdopen = this.sdopen

            , ps = this.ps
            , sdadd = this.sdadd
            , query = this.query
        ;
        
        for (
            var
                i = A[q],
                
                CURRENT_E = E[q],
                CURRENT_SV = SV[q],

                CURRENT_F = em,

                FIELD_ID = 0,

                I_POS = 0,
                IV = i[I_POS],

                FI_I = 0,
                LENGTH = 0,

                RFIELD = 0
            ;
            (IV < COUNT);
            IV++
        ) {
            if (
                query(IV,QL, OB, Q,QV, CURRENT_E,CURRENT_SV, cond,logic, readString,readNumber, sdopen,sdadd, d,sd,od)
            ) {
                for(
                    FI_I = 0
                    ; FI_I < FI_LENGTH
                    ; FI_I++
                ){
                    isstr( t[ FIELD_ID = FI[ FI_I ] ] )
                    ? (
                        readString(
                            FIELD_ID,
                            (CURRENT_F = CURRENT_E[FIELD_ID]),
                            IV,
                            OB,
                            (RFIELD = r[FIELD_ID]),
                            CURRENT_SV[FIELD_ID],
                            
                            sdopen(
                                sd[FIELD_ID],
                                FIELD_ID,
                                (
                                    LENGTH = (
                                        bfrom[ RFIELD ]( CURRENT_F,0,0 )
                                    )
                                ),
                                ps,
                                sdadd
                            ),
                            LENGTH,
                            
                            d,
                            od
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
