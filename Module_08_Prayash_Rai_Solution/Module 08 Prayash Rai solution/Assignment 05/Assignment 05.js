function checkLargestNumber(arr){
    if(arr.length < 3){
      return; // three element should be there
    }
    let largest = 0;
    let secondLargest = 0;
    let thirdLargest = 0;
    
    for (i = 0; i < arr.length; i++){
       if(arr[i] > largest){
         thirdLargest = secondLargest;
         secondLargest = largest;
         largest = arr[i]
       }else if(arr[i] > secondLargest){
         thirdLargest = secondLargest;
         secondLargest = arr[i];
       }else if(arr[i] > thirdLargest){
         thirdLargest = arr[i]
       }
     }
    return [largest, secondLargest, thirdLargest]
    }
  let array = [3, 44, 1, 2, 10, 6, 77];
  let findThreeLargestNumber = checkLargestNumber(array)
  console.log(findThreeLargestNumber)