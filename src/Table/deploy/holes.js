

export default (
    (mx, ShardArray) => {
        var
            id = 0,
            eachchange = (mx % 4),
            each = Math.floor(mx / 4),

            A = []
        ;

        A.push( ShardArray(each, 0, (id += each)) );

        for (
            var i = 0;
            i < 7;
            i++
        ) {
            A.push( ShardArray(each, (id + 1), (id += each)) );
        };

        eachchange > 0
        && (
            A.push( ShardArray(eachchange, (id + 1), (id + eachchange)) )
        );

        return A;
    }
)