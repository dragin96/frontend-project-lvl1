import { random } from '../utils/random.mjs';
import { play } from '../index.mjs';

const getDataCalc = () => ({
  description: 'What is the result of the expression?',
  question() {
    const maxRandom = 10;

    const num1 = random(1, maxRandom);
    const num2 = random(1, maxRandom);
    const listOperation = '+-*';
    const randomOperations = listOperation[random(0, listOperation.length - 1)];
    switch (randomOperations) {
      case '+':
        this.correctAnswer = num1 + num2;
        break;
      case '-':
        this.correctAnswer = num1 - num2;
        break;
      case '*':
        this.correctAnswer = num1 * num2;
        break;
      default:
        return false;
    }
    return `${num1} ${randomOperations} ${num2}`;
  },
  correctAnswer: '',
});

export const runParty = () => play(getDataCalc());
