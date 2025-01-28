export default async function getConditions(location) {

    if (!location || typeof location !== 'string') {
        throw new Error('Invalid location parameter');
    }

    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=89CX4XLXHUPU4HNJG3RXKJ52X`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json()
    } 
    catch (error) {
        console.error('There was a problem with your fetch operation:', error)
        throw error
    }
}