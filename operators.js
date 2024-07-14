
/* Activity 1: Arithmetic Operations 
var a = 20;
var b = 4;

console.log("Add :",a+b);
console.log("Subtract :",a-b);
console.log("Multiply :",a*b);
console.log("Divide :",a/b);
console.log("Remainder :",b%a,"%");

/*Activity 2: Assignment Operators

let x = 10;
X = x + 5;
console.log("The result after adding 5 is:", x);

let y = 20;
y = y - 7;
console.log("The result after subtracting 7 is:", y);

// Activity 3: Comparison Operators

let num1 = 10;
let num2 = 20;

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else if (num1 < num2) {
    console.log(`${num1} is less than ${num2}`);
} else {
    console.log(`${num1} is equal to ${num2}`);
}

// Task 9: Write a program to compare two numbers using >= and  <= and log the result to the console
let num3 = 15;
let num4 = 15;

if (num3 >= num4) {
    console.log(`${num3} is greater than or equal to ${num4}`);
} else {
    console.log(`${num3} is less than ${num4}`);
}

if (num3 <= num4) {
    console.log(`${num3} is less than or equal to ${num4}`);
} else {
    console.log(`${num3} is greater than ${num4}`);
}

// Task 10: Write a program to compare two numbers using ==  and === and log the result to the console.

let num5 = 10;
let num6 = '10';

if (num5 == num6) {
    console.log(`${num5} is equal to ${num6} using ==`);
} else {
    console.log(`${num5} is not equal to ${num6} using ==`);
}

if (num5 === num6) {
    console.log(`${num5} is equal to ${num6} using ===`);
} else {
    console.log(`${num5} is not equal to ${num6} using ===`);
}


/* Activity 4: Logical Operators

let condition1 = true;
let condition2 = false;
let result = condition1 || condition2;
let result1 = condition1 && condition2;
console.log("Result of condition1 || condition2:",result); 
console.log("Result of condition1 && condition2:",result1); 

let condition = true;
let result2 = !condition;
console.log("Result of !condition:", result2);

/*Activity 5: Ternary Operator

let number = 12;
// a ? b : c    evaluates to b if the value of a is true, and otherwise to c 
let result3 = (number <= 0) ? "Positive" : "Negative";

console.log(`The number ${number} is:`, result3);


// Arithmetic operator
function operation (a,b) {
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a % b);
}

operation(5,2)


// Comparison and logical operators script

function comp (num1 , num2){
      console.log(num1> num2);
      console.log(num1< num2);
      console.log(num1>= num2);
      console.log(num1<= num2);
      console.log(num1=== num2);
      console.log(num1=== num2);
      
      if (num1 > 2 && num1 < 10) {
        console.log("Both condition fullfills");
      } else {
        console.log("Either one or both conditions failed!");
      } 

      if (num2 === 0 || num2 % 2 == 0) {
        console.log("Any or both condition meet");
      } else {
        console.log("Both conditons failed!");
      }
}

comp(10 ,20)

// Ternary operator script 
function soc(number){
 console.log(number > 0 ? "positive" : "negative");
}

soc(-12)
