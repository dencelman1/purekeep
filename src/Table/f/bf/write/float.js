
export default function(B, f, o, v) {
    return (
        this.bto[this.t[f]](
            B,
            v,
            o
        ),
        this
    );
}