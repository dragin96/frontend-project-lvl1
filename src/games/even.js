import { getRandomInt } from '../utils.js';
import initGame from '../index.js';

const isEvenNumber = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionWithAnswer = () => {
  const maxRandom = 1000;
  const question = getRandomInt(0, maxRandom);
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return { question, answer };
};

export default initGame(description, getQuestionWithAnswer);
