function reverseVowels(ss) {
    let s = ss.split('')
    for (let i = 0; i <= s.length / 2; i++) {
        for (let j = s.length - 1; j >= s.length / 2; j--) {
            {
                if (
                    (s[i] === "a" || s[i] === "A" || s[i] === "e" || s[i] === "E" || s[i] === "i" || s[i] === "I" || s[i] === "o" || s[i] === "O" || s[i] === "u" || s[i] === "U")
                    &&
                    (s[j] === "a" || s[j] === "A" || s[j] === "e" || s[j] === "E" || s[j] === "i" || s[j] === "I" || s[j] === "o" || s[j] === "O" || s[j] === "u" || s[j] === "U")
                ) {
                    console.log("i", s[i], "j", s[j])
                    let temp = s[i]
                    s[i] = s[j]
                    s[j] = temp
                    break
                }
                
            }
        }
    }
    return s.join('')
}
console.log(reverseVowels("IceCreAm"))

c=xfgxxxf