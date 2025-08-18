// Grade Calculator -> 90+ -> A 80 - 89 -> B 70 - 79  -> C <70 -> FAIL
var marks = 75;

if (marks >= 90) {
  console.log("GRADE A");
} else if (marks >= 80 && marks < 90) {
  console.log("GRADE B");
} else if (marks >= 70 && marks < 80) {
  console.log("GRADE C");
} else {
  console.log("FAIL");
}
