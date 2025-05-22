// email_validation.js

const emailSubscriptionForm = document.getElementById(
  "email-subscription-form"
);

// Display Message
emailSubscriptionForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const submitMessage = document.getElementById("submit-message");

  let validEmail = validateEmailInput();

  if (validEmail) {
    document.getElementById("email-subscription-form").reset();
    submitMessage.textContent = "Thank you for our newsletter subscription.";
    submitMessage.style.color = "Green";
  } else {
    submitMessage.textContent = "Please enter a valid email address.";
    submitMessage.style.color = "Red";
  }
});

// Email Input Validation
function validateEmailInput() {
  const email = document.getElementById("email").value;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
}
