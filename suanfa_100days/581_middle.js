// https://leetcode.cn/problems/shortest-unsorted-continuous-subarray/
// 581. 最短无序连续子数组

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  const n = nums.length;
  let left = -1, right = -1, max = -Infinity, min = Infinity;
  for (let i = 0; i < n; i++) {
    if (max > nums[i]) {
      right = i;
    } else {
      max = nums[i];
    }
    if (min < nums[n - i - 1]) {
      left = n - i - 1;
    } else {
      min = nums[n - i - 1];
    }
  }
  return right === -1 ? 0 : right - left + 1;
};

// console.log(findUnsortedSubarray([2,16,4,8,10,9,15]));
// console.log(findUnsortedSubarray([2,1]));
// console.log(findUnsortedSubarray([1,2,3,4,5]));
// console.log(findUnsortedSubarray([1,3,2,4,5]));
console.log(findUnsortedSubarray([2,3,3,2,4]))