//problem 6
while (true) {
    let promoCode = prompt("Enter promo code");
    if (promoCode === "HOLIDAYS22") {
        console.log("10% discount has been applied");
        break; 
    } else {
        console.log("Incorrect !")
    }
}