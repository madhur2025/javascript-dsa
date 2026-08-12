// 1 reverse without reverse() fun
function revStr(str) {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i]
    }
    return newStr
}
console.log(revStr("rahul"))

// 2 count vovels
function countVowel(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") count++
    }
    return count
}
console.log(countVowel("javascript"))

// 3 count character in a strings
function countChar(str) {
    let count = 0
    while (str[count] !== undefined) {
        count++
    }
    return count
}
console.log(countChar("madhur"))

// 4 uppercase first later
function frstUp(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            let cap = str.charAt(0).toUpperCase()
            newStr = newStr + cap
        }
        else {
            newStr = newStr + str[i]
        }
    }
    return newStr
}
console.log(frstUp("madhur"))

// 5 check palindrom without reverse() function
function isPalindrome(str) {
    let revStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        revStr = revStr + str[i]
    }
    for(let i = 0; i<str.length;i++){
        if(str[i] !== revStr[i]) return "Not palindrome"
    }
    return "Palindrome"
    
}
console.log(isPalindrome("abcba"))

