import { getBookings, getVenues, getBands} from "./database.js";

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

const findVenue = (bookings) => {
    let theVenues = ""

    for (const venue of venues) {
        if(venue.id === bookings.venueId){
            theVenues += venue.name
        }
    }
    return theVenues
}

const findBand = (bookings) => {
    let theBands = ""

    for (const band of bands) {
        if(band.id === bookings.bandId){
            theBands += band.name
        }
        
    }
    return theBands
}

export const displayBookings = () => {
    let bookingsHTML = `<h1>Bookings</h1>`
    bookingsHTML += "<ul>"

    for (const booking of bookings) {
        const theVenue = findVenue(booking)
        const theBand = findBand(booking)
        bookingsHTML += `<li data-type="bookings" data-bandId=${booking.bandId}>${theBand} is playing at ${theVenue} on ${new Date(booking.dateOfBooking).toLocaleDateString()}</li>`
        
    }
    bookingsHTML += "</ul>"
    return bookingsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.dataset.type === "bookings"){
            const bandId = itemClicked.dataset.bandid
            let bandName = ""
            let bandGenre = ""
            let memberCount = ""
            let yearFormed = ""

            for (const band of bands) {
                if(parseInt(bandId) === band.id){
                    
                        bandName = band.name
                        bandGenre = band.genre
                        memberCount = band.numOfMembers
                        yearFormed = band.yearFormed
                        
                      
                        
                        
                        
                    }
                   
                }
                window.alert(`${bandName}\n ${bandGenre}\n ${yearFormed}\n ${memberCount}`)
            }
        }
    
)