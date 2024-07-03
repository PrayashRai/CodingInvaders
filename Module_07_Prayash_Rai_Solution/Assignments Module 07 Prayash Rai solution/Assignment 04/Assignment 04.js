let movies = ['The Batman', 'Don’t Look Up', 'Against the Ice', 'Sing 2', 'Love Hard'];
let age = prompt("Enter your age:");

if (age < 18) {
  let updatedMovies = [...movies];
  updatedMovies[0] = 'Coco';
  updatedMovies[2] = 'Free Guy';
  console.log("Why wouldn’t you watch these movies:");
  console.log(updatedMovies.join(', '));
} else {
  console.log("Here are your movie recommendations:");
  console.log(movies.join(', '));
}
