import {writeSync, fsyncSync} from 'fs';


export default (
    function(
        id,
        B,
    ) {
        var
            sh = this.sh[Math.floor(id / this.mx )],
            EL = this.EL,
            sh0 = sh[0]
        ;
        
        return (
            this.confsave(),
            writeSync(sh0, B, 0, EL, ((id - sh[4]) * EL)),
            fsyncSync(sh0),
            B
        );
    }
);
