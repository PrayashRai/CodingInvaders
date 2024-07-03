//Create an array of objects as per the given object data
let objectsArray = [
    {
      name: "John",
      city: "Delhi"
    },
    {
      name: "Tony",
      city: "Mumbai"
    },
    {
      name: "Steve",
      city: "Bangalore"
    }
  ];
  
  //Add a new property to each object that is a method called oneLineIntro
  objectsArray.forEach(function(object) {
    object.oneLineIntro = () => {
      return "This is " + object.name + " from " + object.city;
    };
  });
  
  //Call the oneLineIntro method for each object and print the returned string
  objectsArray.forEach(function(object) {
    console.log(object.oneLineIntro());
  });
  