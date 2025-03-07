const { getRandomInt } = require('crypto');

function getRandomMathProblem() {
  const operation = ['+', '-', '*', '/'][getRandomInt(3)];
  const numbers = [10, 20, 30, 40, 50].map(() => getRandomInt(50));
  return `${numbers[0]} ${operation} ${numbers[1]}`;
}
