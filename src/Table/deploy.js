import {mkdirSync, rmSync, existsSync, writeFileSync} from 'fs';
import {execSync} from 'child_process';
import {join} from 'path';

import offset from './f/offset/i.js';

import Field from '../Field/i.js';
import ShardArray from '../Field/ShardArray.js';

import isstr from './f/is/str.js';


export default (
    (
        lc,
        mx,

        types,
        rules,
        arraysize,
    ) => {
        var
            o = { encoding: 'utf8' },
            fo = {
                recursive: true,
                force: true
            },

            arrayO = {length:0},
            
            intl = (c) => parseInt(execSync(c, o).trim()),

            inodes = parseInt(execSync(`df -i ${lc}`).toString().split("\n")[1].split(/\s+/)[3], 10),

            fstype = execSync(`df -T ${lc}`).toString().split("\n")[1].split(/\s+/)[1],

            mx = Number.MAX_SAFE_INTEGER,
            floor = Math.floor,

            max_file_amount_map = {
                ext4: 4_000_000_000,
                xfs: mx,
                btrfs: mx,
                fat32: 65536
            },

            MAX_FILES_IN_DIR = Math.min(max_file_amount_map[fstype], inodes),
            MAX_FOLDERS_IN_DIR = inodes,

            MAX_FOLDERS_IN_DIR_LENGTH = (
                MAX_FOLDERS_IN_DIR
                .toString()
                .length
            ),

            FILE_DESCRIPTORS_AMOUNT = 0,

            MAX_ARRAY_LENGTH = 4_294_967_295,

            EMPTY_ARRAY = [],

            MAX_FILE_PATH_LENGTH = (
                intl(`getconf PATH_MAX ${lc}`)
                - (
                    lc.length
                    + 7 // "/e/0/v/"
                    + (
                        MAX_FOLDERS_IN_DIR_LENGTH
                        + (
                            MAX_FILES_IN_DIR
                            .toString()
                            .length
                        )
                        + 1
                    )
                )
            ),

            CONST = {
                conftime: 200,

                mx,
                
                t: types,
                f: types.length,
                r: rules,
                s: arraysize,

                MAX_ARRAY_LENGTH,
                
                MAX_FILES_IN_DIR,
                MAX_FOLDERS_IN_DIR,

                FILE_DESCRIPTORS_AMOUNT: (
                    FILE_DESCRIPTORS_AMOUNT = (
                        Number.isSafeInteger(
                            FILE_DESCRIPTORS_AMOUNT =
                                intl("cat /proc/sys/fs/file-max")
                        )
                        ? FILE_DESCRIPTORS_AMOUNT
                        : mx
                    )
                ),

                MAX_DEPTH: 0,
            },

            R = 0,

            sa_str = (
                () => [
                    shards(mx, R),
                    shards(mx, 4),
                    EMPTY_ARRAY
                ]
            ),

            sa_fixed = (
                () => [
                    shards(mx, R)
                ]
            ),


            shfrom = (
                (r,i) => {
                    var s = isstr(v);
                    return (
                        ( arrayO.length = s ? 3: 1 ),

                        ( R = r ),

                        new Field(
                            Array.from(
                                arrayO,
                                ( s ? sa_str : sa_fixed )
                            )
                        )
                    );
                }
            ),
            shards = (mx, length) => {
                var
                    eachClear = mx / length,
                    each = Math.floor(eachClear),
                    afterDot = 0.0,
                    A = Array.from({length}, () => ShardArray(each))
                ;
                ((afterDot = eachClear - each)>0.0)
                &&
                A.push(ShardArray(Math.ceil(afterDot*length)));
                return A;
            }
        ;

        
        
        rules
        .reduce(
            (o, R, i, a) => {
                var I = 0;
                return (
                    (
                        a[i] = (
                            isstr(I = types[i])
                            ? R
                            : offset[I]()
                        )
                    ),
                    o
                );
            },
            rules
        );
        
        return (
            (
                MAX_FILE_PATH_LENGTH <= 0
            )
            ? console.warn(
                "Not enough MAX_FILE_PATH_LENGTH in your operation system, problem solvings:\n\n"
                + `1 Change your file system (you have "${fstype}")`
                + "2 Put database path in top of file system"
            )
            :
            (FILE_DESCRIPTORS_AMOUNT <= 0)
            ? console.warn("You have not enough file descriptors, solve it")
            : (

                MAX_FOLDERS_IN_DIR_LENGTH++, // including "/" after folder name

                (
                    CONST.MAX_DEPTH = Math.ceil( MAX_FILE_PATH_LENGTH / MAX_FOLDERS_IN_DIR_LENGTH )
                )
                , console.dir(CONST)

                , existsSync(lc) && rmSync(lc, fo)
                , mkdirSync(lc, fo)
                , writeFileSync(join(lc, "c"), JSON.stringify(CONST, null, 2), "utf8")
                , (
                    writeFileSync(
                        join(lc, "d"),
                        JSON.stringify(
                            {
                                filled: false,
                                L: 0,
                                sh: Array.from(rules,shfrom),
                                mx,
                            },
                            null,
                            0
                        ),
                        "utf8"
                    )
                )
            )
        );
    }
);