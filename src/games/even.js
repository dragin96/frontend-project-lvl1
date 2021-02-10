import random from '../utils/random.js';
import play from '../index.js';

const isEven = (number) => number % 2 === 0;

const getDataEven = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  questionWithAnswer() {
    const maxRandom = 1000;
    const question = random(0, maxRandom);
    const answer = isEven(question) ? 'yes' : 'no';
    return { question, answer };
  },
};

export default play(getDataEven);
