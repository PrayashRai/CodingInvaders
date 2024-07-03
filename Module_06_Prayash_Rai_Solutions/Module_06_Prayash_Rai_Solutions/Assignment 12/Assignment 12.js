//PROBLEM 12
let number = parseInt(prompt("Enter a number from the Fibonacci sequence:"));

let prevFib = 0;
let currFib = 1;
let nextFib;

while (currFib < number) {
  nextFib = prevFib + currFib;
  prevFib = currFib;
  currFib = nextFib;
}

let followingFib = prevFib + currFib;

console.log(prevFib);
console.log(followingFib);