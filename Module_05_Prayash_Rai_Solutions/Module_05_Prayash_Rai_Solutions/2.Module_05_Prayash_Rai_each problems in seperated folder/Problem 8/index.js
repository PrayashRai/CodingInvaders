
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
