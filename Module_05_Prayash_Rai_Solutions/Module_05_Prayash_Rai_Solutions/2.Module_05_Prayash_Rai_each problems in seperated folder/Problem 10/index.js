
//Problem 10
// user input as number
const inputNumber = Number(prompt("Enter a number:"));

// Add and subtract 1 without using arithmetic operations
const plusOne = -(~inputNumber);
const minusOne = ~(~inputNumber);

// Print the results and negation boolean value to the console
console.log(`Result after adding is ${plusOne}`);
console.log(`Result after subtraction is ${minusOne}`);
console.log(`Boolean value is ${!minusOne}`);
