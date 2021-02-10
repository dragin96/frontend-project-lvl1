import random from '../utils/random.js';
import play from '../index.js';

const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));

const getDataGCD = {
  description: 'Find the greatest common divisor of given numbers.',
  questionWithAnswer() {
    const maxRandom = 100;
    const num1 = random(1, maxRandom);
    const num2 = random(1, maxRandom);
    const answer = String(getGcd(num1, num2));
    const question = `${num1} ${num2}`;
    return { question, answer };
  },
};

export default play(getDataGCD);
