var A = 0,M,Q,NeM,count,QMO=0,QO;
function input(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    if(a.length == 0 || b.length == 0){
        window.alert("Fill the form");
        return 0;
    }
    
    M = convertDecimalToBinary(a);
    Q = convertDecimalToBinary(b);
    NeM = twoComplement(M);
    Proc(1,0);
}
//Display Functions
function Proc(i){
    var j;
    QO = Q%10;
    count = Q.toString().length;
    if(count == 0){
        return 0;
    }
    for(j=1;j<=11;j++){
        colorReturn(j);
    }   
    if((i-1)==7){
        if(QO == 1 && QMO == 0){
            i=8;
        }else if(QO==0 && QMO == 1){
            i=7;
        }else{
            i=9;
        }
    }
    colorChange(i);
    if(i==8||i==9){
        i=9;
    }
    if(i==10){
        count--;
    }
    if(i==11 && count!=0){
        i=6;
    }
    setTimeout(Proc,500,++i);
}
function colorChange(i){
    var change;
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
            document.getElementById("diamond").style.borderBottomColor = "yellow";
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
            break;
        case 11:
            change = "Condition1";
            break;
                                
    }
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
            document.getElementById("diamond").style.borderBottomColor = "grey";
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
    }
    document.getElementById(change).style.color = "black";
    document.getElementById(change).style.backgroundColor = "grey";
}
function convertDecimalToBinary(n)
{
        var binaryNumber = 0;
        var remainder = 0, i = 1,neg;
        if(n<0){
            neg = 1;
            n = Math.abs(n);
        }else{
            neg = 0;
        }
        while (n>=1)
        {	
            remainder = n%2;
            n = parseInt(n/2);
            binaryNumber = binaryNumber + (remainder*i);
            i = i*10;
        }
        if(neg == 1){
            return (twoComplement(binaryNumber));
        }else{
            return binaryNumber;
        }
}

function convertBinaryToDecimal(n)
{
        var decimalNumber = 0, i = 0, remainder;
        n=parseInt(n);
        while (n!=0)
        {
            remainder = n%10;
            n /= 10;
            decimalNumber += remainder*pow(2,i);
            ++i;
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
        }
        if(rem==0 && flag == 0){
            temp=temp+i*rem;
        }else if(rem==1 && flag == 0){
            temp=temp+i*rem;
            flag = 1;
            
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
    console.log(tempNeM);
    while(tempA!=0||tempNeM!=0){
        r1 = tempA % 10;
        r2 = tempNeM % 10;
        console.log(r1);
        console.log(r2);
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
    temp = temp + i * c; 
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
    temp = temp + i * c; 
    return temp;
}