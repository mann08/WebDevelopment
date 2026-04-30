let n = 5;
if (n > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is not positive");
}

let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

let num = 10;
if (num % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: Fail");
}

let username = "admin";
let password = "password123";
if (username === "admin" && password === "password123") {
  console.log("Login successful!");
} else {
  console.log("Invalid username or password.");
}

let a = 5,
  b = 6;
console.log(a > 3 && b < 10);
console.log(a > 3 || b < 5);

let data;
let name = "Mann";

data = name|| "N/A";
// if (name) {
//   data = name;
// } else {
//   data = "N/A";
// }
console.log(data);
