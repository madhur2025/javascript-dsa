// function singleNumber(nums) {
//     let notFound = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 notFound.push(nums[i])
//             }
//         }
//     }
//     for(let i = 0; i< nums.length;i++){
//         if(!notFound.includes(nums[i])) return nums[i]
//     }
   
// }

function singleNumber(nums){
    let result = 0
    for(let num of nums){
        result = result ^ num
    }
    return result
}
console.log(singleNumber([3, 4, 2, 3, 2, 1]))