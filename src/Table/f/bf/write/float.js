
export default function(B, f, I, v) {
    return (
        this.bto[this.t[f]](
            B,
            v,
            (
                I * this.EL
            )
            + this.FO[f]
        ),
        this
    );
}