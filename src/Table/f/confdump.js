import {writeFileSync} from 'fs';


export default (
    function() {
        return (
            writeFileSync(
                this.configP,
                this.confdumpV(this),
                "utf8"
            )
        )
    }
)