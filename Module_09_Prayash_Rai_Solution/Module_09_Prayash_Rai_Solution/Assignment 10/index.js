// Step 3: Define the submitData function
function submitData() {
    // Access the form values using the form name
    const form = document.forms["simpleForm"];
  
    // Access the form data and create a user object
    const user = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      city: form.city.value,
      gender: form.gender.value
    };
    console.log(`This is ${user.firstName} ${user.lastName}, ${user.gender} from ${user.city} and my email id is ${user.email}`)
  }


