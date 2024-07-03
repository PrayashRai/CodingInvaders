//PROBLEM 5
let totalProfit = 0;

while (true) {
  let input = prompt("Enter a number:");
  
  // Check if the input is null (user clicked cancel)
  if (input === null) {
    break;
  }
  
  let number = parseInt(input);
  
  // Check if the number is negative
  if (number < 0) {
    break;
  }
  
  totalProfit += number;
  console.log("Running Total: " + totalProfit);
}

console.log("Total Profit is : " + totalProfit + " INR");
