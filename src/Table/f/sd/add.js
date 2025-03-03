import {openSync} from 'fs';


// [
//     0, // file_opening_descriptor_ID
//     1, // ENTRIES LENGTH in this string length file
//     2, // which length represents this file
//     3, // pointer which indicates to the end of memory of file
// ];


export default (
    (
        p,
        l,
        o,
    ) => {
        var P = `${p}l${l}`;
        return [
            openSync(
                P,
                'a+'
            ),
            o,
            l,
            0,
            openSync(
                P + "o",
                'a+'
            ),
            0
        ]
    }
);
