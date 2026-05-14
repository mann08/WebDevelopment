const form = document.getElementById("registrationFrom");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector("input[name='gender']:checked");
  const qualification = document.getElementById("qualification").value;
  const marks = document.getElementById("marks").value.trim();
  const course = document.getElementById("course").value;
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const pin = document.getElementById("pin").value.trim();

  const timings = [];

  document.querySelectorAll("input[name='timings']:checked").forEach((item) => {
    timings.push(item.value);
  });

  document.getElementById("fullNameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("phoneError").innerText = "";
  document.getElementById("dobError").innerText = "";
  document.getElementById("qualificationError").innerText = "";
  document.getElementById("marksError").innerText = "";
  document.getElementById("courseError").innerText = "";
  document.getElementById("timingsError").innerText = "";
  document.getElementById("addressError").innerText = "";
  document.getElementById("cityError").innerText = "";
  document.getElementById("pinError").innerText = "";

  let isValid = true;

  if (fullName === "") {
    document.getElementById("fullNameError").innerText =
      "Full name is required";
    isValid = false;
  } else if (!/^[A-Za-z ]+$/.test(fullName)) {
    document.getElementById("fullNameError").innerText =
      "Only alphabets are allowed";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required";
    isValid = false;
  }

  if (phone === "") {
    document.getElementById("phoneError").innerText =
      "Mobile number is required";
    isValid = false;
  } else if (!/^[0-9]{10}$/.test(phone)) {
    document.getElementById("phoneError").innerText =
      "Enter valid 10 digit mobile number";
    isValid = false;
  }

  if (dob === "") {
    document.getElementById("dobError").innerText = "Date of birth is required";
    isValid = false;
  }

  if (!gender) {
    document.getElementById("dobError").innerText = "Please select gender";
    isValid = false;
  }

  if (qualification === "") {
    document.getElementById("qualificationError").innerText =
      "Please select qualification";
    isValid = false;
  }

  if (marks === "") {
    document.getElementById("marksError").innerText = "Marks are required";
    isValid = false;
  }

  if (course === "") {
    document.getElementById("courseError").innerText = "Please select course";
    isValid = false;
  }

  if (timings.length === 0) {
    document.getElementById("timingsError").innerText =
      "Please select at least one timing";
    isValid = false;
  }

  if (address === "") {
    document.getElementById("addressError").innerText = "Address is required";
    isValid = false;
  }

  if (city === "") {
    document.getElementById("cityError").innerText = "City is required";
    isValid = false;
  } else if (!/^[A-Za-z ]+$/.test(city)) {
    document.getElementById("cityError").innerText =
      "Only alphabets are allowed";
    isValid = false;
  }

  if (pin === "") {
    document.getElementById("pinError").innerText = "Pin code is required";
    isValid = false;
  } else if (!/^[0-9]{6}$/.test(pin)) {
    document.getElementById("pinError").innerText =
      "Enter valid 6 digit pin code";
    isValid = false;
  }

  if (isValid) {
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("DOB:", dob);
    console.log("Gender:", gender.value);
    console.log("Qualification:", qualification);
    console.log("Marks:", marks);
    console.log("Course:", course);
    console.log("Timings:", timings);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("Pin Code:", pin);

    alert("Form submitted successfully!");
    form.reset();
  }
});

form.addEventListener("reset", function () {
  document.getElementById("fullNameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("phoneError").innerText = "";
  document.getElementById("dobError").innerText = "";
  document.getElementById("qualificationError").innerText = "";
  document.getElementById("marksError").innerText = "";
  document.getElementById("courseError").innerText = "";
  document.getElementById("timingsError").innerText = "";
  document.getElementById("addressError").innerText = "";
  document.getElementById("cityError").innerText = "";
  document.getElementById("pinError").innerText = "";
});
