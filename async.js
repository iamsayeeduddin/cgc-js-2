// setTimeout(() => {
//   console.log("Something delayed!");
// }, 0);

// var a = 10;
// console.log(a);

// console.log(res);
let res;
const add = (a, b, cb) => {
  setTimeout(() => {
    cb(a + b);
  }, 1000);
};

const subtract = (a, b, cb) => {
  setTimeout(() => {
    cb(a - b);
  }, 2000);
};

const multiply = (a, b, cb) => {
  setTimeout(() => {
    cb(a * b);
  }, 1000);
};

const callback = (result) => {
  //   res = result;
  console.log(result);
  console.timeEnd("ASYNC");
};

// add(1, 2, callback);
// subtract(20, 5, callback);
// console.log("Testing ASYNC");
// multiply(10, 5, callback);

console.time("ASYNC");
add(1, 1, (res) => {
  console.log(res);
  subtract(12, res, (res2) => {
    console.log(res2);
    multiply(res2, 5, callback);
  });
});
// PROMISES

// Promise()
// Resolved
// Reject
// Pending

// subtract(10, 2, callback);
// subtract(2, 2, callback);
