# Lesson 10: Interactive Components

## Goals
- Build reusable UI components
- Work with multiple elements (querySelectorAll)
- Use data attributes
- Understand common UI patterns

## Key Concepts

### querySelectorAll
Returns all matching elements as a NodeList:
```javascript
const buttons = document.querySelectorAll(".btn");

// Loop through all of them
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Do something
  });
});
```

### Data Attributes
Custom attributes to store data in HTML:
```html
<button data-tab="tab1">Tab 1</button>
<button data-color="red">Red</button>
```

```javascript
const tabId = button.getAttribute("data-tab");  // "tab1"
const color = button.getAttribute("data-color"); // "red"
```

### nextElementSibling
Get the next HTML element:
```javascript
const header = document.querySelector(".header");
const content = header.nextElementSibling;  // Next element
```

### Common Patterns

**Toggle Pattern:**
```javascript
element.classList.toggle("active");
```

**Exclusive Selection (like tabs):**
```javascript
// Remove from all
items.forEach(item => item.classList.remove("active"));
// Add to selected
selected.classList.add("active");
```

**Show/Hide with CSS:**
```css
.hidden { display: none; }
.open { max-height: 200px; }
```

## Components Built
1. **Dark Mode Toggle** - Theme switching
2. **Accordion** - Expandable content sections
3. **Tabs** - Switchable content panels

## Exercise
1. Test all three components
2. Read the code to understand each pattern
3. Complete the exercises in the script
