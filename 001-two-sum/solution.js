function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}
console.log(twoSum([3,2,4], 6))

// isme brute force approch : kisi problem ko solve krne ka sbase seedh or simple trika, bina optimization ki chinta k. mtlb pahle logic sahi hona chaiye, baad me fast banana hai.