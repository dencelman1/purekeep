import {openSync} from 'fs';


// [
//     0, // file_opening_descriptor_ID
//     1, // ENTRIES LENGTH in this string length file
//     2, // which length represents this file
//     3, // pointer which indicates to the end of memory of file
// ];


export default (
    function(
        p,
        l,
        o,
    ) {
        return [
            openSync(
                `${p}l${l}`,
                'a+'
            ),
            o,
            l,
            0
        ];
    }
);
