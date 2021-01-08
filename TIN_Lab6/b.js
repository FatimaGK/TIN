// b)	Write a JS function that will add a paragraph of text to the page after 5 seconds from opening the page
var myVar=setInterval(function(){myTimer()},5000);

function myTimer()
{
var t="This is a Paragraph.";
document.getElementById("p").innerHTML=t;
}