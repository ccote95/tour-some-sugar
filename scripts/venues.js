import { getVenues, getBands, getBookings } from "./database.js";

const venues = getVenues()


export const displayVenues = () => {
    let theVenueHTML = `<h1>Venues</h1>`
    theVenueHTML += "<ul>"

    for (const venue of venues) {
        theVenueHTML += `<li data-type="venues" data-id=${venue.id} data-name=${venue.name}>${venue.name}</li>`
        
        
    }
    theVenueHTML += "</ul>"
    return theVenueHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.dataset.type === "venues"){
            const venueId = itemClicked.dataset.id
            const venueName = itemClicked.dataset.name
            const bookings = getBookings()
            const bands = getBands()
            let bandName = []
            

            for (const booking of bookings) {
                if(parseInt(venueId) === booking.venueId){

                    for (const band of bands) {
                        if(band.id === booking.bandId){
                            bandName.push(band.name)
                        }
                        
                    }

                }
                
            }
            window.alert(`${venueName} currently has ${bandName.join(", ")}`)
        }
    }
)