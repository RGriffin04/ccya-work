# What is Programming?

**Lesson Duration: 30 minutes**

### Learning Objectives
- Know what a programming language is
- Be able to run JavaScript code from our command line 
## What Is a Programming Language?

So computers think in one's and zeros, but humans don't. 

Code is a way of converting instructions that a human can understand and read into something that a computer can understand and execute. 

### Why Learn JavaScript?

There are several reasons why JavaScript is a popular choice for a first programming language:

- Wide usage: JavaScript is one of the most widely used programming languages in the world, used to build both front-end and back-end applications.

- Versatile: JavaScript can run on both the client side (in a web browser) and the server side (using Node.js), giving learners the ability to create full-stack applications.

- Plenty of resources: There is a large online community of JavaScript developers, and a wealth of resources available, such as tutorials, forums, and documentation, to support learning.

Overall, these factors make JavaScript a popular and accessible choice for a first programming language. 

### Working with JavaScript

We will be focusing on using javaScript to comprehend the fundamentals of programming. Later we will work with JavaScript in the browser but for now we will use Node to run JavaScript.

Basically javascript can run in two places, the browser and in node. Node allows us to run javascript on the rest of our computer and not just in the browser. 

```bash
# terminal

node --version
```

Typing `node`  will open an interactive Python environment in the console (we exit it by typing `.exit`). This launches a Node REPL:

  * REPL = Read, evaluate, print, loop => good for experimenting with short" snippets of code.

This REPL allows you to quickly try snippets of JavaScript outside of your application.

Use it frequently to test lines of code or to experiment outside of the bigger programs we will write later.


## I Do

```js
// node

"hello"
```

```js
// node

typeof "hello"

# => 'string'
```

Where did this `string` come from? Well in terms of data JavaScript gives us several types out of the box.

We could write all our code in the REPL but that would be crazy. Let's create a new JS file. 

## We Do

```bash
# terminal
# Create a day_2 folder if you haven't already
cd codeclan_work/week_1/day_2 
touch hello_world.js
code .
```

```js
// hello_world.js

console.log("Hello World!");
```

```bash
# terminal 

node hello_world.js

```

## You Do

Play around with the code:

- Change the message that is printed.

- Will the code work without the parentheses?

- Is there a difference between using a single or a double quote (' vs. ")?

- Remove the semi-colon, ;.

- Print a number. (Bonus: Print two numbers added together).

- Print multiple messages one after the other.

- Print a message that contains quote marks, such as Quoth the Raven "Nevermore".
