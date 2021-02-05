import {random} from "../utils/random.mjs";
import {play} from "../index.mjs";

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export const getDataPrime = () =>  ({
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  correctAnswer: '',
  question() {
    const question = random(1, 100);

    this.correctAnswer = isPrime(question) ? 'yes' : 'no';
    return  question;
  },
});

export const runPrime = () => play(getDataPrime());
