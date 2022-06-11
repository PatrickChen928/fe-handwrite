// https://leetcode.cn/problems/maximal-square/
// 221. 最大正方形

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  // 动态规划
  const m = matrix.length;
  const n = matrix[0].length;
  let ans = 0;
  const dp = Array.from({length: m}, () => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == '1') {
        dp[i][j] = Math.min(i > 0 ? dp[i -1][j] : 0, i > 0 && j > 0 ? dp[i - 1][j - 1] : 0, j > 0 ? dp[i][j - 1] : 0) + 1;
        ans = Math.max(ans, dp[i][j]);
      }
    }
  }
  return ans * ans;
};

console.log(maximalSquare([
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]))

console.log(maximalSquare([["0","1"],["1","0"]]))
console.log(maximalSquare([["1"]]))
console.log(maximalSquare([["0", "1"]]))
console.log(maximalSquare([
  ["1","1","1","1","0"],
  ["1","1","1","1","0"],
  ["1","1","1","1","1"],
  ["1","1","1","1","1"],
  ["0","0","1","1","1"]]))