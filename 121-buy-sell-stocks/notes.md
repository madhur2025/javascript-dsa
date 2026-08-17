# 121 Best time to buy and sell stock
given array of price of stock from day 1 , if we buy stocks the day at lowest price and then sell on maximum profit return the maximum profit we can get.

## Approach 1
- set highest price = 0
- iterate the price array 
- if current price is greater them previous go to next condition
- if previous price minus current is grater then highest profit update the highest profit

issue : due to 2 loops if the numbers of elements in array are very high it show time limit exceed.

## Approach 2
- set lowest price index zero
- highest profit is zero
- iterate the price array
- if current price is smaller then lowest price update lowest price
- calculate profit
- if profit is grater them highest profit update highest profit