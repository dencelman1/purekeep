
export default (
    (z, f, s) => [
        z,
        s,
        () => false,

        z,z,z,z,z,z,z,

        f,f,

        s
    ]
)(
    () => 0,
    () => 0.0,
    () => ""
);
