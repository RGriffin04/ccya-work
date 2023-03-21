
// anonymous function

let add = function(num1, num2){
    return num1 + num2;
}

console.log(add(10, 20));

// declare a named function that takes in an array and returns sum of total of all the numbers

// define an anonymous function expression that takes two arguements
// eg: name and timeOfTheDay and returns greeting
let greeting = function(name, timeOfTheDay){
    return(`Hi ${name} good ${timeOfTheDay} `)
}
console.log(greeting("Rory", "Evening"));

// arrow function examples
let multiply = (num1, num2) => num1 * num2
console.log(multiply(3, 4));

let fullName =(fname, mname, lname) => `My full name is ${fname} ${mname} ${lname}`
console.log(fullName("Rory", "David", "Griffin"));