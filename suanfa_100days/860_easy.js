// https://leetcode-cn.com/problems/lemonade-change/
// 860. 柠檬水找零

/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
  let map = {
    5: 0,
    10: 0
  };
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      map['5']++;
    }
    if (bills[i] === 10) {
      if (map['5']) {
        map['5']--;
        map['10']++;
      } else {
        return false;
      }
    }
    if (bills[i] === 20) {
      if (!map['5']) {
        return false;
      }
      if (map['10']) {
        map['10']--;
        map['5']--;
      } else if (map['5'] < 3) {
        return false;
      } else {
        map['5'] = map['5'] - 3;
      }
    }
  }
  return true;
};

console.log(lemonadeChange([5,5,5,10,20]))