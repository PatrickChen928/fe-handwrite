// https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
// 剑指 Offer 42. 连续子数组的最大和

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  const n = nums.length;
  if (n === 1) {
    return nums[0];
  }
  // 1. 前缀和
  // let max = -Infinity;
  // let min = 0;
  // let num = 0;
  // for (let i = 0; i < n; i++) {
  //   num += nums[i];
  //   max = Math.max(max, num - min);
  //   if (num < min) {
  //     min = num;
  //   }
  // }
  // return max;
  // 2. 动态规划
  let dp = [nums[0]];
  let ans = nums[0];
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    ans = Math.max(ans, dp[i]);
  }
  return ans;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))