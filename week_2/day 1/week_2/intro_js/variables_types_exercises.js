/* -------------------------------------------------------------
EXERCISE 1
When we run our code, it's not obvious to us what's going on.
That's why we use console.log! It means we can 'log out' values
to the terminal so we can see them.
You can run your code after each exercise from the terminal by typing
the command "node variables_types_exercises.js"
-------------------------------------------------------------- */
// UN-COMMENT THE LINE BELOW
// console.log('Hello from JavaScript!');
// LOG OUT A STRING OF YOUR CHOICE TO THE TERMINAL
// Write your code here...
console.log("whats up");
// LOG OUT THE VARIABLE numberOfLikes
const numberOfLikes = 43;
// Write your code here...
console.log(numberOfLikes);
/* -------------------------------------------------------------
EXERCISE 2
If we don't 'initialise' a variable when we 'declare' it, the value
of it will be 'undefined'. We can also 'declare' and 'intialise' a variable
at the same time. Remember we can use the keywords 'let', 'var' or 'const'.
-------------------------------------------------------------- */
// USING THE 'let' KEYWORD, DECLARE A VARIABLE CALLED 'dinosaurType'
// Write your code here...
// UN-COMMENT THE LINE BELOW. IT SHOULD LOG OUT 'undefined'
// ASSIGN A VALUE of 'T-rex' TO dinosaurType
let dinosaurType = "tricerotops"
// Write your code here...
// UN-COMMENT THE LINE BELOW. IT SHOULD LOG OUT 'T-rex'
console.log(dinosaurType);
// DECLARE AND INITIALISE A VARIABLE CALLED 'parkName' WITH A VALUE OF 'Jurassic Park'
let parkName = "Jurrasic World"
// Write your code here...
// UN-COMMENT THE LINE BELOW TO CHECK YOUR CODE!
console.log(parkName);
// CHANGE THE VALUE OF parkName to 'Jurassic World'
// Write your code here...
// UN-COMMENT THE LINE BELOW TO CHECK!
// console.log(parkName);
// DECLARE A CONSTANT speedOfLight AND ASSIGN IT A VALUE OF 299792458
const speedOfLight = 299792458
// Write your code here...
// UN-COMMENT THE LINE BELOW TO CHECK YOUR CODE!
console.log(speedOfLight);
/* -------------------------------------------------------------
EXERCISE 3
We use strings a lot in programming to display information. We can
use single quotes, double quotes or back ticks.
Adding strings together is called 'concatenation'. We can also
display strings using template strings (a.k.a template literals) enclosed in back ticks
-------------------------------------------------------------- */
// UN-COMMENT AND FIX THE FOLLOWING STRING
let str = 'Sometimes strings dont like to be in single quotes';
console.log(str);
// USING STRING CONCATENATION AND THE VARIABLES parkName AND dinosaurType, LOG OUT THE MESSAGE 'Jurassic World has a T-rex!'
console.log(parkName + " has a " + dinosaurType + "!");
// Write your code here...
// USING TEMPLATE STRINGS LOG OUT THE SAME MESSAGE
// Write your code here...
const numOfEvents = 3;
const city = 'Edinburgh';
// USING THE VARIABLES numOfEvents AND city, LOG OUT THE MESSAGE 'There are 3 upcoming events in Edinburgh'
console.log("There are " + numOfEvents + " upcoming events in " + city);
// Write your code here...
/* -------------------------------------------------------------
EXERCISE 4
Finding the length of a string and using string methods
are useful for manipulating strings.
-------------------------------------------------------------- */
// LOG OUT THE LENGTH OF ourGalaxy
const ourGalaxy = "Milky Way";
// Write your code here...
console.log(ourGalaxy.length);
// DECLARE A VARIABLE upperGalaxy AND SET ITS VALUE TO ourGalaxy CONVERTED TO UPPERCASE LETTERS
const upperGalaxy = ourGalaxy.toUpperCase();
// Write your code here...
// UN-COMMENT THE LINE BELOW TO CHECK YOUR CODE!
console.log(upperGalaxy);
/* -------------------------------------------------------------
EXERCISE 5
Number arithmetic is common in programming. We can use the following
operators:
+ => addition
- => subtraction
/ => division
* => multiplication
% => modulus (provides the remainder of division)
Remember, if you wrap the number in quotes it becomes a string.
Assignment operators can give us a shortcut to do operations.
let highScore = 10;
highScore += 10
console.log(highScore) // 20
The incrementor operator adds 1 to a value.
let ticketsSold = 9;
ticketsSold++;
console.log(ticketsSold); // 10
-------------------------------------------------------------- */
// DECLARE A VARIABLE numberOfPets AND SET IT EQUAL TO THE NUMBER OF PETS YOU HAVE
const numberOfPets = 1;
// Write your code here...
// DECLARE A VARIABLE tenMorePets AND SET IT EQUAL TO numberOfPets PLUS 10
const tenMorePets = numberOfPets + 10;
// Write your code here...
// DECLARE A VARIABLE temperature AND SET IT EQUAL TO 30
// Write your code here...
// USE AN ASSIGNMENT OPERATOR TO SUBTRACT 35 FROM temperature
// Write your code here...
// USE THE INCREMENTOR OPERATOR TO ADD 1 TO THE VALUE OF TEMPERATURE
// Write your code here...
// MULTIPLY 15 by 3 AND SAVE THE RESULTS IN A VARIABLE CALLED fifteenByThree
// Write your code here...
// DIVIDE 12 by 3 AND SAVE THE RESULT IN A VARIABLE CALLED twelveOverThree
// Write your code here...
// DECLARE A VARIABLE remainder AND SET IT EQUAL TO THE REMAINDER OF 20 DIVIDED BY 3
// Write your code here...
// DECLARE A VARIABLE zeroRemainder AND SET IT EQUAL TO THE REMAINDER OF 20 DIVIDED BY 2
// Write your code here...
// UN-COMMENT THE LINES BELOW TO CHECK YOUR CODE!
// console.log("numberOfPets:", numberOfPets);
// console.log("tenMorePets:", tenMorePets);
// console.log("temperature:", temperature);
// console.log("fifteenByThree:", fifteenByThree);
// console.log("twelveOverThree:", twelveOverThree);
// console.log("remainder:", remainder);
// console.log("zeroRemainder:", zeroRemainder);
/* -------------------------------------------------------------
EXERCISE 6
Boolean values can either be 'true' or 'false'. These are extermely useful for
making decisions in our code.
-------------------------------------------------------------- */
let javascriptRocks = false;
// REASSIGN THE VALUE OF javascriptRocks TO true.
// Write your code here...
// DECLARE A VARIABLE isLoggedIn AND SET IT TO false
// Write your code here...
// UN-COMMENT THE LINES BELOW TO CHECK YOUR CODE!
// console.log("javascriptRocks:", javascriptRocks);
// console.log("isLoggedIn:", isLoggedIn);
/* -------------------------------------------------------------
EXERCISE 7
Arrays and Objects are key to the JavaScript language and have
similar concepts in other languages. We'll look into them more later but
for now, try creating a few.
-------------------------------------------------------------- */
// DECLARE A VARIABLE favouritePodcasts AND ASSIGN IT A VALUE OF
// AN ARRAY POPULATED WITH STRINGS
// Write your code here...
// UN-COMMENT THE LINE BELOW TO CHECK YOUR CODE!
// console.log(favouritePodcasts);
// DECLARE A VARIABLE stockPrices AND ASSIGN IT A VALUE OF
// AN ARRAY POPULATED WITH NUMBERS (You can use decimal points!)
// Write your code here...
// UN-COMMENT THE LINE BELOW TO CHECK YOUR CODE!
// console.log(stockPrices);
// DECLARE A VARIABLE country AND ASSIGN IT A VALUE OF
// AN OBJECT POPULATED WITH THE FOLLOWING KEY/VALUE PAIRS:
/*
name: "United Kingdom",
population: 7.5,
capital: "London",
currency: "sterling"
*/
// Write your code here...
// UN-COMMENT THE LINE BELOW TO CHECK YOUR CODE!
// console.log(country);