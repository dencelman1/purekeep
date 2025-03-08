

export default (
    function(
        Q,
        I
    ) {
        var
            f = 0,
            L = this.L
            query = this.query
        ;
        // remove from e;
        // add to hole;
        
        for (;;){
            if (
                query()
            ) {
                break;
            };
        };

        return (
            this.confsave(),
            this.filled && (f > 0) && this.onreleased(),

            (this.L = L - f),
            f
        );
    }
);
