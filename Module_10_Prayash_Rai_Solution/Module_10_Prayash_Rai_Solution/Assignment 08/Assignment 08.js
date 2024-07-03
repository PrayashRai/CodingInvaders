function duplicateArray(array) {
    return array.slice();
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const duplicatedArray = duplicateArray(originalArray);
  
  console.log("Original Array:", originalArray);
  console.log("Duplicated Array:", duplicatedArray);
  