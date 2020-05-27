const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let newStr = string.split(" ").join(""); //new string that doesn't have whitespace
  let result = {};
  for (let letter of newStr) {
    //console.log(letter);

    //if letter repeats add 1 value
      if (result[letter]) {
        result[letter] += 1;
        //if letter only shows up once, the value should be 1
      } else {
        result[letter] = 1;
      }
    }
    console.log(result)
  return result;
}

countLetters("lighthouse in the house");