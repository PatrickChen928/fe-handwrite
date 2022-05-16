// https://leetcode.cn/problems/triangle/
// 120. 三角形最小路径和

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const n = triangle.length;
  if (n === 1) {
    return triangle[0][0];
  }
  let dp = triangle[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < i + 1; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));
console.log(minimumTotal([[-10]]));