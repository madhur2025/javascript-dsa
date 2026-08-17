function missingNumber(nums) {
    let sortedArray = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length + 1; i++) {
        if (sortedArray[i] !== i) return i
    }
}
console.log(missingNumber([3, 0, 1]))