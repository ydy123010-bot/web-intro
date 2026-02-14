# Lesson 3: CSS Basics

## Goals
- Link a CSS file to HTML
- Use element, class, and ID selectors
- Apply colors, fonts, and basic styles

## Key Concepts

### Linking CSS
```html
<link rel="stylesheet" href="styles.css">
```

### CSS Syntax
```css
selector {
  property: value;
  another-property: value;
}
```

### Selectors
```css
/* Element - all <p> tags */
p {
  color: blue;
}

/* Class - elements with class="highlight" */
.highlight {
  background-color: yellow;
}

/* ID - the one element with id="special" */
#special {
  font-size: 24px;
}
```

### Common Properties
| Property | Example Values |
|----------|---------------|
| `color` | `red`, `#ff0000`, `rgb(255,0,0)` |
| `background-color` | `lightblue`, `#f0f0f0` |
| `font-family` | `Arial, sans-serif` |
| `font-size` | `16px`, `1.5rem`, `120%` |
| `font-weight` | `bold`, `normal`, `700` |
| `text-align` | `left`, `center`, `right` |

## Exercise
Complete the TODOs in `styles.css`:
1. Add a background color to the page
2. Style the `#special` paragraph
3. Make `.highlight` visually stand out
4. Style the color list
5. Experiment with other properties!
