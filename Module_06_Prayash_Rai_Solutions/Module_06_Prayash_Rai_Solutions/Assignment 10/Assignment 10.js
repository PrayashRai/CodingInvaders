//PROBLEM 10
let principal = prompt("Enter the initial sum of money:");
let years = prompt("Enter the number of years:");

let interestRate = 0.09; // 9% interest rate

let balance = principal * Math.pow(1 + interestRate, years);

console.log("Your balance is " + balance.toFixed(2) + " after " + years + " years.");