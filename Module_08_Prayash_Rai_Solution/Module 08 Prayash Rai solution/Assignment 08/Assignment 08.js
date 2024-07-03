function findMissingNumber(arr) {
    let missingNumber;
    let missingPosition;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== i + 1) {
        missingNumber = i + 1;
        missingPosition = i + 1;
        break;
      }
    }
  
    return [missingNumber, missingPosition];
  }
  const input = [1, 2, 3, 4, 6, 7, 8, 9, 10];
  const [missingNumber, missingPosition] = findMissingNumber(input);
  console.log("Missing number:", missingNumber);
  console.log("Missing position:", missingPosition);
  