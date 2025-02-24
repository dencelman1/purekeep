

export default (
    (a,b) => (
        b.toString('utf8').includes(a.toString("utf8"))
    )
)