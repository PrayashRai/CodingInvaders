//PROBLEM 7
let maxAttempts = 5;
let login = "admin_425";
let password = "jvv0oj45tm";
let attempts = 0;

while (attempts < maxAttempts) {
  let enteredLogin = prompt("Enter your login:");
  let enteredPassword = prompt("Enter your password:");

  if (enteredLogin === login && enteredPassword === password) {
    console.log("Success");
    break;
  } else {
    attempts++;
    let attemptsLeft = maxAttempts - attempts;

    if (attemptsLeft === 0) {
      console.log("No attempts left. We have to block your account.");
    } else {
      console.log("Incorrect! Try again. " + attemptsLeft + " attempts left.");
    }
  }
}
