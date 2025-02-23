
export default function(B, f, I) {
    var
        o = this.FO[f],
        _ = (
            (
                I * this.EL
            )
            + o
        )
    ;
    return (
        this.bfrom[this.t[f]](
            B,
            _
        )
        .substring(
            0,
            this.bfrom[6](
                B,
                _ + this.r[f]
            )
        )
    );
}