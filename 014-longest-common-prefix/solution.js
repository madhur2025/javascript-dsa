let strs = ["flower", "flow", "flight"]

let min = strs[0].length

for (let i = 1; i < strs.length; i++) {
    min = Math.min(min, strs[i].length)
}
console.log("min",min)

var longestCommonPrefix = function (strs) {
    let [a, b, c] = strs
    let comon = ""
    for (let i = 0; i < min; i++) {
        if (a[i] === b[i] && b[i] === c[i]) {
            comon = comon + a[i]
        }
        else {
            break
        }
    }
    return comon
};

console.log(longestCommonPrefix(strs))