import { getBands, getVenues, getBookings } from "./database.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

export const displayBands = () => {
    let theBandsHTML = `<h1>Bands</h1>`
    theBandsHTML += "<ul>"

    for (const band of bands) {
        theBandsHTML += `<li data-name="${band.name}" data-type="bands" data-id=${band.id}>${band.name}</li>`
        
    }
    theBandsHTML += "</ul>"
    return theBandsHTML
}



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.dataset.type === "bands"){
            const bandId = itemClicked.dataset.id
            const bandName = itemClicked.dataset.name
            let venueName = []
          
            for (const booking of bookings) {
                if(parseInt(bandId) === booking.bandId){

                    for (const venue of venues) {
                        if(venue.id === booking.venueId){
                            venueName.push(venue.name)
                            
                            
                        }
                        
                    }
                }
                
            }
            
            window.alert(`${bandName} is playing at ${venueName.join(", ")}`)
        }
    }
)