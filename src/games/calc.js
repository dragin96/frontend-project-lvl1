import { getRandomInt } from '../utils.js';
import initGame from '../index.js';

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operation}'!`);
  }
};

const description = 'What is the result of the expression?';
const getQuestionWithAnswer = () => {
  const maxRandom = 10;
  const num1 = getRandomInt(1, maxRandom);
  const num2 = getRandomInt(1, maxRandom);
  const mathOperations = ['+', '-', '*'];
  const randomOperation = mathOperations[getRandomInt(0, mathOperations.length - 1)];
  const question = `${num1} ${randomOperation} ${num2}`;
  const answer = String(calculate(num1, num2, randomOperation));
  return { question, answer };
};

export default initGame(description, getQuestionWithAnswer);
