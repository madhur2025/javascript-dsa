function solution(str) {
    return str.trim().split(' ').at(-1).length
}
console.log(solution("hello world "))

// function solution(str) {
//     let revStr = str.trim().split('').reverse().join('')
//     console.log(revStr)
//     let lastLen = 0
//     for (let i = 0; i < revStr.length; i++) {
//         if (revStr[i] === " ") break
//         lastLen++
//     }
//     return lastLen
// }
// console.log(solution("rahuy aa"))