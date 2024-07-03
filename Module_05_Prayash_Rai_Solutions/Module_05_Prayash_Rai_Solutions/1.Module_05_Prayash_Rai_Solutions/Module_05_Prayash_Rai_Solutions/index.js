//Problem 1
//Temperature in Celsius
let celsius = prompt("Enter temperature in Celsius");

//convert Celsius into Fahrenhite
let fahrenhite = celsius * (9/5) + 32;

//log
console.log("celsius : " + celsius);
console.log("fahrenhite : " + fahrenhite);



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



//Problem 3
//prompt two strings for user input
let string1 = prompt("Enter the first string");
let string2 = prompt("Enter the second string");

//find index of the first occurrence of string2 in string1
let index = string1.indexOf(string2);

//get the remaining character of string 1 after the first occurrence os string2
let remainingString = string1.slice(index + string2.length);

//concatenate string 2 and the remainining characters of string 1
let outputString = string2.toLocaleUpperCase() + remainingString.toLocaleUpperCase();

//log
console.log(outputString);



//Problem 4
//string user input
let string = prompt("Enter a string");

// reverse string
let reverseString = string.split("").reverse().join("");

//first letter capital of reversestring
let capitalWord = reverseString.charAt(0).toUpperCase() + reverseString.toLowerCase();

//log
console.log(capitalWord)



//Problem 5
//user input
let firstName = prompt("Enter first name");
let lastName = prompt("Enter last name");
let age = prompt("Enter age");
let gender = prompt("Enter gender");
let contactNumber = prompt("Enter contact number");
let city = prompt("Enter city");

//outputstring
let outputstring = (`${firstName} ${lastName} who is a male, aged ${age} years, lives in ${city}. ${firstName}'s contact number is ${contactNumber}.`);

//log
console.log(outputString);



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



//Problem 7
//user input
let productName = prompt("Enter product name");
let productQuantity = prompt("Enter product quantity");
let productPrice = prompt("Enter the price of product");
let discount = prompt("Enter the discount");

//subtotal before and after the discount
let subTotalBeforDiscount = productPrice * productQuantity;
let discountAmount = subTotalBeforDiscount * (discount / 100);
let subTotalAfterDiscount = subTotalBeforDiscount - discountAmount;

//
let output = (`You have successfully purchased 4 products titled "${productName}".\n Amount before the discount is Rs. ${subTotalBeforDiscount}.\n Amount after the 10.5% discount is Rs. ${subTotalAfterDiscount}.`)

//log
console.log(output)



//Problem 8
//input string
let inputString = "In the park, you can see a peacock, rabbit, squirrel and a parrot.";

//array of animal and bird names
let animalNames = ["peacock", "rabbit", "squirrel", "parrot"];

// Find the animal and bird names in the input string and print them in capital letters
for (let i = 0; i < animalNames.length; i++) {
  let animalName = animalNames[i];
  if (inputString.includes(animalName)) {
    console.log(animalName.toUpperCase());
  }
}




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



//Problem 10
// user input as number
const inputNumber = Number(prompt("Enter a number:"));

// Add and subtract 1 without using arithmetic operations
const plusOne = -(~inputNumber);
const minusOne = ~(~inputNumber);

// Print the results and negation boolean value to the console
console.log(`Result after adding is ${plusOne}`);
console.log(`Result after subtraction is ${minusOne}`);
console.log(`Boolean value is ${!minusOne}`);



//Problem 11
//value of x user input
const x = parseFloat(prompt("Enter the value of x"));

//value of y
const y = (
    ((4 * (x ** 2)) + 18 - (23 * x)) /
    (((5 / 9) * 18) + 18 * (((x ** 3) / 33)) * x)
) + x * (15 / 12);

// response in alrt
alert("value of y : " + y.toFixed(4));



//Problem 12

const TAXES = 0.20;
const RENT = 20000;
const FOOD = 12000;
const OTHER = 13000;
const MY_SALARY = 70000;

const TaxAmount = MY_SALARY * TAXES;
const mySalaryNet = MY_SALARY - TaxAmount;
let totalAvailable = mySalaryNet - RENT;
totalAvailable -= FOOD + OTHER;

alert('My salary is ' + MY_SALARY + ' INR');
alert('I paid ' + TaxAmount + ' INR as taxes');
alert('I have ' + totalAvailable + ' INR left');
