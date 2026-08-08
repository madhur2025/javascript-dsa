// one given array of integers return an array with indices of two numbers of array which sum are equal to the target value.

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] + nums[j] == target) {
                let output = [j, i]
                return output;
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))

// isme brute force approch : kisi problem ko solve krne ka sbase seedh or simple trika, bina optimization ki chinta k. mtlb pahle logic sahi hona chaiye, baad me fast banana hai.