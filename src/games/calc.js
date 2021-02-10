import random from '../utils/random.js';
import play from '../index.js';

const calculator = (num1, num2, randomOperations) => {
  switch (randomOperations) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const getDataCalc = {
  description: 'What is the result of the expression?',
  questionWithAnswer() {
    const maxRandom = 10;

    const num1 = random(1, maxRandom);
    const num2 = random(1, maxRandom);
    const listOperation = '+-*';
    const randomOperations = listOperation[random(0, listOperation.length - 1)];
    const question = `${num1} ${randomOperations} ${num2}`;
    const answer = String(calculator(num1, num2, randomOperations));
    return { question, answer };
  },
};

export default play(getDataCalc);
