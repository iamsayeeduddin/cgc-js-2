// var carName = "Fiat";
// var carModel = "F788";
// var carColor = "Red";
// Data Encapsulation
var car = {
  "car name": "Fiat",
  model: "F788",
  color: "Red",
  lauchYear: 2015,
  isAvailable: true,
  start: function () {
    console.log("Starting Car.....");
  },
};

// console.log(car["car name"]);
// console.log(car.color);
// car.start();

/// Contact List
// LLD - Low Level Design
// HLD - High Level Design
var contact = {
  name: {
    first: "",
    surname: "",
    last: "",
  },
  mobile: [
    { type: "Personal", number: 9874563210 },
    { type: "Work", number: 9632587410 },
  ],
  email: ["sayeed@gmail", "sayeed@cgc.in"],
  random: "",
};

contact.isActive = false;
delete contact.random;
contact.name.surname = "Syed";
contact.name.first = "Sayeeduddin";
console.log(contact);
