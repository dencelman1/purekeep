

export default (
    (mx, length, ShardArray) => {
        var
            eachClear = 0,
            each = Math.floor(eachClear = mx / length),
            afterDot = 0.0,

            id = 0,

            ar = (each) => ShardArray(each, (id ? id + 1: id), (id += each)),

            A = Array.from({length}, () => {
                return ar(each)
            })
        ;
        return (
            (
                (
                    afterDot = (
                        eachClear
                        - each
                    )
                )
                > 0.0
            )
            &&
            A.push(
                ar(
                    Math.ceil(
                        afterDot * length
                    )
                )
            ),

            A
        );
    }
)