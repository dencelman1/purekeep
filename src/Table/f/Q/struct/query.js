

export default (
    (
        IV,
        QL,

        OB,

        Q,
        QV,
        
        CURRENT_E,
        CURRENT_SV,
        
        cond,
        logic,
        
        readString,
        readNumber,

        sdopen,
        sdadd,
        
        d,sd,od
    ) => {
        var
            a = false
        ;
        for (
            var
                ai = 0,
                FIELD_ID = 0,
                LENGTH = 0,
                RFIELD = 0,

                CURRENT_F = null
            ;
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
                        (Q[ai+1])
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
                    ),
                    (QV[ Q[ ai + 3 ] ])
                )
            );
        };
        return a;
    }
)