// https://leetcode.cn/problems/partition-equal-subset-sum/
// 416. 分割等和子集

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  // 1. 动态规划
  const sum = nums.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  if (sum % 2 === 1) return false;
  const n = nums.length;
  const mid = sum >> 1;
  const dp = Array.from({length: n}, () => new Array(mid + 1).fill(false));
  for (let i = 0; i < n; i++) {
    dp[i][0] = true;
  }
  dp[0][nums[0]] = true;
  for (let i = 1; i < n; i++) {
    const num = nums[i];
    for (let j = 1; j <= mid; j++) {
      if (num > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j - num] || dp[i - 1][j];
      }
    }
  }
  return dp[n - 1][mid];
};

console.log(canPartition([1,5,11,5]));
console.log(canPartition([1,2,3,5]));