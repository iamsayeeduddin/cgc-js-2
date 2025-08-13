// OPERATORS

// Arithmetic

// +, -, *, /, %
// var res = 10 % 2;

// Assignment

// var a = 10;
// a = a + 2;
// a += 1;
// console.log(--a);
// console.log(a++);

// var a = 10;
// var b = "10";
// console.log(a >= b);

// LOGICAL
// AND

// A | B | A && B
// T | T | T
// T | F | F
// F | T | F
// F | F | F

// OR

// A | B | A || B
// T | T | T
// T | F | T
// F | T | T
// F | F | F

// NOT

// A | !A
// T | F
// F | T

var age = 17;
var isLicenseAvailable = false;

// console.log(age > 17 || isLicenseAvailable);

if (age > 17 && isLicenseAvailable) {
  console.log("Eligible to Drive!");
} else if (age < 18 && isLicenseAvailable) {
  console.log("Eligible for Student License");
} else {
  console.log("Not Eligible to Drive!");
}
