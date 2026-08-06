var isPalindrome = function (x) {
    if (x.toString() == x.toString().split('').reverse().join('')) {
        return true
    } else {
        return false
    }
};
isPalindrome(121)

// return x.toString() === x.toString().split('').reverse().join(''); sirf ese likhne se bhi kaam ho jata 