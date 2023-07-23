const cityEl = document.querySelector(".city");
const buttonEl = document.querySelector(".btn");
const weatherEl = document.querySelector(".weather");
const formEl = document.querySelector("form");

let page = 1;

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  getWeather();
});

async function getWeather() {
  const city = cityEl.value;
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=2b18032e5c5b44168d175427232307&q=${city}`
  );

  const weather = await response.json();

  if (page === 1) {
    weatherEl.innerHTML = "";
  }

  const extraInfoEl = document.createElement("div");
  extraInfoEl.classList.add("extra_info");
  weatherEl.appendChild(extraInfoEl);

  if (weather.error && weather.error.code === 2007) {
    const errorInfo = document.createElement("p");
    errorInfo.classList.add("description");
    errorInfo.innerText =
      "Our monthly API request volume has been reached. Sorry for the inconvenience";
    weatherEl.insertBefore(errorInfo, extraInfoEl);
  } else if (weather.error && weather.error.code === 1003) {
    const errorInfo = document.createElement("p");
    errorInfo.classList.add("description");
    errorInfo.innerText =
      "The city value is empty or no location found matching parameter";
    weatherEl.insertBefore(errorInfo, extraInfoEl);
  } else if (weather.error && weather.error.code === 1006) {
    const errorInfo = document.createElement("p");
    errorInfo.classList.add("description");
    errorInfo.innerText = "No matching location found.";
    weatherEl.insertBefore(errorInfo, extraInfoEl);
  } else {
    let image = weather.current.condition.icon;
    let temp = weather.current.temp_c;
    let descp = weather.current.condition.text;
    let humidity = weather.current.humidity;
    let windSpeed = weather.current.wind_mph;
    let windDirection = weather.current.wind_dir;
    const weatherImage = document.createElement("img");
    weatherImage.src = image;
    weatherImage.alt = "logo";
    weatherImage.classList.add("weather_image");
    weatherEl.insertBefore(weatherImage, extraInfoEl);
    const temperature = document.createElement("h1");
    temperature.classList.add("temp");
    temperature.innerText = `${temp}°C`;
    weatherEl.insertBefore(temperature, extraInfoEl);
    const description = document.createElement("p");
    description.classList.add("description");
    description.innerText = descp;
    weatherEl.insertBefore(description, extraInfoEl);
    const humidityEl = document.createElement("p");
    const windspeedEl = document.createElement("p");
    const windDirectionEl = document.createElement("p");
    humidityEl.innerText = `Humidity : ${humidity}%`;
    windspeedEl.innerText = `Wind Speed : ${windSpeed} m/s`;
    windDirectionEl.innerText = `Wind Direction : ${windDirection}`;
    extraInfoEl.appendChild(humidityEl);
    extraInfoEl.appendChild(windspeedEl);
    extraInfoEl.appendChild(windDirectionEl);
  }
}
