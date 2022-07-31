/* 

121. Best Time to Buy and Sell Stock

ou are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

*/

//My Solution

/*
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let sellStock = prices.length - 1;
    let profit = 0;
    
    for (let buyStock = prices.length - 1; buyStock >= 0; buyStock--) {
        let buyAtValue = prices[buyStock];
        let sellAtValue = prices[sellStock];
        
        if (buyAtValue - sellAtValue >= 0) {
            sellStock = buyStock;
            
        } else {
            let price = sellAtValue - buyAtValue;
            profit = Math.max (profit, price);
        }
    }
    return profit;
};

/*
Success
Details 
Runtime: 140 ms, faster than 33.56% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 52.2 MB, less than 11.21% of JavaScript online submissions for Best Time to Buy and Sell Stock.
*/