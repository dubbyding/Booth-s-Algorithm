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