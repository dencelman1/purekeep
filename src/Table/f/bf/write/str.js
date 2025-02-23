
export default function(B, f, I, v) {
    var
        _ = (
            (
                I * this.EL
            )
            + (this.FO)[f]
        ),
        r = this.r[f]
    ;
    return (
        (this.bto[6])(
            B,
            (v = v.substring(0,r)).length,
            _ + r,
        ),
        this.bto[this.t[f]](
            B,
            v,
            _
        ),
        this
    );
}