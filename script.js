var A,M,Q,NeM,count,QMO=0,QO,power,re,initCount,neg,decResult,posResult,index;
var table;
//It takes input from the form and sends it to get processed
function input(){
    var i;
    document.getElementById("submit").disabled = true;
    for(i=1;i<=13;i++){
        reset(i);
        console.log("Shit");
    }
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    if(a.length == 0 || b.length == 0){
        window.alert("Fill the form");
        return 0;
    }
    if(a<0||b<0){
        neg = 1;
    }else{
        neg = 0;
    }
    M = convertDecimalToBinary(a);
    Q = convertDecimalToBinary(b);
    count = Q.toString().length+1;
    initCount = count;
    power = Math.pow(10,count-1);
    NeM = twoComplement(M);
    Proc(0);
}
//Display Functions
function Proc(i){
    var j;
    QO = Q%10;
    //I is the step number ie. i = 1 is start and i = 13 is stop and between is the steps to run
    if(i==13){
        return 0;
    }
    //for reseting everything so that steps can be shown
    for(j=1;j<=13;j++){
        colorReturn(j);
    }
    //when i = 7 it reaches first condition
    if(i==7){
        //first condition for 10
        if(QO == 1 && QMO == 0){
            i = 8;
        //second condition for 01
        }else if(QO == 0 && QMO == 1){
            i = 9;
        //final condition for 11 or 00
        }else{
            i = 10;
        }
    //after condition after 10 and 01 is processed it has to go to a same point
    }else if(i==8||i==9){
        //i = 10 is arithmetic shift position
        i = 10;
    //i = 11 is condition of count = 0?
    }else if(i == 11){
        if(count!=0){
            i = 7;
        }else{
            i++;
        }
    }else{
        //increment for next value
        i++;
    }
    //changing colour of that position
    colorChange(i);
    //delay in changing colour and displaying so that we can observe
    setTimeout(Proc,500,i);
}
function colorChange(i){
    var change;
    if(i>7 && i!=11 && i !=13){
        table = document.getElementById("table");
        var row = table.insertRow(index);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = A;
        cell2.innerHTML = Q;
        cell3.innerHTML = QMO;
        cell4.innerHTML = count;
        index++;
    }
    switch(i){
        case 1:
            change = "start";
            break;
        case 2:
            change = "InitValA";
            document.getElementById(change).innerHTML= "A = " + A;
            break;
        case 3:
            change = "InitValQ";
            document.getElementById(change).innerHTML= "Q = "+ Q;
            break;
        case 4:
            change = "InitValQM";
            document.getElementById(change).innerHTML= "Q(-1) = " + QMO;
            break;
        case 5:
            change = "InitValM";
            document.getElementById(change).innerHTML = "M = "+ M;
            break;
        case 6:
            change = "InitValC";
            document.getElementById(change).innerHTML = "Count = "+ count;
            break;
        case 7:
            change = "ConditionO";
            document.getElementById(change).innerHTML = QO + "," + QMO;
            document.getElementById(change).style.marginLeft = "-12px";
            document.getElementById("diamond1").style.borderBottomColor = "yellow";
            document.getElementById("diamondBottom").style.borderTopColor = "yellow";
            break;
        case 8:
            change = "sub";
            A = sub();
            document.getElementById(change).innerHTML= "A = " + A;
            break;
        case 9:
            change = "add";
            A = add();
            document.getElementById(change).innerHTML= "A = " + A;
            break;
        case 10:
            change = "shift";
            arithmeticShiftRight();
            document.getElementById(change).innerHTML = A + "," + Q + "," + QO;
            document.getElementById("counter").innerHTML = "Count = "+count+" - 1"
            count--;
            break;
        case 11:
            change = "Condition1";
            document.getElementById(change).innerHTML = count + " = 0?"
            break;
        case 12:
            change = "result";
            re = parseInt(A+""+Q);
            if(neg==1){
                posResult = twoComplement(re);
            }else{
                posResult = re;
            }
            decResult = convertBinaryToDecimal(posResult);
            document.getElementById(change).innerHTML = re+"<br>"+decResult;
            break;
        case 13:
            change = "stop";
            document.getElementById("submit").disabled = false;
            break;
                                
    }
    //changing element so that we can observe
    document.getElementById(change).style.color = "red";
    document.getElementById(change).style.backgroundColor = "yellow";
}
function colorReturn(i){
    var change;
    switch(i){
        case 1:
            change = "start";
            break;
        case 2:
            change = "InitValA";
            break;
        case 3:
            change = "InitValQ";
            break;
        case 4:
            change = "InitValQM";
            break;
        case 5:
            change = "InitValM";
            break;
        case 6:
            change = "InitValC";
            break;
        case 7:
            change = "ConditionO";
            document.getElementById("diamond1").style.borderBottomColor = "grey";
            document.getElementById("diamondBottom").style.borderTopColor = "grey";
            break;
        case 8:
            change = "sub";
            break;
        case 9:
            change = "add";
            break;
        case 10:
            change = "shift";
            break;
        case 11:
            change = "Condition1";
            break;      
        case 12:
            change = "result";
            break;
        case 13:
            change = "stop";
            break;                  
    }
    //reseting element back to normal
    document.getElementById(change).style.color = "black";
    document.getElementById(change).style.backgroundColor = "grey";
}
function convertDecimalToBinary(n)
{
        var binaryNumber = 0;
        var remainder = 0, i = 1,ne;
        //checking if number is negative
        if(n<0){
            ne = 1;
            n = Math.abs(n);
        }else{
            ne = 0;
        }
        while (n>=1)
        {	
            remainder = n%2;
            n = parseInt(n/2);
            binaryNumber = binaryNumber + (remainder*i);
            i = i*10;
        }
        if(ne == 1){
            return (twoComplement(binaryNumber));
        }else{
            return binaryNumber;
        }
}

