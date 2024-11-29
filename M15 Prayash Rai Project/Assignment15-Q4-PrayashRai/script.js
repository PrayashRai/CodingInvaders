let balance = 25000;
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    return this.items.push(element);
  }
  balanceCheck() {
    return `Rs.${balance}`;
  }

  tranactionsCheck() {
    this.items.forEach((index) => {
      console.log(index);
    });
    return;
  }

  purchase(amount) {
    if (balance >= amount) {
      balance -= amount;
      balance = Math.floor(balance * 100) / 100;
      if (balance >= 0) {
        const creditBal = {};
        creditBal.debit = amount;
        creditBal.balance = balance;
        tranactions.enqueue(creditBal);
        return `The amount debited is: ${amount} \nThe available credit balance is ${balance}`;
      }
    } else {
      return `You do not have enough balance to complete this transaction.`;
    }
  }
}

let tranactions = new Queue();

function promptBox1() {
  const promptOptions1 = Number(
    prompt(
      `Please enter option to proceed. . . \n\n 1. Purchase \n 2. Credit Balance \n 3. Transaction \n 4. Done`
    )
  );
  if (promptOptions1 === 1) {
    const ddebitAmount = Number(prompt(`Enter the amount you want to debit.`));
    console.log(tranactions.purchase(ddebitAmount));
    promptBox1();
  } else if (promptOptions1 === 2) {
    console.log(tranactions.balanceCheck());
    promptBox1();
  } else if (promptOptions1 === 3) {
    tranactions.tranactionsCheck();
    promptBox1();
  } else if (promptOptions1 === 4) {
  } else {
    alert("Not a valid input. Please provide valid option.");
    promptBox1();
  }
}
