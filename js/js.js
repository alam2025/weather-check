document.getElementById('submit-btn').addEventListener('click', function (event) {
    const inputValue = document.getElementById('search-field').value;

    //API call
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue + ' &appid=d0c05e33b5edf0629cb90722738492e3')
        .then(res => res.json())
        .then(data => {
            const cityName = data.name;
            const tem = data.main.temp;
            const tempCel = tem - 273.15;
            const temperature = tempCel.toFixed(2);
            const description = data.weather[0].description;
            fitWeather(cityName, temperature, description);

        })

        .catch(error => {
            alert('Please Enter correct city');
        })
})


    .catch(error => {
        alert('Please Enter correct city');
    })

function fitWeather(city, tem, description) {
    document.getElementById('city').innerText = city;
    document.getElementById('temperature').innerText = tem;
    document.getElementById('description').innerText = description;

}