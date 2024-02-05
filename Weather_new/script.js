let detailPart = document.querySelector('.detailPart');
  let city = document.querySelector('#cityName');
  let img = document.querySelector('.wheatherImg');
  let title = document.querySelector('.title');

  let temp = document.querySelector('.temp');
  let feelslike = document.querySelector('.feels-like');
  let description = document.querySelector('.description');
  let windSpeed = document.querySelector('.wind-speed');
  let humidity = document.querySelector('.humidity');



  //----------------
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let cityName = city.value;
    getWeather(cityName);

    detailPart.classList.add('Active');

  })

  // async await function for get weather data

  async function getWeather(cityName) {
    const apikey = `d5e1c34ea4da2c099b42471a17bcdf09`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`;
    //-----------
    try {
      let response = await fetch(url);
      let data = await response.json();
      if (!response.ok) {
        throw new Error(' Please inter valid city name ');

      }
      //dynamic value asignment---
      let imgIcon = data.weather[0].icon;
      img.src = `https://openweathermap.org/img/wn/${imgIcon}.png`;
      temp.innerText = Math.round(data.main.temp) + '°C';
      title.innerText = data.name;
      feelslike.textContent = "Feels-like-" + Math.round(data.main.feels_like) + '°C';
      description.textContent = data.weather[0].description;
      windSpeed.textContent = data.wind.speed + 'm/s';
      humidity.textContent = data.main.humidity + '%';

      //console.log(data);

    } catch (error) {
      alert(error.message);
    }
  }
  //--------------------
  city.addEventListener('input', () => {
    detailPart.classList.remove('Active');

  })