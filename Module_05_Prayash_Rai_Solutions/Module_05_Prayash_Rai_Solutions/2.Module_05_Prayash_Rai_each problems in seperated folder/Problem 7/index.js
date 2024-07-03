
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
