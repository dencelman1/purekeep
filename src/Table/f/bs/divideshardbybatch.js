
export default (
    (el, epb, o) => {
        var
            re = (el % epb),
            r = re > 0,
            l = ( ( el / epb ) | 0 ),
            A = (
                (o.length = l + Number(r)),
                Array.from(
                    o,
                    () => epb
                )
            )
        ;
        return (
            r && ( A[l] = re ),
            A
        );
    }
);
