export default function getBackgroundGIF(weather) {
    const body = document.querySelector('body')
    let gifURL = ''
    let conditions = ''

    const conditionsNotFormatted = weather.currentConditions
    if (conditionsNotFormatted.includes(',')) {
        conditions = conditionsNotFormatted.slice(0, conditionsNotFormatted.indexOf(', '))
    }
    else {
        conditions = conditionsNotFormatted
    }

    // Set the gifURL based on the weather conditions
    switch (conditions) {
        case 'Clear':
            gifURL = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXRkcG9paml4cHRybzhxNmhyZXpmb204bmlvc3JsNjcxaG43d2l0diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u01ioCe6G8URG/giphy.gif'
            break
        
        case 'Partially cloudy':
            gifURL = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3A2MG9vcmN3OTY2dGhveXJncmo5dm9lenRuMXp5ZnozNnlwaDJjMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CafqXRlBVvEqMchF1m/giphy.gif'
            break
        
        case 'Cloudy':
            gifURL = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3A2MG9vcmN3OTY2dGhveXJncmo5dm9lenRuMXp5ZnozNnlwaDJjMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CafqXRlBVvEqMchF1m/giphy.gif'
        break

        case 'Overcast':
            gifURL = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2FkNmJkMnpiYjJ6ZnFiYmM0NjgxNDI0ODM4amxhdW1yaDdhcjh5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9GEy7M9m8L9DCiwo/giphy.gif'
            break

        case 'Rain':
            gifURL = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTl4a2c3MzV6N3NwbGQ1bjFlYTE0czgyeG9qZDV0aGlsN3NwNzlxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tnPxFTth7qoDiw1rnm/giphy.gif'
            break

        case 'Snow':
            gifURL = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmdwOWFwYXpncHNtMTBiaXczaTF5dnJ0ZWVlYzJ2OWVvOWY0NWZlcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14wT2CxmGHbdvO/giphy.gif'
            break

        case 'Thunderstorms':
            gifURL = 'https://media.giphy.com/media/3o6Zt7bXbZ3UW7wX7W/giphy.gif'
            break

        default:
            gifURL = 'https://media.giphy.com/media/3o6Zt7bXbZ3UW7wX7W/giphy.gif'
            break
    }

    body.style.backgroundImage = `url(${gifURL})`
    body.style.backgroundSize = 'cover'
    body.style.backgroundRepeat = 'no-repeat'
    body.style.backgroundAttachment = 'fixed'
    body.style.backgroundPosition = 'center'
}