async function GetNewJoke() {
  const API_URL = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark";

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

   document.getElementById("setup").innerText = data.joke || data.setup;
    document.getElementById("delivery").innerText = data.delivery ||"";
}
