// https://leetcode.cn/problems/house-robber-ii/
// 213. 打家劫舍 II

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);
  return Math.max(dp(nums, 0, n - 1), dp(nums, 1, n));
};

function dp(nums, start, end) {
  const n = nums.length;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);
  let prev = 0, curr = 0;
  for (let i = start; i < end; i++) {
    const next = Math.max(nums[i] + prev, curr);
    prev = curr;
    curr = next;
  }
  return curr;
}

console.log(rob([1,2,1,1]));