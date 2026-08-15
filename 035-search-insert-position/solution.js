// function searchInsert(nums, target) {
//     if (nums.indexOf(target) !== -1) {
//         return nums.indexOf(target)
//     }
//     else {
//         for (let i = 0; i < nums.length; i++) {
//             if (target > nums[i] && target < nums[i + 1]) return i + 1
//         }
//         for (let i = 0; i < nums.length; i++) {
//             if (target > nums[i]) return nums.length
//         }
//         for (let i = 0; i < nums.length; i++) {
//             if (target < nums[i]) return 0
//         }
//     }
// }


function searchInsert(nums, target) {
    let index = nums.indexOf(target)
    if (index !== -1) return index
    if (target < nums[0]) return 0
    if (target > nums[nums.length - 1]) return nums.length
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target && target < nums[i + 1]) return i + 1
    }
}


console.log(searchInsert([1, 3, 5, 6], 2))