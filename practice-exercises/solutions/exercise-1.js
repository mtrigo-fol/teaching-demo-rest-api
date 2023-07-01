/*
    [ Exercise 1 ]
    
    Use the following API to print the name and date for
        all Canadian Holidays for 2020
    
    https://date.nager.at/api/v2/publicholidays/2020/CA

    Hint: Similar to the IP example, but the data uses different format
        Test the API using Thunder Client (or another REST API Client)
*/

const API_URL = "https://date.nager.at/api/v2/publicholidays/2020/CA";

async function printHolidays() {
    const response = await fetch(API_URL);
    const data = await response.json();
    data.forEach(holiday => {
        console.log(`${holiday.date} is ${holiday.localName}`);
    });
}

printHolidays();