//*******************/ Activity 1 : Variable Declartion *******************
//task 1
var age = 35;
console.log(age);

//task 2
let name = "Devaratha Raisar";
console.log(name);

//*******************/ Activity 2 : Constant Declartion *******************
//task 3
const isNameValid = true;
console.log(isNameValid);

//*******************/ Activity 3 : Data Types ******************************
//task 4

let name1 = "Saalar";
let age1 = 35;
let ismale = true;
const friend = {name: "vardharaja", desisgnation: "kaapar", city: "khansar"}
const enemyName = ["rudra", "narang", "ranga", "vishnu"]

console.log(typeof(name1));
console.log(typeof(age1));
console.log(typeof(ismale));
console.log(typeof(friend));
console.log(typeof(enemyName));

//*******************/ Activity 4 : Reassigning Variables ********************
//task 5

let name2 = "devaratha raisar"
console.log(name2);

name2 = "rajamannar ka saalar"
console.log(name2);

//*******************/ Activity 5 : Understanding const ***********************
//task 6

const bestFriend = "rajamannar";
console.log(bestFriend);

//TypeError: Assignment to constant variable. 
// bestFriend = "vardharaja mannar"
// console.log(bestFriend);

//*******************/ Feature request : 1.variable type console log ***********************
console.log(`name: ${name1},type: ${typeof(name1)}`);

console.log(`age:${age1},type: ${typeof(age1)}`);

console.log(`gender: ${ismale}, ${typeof(ismale)}`);

console.log(`friendlist: ${friend}, type: ${typeof(friend)}`);                  //output: friendlist: [object Object], type: object
//if want to log value of object log value sepratly 
// console.log(friend);
// console.log(typeof(friend));

console.log(`enemylist: ${enemyName}, type:${typeof(enemyName)}`);             //output: enemylist: rudra,narang,ranga,vishnu, type:object
// array type is object

// To log typeof array as array 
// console.log(Array.isArray(enemyName));


//*********************/ 2. reassignment demo ****************************************

// Using let for reassignment
let name3 = "raaj mannar";
console.log("Initial value of (let):", name3);

name3 = "vardharaj mannar";
console.log("Modified value of (let):", name3);

// Using const for reassignment
const city = "India";
console.log("Initial value of (const):", city);

// Trying to reassign const (will throw an error)
try {
  city = "Trying to modify (const)";
} catch (error) {
  console.log("Error occurred when trying to modify const:", error.message);
}
