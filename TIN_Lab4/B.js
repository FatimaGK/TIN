// b)	Function calculating nth number in Fibonacci sequence. 

console.log(fibonacci(9));

function fibonacci(n){
    if(n <= 1){
        return n
    }
    return fibonacci(n-1)+fibonacci(n-2);
}