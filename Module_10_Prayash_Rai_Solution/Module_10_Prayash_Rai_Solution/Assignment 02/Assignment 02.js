let addNum = (num, func) => num + func();
let returnTen = () => 10;

let result = addNum(5, returnTen);
console.log(result);

