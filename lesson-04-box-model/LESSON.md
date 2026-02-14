# Lesson 4: Box Model & Flexbox

## Goals
- Understand the CSS box model
- Use margin and padding effectively
- Create layouts with Flexbox

## Key Concepts

### The Box Model
Every element is a box with four layers:

```
+---------------------------+
|         MARGIN            |  <- Space outside
|  +---------------------+  |
|  |      BORDER         |  |  <- The edge
|  |  +---------------+  |  |
|  |  |    PADDING    |  |  |  <- Space inside
|  |  |  +---------+  |  |  |
|  |  |  | CONTENT |  |  |  |  <- Your stuff
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

### Box Sizing
Always add this to your CSS:
```css
* {
  box-sizing: border-box;
}
```
This makes width include padding and border (much easier!).

### Flexbox Basics
```css
.container {
  display: flex;          /* Enable flexbox */
  gap: 10px;              /* Space between items */
  justify-content: center; /* Horizontal alignment */
  align-items: center;     /* Vertical alignment */
}
```

### justify-content Values
- `flex-start` - Pack at start (default)
- `flex-end` - Pack at end
- `center` - Center items
- `space-between` - Even space, no edge space
- `space-around` - Even space around each item

## Exercise
1. Open DevTools (F12) and inspect the `.box` element
2. Experiment with padding and margin values
3. Make the cards display in a row using Flexbox
4. Style the cards to look professional
