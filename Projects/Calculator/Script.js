let equation = document.getElementById("display");

function Calculate(data) {
  if (data === "AC") {
    equation.innerText = "0";
    return;
  }

  if (data === "C") {
    equation.innerText = equation.innerText.slice(0, -1);

    if (equation.innerText === "") {
      equation.innerText = "0";
    }

    return;
  }

  if (data === "=") {
    let result = eval(equation.innerText);
    equation.innerText = result;
    return;
  }

  if (equation.innerText === "0") {
    equation.innerText = data;
  } else {
    equation.innerText += data;
  }
}

/* Keyboard Support */

document.addEventListener("keydown", function (event) {
  let key = event.key;

  if (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "." ||
    key === "%"
  ) {
    Calculate(key);
  }

  if (key === "Enter") {
    Calculate("=");
  }

  if (key === "Backspace") {
    Calculate("C");
  }

  if (key === "Escape") {
    Calculate("AC");
  }
});
