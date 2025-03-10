

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

        // 0 "released" event;


        // [ necesary ]:
        // 0 add to hole;
        // 1 set first byte = 0;
        
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
