function submitData() {
  var name = document.getElementById("name").value;
  var city = document.getElementById("city").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var card = "<div class='card'>" +
    "<p><b>Name:</b> " + name + "</p>" +
    "<p><b>City:</b> " + city + "</p>" +
    "<p><b>Email:</b> " + email + "</p>" +
    "<p><b>Password:</b> " + password + "</p>" +
    "</div>";

  document.getElementById("output").innerHTML += card;

  document.getElementById("name").value = "";
  document.getElementById("city").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}