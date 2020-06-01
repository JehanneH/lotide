const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let equal = eqArrays(actual, expected);
  if (equal) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;