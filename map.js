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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
//test code
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, word => word[1]), ["r", "o", "o", "a", "o"]);
assertArraysEqual(map(words, word => word[3]), ["u", "t", undefined, "o", undefined]);