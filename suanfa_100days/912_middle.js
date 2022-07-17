// https://leetcode.cn/problems/sort-an-array/
// 912. 排序数组

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // 1. 归并排序
  // const n = nums.length;
  // const temp = new Array(n);
  // const merge = (left, mid, right) => {
  //   console.log(left, mid, right);
  //   for (let i = left; i <= right; i++) {
  //     temp[i] = nums[i];
  //   }
  //   let i = left, j = mid + 1;
  //   for (let m = left; m <= right; m++) {
  //     if (i === mid + 1) {
  //       nums[m] = temp[j++];
  //     } else if (j === right + 1) {
  //       nums[m] = temp[i++];
  //     } else if (temp[i] > temp[j]) {
  //       nums[m] = temp[j++];
  //     } else {
  //       nums[m] = temp[i++];
  //     }
  //   }
  // }
  // const sort = (left, right) => {
  //     if (left < right) {
  //       const mid = (left + right) >> 1;
  //       sort(left, mid);
  //       sort(mid + 1, right);
  //       merge(left, mid, right);
  //     }
  // }
  // sort(0, n - 1);
  // return nums;

  // 2. 快速排序
  const n = nums.length;
  const partition = (left, right) => {
    let pivot = nums[left];
    while(left < right) {
      while(left < right && nums[right] >= pivot) right--;
      nums[left] = nums[right];
      while(left < right && nums[left] <= pivot) left++;
      nums[right] = nums[left];
    }
    nums[left] = pivot;
    return left;
  }

  const sort = (left, right) => {
    if (left < right) {
      const pivot = partition(left, right);
      sort(0, pivot - 1);
      sort(pivot + 1, right);
    }
  }
  sort(0, n - 1);
  return nums;
};

console.log(sortArray([5,2,3,1,7,6,9,8]));