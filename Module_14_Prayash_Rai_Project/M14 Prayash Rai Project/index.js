function validateForm() {
  const userName = document.querySelector('#user-name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const psw = document.querySelector('#psw').value.trim();
  const confirmPsw = document.querySelector('#confirm-psw').value.trim();

  const userNameError = document.querySelector('#name-error');
  const emailError = document.querySelector('#email-error');
  const pswError = document.querySelector('#psw-error');
  const confirmPswError = document.querySelector('#confirm-psw-error');
  //error message reset
  userNameError.textContent = '';
  emailError.textContent = '';
  pswError.textContent = '';
  confirmPswError.textContent = '';

  //validation check
  let isvalid = true;

  if (userName === '') {
    userNameError.textContent = "Name cannot be empty.";
    isvalid = false;
  } else if (!/^[a-zA-Z0-9]{3,20}$/.test(userName)) {
    userNameError.textContent = "Invalid Name. Name must be between 3 - 20 characters and alphanumeric.";
    isvalid = false;
  }

  if (email === '') {
    emailError.textContent = "Email cannot be empty";
    isvalid = false;
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    emailError.textContent = "Please enter a valid email.";
    isvalid = false;
  }

  if (psw === '') {
    pswError.textContent = "Password cannot be empty.";
    isvalid = false;
  } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/.test(psw)) {
    pswError.textContent =
      "Password must be between 6-10 characters with at least one number, one uppercase and one lowercase letter.";
    isvalid = false;
  }

  if (confirmPsw === '') {
    confirmPswError.textContent = "Please confirm your password";
    isvalid = false;
  } else if (confirmPsw !== psw) {
    confirmPswError.textContent = "Password don't match.";
    isvalid = false;
  }

  if (isvalid) {
    //clear form fields
    document.querySelector('#sign-up').reset();

    //Redirect to signup.html
    window.location.href = 'signup.html';
  }

  return false; //prevent from submission
}

const inputs = document.querySelectorAll("input");
  inputs.forEach((input, index) => {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const nextIndex = index + 1;
        if (nextIndex < inputs.length) {
          inputs[nextIndex].focus();
        }
      }
    });
  });
