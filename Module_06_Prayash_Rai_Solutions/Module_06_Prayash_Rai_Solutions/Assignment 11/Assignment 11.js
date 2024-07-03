//PROBLEM 11
let number = prompt("Enter a number:");

let isPrime = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (number <= 1 || !isPrime) {
  console.log("This number is not prime");
} else {
  console.log("This number is prime");
}