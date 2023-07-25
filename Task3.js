function findMostFrequentElement(arr) {
    // Create an object to store the frequency of each element
    const frequencyCounter = {};
  
    // Iterate through the array and update the frequency of each element
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
    }
  
    // Find the most frequent element
    let mostFrequentElement;
    let maxFrequency = 0;
  
    for (const element in frequencyCounter) {
      if (frequencyCounter[element] > maxFrequency) {
        maxFrequency = frequencyCounter[element];
        mostFrequentElement = element;
      }
    }
  
    return parseInt(mostFrequentElement); // Convert back to integer before returning
  }
  
  // Test the function
  const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const result = findMostFrequentElement(inputArray);
  console.log(result); // Output: 3
  