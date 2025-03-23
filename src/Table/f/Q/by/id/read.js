import {readSync} from 'fs';


export default (
    function(id,B) {
        var
            sh = this.sh[Math.floor(id / this.mx )],
            EL = this.EL,
            sh0 = sh[0]
        ;
        return (
            readSync(sh0, B, 0, EL, ((id - sh[4]) * EL)),
            B
        );
    }
);
