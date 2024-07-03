const myArray = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" }
  ];
  
  const myObject = {};
  
  for (const obj of myArray) {
    myObject[obj.id] = obj;
  }
  
  console.log(myObject);
  