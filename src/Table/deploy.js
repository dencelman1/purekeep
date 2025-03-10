import { mkdirSync, rmSync, existsSync, writeFileSync } from 'fs';
import {totalmem} from 'os';

import {join} from 'path';

import {execSync} from 'child_process';

import offset from './f/offset/i.js';

import isstr from './f/is/str.js';
import shards from './shards.js';
import ShardArray from '../ShardArray.js';



export default (
    (
        lc,
        mx,

        types,
        rules,
    ) => {
        var
            fo = {
                recursive: true,
                force: true
            },

            mx = Number.MAX_SAFE_INTEGER,

            arch = Number(execSync("getconf LONG_BIT").toString().trim()),

            ram = totalmem(),

            architecture_map = {
                64: 2 ** 31 - 1,
                32: 2 ** 30 - 1
            },

            SERVICE_BYTES = (
                1 // for defining of defined entries
            ),

            EL = (
                rules
                .reduce(
                    (r, R, i, a) => {
                        var I = 0;
                        return (
                            r
                            + (
                                a[i] = (
                                    isstr(I = types[i])
                                    ? R
                                    : offset[I]()
                                )
                            )
                        );
                    },
                    SERVICE_BYTES
                )
            ),

            m = [],

            MAX_EL = architecture_map[arch],

            CONST = {
                confkeys:null,
                MAX_EL,
                SERVICE_BYTES,

                conftime: 200,
                
                mx,
                f: types.length,
                t: types,
                r: rules,

                m: (
                    rules.reduce(
                        (r, v) => {
                            var a = r + v;
                            return (
                                m.push([ r, a ]),
                                a
                            );
                        },
                        SERVICE_BYTES
                    ),
                    m
                ),

                EL,
            },

            h = shards(mx,8,ShardArray),

            bs = 4096,

            DYNAMIC_DATA = {
                filled: false,

                L: 0,
                sh: shards(mx,EL,ShardArray),
                c: 0,

                h,
                hc: 0,
                hL: 0,

                bs,
                epb: ( ( bs / EL ) | 0 ),
                be: []
            }
        ;
        
        return (
            (MAX_EL === undefined)
            ? console.error("you architecture is not 32 or 64")
            :
            (EL > MAX_EL)
            ? console.error(`your entry length = ${EL} , max = ${MAX_EL} , not enough`)
            :
            (EL > ram)
            ? console.error(`you have not enough RAM, required = ${EL} bytes, you have only ${ ram }`)
            :
            (
                (CONST.confkeys = Object.keys(DYNAMIC_DATA)),

                existsSync(lc) && rmSync(lc, fo)

                , mkdirSync(lc, fo)
                , mkdirSync(join(lc, "e"), fo)
                , mkdirSync(join(lc, "h"), fo)
                ,
                writeFileSync(
                    join(lc, "c"),
                    JSON.stringify(CONST, null, 4),
                    "utf8"
                )
                , (
                    writeFileSync(
                        join(lc, "d"),
                        JSON.stringify(
                            DYNAMIC_DATA,
                            null,
                            0
                        ),
                        "utf8"
                    )
                )
                , console.log("successfull deployed")
            )
        );
    }
);