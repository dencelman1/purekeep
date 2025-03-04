import {mkdirSync, rmSync, existsSync, writeFileSync} from 'fs';
import {execSync} from 'child_process';
import {join} from 'path';

import offset from './f/offset/i.js';


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
            
            intl = (c) => parseInt(execSync(c, o).trim()),

            inodes = parseInt(execSync(`df -i ${lc}`).toString().split("\n")[1].split(/\s+/)[3], 10),

            fstype = execSync(`df -T ${lc}`).toString().split("\n")[1].split(/\s+/)[1],

            mx = Number.MAX_SAFE_INTEGER,

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
                                sh: EMPTY_ARRAY,
                                L: 0,
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