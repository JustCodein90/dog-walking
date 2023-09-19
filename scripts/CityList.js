import { getWalkers } from "./database.js"

const walkers = getWalkers() // Missing as "s" imported function


export const CityList = () => {
    let citiesHTML = "<ol>"
    
    // changed walker to currentWalker
    for (const currentWalker of walkers) {
        citiesHTML += `<li>${currentWalker.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

