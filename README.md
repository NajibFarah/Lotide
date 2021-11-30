# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @NajibFarah/lotide`

**Require it:**

`const _ = require('@NajibFarah/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

`assertArraysEqual:` function that asserts if two arrays are equals
`assertEqual:` function that asserts when two values are equals
`assertObjectsEqual:` function that asserts when two objects are equals
`countLetters:` function that returns counts of every letter in a string
`countOnly:` function that takes items and returns counts for a specific items
`eqArrays:` compares two arrays
`eqObjects:` compares two objects
`findKeyByValue:` searches for a key in an object where its value matches a given value
`findKey:` scans objects to return the first key
`head:` function that finds the first element from an array
`index:` list of all the functions in lotide
`letterPositions:` function that returns the positions of all letters selected
`map:` function that creates a new array with the results of calling a provided function on every element in the calling array
`middle:` function that returns the middle element of an array
`tail:` function that retrieves every element except the head (first element) of the array
`takeUntil:` function that returns a slice of the array with elements taken from the beginning
`without:` function that removes elements from an array
