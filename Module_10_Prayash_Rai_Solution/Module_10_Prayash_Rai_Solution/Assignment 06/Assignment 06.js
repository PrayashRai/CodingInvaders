let updateArray = (array, modifyFunc) => {
    console.log("Old array:", array);
    modifyFunc(array);
    console.log("New updated array:", array);
  };
  
  
  let array = [1, 2, 3, 4, 5];
  
  let incrementByOne = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i] += 1;
    }
  };
  
  updateArray(array, incrementByOne);
  