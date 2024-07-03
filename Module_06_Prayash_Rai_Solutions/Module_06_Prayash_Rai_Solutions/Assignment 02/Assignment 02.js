//PROBLRM 2
//prompt
let input = prompt("feedback")

//check the length >10 and <30
if (input.length >10 && input.length <30) {
console.log("Thanks! Here is your 15% discount")
}
//length must be >= 30
else if (input.length >= 30 ) 
{
    console.log("We really appreciate your feedback! Here is your 30% discount")
}
else
{
    console.log("Hope to see you again!")
}