// https://leetcode-cn.com/problems/daily-temperatures/
// 739. 每日温度

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const n = temperatures.length;
  const ans = new Array(n).fill(0);
  const stack = [];
  for (let i = 0; i < n; i++) {
    while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const index = stack.pop();
      ans[index] = i - index;
    }
    stack.push(i);
  }
  return ans;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));