 function printTable(row, column){
	var myTableDiv = document.getElementById("autoTable");

	var table = document.createElement('TABLE');
	table.border = '2';

	var tableBody = document.createElement('TBODY');
	table.appendChild(tableBody);

	for (var i = 1; i <= row; i++) {
		var tr = document.createElement('TR');
		tableBody.appendChild(tr);

		for (var j = 1; j <= column; j++) {
		var td = document.createElement('TD');
		td.width = '80';
		td.appendChild(document.createTextNode("Cell " + i + "," + j));
		tr.appendChild(td);
		}
  	}
	myTableDiv.innerHTML = " ";
  	myTableDiv.appendChild(table);
    }


