function missingNumber(nums) {
    let s = nums.sort((a, b) => a - b)
    console.log(s)
    for (let i = 0; i < nums.length + 1; i++) {
        console.log(s[i], ":", i)
        if (s[i] !== i) return i
    }
}
console.log(missingNumber([3,0,1]))