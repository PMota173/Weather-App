export function changeUI(weather, backgroundGif, metricSystem) {

   
    const cityName = document.querySelector('.city-name')
    const temp = document.querySelector('.temperature')
    const feelsLike = document.querySelector('.feels-like')
    const humidity = document.querySelector('.humidity')
    const windSpeed = document.querySelector('.wind-speed')
    const preciptationProb = document.querySelector('.preciptation-prob')
    const currentConditions = document.querySelector('.current-conditions')
    const description = document.querySelector('.description')

    if (metricSystem === 'metric') {
        cityName.textContent = weather.cityName
        temp.textContent = `${weather.temp}°C`
        feelsLike.textContent = `${weather.feelsLike}°C`
        humidity.textContent = `${weather.humidity}%`
        windSpeed.textContent = `${weather.windSpeed} km/h`
        preciptationProb.textContent = `${weather.preciptationProb}%`
        currentConditions.textContent = weather.currentConditions
        description.textContent = weather.description
    }
    else {
        cityName.textContent = weather.cityName
        temp.textContent = `${weather.temp}°F`
        feelsLike.textContent = `${weather.feelsLike}°F`
        humidity.textContent = `${weather.humidity}%`
        windSpeed.textContent = `${weather.windSpeed} mph`
        preciptationProb.textContent = `${weather.preciptationProb}%`
        currentConditions.textContent = weather.currentConditions
        description.textContent = weather.description
    }
}