

export default (
    (a) => (T) => {
        return (
            JSON.stringify(T, a, 0)
        )
    }
)(
    (_, v) => (
        v instanceof Set
        ? Array.from(v)
        :
        v instanceof Map
        ? Array.from(v.entries())
        : v
    )
)