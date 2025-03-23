import { mkdirSync, rmSync, existsSync, writeFileSync } from 'fs';
import {totalmem} from 'os';

import {join} from 'path';

import {execSync} from 'child_process';

import offset from '../f/offset/i.js';

import isstr from '../f/is/str.js';
import shards from '../shards.js';
import ShardArray from '../../ShardArray.js';

import ceil from './ceil.js';
import fo from './fo.js';
import architecture_map from './architecture_map.js';
import holes from './holes.js';
import max_length from '../../max_length.js';

export default (
    (
        lc,

        mx,
        
        types,
        rules,
    ) => {
        var
            mx = Math.min(mx, max_length),
            
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

            fl = Math.floor,
            
            bs_value = ceil( EL, 4096 ),

            bse = fl( bs_value / EL ), // entries in batch [ CONST ]
            she = fl( mx / EL ), // entries in shard

            sh_bs = fl( she / bse ), // batches in shard [ CONST ]

            mx = (
                (
                    she = (
                        sh_bs * bse
                    )
                )
                * EL
            ),

            bse_s = ( bse * EL ), // bytes batch

            ram = totalmem(),

            m = [],

            MAX_EL = architecture_map[
                Number(execSync("getconf LONG_BIT").toString().trim())
            ],

            CONST = {
                confkeys:null,
                MAX_EL,
                SERVICE_BYTES,

                HOLE_SIZE: 4,

                conftime: 200,
                
                mx,
                mx_h: Math.floor(mx / 4),
                
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
                
                bs_value,
                sh_bs,
                she,
                bse_s,
                bse,
            },

            DYNAMIC_DATA = {
                filled: false,

                L: 0,
                c: 0,
                bse_next: 1,

                hc: 0,
                hL: 0,

                h: holes( mx, ShardArray ),
                sh: shards( ShardArray, she, EL ),
            },

            ePath = join(lc, "e")
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
                , mkdirSync(ePath, fo)

                // , writeFileSync(join(ePath, "0"), em_bf, "utf8")

                , mkdirSync(join(lc, "h"), fo)
                ,
                writeFileSync(
                    join(lc, "c"),
                    JSON.stringify(CONST, null, 4),
                    "utf8"
                )
                ,
                writeFileSync(
                    join(lc, "d"),
                    JSON.stringify(
                        DYNAMIC_DATA,
                        null,
                        0
                    ),
                    "utf8"
                )
                , console.log("successfull deployed")
            )
        );
    }
);