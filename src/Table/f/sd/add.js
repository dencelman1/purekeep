

export default (
    function(
        p,
        l,
        o,
    ) {
        return [
            openSync(
                `${p}l${l}`,
                'a+'
            ),
            o,
            l
        ];
    }
);
