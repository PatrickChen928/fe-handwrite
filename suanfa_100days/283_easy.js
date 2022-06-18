// https://leetcode.cn/problems/move-zeroes/
// 283. 移动零

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      nums.push(0);
      nums.splice(i, 1);
      i--;
      n--;
    }
  }
};

console.log(moveZeroes([0,1,0,3,12]))