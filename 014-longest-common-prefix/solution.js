function longestCommonPrefix(strs) {
    let min = strs[0].length
    for (let i = 1; i < strs.length; i++) {
        min = Math.min(min, strs[i].length)
    }
    let common = ""

    for (let i = 0; i < min; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return common
            }
        }
        common = common + strs[0][i]
    }
    return common
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))