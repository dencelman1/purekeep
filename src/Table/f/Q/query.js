import compare from '../cond/compare.js';
import logic from '../cond/logic.js';


export default (
    (
        q,
        b, // TODO: use it here for comparison
        ql,
    ) => {
        var
            a = true,
            l = 0,
            t = 0,
            lf = null
        ;
        for (; l < ql; l += 4 ) {
            a = (
                (
                    compare[
                        t // TODO: data type of comparing values
                    ][
                        q[l + 1] // TODO: get from query buffer
                    ]
                )(
                    q[l],
                    q[l + 2]
                )
            );

            if (
                (lf = logic[l + 3])
                &&
                !(a = lf(a))
            ) {
                break;
            }
        };
        return a;
    }
)