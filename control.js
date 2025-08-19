// if (true) {
//   console.log("Operations");
// } else {
//   console.log("Not True");
// }
var date = new Date();
var dayOfTheWeek = "";
// console.log(date);

switch (7) {
  case 0:
    dayOfTheWeek = "Sunday";
    break;
  case 1:
    dayOfTheWeek = "Monday";
    break;
  case 2:
    dayOfTheWeek = "Tuesday";
    break;
  case 3:
    dayOfTheWeek = "Wednesday";
    break;
  case 4:
    dayOfTheWeek = "Thursday";
    break;
  case 5:
    dayOfTheWeek = "Friday";
    break;
  case 6:
    dayOfTheWeek = "Saturday";
    break;
  default:
    dayOfTheWeek = "";
}

if (dayOfTheWeek !== "") {
  console.log(`It's ${dayOfTheWeek} today!`);
} else {
  console.log("Invalid Input");
}
