

export default (
    (a,b) => (
        a.toString('utf8').includes(b.toString("utf8"))
    )
);
