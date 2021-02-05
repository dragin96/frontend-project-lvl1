import {sayCompleted, sayCorrectAnswer, sayHelloByName, sayInCorrect, sayWelcomeGame} from "./utils/core.mjs";
import readlineSync from "readline-sync";

const attempt = 3;
export const play = (dataPlay) => {
  sayWelcomeGame();
  console.log(dataPlay.description);

  const name = readlineSync.question('May I have your name? ');
  sayHelloByName(name);
  for (let i = 0; i < attempt; i += 1) {
    const question = dataPlay.question();
    const correctAnswer = dataPlay.correctAnswer;
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (String(answer) === String(correctAnswer)) {
      sayCorrectAnswer();
    } else {
      sayInCorrect(correctAnswer, answer, name);
      return null;
    }
  }
  sayCompleted(name);
}
