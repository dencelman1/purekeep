import comp from './comp.js';

export default (
    (A, comp) => (a,b) => A.includes(comp(a,b))
)(
    [-1, 0],
    comp
);
