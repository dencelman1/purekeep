

export default ((byteLength, o, t, f, e) => [
    o,
    (v) => byteLength(v, "utf8"),
    o,

    t,f,e,
    o,t,f,e,

    f,e,

    (v) => byteLength(v, "utf16le")
])(
    Buffer.byteLength,
    () => 1,
    () => 2,
    () => 4,
    () => 8,
)