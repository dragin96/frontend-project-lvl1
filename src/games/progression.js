import { random } from '../utils/random.js';
import { play } from '../index.js';

const progression = (firstElement, hiddenElementPosition, step) => {
  const progressionArr = [];
  const maxLengthProgression = 10;
  for (let i = 0; i < maxLengthProgression; i += 1) {
    if (i === hiddenElementPosition) {
      progressionArr.push('..');
    } else {
      progressionArr.push(`${i * step + firstElement}`);
    }
  }
  return progressionArr;
};

export const getDataProgression = {
  description: 'What number is missing in the progression?',
  questionWithAnswer() {
    const firstElement = random(1, 20);
    const step = random(2, 5);
    const hiddenElementPosition = random(0, 10 - 1);

    const answer = String(firstElement + hiddenElementPosition * step);
    const question = progression(firstElement, hiddenElementPosition, step).join(' ');
    return { question, answer };
  },
};

export default play(getDataProgression);
