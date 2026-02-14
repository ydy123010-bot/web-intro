// DOM Basics - Selecting Elements and Handling Events

// ===== SELECTING ELEMENTS =====

// getElementById - select by ID
const message = document.getElementById("message");
const changeBtn = document.getElementById("change-btn");

// querySelector - select with CSS selector (more flexible)
const countDisplay = document.querySelector("#count");


// ===== CLICK EVENTS =====

// Basic click event
changeBtn.addEventListener("click", function() {
  message.textContent = "You clicked the button!";
});


// ===== COUNTER EXAMPLE =====

let count = 0;

const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");

incrementBtn.addEventListener("click", function() {
  count = count + 1;
  countDisplay.textContent = count;
});

decrementBtn.addEventListener("click", function() {
  count = count - 1;
  countDisplay.textContent = count;
});

resetBtn.addEventListener("click", function() {
  count = 0;
  countDisplay.textContent = count;
});


// ===== CHANGING STYLES =====

const colorBox = document.getElementById("color-box");
const redBtn = document.getElementById("red-btn");
const blueBtn = document.getElementById("blue-btn");
const greenBtn = document.getElementById("green-btn");

redBtn.addEventListener("click", function() {
  colorBox.style.backgroundColor = "red";
});

blueBtn.addEventListener("click", function() {
  colorBox.style.backgroundColor = "blue";
});

greenBtn.addEventListener("click", function() {
  colorBox.style.backgroundColor = "green";
});


/*
EXERCISES:
1. Make the message change to something different each click
   Hint: Use an array of messages and pick randomly

2. Add a "Double" button that doubles the count

3. Add more color buttons (yellow, purple, etc.)

4. Make the box display the color name as text when clicked
   Example: Click red → box shows "RED" text

5. CHALLENGE: Make the count not go below 0
*/
