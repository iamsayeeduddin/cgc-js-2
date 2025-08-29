// Reduce Method

var arr = [1, 2, 3, 4, 5];

const reduceCallback = (prev, val) => {
  //   console.log(prev, val);
  return prev + val;
};

var sum = arr.reduce(reduceCallback, 0);
// console.log(sum);

var arr1 = ["a", "a", "b", "b", "b", "c", "c", "d", "e", "a"];

// out = {
//   a: 2,
//   b: 3,
//   c: 2,
//   d: 1,
//   e: 1,
// };

var res = arr1.reduce((prev, val) => {
  if (prev[val]) {
    prev[val] += 1;
  } else {
    prev[val] = 1;
  }
  return prev;
}, {});
// console.log(res);

// Modules
module.exports = { res, arr1 };
