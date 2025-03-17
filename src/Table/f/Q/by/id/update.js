import {writeSync} from 'fs';


export default (
    function(
        id,
        B,
    ) {
        var
            sh = this.sh[Math.floor(id / this.mx )],
            EL = this.EL
        ;
        
        return (
            this.confsave(),
            writeSync(sh[0], B, 0, EL, ((id - sh[4]) * EL)),
            B
        );
    }
);
