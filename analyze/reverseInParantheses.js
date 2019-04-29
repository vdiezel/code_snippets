const s = "foo(bar)baz";

console.log(s.substr(0,3));
console.log(s.substr(4,7 - (3 + 1)));
console.log(s.substr(7+1));

inputString = inputString.substr(0, start)
    + inputString.substr(start+1, end - (start+1)).split("").reverse().join("")
    + inputString.substr(end+1);