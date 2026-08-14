// function plusOne(x) {
//     return (Number(x.join('')) + 1).toString().split('').map(Number)
// }

function plusOne(digit) {
    for (let i = digit.length - 1; i >= 0; i--) {
        if (digit[i] < 9) {
            digit[i]++
            return digit
        }
        digit[i] = 0
    }
    return [1, ...digit]
}
console.log(plusOne([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]))