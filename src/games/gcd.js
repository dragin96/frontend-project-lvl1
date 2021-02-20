import getRandomInt from '../utils.js';
import initGame from '../index.js';

const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));

const gcdGame = {
  description: 'Find the greatest common divisor of given numbers.',
  getQuestionWithAnswer() {
    const maxRandom = 100;
    const num1 = getRandomInt(1, maxRandom);
    const num2 = getRandomInt(1, maxRandom);
    const answer = String(getGcd(num1, num2));
    const question = `${num1} ${num2}`;
    return { question, answer };
  },
};

export default initGame(gcdGame.description, gcdGame.getQuestionWithAnswer);
