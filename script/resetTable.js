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