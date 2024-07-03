//PROBLEM 4
// Prompt the user to enter a number
let number = parseInt(prompt("Enter a number between 0 and 100):"));

// Check if the number is within the required interval
if (number >= 0 && number <= 100) {
  // Print numbers from 1 to the entered value
  for ( i = 1; i <= number; i++) {
    console.log(i);
  }
} else {
  // Alert the user that the number is not within the required interval
  alert("Number is not within the required interval.");
}
