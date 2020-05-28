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

//without will return a subset of a given array, removing unwanted elements
//should take in a source array and a itemsToRemove array
//should return a new array with only those elements from source 
  //that are not present in the itemsToRemove array

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let includes = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        includes = true;
      }
    }
    if (includes === false) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); //2, 3 