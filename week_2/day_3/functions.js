// functions
// block of codes tht take in some input and gives relevant output

// declare a function
function square(number){
    return number * number
}

// invoking or executing or calling a function
const fiveSquared = square(5)
console.log(fiveSquared);
const threeSquared = square(3)
console.log(threeSquared);

// when to use return keyword

// declare the function named myFunc
function myFunc(anObject){
    console.log(anObject.active);
}
const user = {
    active: true,
    userName: "Rory123",
    loginAttempts: 8
};
const user1 = {
    active: false,
    userName: "John123",
    loginAttempts: 1
};
const user2 = {
    active: true,
    userName: "matt123",
    loginAttempts:3
};

// calling the function
myFunc(user2)

// arguments and parametres
function getUserDetails(firstName, lastName, email){
    const userDetails = `Name: ${firstName} ${lastName}, Email: ${email}`
    return userDetails;
};

const userInfo = getUserDetails("Rory","Griffin","rozza@gmail.com")
console.log(userInfo);

// default parameter
function getUserDetails1(firstName, lastName, email="Not Applicable"){
    const userDetails = `Name: ${firstName} ${lastName}, Email: ${email}`
    return userDetails;
}

const newUserInfo =getUserDetails1("Nathan", "S")
console.log(newUserInfo);

// --------------------------------------------------------------------------------//

// declare a function called 'mulitply' that takes an input of two numbers
function mulitply(num1, num2){
    return num1 * num2;
}
// declares a function called sumArray that takes an array as an arguement and
function sumArray(array){
    let total = 0;
    for (let number of array){
        total += number;
    }
    return total;
}

let numbers = [2,4,6,8,10];
console.log(sumArray(numbers));

// declare a function that takes input of a number and an array and returns

function hasValue(giveNumber, array){
    for(let number of array){
        if(number === giveNumber){
            return true;
        }
    }
    return false;
}

console.log(hasValue(5,[1,2,3,4]));

// remember how an object can have anything as a value? add a functioin to the person object that returns a string in the format "brendan eich is 62 years old"

const person ={
    name:{
        first: 'Brendan',
        last:'Eich',
    },
    age:62,
    getDetails: function(){
        return`${this.name.first} ${this.name.last} is ${this.age} years old`;
    }
}
console.log(person.getDetails());

// use the correct terminology to describe the following code

function getGreeting(userName, timeOfTheDay="day"){
    return `good ${timeOfTheDay} ${userName}`;

}
console.log(getGreeting("Eva","morning"));
console.log(getGreeting("Effie"));



// When a function runs (executes) it creates it's own space in memory known as the execution context.
// Outside a function, this is the `global context`.
/* If we declare variables inside a function with let, const or var, they will only
   exist while the function executes. Likewise, parameters only exist while the function executes.
   I.E. they are `function scoped`.
*/let firstName = "Sherlock";
function sherlockScope(buddyName){
    
    var lastName = "Holmes";
    const buddy = buddyName;
    let sentence = `${firstName} ${lastName} has a buddy called ${buddy}`;

    function addition(x, y){
        let answer = x + y
    }
    addition(3, 5)

    return answer
  }

//   console.log(sherlockScope("Watson")); // Sherlock Holmes has a buddy called Watson
//   console.log(firstName); // ReferenceError: firstName is not defined
//   console.log(lastName); // ReferenceError: lastName is not defined
//   console.log(buddy); // ReferenceError: buddy is not defined
//   console.log(buddyName); // ReferenceError: buddyName is not defined