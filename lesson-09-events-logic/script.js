// Events & Logic

// ===== IF/ELSE =====

const ageInput = document.getElementById("age-input");
const checkAgeBtn = document.getElementById("check-age-btn");
const ageResult = document.getElementById("age-result");

checkAgeBtn.addEventListener("click", function() {
  const age = Number(ageInput.value);

  if (age < 0) {
    ageResult.textContent = "That's not a valid age!";
  } else if (age < 13) {
    ageResult.textContent = "You're a kid!";
  } else if (age < 14) {
    ageResult.textContent = "You're a junior high schooler!";
  }else if (age< 19){
    ageResult.textContent = "You're a high schooler!"
  }else {
    ageResult.textContent = "You're an adult!";
  }
});


// ===== TOGGLE CLASSES =====

const toggleBox = document.getElementById("toggle-box");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", function() {
  // toggle() adds class if missing, removes if present
  toggleBox.classList.toggle("active");

  // Update the text based on state
  if (toggleBox.classList.contains("active")) {
    toggleBox.textContent = "I'm active!";
  } else {
    toggleBox.textContent = "Click the button!";
  }
});


// ===== SHOW/HIDE =====

const showHideBtn = document.getElementById("show-hide-btn");
const secret = document.getElementById("secret");
let isVisible = false;

showHideBtn.addEventListener("click", function() {
  secret.classList.toggle("hidden");
});


// ===== LIVE INPUT =====

const nameInput = document.getElementById("name-input");
const nameDisplay = document.getElementById("name-display");

// "input" event fires every time the value changes
nameInput.addEventListener("input", function() {
  const name = nameInput.value;
      if (name === "") {
        nameDisplay.textContent = "stranger";
      }else if(name.length < 2){
        nameDisplay.textContent = "Too Short!";
      } else {
        nameDisplay.textContent = name;
      } 
  });

const passwordInput = document.getElementById("password-input");
const passwordDisplay = document.getElementById("password-display");

passwordInput.addEventListener("input",function(){
  console.log("work")
  const password = passwordInput.value;
    if(password.length < 6){
      passwordDisplay.textContent = " Too Weak";
    }else if(password.length >=6 && password.length <= 10){
      passwordDisplay.textContent = " Medium";
    }else if(password.length > 10){
      passwordDisplay.textContent = " Strong";
    }else{
      passwordDisplay.textContent = " not correct";
    }
});
/*
EXERCISES:

1. Add more age ranges to the if/else (senior, centenarian, etc.)

2. Change the toggle box colors (try different active styles in CSS)

3. Make the show/hide use classList.toggle() instead of if/else
   Hint: You can simplify to just toggle("hidden")

4. Add validation to the name input:
   - If name is less than 2 characters, show "Too short!"
   - Otherwise show the name

5. CHALLENGE: Create a password checker
   - Add a password input
   - Show "Weak" if less than 6 characters
   - Show "Medium" if 6-10 characters
   - Show "Strong" if more than 10 characters
*/
