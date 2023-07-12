//ES6


// date 12-July-2023
//1. Compare Scopes of the var and let Keywords

function checkScope() {
    let i = 'function scope';
    if (true) {
    let  i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  checkScope()


  //2. Mutate an Array Declared with const

  const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
s[0]=2
s[1]=5
s[2]=7
  // Using s = [2, 5, 7] would be invalid
console.log(s)
  // Only change code above this line
}
console.log("29",s)
editInPlace();





//3. Prevent Object Mutation

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
Object.freeze(MATH_CONSTANTS)

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();






//4. Use Arrow Functions to Write Concise Anonymous Functions

// In JavaScript, we often don't need to name our functions,
//  especially when passing a function as an argument to another function. 
// Instead, we create inline functions. 
// We don't need to name these functions because we do not reuse them anywhere else.

var magic = function() {
  return new Date();
};

const magic =()=> new Date();





//5. Write Arrow Functions with Parameters

var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};


const myConcat=(arr1, arr2)=>{
  return arr1.concat(arr2)
}

console.log(myConcat([1, 2], [3, 4, 5]));



// 6. Set Default Parameters for Your Functions
// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.


const increment = (number, value=1) => number + value;



//7. Use the Rest Parameter with Function Parameters
const sum = (...args) => {
  // const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}


//8. Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);


//9. Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today, tomorrow}= HIGH_TEMPERATURES
// Only change code below this line

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;
console.log(today)
console.log(tomorrow)


//10. Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES1 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today:highToday, tomorrow: highTomorrow}=HIGH_TEMPERATURES1
// Only change code below this line
  
// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
