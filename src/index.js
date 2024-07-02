/* eslint-disable no-unused-vars */
import { current, forecast, search } from "./app";

import {
  suggestionContainer,
  container,
  bgContainer,
  hourContainer,
  dayContainer,
  searchContainer,
  searchInput,
  degreeChange,
} from "./dom";
import { getCurrent } from "./api";
import rainImage from "./assets/rain.jpg";
import cloudyImage from "./assets/cloudy.jpg";
import summerImage from "./assets/summer.jpg";
import snowImage from "./assets/snow.jpg";
import mistImage from "./assets/mist.jpg";
import lightRainImage from "./assets/lightRain.jpg";

import "./styles.css";

document.addEventListener("click", () => {
  suggestionContainer.innerHTML = "";
});

searchInput.addEventListener("input", renderSearch);

let currentUnit = "°C";

degreeChange.addEventListener("click", () => {
  if (currentUnit === "°C") {
    currentUnit = "°F";
    degreeChange.textContent = "Switch to °C";
  } else {
    currentUnit = "°C";
    degreeChange.textContent = "Switch to °F";
  }
  updateTemperatureUnit();
});

async function updateTemperatureUnit() {
  const location = document
    .querySelector("#location")
    ?.textContent?.split(",")[0];
  const region = document.querySelector("#location")?.textContent.split(",")[1];
  const country = document
    .querySelector("#location")
    ?.textContent.split(",")[2];

  if (location) {
    renderCurrent(location, region, country);
    renderForecastByHour(location);
    renderForecastByDay(location);
  }
}

