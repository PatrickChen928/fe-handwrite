// https://leetcode.cn/problems/jump-game/
// 55. 跳跃游戏

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // 1. 暴力法
  // const n = nums.length;
  // if (n === 1) return true;
  // for (let i = 0; i < n - 1; i++) {
  //   if (nums[i] === 0) {
  //     let flag = false;
  //     for (let j = 0; j < i; j++) {
  //       if (nums[j] > i - j) {
  //         flag = true;
  //       }
  //     }
  //     if (!flag) {
  //       return false;
  //     }
  //   }
  // }
  // return true;

  // 2. 贪心
  const n = nums.length;
  if (n === 1) return true;
  let max = 0;
  for (let i = 0; i < n; i++) {
    if (i <= max) {
      max = Math.max(max, i + nums[i]);
      if (max >= n - 1) {
        return true;
      }
    } else {
      return false;
    }
  }
  return false;
};

console.log(canJump([3,0,0,0]));