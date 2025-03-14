
// value fd;
// how many at all;

// capacity;
// end pointer;

// from (id) >=;
// to (id) <=;

export default (
    (
        c,
        from,
        to
    ) => {
        return [
            0,
            c,
            
            c,
            0,

            from,
            to
        ];
    }
);
