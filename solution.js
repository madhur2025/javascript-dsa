// length of the last word of the string
function solution(str) {
    let revStr = str.trim().split('').reverse().join('')
    console.log(revStr)
    let lastLen = 0
    for (let i = 0; i < revStr.length; i++) {
        if (revStr[i] === " ") break
        lastLen++
    }
    return lastLen
}
console.log(solution("a"))

// function lengthOfLastWord(s){
//     let words = s.trim().split(" ")
//     return words[words.length -1].length
// }
// console.log(lengthOfLastWord("a"))