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
            insTable("Initalization");
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