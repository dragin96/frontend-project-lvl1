import { getRandomInt } from '../utils.js';
import initGame from '../index.js';

const isPrimeNumber = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestionWithAnswer = () => {
  const maxRandom = 100;
  const question = getRandomInt(1, maxRandom);
  const answer = isPrimeNumber(question) ? 'yes' : 'no';
  return { question, answer };
};

export default initGame(description, getQuestionWithAnswer);
