import {writeFileSync} from 'fs';


export default (
    function() {
        return (
            writeFileSync(
                this.dP,
                this.confdumpV(this.confkeys, this),
                "utf8"
            )
        )
    }
)