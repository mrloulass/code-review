'use strict'

const romanToInteger = require('../DSA/romanToInteger/romanToInteger.js')

test('Roman number to covert to an Integer value', () =>{
  expect(romanToInteger('III')).toBe(3);
  expect(romanToInteger('X')).toBe(10);
});
