
function mergeSort (leftArray, rightArray){
    let i = 0;
    let j = 0;
    let results = [];

    while(i < leftArray.length || j < rightArray.length) {
        if (i === leftArray.length) {
            results.push(rightArray[j]);
            j++;
        }
        else if (j === rightArray.length || leftArray[i] <= rightArray[j]) {
            results.push(leftArray[i]);
            i++;
        }
        else {
            results.push(rightArray[j]);
            j++;
        }
        
    }
    return results;
}

console.log(mergeSort([259, 260, 264, 265, 273, 276, 279, 300], [214, 262, 266, 275, 290, 306]));