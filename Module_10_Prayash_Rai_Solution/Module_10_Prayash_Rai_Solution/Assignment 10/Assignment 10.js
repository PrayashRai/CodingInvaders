function checkEvenOdd(numbersArray, printFunc) {
    for (let number of numbersArray) {
      let isEven = number % 2 === 0;
      printFunc(number, isEven);
    }
  }
  

  let numbers = [2, 4, 6, 5, 8, 7, 1, 9, 39, 22, 13, 40, 55];
  
  function printNumberEvenOdd(number, isEven) {
    if (isEven) {
      console.log(number, "is even");
    } else {
      console.log(number, "is odd");
    }
  }
  
  checkEvenOdd(numbers, printNumberEvenOdd);
  