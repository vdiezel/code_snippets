function quickSort(arr, left = 0, right = arr.length -1){

    if (left < right)
    {
        const splitIndex = pivot(arr, left, right);
    //left
        quickSort(arr, left, splitIndex - 1);
        quickSort(arr, splitIndex + 1, right);
    }
    return arr;
}

// function pivot(arr){
//
//     let pIndex = 0;
//     const pValue = arr[0];
//
//     for (let i = 1; i < arr.length; i++){
//         if (pValue > arr[i]){
//             pIndex++;
//             [arr[pIndex], arr[i]] = [arr[i], arr[pIndex]];
//         }
//     }
//
//     [arr[0], arr[pIndex]] = [arr[pIndex], arr[0]];
//
//     return pIndex;
// }

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
}


console.log(pivot([5, 2, 1, 8, 7, 6, 4, 3]));

console.log(quickSort([8,3,4,7,1,2,3]));