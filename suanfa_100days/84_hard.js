// https://leetcode.cn/problems/largest-rectangle-in-histogram/
// 84. 柱状图中最大的矩形

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const n = heights.length;
  const left = new Array(n);
  const right = new Array(n).fill(n);
  const stack = [];
  for (let i = 0; i < n; i++) {
    while(stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
      right[stack[stack.length - 1]] = i;
      stack.pop();
    }
    left[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
  }
  return Math.max(...heights.map((h, i) => (right[i] - left[i] - 1) * h));
};

console.log(largestRectangleArea([2,1,5,6,2,3]));