// fib

// recursive

function fib1(n){
    if (n === 1 || n === 2) return 1;
    else return fib1(n-1)+fib1(n-2);
}

console.log(fib1(7));

// rekursiv + memo

function fib2(n, memo){

    if (!memo){
         memo = {};
    }

    if (n === 1 || n === 2) return 1;
    else if (memo[n]) return memo[n];
    else{
        const value = fib2(n-1, memo) + fib2(n-2, memo);
        memo[n] = value;
        return value;
    }
}

console.log(fib2(7));

// iterative

function fib3(n){

    if (n === 1 || n === 2) return 1;

    let a = b = 1;

    for (let i = 0; i < (n - 2); i++){
        [a, b] = [b, a + b];
    }
    return b;
}

console.log(fib3(7));

// TEST

const n = 45;

// iterative + memo

console.time("Rekursiv + Memo");
fib2(n);
console.timeEnd("Rekursiv + Memo");

console.time("Iterative");
fib3(n);
console.timeEnd("Iterative");

console.time("Rekursiv");
fib1(n);
console.timeEnd("Rekursiv");