//Write  a function converting temprature between Celcius to Fahrenheight scales 
//taking input from form of page and printing out in same page 
//Function shoul dbe invoked by HTML button
function temperatureConverter() {
    event.preventDefault(); //stops from refreshing
    var celsiusValue = document.getElementById("celsiusText").value;
    var fahrenheit = celsiusValue * 1.8 + 32;
    document.getElementById("task").innerHTML = celsiusValue + " Celsius = " + fahrenheit + " Fahrenheit";
  }