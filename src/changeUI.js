export function changeUI(weather) {

    const cityName = document.querySelector('.city-name')
    const temp = document.querySelector('.temperature')
    const feelsLike = document.querySelector('.feels-like')
    const humidity = document.querySelector('.humidity')
    const windSpeed = document.querySelector('.wind-speed')
    const preciptationProb = document.querySelector('.preciptation-prob')
    const currentConditions = document.querySelector('.current-conditions')
    const description = document.querySelector('.description')

    cityName.textContent = weather.cityName
    temp.textContent = `${weather.temp}°`
    feelsLike.textContent = `${weather.feelsLike}°`
    humidity.textContent = `${weather.humidity}%`
    windSpeed.textContent = `${weather.windSpeed} km/h`
    preciptationProb.textContent = `${weather.preciptationProb}%`
    currentConditions.textContent = weather.currentConditions
    description.textContent = weather.description


}