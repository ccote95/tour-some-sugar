const database = {
    bands:[
        {
            id:1,
            name: "Trauma illinois",
            genre: "Jam Band",
            numOfMembers: 4,
            yearFormed: 2000
        },
        {
            id:2,
            name: "Maestro Murder",
            genre: "EDM",
            numOfMembers: 3,
            yearFormed: 2010
        },
        {
            id:3,
            name: "Saving Escape",
            genre: "Metal",
            numOfMembers: 5,
            yearFormed: 2005
        },
        {
            id:4,
            name: "The Kilograms",
            genre: "Classic",
            numOfMembers: 4,
            yearFormed: 2015
        },
        {
            id:5,
            name: "Catlea",
            genre: "Pop",
            numOfMembers: 1,
            yearFormed: 2018
        },
        {
            id:6,
            name: "New Moons",
            genre: "R&B",
            numOfMembers: 6,
            yearFormed: 2020
        },
    ],
    venues:[
        {
            id:1,
            name: "Bogarts",
            address: "245 Vine st. Cincinnatti, OH 458908",
            sqFootage: 4000,
            maxCapacity: 200

        },
        {
            id:2,
            name: "Thompson House",
            address: "2 Apple st. Cincinnatti, OH 458958",
            sqFootage: 2500,
            maxCapacity: 100

        },
        {
            id:3,
            name: "Mad Frog",
            address: "20 Clifton ave. Cincinnatti, OH 458920",
            sqFootage: 6000,
            maxCapacity: 300

        },
        {
            id:4,
            name: "Taft Theater",
            address: "100 West Vine ave. Cincinnatti, OH 458975",
            sqFootage: 10000,
            maxCapacity: 600

        },
    ],
    bookings:[
        {
            id:1,
            bandId: 1,
            venueId: 1,
            dateOfBooking: 12/9/2023
        },
        {
            id:2,
            bandId: 3,
            venueId: 2,
            dateOfBooking: 1/10/2024
        },
        {
            id:3,
            bandId: 2,
            venueId: 3,
            dateOfBooking: 2/22/2023
        },
        {
            id:4,
            bandId: 4,
            venueId: 4,
            dateOfBooking: 10/23/2023
        },
        {
            id:5,
            bandId: 5,
            venueId: 1,
            dateOfBooking: 3/13/2023
        },
        {
            id:6,
            bandId: 1,
            venueId: 2,
            dateOfBooking: 5/26/2023
        },
        {
            id:7,
            bandId: 6,
            venueId: 3,
            dateOfBooking: 12/9/2023
        }
    ]
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))

}

export const getBookings = () => {
    return database.bookings.map (booking => ({...booking}))
}