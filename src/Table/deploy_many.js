import TableDeploy from './deploy/deploy.js';


export default (
    (rd,TableDeploy) => (
        (tables) => (
            tables.reduce(
                rd,
                TableDeploy
            )
        )
    )
)(
    (td,a) => (
        td(a.p, a.mx, a.t, a.r),
        td
    ),
    TableDeploy
);
