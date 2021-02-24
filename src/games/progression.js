import { getRandomInt } from '../utils.js';
import initGame from '../index.js';

const settingProgression = {
  start: {
    min: 1,
    max: 20,
  },
  step: {
    min: 2,
    max: 5,
  },
  maxLength: 10,
};

const getHiddenSequence = (firstElement, hiddenElementPosition, step) => {
  const progressionArr = [];
  for (let i = 0; i < settingProgression.maxLength; i += 1) {
    if (i === hiddenElementPosition) {
      progressionArr.push('..');
    } else {
      const nextElementProgression = `${i * step + firstElement}`;
      progressionArr.push(nextElementProgression);
    }
  }
  return progressionArr;
};

const description = 'What number is missing in the progression?';
const getQuestionWithAnswer = () => {
  const firstElement = getRandomInt(settingProgression.start.min, settingProgression.start.max);
  const step = getRandomInt(settingProgression.step.min, settingProgression.step.max);
  const hiddenElementPosition = getRandomInt(0, settingProgression.maxLength);

  const answer = String(firstElement + hiddenElementPosition * step);
  const question = getHiddenSequence(firstElement, hiddenElementPosition, step).join(' ');
  return { question, answer };
};

export default initGame(description, getQuestionWithAnswer);
