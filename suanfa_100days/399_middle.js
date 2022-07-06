// https://leetcode.cn/problems/evaluate-division/
// 399. 除法求值

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  let id = 0;
  const n = equations.length;
  const keyMap = new Map();
  
  for (let i = 0; i < n; i++) {
    const [key1, key2] = equations[i];
    if (!keyMap.has(key1)) {
      keyMap.set(key1, id++);
    }
    if (!keyMap.has(key2)) {
      keyMap.set(key2, id++);
    }
  }
  const parent = new Array(id).fill(0).map((_, index) => index);
  const weight = new Array(id).fill(1);
  const find = function(id) {
    if(parent[id] != id) {
      const p = find(parent[id]);
      weight[id] *= weight[parent[id]];
      parent[id] = p;
    }
    return parent[id];
  }
  const union = function(idx, idy, val) {
    const rootX = find(idx);
    const rootY = find(idy);
    parent[rootX] = rootY;
    weight[rootX] = weight[idy] * val / weight[idx];
  }
  for (let i = 0; i < n; i++) {
    const aId = keyMap.get(equations[i][0]), bId = keyMap.get(equations[i][1]);
    union(aId, bId, values[i])
  }
  console.log(parent, weight)
  const ans = [];
  for (let i = 0; i < queries.length; i++) {
    const q = queries[i];
    let result = -1;
    if (keyMap.has(q[0]) && keyMap.has(q[1])) {
      const a = keyMap.get(q[0]), b = keyMap.get(q[1]);
      const idx = find(a), idy = find(b);
      if (idx === idy) {
        result = weight[a] / weight[b];
      }
    }
    ans[i] = result;
  }
  return ans;
}

console.log(calcEquation([["a","b"],["b","c"]], [2.0,3.0], [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]))
// console.log(calcEquation([["a","b"],["a","d"],["d","c"]], [3.0,6.0,4.0], [["b","c"]]))