const current =
  "https://api.weatherapi.com/v1/current.json?key=1264af36d4f441d0b7e114002242006&q=";
const forecast =
  "http://api.weatherapi.com/v1/forecast.json?key=1264af36d4f441d0b7e114002242006&days=7&q=";
const search =
  "http://api.weatherapi.com/v1/search.json?key=1264af36d4f441d0b7e114002242006&q=";

export async function getCurrent(location) {
  let url = current + location;
  const response = await fetch(url,{mode: 'cors'});
  const weatherData = await response.json();
  let weatherObj = {
    localDate: new Date(weatherData.location.localtime).toDateString(),
    localHour: new Date(weatherData.location.localtime).getHours(),
    localMinutes: new Date(weatherData.location.localtime).getMinutes(), 
    location: weatherData.location.name,
    temperatureC: weatherData.current.temp_c + "°C",
    temperatureF: weatherData.current.temp_f + "°F",
    description: weatherData.current.condition.text,
    icon: weatherData.current.condition.icon,
  };
  return weatherObj;
}

export async function getForecast(location) {
  let url = forecast + location;
  const response = await fetch(url,{mode: 'cors'});
  const weatherData = await response.json();
  const currentHour = new Date().getHours();
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-unused-vars

  const todayHours = weatherData.forecast.forecastday[0].hour;
  const tomorrowHours = weatherData.forecast.forecastday[1]?.hour || [];
  const combinedHours = todayHours.concat(tomorrowHours);

  let weatherObj = {
    sunrise :weatherData.forecast.forecastday[0].astro.sunrise,
    sunset : weatherData.forecast.forecastday[0].astro.sunset,
    hourlyData: combinedHours
      .slice(currentHour, currentHour + 6)
      .map((hour) => ({
        time: new Date(hour.time).getHours(),
        temperatureC: hour.temp_c + "°C",
        temperatureF: hour.temp_f + "°F",
        description: hour.condition.text,
        icon: hour.condition.icon,
      })),
    dailyData: weatherData.forecast.forecastday.slice(0, 6).map((day) => ({
      date: new Date(day.date).toDateString(),
      minTempC: day.day.mintemp_c + "°C",
      minTempF: day.day.mintemp_f + "°F",
      maxTempC: day.day.maxtemp_c + "°C",
      maxTempF: day.day.maxtemp_f + "°F",
      description: day.day.condition.text,
      icon: day.day.condition.icon,
    })),
  };
  return weatherObj;
}

export async function getSearch(location) {
  let url = search + location;
  const response = await fetch(url,{mode: 'cors'});
  const weatherData = await response.json();
  let weatherObj = {
    suggestions: weatherData.map((item) => ({
      name: item.name,
      region: item.region,
      country: item.country,
    })),
  };
  return weatherObj;
}
