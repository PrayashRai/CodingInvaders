function find2NumberSum(numbers, target) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target)
        result.push([numbers[i], numbers[j]]);
    }
  }
  return result;
}

console.log(find2NumberSum([7, -5, 2, 0, 1, 14, 4], -5));
