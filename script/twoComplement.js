function twoComplement(n) {
    var temp = new String,
        rev = new String,
        flag = 0,
        i;
    var l = n.length - 1;
    for (i = l; i >= 0; i--) {
        if (flag == 1) {
            if (n[i] == "0") {
                temp = temp + "1";
            } else {
                temp = temp + "0";
            }
        } else {
            if (n[i] == "0") {
                temp = temp + n[i];
            } else {
                temp = temp + n[i];
                flag = 1;
            }
        }
    }
    for (i = l; i >= 0; i--) {
        rev = rev + temp[i];
    }
    return rev;
}