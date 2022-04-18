// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
// 153. 寻找旋转排序数组中的最小值

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
  // const n = nums.length;
  // if (n === 1) return nums[0];

  // let left = 0, right = n - 1, ans = Infinity;
  // while(left <= right) {
  //   let mid = (left + right) >> 1;
  //   ans = Math.min(nums[left], nums[mid], nums[right], ans);
  //   if (nums[left] < nums[mid] && nums[right] < nums[mid]) {
  //     left = mid + 1;
  //   } else {
  //     right = mid - 1;
  //   }
  // }
  // return ans;
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
      const pivot = low + Math.floor((high - low) / 2);
      if (nums[pivot] < nums[high]) {
          high = pivot;
      } else {
          low = pivot + 1;
      }
  }
  return nums[low];
};

const input = [4,5,1,2,3];

console.log(findMin(input));