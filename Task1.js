function reverseString(inputStr) {
  let reversedStr = "";
  for (let i = inputStr.length - 1; i >= 0; i--) {
    reversedStr += inputStr.charAt(i);
  }
  return reversedStr;
}

// Test the function
const exampleInput = "hello world";
const result = reverseString(exampleInput);
console.log(result); // Output: "dlrow olleh"
