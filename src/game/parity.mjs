import { random } from '../utils/random.mjs';
import { play } from '../index.mjs';

const isEven = (number) => number % 2 === 0;

const getDataParty = () => ({
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  correctAnswer: '',
  question() {
    const question = random(0, 1000);
    this.correctAnswer = isEven(question) ? 'yes' : 'no';
    return question;
  },
});

export const runParty = () => play(getDataParty());
