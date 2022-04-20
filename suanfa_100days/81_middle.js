// https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/
// 81. 搜索旋转排序数组 II

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function(nums, target) {
  const n = nums.length;
  if (n === 1) return nums[0] === target;
  let left = 0, right = n - 1;
  while(left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) return true;
    if (nums[mid] === nums[left] && nums[mid] === nums[right]) {
      right--;
      left++;
    } else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && nums[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
};

const input = [2,5,6,0,0,1,2];

console.log(search(input, 0));