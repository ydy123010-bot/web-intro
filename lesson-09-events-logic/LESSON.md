# Lesson 9: Events & Logic

## Goals
- Use if/else for conditional logic
- Toggle CSS classes
- Show and hide elements
- Handle input events

## Key Concepts

### If/Else Statements
```javascript
if (condition) {
  // runs if condition is true
} else if (otherCondition) {
  // runs if first was false, this is true
} else {
  // runs if all above were false
}
```

### Comparison Operators
| Operator | Meaning |
|----------|---------|
| `===` | Equal to |
| `!==` | Not equal to |
| `<` | Less than |
| `>` | Greater than |
| `<=` | Less than or equal |
| `>=` | Greater than or equal |

### classList Methods
```javascript
// Add a class
element.classList.add("active");

// Remove a class
element.classList.remove("active");

// Toggle (add if missing, remove if present)
element.classList.toggle("active");

// Check if has class
element.classList.contains("active");  // true or false
```

### Getting Input Values
```javascript
const input = document.getElementById("my-input");
const value = input.value;  // Get current value

// Convert to number if needed
const num = Number(input.value);
```

### The "input" Event
```javascript
// Fires every time the input changes (as you type)
input.addEventListener("input", function() {
  console.log(input.value);
});

// vs "change" which fires when you leave the field
input.addEventListener("change", function() {
  console.log("Final value:", input.value);
});
```

## Exercise
1. Test each feature in `index.html`
2. Read through `script.js` to understand the patterns
3. Complete the exercises at the bottom
