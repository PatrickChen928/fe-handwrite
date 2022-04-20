// https://leetcode-cn.com/problems/4sum/
// 18. 四数之和

let input = [-1,0,-5,-2,-2,-4,0,1,-2];
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
  const n = nums.length;
  if (n < 4) return [];
  const ans = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 3; i++) {
    let num1 = nums[i];
    if (i > 0 && num1 === nums[i - 1]) continue;
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break;
  }
  if (nums[i] + nums[n - 3] + nums[n - 2] + nums[n - 1] < target) {
      continue;
  }
    for (let j = i + 1; j < n - 2; j++) {
      let num2 = nums[j];
      if (j > i + 1 && num2 === nums[j - 1]) continue;
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break;
    }
    if (nums[i] + nums[j] + nums[n - 2] + nums[n - 1] < target) {
        continue;
    }
      let l = j + 1, r = n - 1; 
      while (l < r) {
        let sub = target - num1 - num2 - nums[l] - nums[r];
        if (sub < 0) {
          while (l < r && nums[r] === nums[r - 1]) {
            r--;
          }
          r--;
        } else if (sub > 0) {
          while (l < r && nums[l] === nums[l + 1]) {
            l++;
          }
          l++;
        } else {
          ans.push([num1, num2, nums[l], nums[r]]);
          while (l < r && nums[r] === nums[r - 1]) {
            r--;
          }
          r--;
          while (l < r && nums[l] === nums[l + 1]) {
            l++;
          }
          l++;
        }
      }
    }
  }
  return ans;
};

console.log(fourSum(input, -9))