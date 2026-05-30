// let arr = [1, 2, 3, 4, 5];
// for(var i = 0; i<arr.length; i++)
//     {
//     console.log(arr[i]);
// }
// console.log(arr);

// arr[2] = arr[2]+10;
// console.log(arr);

// arr = [];
// console.log(arr);

// let arr = [10,20,30,40,50,11,8,16,9]
// arr.push(1108);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(1);
// console.log(arr);
// arr.shift(1);
// console.log(arr);

// console.log(arr.at(5));

// console.log(arr.indexOf(8));

// console.log(arr.includes(16));

// let unar = [56,23,89,45,67,34,12,90,87,45,98]
// console.log(unar);
// console.log(unar.sort());
// console.log(unar);
// console.log(unar.reverse());

let arr = [10, 20, 30, 40, 50, 11, 8, 16, 9];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("Using ForEach Loop");
arr.forEach((element) => {
  console.log(element);
});
