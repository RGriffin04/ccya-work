// how does for work

const myNumbers =[1,2,3,4,5,6];

for(const number of myNumbers){
    console.log(`this number is ${number}`);
}


const familyMember1 = 'Rory';
const familyMember2 = 'Ben';

console.log('hello ' + familyMember1);
console.log('hello ' + familyMember2);

const familyMembers = ["Rory", "Ben"];

for(const member in familyMembers){
    console.log(`hello ${member}`);
}


// in each

const testFn = function(number, index){
    console.log(`The index of ${number} is ${index}`);
}

myNumbers.forEach((number, index) => testFn(number, index));
// myNumbers.forEach((number, index) => {console.log(`This number is ${number} at index position ${index}`);})
myNumbers.forEach((number, index) => console.log(`The index of ${number} is ${index}`));



// function to return an array with elemnts mulitplied by 2

const multiplyByTwo = function(number){
    const result = [];
    myNumbers.forEach((number) =>{
        const mulitplied = number *2;
        result.push(mulitplied)
    });
    return result;
}

console.log(multiplyByTwo(myNumbers));

// getEven



function getEvens(numbers) {   //creates function called getEvens
    const rory = []; // declaring a new array that is empty to store our new results
    numbers.forEach((number) => { //forEach loop that will go through all values in the array
    if (number % 2 ===0){ // determines which values are even numbers in the array
    rory.push(number) //if the number in the array is even, it will be added to the new empty array
    }
});
return rory// returns the new array with even numbers only
}
console.log(getEvens(myNumbers)); //logs the function we created using myNumbers[1,2,3,4,5,6], which will display only [2,4,6]


// Write a function called sumElements that takes an array of numbers as an argument and returns the sum total of all the elements in the array.
function sumElements(array) {
    let total = 0;
    for(let element of array){
        total = total+element
    }
    return total;
}
console.log(sumElements(myNumbers));      