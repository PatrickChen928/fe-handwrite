// https://leetcode.cn/problems/next-permutation/
// 31. 下一个排列

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const n = nums.length;
  let i = n - 2;
  while(i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = n - 1;
    while(j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    swap(nums, i, j);
  }
  reverse(nums, i + 1, n - 1);
  console.log(nums)
};

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function reverse(nums, start, end) {
  let left = start, right = end;
  while(left < right) {
    swap(nums, left, right);
    left++;
    right--;
  }
}

console.log(nextPermutation([4,3,2,1]))
// 2,1,3