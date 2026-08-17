// given array of price starts from day 1 need to buy stock and sell any next day but with maximize prorfit. rerturn the maximum profit we can get


function maxProfit(prices) {
    let highestProfit = 0
    for (let i = 0; i < prices.length; i++) {
        for (let j = 1; j < prices.length; j++) {
            if (i < j) {
                if (prices[j] - prices[i] > highestProfit) {
                    highestProfit = prices[j] - prices[i]
                    console.log("price j :", prices[j], "price i :", prices[i], "profit :", highestProfit)
                }
            }
        }
    }
    return highestProfit
}

function maxProfit(prices) {
    let lowestPrice = prices[0]
    let highestProfit = 0
    for (let i = 1; i < prices.length; i++) {
        if(prices[i] < lowestPrice) lowestPrice = prices[i]
        let profit = prices[i] - lowestPrice
        if(highestProfit < profit) highestProfit = profit
    }
    return highestProfit
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))