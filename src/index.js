import "./styles.css"

import getConditions from "./getConditions.js"
import handleConditions from "./handleConditions.js"
import getBackgroundGif from "./getBackgroundGIF.js"
import { changeUI } from "./changeUI.js"
import changeUnits from "./changeUnits.js"

// get information from default location
const conditions = getConditions('bat cave')
conditions.then(data => {
    const weather = handleConditions(data)
    changeUI(weather)
    getBackgroundGif(weather)
})

// add event listener to search form to get conditions for city
const searchForm = document.querySelector('.search-form')
searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputField = document.querySelector('.search-input')
    const city = inputField.value
    const conditions = getConditions(city)
    const selectedUit = document.querySelector('.selected').textContent.toLowerCase()
    
    if (selectedUit == '°c') {
        conditions.then(data => {
            const weather = handleConditions(data, 'metric')
            changeUI(weather, 'metric')
            getBackgroundGif(weather)
            inputField.value = ''
        })
    }
    else {
        conditions.then(data => {
            const weather = handleConditions(data, 'us')
            changeUI(weather, 'us')
            getBackgroundGif(weather)
            inputField.value = ''
        })
    }
})

// add event listener to change units buttons
changeUnits()



