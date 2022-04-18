// https://leetcode-cn.com/problems/as-far-from-land-as-possible/
// middle

// 1. bfs
const input = [[1,0,1],[0,0,0],[1,0,1]];
// 下 右 左 上
const dis = [[0, 1], [1, 0], [-1, 0], [0, -1]];
var maxDistance = function(grid) {
  const n = grid.length;
  const queue = [];
  let count = 0;
  let dep = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j]);
      } else {
        count++;
      }
    }
  }
  if (count === n * n || count === 0) {
    return -1;
  }
  while(queue.length) {
    let len = queue.length;
    dep++;
    for (let l = 0; l < len; l++) {
      let curr = queue.shift();
      for (let i = 0; i < 4; i++) {
        const dx = curr[0] + dis[i][0];
        const dy = curr[1] + dis[i][1];
        if (dx < 0 || dy < 0 || dx >= n || dy >= n || grid[dx][dy] === 1) {
          continue;
        }
        count--;
        if(count === 0) {
          return dep;
        }
        grid[dx][dy] = 1;
        queue.push([dx, dy]);
      }
    }
  }
  return -1;
};

// 2. dp
var maxDistance_dp = function(grid) {
  const n = grid.length;
  if (n < 2) return -1;
  const dp = Array.from(new Array(n), () => new Array(n).fill(Infinity));
  let areaCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dp[i][j] = 0;
        areaCount++;
      }
    }
  }
  if (areaCount === 0 || areaCount === n * n) return -1;
  // 左上
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j] !== 0) {
        if (i - 1 >= 0) {
          dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j]);
        }
        if (j - 1 >= 0) {
          dp[i][j] = Math.min(dp[i][j - 1] + 1, dp[i][j]);
        }
      }
    }
  }
  //  右上
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (dp[i][j] !== 0) {
        if (i + 1 < n) {
          dp[i][j] = Math.min(dp[i + 1][j] + 1, dp[i][j]);
        }
        if (j + 1 < n) {
          dp[i][j] = Math.min(dp[i][j + 1] + 1, dp[i][j]);
        }
      }
    }
  }
  let res = -Infinity;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j] !== 0) {
        res = Math.max(res, dp[i][j]);
      }
    }
  }
  return res === Infinity ? -1 : res;
};

console.log(maxDistance_dp(input));


// function findMinDistance(grid, i, j) {
//   const n = grid.length;
//   const arr = [i, j, 0];
//   const queue = [arr];
//   const visited = {
//     [`${i},${j}`]: true
//   };
//   while(queue.length) {
//     const curr = queue.shift();
//     for (let i = 0; i < 4; i++) {
//       const dx = curr[0] + dis[i][0];
//       const dy = curr[1] + dis[i][1];
//       if (dx < 0 || dy < 0 || dx >= n || dy >= n) {
//         continue;
//       }
//       if (!visited[dx + ',' + dy]) {
//         if (grid[dx][dy] === 0) {
//           visited[dx + ',' + dy] = true;
//           queue.push([dx, dy, curr[2] + 1]);
//         } else {
//           return curr[2] + 1;
//         }
//       }
//     }
//   }
//   return -1;
// }

console.log(maxDistance(input));