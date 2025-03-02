

export default (
    function() {
        var
            ID = this.ID,
            o = this.arrayFromO2,
            z = this.z,
            id = (
                (o.length = this.idsl),
                Array.from(o,z)
            )
        ;
        return (
            ID.set(
                ID.size,
                id
            ),
            id
        );
    }
);
