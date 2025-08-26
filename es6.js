// Global Scope
// Block Scope
// Function Scoped
var a = 10;
let d = 10;
const PI = 3.14;

// function add(a, b) {
//   let c = 1;
//   var res = a + b;
//   return res;
// }

if (true) {
  let b = 10;
}
// let d = 100;
// PI = 3.145;
// console.log(d);

// Arrow Functions

// let add = (a, b) => {
//   return a + b;
// };

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// console.log(add(20, 5));

// Destructuring Objects & Arrays

let obj = {
  studentName: "Ahmed",
  age: 26,
  quali: "BCA",
  mobile: {
    primary: 9874563210,
  },
};

// var studentName = obj.studentName;
// var quali = obj.quali;
let { studentName, quali } = obj;

// console.log(studentName, quali);

var arr = [10, 20, 30, 40];

var [ab, bc, cd] = arr;
// console.log(ab, bc, cd);

// Spread Operator ...

let obj2 = { ...obj };
obj2.studentName = "Bilal";
obj2.mobile.primary = 1478963250;
// console.log(obj2, obj);

var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];
var ar3 = [...arr1, ...arr2];
// console.log(ar3);

// Default Parameters

const multiply = (a, b = 1) => a * b;

// console.log(multiply(10));

// Rest Operator

const summation = (a, b, c, ...rest) => {
  console.log(rest);
  let sum = a + b + c;
  rest.forEach((val) => (sum += val));
  return sum;
};

console.log(summation(1, 2, 3, 4, 5, 6, 7, 8));
