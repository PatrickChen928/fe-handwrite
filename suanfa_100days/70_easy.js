// https://leetcode.cn/problems/climbing-stairs/
// 70. 爬楼梯

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let q1 = 1, q2 = 2;
  for (let i = 2; i <= n; i++) {
    const t = q1;
    q1 = q2;
    q2 = q2 + t;
  }
  return q2;
};

console.log(climbStairs(2));