const IP_API_URL = "https://api.ipify.org?format=json";

async function whatsMyIP() {
    console.log("The async function has started"); // 2
    const response = await fetch(IP_API_URL);
    console.log("The fetch we waited for is now done!"); // 4
    const data = await response.json();
    console.log(`Your public IP is ${data.ip}`);
}

console.log("We're about to call the async function"); // 1
whatsMyIP();
console.log("Code execution continues after async call"); // 3