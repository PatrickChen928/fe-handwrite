// https://leetcode.cn/problems/edit-distance/
// 72. 编辑距离

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  // const n1 = word1.length;
  // const n2 = word2.length;
  // // 1. 去掉
  // // 2. 修改
  // // 3. 添加
  // if (n1 * n2 === 0) {
  //   return n1 + n2;
  // }
  // const dp = Array.from({length: n1 + 1}, () => new Array(n2 + 1));
  // for (let i = 0; i < n1 + 1; i++) {
  //   dp[i][0] = i;
  // }
  // for (let i = 0; i < n2 + 1; i++) {
  //   dp[0][i] = i;
  // }
  // for (let i = 1; i < n1 + 1; i++) {
  //   for (let j = 1; j < n2 + 1; j++) {
  //     const left = dp[i - 1][j] + 1;
  //     const down = dp[i][j - 1] + 1;
  //     let left_down = dp[i - 1][j - 1];
  //     if (word1[i - 1] !== word2[j - 1]) {
  //       left_down++;
  //     }
  //     dp[i][j] = Math.min(left, down, left_down);
  //   }
  // }
  // return dp[n1][n2];
  const m = word1.length;
  const n = word2.length;
  const dp = new Array(n + 1);
  for(let i = 0; i <= n; i++) {
    dp[i] = i;
  }
  let left_down;
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const curr = dp[j];
      if (j === 0) {
        dp[j] = i;
      } else {
        if (word1[i - 1] === word1[j - 1]) {
          dp[j] = left_down;
        } else {
          dp[j] = Math.min(dp[j], left_down, dp[j - 1]) + 1;
        }
      }
      left_down = curr;
    }
  }
  return dp[n];
};

console.log(minDistance("horse", "ros"));