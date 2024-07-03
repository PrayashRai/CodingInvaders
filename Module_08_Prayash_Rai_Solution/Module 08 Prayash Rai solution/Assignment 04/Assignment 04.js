//checking out if the first number is divisible by the second number or not.
function check(num1, num2){
    if(num1 % num2 === 0){
      return "Completely divisible!"
    }else{
      return "Not divisible!"
    }
  }
  let divisibleBySecondNumber = check(15, 3)
  console.log(divisibleBySecondNumber)