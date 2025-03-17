

export default (
    (mx, change) => (
        change
        ? mx
        : (mx - change)
    )
)