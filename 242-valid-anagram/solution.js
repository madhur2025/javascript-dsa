s = "anagram"
t = "nagaram"

function isAnagram(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('') ? true : false
}
console.log(isAnagram(s, t))