function findSecondLargestNumber(arrNumbers) {
  let firstLargest = null;
  let secondLargest = null;
  for (let items of arrNumbers) {
    if (items > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = items;
    } else if (items > secondLargest && items < firstLargest) {
      secondLargest = items;
    }
  }
  return secondLargest;
}
console.log(findSecondLargestNumber([2, 3, 5, 9, 11, 23]));

console.log(findSecondLargestNumber([2, 4, 7]));
