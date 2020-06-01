const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

//test code
assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
assertArraysEqual([1, 2, 4], [1, 4, 2]); // fail