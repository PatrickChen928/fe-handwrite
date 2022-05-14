// https://leetcode.cn/problems/minimum-path-sum/
// 64. 最小路径和

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // 1. 暴力法
  // const m = grid.length;
  // const n = grid[0].length;
  // let stack = [[0, 0, grid[0][0]]];
  // let min = Infinity;
  // while(stack.length) {
  //   const len = stack.length;
  //   for (let i = 0; i < len; i++) {
  //     const [x, y, curr] = stack.shift();
  //     if (x < m - 1) {
  //       stack.push([x + 1, y, curr + grid[x + 1][y]]);
  //     }
  //     if (y < n - 1) {
  //       stack.push([x, y + 1, curr + grid[x][y + 1]]);
  //     }
  //     if (x === m - 1 && y === n - 1) {
  //       min = Math.min(curr, min);
  //     }
  //   }
  // }
  // return min;

  // 2. 动态规划
  const m = grid.length;
  const n = grid[0].length;
  let dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n);
  }
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[m - 1][n - 1];
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));