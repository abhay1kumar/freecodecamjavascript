let str= 'abhaaabbssmmddee'

let count=0;
let newStr= str.split("")
for(let i= 0; i< newStr.length; i++){
if(newStr[i]=="a"){
    count++
}
}
console.log("first", count)

let countObj={}
for (let i = 0; i < newStr.length; i++) {
   let letter= newStr[i]

   if(countObj[letter]){
countObj[letter]++;
   } else{
    countObj[letter]=1
   }
    
}

console.log("55" ,countObj )


function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    const sqrt = Math.sqrt(n);
    for(let i = 2; i <= sqrt; i++ ) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("first999", isPrime(17))


function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Example usage
  console.log(factorial(5)); // Output: 120

  
//   The factorial function:

function factorial(n){
    return (n != 1)? n* factorial(n-1):1
}

console.log("60", factorial(5))



function fib(n){
    if(n<=1){
        return n
    } else{
        return fib(n-1) + fib(n-2)
    }
}

console.log("72", fib(10))