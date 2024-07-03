function findMostExpensiveCar(cars) {
  let mostExpensiveCar = null;
  let maxPrice = null;

  for (const car in cars) {
    if (cars[car] > maxPrice) {
      maxPrice = cars[car];
      mostExpensiveCar = car;
    }
  }

  return `The most expensive car is ${mostExpensiveCar}`;
}
console.log(findMostExpensiveCar({'hyundai': 35000, 'tesla':100000, 'MG': 80000}))