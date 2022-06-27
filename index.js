const input = require('readline-sync');
const { Addition, Subtraction, Division, Multiplication } = require('./operations.js');

const operations = [
  new Addition(),
  new Subtraction(),
  new Division(),
  new Multiplication()
];

console.log('Welcome to Joel\'s "useless" calculator');
console.log();

let firstName = greetUser();

console.log('You can type quit to stop adding numbers.');
let userOperation;

while (userOperation !== 'quit') {
  userOperation = askForOperation();

  if (userOperation === 'quit') {
    continue;
  }
  let howManyNumbers = askHowManyNumbers(userOperation);
  let numbersToAdd = getNumbers(howManyNumbers);

  let result = userOperation.performOperation(numbersToAdd);

  console.log(`Hey ${firstName}! The ${userOperation.resultName} is ${result}`);
  console.log();
}

console.log('Thanks for using the useless calculator');

function greetUser() {
  const firstName = input.question('What is your name? ');
  const primaryGreeting = 'Hey';

  console.log(`${primaryGreeting} ${firstName.trim()}!`);
  console.log();

  return firstName;
}

function askForOperation() {
  for (let i = 0; i < operations.length; i++) {
    let operation = operations[i];
    console.log(`${i + 1}) ${operation.name} (${operation.symbol})`);
  }
  console.log();

  let userSelection = 0;

  while (isNaN(userSelection) || userSelection < 1 || userSelection > operations.length) {
    userSelection = input.question('Please select an operation: ');

    if (userSelection === 'quit') {
      return userSelection;
    }

    return Number(userSelection)
  }

  return operations[userSelection - 1];
}

function askHowManyNumbers(operation) {
  let howManyNumbers = 0;

  while (howManyNumbers < 2) {
    howManyNumbers = Number(input.question(`How many numbers would you like to ${operation.verb}? `));
  }

  return howManyNumbers;
}

function getNumbers(howManyNumbers) {
  const numbersToAdd = [];

  for (let i = 0; i < howManyNumbers; i++) {
    let suppliedNumber = input.question('Please provide a number: ')

    suppliedNumber = Number(suppliedNumber);

    if (isNaN(suppliedNumber)) {
      i--;
      continue;
    }

    numbersToAdd.push(suppliedNumber);
  }

  return numbersToAdd;
}