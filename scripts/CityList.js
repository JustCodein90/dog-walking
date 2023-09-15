import { getWalkers } from "./database.js"

const walkers = getWalkers() // Missing as "s" imported function


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const walker of walkers) {
        citiesHTML += `<li>${currentWalker.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

