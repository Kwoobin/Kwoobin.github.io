function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
console.log("You live it", lat, lng);
}
function onGeoError() {
    alert("Can't find you. No Weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);