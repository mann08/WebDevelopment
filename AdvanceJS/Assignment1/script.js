function runAllQuestions() {
  console.clear();

  // Question 1
  console.log("Question 1: Hoisting");

  console.log(a);

  var a = 10;

  console.log(a);

  // Question 2
  console.log("Question 2: Global and Function Variable");

  var globalA = 10;

  function test() {
    var b = 20;

    console.log(globalA + b);
  }

  test();

  // Question 3
  console.log("Question 3: Nested Function Flow");

  function functionA() {
    console.log("Function A Started");

    functionB();

    console.log("Function A Ended");
  }

  function functionB() {
    console.log("Function B Executed");
  }

  functionA();

  // Question 4
  console.log("Question 4: Scope Behavior");

  var name = "Global Variable";

  function scopeTest() {
    var name = "Function Variable";

    console.log("Inside Function:", name);
  }

  scopeTest();

  console.log("Outside Function:", name);

  // Question 5
  console.log("Question 5: this Keyword");

  function nonStrictFunction() {
    console.log(this);
  }

  nonStrictFunction();

  function strictFunction() {
    "use strict";

    console.log(this);
  }

  strictFunction();

  // Question 6
  console.log("Question 6: Object Method");

  const student = {
    name: "Mann Verma",

    course: "JavaScript",

    showDetails: function () {
      console.log("Name:", this.name);

      console.log("Course:", this.course);
    },
  };

  student.showDetails();

  // Question 7
  console.log("Question 7: var let const");

  console.log(varValue);

  var varValue = 100;

  console.log(varValue);

  try {
    console.log(letValue);
  } catch (error) {
    console.log("let Error:", error.message);
  }

  let letValue = 200;

  console.log(letValue);

  try {
    console.log(constValue);
  } catch (error) {
    console.log("const Error:", error.message);
  }

  const constValue = 300;

  console.log(constValue);

  // Question 8
  console.log("Question 8: Call Stack");

  console.log("Global Execution Started");

  function firstFunction() {
    console.log("functionA Entered");

    secondFunction();

    console.log("functionA Exited");
  }

  function secondFunction() {
    console.log("functionB Entered");

    console.log("functionB Exited");
  }

  firstFunction();

  console.log("Global Execution Ended");
}
