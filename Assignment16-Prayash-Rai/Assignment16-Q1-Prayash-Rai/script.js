// using tiomeout function to load the page before the prompt.
setTimeout(()=> {
    const billAmount = prompt("Please enter the totall bill amount");

    let calculate = () => {
        let amount = Number(billAmount);
        let message;
        if(amount >= 5000) {
            amount = amount - amount * (20/100);
            message = `The bill amount was $${billAmount}. \nDiscount Applied: 20%. \nTotal amount to be paid: $${amount}..`;
        } else if (amount >= 3000 && amount < 5000) {
            amount = amount - amount * (15/100);
            message = `Thew bill amount was $${billAmount}. \nDiscount Applied: 15%. \nTotal amount to be paid: $${amount}.`;
        }else if (amount >= 2000 && amount < 3000 ) {
            amount = amount - amount * (10/100);
            message = `The bill amount was $${billAmount}. \nDiscount Applied: 10%. \nTotal amount to be paid: $${amount}.`;
        } else {
            message = `The bill amount was $${billAmount}. \nDiscount Applied: 0%. \ntotal amount to be paid: $${amount}.`
        }
        return message;
    }
    let msg = calculate();
    console.log(msg);
    alert(`${msg} \nOutput is visible in console as well`)
},5000);



let displayExplanation = () => {
    explanation = "";
    explanation += "Start\n\n"
    explanation += "1. Read total bill amount from user input.\n";
    explanation += "2. Set discount percentage to 0. \n";
    explanation += "3. Set discount amount to 0.\n";
    explanation += "4. if total bill amount > 5000 then\n";
    explanation += "5.     Set discount percentage to 20.\n";
    explanation += "6. else if total bill amount > 3000 then\n";
    explanation += "7.     Set discount percentage to 15.\n";
    explanation += "8. else if total bill amount > 2000 then\n";
    explanation += "9.     Set discount percentage to 10.\n";
    explanation += "10. end if.\n";
    explanation +="11. if discount percentage > 0 then.\n"
    explanation += "12.     Calculate discount amount as (total bill amount * discount percentage) / 100.\n";
    explanation += "13. end if.\n";
    explanation += "14. Calculate final amount after discount as total bill amount - discount amount.\n";
    explanation += "15. Display final amount after discount.\n\n";
     explanation += "End";
    document.getElementById("explanation").innerText = explanation;
   
  }

  // Call the function to display the explanation
  displayExplanation();










