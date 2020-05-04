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