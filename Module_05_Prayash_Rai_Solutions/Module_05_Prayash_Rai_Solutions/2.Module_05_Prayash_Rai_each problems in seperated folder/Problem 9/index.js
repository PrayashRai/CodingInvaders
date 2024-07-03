
//Problem 9
//user input const string and const word
const inputString = prompt("If you want to do something right, you make a list.");
const inputword = prompt("Enter the word to search");

//find position of first and last letter of the first occurrence of the word
const firstOccurrenceStart = inputString.indexOf(inputword);
const firstOccurrenceEnd = firstOccurrenceStart + inputword.length - 1;

//find position of first and last letter of the last occurrence of the word
const lastOccurrenceStart = inputString.lastIndexOf(inputword);
const lastOccurrenceEnd = lastOccurrenceStart + inputword.length - 1;

//output

let output = (`The position of first and last letter for first occurrence of the word "${inputword}" is ${firstOccurrenceStart} and ${firstOccurrenceEnd},
and the position of letters for its last occurrence is ${lastOccurrenceStart} and ${lastOccurrenceEnd}.`);


//log
console.log(output);
