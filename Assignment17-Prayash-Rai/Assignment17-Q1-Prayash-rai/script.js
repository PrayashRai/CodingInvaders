const array = [1500, 1200, 786, 450, 2000, 2300, 546, 780, 800, 900, 2000];

function bubbleSort(inputArr){
    let len = inputArr.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(inputArr[j] > inputArr[j + 1]){
                let tmp =inputArr[j]
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

console.log(bubbleSort(array));