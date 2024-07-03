
//Problem 6
// Prompt the user to enter the text
let text = prompt("Enter the text:");

// Prompt the user to enter the words to replace
let word1 = prompt("Enter the word to replace:");
let word2 = prompt("Enter the new word:");

// Find and replace the word in the text
let newText = text.replace(word1, word2);

//
let outputString = (`${text}, where "${word1}" is replaced by "${word2}".`);
// Print the new text to the console with formatting
console.log(outputString);


