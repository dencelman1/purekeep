import { writeSync, readSync } from "fs";


export default (
    function(
        E
    ) {
        var
            EL = 0,

            s3 = 0,
            
            L = this.L,
            mx = this.mx,
            p = 0
        ;
        return (
            (
                this.filled ||= ( mx === L )
            )
            ? this.onfilled(E,0)
            : (
                readSync(
                    (p = this.p),
                    
                ),

                writeSync(
                    p,
                    E,
                    0,
                    EL,
                    s3
                ),
                
                (this.L = L++)
            )
        );
    }
)