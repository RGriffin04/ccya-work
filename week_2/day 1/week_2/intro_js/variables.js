let emailAddress = "me@gmail.com";
let numberOflogins = 40;

// declareing variables
// camelCasing
let myName;
let myAge;

console.log(myName);
// console.log(cohortName);


// Initialising a variable
myName = "Rory";
myAge = "18";

console.log(myName);

// change or update the value of the variable
emailAddress = "me123@gmail.com"

console.log(emailAddress);

// Data Types
let foo = 42;
foo = "bar";
foo = true;

let num1 = 100;
let num2 = "20";

console.log(num1+num2);

console.log(num1+10);

console.log(200/45*800-400+790);


let sentence = "nice day";
console.log(sentence);


let firstName = "Rory";
let secondName = "Griffin";
fullName = '${firstName} ${secondName}$';
console.log(fullName);

console.log(firstName.length);

let isLiked = true;
if(isLiked){
    console.log("W fr");
}
// Array
let favourites = ["star wars","lord of the rings","cars","a silent voice"];

console.log(favourites);
// Object
let dog = {
    name:"finn",
    breed:"border terrier",
    favfoods:["bannana", "ham","treats"]
};

console.log(dog);

// Task 1
// Declare and initialise a variable called myPet and give it the value "Cat"; Note, we might have to to change it later
// to "Dog" so should we use let or const?
let myPet = "cat";

// Task 2
// Log out the value of myPet and the length of myPet using a template string
console.log(myPet.length);
// Task 3
// Declare and initialise a constant called daysInYear with a value of 365
const daysInYear = 365;
// Task 4
// Declare a variable called monthsInYear with a value of 12
// Declare another variable called averageDaysInMonth with a value of daysInYear divided by monthsInYear
// Log out averageDaysInMonth

const monthsInYear = 12;
const averageDaysInMonth = daysInYear/monthsInYear;
console.log(averageDaysInMonth);
// Task 5
// JavaScript has some built in modules that we can use.
// One of them is Math.
// Round averageDaysInYear using Math.round()
console.log(Math.round(averageDaysInMonth));
// Task 6
// Log out the remainder of 7 / 3
const remainder1=7 % 3;
console.log(remainder1);
// Task 7
// Generate a random number!
const randomNumber = Math.floor(Math.random() * 100) + 1;
// Task 8
// Declare a variable called warningMessage with a value of "danger!"
// Log out the value of warningMessage in uppercase
let warningMessage = "danger!";
console.log(warningMessage.toUpperCase());
// Task 9
// Declare a variable called topSnacks with a value of an Array populated with strings
let topSnacks = ["crisps","cake","cookies","muffins","chocolate"];
console.log(topSnacks);

// Task 10
// Declare a variable called shoppingBasket with a value of an Object.
// The keys should be items and the values should be prices
let shoppingBasket = {
    milk:1,
    eggs:3,
    biscuits:2,
};
console.log(shoppingBasket);