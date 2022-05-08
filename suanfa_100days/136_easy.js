// https://leetcode-cn.com/problems/single-number/
// 136. 只出现一次的数字

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i];
  }
  return ans;
};

console.log(singleNumber([2,2,1]));