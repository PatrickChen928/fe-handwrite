// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
// 122. 买卖股票的最佳时机 II

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 1. 贪心
  // let ans = 0;
  // let n = prices.length;
  // for (let i = 1; i < n; ++i) {
  //     ans += Math.max(0, prices[i] - prices[i - 1]);
  // }
  // return ans;
  // 2. 动态规划
  let dp0 = 0, dp1 = -prices[0];
  for (let i = 1; i < n; ++i) {
    let newDp0 = Math.max(dp0, prices[i] + dp1);
    let newDp1 = Math.max(dp1, dp0 - prices[i]);
    dp0 = newDp0;
    dp1 = newDp1;
  }
  return dp0;
};

console.log(maxProfit([1, 2]))