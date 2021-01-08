// d)	Write a JS function that will add a row to HTML table
// based on contents of a form on the same page. Function should be invoked using HTML button.
function addStudent() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = document.forms["myForm"]["studentNumber"].value;
    cell2.innerHTML = document.forms["myForm"]["studentEmail"].value;
}