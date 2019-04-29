// 0 - 1 - Dynamic Programming
// Capacity C
// w weights, v values

// Create a table of size with rows for every item
// and columns as the capacity ( 0 - 7)
const w = [1,3,4,5];
const v = [1,4,5,7];
const C = 7;

const table = Array.from({length: v.length}, (_, j) => {
   return Array.from({length: C + 1}, (_, i) => 0)
});

console.log(table);

for (let i = 0; i < v.length; i++){
    for (let j = 1; j <= C; j++){
        if (i === 0){
            if (j >= w[0]) table[i][j] = v[0];
        }
        else {
            if (j >= w[i]){
                table[i][j] = Math.max(v[i]+table[i-1][j-w[i]], table[i-1][j])
            }
            else {
                table[i][j] = table[i-1][j];
            }
        }
    }
}

console.log(table);