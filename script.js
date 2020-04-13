//DOM elements
const message = document.querySelector(".message");
const gameArea = document.querySelector(".gameArea");
const button = document.querySelector("button");

//Gobal variables
let inplay = false;
//Adding the eventListeners to the button 
button.addEventListener("click", () => {
    if (!inplay) {
        inplay = true;
        button.style.display = "none";
        start();
    }
})

function start() {

}