const guests = [

    ["001", "Johnson", "Table 2"],
 
    ["002", "Nisha", "Table 10"],
 
    ["003", "Vasav", "Table 1"],
 
    ["004", "Uddin", "Table 7"]
 
 ]
 let input = prompt("Enter a guest ID or surname (0 to exit):");

 while(input !== "0" && guests.length > 0){
let reservationFound = false

for (let i = 0; i<guests.length; i++){
    const [id, surname, table] = guests[i];

    if(input=== id || input === surname) {
        reservationFound = true
        console.log(`welcome to ${table}`)
        guests.splice(i, 1)
        break
    }
}
if(!reservationFound) {
    console.log(alert("No resrvation found"))
    input = prompt("Enter a guest ID or surname (0 to exit):");

}else{
    input = prompt("Enter a guest ID or surname (0 to exit):");

}
 }

