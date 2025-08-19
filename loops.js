var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var sum = 0;

// for (var i = 0; i < arr.length; i++) {
//   //   console.log(arr[i]);
//   sum += arr[i];
// }
// console.log(sum);

var i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// do {
//   console.log(i);
// } while (i < arr.length);

// while (false) {
//   console.log("TEST WHILE");
// }

// do {
//   console.log("TEST DO WHILE");
// } while (false);

function iteratorCallback(element, index) {
  console.log(`The ${element} is on ${index}.`);
}

arr.forEach(iteratorCallback);

// iteratorCallback(10, 0);
