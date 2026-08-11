function isPalindrome(str) {
    if (str.toString() === str.toString().split('').reverse().join('')) return true
    else return false
}
console.log(isPalindrome(123))

// return x.toString() === x.toString().split('').reverse().join(''); sirf ese likhne se bhi kaam ho jata 