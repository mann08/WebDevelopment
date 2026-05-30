function test()
{
    console.log("Before return statement");
    return;
    console.log("After return statement"); // This line will not be executed
}
test();