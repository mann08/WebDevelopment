let test = "This is Global Test Variable";

function classa() {
  console.log("ClassA", test);
}
function classb() {
  console.log("ClassB", test);
}
function classc() {
  let test2 = "This is Local Test Variable";
  console.log("ClassC", test);
  console.log("ClassC", test2);
}
function classd() {
  console.log("ClassD", test);

  {
    let v = 10;
    console.log(v);
  }
  console.log(v); // error v is not defined
}

classa();
classb();
classc();
classd();

// combined example of scoping
let announcement = "School will be closed tomorrow";

function classroom() {
  // Local Scope → Only this classroom
  let classMessage = "Complete your homework";

  console.log("Inside Classroom:");
  console.log(announcement); //  Global accessible
  console.log(classMessage); //  Local accessible

  if (true) {
    // Block Scope → Only inside this block (group discussion)
    let groupDiscussion = "Prepare for group presentation";

    console.log("Inside Group:");
    console.log(announcement); //  Global
    console.log(classMessage); //  Local
    console.log(groupDiscussion); //  Block
  }

  // console.log(groupDiscussion);  Error (block scope)
}

classroom();

console.log("Outside Classroom:");
console.log(announcement); //  Global
