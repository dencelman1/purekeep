

export default (
    function(e, u) {
        return Buffer.alloc(((this.EL * e) + u), "\x00", "utf8");
    }
)