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
  const response =
    await fetch(`http://api.weatherstack.com/current?access_key=56acd07adde1fc65d0808e1dde9d7b2a&query=
    ${city}`);

  const weather = await response.json();
  console.log(weather);

  if (page === 1) {
    weatherEl.innerHTML = "";
  }

  const extraInfoEl = document.createElement("div");
  extraInfoEl.classList.add("extra_info");
  weatherEl.appendChild(extraInfoEl);

  if (weather.error && weather.error.code === 104) {
    const errorInfo = document.createElement("p");
    errorInfo.classList.add("description");
    errorInfo.innerText =
      "Our monthly API request volume has been reached. Sorry for the inconvenience";
    weatherEl.insertBefore(errorInfo, extraInfoEl);
  } else if (weather.error && weather.error.code === 601) {
    const errorInfo = document.createElement("p");
    errorInfo.classList.add("description");
    errorInfo.innerText =
      "Either the city value is empty or spelling is incorrect. Please check and try again later.";
    weatherEl.insertBefore(errorInfo, extraInfoEl);
  } else if (weather.error && weather.error.code === 615) {
    const errorInfo = document.createElement("p");
    errorInfo.classList.add("description");
    errorInfo.innerText =
      "An invalid value was specified. Write a valid city value and try again.";
    weatherEl.insertBefore(errorInfo, extraInfoEl);
  } else {
    let image = weather.current.weather_icons[0];
    console.log(image);
    let temp = weather.current.temperature;
    let descp = weather.current.weather_descriptions[0];
    let humidity = weather.current.humidity;
    let windSpeed = weather.current.wind_speed;
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
