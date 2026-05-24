const API_KEY = "b2a628a1e470c2a94f644ee2a7846c8b";

async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();

  const { latitude, longitude } = await getGeoLocation(cityName);

  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

  const response = await fetch(WEATHER_API);
  const data = await response.json();

  const temperature = data.main.temp - 273.15;
  const city = data.name;

  document.getElementById("city").innerText = city;

  document.getElementById("temperature").innerText = temperature.toFixed(2);
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
  const response = await fetch(GEO_LOC_API);
  const data = await response.json();

  console.log(data);

  const latitude = data[0].lat;
  const longitude = data[0].lon;

  return { latitude, longitude };
}
