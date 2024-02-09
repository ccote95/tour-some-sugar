import { displayBookings } from "./bookings.js";
import { displayVenues } from "./venues.js";
import { displayBands } from "./bands.js";

const bookingContainer = document.querySelector(".current-bookings")
bookingContainer.innerHTML = displayBookings()

const venueContainer = document.querySelector(".venues")
venueContainer.innerHTML = displayVenues()

const bandContainer = document.querySelector(".bands")
bandContainer.innerHTML = displayBands()




























/* main.js:
responsible for invoking the functions

database.js:
storing the data as an array of objects
    functions needed:
    getBands() - return the bands
    getVenues() - return the venues
    getBookings() - return the bookings 

bands.js:
responsible for creating the html for the bands section
    functions needed:
    theBands()


venues.js:
responsible for creating the html for the venues section
    functions needed:
    theVenues()

bookings.js:
responsible for creating the html for the bookings section
    functions needed:
    theBookings()


whats needed for eventlisteners:
band ids, band names, venue ids, venue names booking ids,*/

