function isPalindrome(str) {
    let newStr = str.split(/[,:!;./@#_ \\ {}'" \[\] \- ? () ` ]/).join('').toLowerCase()
    return newStr === newStr.split('').reverse().join('') ? true : false
}
console.log(isPalindrome("Marge, let's \"[went].\" I await {news} telegram."))