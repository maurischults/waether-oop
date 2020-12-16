const weather = new Weather("Tartu linn");
const ui = new UI();
//default city waether
document.addEventListener("DOMContentLoaded", drawWeather);

// change city
const changeBtn = document.querySelector("#w-change");
changeBtn.addEventListener("click", changeWeather);

function changeWeather() {
  const city = document.querySelector("#city").value;
  weather.changeCityName(city);
  drawWeather();
  $("#changeCity").modal("hide");
}

function drawWeather() {
  weather
    .weatherData()
    .then((cityWeather) => {
      ui.print(cityWeather);
    })
    .catch((error) => console.log(error));
}
