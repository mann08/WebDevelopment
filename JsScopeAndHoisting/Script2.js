let a;
let b;
let c;

a=10;
console.log(a);
console.log(b); // undefined
console.log(c); // undefined

b=15;
console.log(a);
console.log(b);
console.log(c); // undefined

c=20;
console.log(a);
console.log(b);
console.log(c);

abc();
function abc() {
    console.log("This is a function");
}