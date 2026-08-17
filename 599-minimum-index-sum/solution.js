// find string which is common in both lists then , sum of both string's index return the lowest sum.


// list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]


// list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// list2 = ["KFC", "Shogun", "Burger King"]

// list1 = ["happy", "sad", "good"]
// list2 = ["sad", "happy", "good"]

// list1 = ["Shogun", "Piatti", "Tapioca Express", "Burger King", "KFC"]
// list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]

list1 = ["Shogun", "Piatti", "Tapioca Express", "Burger King", "KFC"]
list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]

// list1 = ["k","KFC"]
// list2 = ["k","KFC"]

function findRestaurant(list1, list2) {
    let minIndex
    let out = []
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                if (!minIndex && minIndex !== 0) {
                    console.log("!minIndex wala if chal gya or i :", i, "j :", j)
                    minIndex = i + j
                    out.unshift(list1[i])
                }
                if (i + j <= minIndex) {
                    console.log("third if chala i :", i, "j :", j)
                    if (minIndex == i + j && !out.includes(list1[i])) {
                        minIndex = i + j
                        out.unshift(list1[i])
                    }
                    else {
                        minIndex = i + j
                        out.shift()
                        out.unshift(list1[i])
                    }
                }
            }
        }
    }
    return out
};
console.log(findRestaurant(list1, list2))