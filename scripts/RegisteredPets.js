import { getPets } from "./database.js"

const pets = getPets()

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("pet")) {
            const[,petId] = itemClicked.id.split("--")
            
            
              for (const petObject of pets) {

                if (petObject.id === parseInt(petId))        //petObject.city will be undifined pets have no city
                    window.alert(`${petObject.name} barks at you`)
              }  


        }
    }
    
)



export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        // petHTML += `<li>${pet.name}</li>` UPDATED
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>` 
    }

    petHTML += "</ul>"

    return petHTML
}

