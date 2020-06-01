const tail = require('../tail');
const assertEqual = require('../assertEqual');

//testing with assertEquals
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);