const key = '63bd84f73c0b0036ac56402d126fccdb';

function dataScreen(data) {
    document.querySelector('.city').innerHTML = 'Tempo em ' + data.name
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + '°C'
    document.querySelector('.weather-text').innerHTML = data.weather[0].description
    document.querySelector('.humidity').innerHTML = 'Umidade: ' + data.main.humidity + '%'
    document.querySelector('.weather-image').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    console.log(data)
}

async function searchCity(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(result => result.json())

    dataScreen(data)
}

function clickButton() {
    let city = document.querySelector('.input-city').value;

    searchCity(city)
}