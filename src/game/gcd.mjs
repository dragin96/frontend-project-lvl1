import {random} from "../utils/random.mjs";
import {play} from "../index.mjs";

const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));

const getDataGCD = () =>  ({
  description: 'Find the greatest common divisor of given numbers.',
  correctAnswer: '',
  question() {
    const num1 = random(1, 100);
    const num2 = random(1, 100);
    this.correctAnswer = String(getGcd(num1, num2));
    return `${num1} ${num2}`;
  },
});

export const runGCD = () => play(getDataGCD());