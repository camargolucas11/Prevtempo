function getWeather() {
    const apiKey = '1ccc8bf295a0fb23276f06e9f3a9b186';

    const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

    fetch(apiLink)
    .then(Response => Response.json())
    .then(data => {
        const cidadeNome = data.name;
        const temperatura = data.main.temp;
        const wheatherDesc = data.weather[0].description;

        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `<p>Cidade: ${cidadeNome}</p> <p>Temperatura: ${temperatura}°C</p> <p>Tempo: ${wheatherDesc}</p>`;
    })

    .catch(error => {
        console.error('Erro', error);
    });
}

getWeather();
   

    