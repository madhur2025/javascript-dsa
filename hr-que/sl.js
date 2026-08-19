// ek string aayegi a,b,c mixed characters ki rule ye hai ki 2 different characters ko teesre characters se replace krna hai fir wapas check krna hai.

function stringReduction(str) {
    let a = 0;
    let b = 0;
    let c = 0;

    for (let ch of str) {
        if (ch === "a") a++
        if (ch === "b") b++
        if (ch === "c") c++
    }

    if (a === str.length || b === str.length || c === str.length) return str.length
    let odd = 0;

    if (a % 2 !== 0) odd++
    if (b % 2 !== 0) odd++
    if (c % 2 !== 0) odd++

    return odd === 0 || odd === 3 ? 2 : 1
}
console.log(stringReduction("aabc"))