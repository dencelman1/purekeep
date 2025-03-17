

export default (
    (ShardArray, she, shl) => {
        var
            id = 0,
            A = []
        ;

        for (var i = 0; i < shl; i++) {
            A.push(
                ShardArray(she, (id ? id + 1: id), (id += she))
            );
        };

        return (
            A
        );
    }
)