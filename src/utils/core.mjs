export const sayCorrectAnswer = () => {
  console.log('Correct!');
};

export const sayInCorrect = (correct, userAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'`);
  console.log(`Let's try again, ${userName}`);
};

export const sayWelcomeGame = () => {
  console.log('Welcome to the Brain Games!');
};

export const sayHelloByName = (name) => {
  console.log(`Hello, ${name}!`);
};

export const sayCompleted = (name) => {
  console.log(`Congratulations, ${name}!`);
};
