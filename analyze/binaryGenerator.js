// Let's say that binary sequence s generates binary sequence t if:
//
// s and t are of the same length;
// for each i such that s[i] = 1 it is true that t[i] = 1.
// Given a sequence s, return an array of all the sequences it generates, sorted lexicographically.
//example
//For s = "01101", the output should be
// binaryGenerator(s) = ["01101", "01111", "11101", "11111"].
//https://app.codesignal.com/challenge/DjezAmeYwSvG4eQid?solutionId=hEeuj8BCjkD34L3By

// f = binaryGenerator = ([x, ...s]) => o = x
//     ? [...f(s).map(y => x + y), ...+x ? [] : o.map(y => 1 + y)]
//     : [s];

f = binaryGenerator = ([x, ...s])  => [x, s];

console.log(binaryGenerator("01101"));

console.log(...111);