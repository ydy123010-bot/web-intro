// JavaScript Introduction
// Open the browser console (F12) to see output!

// 1. console.log - prints to the console
console.log("Hello from JavaScript!");
console.log("This appears in the console, not on the page");

// 2. Variables - storing data
let name = "Student";
let age = 25;
let isLearning = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is learning:", isLearning);

// 3. const vs let
const PI = 3.14159;  // const = cannot change
let score = 0;       // let = can change

score = 10;          // This works
// PI = 3;           // This would cause an error!

// 4. Basic math
let a = 10;
let b = 3;

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);

// 5. Strings
let greeting = "Hello";
let target = "World";
let message = greeting + " " + target + "!";

console.log(message);

// Template literals (easier string building)
let betterMessage = `${greeting} ${target}!`;
console.log(betterMessage);

// 6. Updating the page
document.getElementById("output").textContent = message;

/*
EXERCISES:
1. Change the name variable to your name
2. Add a new variable for your favorite color
3. Create a message using template literals that includes your name and color
4. Update the output on the page to show your message
5. Try some math: calculate your age in days (age * 365)
*/
