# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sjehanneh/lotide`

**Require it:**

`const _ = require('@sjehanneh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual = function(actual, expected)`: Asserts whether two arrays are equal
* `assertEqual = function(actual, expected)`: Asserts whether two values are equal
* `asserObjectsEqual = function(actual, expected)`: Asserts whether two objects are equal
* `countLetters = function(string)`: Takes in a sentence (string) and returns a count of each of the letters in that sentence
* `countOnly = function(allItems, itemsToCount)`: Takes in a collection of items and returns the counts for specific items
* `eqArrays = function(array1, array2)`: Compares two arrays for a perfect match
* `eqObjects = function(object1, object2)`: Returns true or false, based on if two obejcts are a perfect match
* `findKey = function(object, callback)`: Returns the first key in an object for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `findKeyByValue = function(object, value)`: searches for a key on an object where its value matches a given value
* `head = function(array)`: Returns the head (very first item) of an array
* `letterPositions = function(sentence)`: Returns all the indices (zero-based positions) in the string where each character is found
* `map = function(array, callback)`: Returns a new array based on the results of the callback function
* `middle = function(array)`: Returns the middle element(s) of an array
* `tail = function(array)`: Returns the tail (elements after the head) of an array
* `takeUntil = function(array, callback)`: Collects items from a provided array until the callback provided returns a truthy value
* `without = function(source, itemsToRemove)`: Takes in two arrays and returns a new array with only elements from first array that are not present in the second array.

