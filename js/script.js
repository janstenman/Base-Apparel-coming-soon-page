const form = document.getElementById('coming-soon__form');

// Check if the email is valid
function invalidEmail(input) {
  const regex = /\S+@\S+\.\S+/;
  return !regex.test(input.value.trim());
}

function validateInput(input) {
  const fieldGroup = input.closest('.coming-soon__field-group');
  const errorText = fieldGroup.querySelector('small');
  const errorIcon = fieldGroup.querySelector('img');

  let invalid = false;

  if (invalidEmail(input)) {
    invalid = true;
  }

  if (invalid) {
    errorText.hidden = false;
    errorIcon.hidden = false;
    input.classList.add('error');
    input.ariaInvalid = true;
  } else {
    errorText.hidden = true;
    errorIcon.hidden = true;
    input.classList.remove('error');
    input.ariaInvalid = false;
  }

  return !invalid;
}

function handleInput(e) {
  validateInput(e.target);
}

function handleForm(e) {
  e.preventDefault();

  const input = form.querySelector('input');
  const valid = validateInput(input);
  if (valid) {
    console.log('Valid email!');
  }
}

// Add eventlisteners
form.addEventListener('input', handleInput);
form.addEventListener('submit', handleForm);
