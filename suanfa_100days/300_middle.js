// https://leetcode.cn/problems/longest-increasing-subsequence/
// 300. 最长递增子序列

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // 1. 动态规划
  // const n = nums.length;
  // if (n < 2) return n;
  // const dp = [];
  // dp[0] = 1;
  // let max = 1;
  // for (let i = 1; i < n; i++) {
  //   dp[i] = 1;
  //   for (let j = 0; j < i; j++) {
  //     if (nums[i] > nums[j]) {
  //       dp[i] = Math.max(dp[i], dp[j] + 1);
  //     }
  //   }
  //   max = Math.max(max, dp[i]);
  // }
  // return max;

  // 2. 贪心 + 二分
  const n = nums.length;
  if (n < 2) return n;
  const arr = [];
  let len = 1;
  arr[len] = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] > arr[len]) {
      arr[++len] = nums[i];
    } else {
      let l = 1, r = len, pos = 0;
      while(l <= r) {
        const mid = (l + r) >> 1;
        if (nums[i] > arr[mid]) {
          pos = mid;
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
      arr[pos + 1] = nums[i];
      console.log(arr);
    }
  }
  return len;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,4]));