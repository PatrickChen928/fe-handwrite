// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/
// 309. 最佳买卖股票时机含冷冻期

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const n = prices.length;
  if (n < 2) return 0;
  // f0: 持有 f1: 未持有且在冷冻期 f2: 未持有且不在冷冻期
  let f0 = -prices[0], f1 = 0, f2 = 0;
  for (let i = 1; i < n; i++) {
    const newf0 = Math.max(f0, f2 - prices[i]);
    const newf1 = f0 + prices[i];
    const newf2 = Math.max(f1, f2);
    f0 = newf0;
    f1 = newf1;
    f2 = newf2;
  }
  return Math.max(f1, f2);
};

console.log(maxProfit([1,2,3,0,2]))