
//Problem 2
// String user input
let myString = prompt("Enter a string:");

// convert string to lowercase
let lowercaseString = myString.toLowerCase();

//number of characters in the string
let characterCount = myString.length;

//first and last characters of the string
let firstCharacter = myString.charAt(0);
let lastCharacter = myString.charAt(myString.length - 1);

// log 
console.log("Lowercase string: " + lowercaseString);
console.log("Number of characters: " + characterCount);
console.log("First character: " + firstCharacter);
console.log("Last character: " + lastCharacter);



