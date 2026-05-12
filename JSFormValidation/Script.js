function submit() {
  let fullName = document.getElementById("fullName").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log("Name :", fullName);
  console.log("Phone :", phone);
  console.log("Email :", email);
  console.log("Password :", password);

  document.getElementById("fullName").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}
