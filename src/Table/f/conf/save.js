
export default (
    function() {
        return (
            clearTimeout(_.confid),
            (
                _.confid = (
                    setTimeout(
                        _.confcb,
                        _.conftime
                    )
                )
            )
        )
    }
);
