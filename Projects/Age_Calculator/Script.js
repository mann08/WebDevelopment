document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const dob = document.getElementById("DOB").value;
  const CurrentDate = document.getElementById("CurrentDate").value;

  const Age = Number(CurrentDate.split("-")[0]) - Number(dob.split("-")[0]);

  console.log(Age);
  document.getElementById("DOB").value = "";
  document.getElementById("CurrentDate").value = "";

  document.getElementById("Myage").innerText = Age;
});
