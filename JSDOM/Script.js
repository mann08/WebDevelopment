function Submit()
{
    console.log("Submit button clicked");

    const fn = document.getElementById("FullName").value;
    console.log(fn);
    document.getElementById("mydata").textContent = fn;
    document.getElementById("FullName").value = "";

    document.getElementById("datacard").classList.add("divshow");
    document.getElementById("datacard").classList.remove("divhide");

}