async function renderSearch(event) {
  const inputValue = event.target.value.trim();

  if (inputValue.length >= 3) {
    try {
      const result = await search(inputValue);
      suggestionContainer.innerHTML = "";
      result.suggestions.forEach((suggestion) => {
        const suggestionDiv = document.createElement("div");
        suggestionDiv.classList.add("suggestion");
        suggestionDiv.innerHTML = `<p><strong id="location-name">${suggestion.name}</strong>, <span id="region-name">${suggestion.region}</span>, <span id="country-name">${suggestion.country}</span></p>`;
        suggestionDiv.addEventListener("click", () => {
          renderCurrent(suggestion.name, suggestion.region, suggestion.country);
          setBackgroundBasedOnLocation(suggestion.name);
          renderForecastByHour(suggestion.name);
          renderForecastByDay(suggestion.name);
        });
        suggestionContainer.appendChild(suggestionDiv);
      });
      searchContainer.appendChild(suggestionContainer);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  } else {
    suggestionContainer.innerHTML = "";
  }
}

export async function renderCurrent(location, region, country) {
  suggestionContainer.innerHTML = "";
  const today = document.createElement("div");
  today.innerHTML = "";
  bgContainer.innerHTML = "";
  const result = await current(location);
  let temp;
  if (currentUnit === "°F") temp = result.temperatureF;
  else temp = result.temperatureC;

  const details = document.createElement("div");
  let min;
  if (result.localMinutes < 10) {
    min = "0" + `${result.localMinutes}`;
  } else {
    min = `${result.localMinutes}`;
  }
  details.innerHTML = `<p id='location'>${location}, ${region}, ${country}</p><p id="current-time">${result.localDate}, ${result.localHour}:${min}</p><p class="temperature">${temp}</p>`;
  details.classList.add("details");

  const desc = document.createElement("div");
  desc.classList.add("desc");
  desc.innerHTML = `<img id="today-image" src="${result.icon}"><p id="today-description">${result.description}</p>`;

  today.appendChild(details);
  today.appendChild(desc);
  today.classList.add("today");
  bgContainer.appendChild(today);
}

export async function renderForecastByHour(location) {
  const result = await forecast(location);
  container.innerHTML = "";

  const hourlyForecast = document.createElement("p");
  hourlyForecast.textContent = "Hourly Forecast";
  hourlyForecast.classList.add("hourly-forecast");

  container.appendChild(hourlyForecast);
  hourContainer.innerHTML = ""; // Clear previous content
  result.hourlyData.forEach((hour) => {
    let temp;
    if (currentUnit === "°F") temp = hour.temperatureF;
    else temp = hour.temperatureC;
    const hourDiv = document.createElement("div");
    hourDiv.classList.add("hourlyData");
    hourDiv.innerHTML = `<p>${hour.time}:00</p> <img src=${hour.icon}> <p>${hour.description}</p> <div class="temp"> <p>${temp}</p></div>`;
    hourContainer.appendChild(hourDiv);
  });
  container.appendChild(hourContainer);
}

export async function renderForecastByDay(location) {
  const result = await forecast(location);
  console.log(result);

  const dailyForecast = document.createElement("p");
  dailyForecast.textContent = "Daily Forecast";
  dailyForecast.classList.add("daily-forecast");

  container.appendChild(dailyForecast);
  dayContainer.innerHTML = ""; // Clear previous content
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  result.dailyData.forEach((day) => {
    let minTemp, maxTemp;
    if (currentUnit === "°F") {
      minTemp = day.maxTempF;
      maxTemp = day.maxTempF;
    } else {
      minTemp = day.maxTempC;
      maxTemp = day.maxTempC;
    }
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("dailyData");
    dayDiv.innerHTML = `<p>${
      daysOfWeek[new Date(day.date).getDay()]
    }</p><img src="${day.icon}" alt="${day.description}"><p>${
      day.description
    }</p><div class="temp"><p>${minTemp} / ${maxTemp}</p></div>`;
    dayContainer.appendChild(dayDiv);
  });
  container.appendChild(dayContainer);
}

async function getTimeAndDay(location) {
  try {
    const currentWeather = await current(location);
    const currentForecast = await forecast(location);
    const hour = currentWeather.localHour;
    const min = currentWeather.localMinutes;
    console.log(hour);
    const sunriseHour = parseTime12to24(currentForecast.sunrise); // Convert 12-hour to 24-hour
    const sunriseMin = parseMinutes(currentForecast.sunrise);
    const sunsetHour = parseTime12to24(currentForecast.sunset); // Convert 12-hour to 24-hour
    const sunsetMin = parseMinutes(currentForecast.sunset);

    if (
      (hour > sunriseHour || (hour === sunriseHour && min >= sunriseMin)) &&
      (hour < sunsetHour || (hour === sunsetHour && min < sunsetMin))
    ) {
      return "day";
    } else {
      return "night";
    }
  } catch (error) {
    console.error("Error fetching time and day:", error);
    return "day";
  }
}

export async function setBackgroundBasedOnLocation(location) {
  try {
    document.body.classList.remove(
      "day",
      "night",
      "rain",
      "cloudy",
      "clear",
      "snow",
      "mist",
      "drizzle"
    );
    const timeOfDay = await getTimeAndDay(location);
    const weather = await getCurrent(location);

    let backgroundImageUrl = "";
    let overlayColor = "";

    let desc = weather.description.toLowerCase();

    if (
      (desc.includes("patchy") && desc.includes("rain")) ||
      (desc.includes("light") && desc.includes("rain")) ||
      desc.includes("drizzle")
    ) {
      backgroundImageUrl = `url('${lightRainImage}')`;
      document.body.classList.add("drizzle");
    } else if (desc.includes("rain") || desc.includes("thundery")) {
      backgroundImageUrl = `url('${rainImage}')`;
      document.body.classList.add("rain");
    } else if (desc.includes("cloudy") || desc.includes("overcast")) {
      backgroundImageUrl = `url('${cloudyImage}')`;
      document.body.classList.add("cloudy");
    } else if (desc.includes("clear") || desc.includes("sunny")) {
      backgroundImageUrl = `url('${summerImage}')`;
      document.body.classList.add("clear");
    } else if (desc.includes("snow")) {
      backgroundImageUrl = `url('${snowImage}')`;
      document.body.classList.add("snow");
    } else if (desc.includes("mist")) {
      backgroundImageUrl = `url('${mistImage}')`;
      document.body.classList.add("mist");
    }

    if (timeOfDay == "day") {
      overlayColor = "rgba(0, 0, 0, 0.3)";
    } else {
      document.body.classList.add(timeOfDay);
      overlayColor = "";
      document.body.classList.remove(
        "day",
        "rain",
        "cloudy",
        "clear",
        "snow",
        "mist",
        "drizzle"
      );
      overlayColor = "rgba(1, 6, 25, 0.83)";
      console.log(overlayColor);
    }

    console.log(overlayColor);
    bgContainer.style.backgroundImage = `linear-gradient(${overlayColor}, ${overlayColor}),${backgroundImageUrl}`;
    console.log(overlayColor);
    console.log(bgContainer);
    bgContainer.style.backgroundSize = "cover"; // Ensures the background covers the container
    bgContainer.style.backgroundPosition = "center"; // Centers the background image
  } catch (error) {
    console.error("Error setting background based on location:", error);
  }
}

function parseTime12to24(time12) {
  // Example time12 format: "06:01 AM"
  const [time, period] = time12.split(" ");
  let [hour, minute] = time.split(":");
  hour = parseInt(hour, 10);
  minute = parseInt(minute, 10);

  if (period === "PM" && hour !== 12) {
    hour += 12;
  } else if (period === "AM" && hour === 12) {
    hour = 0;
  }

  return hour;
}

function parseMinutes(time12) {
  // eslint-disable-next-line no-unused-vars
  const [time, period] = time12.split(" ");
  let [hour, minute] = time.split(":");
  minute = parseInt(minute, 10);
  return minute;
}


const defaultLocation = "Surat";
const defaultRegion = "Gujarat";
const defaultCountry = "India";

// Render the default current weather information
renderCurrent(defaultLocation, defaultRegion, defaultCountry);

setBackgroundBasedOnLocation(defaultLocation);

renderForecastByHour(defaultLocation);
renderForecastByDay(defaultLocation);