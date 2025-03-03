import {writeSync , readSync}from 'fs';


export default (
    function(
        Q,
        V,
        KV
    ) {
        var
            u = 0
        ;
        for (
            var
                cond = this.cond,
                logic = this.logic,
                readString = this.readString,
                readNumber = this.readNumber,
                sdopen = this.sdopen,
                sdadd = this.sdadd,
                d = this.d,
                sd = this.sd,
                od = this.od,
                OB = this.OB,
                ps = this.ps,
                r = this.r,
                P = this.P,
                
                L = this.L,
                FORID = this.FORID,
                FORENTRY = this.FORENTRY,
                
                Q_LENGTH = Q.length,

                CURSOR = 0,
                
                AMOUNT = L[CURSOR],
                I = FORID[CURSOR],
                
                CURRENT_E = null,
                CURRENT_SV = null,

                KVI = 0,
                FIELD = 0,
                
                KV_LENGTH = KV.length,

                LENGTH = null,
                OFFSET = 0,
                FIELD = 0,
                LENGTH_BF = null,

                SD = null,

                KVI2 = 0
            ;
            I < AMOUNT;
            I++
        ) {
            if (
                query(I,Q_LENGTH, OB, Q,V, CURRENT_E,CURRENT_SV, cond,logic, readString,readNumber, sdopen,sdadd, d,sd,od)
            ) {
                for (
                    KVI = 0;
                    KVI < KV_LENGTH;
                    KVI += 3
                ) {
                    // [value_type, field_id, id_in_V]
                    KV[ KVI ]
                    ? (
                        readSync(
                            d[
                                FIELD = KV[ KVI + 1 ]
                            ],
                            (LENGTH_BF = FORENTRY[FIELD]),
                            0,
                            r[FIELD],
                            P[FIELD]
                        ),
                        
                        
                        LENGTH_BF
                        .equals(
                            LENGTH_BF = V[ KV[ KVI2 = KVI + 2 ] + 1 ]
                        )
                        ?
                        (
                            1
                        )
                        : (
                            SD = (
                                sdopen(
                                    sd[FIELD],
                                    FIELD,
                                    LENGTH,
                                    ps,
                                    sdadd
                                )
                            )
                        ),
                        
                        (SD[3] += saveField(
                            SD[0],
                            AR[i],
                            LENGTH,
                            SD[3]
                        )),
            
                        OB.writeUInt16LE(SD[1]++),
                        (OP[i] += saveField(od[i], OB, 2, OP[i])),
            
                        saveField(d[i], LENGTH_BUFFER, T, P[i])
                        // delete value from length and create a hole (if another length)

                        // write value to current offset and length;
                        // write offset;
                        // write length;
                        
                    )
                    : writeSync(d[ FIELD = KV[ KVI + 1 ] ], V[ KV[ KVI + 2 ] ], 0, r[FIELD], P[FIELD]);
                };
            };
        };

        return u;
    }
);
