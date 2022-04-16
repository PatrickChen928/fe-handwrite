// https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// 34. 在排序数组中查找元素的第一个和最后一个位置

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  return [binarySearch(nums, target, true), binarySearch(nums, target, false)]
};

function binarySearch(nums, target, lower) {
  const n = nums.length;
  let left = 0, right = n - 1; 
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (lower) {
    return nums[left] === target ? left : -1;
  } else {
    return nums[right] === target ? right : - 1;
  }
}

const input = [5,7,7,8,8,10], target = 8;

console.log(searchRange(input, target));