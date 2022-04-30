// https://leetcode-cn.com/problems/queue-reconstruction-by-height/
// 406. 根据身高重建队列

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  const n = people.length;
  const arr = [];
  // people.sort((a, b) => {
  //   if (a[0] != b[0]) {
  //     return a[0] - b[0];
  //   } else {
  //     return b[1] - a[1];
  //   }
  // });
  // for (let i = 0; i < n; i++) {
  //   let spaces = people[i][1] + 1;
  //   for (let j = 0; j < n; j++) {
  //     if (!arr[j]) {
  //       spaces--;
  //       if (spaces === 0) {
  //         arr[j] = people[i];
  //         break;
  //       }
  //     }
  //   }
  // }
  // return arr;
  people.sort((a, b) => {
    if (a[0] != b[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });
  for (let p of people) {
    arr.splice(p[1], 0, p);
  }
  return arr;
};

console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]))