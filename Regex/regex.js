const re = /ab+c/;

const re2 = new RegExp("ab+c");

// test & exec Funktionen von RegExp

// test: returns true or false if something was found

const found = /This/.test("This is a test");
console.log(found);

// search: returns the index of the first character of
// the matched group

const index = "This is a test".search(/is/);
console.log(index);

// exec: returns an array of all matches

const matches = /is/g.exec("This is a test");
console.log(matches); // return only the first match

let match;
let res = [];
while ((match = /This/g.exec("This is a test")) != null){
    res.push(match);
}

console.log(res);







