async function GetNewJoke() {
  const API_URL = "https://official-joke-api.appspot.com/jokes/random";

  const response = await fetch(API_URL);
  // console.log(response);

  const data = await response.json();
  // console.log(data);

  //   if (data.type === "single") {
  //     document.getElementById("setup").innerText = data.joke;
  //     document.getElementById("delivery").innerText = "";
  //   } else {
  //     document.getElementById("setup").innerText = data.setup;
  //     document.getElementById("delivery").innerText = data.delivery;
  //   }

  document.getElementById("setup").innerText ="Setup : " + (data.joke || data.setup);
  document.getElementById("delivery").innerText ="Punchline: " + (data.punchline || "");
  document.getElementById("type").innerText = "Type: " + data.type;
  document.getElementById("id").innerText = "ID: " + data.id;
}
