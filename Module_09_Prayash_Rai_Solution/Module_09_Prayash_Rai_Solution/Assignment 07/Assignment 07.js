//Prompt the user for no. of Products
let numberOfProducts = parseInt(prompt("Enter the number of products:"));

//Iterate and collect product details
let products = [];
for (let i = 0; i < numberOfProducts; i++) {
  let productName = prompt("Enter name of Product:");
  let productQuantity = parseInt(prompt("Enter quantity of " + productName + ":"));

  // Create product object and add it to the products array
  let product = {
    name: productName,
    quantity: productQuantity
  };
  products.push(product);
}

//Iterate through the array of products and print
products.forEach(function(product) {
  console.log(product.name + " : " + product.quantity);
});
