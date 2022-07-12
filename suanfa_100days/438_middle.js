// https://leetcode.cn/problems/find-all-anagrams-in-a-string/
// 438. 找到字符串中所有字母异位词

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  // 滑动窗口
  // const n1 = s.length, n2 = p.length;
  // if (n1 < n2) return [];
  // const ans = [];
  // const arrS = new Array(26).fill(0);
  // const arrP = new Array(26).fill(0);
  // const aCode = 'a'.charCodeAt();
  // for (let i = 0; i < n2; i++) {
  //   arrS[s[i].charCodeAt() - aCode]++;
  //   arrP[p[i].charCodeAt() - aCode]++;
  // }
  // if (arrS.toString() === arrP.toString()) {
  //   ans.push(0);
  // }
  // for (let i = 0; i < n1 - n2; i++) {
  //   arrS[s[i].charCodeAt() - aCode]--;
  //   arrS[s[n2 + i].charCodeAt() - aCode]++;
  //   if (arrS.toString() === arrP.toString()) {
  //     ans.push(i + 1);
  //   }
  // }
  // return ans;

  const n1 = s.length, n2 = p.length;
  if (n1 < n2) return [];
  let target = new Array(26).fill(0);
  let source = new Array(26).fill(0);
  let res = [];
  const aCode = 'a'.charCodeAt();
  for(let i = 0; i < n2; i++){
    let index = p[i].charCodeAt() - aCode;
    target[index]++;
  }
  let left = 0, right = 0;
  while(right < n1){
    let indexR = s[right].charCodeAt() - aCode;
    source[indexR]++;
    while(source[indexR] > target[indexR]){
      let temp = s[left].charCodeAt() - aCode;
      source[temp]--;
      left++;
    }
    if(right - left === n2 - 1) res.push(left);
    right++;
  }
  return res;
};

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams('abab', 'ab'))