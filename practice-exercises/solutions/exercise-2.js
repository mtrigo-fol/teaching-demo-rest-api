/*
    [ Exercise 2 ]
    
    Use the following API to print the name and date for 
        all Canadian Holidays for any given year
    
    https://date.nager.at/api/v2/publicholidays/2020/CA

    Hint: Similar to the IP example, but the data uses different format
        Test the API using Thunder Client (or another REST API Client)
*/

const API_URL = "https://date.nager.at/api/v2/publicholidays";

async function printHolidays(year) {
    const response = await fetch(`${API_URL}/${year}/CA`);
    if (!response.ok) {
        console.log(`Invalid input: ${year}`);
        return;
    }
    const data = await response.json();
    data.forEach(holiday => {
        console.log(`${holiday.date} is ${holiday.localName}`);
    });
}

printHolidays(2023);

// Once there's input, you need validation
// printHolidays(-1);
// printHolidays("potato");
