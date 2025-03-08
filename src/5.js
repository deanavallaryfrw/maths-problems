const { readFileSync } = require('fs');
const { join } = require('path');

const filePath = join(__dirname, 'math-problems', 'problem.txt');
const problemText = readFileSync(filePath, 'utf8');

function solveProblem(problemText) {
  const [leftSide, operator, rightSide] = problemText.split(' ');
  let result;

  switch (operator) {
    case '+':
      result = leftSide + rightSide;
      break;
    case '-':
      result = leftSide - rightSide;
      break;
    case '*':
      result = leftSide * rightSide;
      break;
    case '/':
      result = leftSide / rightSide;
      break;
  }

  return result;
}
