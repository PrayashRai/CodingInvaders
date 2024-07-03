//PROBLRM 8
let movies = {
    "peter parker": "Spider-Man",
    "fiona": "Shrek",
    "jack sparrow": "The Pirates of the Caribbean",
    "master shifu": "Kung Fu Panda"
  };
  
  while (true) {
    let character = prompt("Enter the main character's name (or 0 to exit):").toLowerCase();
    
    if (character === "0") {
      break;
    }
    
    if (character in movies) {
      console.log(movies[character]);
    } else {
      console.log("I don't know him/her yet");
    }
  }