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

## Exercises

### Exercise 1: Style the Box
Add styles to `.box` to demonstrate the box model:
- Add `background-color: lightblue;`
- Add `padding: 20px;`
- Add `border: 3px solid blue;`
- Add `margin: 20px;`
- Add `width: 300px;`
- Open DevTools (F12) and inspect the box to see the box model diagram!

### Exercise 2: Create a Flex Container
Make `.flex-container` a flex layout:
- Add `display: flex;`
- Add `gap: 10px;`

### Exercise 3: Style the Flex Items
Add styles to `.flex-item`:
- Add `background-color: coral;`
- Add `padding: 40px;`
- Add `font-size: 24px;`
- Add `text-align: center;`

### Exercise 4: Experiment with Flexbox
Try different `justify-content` values on `.flex-container`:
- `justify-content: center;`
- `justify-content: space-between;`
- `justify-content: space-around;`

### Exercise 5: Card Layout Challenge
Style the cards section:
- Make `.card-container` a flex container with gap
- Style `.card` with:
  - `background-color: white;`
  - `padding: 20px;`
  - `box-shadow: 0 2px 4px rgba(0,0,0,0.1);`
