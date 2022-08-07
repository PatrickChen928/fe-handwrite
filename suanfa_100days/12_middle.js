// https://leetcode.cn/problems/integer-to-roman/
// 12. 整数转罗马数字

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const thousands = ["", "M", "MM", "MMM"];
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tens     = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const ones     = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  const roman = [];
  roman.push(thousands[Math.floor(num / 1000)]);
  roman.push(hundreds[Math.floor(num % 1000 / 100)]);
  roman.push(tens[Math.floor(num % 100 / 10)]);
  roman.push(ones[num % 10]);
  return roman.join('');
};

console.log(intToRoman(3)); // III