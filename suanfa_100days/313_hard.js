// https://leetcode.cn/problems/burst-balloons/
// 312. 戳气球

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  // 1. 回溯法
  // let ans = 0;
  // const dfs = (nums, coins) => {
  //   if (nums.length === 0) {
  //     ans = Math.max(ans, coins);
  //     return;
  //   }
  //   for (let i = 0; i < nums.length; i++) {
  //     const temp = nums[i];
  //     const count = (i === 0 ? 1 : nums[i - 1]) * temp * (i === nums.length -  1 ? 1 : nums[i + 1]);
  //     nums.splice(i, 1);
  //     dfs(nums, count + coins);
  //     nums.splice(i, 0, temp);
  //   }
  // }
  // dfs(nums, 0);
  // return ans;

  // 2. 动态规划
  nums.unshift(1);
  nums.push(1);
  const n = nums.length;
  const dp = Array.from({length: n}, () => new Array(n).fill(0));
  for (let len = 2; len < n; len++) {
    for (let start = 0; start < n - len; start++) {
      const end = start + len;
      let max = 0;
      for (let i = start + 1; i < end; i++) {
        let x1 = nums[start] * nums[i] * nums[end];
        let x2 = dp[start][i] + dp[i][end];
        max = Math.max(max, x1 + x2);
      }
      dp[start][end] = max;
    }
  }
  return dp[0][n - 1];
};

console.log(maxCoins([3, 1, 5, 8]));
console.log(maxCoins([1, 5]));
