
//Problem 4
//string user input
let string = prompt("Enter a string");

// reverse string
let reverseString = string.split("").reverse().join("");

//first letter capital of reversestring
let capitalWord = reverseString.charAt(0).toUpperCase() + reverseString.toLowerCase();

//log
console.log(capitalWord)
