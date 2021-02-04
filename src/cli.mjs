import readlineSync from 'readline-sync';

const sayHelloByName = (name) => {
    console.log(`Hello, ${name}!`);
}

export const run = () => {
    const name = readlineSync.question('May I have your name? ');
    sayHelloByName(name);
}

