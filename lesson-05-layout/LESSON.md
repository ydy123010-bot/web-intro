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

## Exercises

### Exercise 1: Style the Navigation
Add styles to `nav`:
- `display: flex;`
- `justify-content: space-between;`
- `align-items: center;`
- `padding: 1rem 2rem;`
- `background-color: #333;`

### Exercise 2: Style the Logo
Add styles to `.logo`:
- `color: white;`
- `font-size: 1.5rem;`
- `font-weight: bold;`
- `text-decoration: none;`

### Exercise 3: Style the Nav Links
Add styles to `.nav-links`:
- `display: flex;`
- `list-style: none;`
- `gap: 2rem;`

Add styles to `.nav-links a`:
- `color: white;`
- `text-decoration: none;`

### Exercise 4: Style the Hero Section
Add styles to `.hero`:
- `text-align: center;`
- `padding: 4rem 2rem;`
- `background-color: #f4f4f4;`

Style `.hero h1` with larger font and margin-bottom.

### Exercise 5: Style the Button
Add styles to `.button`:
- `display: inline-block;`
- `padding: 0.75rem 1.5rem;`
- `background-color: #333;`
- `color: white;`
- `text-decoration: none;`

Add a hover effect to `.button:hover`:
- `background-color: #555;`

### Exercise 6: Style the Footer
Make the footer match the nav bar style.

### Bonus Challenges
- Make the hero full-screen: `min-height: 100vh;`
- Add smooth transitions: `transition: all 0.3s ease;`
- Add hover underline to nav links
