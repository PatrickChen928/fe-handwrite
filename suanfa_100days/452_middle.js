// https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons/
// 452. 用最少数量的箭引爆气球

/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
  points.sort((a, b) => {
    return a[1] - b[1];
  });
  let end = points[0][1];
  let ans = 1;
  for (let point of points) {
    if (point[0] > end) {
      end = point[1];
      ans++;
    }
  }
  return ans;
};

console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]))