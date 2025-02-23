
export default (
    [
        (b,o) => b.readInt8(o),
        (b,o) => b.toString('utf8', o),
        (b,o) => b.readUInt8(o) === 1,

        (b,o) => b.readInt16LE(o),
        (b,o) => b.readInt32LE(o),
        (b,o) => b.readBigInt64LE(o),

        (b,o) => b.readUInt8(o),
        (b,o) => b.readUInt16LE(o),
        (b,o) => b.readUInt32LE(o),
        (b,o) => b.readBigUInt64LE(o),

        (b,o) => b.readFloatLE(o),
        (b,o) => b.readDoubleLE(o),

        (b,o) => b.toString('utf16le', o),
    ]
)