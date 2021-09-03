'use strict';

//Need a variable for an object to place roman numeral strings with their values
const romanObject = {
  'M': 1000,
  'D': 500,
  'C': 100,
  'L': 50,
  'X': 10,
  'V': 5,
  'I': 1
}

// Convert individual Roman numeral strings to an integer value
const romanToInteger = function (str) {
  // need a counter to total values
  let total = 0;
  // iterate over the object
  for (let i = 0; i < str.length; i++) {
    const currentValue = romanObject[str[i]];
    const nextValue = romanObject[str[i + 1]];
    // compare if current value is less than next value
    if (currentValue < nextValue) {
      // subtract current value from next value then add to total, move 2 characters to the right
      total += nextValue - currentValue;
      i++;
      // else add to total
    } else {
      total += currentValue;
    }
  }

  return total;
};

// Print roman numeral strings
console.log(romanToInteger('I'));
console.log(romanToInteger('V'));
console.log(romanToInteger('X'));
console.log(romanToInteger('III'));
console.log(romanToInteger('IV'));
console.log(romanToInteger('IX'));
console.log(romanToInteger('MMXX'));
console.log(romanToInteger('MMXXI'));
console.log(romanToInteger('MCMXCIV'));

module.exports = romanToInteger;
