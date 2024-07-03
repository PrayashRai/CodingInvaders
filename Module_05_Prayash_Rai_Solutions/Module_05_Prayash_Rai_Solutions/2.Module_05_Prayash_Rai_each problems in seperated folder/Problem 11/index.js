
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
