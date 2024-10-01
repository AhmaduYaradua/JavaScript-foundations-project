// Reversing a string
//  *** .split, .reverse, and .join are in-built functions *** \\
function reverseString(string) {
  return string.split("").reverse().join("");
}
console.log(reverseString("hello"));

// Counting Characters in a string
function countCharacters(count) {
  return count.length;
}
console.log(countCharacters("MusaMantu"));

// Capitalizing first letter of a sentence
//  *** .split is an in-built functions *** \\
let mySentence = "my name is ahmad";
let capitalWords = mySentence.split(" ");
for (let index = 0; index < capitalWords.length; index++) {
  capitalWords[index] =
    capitalWords[index][0].toUpperCase() + capitalWords[index].substring(1);
}
console.log(capitalWords.join(" "));

// Finding Minimum and Maximum numbers in an Array
//  *** Math.min and Math.mix are in-built functions *** \\

let numbersStack = [2, 4, 6, 8];
let minimumNumber = Math.min(...numbersStack);
let maximumNumber = Math.max(...numbersStack);
console.log(minimumNumber);
console.log(maximumNumber);

// Sum of an Array
function calculator(someArray) {
  let result = 0;
  for (let index = 0; index < someArray.length; index++) {
    result = result + someArray[index];
  }
  return result;
}
console.log(calculator([2, 4, 8]));

// filter out an elements in a given array
let numArray = [1, 2, 3, 4, 5];
let filteredArray = numArray.filter((num) => num !== 3);
console.log(filteredArray);

// Factorial
function factorial(number) {
  if (number === 1 || number <= 0) {
    return 1;
  }
  return number * factorial(number - 1);
}
console.log(factorial(7));

// Checking for prime number
function isNumberAPrime(number) {
  if (number <= 1) return false;
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(isNumberAPrime(7));

// fibonacci sequence
//  *** .slice is an in-built functions *** \\
function fibonacciSequence(number) {
  let fibonacci = [0, 1];
  for (let index = 2; index < number; index++) {
    fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
  }
  return fibonacci.slice(0, number);
}
console.log(fibonacciSequence(10));
