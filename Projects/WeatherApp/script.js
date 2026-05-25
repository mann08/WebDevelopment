const API_KEY = "b2a628a1e470c2a94f644ee2a7846c8b";

document.getElementById("cityName").addEventListener("keydown", function (e) {
  if (e.key === "Enter") getWeather();
});

async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (cityName === "") {
    errorMsg.innerText = "Please enter city name";
    return;
  }

  try {
    errorMsg.innerText = "";

    const GEO_API = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    const geoResponse = await fetch(GEO_API);
    const geoData = await geoResponse.json();

    if (geoData.length === 0) {
      errorMsg.innerText = "City not found";
      return;
    }

    const latitude = geoData[0].lat;
    const longitude = geoData[0].lon;

    const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    const response = await fetch(WEATHER_API);
    const data = await response.json();

    document.getElementById("city").innerText = data.name;
    document.getElementById("temperature").innerText = Math.round(data.main.temp);
    document.getElementById("condition").innerText = data.weather[0].description;

    document.getElementById("feels").innerText = Math.round(data.main.feels_like) + " °C";
    document.getElementById("humidity").innerText = data.main.humidity + "%";
    document.getElementById("wind").innerText = data.wind.speed + " m/s";
    document.getElementById("pressure").innerText = data.main.pressure + " hPa";
    document.getElementById("visibility").innerText = (data.visibility / 1000).toFixed(1) + " km";
    document.getElementById("clouds").innerText = data.clouds.all + "%";

    document.getElementById("sunrise").innerText = getTime(data.sys.sunrise);
    document.getElementById("sunset").innerText = getTime(data.sys.sunset);

    document.getElementById("weatherIcon").src =
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  } catch (error) {
    errorMsg.innerText = "Something went wrong";
  }
}

function getTime(time) {
  return new Date(time * 1000).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit"
  });
}