//PROBLEM 9
let forbiddenSymbols = ["=", "?", "*", "^", "$", "№", "@"];

let login = prompt("Enter your login:");
let i;
for (i = 0; i < login.length; i++) {
  let currentChar = login.charAt(i);

  if (forbiddenSymbols.includes(currentChar)) {
    console.log("This symbol " + currentChar + " is forbidden.");
    break;
  }
}

if (i === login.length) {
  console.log("Correct!");
}
