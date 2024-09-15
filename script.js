const x = document.getElementById("demo").value;
const w = document.getElementById("submit");

function getLocation() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
    x = "Geolocation is not supported by this browser.";
    }
    setTimeout('', 2000);
    w.click();
}

function showPosition(position) {
    x = "You live at Latitude: " + position.coords.latitude + 
    "   Longitude: " + position.coords.longitude;
}
