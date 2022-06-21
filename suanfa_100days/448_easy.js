// https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/
// 448. 找到所有数组中消失的数字

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const x = (nums[i] - 1) % n;
    nums[x] += n;
  }
  const ans = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] <= n) {
      ans.push(i + 1);
    }
  }
  return ans;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));