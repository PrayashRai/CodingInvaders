function checkMinimumNumber(num1, num2){
    if(num1 < num2){
      return num1;
    }else{
      return num2;
    }
  }
  let findMinimunNum = checkMinimumNumber(10, 4)
  console.log(findMinimunNum)