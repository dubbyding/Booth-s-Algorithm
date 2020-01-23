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
function goNext(){
    console.log(i);
    
    switch(i){
        case 0:
            document.getElementById("stop").style.color="black";
            document.getElementById("start").style.color="Yellow";
            i++;
            break;
        case 1:
            document.getElementById("start").style.color="black";
            document.getElementById("InitValA").innerHTML="A = " + A;
            document.getElementById("InitValA").style.color="Yellow";
            
            i++;
            break;
        case 2:
            document.getElementById("InitValA").style.color="black";
            document.getElementById("InitValQ").innerHTML = "Q = " + Q;
            document.getElementById("InitValQ").style.color="Yellow";
            i++;
            break;
        case 3:
            document.getElementById("InitValQ").style.color="black";
            document.getElementById("InitValQM").innerHTML="Q(-1) = " + QMO;
            document.getElementById("InitValQM").style.color="Yellow";
            i++;
            break;
        case 4:
            document.getElementById("InitValQM").style.color="black";
            document.getElementById("InitValM").innerHTML="M = " + M;
            document.getElementById("InitValM").style.color="Yellow";
            i++;
            break;
        case 5:
            document.getElementById("InitValM").style.color="black";
            document.getElementById("InitValC").innerHTML="Count = " + count;
            document.getElementById("InitValC").style.color="Yellow";
            i++;
            break;
        case 6:
            document.getElementById("InitValC").style.color="black";
            document.getElementById("Condition1").style.color="black";
            document.getElementById("ConditionO").innerHTML=Q[l-1]+QMO;
            document.getElementById("ConditionO").style.color="Yellow";
            if (Q[l - 1] == "0" && QMO == "1") {
                i++;
            } else if (Q[l - 1] == "1" && QMO == "0") {
                i+=2;
            }else{
                i = 9;
            }
            insTable("Q(0)Q(-1) check");
            break;
        case 7:
            A = add(A, M);
            document.getElementById("ConditionO").style.color="black";
            document.getElementById("add").innerHTML ="A = "  + A;
            document.getElementById("add").style.color="Yellow";
            i+=2;
            insTable("A = A + M");
            break;
        case 8:
            A = add(A, NM);
            document.getElementById("ConditionO").style.color="black";
            document.getElementById("sub").innerHTML = "A = "+ A;
            document.getElementById("sub").style.color="Yellow";
            i++;
            insTable("A = A - M");
            break;
        case 9:
            A = A.split("");
            Q = Q.split("");
            QMO = QMO.split("");
            arithmeticShiftRight(A, Q, QMO);
            A = A.join("");
            Q = Q.join("");
            QMO = QMO.join("");
            document.getElementById("add").style.color="black";
            document.getElementById("sub").style.color="black";
            document.getElementById("ConditionO").style.color="black";
            document.getElementById("shift").innerHTML=A+","+Q+","+QMO;
            document.getElementById("shift").style.color="Yellow";
            i++;
            insTable("Arithmetic Right Shift");
            break;
        case 10:
            count--;
            document.getElementById("shift").style.color="black";
            document.getElementById("counter").innerHTML="Count = " + count;
            document.getElementById("counter").style.color="Yellow";
            i++;
            insTable("Count--");
            break;
        case 11:
            document.getElementById("counter").style.color="black";
            document.getElementById("Condition1").style.color="Yellow";
            if(count == 0){
                i++;
            }else{
                i = 6; 
            }
            break;
        case 12:
            Final = convertBinaryToDecimal(A + Q);
            document.getElementById("Condition1").style.color="black";
            document.getElementById("result").innerHTML = "Result = " + A+""+Q+"<br>"+Final;
            document.getElementById("result").style.color="Yellow";
            i++;
            break;
        case 13:
            document.getElementById("result").style.color="black";
            document.getElementById("stop").style.color="Yellow";
            alert(Final);
            document.getElementById("submit").disabled = false;
            document.getElementById("next").disabled = true;
            i=0;
            break;
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
function insTable(reason){
    table = document.getElementById("table");
    var row = table.insertRow(index);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = A;
    cell2.innerHTML = Q;
    cell3.innerHTML = QMO;
    cell4.innerHTML = count;
    cell5.innerHTML = reason;
    index++;
}
function resetTable(){
    table = document.getElementById("table");
    table.innerHTML = "";
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "A";
    cell2.innerHTML = "Q";
    cell3.innerHTML = "Q(-1)";
    cell4.innerHTML = "count";
    cell5.innerHTML = "Reason";
    index=1;
}