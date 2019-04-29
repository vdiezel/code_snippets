function radixSort(arr){

    const bucketsNumber = maxDigits(arr);

    for (let i = 0; i < bucketsNumber; i++){
        const container = Array.from({length: 10}, () => []);
        for (let k = 0; k < arr.length; k++){
            container[getDigit(arr[k], i)].push(arr[k]);
        }

        arr = [].concat(...container);
        // let newArray = [];
        // for (let bucket of container){
        //     newArray = [...newArray, ...bucket];
        // }
        // arr = newArray;
    }

    return arr;
}

function getDigit(num, pos){
    return Math.floor(
        Math.abs(num) / Math.pow(10, pos)) % 10;
}

function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
   // let i = 0;
   // while(n >= 1){
   //     n /= 10;
   //     i++;
   // }
   // return i;
}

function maxDigits(arr){
    return Math.max(...arr.map(el => digitCount(el)));
}

console.log(maxDigits([83, 12345, 1234]));

console.log(radixSort([8,3,4,7,1,2,3]));

console.log([1].concat([1]));