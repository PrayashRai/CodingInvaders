let sum = 0;
let input = " "

while (input !== 0) {
  input = Number(prompt("Enter the cost (enter 0 to stop):"));
  sum += input;
}

if (sum >= 20000) {
    let discountedSum = sum - (sum * 0.3);
  let roundedSum = Math.round(discountedSum);
  console.log("The total sum to pay (with the activated discount) is " + roundedSum.toFixed(2));
} else {
  console.log("The calculated sum is " + sum.toFixed(2));
}
