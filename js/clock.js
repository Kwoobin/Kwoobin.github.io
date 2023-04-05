const clock = document.querySelector("h2#clock");
const sg = document.querySelector("h3#sg");
const date = new Date();

function getsg() {
    const FullYear = date.getFullYear();
    const Month = String(date.getMonth()).padStart(2, "0");
    sg.innerText = (`${FullYear}.${Month}`)
}

function getClock() {
    
    const Hours = String(date.getHours()).padStart(2, "0");
    const Minutes = String(date.getMinutes()).padStart(2, "0");
    const Seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${Hours}:${Minutes}:${Seconds}`);
}
getsg();
getClock();
setInterval(getClock, 1000);