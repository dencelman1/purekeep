

export default (
    (s) => {
        var i = s.length - 1;
        for (;i >= 0; i--) {
            if (
                s[i] !== "\x00"
            ) {
                break;
            }
        };
        return s.substring(0, (i + 1));
    }
);
