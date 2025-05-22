// contact_validation.js

const form = document.getElementById("contact-form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control-sign-in error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control-sign-in success";
}

// Check email is valid
function checkEmail(input) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Invalid Email Address");
  }
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} can't be more than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkLength(username, 3, 30);
  checkEmail(email);
  checkLength(message, 10, 300);
});
