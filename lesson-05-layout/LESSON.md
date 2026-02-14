# Lesson 5: Building a Page Layout

## Goals
- Create a navigation bar
- Build a hero section
- Structure a multi-section page
- Use CSS units (rem, %)

## Key Concepts

### Page Structure
```
+------------------+
|    HEADER/NAV    |
+------------------+
|                  |
|   HERO SECTION   |
|                  |
+------------------+
|    SECTION 1     |
+------------------+
|    SECTION 2     |
+------------------+
|     FOOTER       |
+------------------+
```

### CSS Units
| Unit | Description |
|------|-------------|
| `px` | Fixed pixels |
| `rem` | Relative to root font size (usually 16px) |
| `%` | Percentage of parent |
| `vh` | Percentage of viewport height |

### Helpful Properties
```css
/* Remove default list bullets */
list-style: none;

/* Remove link underlines */
text-decoration: none;

/* Smooth hover transitions */
transition: all 0.3s ease;
```

### Navigation Pattern
```css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

## Exercise
1. Customize the color scheme
2. Add more sections to the page
3. Add hover effects to links and buttons
4. Try making the hero full-height: `min-height: 100vh;`
