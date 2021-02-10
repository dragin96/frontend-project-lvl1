import readlineSync from 'readline-sync';

const round = 3;

export default (dataPlay) => () => {
  console.log('Welcome to the Brain Games!');
  console.log(dataPlay.description);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < round; i += 1) {
    const { question, answer } = dataPlay.questionWithAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${name}!`);
      return null;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return null;
};
