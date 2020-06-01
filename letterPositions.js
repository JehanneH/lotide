const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  let equal = eqArrays(actual, expected);
  if (equal) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") { //if the sentence index is not a space, move to next if

      if (results[sentence[i]]) { //if letter is there, push that letter's index to the array
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i]; //assigning the index to an array
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").l, [2, 3]);

module.exports = letterPositions;