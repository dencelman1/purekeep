import Table from './i.js';


export default (
    (a) => (tables) => Array.from(tables, a)
)(
    (v) => new Table(v.p)
);
