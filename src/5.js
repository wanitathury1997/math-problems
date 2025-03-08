function getRandomMathProblem() {
  // Generate a random number between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  
  let operator = "";
  switch (Math.floor(Math.random() * 3)) {
    case 0: // addition
      operator = "+";
      break;
    case 1: // subtraction
      operator = "-";
      break;
    case 2: // multiplication
      operator = "*";
      break;
  }
  
  return `${num1} ${operator} ${num2}`;
}
