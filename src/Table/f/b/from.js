
export default (
    (utf8, utf16) => [
        (b,o,_) => b.readInt8(o),
        utf8,
        (b,o,_) => b.readUInt8(o) === 1,

        (b,o,_) => b.readInt16LE(o),
        (b,o,_) => b.readInt32LE(o),
        (b,o,_) => b.readBigInt64LE(o),

        (b,o,_) => b.readUInt8(o),
        (b,o,_) => b.readUInt16LE(o),
        (b,o,_) => b.readUInt32LE(o),
        (b,o,_) => b.readBigUInt64LE(o),

        (b,o,_) => b.readFloatLE(o),
        (b,o,_) => b.readDoubleLE(o),

        utf16
    ]
)(
    (b,o,l) => b.toString('utf8', o, l),
    (b,o,l) => b.toString('utf16le', o, l)
)