document.getElementById("calculateBtn").addEventListener("click", function () {
  // Get values from inputs
  const bill = parseFloat(document.getElementById("billAmount").value);
  const servicePercent = parseFloat(
    document.getElementById("serviceQuality").value,
  );
  const people = parseInt(document.getElementById("totalPeople").value);

  // Basic validation
  if (isNaN(bill) || isNaN(people) || people <= 0) {
    alert("Please enter valid numbers for bill and people.");
    return;
  }

  // Logic: (Bill + (Bill * Tip%)) / People
  const totalTip = bill * servicePercent;
  const totalWithTip = bill + totalTip;
  const amountPerPerson = totalWithTip / people;

  // Display the result
  const resultSection = document.getElementById("resultSection");
  const displayAmount = document.getElementById("perPersonAmount");

  // toFixed(2) ensures we see two decimal places (e.g., 25.00)
  displayAmount.innerText = `${amountPerPerson.toFixed(2)}₹`;
  resultSection.style.display = "block";
});
