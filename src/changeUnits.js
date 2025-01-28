import getConditions from './getConditions.js'
import handleConditions from './handleConditions.js'
import { changeUI } from './changeUI.js'
import getBackgroundGif from './getBackgroundGIF.js'

export default function changeUnits() {
    const metricButton = document.querySelector('.metric-btn')
    const usButton = document.querySelector('.us-btn')
    

    metricButton.addEventListener('click', () => {
        const location = document.querySelector('.city-name').textContent
        const conditions = getConditions(location)
        conditions.then(data => {
            const weather = handleConditions(data, 'metric')
            changeUI(weather, 'metric')
            getBackgroundGif(weather)
        })
        metricButton.classList.add('selected')
        usButton.classList.remove('selected')
    })

    usButton.addEventListener('click', () => {
        const location = document.querySelector('.city-name').textContent
        const conditions = getConditions(location, 'us')
        conditions.then(data => {
            const weather = handleConditions(data, 'us')
            changeUI(weather, 'us')
            getBackgroundGif(weather)
        })
        usButton.classList.add('selected')
        metricButton.classList.remove('selected')
    })
}
