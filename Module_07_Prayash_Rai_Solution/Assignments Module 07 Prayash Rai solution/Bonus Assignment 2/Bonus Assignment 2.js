const numbers = [
    [171, 166, 703, 197, 139],
    [360, 314, 437, 367],
    [310, 280, 970],
    [0, 14, 1400, 424],
    [109, 311, 9, 13, 314, 210, 30]
  ];
  
  let largestMean = -Infinity;
  let largestMeanSet = [];
  
  for (const set of numbers) {
    const mean = set.reduce((sum, num) => sum + num, 0) / set.length;
  
    if (mean > largestMean) {
      largestMean = mean;
      largestMeanSet = set;
    }
  }
  
  console.log(largestMeanSet.join(',  '));
  