function add(O, P) {
    var l = P.length,
        i, result = new Array,
        c = "0",
        rev = new Array;
    O = O.split("");
    P = P.split("");
    for (i = l - 1; i >= 0; i--) {
        if (c == "0") {
            if (O[i] == "1") {
                if (P[i] == "1") {
                    result[i] = "0";
                    c = "1";
                }
                if (P[i] == "0") {
                    result[i] = "1";
                    c = "0";
                }
            } else if (O[i] == "0") {
                if (P[i] == "1") {
                    result[i] = "1";
                    c = "0";
                }
                if (P[i] == "0") {
                    result[i] = "0";
                    c = "0";
                }
            }
        } else {
            if (O[i] == "1") {
                if (P[i] == "1") {
                    result[i] = "1";
                    c = "1";
                }
                if (P[i] == "0") {
                    result[i] = "0";
                    c = "1";
                }
            } else if (O[i] == "0") {
                if (P[i] == "1") {
                    result[i] = "0";
                    c = "1";
                }
                if (P[i] == "0") {
                    result[i] = "1";
                    c = "0";
                }
            }
        }
    }
    rev = result.join("");
    return (rev);
}