// Interactive Components

// ===== DARK MODE TOGGLE =====

const themeBtn = document.getElementById("theme-btn");
let isDarkMode = false;

themeBtn.addEventListener("click", function() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("dark-mode");

  if (isDarkMode) {
    themeBtn.textContent = "☀️ Light Mode";
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
  }
});


// ===== ACCORDION =====

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(function(header) {
  header.addEventListener("click", function() {
    // Get the content div (next sibling element)
    const content = header.nextElementSibling;

    // Toggle the open class
    content.classList.toggle("open");
  });
});


// ===== TABS =====

const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Get the tab ID from data-tab attribute
    const tabId = button.getAttribute("data-tab");

    // Remove active class from all buttons and panels
    tabButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });
    tabPanels.forEach(function(panel) {
      panel.classList.remove("active");
    });

    // Add active class to clicked button and matching panel
    button.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  });
});


/*
EXERCISES:

1. Save dark mode preference:
   - Use localStorage.setItem("darkMode", "true") to save
   - Use localStorage.getItem("darkMode") to retrieve on page load
   - Check on page load if dark mode was previously enabled

2. Make accordion "exclusive" (only one open at a time):
   - Before opening a new item, close all others
   - Hint: Loop through all .accordion-content and remove "open"

3. Add a fourth tab with your own content

4. CHALLENGE: Create an image gallery
   - Add 3-4 thumbnail images
   - When clicked, show the full image in a larger display area
   - Highlight the selected thumbnail

5. CHALLENGE: Add a "Like" button that:
   - Shows a heart icon
   - Counts total likes
   - Toggles between liked/unliked state
*/
