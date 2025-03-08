
export default (
    function() {
        return (
            clearTimeout(this.confid),
            (
                this.confid = (
                    setTimeout(
                        this.confcb,
                        this.conftime
                    )
                )
            )
        )
    }
);
