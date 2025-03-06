function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function getProblem() {
  const number = getRandomNumber();
  return `What is ${number} x ${number}?`;
}

const problem = getProblem();
console.log(problem);
