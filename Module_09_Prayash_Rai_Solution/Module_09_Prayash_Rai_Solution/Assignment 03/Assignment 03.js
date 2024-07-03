function personObject( ) {
    let userInput = prompt("Enter: Name, Age, Room Number (Separated by comma)")
    const [name, age, roomNumber] = userInput.split(',');
    
    const personDetails = {
        name: name.trim(),
        age: parseInt(age),
        roomNumber: roomNumber.trim(),
        message: function(){
            return `I am ${this.name}, aged${age}, living in room${roomNumber}`;
        }
    }
    return personDetails;
}

let person = personObject();
console.log(person.message())
