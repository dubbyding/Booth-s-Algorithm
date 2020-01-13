var M, Q, A, QMO, NM, Final, position = 0;
//It takes input from the form and sends it to get processed
function input() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    A = new String,
        QMO = "0";
    M = convertDecimalToBinary(a);
    Q = convertDecimalToBinary(b);
    NM = twoComplement(M);
    var l = Q.length,
        count = l;
    while (A.length != M.length) {
        A = A + "0";
    }
    while (count != 0) {
        if (Q[l - 1] == "0" && QMO == "1") {
            A = add(A, M);
        } else if (Q[l - 1] == "1" && QMO == "0") {
            A = add(A, NM);
        }
        A = A.split("");
        Q = Q.split("");
        QMO = QMO.split("");
        arithmeticShiftRight(A, Q, QMO);
        A = A.join("");
        Q = Q.join("");
        QMO = QMO.join("");
        count--;
    }
    Final = convertBinaryToDecimal(A + Q);
    alert(Final);
}

function run() {
    while (count != 0) {
        if (Q[l - 1] == "0" && QMO == "1") {
            A = add(A, M);
        } else if (Q[l - 1] == "1" && QMO == "0") {
            A = add(A, NM);
        }
        A = A.split("");
        Q = Q.split("");
        QMO = QMO.split("");
        arithmeticShiftRight(A, Q, QMO);
        A = A.join("");
        Q = Q.join("");
        QMO = QMO.join("");
        count--;
    }
}

function convertDecimalToBinary(n) {
    var binaryNumber = new String;
    var remainder = 0,
        rem,
        i = 1,
        rev = new String,
        ne;
    //checking if number is negative
    if (n < 0) {
        ne = 1;
        n = Math.abs(n);
    } else {
        ne = 0;
    }
    while (n >= 1) {
        remainder = n % 2;
        n = parseInt(n / 2);
        rem = remainder.toString();
        binaryNumber = binaryNumber + rem;
        i = i * 10;
    }
    binaryNumber = binaryNumber + "0";

    l = binaryNumber.length - 1;
    for (i = l; i >= 0; i--) {
        rev = rev + binaryNumber[i];
    }
    binaryNumber = rev;
    if (ne == 1) {
        binaryNumber = twoComplement(binaryNumber);
    }

    return binaryNumber;
}

function convertBinaryToDecimal(n) {
    var decimalNumber = 0,
        i = 1,
        n, neg = 0;
    if (n[0] == "1") {
        neg = 1;
        n = twoComplement(n);
    }
    n = parseInt(n);
    while (n >= 1) {
        remainder = n % 10;
        n = parseInt(n / 10);
        decimalNumber = decimalNumber + i * remainder;
        i = i * 2;
    }
    if (neg == 1) {
        decimalNumber = decimalNumber * (-1);
    }
    return decimalNumber;
}

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

function arithmeticShiftRight(A, Q, QMO) {
    var l = Q.length - 1,
        i;
    QMO[0] = Q[l];
    for (i = l; i > 0; i--) {
        Q[i] = Q[i - 1];
    }
    l = A.length - 1;
    Q[0] = A[l];
    for (i = l; i > 0; i--) {
        A[i] = A[i - 1];
    }
}