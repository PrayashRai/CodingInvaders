class Movie {
  constructor() {
    this.members = [];
  }
  add(castMemberName) {
    return this.members.push(castMemberName);
  }
  display() {
    return this.members;
  }
  size() {
    return this.members.length - 1;
  }
}

let myStack = new Movie();

function promptBox1() {
  const promptOption1 = Number(
    prompt`please enter the option to proceed. . . \n\n 1. Add a new cast member \n 2. Show cast`
  );
  if (promptOption1 === 1) {
    promptBox2();
  } else if (promptOption1 === 2) {
    showCast();
  } else {
    alert("Invalid input. Please provide the number only");
    promptBox1();
  }
}

function promptBox2() {
  const promptOptions2 = prompt("Add a cast member name");
  if (promptOptions2 !== null) {
    addCast(promptOptions2);
    if (confirm("Do yo want to add more names") === true) {
      promptBox2();
    } else {
      promptBox1();
    }
  } else {
    promptBox1();
  }
}

let addCast = (element) => {
  myStack.add(element);
  console.log(`${element} has added to the cast member.`);
};

let showCast = () => {
  console.log(myStack.display());
};
