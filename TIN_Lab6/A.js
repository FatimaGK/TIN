
function temperatureConverter() {
    event.preventDefault(); //stops from refreshing
    var celsiusValue = document.getElementById("celsiusText").value;
    var fahrenheit = celsiusValue * 1.8 + 32;
    document.getElementById("task").innerHTML = celsiusValue + " Celsius = " + fahrenheit + " Fahrenheit";
  }
