export default function handleConditions(data, usOrMetric) {
 
    // variables that doesn't need to be converted
    const cityName = data.resolvedAddress
    const preciptationProb = data.currentConditions.precipprob
    const currentConditions = data.currentConditions.conditions
    const description = data.description
    const humidity = data.currentConditions.humidity
    
    // variables that need to be converted  
    const windSpeedInMph = (data.currentConditions.windspeed).toFixed(2)
    const windSpeedInKm = (windSpeedInMph * 1.60934).toFixed(2)
    
    const windSpeed = usOrMetric === 'us' ? +windSpeedInMph : +windSpeedInKm
    
    const tempInF = (data.currentConditions.temp).toFixed(2)
    const feelsLikeInF = (data.currentConditions.feelslike).toFixed(2)
    const tempInC = (((tempInF - 32) / 9 ) * 5).toFixed(2)
    const feelsLikeInC = (((feelsLikeInF - 32) / 9 ) * 5).toFixed(2)

    const temp = usOrMetric === 'us' ? +tempInF : +tempInC
    const feelsLike = usOrMetric === 'us' ? +feelsLikeInF : +feelsLikeInC

    console.log(currentConditions)


    return {
        cityName,
        temp,
        feelsLike,
        humidity,
        windSpeed,
        preciptationProb,
        currentConditions,
        description
    }
}
