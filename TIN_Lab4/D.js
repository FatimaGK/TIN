// d)	Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
const string = prompt('Enter a sentance');
const words = string.toLowerCase;
   words = string.split(""); words.sort();
   words = words.join("");
   console.log('The sorted words are:');
   console.log(words);