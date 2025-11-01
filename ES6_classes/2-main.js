import ALXCourse from "./2-hbtn_course.js";

const c1 = new ALXCourse("ES6", 1, ["Bob", "Jane"]);
console.log(c1.name); // ES6
c1.name = "Python 101";
console.log(c1); // Updated name

try {
  c1.name = 12; // Should throw error
} catch (err) {
  console.log(err); // TypeError: Name must be a string
}

try {
  const c2 = new ALXCourse("ES6", "1", ["Bob", "Jane"]); // Should throw error
} catch (err) {
  console.log(err); // TypeError: Length must be a number
}
