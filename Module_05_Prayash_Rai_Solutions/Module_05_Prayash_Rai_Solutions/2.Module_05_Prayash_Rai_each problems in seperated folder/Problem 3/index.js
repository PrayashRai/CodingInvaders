
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

