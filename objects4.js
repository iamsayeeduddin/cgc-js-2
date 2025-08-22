function Student(nm, course, quali, isPlaced, mobile) {
  this.name = nm;
  this.course = course;
  this.qualification = quali;
  this.isPlaced = isPlaced;
  this.mobileNo = mobile;
  this.aboutStudent = function () {
    console.log(
      `Hi, My name is ${this.name} and I am a ${this.qualification} graduate ${this.isPlaced ? "completed" : "pursuing"} ${this.course} course.`
    );
  };
}

var std1 = new Student("Sayeed", "FSD", "BCA", true, 9874563210);
var std2 = new Student("Sulaiman", "SOC", "CSE", false, 789651230);
// std2.name = "Ahmed";
// console.log(std1, std2);
std1.aboutStudent();

Student.prototype.callStudent = function () {
  this.isPlaced = true;
  console.log(`Calling ${this.name} on ${this.mobileNo}!`);
};

// std1.callStudent();
// console.log(std1, std2);
std2.callStudent();
console.log(std2);
