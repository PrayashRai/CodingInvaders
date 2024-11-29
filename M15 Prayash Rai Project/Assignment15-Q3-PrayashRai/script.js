class Booking {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    return this.items.push(element);
  }

  searchUser(element) {
    this.items.find((_, index) => {
      let id = this.items[index].ticketId;
      element = Number(element);
      if (id === element) {
        console.log(`Name: ${this.items[index].userDetails.name}`);
        console.log(`From City: ${this.items[index].userDetails.fromCity}`);
        console.log(`To City: ${this.items[index].userDetails.toCity}`);
      }
    });
  }
}

let busBooking = new Booking();

function promptBox1() {
  const promptOption1 = Number(
    prompt(
      `Please provide the option to proceed \n\n 1. Book Ticket \n 2. Search User`
    )
  );
  if (promptOption1 === 1) {
    promptBox2();
  } else if (promptOption1 === 2) {
    const searchValue = prompt(`Enter Ticket Id to search user details`);
  }else{
    alert("Input valid option");
    promptBox1();
  }
}

function promptBox2() {
  let ticketId = Math.floor(Math.random() * 10000);
  let name, fromCity, toCity;

  name = prompt("Name:").trim();
  fromCity = prompt("from:").trim();
  toCity = prompt("to:").trim();

  if (name !== "" && fromCity !== "" && toCity !== "") {
    const ticketDetails = {};
    ticketDetails.userDetails = {
      Name: name,
      FromCity: fromCity,
      ToCity: toCity,
    };
    busBooking.enqueue(ticketDetails);

    alert("Ticket id: " + ticketId);
    console.log(busBooking.items[busBooking.items.length - 1]);
    promptBox1();
  } else {
    console.log("All fields must be filled");
    promptBox2();
  }
}
