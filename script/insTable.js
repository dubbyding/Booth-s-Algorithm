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