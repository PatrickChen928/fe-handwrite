// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
// 33. 搜索旋转排序数组

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  return binarySearch(nums, target);
};

function binarySearch(nums, target) {
  const n = nums.length;
  if (n === 1) return nums[0] === target ? 0 : -1;
  let left = 0, right = n - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[left] === target) {
      return left;
    }
    if (nums[right] === target) {
      return right;
    }
    if (nums[0] < nums[mid]) {
      if (target < nums[mid] && target > nums[0]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target < nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

const input = [8,1,2,3,4,5,6,7];

console.log(search(input, 6));