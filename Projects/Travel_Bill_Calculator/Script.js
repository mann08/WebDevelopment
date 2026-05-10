document.getElementById("calculateBtn").addEventListener("click", function () {
  const kmInput = document.getElementById("kmInput");
  const feedback = document.getElementById("validationFeedback");
  const output = document.getElementById("outputSection");
  const km = parseFloat(kmInput.value);

  // 1. Validation
  if (isNaN(km) || km < 0) {
    kmInput.classList.add("is-invalid");
    feedback.style.display = "block";
    output.classList.add("d-none");
    return;
  } else {
    kmInput.classList.remove("is-invalid");
    feedback.style.display = "none";
    output.classList.remove("d-none");
  }

  // 2. Logic & Slab Configuration
  // Slab 1: First 10km @ Rs. 11
  // Slab 2: Rest @ Rs. 10
  let totalBill = 0;
  let breakdown = [];

  if (km === 0) {
    totalBill = 0;
    breakdown.push("0 km × Rs. 0 = Rs. 0");
  } else {
    // First 10km slab
    let firstSlabKm = Math.min(km, 10);
    let firstSlabCost = firstSlabKm * 11;
    totalBill += firstSlabCost;
    breakdown.push(
      `${firstSlabKm} km × Rs. 11 = Rs. ${firstSlabCost.toLocaleString()}`,
    );

    // Remaining slab
    if (km > 10) {
      let secondSlabKm = km - 10;
      let secondSlabCost = secondSlabKm * 10;
      totalBill += secondSlabCost;
      breakdown.push(
        `${secondSlabKm.toFixed(1)} km × Rs. 10 = Rs. ${secondSlabCost.toLocaleString()}`,
      );
    }
  }

  // 3. UI Update
  document.getElementById("totalDisplay").innerText =
    `Rs. ${totalBill.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

  const breakdownList = document.getElementById("breakdownList");
  breakdownList.innerHTML = breakdown
    .map(
      (item) =>
        `<div class="list-group-item d-flex justify-content-between align-items-center">
            ${item}
        </div>`,
    )
    .join("");
});
