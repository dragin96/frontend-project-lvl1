#!/usr/bin/env node

import { run } from '../src/cli.mjs';

const welcomeGame = () => {
  console.log('Welcome to the Brain Games!');
};

welcomeGame();
run();
