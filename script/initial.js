var M, Q, A, QMO, NM, Final, i = 0,count,l,index=1;
//It takes input from the form and sends it to get processed
function input() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    A = new String,
        QMO = "0";
    M = convertDecimalToBinary(a);
    Q = convertDecimalToBinary(b);
    NM = twoComplement(M);
    l = Q.length;
    count = l;
    while (A.length != M.length) {
        A = A + "0";
    }
    document.getElementById("submit").disabled = true;
    document.getElementById("next").disabled = false;
    resetTable();
}
