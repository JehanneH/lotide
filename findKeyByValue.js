const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//should scan the object and return the first key which contains the given value. 
//If no key with that given value is found, then it should return undefined

const findKeyByValue = function(object, value) {
  let keys = Object.keys(object); //object.key will help search through all keys in object
  for (let key of keys) {
    //console.log(keys);
    console.log(object[key]); 
    if (object[key] === value) {
      return key;
    }
  }
};
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);