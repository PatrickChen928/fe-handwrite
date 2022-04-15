// https://leetcode-cn.com/problems/search-insert-position/
// 35. 搜索插入位置

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let n = nums.length;
  if (nums[n - 1] === target) {
    return n - 1;
  }
  if (nums[n - 1] < target) {
    return n;
  }
  if (nums[0] >= target) {
    return 0;
  }
  let left = 0, right = n - 1, mid = Math.floor(n / 2);
  while(left <= right) {
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
    mid = Math.floor((left + right) / 2);
  }
  return left;
};