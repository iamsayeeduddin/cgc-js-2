const add = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("In ADD ASYNC");
      if (a === 0) return rej("0 not allowed");
      res(a + b);
    }, 1000);
  });
};

const subtract = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("In SUBTRACT ASYNC");
      if (a === 0) return rej("0 not allowed");
      res(a - b);
    }, 2000);
  });
};

const multiply = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("In <MULTIPLY> ASYNC");
      if (a === 25) return rej("25 not allowed");
      res(a * b);
    }, 1000);
  });
};

// add(0, 20)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// subtract(10, 20)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// multiply(3, 20)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
// const prms = new Promise((res, rej) => res(10));

// prms.then((res) => console.log(res));

// add(10, 30)
//   .then((res) => subtract(res, 5))
//   .then((res2) => multiply(res2, 2))
//   .then((res3) => console.log(res3))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Promise Ended!"));

// Promise.all([add(0, 30), subtract(10, 5), multiply(10, 2)])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.any([add(0, 30), subtract(10, 5), multiply(10, 2)])
//   .then((res) => console.log("response", res))
//   .catch((err) => console.log(err));

module.exports = { add, multiply, subtract };
