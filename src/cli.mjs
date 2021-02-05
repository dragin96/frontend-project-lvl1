import readlineSync from 'readline-sync';
import { sayHelloByName, sayWelcomeGame } from './utils/core.mjs';

export const demo = () => {
  sayWelcomeGame();
  const name = readlineSync.question('May I have your name? ');
  sayHelloByName(name);
};
