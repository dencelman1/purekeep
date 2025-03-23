import Table from './i.js';


export default (
    (tables, pathes) => (
        Array.from(
            tables,
            (n, i) => {
                return (
                    {
                        v: new Table( pathes[ i ] ),
                        n
                    }
                );
            }
        )
    )
);
