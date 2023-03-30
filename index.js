
    // your code here

  
let weather = {
    "apiKey":"**************",
    fetchweather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city +
            "&appid="
            +this.apiKey
        )
        .then((response) => {
            if (!response.ok) {
              alert("No weather ⚠️⚠️ found.");
              throw new Error("No weather ⚠️⚠️ found.");
            }
            return response.json();
          })
          .then((data) => this.displayWeather(data));
      },
    // displayWeather:function(data){
    //     const { name } = data;
    //     const { icon, description } = data.weather[0];
    //     const { temp, humidity } = data.main;
    //     const { speed } = data.wind;
    //     console.log(name,icon,description,temp,humidity,speed)

    //     document.querySelector(".city").innerText = "Weather in " + name;
    

    //     document.querySelector(".icon").src =
    //       "https://openweathermap.org/img/wn/" + icon + ".png";
    //     document.querySelector(".description").innerText = description;
    //     document.querySelector(".temp").innerText = temp + "°C";
    //     document.querySelector(".Humidity").innerText =
    //       "Humidity: " + humidity + "%";
    //     document.querySelector(".wind").innerText =
    //       "Wind speed: " + speed + " km/h";
    //     document.querySelector(".weather").classList.remove("loading");
    //     document.body.style.backgroundImage =
    //       "url('https://source.unsplash.com/1600x900/?landscape')";
    //   },
    // ===========================================

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const tempCelsius = (temp - 273.15).toFixed(1); // Convert Kelvin to Celsius
        const tempFahrenheit = ((temp - 273.15) * 9 / 5 + 32).toFixed(1); // Convert Kelvin to Fahrenheit
        console.log(name, icon, description, tempCelsius, tempFahrenheit, humidity, speed);
    
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
          "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = tempCelsius + "°C / " + tempFahrenheit + "°F"; // Display temperature in Celsius and Fahrenheit
        document.querySelector(".Humidity").innerText =
          "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
          "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading.....");
        // document.body.style.backgroundImage =
        //   "url('https://source.unsplash.com/1600x900/?landscape')";
          const backgroundUrl = `https://source.unsplash.com/1600x900/?${name}`;
    document.body.style.backgroundImage = `url('${backgroundUrl}')`;
    },
    
      search: function () {
        this.fetchweather(document.querySelector(".search-bar").value);
      },
      
    };
    
    document.querySelector(".search button").addEventListener("click", function () {
      weather.search();
    });
    
    document
      .querySelector(".search-bar")
      .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          weather.search();
        }
      });
    
    weather.fetchweather("chandigarh");
// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});


