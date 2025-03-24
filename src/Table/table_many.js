import Table from './i.js';


export default (
    (tables, pathes, dump) => (
        Array.from(
            tables,
            (n, i) => {
                return (
                    {
                        v: new Table( pathes[ i ], dump ),
                        n
                    }
                );
            }
        )
    )
);
