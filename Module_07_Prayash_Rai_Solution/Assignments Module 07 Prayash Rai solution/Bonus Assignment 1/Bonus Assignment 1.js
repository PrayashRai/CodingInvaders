const N = parseInt(prompt("Enter a number greater than 1:"));

const numbers = new Set();

while (numbers.size < N) {
  const randomNumber = Math.floor(Math.random() * 201) - 100;
  numbers.add(randomNumber);
}

const numbersArray = Array.from(numbers);
console.log("Generated Numbers: " + numbersArray.join(", "));

const greaterNumbers = [];

for (let i = 0; i < numbersArray.length - 1; i++) {
  if (numbersArray[i] > numbersArray[i + 1]) {
    greaterNumbers.push(numbersArray[i]);
  }
}

console.log("Numbers greater than their right neighbors: " + greaterNumbers.join(", "));
