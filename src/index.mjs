import readlineSync from 'readline-sync';
import {
  sayCompleted, sayCorrectAnswer, sayHelloByName, sayInCorrect, sayWelcomeGame,
} from './utils/core.mjs';

const round = 3;

export function play(dataPlay) {
  sayWelcomeGame();
  console.log(dataPlay.description);

  const name = readlineSync.question('May I have your name? ');
  sayHelloByName(name);
  for (let i = 0; i < round; i += 1) {
    const question = dataPlay.question();
    const { correctAnswer } = dataPlay;
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (String(answer) === String(correctAnswer)) {
      sayCorrectAnswer();
    } else {
      sayInCorrect(correctAnswer, answer, name);
      return null;
    }
  }
  sayCompleted(name);
  return null;
}
