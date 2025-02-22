

export default ((o, t, f, e) => [
    o,
    (v) => Buffer.byteLength(v, "utf8"),
    o,

    t,f,e,
    o,t,f,e,

    f,e
])(
    () => 1,
    () => 2,
    () => 4,
    () => 8,
)