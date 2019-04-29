function selectionSort(arr){

    for (let i = 0; i < arr.length; i++){
        let minIndex = i;
        for (let j  = i; j < arr.length; j++){
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        if (minIndex !== i){
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
        }
    }

    return arr;

}

console.log(selectionSort([8,3,4,7,1,2,3]));