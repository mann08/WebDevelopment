const country1 = document.getElementById("country1");
const country2 = document.getElementById("country2");
const flag1 = document.getElementById("flag1");
const flag2 = document.getElementById("flag2");
const orgAmount = document.getElementById("orgAmount");
const newAmount = document.getElementById("newAmount");
const rateInfo = document.getElementById("rateInfo");
const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");

const fromError = document.getElementById("fromError");
const toError = document.getElementById("toError");
const amountError = document.getElementById("amountError");

const placeholderFlag =
  "https://via.placeholder.com/64/e2e8f0/64748b?text=%F0%9F%8C%90";

function getParts(value) {
  const [currency, code] = value.split(",");
  return { currency, code };
}

function updateFlag(select, img) {
  if (!select.value) {
    img.src = placeholderFlag;
    return;
  }

  const { code } = getParts(select.value);
  img.src = `https://flagsapi.com/${code}/flat/64.png`;
}

function clearErrors() {
  fromError.textContent = "";
  toError.textContent = "";
  amountError.textContent = "";
}

function validate() {
  clearErrors();

  let valid = true;
  const amount = Number(orgAmount.value);

  if (!country1.value) {
    fromError.textContent = "Please select a 'From' country.";
    valid = false;
  }

  if (!country2.value) {
    toError.textContent = "Please select a 'To' country.";
    valid = false;
  }

  if (orgAmount.value.trim() === "") {
    amountError.textContent = "Please enter an amount.";
    valid = false;
  } else if (amount <= 0) {
    amountError.textContent = "Amount must be greater than zero.";
    valid = false;
  }

  return valid;
}

async function loadCountries() {
  try {
    const res = await fetch("codes.json");
    const data = await res.json();

    const unique = [];
    const seen = new Set();

    data.forEach((item) => {
      if (!item.Currency_Code) return;

      const key = `${item.Country}-${item.Currency_Code}-${item.Country_Code}`;
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(item);
      }
    });

    unique.sort((a, b) => a.Country.localeCompare(b.Country));

    unique.forEach((item) => {
      const option1 = document.createElement("option");
      option1.value = `${item.Currency_Code.toLowerCase()},${item.Country_Code}`;
      option1.textContent = `${item.Country} - ${item.Currency_Code.toUpperCase()}`;

      const option2 = option1.cloneNode(true);

      country1.appendChild(option1);
      country2.appendChild(option2);
    });

    country1.value = "usd,US";
    country2.value = "inr,IN";

    updateFlag(country1, flag1);
    updateFlag(country2, flag2);
  } catch {
    newAmount.textContent = "Unable to load country list.";
  }
}

async function convertCurrency() {
  if (!validate()) return;

  const amount = Number(orgAmount.value);
  const from = getParts(country1.value);
  const to = getParts(country2.value);

  newAmount.textContent = "";
  rateInfo.textContent = "";
  convertBtn.textContent = "Converting...";
  convertBtn.disabled = true;

  try {
    if (from.currency === to.currency) {
      newAmount.textContent = `${amount.toFixed(2)} ${to.currency.toUpperCase()}`;
      rateInfo.textContent = `1 ${from.currency.toUpperCase()} = 1 ${to.currency.toUpperCase()}`;
      return;
    }

    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from.currency}.json`;
    const res = await fetch(url);

    if (!res.ok) throw new Error();

    const data = await res.json();
    const rate = data[from.currency][to.currency];

    if (!rate) throw new Error();

    const converted = amount * rate;

    newAmount.textContent = `${converted.toFixed(2)} ${to.currency.toUpperCase()}`;
    rateInfo.textContent = `1 ${from.currency.toUpperCase()} = ${rate.toFixed(4)} ${to.currency.toUpperCase()}`;
  } catch {
    newAmount.textContent = "Something went wrong. Please try again.";
  } finally {
    convertBtn.textContent = "Convert";
    convertBtn.disabled = false;
  }
}

country1.addEventListener("change", () => {
  updateFlag(country1, flag1);
  clearErrors();
});

country2.addEventListener("change", () => {
  updateFlag(country2, flag2);
  clearErrors();
});

orgAmount.addEventListener("input", clearErrors);

convertBtn.addEventListener("click", convertCurrency);

swapBtn.addEventListener("click", () => {
  const temp = country1.value;
  country1.value = country2.value;
  country2.value = temp;

  updateFlag(country1, flag1);
  updateFlag(country2, flag2);

  if (orgAmount.value.trim() !== "") {
    convertCurrency();
  }
});

flag1.onerror = () => {
  flag1.src = placeholderFlag;
};

flag2.onerror = () => {
  flag2.src = placeholderFlag;
};

loadCountries();
