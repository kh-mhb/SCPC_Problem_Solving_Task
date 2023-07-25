function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Error: Array must contain at least two elements.";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    // Find the smallest and second smallest elements
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      return "Error: All elements in the array are the same.";
    }
  
    return secondSmallest;
  }
  
  // Test the function
  const numbersArray = [9, 1, 5, 2, 3, 7, 1];
  const result = findSecondSmallest(numbersArray);
  console.log(result); // Output: 2
  