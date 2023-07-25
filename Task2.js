function sumOfPositiveNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        sum += numbers[i];
      }
    }
    return sum;
  }
  
  // Test the function
  const numbersArray = [2, -5, 10, -3, 7];
  const result = sumOfPositiveNumbers(numbersArray);
  console.log(result); // Output: 9 (1 + 3 + 5)
