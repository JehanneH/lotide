//function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🛑🛑🛑" + "Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("✅✅✅" + "Assertion Failed: " + actual + " !== " + expected);
  }
};
//test code
assertEqual("Jehanne", "Jehanne");
assertEqual(1, 6);