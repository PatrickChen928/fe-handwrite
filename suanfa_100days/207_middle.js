// https://leetcode.cn/problems/course-schedule/
// 207. 课程表

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  // 1. dfs
  // 2. bds
  const n = prerequisites.length;
  const inagree = new Array(numCourses).fill(0);
  const map = {};
  for (let i = 0; i < n; i++) {
    inagree[prerequisites[i][0]]++;
    if (map[prerequisites[i][1]]) {
      map[prerequisites[i][1]].push(prerequisites[i][0]);
    } else {
      map[prerequisites[i][1]] = [prerequisites[i][0]];
    }
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inagree[i] === 0) {
      queue.push(i);
    }
  }
  let count = 0;
  while(queue.length) {
    const selected = queue.shift();
    count++;
    const pres = map[selected];
    if (pres && pres.length) {
      for (let i = 0; i < pres.length; i++) {
        inagree[pres[i]]--;
        if (inagree[pres[i]] === 0) {
          queue.push(pres[i]);
        }
      }
    }
  }
  return count === numCourses;
};

console.log(canFinish(1, []));
console.log(canFinish(2, [[0,1]]));
console.log(canFinish(6, [[3, 0], [3, 1], [4, 1], [4, 2], [5, 3], [5, 4]]));