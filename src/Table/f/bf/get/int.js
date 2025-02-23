
export default function(B, f, I) {
    return (
        this.bfrom[this.t[f]](
            B,
            (
                I * this.EL
            )
            + this.FO[f]
        )
    );
}