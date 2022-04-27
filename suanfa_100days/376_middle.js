// https://leetcode-cn.com/problems/wiggle-subsequence/
// 376. 摆动序列

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  const n = nums.length;
  if (n < 2) {
      return n;
  }
  // 1. 贪心
  // let prevdiff = nums[1] - nums[0];
  // let ret = prevdiff !== 0 ? 2 : 1;
  // for (let i = 2; i < n; i++) {
  //     const diff = nums[i] - nums[i - 1];
  //     if ((diff > 0 && prevdiff <= 0) || (diff < 0 && prevdiff >= 0)) {
  //         ret++;
  //         prevdiff = diff;
  //     }
  // }
  // return ret;

  // 2. 动态规划
  let up = down = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] - nums[i - 1] > 0) {
      up = down + 1;
    } else if (nums[i] - nums[i - 1] < 0) {
      down = up + 1;
    }
  }
  return Math.max(up, down);
};

console.log(wiggleMaxLength([1,3,4,9,2,5]));
console.log(wiggleMaxLength([1,17,5,10,13,15,10,5,16,8]));
console.log(wiggleMaxLength([1,2,3,4,5,6,7,8,9]));