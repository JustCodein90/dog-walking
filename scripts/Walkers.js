import { getWalkers } from "./database.js" // Missing a "s" should be getWalkers

const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li>${walker.name}</li>`
    }

    walkerHTML += "</ul>"

 return walkerHTML;
}

