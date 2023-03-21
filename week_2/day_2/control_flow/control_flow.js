//  conditional statement

/*
    if condition is true) {
            execute code in this block;
    }else{
        do this;
    }
*/

let isRaining = true;
let message = "No umbrella required";

if (isRaining) {
    message = "Take an umbrella";
} else {
    message = "You're good to go"
}

console.log(message);

const fruitType = 'Apple';

if (fruitType === 'Apple') {
    console.log("Apples are £2.50 per kilo");
} else if (fruitType === 'Orange') {
    console.log("Oranges are £1.50 per kilo");
} else {
    console.log(`Sorry we have no ${fruitType}s.`);
}

// switch statement

switch(fruitType){
    case 'Apple':
        console.log('Apples are £2.50 per kilo');
        break;
    case 'Orange':
        console.log('Oranges are £1.50 per kilo');
        break;
    default:
        console.log(`Sorry we could not find ${fruitType}`);
}

/*
AND: Both conditions must be true

&&

OR: At least one condition must be true

||

*/

let number = 15;

if ( number % 3 ===0 || number % 5 === 0){
    console.log("The number is divisible by 3 or 5");
}

// Given a number, log out if it ia greater than,
// less than, or equal to 5

const my_number = 10;

if (number > 5) {
    console.log("Number is greater than 5");
} else if (number <5){
    console.log("Number is less than 5");
} else {
    console.log("number is equal to 5");
}

const numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

for (let num of numbers_array){
    if(num % 2 === 0){
        console.log(num);
    }
}

// Give a student exam mark, 
// determine if it is a fail(less than 5)
// pass (between 5 and 8)
// distinction (9 or 10)

const mark = 6;
let grade = 'Grade not yet awarded';

switch(true) {
    case mark < 5 && mark >= 0:
        grade = "fail";
        break;
    case mark >= 5 && mark < 8:
        grade = "pass";
        break;
    case mark === 9 || mark === 10:
        grade = "distinction"
        break;
    default:
        grade = "Invalid";
}