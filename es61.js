var arr = [1, 2, 3, 4, 5, 3];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

var callBackFn = (value, index) => {
  sum += value;
  //   return undefined;
};

var sum = 0;

// var res = arr.forEach(callBackFn);
// res will always be undefined for forEach method as it returns undefined always
// console.log(sum, res);

// Map Array Method

var newArr = arr.map((val, idx) => {
  return val + 1;
});

// console.log(newArr, arr);

// Filter Array Method

var newFltArr = arr.filter((itm, i) => {
  return itm % 2 !== 0;
});

// console.log(newFltArr, arr);

// Find and FindIndex

var idx = arr.findIndex((val, idx) => {
  return val === 3;
});

// console.log(idx);

module.exports = {};
