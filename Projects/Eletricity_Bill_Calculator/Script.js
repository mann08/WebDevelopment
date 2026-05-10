document.getElementById("calculateBtn").addEventListener("click", function () {
  const unitsInput = document.getElementById("unitsInput").value;
  const units = parseInt(unitsInput);

  if (isNaN(units) || units < 0) {
    alert("Please enter a valid positive number of units.");
    return;
  }

  let subtotal = 0;
  let breakdownHTML = "";

  // Slab Configuration based on assignment
  const slabs = [
    { limit: 50, rate: 0.5, label: "First 50 units" },
    { limit: 150, rate: 0.75, label: "Next 150 units (51-200)" },
    { limit: 250, rate: 1.2, label: "Next 250 units (201-450)" },
    { limit: Infinity, rate: 1.5, label: "Above 450 units" },
  ];

  let remainingUnits = units;

  slabs.forEach((slab) => {
    let unitsInThisSlab = 0;

    if (remainingUnits > 0) {
      unitsInThisSlab = Math.min(remainingUnits, slab.limit);
      remainingUnits -= unitsInThisSlab;
    }

    let slabCharge = unitsInThisSlab * slab.rate;
    subtotal += slabCharge;

    // Add to itemized breakdown
    breakdownHTML += `
            <div class="slab-row">
                <span>${slab.label} <small class="text-muted">(@ ₹${slab.rate.toFixed(2)})</small></span>
                <span>${unitsInThisSlab} units = <strong>₹${slabCharge.toFixed(2)}</strong></span>
            </div>
        `;
  });

  // Final calculations
  const surcharge = subtotal * 0.2;
  const grandTotal = subtotal + surcharge;

  // Update UI
  document.getElementById("slabBreakdown").innerHTML = breakdownHTML;
  document.getElementById("subtotalVal").innerText = `₹${subtotal.toFixed(2)}`;
  document.getElementById("surchargeVal").innerText =
    `₹${surcharge.toFixed(2)}`;
  document.getElementById("grandTotalVal").innerText =
    `₹${grandTotal.toFixed(2)}`;

  // Show results
  document.getElementById("resultArea").style.display = "block";
});

// Reset Logic
document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("unitsInput").value = "";
  document.getElementById("resultArea").style.display = "none";
});
