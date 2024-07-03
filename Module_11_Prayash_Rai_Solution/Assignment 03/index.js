function joinArray(array1, array2){
  return [...array1, ...array2];
}
const joinedArray =  joinArray([{name: "David", id: 1},{name: "Jon", id: 2}], [{name: "Ram", id: 4},{name: "Mohan", id: 3}]);

console.log(joinedArray);