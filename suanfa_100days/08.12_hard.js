// https://leetcode.cn/problems/eight-queens-lcci/
// 面试题 08.12. 八皇后

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const ans = [];
  const temp = [];
  const vis = [];
  const dfs = () => {
    if (temp.length === n) {
      ans.push([ ...temp ]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!isValidPos(temp.length, i)) {
        continue;
      }
      vis.push([temp.length, i]);
      temp.push('.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1));
      dfs();
      vis.pop();
      temp.pop();
    }
  }
  const isValidPos = (x, y) => {
    if (!vis.length) return true;
    for (let i = 0; i < vis.length; i++) {
      const [currX, currY] = vis[i];
      if (currY === y) 
        return false;
      if (Math.abs(y - currY) === Math.abs(x - currX))
        return false;
    }
    return true;
  }
  dfs();
  return ans;
};

// [["Q....","..Q..","....Q",".Q...","...Q."],
// ["Q....","...Q.",".Q...","....Q","..Q.."],
// [".Q...","...Q.","Q....","..Q..","....Q"],
// [
// ".Q...",
// "...Q.",
// "Q....",
// "....Q",
// "..Q.."
// ],
// [".Q...","....Q","..Q..","Q....","...Q."],
// ["..Q..","Q....","...Q.",".Q...","....Q"],
// ["..Q..","Q....","....Q",".Q...","...Q."],
// ["..Q..","....Q","Q....","...Q.",".Q..."],["..Q..","....Q",".Q...","...Q.","Q...."],["...Q.","Q....","..Q..","....Q",".Q..."],["...Q.",".Q...","....Q","Q....","..Q.."],["...Q.",".Q...","....Q","..Q..","Q...."],["....Q",".Q...","...Q.","Q....","..Q.."],["....Q","..Q..","Q....","...Q.",".Q..."]]

[
'.Q...', 
'...Q.', 
'Q....', 
'....Q',
'..Q..']
[["Q....","..Q..","....Q",".Q...","...Q."],
["Q....","...Q.",".Q...","....Q","..Q.."],
[".Q...","...Q.","Q....","..Q..","....Q"],
[".Q...","....Q","..Q..","Q....","...Q."],
["..Q..","Q....","...Q.",".Q...","....Q"],
["..Q..","....Q",".Q...","...Q.","Q...."],
["...Q.","Q....","..Q..","....Q",".Q..."],
["...Q.",".Q...","....Q","..Q..","Q...."],
["....Q",".Q...","...Q.","Q....","..Q.."],
["....Q","..Q..","Q....","...Q.",".Q..."]]

console.log(solveNQueens(4));