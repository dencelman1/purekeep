
export default (
    (utf8, utf16) => [
        (b,v,o) => b.writeInt8(v, o),
        utf8,
        (b,v,o) => b.writeUInt8((v ? 1: 0), o),

        (b,v,o) => b.writeInt16LE(v, o),
        (b,v,o) => b.writeInt32LE(v, o),
        (b,v,o) => b.writeBigInt64LE(v, o),

        (b,v,o) => b.writeUInt8(v, o),
        (b,v,o) => b.writeUInt16LE(v, o),
        (b,v,o) => b.writeUInt32LE(v, o),
        (b,v,o) => b.writeBigUInt64LE(v, o),

        (b,v,o) => b.writeFloatLE(v, o),
        (b,v,o) => b.writeDoubleLE(v, o),

        utf16,
    ]
)(
    (b,v,o) => b.write(v, o, "utf8"),
    (b,v,o) => b.write(v, o, "utf16le"),
)