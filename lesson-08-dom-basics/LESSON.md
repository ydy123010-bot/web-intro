# Lesson 8: DOM Basics

## Goals
- Select HTML elements with JavaScript
- Add click event listeners
- Change content and styles dynamically

## Key Concepts

### The DOM
The DOM (Document Object Model) is how JavaScript sees your HTML. Each element becomes an object you can manipulate.

### Selecting Elements
```javascript
// By ID (returns one element)
const btn = document.getElementById("my-button");

// By CSS selector (returns first match)
const btn = document.querySelector("#my-button");
const item = document.querySelector(".list-item");

// All matches (returns a list)
const items = document.querySelectorAll(".list-item");
```

### Event Listeners
```javascript
element.addEventListener("click", function() {
  // Code runs when clicked
});

// Common events:
// "click" - mouse click
// "mouseover" - mouse enters element
// "mouseout" - mouse leaves element
// "keydown" - key pressed
```

### Changing Content
```javascript
// Change text
element.textContent = "New text";

// Change HTML (use carefully)
element.innerHTML = "<strong>Bold text</strong>";
```

### Changing Styles
```javascript
// Individual properties
element.style.backgroundColor = "red";
element.style.fontSize = "20px";

// Note: CSS uses kebab-case (background-color)
// JavaScript uses camelCase (backgroundColor)
```

## The Pattern
1. **Select** the element(s) you want to work with
2. **Listen** for an event (click, hover, etc.)
3. **Do something** when the event happens

```javascript
// 1. Select
const button = document.getElementById("my-btn");

// 2. Listen + 3. Do
button.addEventListener("click", function() {
  alert("Clicked!");
});
```

## Exercise
1. Read through `script.js` and test each feature
2. Complete the exercises at the bottom
