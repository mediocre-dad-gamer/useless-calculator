class Operation {
  constructor(name, symbol, resultName, verb) {
    this.name = name;
    this.symbol = symbol;
    this.resultName = resultName;
    this.verb = verb;
  }

  performOperation(numbersToAdd) {

  }
}

class Addition extends Operation {
  constructor() {
    super('addition', '+', 'sum', 'add');
  }

  performOperation(numbersToAdd) {
    let numberPhrase = '';
    let sum = 0;
    for (let i = 0; i < numbersToAdd.length; i++) {
      let currentNumber = numbersToAdd[i];
      numberPhrase += `${currentNumber}, `;
      sum += currentNumber;
    }

    numberPhrase = numberPhrase.slice(0, numberPhrase.length - 2);

    console.log(`We're going to ${this.verb} ${numberPhrase}`);

    return sum;
  }
}

class Subtraction extends Operation {
  constructor() {
    super('subtraction', '-', 'difference', 'subtract');
  }

  performOperation(numbers) {
    let numberPhrase = '';
    let difference = 0;
    for (let i = 0; i < numbers.length; i++) {
      let currentNumber = numbers[i];
      numberPhrase += `${currentNumber}, `;
      difference -= currentNumber;
    }

    numberPhrase = numberPhrase.slice(0, numberPhrase.length - 2);

    console.log(`We're going to ${this.verb} ${numberPhrase}`);

    return difference;
  }
}

class Division extends Operation {
  constructor() {
    super('division', '÷', 'quotient', 'divide')
  }

  performOperation(numbers) {
    let numberPhrase = '';
    let quotient = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      let currentNumber = numbers[i];
      numberPhrase += `${currentNumber}, `;
      quotient /= currentNumber;
    }

    numberPhrase = numberPhrase.slice(0, numberPhrase.length - 2);

    console.log(`We're going to ${this.verb} ${numberPhrase}`);

    return quotient;
  }
}

class Multiplication extends Operation {
  constructor() {
    super('multiplication', '*', 'product', 'multiply');
  }

  performOperation(numbers) {
    let numberPhrase = '';
    let product = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      let currentNumber = numbers[i];
      numberPhrase += `${currentNumber}, `;
      product *= currentNumber;
    }

    numberPhrase = numberPhrase.slice(0, numberPhrase.length - 2);

    console.log(`We're going to ${this.verb} ${numberPhrase}`);

    return product;
  }
}

module.exports = { Operation, Addition, Subtraction, Division, Multiplication }