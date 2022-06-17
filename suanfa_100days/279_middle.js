// https://leetcode.cn/problems/perfect-squares/
// 279. 完全平方数

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let min = i;
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, dp[i - j * j]);
    }
    dp[i] = min + 1;
  }
  return dp[n];
};

console.log(numSquares(12));
console.log(numSquares(13));