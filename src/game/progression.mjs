import {random} from "../utils/random.mjs";
import {play} from "../index.mjs";

const progression = (firstElement, hiddenElementPosition, step) => {
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    if (i === hiddenElementPosition) {
      progression.push(`..`);
    } else {
      progression.push(`${i * step + firstElement}`);
    }
  }
  return progression;
};

export const getDataProgression = () =>  ({
  description: 'What number is missing in the progression?',
  correctAnswer: '',
  question() {
    const firstElement = random(1, 20);
    const step = random(2, 5);
    const hiddenElementPosition = random(0, 10 - 1);

    this.correctAnswer = firstElement + hiddenElementPosition * step;
    return  progression(firstElement, hiddenElementPosition, step).join(' ');
  },
});

export const runProgression = () => play(getDataProgression());
