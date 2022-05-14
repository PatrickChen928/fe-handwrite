// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
// 121. 买卖股票的最佳时机

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const n = prices.length;
  let min = Infinity, max = 0;
  for (let i = 0; i < n; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }
  return max;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([1,2,4]));