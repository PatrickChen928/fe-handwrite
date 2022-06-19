// https://leetcode.cn/problems/find-the-duplicate-number/
// 287. 寻找重复数

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let slow = 0, fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while(slow != fast);
  slow = 0;
  while(slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};

console.log(findDuplicate([1,3,4,2,2]));