const searchForm = document.querySelector(".searchForm");
const cityValue = document.querySelector(".cityValue");
const card = document.querySelector(".card")
const apiKey = "32bbbbc4b75a82950e260f152f6a0984";

searchForm.addEventListener("submit", async event => {

    event.preventDefault(); 

    const city = cityValue.value;

    if(city){

        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.log(error)
            displayError(error)
        }
    }
    else{
        displayError("ENTER THE CITY NAME!")
    }
});

async function getWeatherData(city){
    const response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)

    if(!response.ok)
    {
        throw new Error("CITY NOT FOUND")
    }

    return await response.json();
}

function displayWeatherInfo(data){
    const { name : city,
            main:{humidity,temp},
            weather : [{description,id}] } = data;

    card.textContent = ""
    card.style.display="flex"

    const cityDisplay = document.createElement("h1");
    const weatherDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descrptionDisplay = document.createElement("p");
    const emojiDisplay = document.createElement("p");

    cityDisplay.textContent = city.toUpperCase();
    weatherDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`
    humidityDisplay.textContent = `HUMIDITY:${humidity}%`
    descrptionDisplay.textContent = `${description.toUpperCase()}`;
    emojiDisplay.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityName");
    weatherDisplay.classList.add("weather")
    humidityDisplay.classList.add("humidity")
    descrptionDisplay.classList.add("description");
    emojiDisplay.classList.add("emoji")

    card.appendChild(cityDisplay)
    card.appendChild(weatherDisplay)
    card.appendChild(humidityDisplay)
    card.appendChild(descrptionDisplay)
    card.appendChild(emojiDisplay)
}

function getWeatherEmoji(weatherID){
    switch(true){
        case (weatherID >=200 && weatherID <300):
            return "⛈️";
        case (weatherID >=300 && weatherID <400):
            return "🌧️";
        case (weatherID >=500 && weatherID <600):
            return "☁️";
        case (weatherID >=600 && weatherID <700):
            return "🌨️";
        case (weatherID >=700 && weatherID <800):
            return "🌫️";
        case (weatherID === 800):
            return "☀️";
        case (weatherID >= 801 && weatherID <810):
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(messsage){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = messsage;
    errorDisplay.classList.add("errorDisplay")
    console.log(messsage)

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
