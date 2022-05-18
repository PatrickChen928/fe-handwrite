// https://leetcode.cn/problems/container-with-most-water/
// 11. 盛最多水的容器

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let ans = 0;
  let left = 0, right = height.length - 1;
  while (left < right) {
    const num = Math.min(height[left], height[right]) * (right - left);
    ans = Math.max(ans, num);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));