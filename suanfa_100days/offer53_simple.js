// https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
// 剑指 Offer 53 - II. 0～n-1中缺失的数字

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
  let left = 0, right = nums.length;
  while(left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] > mid) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

console.log(missingNumber([0, 2]));