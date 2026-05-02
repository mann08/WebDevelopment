let test = "This is Global Test Variable";

function classa(){
    console.log("ClassA", test);
}
function classb(){
    console.log("ClassB", test);
}
function classc(){
    let test2 = "This is Local Test Variable";
    console.log("ClassC", test);
    console.log("ClassC", test2);
}
function classd(){
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