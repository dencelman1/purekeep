

export default (
    function() {
        var b = Buffer.alloc(this.EL, "\x00", "utf8");
        b[0] = 1;
        return b;
    }
)