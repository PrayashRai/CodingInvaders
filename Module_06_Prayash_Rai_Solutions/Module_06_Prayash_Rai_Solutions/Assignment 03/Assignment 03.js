//PROBLRM 3
//request taste and a number of people as user inputs
let taste = prompt("Enter taste")
let numberOfPeople = parseInt(prompt("Enter number of people"))
let recommend;

//table of taste
if (taste.toLowerCase() === "chocolate") {
    recommend = "Chocolate Dream";
}else if (taste.toLowerCase() === "berries" || taste.toLowerCase() === "fruits")
{
    recommend = "Tropic Pleasure";
} else if (taste.toLowerCase () === "nuts")
{
    recommend = "Cupcake Set";
} else if (taste.toLowerCase () === "cheesecake") {
    recommend = "Creamy Cheesecake";
} else {
    recommend = "Cupcake Set";
}

// table of size 
let size;
if (numberOfPeople >= 6) {
    size = "Large";
  } else if (numberOfPeople >= 3) {
    size = "Medium";
  } else {
    size = "Small";
  }
  
  // log
  console.log(size + " " + recommend);