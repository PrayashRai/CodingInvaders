
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
