import {execSync} from 'child_process';


export default (
    () => {
        var
            o = { encoding: 'utf8' },
            intl = (c) => parseInt(execSync(c, o).trim()),

            inodes = parseInt(execSync(`df -i ${lc}`).toString().split("\n")[1].split(/\s+/)[3], 10),

            fstype = execSync(`df -T ${lc}`).toString().split("\n")[1].split(/\s+/)[1],

            MAX_FILES_IN_DIR = Math.min(max_file_amount_map[fstype], inodes),
            MAX_FOLDERS_IN_DIR = inodes,

            MAX_FOLDERS_IN_DIR_LENGTH = (
                MAX_FOLDERS_IN_DIR
                .toString()
                .length
            ),

            max_file_amount_map = {
                ext4: 4_000_000_000,
                xfs: mx,
                btrfs: mx,
                fat32: 65536
            },

            FILE_DESCRIPTORS_AMOUNT = 0,

            MAX_ARRAY_LENGTH = 4_294_967_295,

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

            FILE_DESCRIPTORS_AMOUNT = (
                Number.isSafeInteger(
                    FILE_DESCRIPTORS_AMOUNT =
                        intl("cat /proc/sys/fs/file-max")
                )
                ? FILE_DESCRIPTORS_AMOUNT
                : mx
            )
        ;
    }
)