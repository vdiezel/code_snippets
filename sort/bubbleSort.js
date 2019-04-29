function bubbleSort(arr){

    for (let j = arr.length - 1; j > 0; j--){
        for (let i = 0; i < j; i++){
            if (arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            }
        }
    }
    return arr;
}


function bubbleSort2(arr){

    for (let j = arr.length - 1; j > 0; j--){
        let swapped = false;
        for (let i = 0; i < j; i++){
            if (arr[i] > arr[i+1]){
                swapped = true;
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            }
        }
        if (!swapped) break;
    }
    return arr;
}


console.log(bubbleSort([8,3,4,7,1,2,3]));