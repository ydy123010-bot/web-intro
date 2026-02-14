# Lesson 7: JavaScript Introduction

## Goals
- Add JavaScript to an HTML page
- Use console.log for debugging
- Create and use variables
- Understand data types

## Key Concepts

### Adding JavaScript
```html
<!-- At the end of body (recommended) -->
<script src="script.js"></script>

<!-- Or inline -->
<script>
  console.log("Hello!");
</script>
```

### Console
- Open with F12 → Console tab
- `console.log()` prints values for debugging
- Essential tool for learning and debugging!

### Variables
```javascript
let name = "Alex";       // Can be changed later
const age = 25;          // Cannot be changed (constant)
var old = "don't use";   // Old way, avoid this
```

### Data Types
```javascript
// String (text)
let text = "Hello";
let text2 = 'Also works';

// Number
let count = 42;
let price = 19.99;

// Boolean (true/false)
let isActive = true;
let isComplete = false;
```

### String Concatenation
```javascript
// Old way
let msg = "Hello " + name + "!";

// Template literals (preferred)
let msg = `Hello ${name}!`;
```

### Basic DOM Access
```javascript
// Get an element by ID
let element = document.getElementById("output");

// Change its text
element.textContent = "New text!";
```

## Exercise
1. Open the console (F12)
2. Read through `script.js` and observe the output
3. Complete the exercises at the bottom of the file
