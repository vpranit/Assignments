const obj = {
  firstName: "pranit",
  lastName: "vinchurkar",
  age: 1999,
  job: "intern developer",
  friends: ["pranit", "shubham", "shivani"],

  // calcAge: function (birthye) {
  //     return 2037 - birthye
  // },

  calcAge: function () {
    return 2037 - this.age;
  },
};

console.log(obj.calcAge(2021));

// console.log(obj);

// console.log(obj.firstName);

// console.log(obj['firstName']);

// // const interestedIn = prompt("what do you want to know");
// // console.log(obj[interestedIn]);

// obj.location = "nagpur";
// console.log(obj);
