function getSuperheroDetails(superheroesArray) {
    let detailsArray = [];
    
    for (let i = 0; i < superheroesArray.length; i++) {
      let superhero = superheroesArray[i];
      let superheroDetails = `${superhero} is present at ${i} index and has a length of ${superhero.length}`;
      detailsArray.push(superheroDetails);
    }
  
    return detailsArray;
  }
  
  // Example usage:
  let superheroes = ['spiderman', 'superman', 'wonder women', 'ironman', 'black widow', 'batman', 'thor'];
  let superheroDetails = getSuperheroDetails(superheroes);
  
  console.log(superheroDetails);
  