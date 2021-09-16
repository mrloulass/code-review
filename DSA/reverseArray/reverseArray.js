'use strict'
// a function to reverse an array with an arr for argument
function reverseArray(arr) {

  // need a empty array to push the reverse elements in it
  let newArray = [];

  // iterate over the arr
  // start with the last element and push in to new Array
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]));
console.log(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12]));
console.log(reverseArray([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]));

module.exports = reverseArray
