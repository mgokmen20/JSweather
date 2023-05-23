const url = "https://api.openweathermap.org/data/2.5/";
const key = "73dd92dcfc2143eee65bf0f5ed7b76c4";   //API KEY Adress : https://openweathermap.org/weather-conditions

const setQuery = (e) => {
  if (e.keyCode == "13") getResult(searchBar.value);
};
const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (result) => {
  let city = document.querySelector(".city");
  city.innerText = `${result.name}, ${result.sys.country}`;
  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)} °C`;

  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description;

  changeBackground(desc.innerText);              //* we call Change Background function
  let minmax = document.querySelector(".minmax");
  minmax.innerText = `${Math.round(result.main.temp_min)} °C / ${Math.round(
    result.main.temp_max
  )} °C`;
};

function changeBackground(desc) {
  const body = document.querySelector("body");
  const icon = document.querySelector(".icon");

  switch (desc) {
    case "clear sky":
      body.style.backgroundImage = "url('img/clear sky.jpg')";
      icon.style.backgroundImage =
        "url('https://openweathermap.org/img/wn/01d@2x.png')";
      break;
    case "broken clouds":
      body.style.backgroundImage = "url('img/broken clouds.jpg')";
      icon.style.backgroundImage =
        "url('https://openweathermap.org/img/wn/04d@2x.png')";
      break;
    case "rain":
      body.style.backgroundImage = "url('img/lightrainy.jpg')";
      icon.style.backgroundImage =
        "url('https://openweathermap.org/img/wn/10d@2x.png')";
      break;
    case "scattered clouds":
      body.style.backgroundImage = "url('img/scattered clouds.jpg')";
      icon.style.backgroundImage =
        "url('https://openweathermap.org/img/wn/03d@2x.png')";
      break;
    case "snow":
      body.style.backgroundImage = "url('img/snow.jpg')";
      icon.style.backgroundImage =
        "url('https://openweathermap.org/img/wn/13d@2x.png')";
      break;
    case "few clouds":
      body.style.backgroundImage = "url('img/few clouds.jpg')";
      icon.style.backgroundImage =
        "url('https://openweathermap.org/img/wn/02d@2x.png')";
      break;
    case "overcast clouds":
      body.style.backgroundImage = "url('img/overcast clouds.jpg')";
      icon.style.backgroundImage =
        "url('https://openweathermap.org/img/wn/04d@2x.png')";
      break;
    case "mist":
      body.style.backgroundImage = "url('img/mist.jpg')";
      icon.style.backgroundImage =
        "url('https://openweathermap.org/img/wn/50d@2x.png')";
      break;
    case "light rain":
      body.style.backgroundImage = "url('img/lightrainy2.jpg')";
      icon.style.backgroundImage =
        "url('https://openweathermap.org/img/wn/10d@2x.png')";
      break;
    case "heavy intensity rain":
      body.style.backgroundImage = "url('img/shower rain.jpg')";
      icon.style.backgroundImage =
        "url('https://openweathermap.org/img/wn/10d@2x.png')";
      break;
    case "thunderstorm":
      body.style.backgroundImage = "url('img/shower rain.jpg')";
      icon.style.backgroundImage =
        "url('https://openweathermap.org/img/wn/11d@2x.png')";
      break;

    default:
      body.style.backgroundImage = "url('img/bg1.jpg')";
      break;
  }
}

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);


