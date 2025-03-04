// Generate a random math problem
function getRandomMathProblem() {
  const operators = ['+', '-', '*', '/'];
  const numbers = [10, 20, 30, 40];
  const problem = `${numbers[Math.floor(Math.random() * numbers.length)]} ${operators[Math.floor(Math.random() * operators.length)]} ${numbers[Math.floor(Math.random() * numbers.length)]}`;
  return problem;
}
