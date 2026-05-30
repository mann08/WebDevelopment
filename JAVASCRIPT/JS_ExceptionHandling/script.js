function checkNumber() {
  const value = document.getElementById("num").value;
  const result = document.getElementById("result");

  try {
    if (value === "") {
      throw "Input is empty";
    }

    if (isNaN(value)) {
      throw "Please enter a valid number";
    }

    result.innerText = "Valid Number: " + value;
    result.style.color = "green";
  } catch (error) {
    result.innerText = error;
    result.style.color = "red";
  } finally {
    console.log("Exception handling completed");
  }
}
