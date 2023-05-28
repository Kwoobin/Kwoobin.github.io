const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const TODOS_KEY = "toDos";
const savedusername = localStorage.getItem(USERNAME_KEY);

let toDos = [];

function realTimeClock() {
    const dateclock = new Date();
    const Hours = String(dateclock.getHours()).padStart(2, "0");
    const Minutes = String(dateclock.getMinutes()).padStart(2, "0");
    const Seconds = String(dateclock.getSeconds()).padStart(2, "0");
    const date = String(dateclock.getDate()).padStart(2, "0");
    const Month = String(dateclock.getMonth()).padStart(2, "0");
    const year = dateclock.getFullYear();
    document.querySelector("#clock").innerText = (`${Hours}:${Minutes}:${Seconds}`);
    document.querySelector("#today").innerText = (`${year}-${Month}-${date}`);
}
realTimeClock();
setInterval(realTimeClock, 1000);


function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    const savedusername = localStorage.getItem(USERNAME_KEY);
    paintgreetings(savedusername);
}

function paintgreetings(username) {
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    toDoList.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

if (savedusername !== null){
    toDoList.classList.remove(HIDDEN_CLASSNAME);
    paintgreetings(savedusername);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const tr = event.target.parentElement.parentElement;
    tr.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(tr.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("tr");
    li.id = newTodo.id;
    const content = document.createElement("td");
    content.innerText = newTodo.text;
    const btn_area = document.createElement("td");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(content);
    li.appendChild(btn_area);
    toDoList.appendChild(li);
    btn_area.appendChild(button);
}

function handleToDoSumbit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSumbit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage=`url(vanilajs/img/${chosenImage})`;


const API_KEY = "7aba347704cbf30687b814be932fbf75";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;;
fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
.then((response) => response.json())
.then(data => {
    const weather = document.querySelector("#weather span:last-child");
    const city = document.querySelector("#weather span:first-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
});

}
function onGeoError() {
    alert("Can't find you. No Weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);