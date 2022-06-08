// https://leetcode.cn/problems/number-of-islands/
// 200. 岛屿数量

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // 1. 暴力法
  // 左 上 右 下
  const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  const m = grid.length;
  const n = grid[0].length;
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        ans++;
        const stack = [[i, j]];
        while(stack.length) {
          const curr = stack.pop();
          for (let k = 0; k < 4; k++) {
            const d = directions[k];
            const newX = curr[0] + d[0], newY = curr[1] + d[1];
            if (newX >= 0 && newX < m && newY >= 0 && newY < n && grid[newX][newY] == 1) {
              grid[newX][newY] = '0';
              stack.push([newX, newY]);
            }
          }
        }
      }
    }
  }
  return ans;
};

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))
console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))
console.log(numIslands([
  ["1","1","1"],
  ["0","1","0"],
  ["1","1","1"]
]))

console.log(numIslands([
  ["1","0","1","1","1"],
  ["1","0","1","0","1"],
  ["1","1","1","0","1"]
]))