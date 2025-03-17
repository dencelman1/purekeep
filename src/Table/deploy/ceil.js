

export default (
    (EL, c) => {
        var a = (EL % c);
        return (
            a
            ? ((EL - a) + c)
            : EL
        );
    }
);