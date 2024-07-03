function generateRandomSet(length) {
    let generatedSet = [];
    for (let i = 0; i < length; i++) {
      generatedSet.push(Math.floor(Math.random() * 100) - 50);
    }
    return generatedSet;
  }
  
  function sortDescending(array) {
    return array.sort((a, b) => b - a);
  }
  
  // Generate an array of 10 random integers
  let generatedSet = generateRandomSet(10);
  
  console.log("Generated set - " + generatedSet);
  
  // Sort the array in descending order
  let sortedSet = sortDescending(generatedSet);
  
  console.log("Sorted in descending order set - " + sortedSet);
  