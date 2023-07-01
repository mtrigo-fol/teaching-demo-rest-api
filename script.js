const IP_API_URL = "https://api.ipify.org?format=json";

async function whatsMyIP() {    
    const response = await fetch(IP_API_URL);
    const data = await response.json();
    console.log(`Your public IP is ${data.ip}`);
}

whatsMyIP();