let student = {
  marks: [23, 56, 78, 89, 43],
  largestSwapExistsInMarks: function (num) {
    // console.log(num.toString().split(""));
    // console.log(num.toString().split("").reverse());
    // console.log(num.toString().split("").reverse().join(""));
    let largestSwap = parseInt(num.toString().split("").reverse().join(""));
    return this.marks.includes(largestSwap);
  },
};

console.log(student.largestSwapExistsInMarks(78));
console.log(student.largestSwapExistsInMarks(34));