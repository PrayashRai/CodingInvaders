function age() {
  // Get input values
  let dd = document.getElementById("form-date").value;
  let mm = document.getElementById("form-month").value;
  let yy = document.getElementById("form-year").value;

  // Validate input values
  if (dd === "") {
    document.getElementById("age").innerHTML = "Please provide Date";
    return;
  } else if (mm === "") {
    document.getElementById("age").innerHTML = "Please provide Month";
    return;
  } else if (yy === "") {
    document.getElementById("age").innerHTML = "Please provide Year";
    return;
  }

  // Regular expression pattern to match letters
  let letterPattern = /[a-zA-Z]/;

  // Test if the input string contains letters
  if (letterPattern.test(dd)) {
    document.getElementById("age").innerHTML = "Please provide valid Date";
    return;
  } else if (letterPattern.test(mm)) {
    document.getElementById("age").innerHTML = "Please provide valid Month";
    return;
  } else if (letterPattern.test(yy)) {
    document.getElementById("age").innerHTML = "Please provide valid Year";
    return;
  }

  dd = parseInt(dd);
  mm = parseInt(mm);
  yy = parseInt(yy);

  // Get current date
  let date = new Date();
  let dd1 = date.getDate();
  let mm1 = 1 + date.getMonth(); // January is 0-based
  let yy1 = date.getFullYear();

  // Days in each month (0-based array)
  let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Scenario 1: Age Calculation
  if (!isNaN(dd) && !isNaN(mm) && !isNaN(yy)) {
    if (dd > 0 && mm > 0 && yy > 1000 && mm <= 12 && dd <= monthDays[mm - 1]) {
      if (yy <= yy1 || (yy === yy1 && mm <= mm1 && dd <= dd1)) {
        let days = dd1 - dd;
        let months = mm1 - mm;
        let years = yy1 - yy;

        if (days < 0) {
          months--;
          days += monthDays[mm1 - 1];
        }

        if (months < 0) {
          years--;
          months += 12;
        }

        if (years >= 0) {
          document.getElementById("age").innerHTML =
            "Your Age Is " + years + " Years, " + months + " Months, and " + days + " Days";
          return;
        }
      }
    }
  }
  
  // Scenarios 2: Error messages
  let errorMessage = "";
 if (dd <= 0) {
    errorMessage = "Date cannot be 0 or less than 0";
  } else if (mm <= 0) {
    errorMessage = "Month cannot be 0 or less than 0";
  } else if (yy <= 0) {
    errorMessage = "Year cannot be 0 or less than 0";
  } else if (isNaN(mm) || mm > 12) {
    errorMessage = "Please provide Month value in range from 1 to 12";
  } else if (yy < 1000 || isNaN(yy)) {
    errorMessage = "Please provide year in format YYYY";
  } else if (
    yy > yy1 ||
    (yy === yy1 && mm > mm1) ||
    (yy === yy1 && mm === mm1 && dd > dd1)
  ) {
    errorMessage = "Birthdate cannot be in the future";
  } else if (dd > monthDays[mm - 1]) {
    errorMessage = "Please provide valid Date with respect to Month";
  } else {
    errorMessage = "Please provide valid Date, Month, and Year";
  }

  document.getElementById("age").innerHTML = errorMessage;
}
