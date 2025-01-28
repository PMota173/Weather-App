import "./styles.css"

import getConditions from "./getConditions.js"
import handleConditions from "./handleConditions.js"
import getBackgroundGif from "./getBackgroundGIF.js"
import { changeUI } from "./changeUI.js"
import changeUnits from "./changeUnits.js"

// Initial load
getConditions('bat cave')
    .then(data => {
        const weather = handleConditions(data, 'us')
        changeUI(weather)
        getBackgroundGif(weather)
    })
    .catch(error => {
        console.error('Initial load error:', error)
    })

// Add event listener to search form
const searchForm = document.querySelector('.search-form')
searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputField = document.querySelector('.search-input')
    const city = inputField.value

    // Error handling for the fetch operation
    try {
        // Disable the input field and search form
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
            // Catch any errors that occur during the processing of the data
            catch (innerError) {
                console.error('Processing error:', innerError)
            }
        })
        // Catch any errors that occur during the fetch operation
        .catch(error => {
            console.error('Fetch error:', error)
        })
    }
    catch (error) {
        console.error('There was a problem with your fetch operation:', error)
    }
    finally {
        // Enable the input field and search form
        inputField.disabled = false
        searchForm.disabled = false
    }
})

changeUnits()



