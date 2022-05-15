// https://leetcode.cn/problems/house-robber/
// 198. 打家劫舍

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length;
  let prev = 0, curr = 0;
  for (let i = 0; i < n; i++) {
    const next = Math.max(nums[i] + prev, curr);
    prev = curr;
    curr = next;
  }
  return curr;
};

console.log(rob([2,7,9,3,1]));