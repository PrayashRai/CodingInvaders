function findDuplicateNum(arr){
    let duplicateNumber;
    let duplicatePosition;
    let duplicateIndex;
  
    let numberCount = new Map()
  
    for(let i = 0; i < arr.length; i++){
      let currentNumber = arr[i];
  
      if(numberCount.has(currentNumber)) {
        duplicateNumber = currentNumber;
        duplicatePosition = i + 1;
        duplicateIndex = numberCount.get(currentNumber);
        break;
       }else{
        numberCount.set(currentNumber, i);
      }
    }
           return `The duplicate number is ${duplicateNumber}, and its position in the list is ${duplicatePosition} with index of ${duplicateIndex}.`;
  }
  const input = [1, 2, 3, 4, 5, 6, 7, 5, 9, 10];
  const result = findDuplicateNum(input);
  console.log(result);