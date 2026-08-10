// function findLar(a) {
//     let largest = a[0]
//     for (let i = 1; i < a.length - 1; i++) {
//         if (a[i - 1] < a[i]) {
//             largest = a[i]
//         }
//     }
//     return largest
// }

function findLar(a) {
    let largest = a[0]
    for (let i = 0; i < a.length; i++) {
        if (largest < a[i]) largest = a[i]
    }
    return largest
}
console.log("largest :", findLar([10, 5, 25, 8, 20]))

// function findSmall(a) {
//     let smallest = a[0]
//     for (let i = 1; i < a.length - 1; i++) {
//         if (a[i - 1] < a[i]) {
//             smallest = a[i - 1]
//         }
//     }
//     return smallest
// }

function findSmall(a) {
    let smallest = a[0]
    for (let i = 0; i < a.length; i++) {
        if (smallest > a[i]) smallest = a[i]
    }
    return smallest
}
console.log("smallest :", findSmall([10, 5, 25, 8, 20]))

function countEvenOdd(a) {
    let result = {
        even: 0,
        odd: 0
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            // result.even += 1
            result.even++
        }
        else {
            // result.odd += 1
            result.odd++
        }
    }
    return result
}
console.log(countEvenOdd([1, 2, 3, 4, 8, 12, 5, 6]))


function revArray(a) {
    let blankArray = []
    for (let i = a.length; i > 0; i--) {
        blankArray.push(a[i - 1])
    }
    return blankArray
}
console.log(revArray([1, 2, 3, 4, 5]))

let a = [1, 2, 3, 4, 5]
// let reSquare = a.map((item, index) => {
//     return item * item
// })
let reSquare = a.map(item => item * item)
console.log(reSquare)

// 6. filter array
// let resEven = a.filter((item, index) => {
//     if (item % 2 === 0) return true
// })
let resEven = a.filter(item => item % 2 === 0)
console.log(resEven)

// 7. find greatest number in the array
let b = [10, 25, 40, 65, 80]
// let resGreater = b.find((item, index) => {
//     if (item > 50) return true
// })
let resGreater = b.find(item => item > 50)
console.log(resGreater)

// 8. capital all string using map
let c = ["madhur", "rahul", "aman"]
// let resLowToUp = c.map((item, index) => {
//     return item.toUpperCase()
// })
let resLowToUp = c.map(item => item.toUpperCase())
console.log(resLowToUp)


// 9. filter user based on condition
const users = [
    { name: "A", age: 15 },
    { name: "B", age: 22 },
    { name: "C", age: 17 },
    { name: "D", age: 25 }
]

// let resOlder = users.filter((item, index) => {
//     if (item.age > 18) return item
// })
let resOlder = users.filter(user => user.age > 18)
console.log(resOlder)



// find : return only first element who satisfy the condition
// filter : return a array of element who satisfyt the condition

// 10. sum of the array
let d = [10, 20, 30, 40]
// let resSum = d.reduce((acc,curr)=>{
//     return acc = acc + curr
// })
let resSum = d.reduce((acc, curr) => acc += curr)
console.log(resSum)

// 11. sum of the price
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
]
let resPrice = products.reduce((acc, curr) => {
    return acc = acc + curr.price
}, 0)
console.log(resPrice)

// 12. find the occurance of every element
let e = [1, 2, 2, 3, 1, 2, 4, 3]
let resOccur = e.reduce((acc, curr) => {
    if (acc[curr]) {
        acc[curr]++
    } else {
        acc[curr] = 1
    }
    return acc
}, {})
console.log(resOccur)

// remove multiple occurance of element
let f = [1, 2, 2, 3, 4, 4, 5, 5]
let resRemDub = f.filter((item, index) => {
    if (f.indexOf(item) === index) return item
})
console.log(resRemDub)

// second largest
function secLar(a) {
    let flarge = a[0]
    let slarge = a[0]
    for (let i = 0; i < a.length; i++) {
        if (flarge < a[i]) {
            slarge = flarge
            flarge = a[i]
        }
        else if (slarge < a[i]) {

            slarge = a[i]
        }
    }
    return slarge
}
console.log(secLar([10, 5, 25, 8, 20]))


const usersa = [
    { name: "A", age: 20 },
    { name: "B", age: 21 },
    { name: "C", age: 20 },
    { name: "D", age: 22 },
    { name: "E", age: 21 }
]
let resGrp = usersa.reduce((acc, curr) => {
    if (!acc[curr.age]) {
        acc[curr.age] = []
    }
    acc[curr.age].push(curr.name)
    return acc
}, {})
console.log(resGrp)