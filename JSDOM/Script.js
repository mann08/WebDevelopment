function Submit()
{
    console.log("Submit button clicked");

    const fn = document.getElementById("FullName").value;
    console.log(fn);
    document.getElementById("mydata").textContent = fn;
    document.getElementById("FullName").value = "";
}