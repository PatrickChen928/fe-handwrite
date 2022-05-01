// https://leetcode-cn.com/problems/majority-element/
// 169. 多数元素

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  const n = nums.length;
  let ans = nums[0];
  let num = 0;

  for (let i = 0; i < n; i++) {
    if (num === 0) {
      ans = nums[i];
    }
    num += nums[i] === ans ? 1 : -1;
  }
  return ans;
};

console.log(majorityElement([3,2,3]))