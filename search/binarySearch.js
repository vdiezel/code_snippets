function binarySearch(arr, value){
    // add whatever parameters you deem necessary - good luck!


    let l = 0;
    let r = arr.length -1;
    let mid = Math.floor((l + r)/2);

    while (l <= r){
        if (arr[mid] === value) return mid;
        else {
            if (arr[mid] > value){
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
            mid = Math.floor((l + r)/2);

        }
    }
    return -1;
}

const res = binarySearch([1,2,3,4,5], 5);

console.log(res);