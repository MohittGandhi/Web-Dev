//we can only get element when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionsDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "xxxxxxxxxxxxxxxxxxxxxxxxxxxx"; //env variables

  getWeatherBtn.addEventListener("click", async () => {
    let city = cityInput.value.trim();
    if (!city) return;
    //it may through an error
    // server/database can be in antoher continent
    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {}
  });
  //javascript alone is not able to fetch request it requires node enviornment
  async function fetchWeatherData(city) {
    //get the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    //display
    console.log(data);
    const { name, main, weather } = data;
    weatherInfo.classList.remove("hidden");
    cityNameDisplay.textContent = name;
    descriptionsDisplay.textContent = `Temperature: ${main.temp} C`;
    temperatureDisplay.textContent = `Description: ${weather[0].description}`;
  }

  function showError() {
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }
});
