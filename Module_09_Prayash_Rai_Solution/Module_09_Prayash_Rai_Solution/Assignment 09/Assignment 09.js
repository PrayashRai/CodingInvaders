let employees = [{
    firstName: 'Steve',
    lastName: 'Rogers',
    age: 27,
    joinedDate: 'December 15, 2017'
 
 }, {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 25,
    joinedDate: 'January 15, 2019'
 }, {
    firstName: 'Bruce',
    lastName: 'Banner',
    age: 30,
    joinedDate: 'February 15, 2011'
 }];

 // Subtask 1: Add a new employee object at the end of the array
employees.push({
    firstName: 'Black',
    lastName: 'Widow',
    age: 27,
    joinedDate: 'December 25, 2018'
  });
  
  // Subtask 2: Add a new employee object at the start of the array
  employees.unshift({
    firstName: 'Winter',
    lastName: 'Soldier',
    age: 27,
    joinedDate: 'October 15, 2007'
  });
  
  // Subtask 3: Print the objects' data
  console.log("output1:");
  employees.forEach(function(employee) {
    console.log("This is " + employee.firstName + " " + employee.lastName + ", aged " + employee.age + " joined the company on " + employee.joinedDate);
  });
  
  // Subtask 4: Cannot add new objects, but can change existing properties
  Object.freeze(employees);


  // Subtask 5: Iterate over all objects and change joinedDate value
  employees.forEach(function(employee) {
    employee.joinedDate = 'December 13, 2021';
  });
  
  // Subtask 6: Print the updated objects' data
  console.log("output2:");
  employees.forEach(function(employee) {
    console.log("This is " + employee.firstName + " " + employee.lastName + ", aged " + employee.age + " joined the company on " + employee.joinedDate);
  });