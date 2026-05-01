let abc = function () {
  // function expression // ffunction hamesha const ke sath likhte h let ya var ke sath nahi likhte h
  console.log("Hello Mann");
};

console.log(abc);
abc();

let add = function (x, y) {
  return x + y;
};
console.log(add(5, 10));
console.log(add);

const arrowfun = () => {
  console.log("This is an arrow function");
};

arrowfun();

const arrowfun2 = (x, y) => x + y;
console.log(arrowfun2(7, 8));
