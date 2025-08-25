class Students {
  constructor(nm, course, quali, isPlaced, mobile) {
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
  //   isActive = false;
  callStudent() {
    this.isPlaced = true;
    console.log(`Calling ${this.name} on ${this.mobileNo}!`);
  }
}

var s1 = new Students("Sayeed", "MERN", "BCA", true, 9874563210);
var s2 = new Students("Bilal", "SOC", "CSE", false, 963587410);
// console.log(s1.isActive);
// s1.callStudent();
// console.log(s1);

Students.prototype.call = function () {
  console.log("Call Proto!" + this.mobileNo);
};

// s1.call();
// console.log(s1, s2);

class NewStudent extends Students {
  constructor(nm, course, quali, isPlaced, mobile) {
    // Super() initializes properties and methods of parent class (Students)
    super(nm, course, quali, isPlaced, mobile);
    this.projects = [];
  }

  addProject(name, link) {
    this.projects.push({ name, link });
  }
}

var s3 = new NewStudent("Salman", "AWS", "IT", false, 9514786320);
s3.addProject("Ecommerce", "https://ecom.in");
console.log(s3);

s3.call();
