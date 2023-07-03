function generateTable(){

var table = document.getElementById('multiplication-table');

var rows = document.getElementById('rowCount').value;
var cols = document.getElementById('columnCount').value;

for(var i =1;i<=rows;i++){

    var newRow = document.createElement('tr');

    for(var j=1;j<=cols;j++){

        var newCell = document.createElement('td');
        var value = i*j;
        newCell.textContent = value;
    

        newRow.appendChild(newCell);
        table.appendChild(newRow);

    }
}

}