import TableDeploy from './deploy/deploy.js';


export default (
    (tables,pathes) => {
        for (
            var
                v = null,
                i = 0,
                l = tables.length
            ;
            i < l;
            i++
        ) {
            TableDeploy(
                pathes[i],
                (v = tables[i]).mx,
                v.t,
                v.r
            );
        };
        return undefined;
    }
);
