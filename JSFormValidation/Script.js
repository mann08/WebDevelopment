function submit() {
  const fn = document.getElementById("fullName").value;
  const em = document.getElementById("email").value;
  const ph = document.getElementById("phone").value;

  if (!/^[A-Za-z\s]+$/.test(fn)) {
    document.getElementById("nameError").innerText = "Invalid Full Name";
  }

  if (!/^[A-Za-z\.\_\d]+@gmail.com$/.test(em)) {
    document.getElementById("emailError").innerText = "Invalid Email";
  }

  if (!/^[6-9]\d{9}$/.test(ph)) {
    document.getElementById("phoneError").innerText = "Invalid Phone";
  }
 else {
    console.log("Name :", fullName);
    console.log("Phone :", phone);
    console.log("Email :", email);
    console.log("Password :", password);
  }
}
  document.querySelectorAll(".error").forEach((element) => {
    element.innerText = "";
  });
