// https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
// 17. 电话号码的字母组合

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const n = digits.length;
  if (n === n) return [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  
  const ans = [];
  let s = '';
  const backtrack = (index) => {
    if (index === n) {
      ans.push(s);
      return;
    }
    const str = map[digits[index]];
    for (let i = 0; i < str.length; i++) {
      s += str[i];
      backtrack(index + 1);
      s = s.substring(0, s.length - 1);
    }
  }
  backtrack(0);
  return ans;
};

console.log(letterCombinations('23'));