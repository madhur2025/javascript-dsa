let s = "[()]"

var isValid = function (s) {
    let x = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            x.push(s[i])
        }
        else if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
            let top = x.pop()
            if (s[i] === ")" && top !== "(") return false
            else if (s[i] === "]" && top !== "[") return false
            else if (s[i] === "}" && top !== "{") return false
        }
    }
    return x.length === 0
};
console.log(isValid(s))