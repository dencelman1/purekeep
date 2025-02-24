
export default (
    [
        (b,o,_) => b.readInt8(o),
        (b,o,l) => b.toString('utf8', o,l),
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

        (b,o,l) => b.toString('utf16le', o, l),
    ]
)