// Challenge 1: Alert  value of password input when submitting

function showPassword(event) {
    event.preventDefault();
    let passwordInput = document.querySelector("#password-input");
    alert(`Your password is ${passwordInput.value}`);
}

let passwordForm = document.querySelector("#password-form");
passwordForm.addEventListener("submit", showPassword);


// Challenge 2: Alert  value of username and email inputs when submitting


