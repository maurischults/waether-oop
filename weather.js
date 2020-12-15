class Weather {
  constructor(city) {
    this.city = city;
    this.key = "d316501f973d45f015e382552e3af831";
  }
  async weatherData() {
    const resp = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        this.city +
        "&appid=" +
        this.key
    );
    const data = await resp.json();
    return data;
  }
}
