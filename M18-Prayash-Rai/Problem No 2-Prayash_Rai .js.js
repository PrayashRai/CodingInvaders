const array = [5, 1, 22, 25, 6, -1, 8, 10];

let sequence = [1, 6, -1, 10];

function subSequence(array, sequence) {
  let seq = 0;
  for (i = 0; i < array.length && seq < sequence.length; i++) {
    if (array[i] === sequence[seq]) {
      seq++;
    }
  }
  return seq === sequence.length;
}
let result = subSequence(array, sequence);
console.log(result);
