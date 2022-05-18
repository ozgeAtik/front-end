fetch(
  "https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id={API_KEY}"
)
  .then((res) => res.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.getElementById("author").innerHTML = `Photo by: ${data.user.name}`;
  });

setInterval(function () {
  const date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString("en-us", {
    timeStyle: "short",
  });
}, 1000);

navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API_KEY}&units=metric`
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Weather data not available");
      }
      return res.json();
    })
    .then((data) => {
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById("weather").innerHTML = `
          <img src=${iconUrl} />
          <p class="weather-temp">${Math.round(data.main.temp)}º</p>
          <p class="weather-city">${data.name}</p>
      `;
    })
    .catch((err) => console.error(err));
});

fetch(`https://uselessfacts.jsph.pl/random.json?language=en`)
  .then((res) => {
    if (!res.ok) {
      throw Error("API data not available");
    }
    return res.json();
  })
  .then((data) => {
    document.getElementById("funfact").innerHTML = data.text;
  });

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => {
    document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `;
    document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆 : $${data.market_data.high_24h.usd}</p>
            <p>👇 : $${data.market_data.low_24h.usd}</p>
        `;
  })
  .catch((err) => console.error(err));
