
/*
    E, // entries (put here)
    I, // ids (put here)

    Q, // queries
    QB, // Query values which uses in queries (Q) conditions
    
    [
        0 field_id,
        
        1 operation_id,
        2 value's_index_from_QE
    ];

*/

export default (
    (b,q,v,t,l,i,logic,cond) => {
        var
            a = true
        ;
        for(
            var qi = 0;
            i < l;
            i += 3
        ) {
            if (i > 0 && !(logic[q[ i++ ]](a))) {
                break
            };
            
            a = cond[t[qi = q[i]]][q[i+1]](b[qi], v[q[i+2]]);
        };
        return a;
    }
);
