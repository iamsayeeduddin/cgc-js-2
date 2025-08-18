// function multiply() {
//   var a = 5 * 5;
//   return 5 * 5;
// }

// var result = multiply();
// console.log(result);

// function toCelsius(fahrenheit) {
//   var convertedTemp = (5 / 9) * (fahrenheit - 32);
//   return `The Temperature in Celsius is ` + convertedTemp.toFixed(2) + `C`;
// }

// console.log(toCelsius(100));

function tempConverter(temp, tempType) {
  if (tempType === "F") {
    var convertedTemp = (5 / 9) * (temp - 32);
    return `The Temperature in Celsius is ` + convertedTemp.toFixed(2) + `C`;
  } else if (tempType === "C") {
    var convertedTemp = (temp * 9) / 5 + 32;
    return `The Temperature in Fahrenheit is ${convertedTemp.toFixed(2)} F`;
  } else {
    return `Invalid Temperature Type!`;
  }
  console.log("32423423423423");
}

console.log(tempConverter(28, "F"));
console.log(tempConverter(35, "C"));
