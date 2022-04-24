// https://leetcode-cn.com/problems/maximum-subarray/
// 53. 最大子数组和

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let n = nums.length;
  if (n === 1) {
    return nums[0]
  }
  let dp = [nums[0]];
  let ans = nums[0];
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    ans = Math.max(dp[i], ans)
  }
  return ans
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))