

export default (
    function(b, t, o, e) {
        return (
            Buffer.from(
                this
                .int(b, t, o)
                .toString(e)
            )
        );
    }
);
