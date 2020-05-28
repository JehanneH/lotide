const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

//take in two objects and log message to console
//if match "assertion passed"
//if no match "assertion failed"

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // eqObjects function for object comparison
  if (eqObjects(actual, expected)) {
    console.log(`👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)} `);
  } else {
    console.log(`👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
//test code
assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1}); //pass
assertObjectsEqual({a: 2, b: 2}, {c: 3, d: 5}); //fail