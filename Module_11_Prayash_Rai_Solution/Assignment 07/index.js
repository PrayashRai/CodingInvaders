function flip(arr) {
  const flippedArray = arr.map(num => ~num & 1);
  return flippedArray;
}

console.log(flip([0, 1, 1, 1, 0, 0, 1]));