function convertBinaryToDecimal(n)
{
        var decimalNumber = 0, i = 0, remainder, powTwo;
        console.log("Fucking hell");
        if(neg == 1){
            n = n%power;
        }
        while (n>=1)
        {
            remainder = n%10;
            n = parseInt(n/10);
            powTwo = Math.pow(2,i);
            decimalNumber = decimalNumber + (remainder*powTwo);
            ++i;
        }
        if(neg==1){
            decimalNumber = decimalNumber * (-1);
        }
    return decimalNumber;
}

function twoComplement(n){
    var temp=0,rem,i=1,flag=0;
    var l = parseInt(n.toString().length);
    while(l!=0){
        rem = n % 10;
        if(flag == 1){
            if(rem == 0){
                temp = temp+i*1;
            }else{
                temp = temp + i*0;
            }
        }else{
            if(rem==0){
                temp=temp+i*rem;
            }else{
                temp=temp+i*rem;
                flag = 1;
            }
        }
        
        i *= 10;
        n = parseInt(n/10);
        l--;
    }
    if(rem==1){
        temp = temp+i*1;
    }
    return temp;
}
function sub(){
    var temp =0,i=1;
    var r1,r2,c=0;
    var tempA = parseInt(A);
    var tempNeM = parseInt(NeM);
    while(tempA!=0||tempNeM!=0){
        r1 = tempA % 10;
        r2 = tempNeM % 10;
        tempA = parseInt(tempA / 10);
        tempNeM = parseInt(tempNeM / 10);
        if(c == 0){
            if(r1 == 0 && r2 == 0){
                temp = temp + i * 0;
                c = 0;
            }else if(r1 == 1 && r2 == 1){
                temp = temp + i * 0;
                c = 1;
            }else{
                temp = temp + i * 1;
                c = 0;
            }
        }else{
            if(r1 == 0 && r2 == 0){
                temp = temp + i * 1;
                c = 0;
            }else if(r1 == 1 && r2 == 1){
                temp = temp + i * 1;
                c = 1;
            }else{
                temp = temp + i * 0;
                c = 1;
            }
        }
        i *=10;
    }
    return temp;
}
function add(){
    var temp =0,i=1;
    var r1,r2,c=0;
    var tempA = parseInt(A);
    var tempM = parseInt(M);
    while(tempA!=0||tempM!=0){
        r1 = tempA % 10;
        r2 = tempM % 10;
        tempA = parseInt(tempA / 10);
        tempM = parseInt(tempM / 10);
        if(c == 0){
            if(r1 == 0 && r2 == 0){
                temp = temp + i * 0;
                c = 0;
            }else if(r1 == 1 && r2 == 1){
                temp = temp + i * 0;
                c = 1;
            }else{
                temp = temp + i * 1;
                c = 0;
            }
        }else{
            if(r1 == 0 && r2 == 0){
                temp = temp + i * 1;
                c = 0;
            }else if(r1 == 1 && r2 == 1){
                temp = temp + i * 1;
                c = 1;
            }else{
                temp = temp + i * 0;
                c = 1;
            }
        }
        i *=10;
    }
    return temp;
}
function arithmeticShiftRight(){
    var temp1, temp2, temp3;
    temp1 = A % 10;
    temp2 = Q % 10;
    temp3 = parseInt(A / power);
    QMO = temp2;
    Q = parseInt(Q / 10) + (power * temp1);
    A = parseInt(A / 10) + (power * temp3);
}
function reset(i){
    A=M=Q=NeM=count=QMO=QO=power=re=initCount=neg=decResult=posResult=0;
    index=1;
    var change;
    switch(i){
        case 1:
            change = "start";
            break;
        case 2:
            change = "InitValA";
            document.getElementById(change).innerHTML= "A = 0000" ;
            break;
        case 3:
            change = "InitValQ";
            document.getElementById(change).innerHTML= "Q = NA";
            break;
        case 4:
            change = "InitValQM";
            document.getElementById(change).innerHTML= "Q(-1) = 0";
            break;
        case 5:
            change = "InitValM";
            document.getElementById(change).innerHTML = "M = NA";
            break;
        case 6:
            change = "InitValC";
            document.getElementById(change).innerHTML = "Count = n";
            break;
        case 7:
            change = "ConditionO";
            document.getElementById(change).innerHTML = "Q(O)Q(-1)";
            document.getElementById(change).style.marginLeft = "-33px";
            document.getElementById("diamond1").style.borderBottomColor = "grey";
            document.getElementById("diamondBottom").style.borderTopColor = "grey";
            break;
        case 8:
            change = "sub";
            A = sub();
            document.getElementById(change).innerHTML= "A = A - M";
            break;
        case 9:
            change = "add";
            A = add();
            document.getElementById(change).innerHTML = "A = A + M";
            break;
        case 10:
            change = "shift";
            arithmeticShiftRight();
            document.getElementById(change).innerHTML = "A , Q, QO";
            document.getElementById("counter").innerHTML = "Count = Count - 1"
            count--;
            break;
        case 11:
            change = "Condition1";
            document.getElementById(change).innerHTML = "Count = 0?"
            break;
        case 12:
            change = "result";
            document.getElementById(change).innerHTML = "Result";
            break;
        case 13:
            change = "stop";
            table = document.getElementById("table");
            table.innerHTML = "";
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = "A";
            cell2.innerHTML = "Q";
            cell3.innerHTML = "Q(-1)";
            cell4.innerHTML = "count";
            break;                      
    }
    //changing element so that we can observe
    document.getElementById(change).style.color = "black";
    document.getElementById(change).style.backgroundColor = "grey";
}