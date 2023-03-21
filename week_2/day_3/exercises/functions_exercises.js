/* -------------------------------------------------------------

Practice writing and using functions by providing functions to fulfill the following requests;
You can test your functions by executing them in a console.log()

e.g. console.log(my_function())

1. Return the square of a number
2. Convert Celsius to Fahrenheit
3. Find the area of a given Rectangle
4. Find the area and perimeter of a Circle
5. Generate a random number
6. Reverse a string.


------------------------------------------------------------- */
function square(x) {
    let answer;
    answer = x * x;
    return answer
}
console.log( square(5) );

function area(w, h){
    return w * h;
}
console.log(area(3, 9));

function random(max) {
    let randomNumber = Math.random();
    let answer = randomNumber * max;

    console.log(`${randomNumber} x ${max} = ${answer}`);

    return answer 

}
console.log(random(5000));



