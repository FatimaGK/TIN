// f)	Write a JavaScript function that accepts a number as a parameter and check the number is prime or not
function primeOrNot(n){
    for (i=2;i<n;i++){
      if(n%2===0){
        return false;
      }
      return true;
    }
  }
  console.log(primeOrNot(4));
  console.log(primeOrNot(3));
  