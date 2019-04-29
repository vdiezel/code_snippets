const a = "iceman";
const b = "dinema";

function isAnagram(a, b){

    if (a.length !== b.length) return false;

    const f1 = {};
    const f2 = {};

    for (let i = 0; i < a.length; i++){
        f1[a[i]] = ++f1[a[i]] || 1;
    }

    for (let j = 0; j < b.length; j++){
        f2[b[j]] = ++f2[b[j]] || 1;
    }

    console.log(f1);
    console.log(f2);

    for (let key of Object.keys(f1)){
        if (!f2[key]) return false;

        if (f1[key] !== f2[key]){
            return false;
        }
    }
    return true;
}

//console.log(isAnagram(a, b));

// too easy...

function sameFrequency(n1, n2){
    // good luck. Add any arguments you deem necessary.

    const numString1 = n1.toString();
    const numString2 = n2.toString();

    if (numString1.length !== numString2.length) return false;

    const f1 = {}, f2 = {};

    console.log(numString1);

    for (let i = 0; i < numString1.length; i++){
        f1[numString1[i]] =  ++f1[numString1[i]] || 1;
        console.log("f1", f1);
        f2[numString2[i]] =  ++f2[numString2[i]] || 1;
    }

    console.log(f1);

    for (let key of Object.keys(f1)){
        if (!f2[key] || f1[key] !== f2[key]) return false;
    }

    return true;
}

//console.log(sameFrequency(182, 281));

function areThereDuplicates(arr) {
    // good luck. (supply any arguments you deem necessary.)

    // One liner return Set(arguments).length !== arguments.length;

    const f = {};

    for (let i = 0; i < arr.length; i++){
        if (f[arr[i]]) return true;
        f[arr[i]] = 1;
    }
    return false;
}



console.log(areThereDuplicates(["", 2, 2]))