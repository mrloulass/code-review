'use strict'

jest.mock('../DSA/reverseArray/reverseArray.js');
const reverseArray = require('../DSA/reverseArray/reverseArray.js');

test('Reverse elements in an array', () =>{
  reverseArray.mockImplementation(()=> [19,15,9,8]);
  reverseArray();
});
