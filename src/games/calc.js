import getRandomInt from '../utils.js';
import initGame from '../index.js';

const countExpression = (num1, num2, randomOperations) => {
  switch (randomOperations) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operators: '${randomOperations}'!`);
  }
};

const description = 'What is the result of the expression?';
const getQuestionWithAnswer = () => {
  const maxRandom = 10;
  const num1 = getRandomInt(1, maxRandom);
  const num2 = getRandomInt(1, maxRandom);
  const listMathOperations = ['+', '-', '*'];
  const randomOperation = listMathOperations[getRandomInt(0, listMathOperations.length - 1)];
  const question = `${num1} ${randomOperation} ${num2}`;
  const answer = String(countExpression(num1, num2, randomOperation));
  return { question, answer };
};

export default initGame(description, getQuestionWithAnswer);
