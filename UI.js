class UI {
  constructor() {
    this.cityName = document.querySelector("#w-city");
    this.temp = document.querySelector("#w-temp");
    this.desc = document.querySelector("#w-desc");
    this.humi = document.querySelector("#w-humi");
  }
  print(cityWeather) {
    this.cityName.textContent = cityWeather.name;
    const celsius = Math.round(parseFloat(cityWeather.main.temp) - 275.15);
    this.temp.innerHTML = `${celsius} &deg;C`;
    this.desc.textContent = cityWeather.weather[0].description;
    this.humi.textContent = cityWeather.main.humidity + `%`;
  }
}
