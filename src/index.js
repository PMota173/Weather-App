import "./styles.css"

import getConditions from "./getConditions.js"
import handleConditions from "./handleConditions.js"
import getBackgroundGif from "./getBackgroundGIF.js"

const conditions = getConditions('new jersey')

conditions.then(data => {
    const weather = handleConditions(data)
})



