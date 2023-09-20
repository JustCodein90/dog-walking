// UPDATED import { getWalkers } from "./database.js" to NEW OBJECT Cities
import { getCities } from "./database.js"

// UPDATED const walkers = getWalkers() 
const cities = getCities()

export const CityList = () => {
    let citiesHTML = "<ol>"
    
    // UPDATED 
    for (const currentCity of cities) {
        citiesHTML += `<li>${currentCity.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

