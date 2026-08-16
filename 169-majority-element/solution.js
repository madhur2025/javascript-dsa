// // 169. Majority Element : return majority elements from an array
function majorityElement(nums) {
    let emp = {}
    for (let i = 0; i < nums.length; i++) {
        if (!emp[nums[i]]) {
            emp[nums[i]] = 1
        }
        else emp[nums[i]]++
    }
    let major = 0
    let result
    for (let key in emp) {
        if (emp[key] > major) {
            major = emp[key]
            result = key
        }
    }
    return Number(result)
}
console.log(majorityElement([3,2,3]))

