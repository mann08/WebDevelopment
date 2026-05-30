document
  .getElementById("background-color")
  .addEventListener("change", ChangeBackgroundColor);

document
  .getElementById("heading-color")
  .addEventListener("change", ChangeHeadingColor);

document
  .getElementById("paragraph-color")
  .addEventListener("change", ChangeParagraphColor);

document.getElementById("reset").addEventListener("click", reset);

function ChangeBackgroundColor() {
  const color = document.getElementById("background-color").value;

  document.getElementById("background").style.backgroundColor = color;
}

function ChangeHeadingColor() {
  const color = document.getElementById("heading-color").value;

  document.getElementById("heading").style.color = color;
}

function ChangeParagraphColor() {
  const color = document.getElementById("paragraph-color").value;

  document.getElementById("paragraph").style.color = color;
}

function reset() {
  document.getElementById("background").style.backgroundColor = "white";

  document.getElementById("heading").style.color = "black";

  document.getElementById("paragraph").style.color = "black";

  document.getElementById("background-color").value = "#ffffff";

  document.getElementById("heading-color").value = "#000000";

  document.getElementById("paragraph-color").value = "#000000";
}
