
// [0] value fd;
// [1] filled bathes;

// [2] capacity;
// [3] end pointer;

// [4] from (id) >=;
// [5] to (id) <=;


export default (
    (
        c,
        from,
        to,
    ) => {
        return [
            -2,
            0,
            
            c,
            0,

            from,
            to,
        ];
    }
);
