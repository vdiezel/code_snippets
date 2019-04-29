function findLongestSubarrayBySum(s, arr) {
    var current = []
    var left = 1;
    var sum = 0
    var longestVal = 0
    var longestArr

    arr.forEach((val, right) => {
        current.push(val)
        sum += val

        while (sum > s) {
            sum -= current.shift()
            left += 1
        }

        if (sum === s && current.length > longestVal) {
            longestVal = current.length
            longestArr = [left, right + 1]
        }
    })

    return longestArr || [-1]
}