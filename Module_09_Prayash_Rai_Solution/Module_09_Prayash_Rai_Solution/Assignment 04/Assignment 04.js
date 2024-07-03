// Create an array of objects
const data = [
  {
    firstName: 'John',
    lastName: 'Apple',
    age: 27,
    joinedDate: 'December 15, 2017'
  },
  {
    firstName: 'Ana',
    lastName: 'Rosy',
    age: 25,
    joinedDate: 'January 15, 2019'
  },
  {
    firstName: 'Zion',
    lastName: 'Albert',
    age: 30,
    joinedDate: 'February 15, 2011'
  }
];

// Custom sorting function to compare joinedDates
function compareJoinedDates(a, b) {
  const dateA = new Date(a.joinedDate);
  const dateB = new Date(b.joinedDate);

  if (dateA < dateB) {
    return -1;
  }
  if (dateA > dateB) {
    return 1;
  }
  return 0;
}

// Sort the array based on the "joinedDate" property using the custom sorting function
data.sort(compareJoinedDates);

// Iterate over the sorted array in ascending order and print the output
for (let i = data.length - 1; i >= 0; i--) {
  const obj = data[i];
  const firstName = obj.firstName;
  const lastName = obj.lastName;
  const age = obj.age;
  const joinedDate = obj.joinedDate;
  console.log(`This is ${firstName} ${lastName}, aged ${age} joined the company on ${joinedDate}`);
}
