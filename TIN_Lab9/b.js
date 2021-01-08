function onClickButton() {
    var xhttp = new XMLHttpRequest();
    var url = 'http://localhost:8080/';

    var numb1 = document.getElementById("number1").value;
    var numb2 = document.getElementById("number2").value;
    var select = document.getElementById("selection");
    var op = select.options[select.selectedIndex].text;

    //var JSONToSend = "{" + "\"num1\"" + ": " + num1 + "," + "\"num2\""+ ": " + num2 + "," + "\"operator\"" + ": " + op + "}";
    var obj = {
      num1: numb1,
      num2: numb2,
      operator: op
    };

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log('lolololo');
          document.getElementById("paragraph").innerHTML =
          this.responseText;
        }
      };

    xhttp.open('POST', url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //"application/json"
    //xhttp.setRequestHeader("Content-type", "application/json");
    console.log(JSON.stringify(obj));
    xhttp.send(JSON.stringify(obj));
}