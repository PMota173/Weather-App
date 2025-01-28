import "./styles.css"

import getConditions from "./getConditions.js"
import handleConditions from "./handleConditions.js"
import getBackgroundGif from "./getBackgroundGIF.js"
import { changeUI } from "./changeUI.js"
import changeUnits from "./changeUnits.js"

// get information from default location
getConditions('bat cave')
    .then(data => {
        const weather = handleConditions(data)
        changeUI(weather)
        getBackgroundGif(weather)
    })
    .catch(error => {
        console.error('Initial load error:', error)
    })

// add event listener to search form to get conditions for city
const searchForm = document.querySelector('.search-form')
searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputField = document.querySelector('.search-input')
    const city = inputField.value

    try {
        inputField.disabled = true
        searchForm.disabled = true
        const conditions = getConditions(city)
        const selectedUit = document.querySelector('.selected').textContent.toLowerCase()
        
        conditions.then(data => {
            try {
                if (selectedUit === 'metric') {
                    const weather = handleConditions(data, 'metric')
                    changeUI(weather, 'metric')
                    getBackgroundGif(weather)
                    inputField.value = ''
                }
                else {
                    const weather = handleConditions(data, 'us')
                    changeUI(weather, 'us')
                    getBackgroundGif(weather)
                    inputField.value = ''
                }
            } 
            catch (innerError) {
                console.error('Processing error:', innerError)
            }
        })
        .catch(error => {
            console.error('Fetch error:', error)
        })
    }
    catch (error) {
        console.error('There was a problem with your fetch operation:', error)
    }
    finally {
        inputField.disabled = false
        searchForm.disabled = false
    }
})

// add event listener to change units buttons
changeUnits()



