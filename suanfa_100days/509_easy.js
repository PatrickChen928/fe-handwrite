// https://leetcode.cn/problems/fibonacci-number/
// 509. 斐波那契数

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  // 1. 递归
  // if (n === 0 || n === 1) return n;
  // return fib(n - 1) + fib(n - 2);

  // 2. 动态规划
  if (n === 0 || n === 1) return n;
  let q1 = 0, q2 = 1;
  for (let i = 2; i <= n; i++) {
    const t = q1;
    q1 = q2;
    q2 = q2 + t;
  }
  return q2;
};

console.log(fib(4));