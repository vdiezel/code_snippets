const ARRAY_SIZE = 10000000;
const CYCLES = 10000;

const arr1 = Array.from({length: ARRAY_SIZE}, (_, i) => i);
const arr2 = Array.from(arr1);

console.time("unshift");
for (let cycle in CYCLES){
    arr1.unshift(cycle);
}
console.timeEnd("unshift"); // for ARRAY_SIZE 10000000 0.5ms =>
// O(n)

console.time("reverse");
for (let cycle in CYCLES){
    arr2.reverse().push(cycle).reverse();
}
console.timeEnd("reverse"); //  for ARRAY_SIZE 10000000 0.008 => O(1)