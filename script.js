alert("Please note: Project still under construction. 😉")

// Challenge 1: Alert value of password input when submitting

function showPassword(event) {
    event.preventDefault();
    let passwordInput = document.querySelector("#password-input");
    alert(`Your password is ${passwordInput.value}`);
}

let passwordForm = document.querySelector("#password-form");
passwordForm.addEventListener("submit", showPassword);


// Challenge 2: Alert value of username and email inputs when submitting

function showLoginFormValues(event) {
  event.preventDefault();
  let usernameInput = document.querySelector("#username-input");
  let emailInput = document.querySelector("#email-input");
  alert(`Your username is ${usernameInput.value}`);
  alert(`Your email is ${emailInput.value}`);
}

let loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", showLoginFormValues);
