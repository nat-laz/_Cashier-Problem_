const prompt = require("prompt-sync")({ sigint: true });

let price = +prompt("Enter the price: ");
let cash = +prompt("Enter the paid amount: ");
const bankNotes = [
  500.0, 200.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.0, 1.0, 0.5, 0.2, 0.1, 0.05,
  0.01,
];

let change = cash - price;
let changeBankNotes = [];

const checkBankNotes = () => {
  for (i = 0; i <= bankNotes.length; i++) {
    if (change < 0) {
      console.log(`You need to pay €${Math.abs(change)} more`);
      change = 0;
      return;
    }
    if (change >= bankNotes[i]) {
      changeBankNotes.push(bankNotes[i]);
      change = +(change - bankNotes[i]).toFixed(2);
      return;
    }
  }
};

//-->returns the number of each bankNote in the change array
const getLength = (arr, arrEl) => {
  return arr.filter((el) => el === arrEl).length;
};

//--> returns the number and value of each bankNote in the change array
const reduce = () => {
  let unique = [...new Set(changeBankNotes)];
  unique.forEach((uel) => {
    console.log(`${getLength(changeBankNotes, uel)} x €${uel}`);
  });
};

// -------------- Main Function -------------------
const checkCashRegister = () => {
  while (change != 0) {
    checkBankNotes();
  }
  reduce();
};
checkCashRegister();
