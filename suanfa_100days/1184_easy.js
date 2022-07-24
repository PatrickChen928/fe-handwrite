// https://leetcode.cn/problems/distance-between-bus-stops/solution/gong-jiao-zhan-jian-de-ju-chi-by-leetcod-o737/
// 1184. 公交站间的距离

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  const n = distance.length;
  let num = 0;
  for (let i = 0; i < n; i++) {
    num += distance[i];
  }
  const left = Math.min(start, destination), right = Math.max(start, destination);
  let ans = 0;
  for (let i = left; i < right; i++) {
    ans += distance[i];
  }
  return Math.min(ans, num - ans);
};

console.log(distanceBetweenBusStops([1,2,3,4], 0, 1)); // 1