
// value fd;
// [ NOT_BUSY ];

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
