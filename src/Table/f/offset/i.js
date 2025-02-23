

export default ((o, t, f, e) => [
    o,
    (v) => Buffer.byteLength(v, "utf8"),
    o,

    t,f,e,
    o,t,f,e,

    f,e,

    (v) => Buffer.byteLength(v, "utf16le"),
])(
    () => 1,
    () => 2,
    () => 4,
    () => 8,
)