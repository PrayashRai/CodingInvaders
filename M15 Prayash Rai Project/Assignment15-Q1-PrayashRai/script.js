class Orders {
  constructor() {
    this.items = [];
  }
  add(element) {
    if (!this.items.includes(element)) {
      this.items.push(element);
      return true;
    } else {
      return false;
    }
  }

  top() {
    return `${this.items[this.items.length - 1]} " is at top of the stack"`;
  }

  remove() {
    return `${this.items.pop()} "is removed from the stack"`;
  }

  size() {
    return this.items.length - 1;
  }
}

let myStack = new Orders();

function promptBox1() {
  const promptOptions1 = Number(
    prompt(`Please enetr the option to proceed. . . \n\n 1. Add  \n 2. Checkout `)
  );
  if (promptOptions1 === 1) {
    promptBox2();
  } else if (promptOptions1 === 2) {
    checkOut();
  }else{
    alert ("Please provide the number only");
    promptBox1();
  }
}

function promptBox2() {
  const promptOptions2 = Number(
    prompt(
      `Select items. . . \n\n1.Hp \n2.Dell \n3.Acer \n4.MacBook \n5.Asus \n6.Checkout`
    )
  );
  if (promptOptions2 > 0 && promptOptions2 < 7) {
    switchFunction(promptOptions2);
  } else {
    alert("Invalid");
    promptBox2();
  }
}

function switchFunction(element) {
  let arrValue;
  switch (element) {
    case 1:
      arrValue = myStack.add("Hp");
      break;
    case 2:
      arrValue = myStack.add("Dell");
      break;
    case 3:
      arrValue = myStack.add("Acer");
      break;
    case 4:
      arrValue = myStack.add("macBook");
      break;
    case 5:
      arrValue = myStack.add("Asus");
      break;
    case 6:
      checkOut();
      break;
  }
  if (arrValue === false) {
    alert("Already added");
    promptBox2();
  } else if (arrValue === true) {
    console.log(myStack.top());
    console.log(myStack.items);
    confirmBox();
  }
}

function confirmBox(){
  const confirmValue = confirm("Do yo want to add more items");
  if (confirmValue === true){
    promptBox2();
  }else{
    checkOut();
  }
}

function checkOut(){
  do{
    console.log(myStack.remove());
    if (myStack.items.length > 0){
      console.log(
        myStack.items[myStack.items.length -1] + " is at top of the stack now..."
      );
    }else{
      console.log("stack is empty now...");
    }
  }while (myStack.items.length > 0);
}

