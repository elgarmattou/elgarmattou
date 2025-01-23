import { Client, Databases } from "appwrite";

// Initialize client
const client = new Client();
client.setProject('6792707800399cc3fedb');
client.setEndpoint('http://localhost/v1'); // Change if your endpoint is different

let ipa = '';

// Fetch IP address
$.getJSON('https://api.ipify.org?format=json', function(data) {
    ipa = data.ip;
    console.log("IP Address:", ipa);
});

// Send message function
function sendmessage() {
    if (!ipa) {
        console.error("IP address not loaded yet.");
        return;
    }

    const message = document.getElementById('message').value;
    if (!message) {
        console.error("Message cannot be empty.");
        return;
    }

    const database = new Databases(client);

    try {
        const response = await database.createDocument('67927461002b5742f09b', '67927458001fe9d9fc90', {
            time: new Date(),
            sender: ipa,
            txt: message
        });
        console.log("Message sent:", response);
    } catch (error) {
        console.error("Error sending message:", error);
    }
}
