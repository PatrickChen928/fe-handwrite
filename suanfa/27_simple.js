// https://leetcode-cn.com/problems/remove-element
// 27. 移除元素

/**
 * 1. 双指针
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  let n = nums.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
      if (nums[i] !== val) {
          nums[res] = nums[i];
          res++;
      };
  }
  return res;
};

/**
 * 2. 双指针优化
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement_2 = function(nums, val) {
  let left = 0, right = nums.length;
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1];
      right--;
    } else {
      left++;
    }
  }
  return left;
};