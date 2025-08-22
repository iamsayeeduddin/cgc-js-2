var obj = {
  name: "Sayeed",
  course: "MERN",
  isActive: true,
  isAvailable: function () {
    console.log(this.name);
  },
  closeBatch: function () {
    this.isActive = false;
  },
};

// obj.isAvailable();
obj.closeBatch();
console.log(obj);
this.name = "Something";
console.log(this);
