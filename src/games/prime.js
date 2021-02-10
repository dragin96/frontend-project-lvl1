import random from '../utils/random.js';
import play from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getDataPrime = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  questionWithAnswer() {
    const maxRandom = 100;
    const question = random(1, maxRandom);
    const answer = isPrime(question) ? 'yes' : 'no';
    return { question, answer };
  },
};

export default play(getDataPrime);
