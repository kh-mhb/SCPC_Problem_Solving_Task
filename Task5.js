function calculator(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Error: Division by zero is not allowed.";
        }
        return num1 / num2;
      default:
        return "Error: Invalid operator.";
    }
  }
  
  // Test the calculator function
  const number1 = 5;
  const operator = "+";
  const number2 = 3;
  
  const result = calculator(number1, operator, number2);
  console.log(result); // Output: 8 (5 + 3)
  