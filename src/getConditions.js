export default async function getConditions(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=89CX4XLXHUPU4HNJG3RXKJ52X`);
    const conditions = await response.json()
    console.log(conditions)
}