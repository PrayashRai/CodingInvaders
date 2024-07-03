//PROBLEM 1
// Prompt
let password = prompt("Enter your password:");

// Check if the password meets the minimum length required
if (password.length >= 8) {
  console.log("acceptable");
} else {
  console.log("not acceptable");
}