function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!


    let start = 0, end = 0;
    let maxL = 0;
    let currL = 0;

    const currChars = new Map();

    while (end <  str.length){

        if (currChars.has(str[end])){
            start = currChars.get(str[end]) + 1;
            currL = end - start ;
            currChars.clear();
            for (let i = start; i < end; i++){
                currChars.set(str[i], i);
            }
        }
        else {
            currChars.set(str[end], end);
            currL++;
            end++;
        }
        maxL = Math.max(maxL, currL);
    }

    return maxL;
}
 const args = ["thisisawesome"];

const res = findLongestSubstring(args[0]);

console.log(res);

function findLongestSubstring(str) {

    // NICE!

    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}