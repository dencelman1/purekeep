import {readSync, openSync, closeSync} from 'fs';

export default (
    function(
        id,
        l
    ) {
        var 
            d = openSync(this.ee, 'r'),
            B = this.B,

            PB = this.PB,
            ID = 0,
            types = this.t,
            L=types.length,
            bfrom = this.bfrom
        ;
        for(
            var
                i = 0,
                p = 0,
                BL = this.BL,
                bto =this.bto
            ; 
            (
                (p<l)
                &&
                (i<BL)
            );
            i++
        ) {
            readSync(d, B, 0, BL, i);


            console.log(id, bfrom[0](B, 0));
            
            if (id === (ID = bfrom[0](B, 0))) {
                for(
                    var
                        I = 0,
                        O = 0
                    ;
                    I<L;
                    I++
                ){
                    bto[i](PB, this.bfrom[i](B, O), O);
                    O+=this.rules[i]();
                };
                
                p++;
            };
        };
        
        return (
            closeSync(d),
            PB
        );
    }
);
