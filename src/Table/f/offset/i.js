

export default ((utf8, utf16, o, t, f, e) => [
    o,
    utf8,
    o,

    t,f,e,
    o,t,f,e,

    f,e,
    utf16,
])(
    (v) => Buffer.byteLength(v, "utf8"),
    (v) => Buffer.byteLength(v, "utf16le"),

    () => 1,
    () => 2,
    () => 4,
    () => 8,
);
