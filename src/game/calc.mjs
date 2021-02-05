import { random } from '../utils/random.mjs';
import { play } from '../index.mjs';

const getDataCalc = () => ({
  description: 'What is the result of the expression?',
  question() {
    const num1 = random(1, 10);
    const num2 = random(1, 10);
    const operation = '+-*'[random(0, 2)];
    switch (operation) {
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
    return `${num1} ${operation} ${num2}`;
  },
  correctAnswer: '',
});

export const runParty = () => play(getDataCalc());
