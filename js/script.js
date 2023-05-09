const key = '63bd84f73c0b0036ac56402d126fccdb';

function dataScreen(data) {
    document.querySelector('.city').innerHTML = 'Tempo em ' + data.name
    console.log(data)
}

async function searchCity(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br`).then(result => result.json())

    dataScreen(data)
}

function clickButton() {
    let city = document.querySelector('.input-city').value;

    searchCity(city)
}